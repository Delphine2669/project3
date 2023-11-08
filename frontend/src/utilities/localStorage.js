export const removeToken = () => {
  localStorage.removeItem("token");
  console.info("Token removed from local storage");
};

export const saveToken = (token) => {
  localStorage.setItem("token", token);
  console.info("Token saved in local storage:", token);
};
