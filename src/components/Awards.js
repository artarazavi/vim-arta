import React, { Component } from 'react';
import styled from 'styled-components';
import { PageLayout } from './Layout/PageLayout';

class Awards extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const Styles = styled.div`
        
        `;

        return (
            <PageLayout>
                <Styles>
                    <h1>Awards</h1>
                </Styles>
            </PageLayout>
        );
    }

}

export default Awards;