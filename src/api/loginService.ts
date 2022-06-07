import { FORGOT_PASSWORD, RESET_PASSWORD, USER_LOGIN } from "../lib/apiPath";
import { SUCCESS_CODE } from "../lib/constant";
import { makePostRequest } from "./apiService";

//user login api call
const userLogin = async (reqData: object): Promise<Record<string, string>> => {
  try {
    const payload = {
      ...reqData,
    };

    const response = await makePostRequest({
      path: USER_LOGIN,
      payload,
    });

    if (response.responseCode === SUCCESS_CODE) {
      return response.responseData;
    } else {
      throw new Error(response.responseMessage);
    }
  } catch (err) {
    throw err;
  }
};

const userForgotPassword = async (
  reqData: object
): Promise<object | string> => {
  try {
    const payload = {
      ...reqData,
    };

    const response = await makePostRequest({
      path: FORGOT_PASSWORD,
      payload,
    });

    if (response.responseCode === SUCCESS_CODE) {
      return response.responseData;
    } else {
      throw new Error(response.responseMessage);
    }
  } catch (err) {
    throw err;
  }
};

const userResetPassword = async (reqData: object): Promise<object | string> => {
  try {
    const payload = {
      ...reqData,
    };

    const response = await makePostRequest({
      path: RESET_PASSWORD,
      payload,
    });

    if (response.responseCode === SUCCESS_CODE) return response.responseData;
    else throw new Error(response.responseMessage);
  } catch (err) {
    throw err;
  }
};

export { userLogin, userForgotPassword, userResetPassword };
