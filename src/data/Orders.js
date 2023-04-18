const Orders = [
  {
    id: 1,
    customer: {
      name: 'Romildo Silva Filho',
      car: 'Grand Siena 1.6',
      plate: 'XYZ1234',
      year: '2014',
      phone: '4002-8922',
    },
    budget: [
      {
        id: 3,
        name: "Diagnóstico com robô",
        price: 70.00,
        type: 'Serviço',
      },
      {
        id: 6,
        name: "Motor Bomba Cambio Dualogic",
        price: 1792.00,
        type: 'Produto',
      },
    ],
    status: 'Aberta',
    openAt: '',
    startedAt: '',
    finishedAt: '',
  }
]

export default Orders;
