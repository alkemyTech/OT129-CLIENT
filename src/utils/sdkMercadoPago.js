import axios from "axios";

export const redirectToMercadoPago = () => {
  const URL = "https://api.mercadopago.com/checkout/preferences";

  const data = {
    items: [
      {
        title: "Donación ONG 'Somos más'",
        quantity: 1,
        unit_price: 250,
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
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN_MP}`,
  };

  axios.post(URL, data, { headers }).then((response) => {
    window.location.href = response.data.sandbox_init_point;
  });
};
