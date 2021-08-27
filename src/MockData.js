const mockDataProducts = [
    {
        id: "1",
        title: "Gestión de remiserías",
        description: "Sistema de gestión para remiserías",
        price: "10500",
        pictureUrl: '/resources/images/agencia.jpg',
        stock: 30,
        category: "escritorio",
    },
    {
        id: "2",
        title: "Gestión de flotas",
        description: "Sistema de gestión para mantenimiento de vehículos",
        price: "10500",
        pictureUrl: '/resources/images/mant.jpg',
        stock: 53,
        category: "escritorio",
    },
    {
        id: "3",
        title: "Gestión de mensajerías",
        description: "Sistema de gestión para motomensajerías y logística",
        price: "10500",
        pictureUrl: '/resources/images/mens.jpg',
        stock: 8,
        category: "escritorio",
    },
    {
        id: "4",
        title: "Gestión de peluquerías",
        description: "Sistema de gestión para peluquerías y salones de belleza",
        price: "10500",
        pictureUrl: '/resources/images/pelu.jpg',
        stock: 5,
        category: "escritorio",
    },
    {
        id: "5",
        title: "Gestión de PetShop",
        description: "Sistema de gestión para petshop y peluquería canina",
        price: "10500",
        pictureUrl: '/resources/images/pet.jpg',
        stock: 17,
        category: "escritorio",
    },
    {
        id: "6",
        title: "Gestión de gestorías",
        description: "Sistema de gestión para gestorías",
        price: "10500",
        pictureUrl: '/resources/images/pgestion.jpg',
        stock: 38,
        category: "escritorio",
    },
    {
        id: "7",
        title: "Gestión de préstamos",
        description: "Sistema de gestión para prestamistas y financieras",
        price: "10500",
        pictureUrl: '/resources/images/prest.jpg',
        stock: 0,
        category: "escritorio",
    },
    {
        id: "8",
        title: "Presupuestos y remitos",
        description: "Sistema simple para generar presupuestos y remitos personalizados",
        price: "3600",
        pictureUrl: '/resources/images/presu.jpg',
        stock: 5,
        category: "escritorio",
    },
    {
        id: "9",
        title: "Prontas Ventas",
        description: "Punto de venta multi rubro para gestionar comercios",
        price: "5900",
        pictureUrl: '/resources/images/pventas.jpg',
        stock: 0,
        category: "escritorio",
    },
    {
        id: "10",
        title: "Carta QR",
        description: "Carta digital para comercios gastronómicos",
        price: "1800",
        pictureUrl: '/resources/images/qmenu.jpg',
        stock: 42,
        category: "web",
    },
    {
        id: "11",
        title: "ViaGEST",
        description: "Sistema web de gestión para logísticas y mensajerías",
        price: "8000",
        pictureUrl: '/resources/images/viagest.jpg',
        stock: 3,
        category: "web",
    },
];

const mockDataCategories = [
    {
        name: "Sistemas WEB",
        shortname: "web",
        description: "Sistemas para usarse online desde un navegador web",
    },
    {
        name: "Sistemas de escritorio",
        shortname: "escritorio",
        description: "Sistemas para utilizarse en una pc sin conexión a internet",
    },
];


export { mockDataProducts, mockDataCategories };