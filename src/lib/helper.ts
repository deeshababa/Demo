import Router from "next/router";

//helper function
export const validateEmail = (email: string): boolean => {
  const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (email.match(reg)) return true;
  return false;
};

export const validateMobileNumber = (mobileNo: string): boolean => {
  const reg = /(0|91)?[7-9][0-9]{9}/;
  if (mobileNo.match(reg)) return true;
  return false;
};

export const routerNavigation = (path: string) => {
  return Router.push(path);
};
