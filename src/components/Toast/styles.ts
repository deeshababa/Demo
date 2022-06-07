import styled, { keyframes } from "styled-components";
import { AppColors } from "../../lib/constant";

export const NotificationContainer = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  z-index: 999999;
  .button {
    position: relative;
    right: -0.3em;
    top: -0.3em;
    float: right;
    font-weight: 700;
    color: ${AppColors.White};
    outline: none;
    border: none;
    text-shadow: 0 1px 0 ${AppColors.White};
    opacity: 0.8;
    line-height: 1;
    font-size: 16px;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
  }

  & .top-right {
    top: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 3s;
  }

  & .bottom-right {
    bottom: 12px;
    right: 12px;
    transition: transform 0.6s ease-in-out;
    animation: toast-in-right 2s;
  }

  & .top-left {
    top: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: toast-in-left 2s infin;
  }

  & .bottom-left {
    bottom: 12px;
    left: 12px;
    transition: transform 0.6s ease-in;
    animation: toast-in-left 0.7s;
  }
`;

export const NotificationBox = styled.div`
  background: #fff;
  transition: 0.3s ease;
  position: relative;
  pointer-events: auto;
  overflow: hidden;
  margin: 0 0 6px;
  padding: 30px;
  margin-bottom: 15px;
  margin-left: 5px;
  width: 300px;
  max-height: 100px;
  border-radius: 20px;
  box-shadow: 0 0 10px #999;
  color: #000;
  opacity: 0.9;
  background-position: 15px;
  background-repeat: no-repeat;
  &:hover {
    box-shadow: 0 0 12px ${AppColors.White};
    opacity: 1;
    cursor: pointer;
  }
  .toast {
    height: 80px;
    width: 365px;
    color: ${AppColors.White};
    padding: 20px 15px 10px 10px;
  }
`;

export const NotificationButton = styled.div`
  position: relative;
  right: -0.3em;
  top: -0.3em;
  float: right;
  font-weight: 700;
  outline: none;
  border: none;
  text-shadow: 0 1px 0 ${AppColors.White};
  opacity: 0.8;
  line-height: 1;
  font-size: 16px;
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
  color: ${AppColors.Black};
`;

export const NotificationImage = styled.div`
	width: 5px;
 	height: 8px;
	


	
}
`;

export const NotificationMessage = styled.p`
  margin: 0;
  text-align: left;
  height: 18px;
  margin-left: 22px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NotificationTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  margin-top: -25px;
  margin-left: 20px;
  margin-bottom: 6px;
  width: 300px;
  height: 18px;
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`;
