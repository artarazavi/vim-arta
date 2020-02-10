import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import SideBarItem from './SideBarItem/SideBarItem';
import styled from 'styled-components';

const routes = ['back', '/', '/experience', '/education', '/awards', '/workshops'];

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
        margin-top: 10px;
        overflow-y: auto;
        padding-bottom: 700px;
        padding-right:1px;
        }
        `;

        document.onkeydown = this.moveFocus;
        document.onkeypress = this.moveFocusMulti;
        return (
            <Styles>
                <Menu borderless vertical stackable fixed='left' className='side-nav'>
                    <SideBarItem path='back' label='.. (up a dir)' location={this.props.location} history={this.props.history}/>
                    <SideBarItem path='/' label='Help/' location = {this.props.location}/>
                    <SideBarItem path='/experience' label='Experience/' location={this.props.location} />
                    <SideBarItem path='/education' label='Education/' location={this.props.location} />
                    <SideBarItem path='/awards' label='Awards/' location={this.props.location} />
                    <SideBarItem path='/workshops' label='Workshops/' location={this.props.location} />
                </Menu>
            </Styles>
        );
    }
}

export default withRouter(SideBar);