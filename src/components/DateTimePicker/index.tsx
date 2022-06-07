import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled, { createGlobalStyle } from "styled-components";
import { Label } from "../../../styles/globalStyles";
import {
  AppColors,
  DEFAULT_DATE_FORMAT,
  DEFAULT_DATE_TIME_FORMAT,
} from "../../lib/constant";
import { datePickerContainer } from "../../lib/types";

interface DateTimePickerProps {
  date?: Date | null;
  onDateChange?: (date: Date | null) => void;
  label: string;
  showTime?: boolean;
  direction?: "row" | "column";
  name?: string;
  style?: object;
  flexDirection?: string;
  alignItems?: string;
  gap?: string;
  width?: string;
  marginTop?: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  date = null,
  label,
  showTime = false,
  name,
  onDateChange = (e: Date | null) => {},
  style = {},
  flexDirection = "row",
  alignItems = "left",
  gap = "0rem",
  width = "12rem",
  marginTop = "0rem",
}) => {
  const [startDate, setStartDate] = useState<Date | null>(date);

  useEffect(() => {
    setStartDate(date);
  }, [date]);

  const onDateTimeChange = (date: Date) => {
    setStartDate(date);
    onDateChange(date);
  };

  return (
    <DatePickerContainer
      style={style}
      flexDirection={flexDirection}
      alignItems={alignItems}
      gap={gap}
      width={width}
      marginTop={marginTop}
    >
      <Label>{label}</Label>
      <DatePicker
        selected={startDate}
        showTimeSelect={showTime}
        wrapperClassName="date-picker"
        placeholderText={
          showTime ? DEFAULT_DATE_TIME_FORMAT : DEFAULT_DATE_FORMAT
        }
        dateFormat={showTime ? DEFAULT_DATE_TIME_FORMAT : DEFAULT_DATE_FORMAT}
        name={name}
        onChange={(date: Date) => onDateTimeChange(date)}
      />
      <DatePickerWrapperStyles />
    </DatePickerContainer>
  );
};

export default React.memo(DateTimePicker);

const DatePickerWrapperStyles = createGlobalStyle`
    .react-datepicker__input-container input{
      padding: 0.5rem;
      border-radius: 0.3rem;
      border: 1px solid ${AppColors.Grey};
      font-size: 16px;
      background-color: ${AppColors.White};
      &:focus {
        outline: none;
        border: 1px solid ${AppColors.Blue};
      }
    }
`;

const DatePickerContainer = styled.div<datePickerContainer>`
  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  width: ${(props) => (props.width ? props.width : "100%")};
  gap: ${(props) => (props.gap ? props.gap : "0rem")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0rem")};
`;
