import React from "react";
import styled from "styled-components";
import { ContainerProps, Label } from "../../../styles/globalStyles";
import {
  AppColors,
  FIXED_WIDTH,
  FULL_WIDTH,
  ROW_DIRECTION,
} from "../../lib/constant";
import { dropdownContainerProps } from "../../lib/types";
interface DropdownProps extends dropdownContainerProps, ContainerProps {
  dataList?: string[];
  label: string;
  onChange?: Function;
  value?: string;
  flexDirection?: "row" | "column";
  boxWidth?: "fixed" | "full";
  name?: string;
  style?: object;
  alignItems?: string;
  width?: string;
  marginLeft?: string;
}

const DropDown: React.FC<DropdownProps> = ({
  dataList = [],
  label,
  name = "",
  value,
  flexDirection = ROW_DIRECTION,
  boxWidth = FIXED_WIDTH,
  style = {},
  alignItems = "",
  gap = "",
  textAlign = "left",
  width = "",
  marginLeft = "",
}) => {
  return (
    <DropdownContainer
      style={style}
      flexDirection={flexDirection}
      alignItems={alignItems}
      gap={gap}
      width={width}
      marginLeft={marginLeft}
    >
      <Label direction={flexDirection} textAlign={textAlign}>
        {label}
      </Label>
      <Select value={value} width={boxWidth} name={name}>
        {dataList.map((data: string) => (
          <option value={data}>{data}</option>
        ))}
      </Select>
    </DropdownContainer>
  );
};

export default React.memo(DropDown);

interface SelectProps {
  width: "fixed" | "full";
}

const Select = styled.select<SelectProps>`
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid ${AppColors.Grey};
  font-size: 16px;
  background-color: ${AppColors.White};
  width: ${(props) => (props.width == FULL_WIDTH ? "100%" : "13rem")};
  option {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border: 1px solid ${AppColors.Blue};
  }
`;

const DropdownContainer = styled.div<dropdownContainerProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  gap: ${(props) => (props.gap ? props.gap : "0rem")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  marginleft: ${(props) => (props.marginLeft ? props.marginLeft : "0rem")};
`;
