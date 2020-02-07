import React, { Component } from 'react';
import styled from 'styled-components';

class Content extends Component {
    render() {
        const StylesTop = styled.div`
            font-family: 'Roboto Mono', monospace;
            line-height: 13px;
            font-size: 14px;
            color: #B7E88D;
            width: 90%;
            line-height: 14px;
            padding-left: 30px;
            .hidden {
                display: none;
            }
            .line-item{
                text-align: center;
            }
            .first{
                width: 20%;
                float: left;
            }
            .second{
                width: 30%;
                float: left;
            }
            .third{
                width: 40%;
                float: left;
            }
            .wrapper{
                padding-left: 80px;
            }
        `;

        return (
            <StylesTop>
                <div>
                    <p className="line-item">VIM - Arta IMproved</p>
                    <br/>
                    <p className="line-item">version 1.1</p>
                    <p className="line-item">by Arta Razavi</p>
                    <p className="line-item">Vim is open source and freely distributable</p>
                    <br />
                    <p className="line-item">Welcome to my website!</p>
                    <br />
                    <div className="wrapper">
                        <div className="first">type</div>
                        <div className="second">{"<up>"}</div>
                        <div className="third">to go up in side menu</div>
                    </div>
                    <div className="wrapper">
                        <div className="first">type</div>
                        <div className="second">{"<down>"}</div>
                        <div className="third">to go down in side menu</div>
                    </div>
                    <div className="wrapper">
                        <div className="first">type</div>
                        <div className="second">{"<?>"}</div>
                        <div className="third">to get back to this page</div>
                    </div>
                </div>
            </StylesTop>
        );
    }

}

export default Content;