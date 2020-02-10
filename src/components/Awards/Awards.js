import React, { Component } from 'react';
import styled from 'styled-components';
import { PageLayout } from "../Layout/PageLayout";
import AwardsItem from './AwardsItem/AwardsItem';

class Awards extends Component {

    render() {
        const Styles = styled.div`
        
        `;
        let textMC = "An IOS application focused on using facial recognition to match photos taken by users \
        against a database of missing children, to aid law enforcement in finding the children and getting \
        them home safely. Collaborated with an on-campus research team fighting child exploitation to build \
        application. Built usingIBM Watson Visual Recognition and Google Firebase.";

        let bulletsMC = ["1st Place - Innovation Challenge Minute Pitch", 
                        "Social Entrepreneurship Award Hack UMass 2018"];

        let textSH = "Extended the idea of social media to physical wearable devices with scannable RFID \
        tags allowing users to quickly exchange information in social situations. Users will be able to \
        exchange contact information as well as a fun graphic with each other through tapping their  \
        wearable devices together. ";

        let bulletsSH = ["Best Almost Hack"];

        let textBS = "For the strongest computer science undergraduates at the University of Massachusetts Amherst \
        the College of Information and Computer Sciences (CICS) offers the Bay State Program admitting students \
        into its Master's of Science in Computer Science degree program."
       
        let bulletsBS = ["50% tuition scholarship"];

        return (
            <PageLayout>
                <Styles>
                    <AwardsItem
                        title= "Find Missing Children"
                        place= "Hack UMass 2018 - University of Massachusetts Amherst"
                        text= {textMC}
                        bullets={bulletsMC}/>
                    <br/>
                    <AwardsItem
                        title="Social hardware"
                        place="Hack UMass 2019 - University of Massachusetts Amherst"
                        text={textSH}
                        bullets={bulletsSH} />
                    <br/>
                    <AwardsItem
                        title="Bay State Scholar"
                        place="University of Massachusetts Amherst"
                        text={textBS}
                        bullets={bulletsBS}/>
                </Styles>
            </PageLayout>
        );
    }

}

export default Awards;