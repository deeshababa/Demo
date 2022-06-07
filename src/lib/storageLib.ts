export const readingDataFromLocalStorage = (field: string) => {
  return localStorage.getItem(field);
};

export const storingDataToLocalStorage = (field: string, value: string) => {
  localStorage.setItem(field, value);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
