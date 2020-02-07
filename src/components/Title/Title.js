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
        console.log(this.props.location);
        let text = (this.props.location.pathname === "/") ? ("vim --cmd :help"): ("cat " + this.props.location.pathname.substring(1)); 

        const Styles = styled.div`
            .page-title{
                font-size: 50px;
                color: #B7E88D;
                font-family: 'Roboto Mono', monospace;
            }
        `;
        
        return (
            <Styles>
                <Typist
                    className="page-title"
                    avgTypingDelay={85}
                    startDelay={200}
                    cursor={{ hideWhenDone: false,
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