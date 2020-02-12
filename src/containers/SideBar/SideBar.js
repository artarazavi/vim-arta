import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import SideBarItem from './SideBarItem/SideBarItem';
import SideBarDrop from './SideBarDrop/SideBarDrop';
import styled from 'styled-components';

const routes = ['back', '/', '/experience', '/education', '/admsg', '/awards', '/workshops', '/info'];

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.moveFocus = this.moveFocus.bind(this);
        this.moveFocusMulti = this.moveFocusMulti.bind(this);
        this.getNext = this.getNext.bind(this);
        this.getPrev = this.getPrev.bind(this);
    }
    
    getNext(active) {
        const current = routes.indexOf(active.pathname);
        if(current === routes.length-1){
            this.props.history.push(routes[1]);
        }
        else{
            this.props.history.push(routes[current + 1]);
        }
    }

    getPrev(active) {
        const current = routes.indexOf(active.pathname);
        if (current === 1) {
            this.props.history.push(routes[routes.length - 1]);
        }
        else {
            this.props.history.push(routes[current -1]);
        }
    }

    moveFocus(e) {
        const active = this.props.location;
        if (e.keyCode === 40) {
            e.preventDefault();
            this.getNext(active);
        }
        if (e.keyCode === 38) {
            e.preventDefault();
            this.getPrev(active);
        }
    }

    moveFocusMulti(e) {
        if (e.key === "?") {
            this.props.history.push('/');
        }
    }
    
    render() {
        const Styles = styled.div`
            .ui.menu.fixed.side-nav {
                overflow-y: auto;
                padding-right:1px;
                .menu-text{
                    text-align: left;
                    font-family: 'Roboto Mono', monospace;
                    font-size: 13px;
                }
                .help-text{
                    color: #FDFA95;
                    margin-bottom: 12px;
                }
                .dir-text{
                    color: #9780F3;
                    margin-bottom: 0px;
                }
            }
            .mobile-view{
                padding-top:10px;
                padding-bottom: 15px;
            }
            .web-view{
                padding-bottom: 700px;
            }
        `;

        let helpText= "\" Press ? for help" 
        let dirText ="</arta/dev/root"

        document.onkeydown = this.moveFocus;
        document.onkeypress = this.moveFocusMulti;
        let menuStyle = this.props.mobile ? "side-nav mobile-view" : "side-nav web-view";
        return (
            <Styles>
                <Menu borderless vertical stackable fixed='left' className={menuStyle}>
                    <p className=" menu-text help-text">{helpText}</p>
                    <SideBarItem path='back' label='.. (up a dir)' 
                        location={this.props.location} 
                        history={this.props.history}/>
                    <p className="menu-text dir-text">{dirText}</p>
                    <SideBarItem path='/' 
                        label='Help' 
                        location = {this.props.location}/>
                    <SideBarItem path='/experience' 
                        label='Experience' 
                        location={this.props.location} />
                    <SideBarItem path='/education' 
                        label='Education' 
                        location={this.props.location} />
                    <SideBarDrop 
                        label='Projects'
                        location={this.props.location}>
                        <SideBarItem path='/admsg'
                            label='Ad Messaging'
                            location={this.props.location} />
                    </SideBarDrop>
                    <SideBarItem path='/awards' 
                        label='Awards' 
                        location={this.props.location} />
                    <SideBarItem path='/workshops' 
                        label='Workshops' 
                        location={this.props.location} />
                    <SideBarItem path='/info' 
                        label='Info' 
                        location={this.props.location} />
                </Menu>
            </Styles>
        );
    }
}

export default withRouter(SideBar);