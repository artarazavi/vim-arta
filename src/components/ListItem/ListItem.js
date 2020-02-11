import React, { Component } from 'react';
import styled from 'styled-components';

class ListItem extends Component {
    render() {
        let bullets = [];
        for (let i = 0; i < this.props.text.length; i++) {
            bullets.push(
                <React.Fragment key={i}>
                    <p className="bullet-point"> - </p>
                    <p className="bullet-text">{this.props.text[i]}</p>
                </React.Fragment>
            );
        }
        const Styles = styled.div`
        .list-item{
            font-family: 'Roboto Mono', monospace;
            line-height: 11px;
            font-size: 12px;
            p{
                margin-bottom: 3px;
            }
            .item-left{
                width: 80%;
                float: left;
            }
            .item-right{
                width: 20%;
                float: right;
                text-align: right;
            }
            .name{
                color: #4EB6BC;
                font-size: 15px;
                width: 100%;
            }
            .role{
                color: #CC3E74;
                width: 100%;
            }
            .location{
                color: #9780F3;
                float: left; 
                width: 100%;
                  
            }
            .date{
                color: #C87919;
                float: left;
                width: 100%;
            }
        }
        .list-bullet{
            width: 90%;
            margin-left: 10px;
            font-family: 'Roboto Mono', monospace;
            font-size: 12px;
            line-height: 13px;
            .bullet-point{
                color: #B7E88D;
                float:left;
                font-weight: 900;
                margin: 0px;
            }
            .bullet-text{
                color: #FFD7AF;
                margin: 4px;
            }
        }
        `;

        return (
            <Styles>
                <div className="list-item">
                    <div className="item-left">
                        <p className="name">{this.props.name}</p>
                        <p className="role">{this.props.role}</p>
                    </div>
                    <div className="item-right">
                        <p className="date">{this.props.date}</p>
                        <p className="location">{this.props.location}</p>
                    </div>
                </div>
                <div className="list-bullet">
                    {bullets}
                </div>
            </Styles>
        );
    }

}

export default ListItem;