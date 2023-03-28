/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0",
    "--border-radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0",
    "--border-radius": "4px",
  },
  large: {
    "--height": "16px",
    "--padding": "4px",
    "--border-radius": "8px",
  },
};

const ProgressBar = ({ value, size, label = "progress", ...delegated }) => {
  const sizeStyles = SIZES[size];
  const id = React.useId();
  return (
    <>
      <label htmlFor={id}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <Wrapper style={sizeStyles}>
        <Progress value={value} max="100" {...delegated} id={id} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  padding: var(--padding);
  inline-size: min-content;
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Progress = styled.progress`
  background: none;
  border: none;
  height: var(--height);
  border-radius: 4px;

  &::-moz-progress-bar {
    background-color: ${COLORS.primary};
  }

  &::-webkit-progress-bar {
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
