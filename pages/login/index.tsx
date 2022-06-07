import { NextPage } from "next";
import React, { useContext, useState } from "react";
import { userLogin } from "../../src/api/loginService";
import { LinkButton } from "../../src/components/Button";
import Form from "../../src/components/Form";
import FormButtonStack from "../../src/components/FormButtonStack";
import FormDataFieldStack from "../../src/components/FormDataFieldStack";
import Toast from "../../src/components/Toast";
import { AuthContext } from "../../src/context/AuthProvider";
import {
  ButtonName,
  FORGOT_PASSWORD_BUTTON_TEXT,
  FORGOT_PASSWORD_PATH,
  INVALID_EMAIL,
  INVALID_PASSWORD_LENGTH,
  LANDING_PAGE,
  LOGIN_FORM_HEADER,
  LOGIN_TYPE,
  MANDATORY_FIELD,
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SIGN_UP_BUTTON_TEXT,
  SIGN_UP_PATH
} from "../../src/lib/constant";
import { routerNavigation, validateEmail } from "../../src/lib/helper";
import { storingDataToLocalStorage } from "../../src/lib/storageLib";
import { buttonFieldProps, formDataProps } from "../../src/lib/types";
import { Box, Container, Page, Text } from "../../styles/globalStyles";

const Login: NextPage = () => {
  const { setToken } = useContext(AuthContext);
  const [isLoginBtnClicked, setIsLoginBtnClicked] = useState<Boolean>(false);
  const [show, setShow] = useState(false);
  const { Login, LoggingIn } = ButtonName;

  const formValidation = (formData: formDataProps) => {
    if (!formData.email || !formData.password) {
      alert(MANDATORY_FIELD);
    } else if (
      formData.password.length < MIN_PASSWORD_LENGTH ||
      formData.password.length > MAX_PASSWORD_LENGTH
    ) {
      alert(INVALID_PASSWORD_LENGTH);
    } else {
      return true;
    }
  };

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoginBtnClicked(true);

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const formData = {
      email: target.email.value,
      password: target.password.value,
    };

    if (formValidation(formData)) {
      if (validateEmail(formData.email)) {
        const req = {
          login_type: LOGIN_TYPE.EMAIL,
          email: formData.email,
          password: formData.password,
        };

        try {
          const res = await userLogin(req);
          if (res) {
            setToken(res.access_token);
            storingDataToLocalStorage("accessToken", res.access_token);
            routerNavigation(LANDING_PAGE);
          }
        } catch (e) {
          alert((e as Error).message);
        }
      } else {
        setShow(true);
       
      }
    }
    setIsLoginBtnClicked(false);
  };

  const dataFieldList = {
    flexDirection : "column",
    property: [
      {
        label: "Email",
        type: "text",
        name: "email",
      },
      {
        label: "Password",
        type: "password",
        name: "password",
      },
    ],
  };

  const buttonList: buttonFieldProps = {
    property: [
      {
        type: "submit",
        value: isLoginBtnClicked ? LoggingIn : Login,
      },
    ],
  };

  const formHeaderProps = {
    header: LOGIN_FORM_HEADER,
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
        subBodyComponent={
          <Container>
            <LinkButton textColor={PRIMARY_COLOR} href={FORGOT_PASSWORD_PATH}>
              {FORGOT_PASSWORD_BUTTON_TEXT}
            </LinkButton>
          </Container>
        }
        subFooterComponent={
          <Box>
            <Text>Don't have an account yet?</Text>
            <LinkButton
              alignSelf={"center"}
              textColor={SECONDARY_COLOR}
              href={SIGN_UP_PATH}
            >
              {SIGN_UP_BUTTON_TEXT}
            </LinkButton>
          </Box>
        }
      />
      {show && (
        <Toast
          type="error"
          position="top-right"
          onClose={() => setShow(!show)}
          description={INVALID_EMAIL}
        ></Toast>
      )}
    </Page>
  );
};

export default React.memo(Login);