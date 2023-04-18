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
    status: 'Pendente de Aprovação',
    openAt: '2023-04-18T03:17:58.137Z',
    startedAt: '',
    finishedAt: '',
    mechanic: '',
  },
  {
    id: 2,
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
    openAt: '2023-04-18T03:17:58.137Z',
    startedAt: '',
    finishedAt: '',
    mechanic: '',
  },
  {
    id: 3,
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
    status: 'Em andamento',
    openAt: '2023-04-18T03:17:58.137Z',
    startedAt: '2023-04-18T05:17:58.137Z',
    finishedAt: '',
    mechanic: 'Erinaldo',
  },
  {
    id: 4,
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
    status: 'Finalizada',
    openAt: '2023-04-18T03:17:58.137Z',
    startedAt: '2023-04-18T05:17:58.137Z',
    finishedAt: '2023-04-19T03:17:58.137Z',
    mechanic: 'Rafael',
  },
]

export default Orders;
