import { API_BASE_PATH } from "../lib/apiPath";

//API post request
const makePostRequest = ({
  path,
  payload,
  headers = {},
}: {
  path: string;
  payload: Record<string, string>;
  headers?: object;
}): Promise<{
  responseCode: number;
  responseData: Record<string, string>;
  responseMessage: string;
}> => {
  const requestOption: object = {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: new URLSearchParams(payload).toString(),
  };

  return fetch(API_BASE_PATH + path, requestOption)
    .then((response) => response.json())
    .catch((err) => {
      throw new Error(err);
    });
};

//API get request
const makeGetRequest = ({
  path,
  payload,
  headers = {},
}: {
  path: string;
  payload: object[];
  headers?: object;
}): Promise<{
  responseCode: number;
  responseData: Record<string, string> | Record<string, string>[];
  responseMessage: string;
}> => {
  let data = "";
  for (let key in payload) {
    data += key + "=" + payload[key] + "&";
  }
  const requestOption: object = {
    method: "GET",
    headers: { ...headers, "Content-Type": "application/json" },
  };

  return fetch(API_BASE_PATH + path + "?" + data, requestOption)
    .then((response) => response.json())
    .catch((err) => {
      throw new Error(err);
    });
};

export { makePostRequest, makeGetRequest };
