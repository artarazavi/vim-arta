import React, { Component } from 'react';
import styled from 'styled-components';
import PageLayout from '../Layout/PageLayout';

class AdMsg extends Component {

    render() {
        const Styles = styled.div`
            font-family: 'Roboto Mono', monospace;
            line-height: 15px;
            font-size: 14px;
            color: #FFD7AF;
            .line-link{
                text-decoration: none;
            }
            .line-title{
                color: #4EB6BC;
                margin-bottom: 8px;
            }
            .sub-title{
                color: #CC3E74;
                margin-bottom: 2px;
            }
            .icon{
                float: left;
                margin-right: 5px;
                color: #4EB6BC;
                font-size: 13px;
            }
             
        `;

        let abstract = "A mobile application that allows users to covertly communicate through mobile \
        application advertisements";
        let setup = "To start messaging you will need a rooted Android device or a rooted Android emulator. \
        The device then needs to be configured to route all connections through a proxy in order to gain \
        access to advertisement data packets. MITMProxy is the tool used in order to capture packets and \
        extract their data. The certificate for MITMProxy is then installed on the phone so the content of \
        encrypted packets can be decoded. Packet data extraction is done using a tool called MITMDump which \
        comes included with MITMProxy. A Python script is fed into MITMDDump that scrapes user messages from \
        incoming packets and saves them locally to the device. MITMProxy can run in a Linux environment, the \
        Android device itself is running a variation of Linux, but in order to unlock all capabilities of the \
        Linux operating system a Linux emulator needs to be installed on the phone. AnLinux is an application \
        available on the app store which can emulate a Linux environment on Android devices. AnLinux is \
        download through a terminal emulator known as Termux. Once all the infrastructure is set up you need \
        to initiate a connection with MITMProxy. Because the proxy is run locally on the device you will \
        initiate a proxy connection to the devices local IP address using Proxy Droid."
        let howItWorks = "As proxied packets come flooding through MITMDump is able to go through packet \
        by packet and scrape out the content. A filtering function is set to capture all incoming packets \
        specifically filtering for advertisement data packets containing HTTP and JavaScript. A Python \
        script is used in order to interactively scrape packets while using MITMDump.ProxyDroid is then \
        used to direct all phone traffic through MITMProxy in transparent proxy mode.Messages retrieved \
        from advertisements are stored on the phone in sdcard storage.The messaging app then periodically \
        checks to see if any new messages have been captured and stored in the sdcard.When there are new \
        messages the user will be notified and has a chance to reply to the message.Outgoing messages will \
        be queued until the user receives another advertisement packet that is able to carry the message back \
        by disguising the message as metadata which is sent back to the server.Users exchange advertising \
        IDs when they start using the app to make targeting advertisements to their specific android \
        device much easier and lower costs.In order to be able to run ads and message through them the user \
        will have to pay a certain amount of money to pay for the cost of running the campaign.There is a \
        centralized server run by the messaging app which places user messages into advertising campaigns. \
        In order to get advertisements displayed on your phone and be able to message you need to be \
        interactively using other apps which run advertisements often.A list of these apps which run ads \
        frequently will be provided to the user."
        let whySecure = "Messaging traffic is disguised as advertisement data and is encrypted using public \
        private keys. In order for an attacker to intercept messages they would have to analyze and intercept \
        all advertising data incoming through the phone. Even if they were able to see the packets they \
        would not be able to decrypt the messages only those holding the proper keys can read messages. \
        Mobile Advertisements are run globally and no country has banned mobile advertising. This makes \
        it an easy target for covert communication because advertising is so widely used and rarely \
        regulated. The messaging app would allow communication with those in countries where all other \
        forms of communication from the outside world could be blocked. As long as there are advertisements \
        run on your phone, you are able to communicate with anyone."
        let sumUp = "The goal of the project was to find a way to covertly communicate with others you were \
        not able to communicate with before due to some sort of communication barrier. This tool will be\
         very useful in countries where communication from the outside heavily blocked, sensored, or monitored. \
         Because there is such a large number of phone application advertisements this makes them a great \
         candidate for hiding information. Also because there are plenty of advertisements run on your phone it makes \
         it really hard scrape everyone’s advertisement for hidden messages. This means the cost of monitoring for \
         such messages or blocking all advertising together is much too high to make it be worth doing."

        return (
            <PageLayout>
                <Styles>
                    
                    <div>
                        <span className="icon">
                            <i className="fa fa-github" />
                        </span>
                        <a
                            href="https://github.com/artarazavi/ad-messaging"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="line-link">
                            <p className="line-title">Covert Messaging Through Advertisement</p>
                        </a>
                        <p className="sub-title">Abstract</p>
                        <p>{abstract}</p>
                        <p className="sub-title">Setup</p>
                        <p>{setup}</p>
                        <p className="sub-title">How it Works</p>
                        <p>{howItWorks}</p>
                        <p className="sub-title">Why Secure</p>
                        <p>{whySecure}</p>
                        <p className="sub-title">Sum Up</p>
                        <p>{sumUp}</p>
                    </div>
                    
                </Styles>
            </PageLayout>
        );
    }

}

export default AdMsg;