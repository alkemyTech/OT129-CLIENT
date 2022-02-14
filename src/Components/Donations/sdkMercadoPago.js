import axios from "axios";

const token = process.env.REACT_APP_TOKEN_MP;
const URL = "https://api.mercadopago.com/checkout/preferences";
/**
 * Method to make a payment through payment market
 * @param {number} amount
 * @returns {Promise}
 */

export const redirectToMercadoPago = (amount) => {
  const data = {
    items: [
      {
        title: "Donación ONG 'Somos más'",
        quantity: 1,
        unit_price: amount,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/gracias",
    },
    payment_methods: {
      excluded_payment_methods: [
        {
          id: "atm",
        },
      ],
      excluded_payment_types: [
        {
          id: "ticket",
        },
      ],
    },
  };

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.post(URL, data, { headers }).then((response) => {
    window.location.href = response.data.sandbox_init_point;
  });
};
