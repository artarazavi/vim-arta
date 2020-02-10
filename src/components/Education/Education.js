import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import ProjectItem from './ProjectItem/ProjectItem';
import { PageLayout } from '../Layout/PageLayout';

class Education extends Component {
    render() {
        let textGrad = [
            "Bay State Scholar recipient",
            "Participated in three consecutive project development hackathons sponsored by companies like Google, Facebook, and Amazon."
        ];
        let textUgrad = [
            "Participated in two more consecutive hackathons.",
            "Payload lead for high altitude balloon launch project."
        ];
        let projectGrad = "Developed an Android messaging  application capable of bypassing country wide censorship campaigns. \
        The application leveraged the ubiquity of mobile advertisements to hide and transmit covert messages. Opposing countries \
        wishing to block this form of communication would have to block all forms of mobile advertising. Outgoing user messages \
        are encoded into advertising campaigns targeting the Ad-ID of the recipient. Incoming messages are extracted through a \
        local proxy monitoring mobile advertisement traffic. Built using a rooted Android device running LineageOS and mitmproxy."
        let projectUgrad = "An application combining computer vision and  NLP based recommendation systems to suggest users new \
        clothes to buy and stores to shop at based on their previously liked items. Built using Google’s Cloud Vision API, \
        NLP content based recommendation systems,  and Google Firebase.";
        return (
            <PageLayout>
                <div>
                    <ListItem
                        name= "University of Massachusetts Amherst"
                        location = "3.9 GPA"
                        date= "Sep 2018 – Jan 2020"
                        role= "Masters in Computer Science -  Information Security"
                        text= {textGrad}
                    />
                    <br/>
                    <ProjectItem
                        title ="Masters Research project"
                        text = {projectGrad}
                        advisors = "Brain Neil Levine and Mark D. Corner"/>
                    <br/>
                    <ListItem
                        name="University of Massachusetts Amherst"
                        location="3.7 GPA"
                        date="Sep 2014 – May 2018"
                        role="Bachelor of Science in Computer Science"
                        text={textUgrad}
                    />
                    <br />
                    <ProjectItem 
                        title="Thredr - Undergraduate Independent Study Project and HackHer413"
                        text={projectUgrad}
                        advisors= "Tim Richards"/>
                </div>
            </PageLayout>
        );
    }
}

export default Education;