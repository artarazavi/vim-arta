import React, { Component } from 'react';
import styled from 'styled-components';
import { Menu } from "semantic-ui-react";

class SideBarDrop extends Component {

    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            visible: false
        };
    }

    toggleMenu(){
        this.setState({visible: !this.state.visible});
    }

    render() {
        let isVisible = this.state.visible || this.props.children.props.path === this.props.location.pathname;
        const faArrowIcon = this.state.visible ? "fa fa-angle-down" : "fa fa-angle-right";
        const faFolderIcon = this.state.visible ? "fa fa-folder-open" : "fa fa-folder";
        let items = this.props.children;
        const Styles = styled.div`
            .sidebar-item {
                span {
                    font-family: 'Roboto Mono', monospace;
                    font-size: 12px;
                    color: #B7E88D;
                    cursor: pointer;
                    i{
                        margin-right: 20px;
                        color: #888888;
                    }
                }
            }
            .sidebar-item-alignment-container {
                display: flex;
                align-items: center;
            }
            .drop-item{
                margin-left: 10px;
            }
        `;

        return (
            <Styles>
                <div onClick={this.toggleMenu}>
                    <>
                    <Menu.Item className='sidebar-item'>
                        <div className='sidebar-item-alignment-container'>
                            <span><i className={faArrowIcon} /></span>
                            <span><i className={faFolderIcon} /></span>
                            <span>{this.props.label}</span>
                        </div>
                    </Menu.Item>
                    </>
                    <div className="drop-item">
                        {isVisible ? (items):(null)}
                    </div>
                </div>
            </Styles>
        );
    }

}

export default SideBarDrop;