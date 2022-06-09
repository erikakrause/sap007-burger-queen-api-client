export const saveToken = (token) => {
  console.log("oi",token);
  localStorage.setItem("token", token)
};

export const saveRole = ((role) => localStorage.setItem("role", role));