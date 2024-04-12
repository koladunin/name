import img1 from '../public/partners/nike.jpg'
import img2 from '../public/partners/adidas.jpg'
import img3 from '../public/partners/newbalance.jpg'
import img4 from '../public/partners/puma.jpg'

//import React, { useState, useEffect } from 'react';

// export const products = [
//     {
//         id: 1,
//         name: "Чёрная футболка",
//         price: '2002'
//     },
//     {
//         id: 2,
//         name: "Белая футболка",
//         price: '2001'
//     },
//     {
//         id: 3,
//         name: "Красная футболка",
//         price: '1999'
//     },
//     {
//         id: 4,
//         name: "Жёлтая футболка",
//         price: '2004'
//     },
//     {
//         id: 5,
//         name: "Фиолетовая футболка",
//         price: '2007'
//     },
//     {
//         id: 6,
//         name: "Бежевая футболка",
//         price: '2009'
//     },

// ]

export const partners = [
    {
        id: 1,
        photo: img1,
    },
    {
        id: 2,
        photo: img2,
    },
    {
        id: 3,
        photo: img3,
    },
    {
        id: 4,
        photo: img4,
    },
    {
        id: 5,
        photo: img2,
    },
    {
        id: 6,
        photo: img3,
    },
]

//var files;
export const fetchData = async () => {
      const response = await fetch('https://reactapi.pautinaweb.ru/objects.php');
      const products = await response.json();
      return products;
};
export const products = await fetchData();
//   <div>
//     <p>{php product = product name}</p>
//     <li>{php product = product name}</li>
//   </div>