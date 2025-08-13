import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MobileLayout from './MobileLayout';
import WebLayout from './WebLayout';

const PageContainer = styled.div`
  width: 100%;
  max-width: 1400px; /* Set a maximum width */
  margin: 0 auto; /* Center the layout */
  padding: 0 5px; /* Add some horizontal padding */
`;

const PageLayout = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 500;

  return (
    <PageContainer>
      {isMobile ? (
        <MobileLayout>{children}</MobileLayout>
      ) : (
        <WebLayout>{children}</WebLayout>
      )}
    </PageContainer>
  );
};

export default PageLayout;
