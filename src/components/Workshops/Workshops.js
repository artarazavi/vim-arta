import React, { Component } from 'react';
import styled from 'styled-components';
import  PageLayout  from "../Layout/PageLayout";
import WorkshopItem from "./WorkshopItem/WorkshopItem"

class Workshops extends Component {

    render() {
        const Styles = styled.div`
        
        `;
        let rMaterial=[
            { "link": "https://docs.google.com/document/d/1c9ZW_urrCkKohWiidCEatYVGjXwQiYcLZ6lNssQI_3w/edit?usp=sharing",
                "name": "Workshop with solutions"},
            {
                "link": "https://docs.google.com/document/d/1omIwsZwkPzyABVpWUR5xB_OfVLPtSCyI6Og0AII6C8g/edit?usp=sharing",
                "name": "Workshop without solutions"
            }
        ];

        let gMaterial = [
            {
                "link": "https://docs.google.com/document/d/1Lh8K2CieJXalAcjcM4OdJeR4PTpEocOL0VsYqtGcaFk/edit?usp=sharing",
                "name": "Workshop day 1"
            },
            {
                "link": "https://docs.google.com/document/d/1h_COHeC0QnCHgdKsDrtxWa4Oyf3dz8tzXCpE1nwZNyw/edit?usp=sharing",
                "name": "Workshop day 2"
            }
        ];

        return (
            <PageLayout>
                <Styles>
                    <WorkshopItem
                        title="Learn How to Reverse Engineer with Radare2"
                        link="https://www.cics.umass.edu/event/learn-how-reverse-engineer-radare2"
                        material={rMaterial}/>
                    <br/>
                    <WorkshopItem
                        title="Learn version control with GitKraken"
                        link="https://www.cics.umass.edu/content/fall-19-course-descriptions"
                        material={gMaterial} />
                </Styles>
            </PageLayout>
        );
    }

}

export default Workshops;