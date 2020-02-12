import React, { Component } from 'react';
import styled from 'styled-components';
import  PageLayout  from '../Layout/PageLayout';

class Info extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const Styles = styled.div`
            .personal-links{
                font-family: 'Roboto Mono', monospace;
                font-size: 13px;
                line-height: 16px;
                a{
                    text-decoration: none;
                }
                .github{
                    color: #B7E88D;
                    margin-bottom: 0px;
                }
                .icon{
                    float:left; 
                    margin-right: 5px;
                    color: #888888;
                }
                .linkedin{
                    color: #4EB6BC;
                }
            }
        `;

        return (
            <PageLayout>
                <Styles>
                    <div className="personal-links">
                        <a href="https://github.com/artarazavi"
                            target="_blank"
                            rel="noopener noreferrer">
                            <span className="icon">
                                <i className="fa fa-github" />
                            </span>
                            <p className="github">GitHub</p>
                        </a>
                        <a href="https://www.linkedin.com/in/arta-razavi/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <span className="icon">
                                <i className="fa fa-linkedin" />
                            </span>
                            <p className="linkedin">LinkedIn</p>
                        </a>
                    </div>
                </Styles>
            </PageLayout>
        );
    }

}

export default Info;