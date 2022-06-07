import { NextPage } from "next";
import React, { useContext, useState } from "react";
import { userResetPassword } from "../../../src/api/loginService";
import Form from "../../../src/components/Form";
import FormButtonStack from "../../../src/components/FormButtonStack";
import FormDataFieldStack from "../../../src/components/FormDataFieldStack";
import { AuthContext } from "../../../src/context/AuthProvider";
import {
  ButtonName,
  LOGIN_PATH,
  MANDATORY_FIELD,
  PASSWORD_MISMATCH,
  RESET_PASSWORD_FORM_HEADER,
} from "../../../src/lib/constant";
import { routerNavigation } from "../../../src/lib/helper";
import { buttonFieldProps, formDataProps } from "../../../src/lib/types";
import { Page } from "../../../styles/globalStyles";

const ResetPassword: NextPage = () => {
  const [isUpdateBtnClicked, setIsUpdateBtnClicked] = useState<Boolean>(false);
  const { UpdatePassword, Updating } = ButtonName;
  const { token } = useContext(AuthContext);

  const formValidation = (formData: formDataProps) => {
    if (!formData.new_password || !formData.confirm_password) {
      alert(MANDATORY_FIELD);
    } else if (formData.new_password != formData.confirm_password) {
      alert(PASSWORD_MISMATCH);
    } else {
      return true;
    }
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUpdateBtnClicked(true);

    const target = e.target as typeof e.target & {
      new_password: { value: string };
      confirm_password: { value: string };
    };
    const formData = {
      new_password: target.new_password.value,
      confirm_password: target.confirm_password.value,
    };

    if (formValidation(formData)) {
      const req = {
        email: "",
        token: token,
        password: formData.new_password,
      };

      try {
        const res = await userResetPassword(req); //dummy api call
        if (res) {
          routerNavigation(LOGIN_PATH);
        }
      } catch (e) {
        alert((e as Error).message);
      }
    }
    setIsUpdateBtnClicked(false);
  };

  const dataFieldList = {
    flexDirection : "column",
    property: [
      {
        label: "Enter your new password",
        type: "password",
        name: "new_password",
      },
      {
        label: "Confirm new password",
        type: "password",
        name: "confirm_password",
      },
    ],
  };

  const buttonList: buttonFieldProps = {
    property: [
      {
        type: "submit",
        value: isUpdateBtnClicked ? Updating : UpdatePassword,
      },
    ],
  };

  const formHeaderProps = {
    header: RESET_PASSWORD_FORM_HEADER,
  };

  return (
    <Page>
      <Form
        formHeader={formHeaderProps}
        formBodyStack={[
          <FormDataFieldStack dataFieldStackList={dataFieldList} />,
        ]}
        formFooterStack={[<FormButtonStack buttonStackList={buttonList} />]}
        onFormSubmit={onFormSubmit}
      />
    </Page>
  );
};

export default React.memo(ResetPassword);
