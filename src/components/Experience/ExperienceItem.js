import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.div`
  .list-item {
    font-family: 'Roboto Mono', monospace;
    line-height: 11px;
    font-size: 12px;

    .item-left {
      width: 80%;
      float: left;
    }

    .item-right {
      width: 20%;
      float: right;
      text-align: right;
    }

    .name {
      color: #4eb6bc;
      font-size: 15px;
      width: 100%;
      margin-bottom: 3px;
    }

    .role {
      color: #cc3e74;
      width: 100%;
      margin-bottom: 30px;
    }

    .location {
      color: #9780f3;
      float: left;
      width: 100%;
      margin-bottom: 30px;
    }

    .date {
      color: #c87919;
      float: left;
      width: 100%;
      margin-bottom: 3px;
    }
  }
`;

const ExperienceItem = ({ name, role, date, location}) => {
  return (
    <StyledListItem>
      <div className="list-item">
        <div className="item-left">
          <p className="name">{name}</p>
          <p className="role">{role}</p>
        </div>
        <div className="item-right">
          <p className="date">{date}</p>
          <p className="location">{location}</p>
        </div>
      </div>
    </StyledListItem>
  );
};

export default ExperienceItem;
