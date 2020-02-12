import React, { Component } from 'react';
import styled from 'styled-components';
import 'react-typist/dist/Typist.css';
import  PageLayout  from '../Layout/PageLayout';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
        this.state = {
            width: window.innerWidth
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
        let wrapperStyle = isMobile? "wrapper-mobile":"wrapper-web";
        const Styles = styled.div`
            font-family: 'Roboto Mono', monospace;
            line-height: 13px;
            font-size: 14px;
            color: #B7E88D;
            width: 100%;
            line-height: 14px;
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
                color: #CC3E74;
            }
            .third{
                width: 40%;
                float: left;
            }
            .wrapper-web{
                margin-left: 150px;
            }
            .wrapper-mobile{
                margin-left: 30px;
            }
        `;

        return (
            <PageLayout>
                <Styles>
                    <div>
                        <p className="line-item">VIM - Arta IMproved</p>
                        <br />
                        <p className="line-item">version 1.1</p>
                        <p className="line-item">by Arta Razavi</p>
                        <p className="line-item">Vim is open source and freely distributable</p>
                        <br />
                        <p className="line-item">Welcome to my website!</p>
                        <br />
                        <div className={wrapperStyle}>
                            <div className="first">type</div>
                            <div className="second">{"<up>"}</div>
                            <div className="third">to go up in side menu</div>
                            <div className="first">type</div>
                            <div className="second">{"<down>"}</div>
                            <div className="third">to go down in side menu</div>
                            <div className="first">type</div>
                            <div className="second">{"<?>"}</div>
                            <div className="third">to get back to this page</div>
                        </div>
                    </div>
                </Styles>
            </PageLayout>
        );
    }

}

export default Home;