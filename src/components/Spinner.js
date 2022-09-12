import React from "react";

import styled from "styled-components";

const Spinner = () => {
  return <Span></Span>;
};

const Span = styled.span`
  width: 24px;
  height: 24px;
  border: 3px solid #666666;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #fff transparent;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
