import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

class Help extends Component {
    
    render() {
        const Styles = styled.div`
            .help{
                color: white;
                font-family: 'Roboto Mono', monospace;
                font-size: 13px;
                line-height: 0px;
                .type-help{
                    font-size = 20px;
                    float: left;
                }
                .command-line{
                    padding-right: 5px;
                }
                
            }
        `;

        return (
            <Styles>
                <div className="help">
                    <p className="command-line type-help">arta:~$</p>
                    <Typist
                        avgTypingDelay={65}
                        startDelay={2000}
                        cursor={{
                            hideWhenDone: true,
                            element: '▍',
                            blink: true
                        }}
                    >
                        help
                    </Typist>
                </div>
            </Styles>
        );
    }

}

export default Help;