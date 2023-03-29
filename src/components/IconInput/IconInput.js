import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--font-size": "0.875rem",
    "--padding": "2px",
    "--gap": "12px",
    "--stroke-weight": "1px",
  },
  large: {
    "--font-size": "1.125rem",
    "--padding": "4px",
    "--gap": "16px",
    "--stroke-weight": "2px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const id = React.useId();
  const sizeStyles = SIZES[size];

  return (
    <Wrapper style={{ ...sizeStyles, "--width": `${width}px` }}>
      <Label htmlFor={id}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon
          id={icon}
          strokeWidth={size === "large" && 2}
          size={size === "large" ? "22px" : "16px"}
        />
      </Label>
      <TextInput id={id} type="text" placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  gap: var(--gap);
  border-bottom: var(--stroke-weight) solid ${COLORS.black};
  inline-size: fit-content;
  padding-block-start: 4px;
  padding-block-end: var(--padding);
  color: ${COLORS.gray700};
  width: var(--width);

  &:focus-within {
    outline: 2px auto -webkit-focus-ring-color;
    outline: 2px auto highlight;
    outline-offset: 2px;
    border-radius: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const Label = styled.label``;

const TextInput = styled.input`
  border: none;
  font-weight: 700;
  color: ${COLORS.gray700};
  width: 100%;
  font-size: var(--font-size);
  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
    opacity: 1;
  }
`;

export default IconInput;
