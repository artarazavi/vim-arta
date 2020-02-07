import React, { Component } from 'react';
import styled from 'styled-components';

class MidBorder extends Component {

    render() {
        const Styles = styled.div`
            border-left: 5px solid #4B5262;
            padding-bottom: 840px;
        `;

        return (
            <Styles>
                <div className="mid-border"></div>
            </Styles>
        );
    }

}

export default MidBorder;