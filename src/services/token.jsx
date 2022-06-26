export const getToken = (token) => {
  console.log("oi",token);
  localStorage.setItem("token", token)
};

export const saveRole = ((role) => localStorage.setItem("role", role));

export const removeToken = ((token) => localStorage.removeItem("token", token));