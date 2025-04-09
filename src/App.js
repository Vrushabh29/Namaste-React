// const heading= React.createElement("h1",{ id:"heading", xyz:"1234"},"hello world React");

import React, { lazy, Suspense, useEffect, useState } from "react";

import  ReactDOM from "react-dom/client";

import Header from './component/Header';
import RestoCard from './component/RestoCard';
import Body from './component/Body';
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom"
 import appStore from "./utils/appStore"
  import { Provider } from "react-redux";


import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/Contact";
import RestoMenu from "./component/RestoMenu";
import UserContext from "./utils/userContext";
import Cart from "./component/Cart";


// const parent =  React.createElement("div",{ id:"parent"}, [React.createElement("div",{ id:"child1"}, [React.createElement("h1",{ },"hello h1" ) , React.createElement("h2",{ },"sdasdsd h2" ) ]), React.createElement("div",{ id:"child2"}, [React.createElement("h1",{ },"hello h1" ) , React.createElement("h2",{ },"hello h2" ) ])] );

const jsxHeading=(<h1> Namaste React,,,,,
    bdfhdsbfh hbsdfjhdsf ,,,,,,,,,</h1>
)

//function component

// const Title=()=> {
//     return ( <div className="Container">
//           <h1>Title</h1>
//       </div>)
//   }

  //component composition
// const Headingcomponent=()=> {
//   return ( <div className="Container">
//     <Title/>
//         <h1>function component</h1>
        
// {jsxHeading}
//     </div>)
// }

//Food ordr System



const restList = [
   
    {
    info: {
    id: "390138",
    name: "NH1 Bowls - Highway To North",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/d9e63da4-14e9-4275-91c8-e2ff0822af62_390138.jpg",
    locality: "Sainik Nagar",
    areaName: "Viman Nagar",
    costForTwo: "₹250 for two",
    cuisines: [
    "North Indian",
    "Punjabi",
    "Home Food"
    ],
    avgRating: 4.7,
    parentId: "22452",
    avgRatingString: "4.7",
    totalRatingsString: "1.5K+",
    sla: {
    deliveryTime: 25,
    lastMileTravel: 2.6,
    serviceability: "SERVICEABLE",
    slaString: "20-30 mins",
    lastMileTravelString: "2.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-09 02:00:00",
    opened: true
    },
    badges: {
    textExtendedBadges: [
    {
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available",
    fontColor: "#7E808C"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: {
    badgeObject: [
    {
    attributes: {
    description: "",
    fontColor: "#7E808C",
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available"
    }
    }
    ]
    }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹100"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/nh1-bowls-highway-to-north-sainik-nagar-viman-nagar-rest390138",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "516535",
    name: "Grameen Kulfi",
    cloudinaryImageId: "i6d0b6g7t8dllp6qnqsr",
    locality: "Riddh Enclave",
    areaName: "Viman Nagar",
    costForTwo: "₹120 for two",
    cuisines: [
    "Ice Cream",
    "Desserts"
    ],
    avgRating: 4.8,
    veg: true,
    parentId: "12175",
    avgRatingString: "4.8",
    totalRatingsString: "232",
    sla: {
    deliveryTime: 25,
    lastMileTravel: 2.2,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "2.2 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-09 02:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "pureveg",
    imageId: "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹200 OFF",
    subHeader: "ABOVE ₹499",
    discountTag: "FLAT DEAL"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/grameen-kulfi-riddh-enclave-viman-nagar-rest516535",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "146070",
    name: "Largo Pizzeria",
    cloudinaryImageId: "flcrnodfdhdrpvvg6ta0",
    locality: "Viman Nagar",
    areaName: "Viman Nagar",
    costForTwo: "₹600 for two",
    cuisines: [
    "Italian"
    ],
    avgRating: 4,
    parentId: "123491",
    avgRatingString: "4.0",
    totalRatingsString: "1.2K+",
    sla: {
    deliveryTime: 36,
    lastMileTravel: 2,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "2.0 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-09 01:30:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
    description: "bolt!"
    },
    {
    imageId: "newg.png",
    description: "Gourmet"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "bolt!",
    imageId: "bolt/Bolt%20Listing%20badge@3x.png"
    }
    },
    {
    attributes: {
    description: "Gourmet",
    imageId: "newg.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "60% OFF",
    subHeader: "UPTO ₹120"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.1",
    ratingCount: "6.1K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/largo-pizzeria-viman-nagar-rest146070",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "391085",
    name: "ZAZA Mughal Biryani",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/a537f298-852a-4fb8-967f-d335a596f53d_391085.jpg",
    locality: "Konark Industrial Estate",
    areaName: "Viman Nagar",
    costForTwo: "₹250 for two",
    cuisines: [
    "Biryani",
    "North Indian",
    "Awadhi"
    ],
    avgRating: 4.6,
    parentId: "22473",
    avgRatingString: "4.6",
    totalRatingsString: "444",
    sla: {
    deliveryTime: 25,
    lastMileTravel: 2.6,
    serviceability: "SERVICEABLE",
    slaString: "20-30 mins",
    lastMileTravelString: "2.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-09 02:00:00",
    opened: true
    },
    badges: {
    textExtendedBadges: [
    {
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available",
    fontColor: "#7E808C"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: {
    badgeObject: [
    {
    attributes: {
    description: "",
    fontColor: "#7E808C",
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available"
    }
    }
    ]
    }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹100 OFF",
    subHeader: "ABOVE ₹299",
    discountTag: "FLAT DEAL"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/zaza-mughal-biryani-konark-industrial-estate-viman-nagar-rest391085",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "643737",
    name: "WeFit - Protein Bowls, Salads & Sandwiches",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/b809590a-415a-48ff-bfee-e7a2a2b08dec_643737.jpg",
    locality: "Konark Industrial Estate",
    areaName: "Dhankawadi",
    costForTwo: "₹250 for two",
    cuisines: [
    "Healthy Food",
    "Salads",
    "Keto",
    "Snacks"
    ],
    avgRating: 4.7,
    parentId: "355285",
    avgRatingString: "4.7",
    totalRatingsString: "527",
    sla: {
    deliveryTime: 25,
    lastMileTravel: 2.6,
    serviceability: "SERVICEABLE",
    slaString: "20-30 mins",
    lastMileTravelString: "2.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-09 02:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹100 OFF",
    subHeader: "ABOVE ₹299",
    discountTag: "FLAT DEAL"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/wefit-protein-bowls-salads-and-sandwiches-konark-industrial-estate-dhankawadi-rest643737",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "623819",
    name: "Baskin Robbins - Ice Cream Desserts",
    cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
    locality: "Aero Mall",
    areaName: "Vishrantwadi",
    costForTwo: "₹250 for two",
    cuisines: [
    "Desserts",
    "Ice Cream"
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "5588",
    avgRatingString: "4.3",
    totalRatingsString: "204",
    sla: {
    deliveryTime: 26,
    lastMileTravel: 0.1,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "0.1 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-09 00:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "50% OFF",
    subHeader: "UPTO ₹100"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/baskin-robbins-ice-cream-desserts-aero-mall-vishrantwadi-rest623819",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "516534",
    name: "NIC Ice Creams",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/1eb58ce7-c5bb-4a4c-8e08-1a863031c82c_516534.jpg",
    locality: "Riddh Enclave",
    areaName: "Viman Nagar",
    costForTwo: "₹120 for two",
    cuisines: [
    "Ice Cream",
    "Desserts"
    ],
    avgRating: 4.7,
    veg: true,
    parentId: "6249",
    avgRatingString: "4.7",
    totalRatingsString: "1.3K+",
    sla: {
    deliveryTime: 23,
    lastMileTravel: 2.2,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "2.2 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-09 02:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹149"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/nic-ice-creams-riddh-enclave-viman-nagar-rest516534",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "50799",
    name: "Pind Punjab",
    cloudinaryImageId: "fu6hew6ih1h8bxgkipip",
    locality: "Konark Nagar",
    areaName: "Viman Nagar",
    costForTwo: "₹450 for two",
    cuisines: [
    "Indian",
    "Punjabi",
    "Chinese",
    "Biryani",
    "Thalis",
    "Mughlai",
    "Beverages",
    "Desserts"
    ],
    avgRating: 4.4,
    parentId: "4196",
    avgRatingString: "4.4",
    totalRatingsString: "42K+",
    sla: {
    deliveryTime: 36,
    lastMileTravel: 2.1,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "2.1 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-08 23:30:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹175 OFF",
    subHeader: "ABOVE ₹449",
    discountTag: "FLAT DEAL"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/pind-punjab-konark-nagar-viman-nagar-rest50799",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "3165",
    name: "Eatsome- Wraps & Rolls",
    cloudinaryImageId: "e56240a4b58956f47a5a1f8392470fbe",
    locality: "Sakore Nagar",
    areaName: "Viman Nagar",
    costForTwo: "₹300 for two",
    cuisines: [
    "North Indian",
    "Street Food",
    "Biryani",
    "Snacks",
    "Beverages"
    ],
    avgRating: 4.3,
    parentId: "471587",
    avgRatingString: "4.3",
    totalRatingsString: "26K+",
    sla: {
    deliveryTime: 35,
    lastMileTravel: 2.2,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "2.2 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-09 00:30:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹150 OFF",
    subHeader: "ABOVE ₹299",
    discountTag: "FLAT DEAL"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/eatsome-wraps-and-rolls-sakore-nagar-viman-nagar-rest3165",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "406967",
    name: "Fish Curry Rice",
    cloudinaryImageId: "hkz4akutwgqkgdr0o6r8",
    locality: "Viman Nagar",
    areaName: "Viman Nagar",
    costForTwo: "₹1000 for two",
    cuisines: [
    "Indian"
    ],
    avgRating: 4.4,
    parentId: "374",
    avgRatingString: "4.4",
    totalRatingsString: "528",
    sla: {
    deliveryTime: 35,
    lastMileTravel: 1.9,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "1.9 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-08 23:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "15% OFF",
    subHeader: "UPTO ₹300",
    discountTag: "SAVE BIG"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.0",
    ratingCount: "518"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/fish-curry-rice-viman-nagar-rest406967",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "831410",
    name: "Pastas By Pizza Hut",
    cloudinaryImageId: "80ca62f0de020f8cbe39fd034d3325d5",
    locality: "Vimanagar",
    areaName: "Aero Mall",
    costForTwo: "₹400 for two",
    cuisines: [
    "Pastas"
    ],
    avgRating: 3.9,
    parentId: "306806",
    avgRatingString: "3.9",
    totalRatingsString: "26",
    sla: {
    deliveryTime: 33,
    lastMileTravel: 0.1,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "0.1 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-09 05:00:00",
    opened: true
    },
    badges: {
    textExtendedBadges: [
    {
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available",
    fontColor: "#7E808C"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: {
    badgeObject: [
    {
    attributes: {
    description: "",
    fontColor: "#7E808C",
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available"
    }
    }
    ]
    }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "40% OFF",
    subHeader: "UPTO ₹80"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/pastas-by-pizza-hut-vimanagar-aero-mall-rest831410",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "66309",
    name: "Uncle's Chinese",
    cloudinaryImageId: "le6yt8pgom0gx9zi0bwa",
    locality: "Viman Nagar",
    areaName: "Viman Nagar",
    costForTwo: "₹450 for two",
    cuisines: [
    "Chinese"
    ],
    avgRating: 4.3,
    parentId: "219488",
    avgRatingString: "4.3",
    totalRatingsString: "13K+",
    sla: {
    deliveryTime: 33,
    lastMileTravel: 1.3,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "1.3 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-08 23:59:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
    description: "bolt!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "bolt!",
    imageId: "bolt/Bolt%20Listing%20badge@3x.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹150 OFF",
    subHeader: "ABOVE ₹299",
    discountTag: "FLAT DEAL"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.1",
    ratingCount: "427"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/uncles-chinese-viman-nagar-rest66309",
    type: "WEBLINK"
    }
    },
    {
    info: {
    id: "13906",
    name: "Wadeshwar",
    cloudinaryImageId: "ee51fzavw0jgsryxkavp",
    locality: "Kalyani Nagar",
    areaName: "Kalyani Nagar",
    costForTwo: "₹350 for two",
    cuisines: [
    "South Indian",
    "North Indian",
    "Chinese",
    "Street Food",
    "Desserts",
    "Beverages"
    ],
    avgRating: 4.4,
    parentId: "1770",
    avgRatingString: "4.4",
    totalRatingsString: "49K+",
    sla: {
    deliveryTime: 33,
    lastMileTravel: 3.5,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "3.5 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-08 22:55:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    aggregatedDiscountInfoV2: { },
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.0",
    ratingCount: "5.9K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-8ae35a4c-445f-4903-94e4-6a6b26c7998d"
    },
    cta: {
    link: "https://www.swiggy.com/city/pune/wadeshwar-kalyani-nagar-rest13906",
    type: "WEBLINK"
    }
    }
    ]



const Grocery= lazy(() => import("./component/Grocery") )
const About= lazy(() => import("./component/About") )

const AppLayout =()=>{
const[username,SetUsername]=useState()

useEffect(()=>{
   const data= {
        name:"Vrushabh Pokale"
    }
    SetUsername(data.name)
},[])

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:username,SetUsername}} >
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children :[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:(<Suspense fallback={<h1> Loading....</h1>}> <About/> </Suspense>)
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:(<Suspense fallback={<h1> Loading....</h1>}> <Grocery/> </Suspense>),
               
            },
            {
                path:"/restorent/:resId",
                element:<RestoMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }

        ],
        errorElement:<Error/>
    },
   
])


const root= ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout/>);
 root.render(<RouterProvider router={appRouter}/>)