import React from "react";
import styled from "styled-components";
import { Label } from "../../../styles/globalStyles";
import { AppColors, FULL_WIDTH, ROW_DIRECTION } from "../../lib/constant";
import { dataFieldStyleProps } from "../../lib/types";
interface DataFieldProps {
  label?: string;
  type?: string;
  name?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string | number;
  isChecked?: boolean;
  width?: string;
  direction?: "row" | "column";
  textAlign?: "left" | "right";
  isEditable?: boolean;
  style?: object;
  placeholder?: string;
  alignItems?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  justifyContent?: string;
  boxWidth?: string;
}

const DataField: React.FC<DataFieldProps> = ({
  label = "",
  type = "text",
  name = "name",
  defaultValue = "",
  isChecked,
  width = "",
  direction = ROW_DIRECTION,
  textAlign = "left",
  isEditable = true,
  style = {},
  placeholder = "",
  alignItems = "center",
  marginLeft = "0rem",
  marginRight = "0rem",
  marginTop = "0rem",
  marginBottom = "0rem",
  justifyContent = "space-between",
  boxWidth = FULL_WIDTH,
}) => {
  return (
    <DataFieldContainer
      style={style}
      alignItems={alignItems}
      justifyContent={justifyContent}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      width={width}
    >
      {label && (
        <Label direction={direction} textAlign={textAlign}>
          {label}
        </Label>
      )}
      <InputField
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => e.target.value}
        checked={isChecked}
        boxWidth={boxWidth}
        readOnly={!isEditable}
        defaultValue={defaultValue}
      />
    </DataFieldContainer>
  );
};

export default React.memo(DataField);

const InputField = styled.input<DataFieldProps>`
  padding: 0.5rem;
  border-radius: 0.3rem;
  width: ${(props) => (props.boxWidth == FULL_WIDTH ? "100%" : props.boxWidth)};
  border: 1px solid ${AppColors.Grey};
  font-size: 16px;
  background-color: ${AppColors.White};
  align-self: flex-start;
  &:focus {
    outline: none;
    border: 1px solid ${AppColors.Blue};
  }
`;

export const DataFieldContainer = styled.div<dataFieldStyleProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0rem")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0rem"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0rem")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0rem")};
`;
