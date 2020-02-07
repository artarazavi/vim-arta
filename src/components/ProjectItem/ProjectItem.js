import React, { Component } from 'react';
import styled from 'styled-components';

class ProjectItem extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const Styles = styled.div`
            .project-item{
                font-family: 'Roboto Mono', monospace;
                line-height: 13px;
                font-size: 12px;
                margin-left: 20px;
                width: 90%;
                .title{
                    font-size: 14px;
                    color: #B7E88D;
                    margin-bottom: 5px;
                }
                .text{
                    color: #FFD7AF;
                    margin-left: 5px;
                }
            }
        `;

        return (
            <Styles>
                <div className="project-item">
                    <p className="title">{this.props.title}</p>
                    <p className="text">{this.props.text}</p>
                </div>
            </Styles>
        );
    }

}

export default ProjectItem;