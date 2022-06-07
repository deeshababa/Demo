import React from "react";
import styled from "styled-components";
import { dataFieldContainerProps, dataFieldProps } from "../../lib/types";
import DataField from "../DataField";

interface FormDataFieldStackProps {
  dataFieldStackList?: dataFieldProps;
}

const FormDataFieldStack: React.FC<FormDataFieldStackProps> = ({
  dataFieldStackList = { property: [] },
}) => {
  return (
    <DataFieldContainer
      style={dataFieldStackList.style}
      gap={dataFieldStackList.gap}
      marginTop={dataFieldStackList.marginTop}
      flexDirection={dataFieldStackList.flexDirection}
      margin={dataFieldStackList.margin}
      marginBottom={dataFieldStackList.marginBottom}
      marginLeft={dataFieldStackList.marginLeft}
      marginRight={dataFieldStackList.marginRight}
      justifyContent={dataFieldStackList.justifyContent}
      flexWrap={dataFieldStackList.flexWrap}
    >
      {dataFieldStackList.property.map((formField) => (
        <DataField
          label={formField.label}
          type={formField.type}
          name={formField.name}
          defaultValue={formField.defaultValue}
          key={formField.name}
          style={formField.style}
          placeholder={formField.placeholder}
          width={formField.width}
          boxWidth={formField.boxWidth}
          alignItems={formField.alignItems}
          marginLeft={formField.marginLeft}
          marginRight={formField.marginRight}
          marginTop={formField.marginTop}
          marginBottom={formField.marginBottom}
        />
      ))}
    </DataFieldContainer>
  );
};

export default React.memo(FormDataFieldStack);

const DataFieldContainer = styled.div<dataFieldContainerProps>`
  display: flex;
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "no-wrap")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0rem")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0rem"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0rem")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0rem")};
  gap: ${(props) => (props.gap ? props.gap : "1rem")};
`;
