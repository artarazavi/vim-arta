import React from 'react';
import SideBar from "../../containers/SideBar/SideBar";
import Border from '../../containers/Border/Border';
import MidBorder from '../../containers/MidBorder/MidBorder';
import { Layout } from './Layout';
import Title from "../Title/Title"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from 'styled-components';

const Styles = styled.div`
            .page-layout{
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
                    display: inline-block;
                    float: left;
                    font-size: 50px;
                    color: #B7E88D;
                    font-family: 'Roboto Mono', monospace;
                    margin-top: 18px;
                    margin-right: 15px;
                }
            }
        `;

export const PageLayout = (props) => (
    <Styles>
        <div className="page-layout">
            <div className="user-input"><h1>arta:~$ </h1></div>
            <Title location={props.location} />
            <Row>
                <Col xs={2} md={2} className="sidebar-container">
                    <SideBar />
                </Col>
                <div className="border-container">
                    <Border />
                </div>
                <Col xs={8} md={6} className="route-container">
                    <Layout className="router-layout">
                        {props.children}
                    </Layout>
                </Col>
                <Col xs={1} md={3} className="mid-container">
                    <MidBorder />
                </Col>
            </Row>
        </div>
    </Styles>
)
