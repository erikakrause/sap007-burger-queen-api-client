import { saveToken } from '../services/token';
const URL = 'https://lab-api-bq.herokuapp.com';

export const createUser = (name, email, password, role) => {
  return fetch(`${URL}/users`, {
    method:'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: 'White Castle'
    })
  });
};

export const userLogin = (email, password) => {
  return fetch(`${URL}/auth`, {
    method:'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      email:email,
      password:password,
    })
  });
};

export const getMenu = () => {
  return fetch(`${URL}/products`,{
    method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': saveToken('token')},
  });
};

export const createOrder = (client, table, products) => {
  return fetch(`${URL}/orders`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': saveToken('token')},
    body: JSON.stringify({
    client: client,
    table: table,
    products: products,  
    })  
  });
};

export const getProducts = () => {
  return fetch("https://lab-api-bq.herokuapp.com/orders",{
  method: "GET",
  headers: {"Content-Type": "application/json", Authorization: saveToken('token') },
  });
};

export const orderStatus = (orderId, status) => {
  return fetch(`${URL}/orders/${orderId}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': saveToken('token')},
    body: JSON.stringify({
    status: status, 
    })  
  });
};