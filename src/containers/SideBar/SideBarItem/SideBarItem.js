import React, { Component } from 'react';
import {Menu } from "semantic-ui-react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

class SideBarItem extends Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        const highlight = this.shouldBeHighlighted() ? 'highlight-item' : null;
        const faArrowIcon = highlight ? "fa fa-angle-down" : "fa fa-angle-right";
        const faFolderIcon = highlight ? "fa fa-folder-open" : "fa fa-folder";
        const goingBack = this.props.path === 'back';
        const Styles = styled.div`
        .navlink{
            text-decoration: none;
        }
        .sidebar-item {
        span {
            font-family: 'Roboto Mono', monospace;
            font-size: 12px;
            color: #79B1FF;
            i{
            margin-right: 20px;
            color: #888888;
            }
        }
        &.highlight-item {
            background: rgba(0,0,0,.5);
            opacity: 0.5;
            span {
            font-weight: 600;
            }
            i{
            color: #888888;
            }
        }
        }
        .sidebar-item:hover {
            background: #727687;
        }
        .sidebar-item-alignment-container {
        display: flex;
        align-items: center;
        }
        `;

        return (
            <Styles>
                {goingBack? (
                    <Link className="navlink" onClick={this.goBack}>
                        <Menu.Item className='sidebar-item'>
                            <div className='sidebar-item-alignment-container'>
                                <span>{this.props.label}</span>
                            </div>
                        </Menu.Item>
                    </Link>
                ):(
                    <Link className="navlink" to={{ pathname: this.props.path }}>
                        <Menu.Item className={['sidebar-item', highlight].join(' ')}>
                            <div className='sidebar-item-alignment-container'>
                                <span><i className={faArrowIcon} /></span>
                                <span><i className={faFolderIcon} /></span>
                                <span>{this.props.label}</span>
                            </div>
                        </Menu.Item>
                    </Link>
                )
                }
                
            </Styles>
        );
    }

    shouldBeHighlighted() {
        const { pathname } = this.props.location;
        if (this.props.path === '/') {
            return pathname === this.props.path;
        }
        return pathname.includes(this.props.path);
    }
}

export default SideBarItem;