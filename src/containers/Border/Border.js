import React from 'react';
import styled from 'styled-components';

const Border = ({ count }) => {
  const NumBorder = styled.div`
    margin-top: 5px;
  `;

  const BorderItems = styled.p`
    padding-top: 1px;
    font-family: 'Roboto Mono', monospace;
    color: #4B5262;
    line-height: 0px;
    font-size: 12px;
  `;

  const array = [];
  for (let i = 0; i < count; i++) {
    const item = i < 9 ? <BorderItems className="border-items" key={i}>| {i + 1}</BorderItems> : <BorderItems className="border-items" key={i}>|{i + 1}</BorderItems>;
    array.push(item);
  }

  return (
    <NumBorder>
        {array}
    </NumBorder>
  );
};

export default Border;
