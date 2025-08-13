import React from 'react';
import styled from 'styled-components';

const MidBorder = ({ mobile }) => {
  const Styles = styled.div`
    .mid-border-right {
      border-right: 5px solid #4B5262;
      padding-bottom: ${mobile ? '2300px' : '930px'};
    }

    .mid-border-left {
      border-left: 5px solid #4B5262;
      padding-bottom: ${mobile ? '2300px' : '930px'};
    }
  `;

  return (
    <Styles>
      {mobile ? (
        <div className="mid-border-right"></div>
      ) : (
        <div className="mid-border-left"></div>
      )}
    </Styles>
  );
};

export default MidBorder;
