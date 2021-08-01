import React from 'react';
import styled from 'styled-components';

const Spinner = () => (
  <Root>
    <Loading />
  </Root>
);

const Root = styled.div`
  color: #fff;
  display: inline-block;
  width: 5rem;
  height: 5rem;
  vertical-align: text-bottom;
  border: 0.5em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border .75s linear infinite;
  animation: spinner-border .75s linear infinite;
  
  @keyframes spinner-border {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Loading = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
`;

export default Spinner;
