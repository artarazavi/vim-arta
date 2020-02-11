import React, { Component } from 'react';
import styled from 'styled-components';

class ProjectItem extends Component {

    render() {
        const Styles = styled.div`
            .project-item{
                font-family: 'Roboto Mono', monospace;
                line-height: 13px;
                font-size: 12px;
                margin-left: 8px;
                width: 90%;
                .title{
                    font-size: 14px;
                    color: #B7E88D;
                    margin-bottom: 5px;
                }
                .text{
                    color: #FFD7AF;
                    margin-left: 5px;
                    margin-bottom: 3px;
                }
                .advisors{
                    margin-left: 5px;
                    color: #9780F3;
                }
            }
        `;

        return (
            <Styles>
                <div className="project-item">
                    <p className="title">{this.props.title}</p>
                    <p className="text">{this.props.text}</p>
                    <p className="advisors">{"Advisors: " + this.props.advisors}</p>
                </div>
            </Styles>
        );
    }

}

export default ProjectItem;