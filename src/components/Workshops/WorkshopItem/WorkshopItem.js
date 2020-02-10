import React, { Component } from 'react';
import styled from 'styled-components';

class WorkshopItem extends Component {

    render() {
        const Styles = styled.div`
            .workshop-item{
                font-family: 'Roboto Mono', monospace;
                line-height: 13px;
                font-size: 12px;
                margin-left: 20px;
                width: 90%;
                .title{
                    font-size: 14px;
                    color: #9780F3;
                    margin-bottom: 5px;
                }
            }
            .material{
            width: 90%;
            margin-left: 20px;
            font-family: 'Roboto Mono', monospace;
            font-size: 12px;
            line-height: 13px;
            .bullet-text{
                color: #C87919;
                margin: 4px;
            }
        }
        `;

        let material = [];
        for (let i = 0; i < this.props.material.length; i++) {
            material.push(
                <React.Fragment key={i}>
                    <a href={this.props.material[i].link} target="_blank">
                        <p className="bullet-text">{this.props.material[i].name}</p>
                    </a>
                </React.Fragment>
            );
        }

        return (
            <Styles>
                <div className="workshop-item">
                    <a href={this.props.link} target="_blank">
                        <p className="title">{this.props.title}</p>
                    </a>
                </div>
                <div className="material">
                    {material}
                </div>
            </Styles>
        );
    }

}

export default WorkshopItem;