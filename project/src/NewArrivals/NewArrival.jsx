import React, { useState } from 'react';
import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

export const products = [
    // {
    //   id: "01",
    //   productName: "Stone and Beam Westview ",
    //   imgUrl: productImg01,
    //   category: "sofa",
    //   price: 193,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.7,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.5,
    // },
  
    // {
    //   id: "02",
    //   productName: "Rivet Bigelow Modern ",
    //   imgUrl: productImg02,
    //   category: "sofa",
    //   price: 253,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.8,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.8,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.7,
    // },
  
    // {
    //   id: "03",
    //   productName: "Amazon Brand Modern Sofa",
    //   imgUrl: productImg03,
    //   category: "sofa",
    //   price: 173,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.6,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.7,
    // },
    // {
    //   id: "26",
    //   productName: "Rivet Bigelow Modern ",
    //   imgUrl: productImg02,
    //   category: "sofa",
    //   price: 253,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.8,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.8,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.7,
    // },
    // {
    //   id: "04",
    //   productName: "Fllufy Sheep Sofa",
    //   imgUrl: productImg04,
    //   category: "sofa",
    //   price: 163,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.6,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.7,
    // },
  
    // {
    //   id: "05",
    //   productName: "Faux Velvet Sofa",
    //   imgUrl: productImg05,
    //   category: "sofa",
    //   price: 163,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.6,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.7,
    // },
  
    // {
    //   id: "06",
    //   productName: "Fllufy Sheep Sofa",
    //   imgUrl: productImg06,
    //   category: "sofa",
    //   price: 163,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.6,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.7,
    // },
    // {
    //   id: "07",
    //   productName: "Sakarias Armchair",
    //   imgUrl: productImg07,
    //   category: "chair",
    //   price: 99,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.6,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.7,
    // },
  
    // {
    //   id: "27",
    //   productName: "Modern Arm Sofa",
    //   imgUrl: productImg007,
    //   category: "sofa",
    //   price: 173,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.6,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.7,
    // },
  
    // {
    //   id: "08",
    //   productName: "Baltsar Chair",
    //   imgUrl: productImg08,
    //   category: "chair",
    //   price: 89,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.6,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.7,
    // },
  
    // {
    //   id: "09",
    //   productName: "Helmar Chair",
    //   imgUrl: productImg09,
    //   category: "chair",
    //   price: 112,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.6,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.7,
    // },
  
    {
      id: "10",
      productName: "Apple iPhone 12 Pro",
      imgUrl: phone01,
      category: "mobile",
      price: 799,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    // {
    //   id: "25",
    //   productName: "Sakarias Armchair",
    //   imgUrl: productImg10,
    //   category: "chair",
    //   price: 99,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.6,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.7,
    // },
    {
      id: "11",
      productName: "Apple iPhone 12 Max",
      imgUrl: phone02,
      category: "mobile",
      price: 799,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "12",
      productName: "Realme 8",
      imgUrl: phone03,
      category: "mobile",
      price: 599,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "13",
      productName: "One Plus Nord",
      imgUrl: phone04,
      category: "mobile",
      price: 799,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "14",
      productName: "Apple iPhone 13 Pro",
      imgUrl: phone05,
      category: "mobile",
      price: 899,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "15",
      productName: "Samsung Galaxy S22",
      imgUrl: phone06,
      category: "mobile",
      price: 699,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    // {
    //   id: "16",
    //   productName: "Rolex Watch",
    //   imgUrl: watch01,
    //   category: "watch",
    //   price: 299,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.8,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.8,
    // },
  
    // {
    //   id: "17",
    //   productName: "Timex Easy Reader Watch",
    //   imgUrl: watch02,
    //   category: "watch",
    //   price: 299,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.8,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.8,
    // },
  
    // {
    //   id: "18",
    //   productName: "Rolex Watch",
    //   imgUrl: watch03,
    //   category: "watch",
    //   price: 299,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.8,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.8,
    // },
  
    // {
    //   id: "19",
    //   productName: "Apple Watch",
    //   imgUrl: watch04,
    //   category: "watch",
    //   price: 399,
    //   shortDesc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    //   reviews: [
    //     {
    //       rating: 4.8,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //     {
    //       rating: 4.9,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //     },
    //   ],
    //   avgRating: 4.8,
    // },
  
    {
      id: "20",
      productName: "Beat Studio Wireless",
      imgUrl: wireless01,
      category: "wireless",
      price: 199,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
    {
      id: "21",
      productName: "Beat EP Headphones",
      imgUrl: wireless03,
      category: "wireless",
      price: 199,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "22",
      productName: "Black Headphones",
      imgUrl: wireless02,
      category: "wireless",
      price: 169,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
    {
      id: "23",
      productName: "Bluetooth Headphones",
      imgUrl: wireless04,
      category: "wireless",
      price: 139,
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
      reviews: [
        {
          rating: 4.8,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          rating: 4.9,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      avgRating: 4.8,
    },
  
  ];

const NewArrival = () => {
    const [cartItems, setCartItems] = useState(0);

    const handleAddToCart = () => {
        setCartItems(cartItems + 1);
        alert('Item added to cart!');
    };



    return (
        <div>
            <header>
                <h2>Cart Items: {cartItems}</h2>
            </header>
            <div className='container'>
                <h2 className='text-center'>New Arrivals</h2>
                {/*  */}
                <div className="row mb-3">
                    <div className="col-sm-4 mb-4 mb-sm-0">

                        <div className="card">
                         
                                <div className='d-flex justify-content-between p-3'>
                                    <button className='btn btn-info'>20% off</button>
                                    <i className="bi bi-star"></i>
                                </div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-center'>

                                        <img src={phone01} alt="phone01" style={{ height: '150px' }} />
                                    </div>
                                    <h6>Apple iPhone 12 Pro</h6>
                                    <div className='d-grid justify-content-start'>
                                        <div className="star-hover">
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between p-3'>
                                        <h6>$799</h6>
                                        <button
                                            onClick={handleAddToCart}
                                            style={{ borderRadius: '50%', border: '0px' }}
                                            className="add-cart-btn"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                              
                        </div>
                    </div>

                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="card-body">
                                <div className='d-flex justify-content-center'>

                                    <img src={phone02} alt="phone02" style={{ height: '150px' }} />
                                </div>
                                <h6>Apple iPhone 12 Max</h6>
                                <div className='d-grid justify-content-start'>
                                    <div className="star-hover">
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between p-3'>
                                    <h6>$799</h6>
                                    <button
                                        onClick={handleAddToCart}
                                        style={{ borderRadius: '50%', border: '0px' }}
                                        className="add-cart-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                      
                    </div>

                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="card-body">
                                <div className='d-flex justify-content-center'>

                                    <img src={phone03} alt="phone03" style={{ height: '150px' }} />
                                </div>
                                <h6>Realme 8</h6>
                                <div className='d-grid justify-content-start'>
                                    <div className="star-hover">
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between p-3'>
                                    <h6>$599</h6>
                                    <button
                                        onClick={handleAddToCart}
                                        style={{ borderRadius: '50%', border: '0px' }}
                                        className="add-cart-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*  */}

                <div className="row mb-3">
                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="card-body">
                                <div className='d-flex justify-content-center'>

                                    <img src={phone04} alt="phone04" style={{ height: '150px' }} />
                                </div>
                                <h6>One Plus Nord</h6>
                                <div className='d-grid justify-content-start'>
                                    <div className="star-hover">
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between p-3'>
                                    <h6>$799</h6>
                                    <button
                                        onClick={handleAddToCart}
                                        style={{ borderRadius: '50%', border: '0px' }}
                                        className="add-cart-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="card-body">
                                <div className='d-flex justify-content-center'>

                                    <img src={phone05} alt="phone05" style={{ height: '150px' }} />
                                </div>
                                <h6>apple iPhone 13 Pro</h6>
                                <div className='d-grid justify-content-start'>
                                    <div className="star-hover">
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between p-3'>
                                    <h6>$899</h6>
                                    <button
                                        onClick={handleAddToCart}
                                        style={{ borderRadius: '50%', border: '0px' }}
                                        className="add-cart-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star" ></i>
                            </div>
                            <div className="card-body">
                                <div className='d-flex justify-content-center'>

                                    <img src={phone06} alt="phone06" style={{ height: '150px' }} />
                                </div>
                                <h6>Samsung Galaxy 512</h6>
                                <div className='d-grid justify-content-start'>
                                    <div className="star-hover">
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between p-3'>
                                    <h6>$699</h6>
                                    <button
                                        onClick={handleAddToCart}
                                        style={{ borderRadius: '50%', border: '0px' }}
                                        className="add-cart-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*  */}
                <div className="row mb-3">
                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="card-body">
                                <div className='d-flex justify-content-center'>

                                    <img src={wireless01} alt="wireless01" style={{ height: '150px' }} />
                                </div>
                                <h6>Beat Studio Wireless</h6>
                                <div className='d-grid justify-content-start'>
                                    <div className="star-hover">
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between p-3'>
                                    <h6>$199</h6>
                                    <button
                                        onClick={handleAddToCart}
                                        style={{ borderRadius: '50%', border: '0px' }}
                                        className="add-cart-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star" ></i>
                            </div>
                            <div className="card-body">
                                <div className='d-flex justify-content-center'>

                                    <img src={wireless02} alt="wireless02" style={{ height: '150px' }} />
                                </div>
                                <h6>Beat EP Headphones</h6>
                                <div className='d-grid justify-content-start'>
                                    <div className="star-hover">
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between p-3'>
                                    <h6>$199</h6>
                                    <button
                                        onClick={handleAddToCart}
                                        style={{ borderRadius: '50%', border: '0px' }}
                                        className="add-cart-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="card-body">
                                <div className='d-flex justify-content-center'>

                                    <img src={wireless03} alt="wireless03" style={{ height: '150px' }} />
                                </div>
                                <h6>Black Headphones</h6>
                                <div className='d-grid justify-content-start'>
                                    <div className="star-hover">
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between p-3'>
                                    <h6>$169</h6>
                                    <button
                                        onClick={handleAddToCart}
                                        style={{ borderRadius: '50%', border: '0px' }}
                                        className="add-cart-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/*  */}

                <div className="row mb-3">
                    <div className="col-sm-4 mb-4 mb-sm-0">

                    </div>

                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <div className="card">
                            <div className='d-flex justify-content-between p-3'>
                                <button className='btn btn-info'>20% off</button>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="card-body">
                                <div className='d-flex justify-content-center'>

                                    <img src={wireless04} alt="wireless04" style={{ height: '150px' }} />
                                </div>
                                <h6>Bluetooth Headphones</h6>
                                <div className='d-grid justify-content-start'>
                                    <div className="star-hover">
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between p-3'>
                                    <h6>$139</h6>
                                    <button
                                        onClick={handleAddToCart}
                                        style={{ borderRadius: '50%', border: '0px' }}
                                        className="add-cart-btn"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 mb-4 mb-sm-0">

                    </div>

                </div>


            </div>
        </div>
    );
};

export default NewArrival;
