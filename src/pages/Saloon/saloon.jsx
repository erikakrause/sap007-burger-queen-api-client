import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrder, getMenu } from '../../services/api';
import { removeToken } from '../../services/token';
import { filterProducts } from '../../services/filter';
//import { errorMsg } from '../../services/error';
import Logo from '../../components/Logo/logo';
import Button from '../../components/Button/button';
import Input from '../../components/Input/input';
import Select from '../../components/Select/select';
import ProductCard from '../../components/ProductCard/productCard';
import Command from '../../components/Command/command';

export const Saloon = () => {
  const [products, setProducts] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [chooseTable, setChooseTable] = useState('');
  const [nameClient, setNameClient] = useState('');
  const [sumOrders, setSumOrders] = useState(0);
  const navigate = useNavigate();

  const handleLogout = () => {
  removeToken();
  navigate('/');
  };

  const showMenu = (option) => {
    getMenu()
      .then((response) => response.json())
      .then((data) => setProducts(filterProducts(data, option)));
  };

  const handleShowMenu = (e) => {
    showMenu(e.target.value);
  };

  const handleAddOrders = (item) => {
    const verifyIdProduct = orderProducts.find(
      (itemOrder) => itemOrder.id === item.id
    );
    let newOrderProducts = [...orderProducts];
    if (verifyIdProduct) {
      verifyIdProduct.qtd++;
      console.log(newOrderProducts, 'estou no if');
    } else {
      const product = { ...item, qtd: 1 };
      console.log('else');
      newOrderProducts.push(product);
    }
    setOrderProducts(newOrderProducts);
  };

  const handleRemoveOrders = (item) => {
    const verifyIdProduct = orderProducts.find(
      (itemOrder) => itemOrder.id === item.id
    );
    let newOrderProducts = [...orderProducts];
    if (verifyIdProduct.qtd > 1) {
      verifyIdProduct.qtd -= 1;
    } else {
      newOrderProducts = newOrderProducts.filter((itemOrder) => itemOrder.id !== item.id
      );
    }
    setOrderProducts(newOrderProducts);
  };

  const handleSubmitOrder = () => {
    createOrder(nameClient, chooseTable, orderProducts).then((response) => {
      if (response.status === 200) {
        setNameClient('');
        setChooseTable('');
        setOrderProducts([]);
      } else {
        console.log('nao deu certo');
      }
    });
  };

  useEffect(() => {
    showMenu('breakfast');
  }, []);

  useEffect(() => {
    const sum = orderProducts.reduce((previousPrice, item) => {
      return previousPrice + item.qtd * item.price;
    }, 0);
    setSumOrders(sum);
  }, [orderProducts]);

  return (
    <>
      <div>
        <Logo />
      </div>
      <section className="container-saloon">
        <div className="container-products">
          <div className="buttons-products">
            <Button
              value="breakfast"
              className="btn-breakfast"
              onClick={handleShowMenu}
            >
              Café da Manhã
            </Button>
            <Button
              value="all-day"
              className="btn-all-day"
              onClick={handleShowMenu}
            >
              Almoço e Jantar
            </Button>
            <Button value="ready-order" className="btn-products">
              Pedidos Prontos
            </Button>
          </div>
          <div className="menu-products">
            <ul className="all-products">
              {products.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    flavor={item.flavor}
                    complement={item.complement}
                    price={item.price}
                    onclick={() => handleAddOrders(item)}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <aside className="order">
          <div className="command">
            <p className="order-command">Resumo do Pedido:</p>
            <div>
              <Input
                className="client-name"
                placeholder="Nome do Cliente"
                value={nameClient}
                onChange={(e) => setNameClient(e.target.value)}
              />
              <Select
                className="select-table"
                value={chooseTable}
                onChange={(e) => setChooseTable(e.target.value)}
                optionValues={[
                  { id: 'selected', title: 'Mesa' },
                  { title: '1' },
                  { title: '2' },
                  { title: '3' },
                  { title: '4' },
                  { title: '5' },
                ]}
              />
            </div>
            <ul className="item-command">
              {orderProducts.map((item) => {
                return (
                  <li
                    className="itens-command-client"
                    key={`Prdoducts${item.id}`}
                  >
                    <Command
                      name={item.name}
                      qtd={item.qtd}
                      flavor={item.flavor}
                      complement={item.complement}
                      price={item.price}
                    />
                    <Button
                      className="btn-remove"
                      onClick={() => handleRemoveOrders(item)}
                    ></Button>
                    <Button
                      className="btn-add"
                      onClick={() => handleAddOrders(item)}
                    ></Button>
                  </li>
                );
              })}
            </ul>
            <div className="order-completion">
              <p className="total-order">Valor Total: R${sumOrders},00</p>

              <Button className="btn-send-order" onClick={handleSubmitOrder}>
                Enviar Pedido
              </Button>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};
export default Saloon;
