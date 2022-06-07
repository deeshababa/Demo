import styled from "styled-components";
import { AppColors } from "../src/lib/constant";
import { mainPageContainerProps } from "../src/lib/types";

export const ContentContainer = styled.div`
  height: 90%;
  width: 90%;
  padding: 1.5rem;
  background-color: ${AppColors.AppWhite};
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 20%);
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${AppColors.Grey};
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${AppColors.DarkGrey};
  }
`;

export const MainPageContainer = styled.div<mainPageContainerProps>`
  height: ${(props) => (props.height ? props.height : "90%")};
  width: ${(props) => (props.width ? props.width : "90%")};
  padding: ${(props) => (props.padding ? props.padding : "1.5rem")};
  background-color: ${AppColors.AppWhite};
  overflow: auto;
  overflow-x: hidden;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 20%);
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${AppColors.Grey};
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${AppColors.DarkGrey};
  }
`;

export interface ContainerProps {
  direction?: "row" | "column";
  textAlign?: "left" | "right";
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  background?: string;
  padding?: string;
}


export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
`;


export const Label = styled.label<ContainerProps>`
  direction: ${(props) => (props.direction === "column" ? "column" : "row")};
  display: block;
  align-self: flex-start;
  margin-bottom: 0.5rem;
  font-size: 14px !important;
  color: ${AppColors.TextColor};
  text-align: ${(props) => (props.textAlign === "right" ? "right" : "left")};
`;

interface BoxProps {
  direction?: "row" | "column";
  alignItems?: "baseline" | "center" | "flex-end" | "flex-start" | "stretch";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: number | string;
}


export const Page = styled(Container)`
  background: ${AppColors.BgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`;

export const FormContainer = styled.form<ContainerProps>`
  border-radius: 0.5rem;
  overflow: auto;
  padding: ${(props) => (props.padding ? props.padding : "1.5rem")};
  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  background: ${AppColors.ContainerBg};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  box-shadow: 0px 4px 8px rgb(0 0 0 / 20%);
`;

export const Grid = styled.div`
  display: grid;
  background-color: ${AppColors.White};
  width: 90%;
  height: 90%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: 0.5rem;
  background-color: ${AppColors.AppWhite};
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 20%);
  &::-webkit-scrollbar {
    width: 0.375rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${AppColors.Grey};
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${AppColors.DarkGrey};
  }
`;
export const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem 0 2rem;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: ${AppColors.TextColor};
`;
