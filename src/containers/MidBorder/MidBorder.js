import React, { Component } from 'react';
import styled from 'styled-components';

class MidBorder extends Component {

    render() {
        const Styles = styled.div`
            .mid-border-right{
                border-right: 5px solid #4B5262;
                padding-bottom: 1180px;
            }
            .mid-border-left{
                border-left: 5px solid #4B5262;
                padding-bottom: 840px;
            }
            
        `;

        return (
            <Styles>
                {this.props.mobile ? (
                    <div className="mid-border-right"></div>
                ) : (
                    <div className="mid-border-left"></div>
                )}
            </Styles>
        );
    }

}

export default MidBorder;