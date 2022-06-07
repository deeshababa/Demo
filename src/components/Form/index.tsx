import React, { FormEvent } from "react";
import styled from "styled-components";
import { FormContainer } from "../../../styles/globalStyles";
import { AppColors } from "../../lib/constant";
import { formHeaderProps } from "../../lib/types";
interface formProps {
  onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  formHeader?: {
    header: string | JSX.Element;
    color?: string;
    fontSize?: string;
    style?: object;
  };
  subBodyComponent?: JSX.Element;
  subFooterComponent?: JSX.Element;
  formBodyStack?: Array<JSX.Element>;
  formFooterStack?: Array<JSX.Element>;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  background?: string;
  padding?: string;
}

const Form: React.FC<formProps> = ({
  onFormSubmit,
  formHeader = { header: "", style: {}, color: "", fontSize: "" },
  subBodyComponent = null,
  subFooterComponent = null,
  formBodyStack = [],
  formFooterStack = [],
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "column",
  background = "",
  padding = "",
}) => {
  return (
    <FormContainer
      onSubmit={onFormSubmit}
      justifyContent={justifyContent}
      alignItems={alignItems}
      background={background}
      flexDirection={flexDirection}
      padding={padding}
    >
      <FormHeader
        style={formHeader.style}
        color={formHeader.color}
        fontSize={formHeader.fontSize}
      >
        {formHeader.header}
      </FormHeader>

      <FormBodyContainer>
        <>
          {formBodyStack.map((formBodyField) => (
            <>{formBodyField}</>
          ))}
        </>
        {subBodyComponent}
        <>
          {formFooterStack.map((formFooterField) => (
            <>{formFooterField}</>
          ))}
        </>
        {subFooterComponent}
      </FormBodyContainer>
    </FormContainer>
  );
};

export default React.memo(Form);

const FormHeader = styled.p<formHeaderProps>`
  /* font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 0.8rem 0 0.5rem 0; */
  color:${(props) => (props.color ? props.color : AppColors.BlackText)} ;
  font-weight: 600;
  font-size:${(props) => (props.fontSize ? props.fontSize : "20px")} ;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormBodyContainer = styled.div` 
  margin-top: 1rem;
  width: 90%;
`;
