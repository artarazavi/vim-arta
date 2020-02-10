import React, { Component } from 'react';
import styled from 'styled-components';

class AwardsItem extends Component {

    render() {
        const Styles = styled.div`
            .awards-item{
                font-family: 'Roboto Mono', monospace;
                line-height: 13px;
                font-size: 12px;
                width: 90%;
                .title{
                    font-size: 14px;
                    color: #4EB6BC;
                    margin-bottom: 5px;
                }
                .place{
                    color: #CC3E74;
                    margin-bottom: 2px;
                }
                .text{
                    color: #FFD7AF;
                    margin-left: 4px;
                    margin-bottom: 3px;
                }
            }
            .list-bullet{
            width: 90%;
            font-family: 'Roboto Mono', monospace;
            font-size: 12px;
            line-height: 13px;
            margin-left: 7px;
            color: #9780F3;
            .bullet-text{
                margin: 4px;
            }
        }
        `;

        let bullets = [];
        for (let i = 0; i < this.props.bullets.length; i++) {
            bullets.push(
                <React.Fragment key={i}>
                    <p className="bullet-text">{this.props.bullets[i]}</p>
                </React.Fragment>
            );
        }

        return (
            <Styles>
                <div className="awards-item">
                    <p className="title">{this.props.title}</p>
                    <p className="place">{this.props.place}</p>
                    <p className="text">{this.props.text}</p> 
                </div>
                <div className="list-bullet">
                    {bullets}
                </div>
            </Styles>
        );
    }

}

export default AwardsItem;