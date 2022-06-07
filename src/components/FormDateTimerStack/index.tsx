import React from "react";
import styled from "styled-components";
import { dateFieldContainerProps, dateFieldProps } from "../../lib/types";
import DateTimePicker from "../DateTimePicker";

interface FormDateTimerStackProps {
  dateStackList?: dateFieldProps;
}

const FormDateTimerStack: React.FC<FormDateTimerStackProps> = ({
  dateStackList = {
    property: [],
  },
}) => {
  return (
    <DateTimeContainer
      style={dateStackList.style}
      flexDirection={dateStackList.flexDirection}
      flexWrap={dateStackList.flexWrap}
      marginTop={dateStackList.marginTop}
    >
      {dateStackList.property.map((dateField) => (
        <DateTimePicker
          label={dateField.label}
          name={dateField.name}
          showTime={dateField.showTime}
          date={dateField.date}
          style={dateField.style}
          flexDirection={dateField.flexDirection}
          alignItems={dateField.alignItems}
          gap={dateField.gap}
          width={dateField.width}
          marginTop={dateField.marginTop}
        />
      ))}
    </DateTimeContainer>
  );
};

export default React.memo(FormDateTimerStack);

const DateTimeContainer = styled.div<dateFieldContainerProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "no-wrap")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0rem")};
`;
