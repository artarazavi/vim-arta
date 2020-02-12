import React, { Component } from 'react';
import styled from 'styled-components';
import MobileLayout from './MobileLayout';
import WebLayout from './WebLayout';

class PageLayout extends Component {

    constructor(props) {
        super(props);
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
        this.state = {
            width: window.innerWidth,
            visible: false
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        const Styles = styled.div`
            
        `;

        return (
            <Styles>
                {isMobile ? (
                    <MobileLayout
                    children={this.props.children}/>
                ) : (
                    <WebLayout
                    children={this.props.children}/>
                )}
            </Styles>
        );
    }

}

export default PageLayout;
