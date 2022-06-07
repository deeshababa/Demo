import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import styled, { keyframes } from "styled-components";
import {
  NotificationBox,
  NotificationButton,
  NotificationContainer,
  NotificationImage,
  NotificationMessage,
  NotificationTitle,
} from "./styles";
import { TOAST_PROPERTIES } from "./toastProperties";
export type ToastProps = {
  type: "success" | "warning" | "info" | "error";
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  description: string;
  onClose: Function;
};
const Toast: React.FC<ToastProps> = ({
  type,
  position,
  description,
  onClose,
}) => {
  const [list, setList] = useState(
    TOAST_PROPERTIES.filter((obj: { type: string }) => obj.type == type)
  );
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 3000);
  }, []);
  return (
    <>
      <Box className={position}>
        <NotificationContainer className={position}>
          {list.map((toast, i) => (
            <NotificationBox
              key={i}
              className={position}
              style={{ backgroundColor: toast.backgroundColor }}
            >
              <NotificationButton onClick={() => onClose()}>
                <FiX></FiX>
              </NotificationButton>
              <NotificationImage className="notification-image">
                {toast.icon}
              </NotificationImage>
              <div>
                <NotificationTitle>{toast.title}</NotificationTitle>
                <NotificationMessage>{description}</NotificationMessage>
              </div>
            </NotificationBox>
          ))}
        </NotificationContainer>
      </Box>
    </>
  );
};

export default React.memo(Toast);

const fadeLeft = keyframes`
  from {
    left: -1px;
    opacity: 0;
  }

  to {
    left: 13px;
    opacity: 1;
  }
`;
const fadeRight = keyframes`
  from {
    right: -12px;
    opacity: 1;
  }

  to {
    right: 13px;
    opacity: 1;
  }
  
  
`;
const fadeIn = keyframes`{
  50% { opacity: 1; }

}`;

const fadeOut = keyframes`{
  0% { opacity: 0 }
  1% { opacity: 1 }
  14% {opacity: 1 }
  16% { opacity: 0 }
}`;
const breatheAnimation = keyframes`{
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 50% { height: 405px; width: 405px; opacity: 2}
 60% { height: 405px; width: 405px; opacity: 2}
 80% { height: 405px; width: 405px; opacity: 2}
 }`;

const Box = styled(NotificationContainer)`
  .top-right {
    top: 12px;
    right: 12px;
    transition: transform 0.6s ease-out;
    animation: ${fadeRight} 1s linear;
    transition-delay: 40s;
  }
  .top-left {
    top: 12px;
    left: 12px;
    transition: transform 0.6s ease-out;
    animation: ${fadeLeft} 6s linear;
    transition-delay: 40s;
  }
  .bottom-left {
    bottom: 12px;
    left: 12px;
    transition: transform 0.6s ease-out;
    animation: ${fadeLeft} 1s linear;
    transition-delay: 40s;
  }
  .bottom-right {
    bottom: 12px;
    right: 12px;
    transition: transform 0.6s ease-out;
    animation: ${fadeRight} 1s linear;
    transition-delay: 40s;
  }
`;
