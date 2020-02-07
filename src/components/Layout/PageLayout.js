import React from 'react';
import { Container } from 'react-bootstrap';
import SideBar from "../../containers/SideBar/SideBar";
import Border from '../Border/Border';
import MidBorder from '../MidBorder/MidBorder';
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
                    margin-left: 12px;
                    margin-right: 12px;
                    padding-right: 0px;
                }
                .mid-container{
                    marigin-right: 0px;
                    padding : 0px;
                }
                
            }
        `;

export const PageLayout = (props) => (
    <Styles>
        <div className="page-layout">
            <Title location={props.location} />
            <Row>
                <Col xs={1} md={2} className="sidebar-container">
                    <SideBar />
                </Col>
                <div className="border-container">
                    <Border />
                </div>
                <Col xs={10} md={6} className="route-container">
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
