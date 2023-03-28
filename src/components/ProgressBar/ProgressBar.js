/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size, label = "progress", ...delegated }) => {
  const id = React.useId();

  return (
    <>
      <label htmlFor={id}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <Progress value={value} max="100" {...delegated} id={id} />
    </>
  );
};

const Progress = styled.progress``;

export default ProgressBar;
