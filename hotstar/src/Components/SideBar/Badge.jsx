import React from "react";
import styled from "styled-components";

const BadgeContainer = styled.span`
  position: relative;
  display: inline-block;
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
`;

const BadgeComponent = ({ count }) => {
  return (
    <BadgeContainer>
      <Badge>{count}</Badge>
    </BadgeContainer>
  );
};

export default BadgeComponent;
