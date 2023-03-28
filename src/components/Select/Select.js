import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentation>
        {displayedValue}
        <Icon id="chevron-down" size={24} strokeWidth={2} />
      </Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  inline-size: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  inline-size: 100%;
  block-size: 100%;
  opacity: 0;
`;

const Presentation = styled.div`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1em;
  padding: 10px 10px 10px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 24px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 2px auto -webkit-focus-ring-color;
    outline: 2px auto highlight;
  }
`;

export default Select;
