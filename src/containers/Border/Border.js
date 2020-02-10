import React, { Component } from 'react';
import styled from 'styled-components';

class Border extends Component {
    render() {
        const Styles = styled.div`
            .num-border{
                margin-top: 5px;
                .border-items{
                    padding-top: 1px;
                    font-family: 'Roboto Mono', monospace;
                    color: #4B5262;
                    line-height: 0px;
                    font-size: 12px;
                }
            }
        `;
        let array = [];
        for (let i = 0; i < 50; i++) {
            const item = i < 9 ? <p className="border-items" key={i}>| {i + 1}</p> : <p className="border-items" key={i}>|{i + 1}</p>;
            array.push(
                item
            );
        }
        return (
            <Styles>
                <div className="num-border"> 
                    {array}
                </div>
            </Styles>
        );
    }
}

export default Border;