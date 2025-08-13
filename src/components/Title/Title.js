import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const PageTitle = styled.div`
  color: #ffd7af;
  font-family: 'Roboto Mono', monospace;
  font-size: ${(props) => (props.mobile ? '30px' : '50px')};
  display: inline-block;
`;

const Title = ({ menu, mobile }) => {
  const location = useLocation();
  const path = menu ? '  menu' : location.pathname;
  const text = path === '/' ? 'vim --cmd :help' : `vim ${path.substring(1)}`;

  return (
    <PageTitle mobile={mobile}>
      <ReactTypingEffect text={text} />
    </PageTitle>
  );
};

export default Title;
