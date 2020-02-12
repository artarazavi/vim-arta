import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import  PageLayout  from '../Layout/PageLayout';


class Experience extends Component {
    render() {
        let textCb = [
            "Created a framework that matches events against a series of user defined match functions inside the Carbon Black Rules \
            Engine using Haskell. Automated tagging of events with corresponding TIDs which reveals behavior patterns across MITRE \
            ATT&CK Matrix based on linked ancestor–descendant relationships.",
            "Developed and maintained a ReactJS based internal web application for storing malware binaries and information gathered \
            by the threat research team. ",
            "Automated malware analysis reporting. Analyzed and classified malware binary samples to identify families/clusters of \
            similar malware."
        ];
        let textMm=[
            "Collaborated with the Ethical Hack Team  and the Information Risk Team to host company wide phishing campaigns to help \
            bring awareness and educate employees about phishing attacks.",
            "Web application penetration using  tools such as Burp Suite to generate vulnerability reports.  These reports were used \
            to suggest patching for issues such as  cross site scripting (XSS) and SQL injection vulnerabilities.",
            "Performed third party risk assessments on hundreds of vendor tools  looking for issues related to storage of sensitive \
            information."
        ];
        let textTr = [
            "Developed and maintained  an internal route planning and employee schedule management web application for transit agency \
            staff written in Ruby on Rails with a small, agile, team of student developers.",
            "Developed and maintained PVTrack, a hybrid mobile app with AngularJS and Ionic as a framework."
        ];
        let textTa = [
            "Taught an undergraduate seminar that discussed making ethical decisions as computer scientists entering the field.",
            "Led a workshop on version control with Git using GitKraken as a tool to visually aid the experience.",
            "Led weekly discussion sessions designed to help students with their web development group projects. Graded students \
            work and provide feedback."
        ];
        return (
            <PageLayout>
                <div>
                    <div>
                        <ListItem
                            name="VMware Carbon Black"
                            location="Boston, MA"
                            date="Jun 2018 – Aug 2019"
                            role="Threat Research Intern - 3 consecutive internships"
                            text={textCb}
                        />
                        <br/>
                        <ListItem
                            name="Mass Mutual"
                            location="Boston, MA"
                            date="Jun 2017 – Aug 2017"
                            role="Ethical Hack and Information Risk Intern"
                            text={textMm}
                        />
                        <br />
                        <ListItem
                            name="University of Massachusetts Amherst Transportation Services"
                            location="Amherst, MA"
                            date="Sep 2018 – Jan 2020"
                            role="Developer and IT services"
                            text={textTr}
                        />
                        <br />
                        <ListItem
                            name="University of Massachusetts Amherst"
                            location="Amherst, MA"
                            date="Sep 2018 – Jan 2020"
                            role="Teaching Assistant and Undergraduate Course Assistant"
                            text={textTa}
                        />
                    </div>
                </div>
            </PageLayout>
        );
    }
}

export default Experience;