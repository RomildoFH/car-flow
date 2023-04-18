const Orders = [
  {
    id: 1,
    customer: {
      name: 'Romildo Silva Filho',
      car: 'Grand Siena 1.6',
      plate: 'XYZ-1234',
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
        id: 5,
        name: 'Substituição do filtro de óleo',
        price: 20.00,
        type: 'Serviço',
      },
      {
        id: 6,
        name: "Motor Bomba Cambio Dualogic",
        price: 1792.00,
        type: 'Produto',
      },
    ],
    status: 'Aguardando',
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
      plate: 'ABC-9874',
      year: '2014',
      phone: '4002-8922',
    },
    budget: [
      {
        id: 2,
        name: "Substituição de correia dentada",
        price: 150.00,
        type: 'Serviço',
      },
      {
        id: 6,
        name: "Motor Bomba Cambio Dualogic",
        price: 1792.00,
        type: 'Produto',
      },
    ],
    status: 'Aguardando',
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
      plate: 'QWE-2587',
      year: '2014',
      phone: '4002-8922',
    },
    budget: [
      {
        id: 4,
        name: 'Substituição do terminal da suspensão diânteira um lado',
        price: 40.00,
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
      plate: 'DSA-6541',
      year: '2014',
      phone: '4002-8922',
    },
    budget: [
      {
        id: 5,
        name: 'Substituição do filtro de óleo',
        price: 20.00,
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
