import React, { Component } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';


class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Title: "
        };
    }


    render() {
        let path = this.props.menu ? "  menu" : this.props.location.pathname;
        let text = (path === "/") ? ("vim --cmd :help"): ("vim " + path.substring(1)); 
        let titleStyle = this.props.mobile? "page-title page-mobile" : "page-title page-web";

        const Styles = styled.div`
            .page-title{
                color: #FFD7AF;
                font-family: 'Roboto Mono', monospace;
            }
            .page-mobile{
                font-size: 30px;
            }
            .page-web{
                font-size: 50px;
            }
        `;
        
        return (
            <Styles>
                <Typist
                    className={titleStyle}
                    avgTypingDelay={85}
                    startDelay={200}
                    cursor={{ hideWhenDone: true,
                        element: '▍',
                        blink: true }}
                >
                    {text} 
                </Typist>
            </Styles>
        );
    }

}

export default withRouter(Title);