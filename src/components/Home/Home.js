import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import Help from "./Help/Help"
import Content from "./Content/Content"
import { PageLayout } from '../Layout/PageLayout';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Styles = styled.div`
        `;

        return (
            <PageLayout>
                <Styles>
                    <Content/>
                </Styles>
            </PageLayout>
        );
    }

}

export default Home;