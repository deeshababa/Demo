import { NextPage } from "next";
import React, { useState } from "react";
import { userForgotPassword } from "../../src/api/loginService";
import Button from "../../src/components/Button";
import Form from "../../src/components/Form";
import FormButtonStack from "../../src/components/FormButtonStack";
import FormDataFieldStack from "../../src/components/FormDataFieldStack";
import {
  ButtonName,
  FORGOT_PASSWORD_FORM_HEADER,
  FULL_WIDTH,
  LOGIN_BUTTON_TEXT,
  LOGIN_PATH,
  PRIMARY_BUTTON_VARIANT,
} from "../../src/lib/constant";
import { routerNavigation } from "../../src/lib/helper";
import { buttonFieldProps } from "../../src/lib/types";
import { Page } from "../../styles/globalStyles";

const ForgotPassword: NextPage = () => {
  const [isResetBtnClicked, setIsResetBtnClicked] = useState<Boolean>(false);
  const { Reset, Resetting } = ButtonName;

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsResetBtnClicked(true);
    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    const formData = {
      email: target.email.value,
    };
    if (formData.email) {
      const req = {
        email: formData.email,
      };

      try {
        const res = await userForgotPassword(req);
        if (res) {
          routerNavigation("/forgotPassword/resetPassword");
        }
      } catch (e) {
        alert((e as Error).message);
      }
    } else {
      alert("All form fields are mandatory!!!");
    }
    setIsResetBtnClicked(false);
  };

  const dataFieldList = {
    property: [
      {
        // label: "Reset Email Id",
        type: "text",
        name: "email",
      },
    ],
  };

  const buttonList: buttonFieldProps = {
    property: [
      {
        type: "submit",
        value: isResetBtnClicked ? Resetting : Reset,
      },
    ],
  };

  const formHeaderProps = {
    header: FORGOT_PASSWORD_FORM_HEADER,
    style: {
      textAlign: "center",
      color: "black",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  };

  return (
    <Page>
      <Form
        formHeader={formHeaderProps}
        formBodyStack={[
          <FormDataFieldStack dataFieldStackList={dataFieldList} />,
        ]}
        formFooterStack={[<FormButtonStack buttonStackList={buttonList} />]}
        subFooterComponent={
          <Button
            type="button"
            value={LOGIN_BUTTON_TEXT}
            onClick={() => routerNavigation(LOGIN_PATH)}
            variant={PRIMARY_BUTTON_VARIANT}
            width={FULL_WIDTH}
          />
        }
        onFormSubmit={onFormSubmit}
      />
    </Page>
  );
};
export default React.memo(ForgotPassword);



