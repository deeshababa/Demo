import React from "react";
import styled from "styled-components";
import {
  AppColors,
  Border_half_curved,
  CUSTOM_WIDTH,
  FULL_WIDTH,
  PRIMARY_BUTTON_VARIANT,
  SECONDARY_BUTTON_VARIANT,
  SUBMIT_BUTTON,
} from "../../lib/constant";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onChange?: React.FormEventHandler<HTMLButtonElement> | undefined;
  value?: string | number | readonly string[] | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: "primary" | "secondary";
  width?: "full" | "custom";
  borderType?: "halfCurved";
  disabled?: boolean;
  style?: object;
  backgroundColor?: string;
  color?: string;
  border?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  value = SUBMIT_BUTTON,
  onClick,
  onChange,
  variant = SECONDARY_BUTTON_VARIANT,
  width = FULL_WIDTH,
  borderType,
  disabled,
  style,
}) => {
  return (
    <>
      <ButtonComp
        type={type}
        onChange={onChange}
        onClick={onClick}
        variant={variant}
        width={width}
        borderType={borderType}
        disabled={disabled}
        style={style}
      >
        {value}
      </ButtonComp>
    </>
  );
};

export default React.memo(Button);

const ButtonComp = styled.button<ButtonProps>`
  outline: none;
  padding: 0.5rem 1.5rem;
  margin: 0.75rem 0;
  border-radius: ${(props) =>
    props.borderType === Border_half_curved ? "2.25rem" : `0.25rem`};
  font-size: 1.25rem;
  cursor: pointer;
  width: ${(props) => (props.width === FULL_WIDTH ? "100%" : `auto`)};
  border: ${(props) =>
    props.variant === PRIMARY_BUTTON_VARIANT
      ? "none"
      : `2px solid ${AppColors.Primary}`};
  background: ${(props) =>
    props.variant === PRIMARY_BUTTON_VARIANT
      ? `${AppColors.Primary}`
      : `${AppColors.White}`};
  color: ${(props) =>
    props.variant === PRIMARY_BUTTON_VARIANT
      ? `${AppColors.AppWhite}`
      : `${AppColors.Black}`};

  &:hover,
  &:focus {
    /* box-shadow: 0px 0px 0px 2px ${AppColors.Primary}; */
    box-shadow: 0px 2px 4px ${AppColors.Primary};
  }
`;

export const FlatButton = styled.a`
  color: ${AppColors.Primary};
  font-weight: bold;
  padding-left: 0.5rem;
`;

interface LinkButtonProps {
  textColor?: "primary" | "secondary";
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
}

export const LinkButton = styled.a<LinkButtonProps>`
  font-size: 14px;
  display: flex;
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : `flex-start`)};
  align-self: ${(props) =>
    props.textColor === "primary"
      ? `${AppColors.TextColor}`
      : `${AppColors.Primary}`};
  color: ${(props) =>
    props.textColor === "primary"
      ? `${AppColors.TextColor}`
      : `${AppColors.Primary}`};
  font-weight: normal;
  font-weight: ${(props) => (props.textColor === "primary" ? "normal" : `500`)};
`;
