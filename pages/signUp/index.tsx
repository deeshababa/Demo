import { NextPage } from "next";
import React, { useState } from "react";
import { userLogin } from "../../src/api/loginService";
import { LinkButton } from "../../src/components/Button";
import Form from "../../src/components/Form";
import FormButtonStack from "../../src/components/FormButtonStack";
import FormDataFieldStack from "../../src/components/FormDataFieldStack";
import {
  ButtonName,
  INVALID_EMAIL,
  INVALID_MOBILE_NUMBER,
  INVALID_PASSWORD_LENGTH,
  LOGIN_BUTTON_TEXT,
  LOGIN_PATH,
  LOGIN_TYPE,
  MANDATORY_FIELD,
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
  PASSWORD_MISMATCH,
  SECONDARY_COLOR,
  SIGN_UP_FORM_HEADER,
} from "../../src/lib/constant";
import {
  routerNavigation,
  validateEmail,
  validateMobileNumber
} from "../../src/lib/helper";
import { buttonFieldProps, formDataProps } from "../../src/lib/types";
import { Box, Page, Text } from "../../styles/globalStyles";

const SignUp: NextPage = () => {
  const [isSignUpBtnClicked, setIsSignUpBtnClicked] = useState<Boolean>(false);
  const { SigningUp, SignUp } = ButtonName;

  const formValidation = (formData: formDataProps) => {
    if (!formData.email || !formData.password) {
      alert(MANDATORY_FIELD);
    } else if (formData.password != formData.confirm_password) {
      alert(PASSWORD_MISMATCH);
    } else if (
      formData.password.length < MIN_PASSWORD_LENGTH ||
      formData.password.length > MAX_PASSWORD_LENGTH
    ) {
      alert(INVALID_PASSWORD_LENGTH);
    } else if (!validateEmail(formData.email)) {
      alert(INVALID_EMAIL);
    } else if (!validateMobileNumber(String(formData.mobile_number))) {
      alert(INVALID_MOBILE_NUMBER);
    } else {
      return true;
    }
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSignUpBtnClicked(true);

    const target = e.target as typeof e.target & {
      user_name: { value: string };
      email: { value: string };
      mobile_number: { value: number };
      password: { value: string };
      confirm_password: { value: string };
    };
    const formData = {
      user_name: target.user_name.value,
      email: target.email.value,
      mobile_number: target.mobile_number.value,
      password: target.password.value,
      confirm_password: target.confirm_password.value,
    };

    if (formValidation(formData)) {
      const req = {
        login_type: LOGIN_TYPE.EMAIL,
        email: formData.email,
        password: formData.password,
        user_name: formData.user_name,
      };

      try {
        const res = await userLogin(req);

        if (res) {
          routerNavigation(LOGIN_PATH);
        }
      } catch (e) {
        alert((e as Error).message);
      }
    }
    setIsSignUpBtnClicked(false);
  };

  const dataFieldList = {
    flexDirection : "column",
    property: [
      {
        label: "User name",
        type: "text",
        name: "user_name",
      },
      {
        label: "Email",
        type: "text",
        name: "email",
      },
      {
        label: "Mobile no",
        type: "number",
        name: "mobile_number",
      },
      {
        label: "Password",
        type: "password",
        name: "password",
      },
      {
        label: "Confirm password",
        type: "password",
        name: "confirm_password",
      },
    ],
  };

  const buttonList: buttonFieldProps = {
    property: [
      {
        type: "submit",
        value: isSignUpBtnClicked ? SigningUp : SignUp,
      },
    ],
  };

  const formHeaderProps = {
    header: SIGN_UP_FORM_HEADER,
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
        subFooterComponent={
          <Box>
            <Text>Already have an account?</Text>
            <LinkButton
              alignSelf={"center"}
              textColor={SECONDARY_COLOR}
              href={LOGIN_PATH}
            >
              {LOGIN_BUTTON_TEXT}
            </LinkButton>
          </Box>
        }
      />
    </Page>
  );
};

export default React.memo(SignUp);