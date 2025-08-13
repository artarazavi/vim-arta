import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  flex: 1; /* Allow the layout to take available space */
  padding: 15px; /* Add padding for better spacing */
  box-sizing: border-box; /* Ensure padding doesn't affect width */
  width: 100%; /* Ensure it uses full width of the parent */
  max-width: 100%; /* Prevent exceeding the parent's width */
`;

const Layout = (props) => (
  <StyledLayout>
    {props.children}
  </StyledLayout>
);

export default Layout;
