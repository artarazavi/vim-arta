import React from 'react';
import styled from 'styled-components';
import PageLayout from '../Layout/PageLayout';

const LinksContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  line-height: 16px;
  max-width: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

const Links = () => {
  const personalLinks = [
    {
      href: "https://github.com/artarazavi",
      text: "GitHub",
      iconClass: "fa fa-github",
      color: "#b7e88d"
    },
    {
      href: "https://www.linkedin.com/in/arta-razavi/",
      text: "LinkedIn",
      iconClass: "fa fa-linkedin",
      color: "#4eb6bc"
    }
  ];

  return (
    <PageLayout>
      <LinksContainer>
        {personalLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: link.color,
              display: 'block',
              margin: '5px 0'
            }}
          >
            <span style={{ marginRight: '5px' }}>
              <i className={link.iconClass} />
            </span>
            {link.text}
          </a>
        ))}
      </LinksContainer>
    </PageLayout>
  );
};

export default Links;
