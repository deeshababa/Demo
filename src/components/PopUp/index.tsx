import React from "react";
import styled from "styled-components";
import { AppColors, FROM_POP_UP_TYPE } from "../../lib/constant";

type ModalProps = {
  popUptype: "form" | "popup";
  onClick:Function
};

const PopUp: React.FC<{
  children: React.ReactNode;
  popUptype?: "form" | "popup";
  onClick?:Function;
  
}> = ({ children, popUptype = "form" ,onClick=()=>{}}) => {
  return (
    <Modal popUptype={popUptype} onClick={()=>{}} >
      <ModalBody popUptype={popUptype} onClick={()=>{}} >{children}</ModalBody>
    </Modal>
  );
};

const Modal = styled.div<ModalProps>`
  height: 100%;
  width: 100%;
  display: ${(props) =>
    props?.popUptype == FROM_POP_UP_TYPE ? "block" : "flex"};
  align-items: center;
  // transform: translate(0%, 0%);
  position: absolute;
  top: 0;
  left: 0;
  background: ${AppColors.BlackOverlay};
`;

const ModalBody = styled.div<ModalProps>`
  background-color: ${AppColors.White};
  width: 40%;
  margin: ${(props) =>
    props?.popUptype == FROM_POP_UP_TYPE ? "6rem" : "auto"};
  padding: 3rem 0;
  border-radius: 0.6rem;
  // transform: translate(50%, -10%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;

export default React.memo(PopUp);
