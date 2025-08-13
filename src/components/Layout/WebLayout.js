import React from 'react';
import styled from 'styled-components';
import SideBar from "../../containers/SideBar/SideBar";
import Border from '../../containers/Border/Border';
import MidBorder from '../../containers/MidBorder/MidBorder';
import Layout from './Layout';
import Title from "../Title/Title";

const Container = styled.div`
  display: flex; /* Use flex to layout children */
  max-width: 1500px; /* Set a max width */
  margin: 0 auto; /* Center the layout */
  padding: 0 5px; /* Add horizontal padding */
  flex-direction: column; /* Stack elements vertically */
`;

const UserInput = styled.h1`
  font-size: 50px;
  color: #B7E88D;
  font-family: 'Roboto Mono', monospace;
  margin: 0px;
`;

const MainContent = styled.div`
  display: flex; /* Flex for sidebar, borders, and layout */
  flex: 1; /* Allow this section to grow */
`;

const WebLayout = ({ children, location }) => {
  return (
    <Container>
      <UserInput>arta:~$</UserInput>
      <Title location={location} mobile={false} />
      <MainContent>
        <SideBar />
        <Border count={71} />
        <Layout>{children}</Layout>
        <MidBorder />
      </MainContent>
    </Container>
  );
};

export default WebLayout;
