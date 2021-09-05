import { createSlice } from "@reduxjs/toolkit";

const initialPhones = [
    {
        id: 'Iphone-12-Series',
        title: 'Iphone 12 Series',
        list: [
            {
                id: 'iphone-12-pro-max',
                title: 'IPHONE 12 PRO MAX',
                selectedProduct: 1,
                listProducts: [
                    {
                        id: '12-pro-max-128gb-blue',
                        name: 'Iphone 12 PRO MAX || 128GB',
                        photo: '/assets/img/Iphone/12-Series/12-pro-max-Blue.jpg',
                        rating: 5,
                        price: 1250,
                        color: 'blue',
                        memory: '128GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.7 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '6 GB',
                            rom: '128GB'
                        },
                        sale: 10
                    },

                    {
                        id: '12-pro-max-128gb-black',
                        name: 'Iphone 12 PRO MAX || 128GB',
                        photo: '/assets/img/Iphone/12-Series/12-pro-max-Black.jpg',
                        rating: 5,
                        price: 1240,
                        color: 'black',
                        memory: '128GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.7 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '6 GB',
                            rom: '128GB'
                        }
                    },

                    {
                        id: '12-pro-max-128gb-silver',
                        name: 'Iphone 12 PRO MAX || 128GB',
                        photo: '/assets/img/Iphone/12-Series/12-pro-Silver.jpg',
                        rating: 5,
                        price: 1260,
                        color: 'white',
                        memory: '128GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.7 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '6 GB',
                            rom: '128GB'
                        }
                    },

                    {
                        id: '12-pro-max-256gb-silver',
                        name: 'Iphone 12 PRO MAX || 256GB',
                        photo: '/assets/img/Iphone/12-Series/12-pro-Silver.jpg',
                        rating: 5,
                        price: 1260,
                        color: 'white',
                        memory: '256GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.7 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '6 GB',
                            rom: '256GB'
                        },
                        sale: 12
                    },

                    {
                        id: '12-pro-max-256gb-black',
                        name: 'Iphone 12 PRO MAX || 256GB',
                        photo: '/assets/img/Iphone/12-Series/12-pro-Black.jpg',
                        rating: 5,
                        price: 1060,
                        color: 'black',
                        memory: '256GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.7 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '6 GB',
                            rom: '128GB'
                        }
                    },
                ]
            },

            {
                id: 'iphone-12-pro',
                title: 'IPHONE 12 PRO',
                selectedProduct: 1,
                listProducts: [
                    {
                        id: '12-pro-128gb-black',
                        name: 'Iphone 12 PRO || 256GB',
                        photo: '/assets/img/Iphone/12-Series/12-pro-max-Black.jpg',
                        rating: 5,
                        price: 1000,
                        color: 'black',
                        memory: '128GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '6 GB',
                            rom: '128GB'
                        },
                        sale: 99
                    },

                    {
                        id: '12-pro-128gb-blue',
                        name: 'Iphone 12 PRO || 128GB',
                        photo: '/assets/img/Iphone/12-Series/12-pro-max-Blue.jpg',
                        rating: 5,
                        price: 1045,
                        color: 'blue',
                        memory: '128GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '6 GB',
                            rom: '128GB'
                        }
                    },

                    {
                        id: '12-pro-128gb-silver',
                        name: 'Iphone 12 PRO || 128GB',
                        photo: '/assets/img/Iphone/12-Series/12-pro-Silver.jpg',
                        rating: 5,
                        price: 1060,
                        color: 'white',
                        memory: '128GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '6 GB',
                            rom: '128GB'
                        }
                    },

                    {
                        id: '12-pro-256gb-silver',
                        name: 'Iphone 12 PRO || 256GB',
                        photo: '/assets/img/Iphone/12-Series/12-pro-Silver.jpg',
                        rating: 5,
                        price: 1150,
                        color: 'white',
                        memory: '256GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '6 GB',
                            rom: '128GB'
                        }
                    },

                    {
                        id: '12-pro-256gb-Blue',
                        name: 'Iphone 12 PRO || 256GB',
                        photo: '/assets/img/Iphone/12-Series/12-pro-max-Blue.jpg',
                        rating: 5,
                        price: 1140,
                        color: 'blue',
                        memory: '256GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '6 GB',
                            rom: '128GB'
                        }
                    },
                ]
            },

            {
                id: 'iphone-12',
                title: 'IPHONE 12',
                selectedProduct: 1,
                listProducts: [
                    {
                        id: '12-64gb-Blue',
                        name: 'Iphone 12 || 64GB',
                        photo: '/assets/img/Iphone/12-Series/12-Blue.jpg',
                        rating: 4,
                        price: 900,
                        color: 'blue',
                        memory: '64GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        },
                        sale:11,
                    },

                    {
                        id: '12-64gb-Green',
                        name: 'Iphone 12 || 64GB',
                        photo: '/assets/img/Iphone/12-Series/12-Green.jpg',
                        rating: 4,
                        price: 900,
                        color: 'green',
                        memory: '64GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },

                    {
                        id: '12-64gb-Violet',
                        name: 'Iphone 12 || 64GB',
                        photo: '/assets/img/Iphone/12-Series/12-violet.jpg',
                        rating: 4,
                        price: 920,
                        color: 'violet',
                        memory: '64GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },

                    {
                        id: '12-128gb-Violet',
                        name: 'Iphone 12 || 128GB',
                        photo: '/assets/img/Iphone/12-Series/12-violet.jpg',
                        rating: 4,
                        price: 950,
                        color: 'violet',
                        memory: '128GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '128GB'
                        }
                    },

                    {
                        id: '12-128gb-Blue',
                        name: 'Iphone 12 || 128GB',
                        photo: '/assets/img/Iphone/12-Series/12-Blue.jpg',
                        rating: 4,
                        price: 970,
                        color: 'blue',
                        memory: '128GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '128GB'
                        }
                    },

                    {
                        id: '12-128gb-Green',
                        name: 'Iphone 12 || 128GB',
                        photo: '/assets/img/Iphone/12-Series/12-Green.jpg',
                        rating: 4,
                        price: 950,
                        color: 'green',
                        memory: '128GB',
                        description: 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A14 Bionic (5 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },
                ]
            },


        ]
    },
    {
        id: 'Iphone-11-Series',
        title: 'Iphone 11 Series',
        list: [
            {
                id: 'iphone-11-pro-max',
                title: 'IPHONE 11 PRO MAX',
                selectedProduct: 1,
                listProducts: [
                    {
                        id: '11-pro-max-64gb-black',
                        name: 'Iphone 11 PRO MAX || 64GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Black.jpg',
                        rating: 4.5,
                        price: 1000,
                        color: 'blue',
                        memory: '64GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        },
                        sale: 10,
                    },


                    {
                        id: '11-pro-max-64gb-green',
                        name: 'Iphone 11 PRO MAX || 64GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Green.jpg',
                        rating: 4.5,
                        price: 1010,
                        color: 'green',
                        memory: '64GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },

                    {
                        id: '11-pro-max-64gb-gold',
                        name: 'Iphone 11 PRO MAX || 64GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Gold.jpg',
                        rating: 4.5,
                        price: 1030,
                        color: 'yellow',
                        memory: '64GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        },
                        sale: 10,
                    },

                    {
                        id: '11-pro-max-64gb-Silver',
                        name: 'Iphone 11 PRO MAX || 64GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Silver.jpg',
                        rating: 4.5,
                        price: 1030,
                        color: 'white',
                        memory: '64GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },

                    {
                        id: '11-pro-max-256gb-black',
                        name: 'Iphone 11 PRO MAX || 256GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Black.jpg',
                        rating: 4.5,
                        price: 1070,
                        color: 'blue',
                        memory: '256GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },


                    {
                        id: '11-pro-max-256gb-green',
                        name: 'Iphone 11 PRO MAX || 256GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Green.jpg',
                        rating: 4.5,
                        price: 1010,
                        color: 'green',
                        memory: '256GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },

                    {
                        id: '11-pro-max-256gb-gold',
                        name: 'Iphone 11 PRO MAX || 256GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Gold.jpg',
                        rating: 4.5,
                        price: 1130,
                        color: 'yellow',
                        memory: '256GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },

                    {
                        id: '11-pro-max-256gb-Silver',
                        name: 'Iphone 11 PRO MAX || 256GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Sliver.jpg',
                        rating: 4.5,
                        price: 1130,
                        color: 'white',
                        memory: '256GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },
                ]
            },

            {
                id: 'iphone-11-pro',
                title: 'IPHONE 11 PRO',
                selectedProduct: 1,
                listProducts: [
                    {
                        id: '11-pro-64gb-black',
                        name: 'Iphone 11 PRO || 64GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Black.jpg',
                        rating: 4.5,
                        price: 1000,
                        color: 'blue',
                        memory: '64GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        },
                        sale: 10,
                    },


                    {
                        id: '11-pro-64gb-green',
                        name: 'Iphone 11 PRO || 64GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Green.jpg',
                        rating: 4.5,
                        price: 1010,
                        color: 'green',
                        memory: '64GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },

                    {
                        id: '11-pro-64gb-gold',
                        name: 'Iphone 11 PRO || 64GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Gold.jpg',
                        rating: 4.5,
                        price: 1030,
                        color: 'yellow',
                        memory: '64GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        },
                        sale: 10,
                    },

                    {
                        id: '11-pro-64gb-Silver',
                        name: 'Iphone 11 PRO || 64GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Sliver.jpg',
                        rating: 4.5,
                        price: 1030,
                        color: 'white',
                        memory: '64GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },

                    {
                        id: '11-pro-256gb-black',
                        name: 'Iphone 11 PRO || 256GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Black.jpg',
                        rating: 4.5,
                        price: 1070,
                        color: 'blue',
                        memory: '256GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },


                    {
                        id: '11-pro-256gb-green',
                        name: 'Iphone 11 PRO || 256GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Green.jpg',
                        rating: 4.5,
                        price: 1010,
                        color: 'green',
                        memory: '256GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },

                    {
                        id: '11-pro-256gb-gold',
                        name: 'Iphone 11 PRO || 256GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Gold.jpg',
                        rating: 4.5,
                        price: 1130,
                        color: 'yellow',
                        memory: '256GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },

                    {
                        id: '11-pro-256gb-Silver',
                        name: 'Iphone 11 PRO || 256GB',
                        photo: '/assets/img/Iphone/11-Series/11-pro-Sliver.jpg',
                        rating: 4.5,
                        price: 1000,
                        color: 'white',
                        memory: '256GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },
                ]
            },

            {
                id: 'iphone-11',
                title: 'IPHONE 11',
                selectedProduct: 1,
                listProducts: [
                    {
                        id: '11-64gb-Black',
                        name: 'Iphone 11|| 64GB',
                        photo: '/assets/img/Iphone/11-Series/11-black.jpg',
                        rating: 4,
                        price: 780,
                        color: 'black',
                        memory: '64GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB',
                            
                        },
                        sale:15
                    },

                    {
                        id: '11-64gb-green',
                        name: 'Iphone 11|| 64GB',
                        photo: '/assets/img/Iphone/11-Series/11-green.jpg',
                        rating: 4,
                        price: 780,
                        color: 'green',
                        memory: '64GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },

                    {
                        id: '11-64gb-red',
                        name: 'Iphone 11|| 64GB',
                        photo: '/assets/img/Iphone/11-Series/11-red.jpg',
                        rating: 4,
                        price: 780,
                        color: 'red',
                        memory: '64GB',
                        description: 'iPhone 11 Pro Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.1 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A13 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },
                ]
            },


        ]
    },
    {
        id: 'Iphone-XS-Series',
        title: 'Iphone XS Series',
        list: [
            {
                id: 'iphone-xs-max',
                title: 'IPHONE XS MAX',
                selectedProduct: 1,
                listProducts:[
                    {
                        id: 'xs-max-64gb-gold',
                        name: 'Iphone Xs MAX || 64GB',
                        photo: '/assets/img/Iphone/Xs-Series/xs-gold.jpg',
                        rating: 4.5,
                        price: 650,
                        color: 'yellow',
                        memory: '64GB',
                        description: 'iPhone xs Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A12 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        },
                        sale: 10
                    },
        
                    {
                        id: 'xs-max-64gb-silver',
                        name: 'Iphone Xs MAX || 64GB',
                        photo: '/assets/img/Iphone/Xs-Series/xs-silver.jpg',
                        rating: 4.5,
                        price: 650,
                        color: 'white',
                        memory: '64GB',
                        description: 'iPhone xs Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A12 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        }
                    },
                ]
            },
           
            {
                id: 'iphone-xs',
                title: 'IPHONE XS',
                selectedProduct: 1,
                listProducts:[
                    {
                        id: 'xs-64gb-silver',
                        name: 'Iphone Xs || 64GB',
                        photo: '/assets/img/Iphone/Xs-Series/xs-silver.jpg',
                        rating: 4.5,
                        price: 650,
                        color: 'white',
                        memory: '64GB',
                        description: 'iPhone xs Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A12 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        },
                        sale:12
                    },
        
                    {
                        id: 'xr-64gb-black',
                        name: 'Iphone Xr || 64GB',
                        photo: '/assets/img/Iphone/Xs-Series/xr-black.jpg',
                        rating: 4,
                        price: 500,
                        color: 'black',
                        memory: '64GB',
                        description: 'iPhone xs Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A12 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        },
                        sale: 10
                    },
                ]
            },

            {
                id: 'iphone-xr',
                title: 'IPHONE XR',
                selectedProduct: 1,
                listProducts:[
                    {
                        id: 'xr-64gb-white',
                        name: 'Iphone Xr || 64GB',
                        photo: '/assets/img/Iphone/Xs-Series/xr-white.jpg',
                        rating: 4,
                        price: 500,
                        color: 'white',
                        memory: '64GB',
                        description: 'iPhone xs Max 64 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.',
                        type: "NEW VN/A",
                        specifications: {
                            screenSize: '6.5 inches',
                            screenTechnology: 'OLED',
                            chipset: 'Apple A12 Bionic (7 nm)',
                            rearCamera: '12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS',
                            frontCamera: '12 MP, f/2.2, 23mm (wide), 1/3.6',
                            ram: '4 GB',
                            rom: '64GB'
                        },
                        sale: 10
                    },
                ]
            },
        ]
    },
];



const phones = createSlice({
    name: 'phones',
    initialState: initialPhones,
    reducers: {

    }
})

const { reducer, action } = phones

export default reducer;