import React, { Component } from 'react';
import SideBar from "../../containers/SideBar/SideBar";
import Border from '../../containers/Border/Border';
import MidBorder from '../../containers/MidBorder/MidBorder';
import { Layout } from './Layout';
import Title from "../Title/Title"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from 'styled-components';

class MobileLayout extends Component {

    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            visible: false
        };
    }

    toggleMenu() {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        const Styles = styled.div`
            .page-layout-mobile{
                padding-right: 5px;
                padding-left: 5px;
                .route-container{
                    margin-left: 5px;
                    margin-right: 12px;
                    padding-right: 0px;
                }
                .mid-container{
                    marigin-right: 0px;
                    padding : 0px;
                }
                .user-input{
                    font-size: 30px;
                    color: #B7E88D;
                    font-family: 'Roboto Mono', monospace;
                    margin-right: 15px;
                    .user-text{
                        margin-bottom:0px;
                    }
                }
                .border-container{
                    margin-left: 10px;
                }
                .toggle-menu{
                    margin-bottom: 10px;
                    border-top: 1px dashed #888888;
                    border-bottom: 1px dashed #888888;
                }
                }
                .burger{
                    float:right;
                    .icon{
                        margin-top: 0px;
                        color: #888888;
                        font-size: 30px;
                        .menu-text{
                        color: #888888;
                        font-size: 20px;
                    }
                }
            }
        `;

        return (
            <Styles>
                <div className="page-layout-mobile">
                    <div className="user-input">
                        <p className="user-text">arta:~$ </p>
                        <div className="burger">
                            <span className="icon">
                                <i className="fa fa-bars"
                                    onClick={this.toggleMenu} />
                            </span>
                        </div>
                    </div>
                    <Title location={this.props.location}
                        mobile={true} />
                    {this.state.visible?(
                        <div className="toggle-menu">
                            <SideBar
                            mobile={true}/>
                        </div>
                    ):(
                        null                       
                    )}

                    <Row>
                        <div className="border-container">
                            <Border count={70} />
                        </div>
                        <Col xs={9} className="route-container">
                            <Layout className="router-layout">
                                {this.props.children}
                            </Layout>
                        </Col>
                        <Col xs={1} className="mid-container">
                            <MidBorder mobile={true} />
                        </Col>
                    </Row>
                </div>
            </Styles>
        );
    }

}

export default MobileLayout;