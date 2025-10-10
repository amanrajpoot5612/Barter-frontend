import Demo1 from "../assets/img/main-carousel/1.jpeg";
import Demo2 from "../assets/img/main-carousel/2.jpeg";
import Demo3 from "../assets/img/main-carousel/3.jpeg";
import Demo4 from "../assets/img/main-carousel/4.jpeg";
export { Demo1, Demo2, Demo3, Demo4 };

const Test = {
  title: "About Us",
  slug: "about-us",
  sections: [
    {
      type: "paragraphs",
      content: [
        "This is paragraph 1.",
        "This is paragraph 2.",
        "This is paragraph 3.",
        "This is paragraph 4.",
        "This is paragraph 4.",
        "This is paragraph 4.",
      ],
    },
    {
      type: "list",
      lists: [
        {
          title: "First List",
          items: ["Item 1", "Item 2", "Item 3", "... up to 10"],
        },
        {
          title: "Second List",
          items: ["Item 1", "Item 2", "Item 3", "... up to 7"],
        },
        {
          title: "Third List",
          items: ["Item 1", "Item 2", "Item 3", "... up to 7"],
        },
        {
          title: "Fourth List",
          items: ["Item 1", "Item 2", "Item 3", "... up to 7"],
        },
      ],
    },
    {
      type: "contentBlock",
      heading: "Main Heading",
      subheading: "Subheading text",
      paragraph: "This is a descriptive paragraph.",
    },
  ],
};
export { Test };

const images = [Demo1, Demo2, Demo3, Demo4]
const heroInfo = {
  heading: 'Welcome to Barter',
  description:
    'Trade your items with ease and connect with others in your community.',
  buttons: [
    {
      label: 'Get Started',
      link: "#",
      type: "get-started"
    }
  ],
  images: images
};
export { heroInfo }

import AboutImg from '../assets/img/about-section/about-us.webp'
const AboutInfo = {
  title: "About Us",
  slug: "about-us",
  preHeading: "",
  heading: "Advertise with your products / services instead cash !",
  // subHeading: "",
  sections: [
    {
      type: "paragraphs",
      content: [
        `PMC BARTER MEDIA  was established in 2012, with an objective of providing an
organized platform for Reciprocal Trade ( Barter )  to the Indian Corporate World.
PMC BARTER MEDIA acts as a centralized Trading Hub for businesses to transact 
(buy & sell) goods and services on a Reciprocal Trade basis; that is "an arrangement
between two parties whereby their roles as seller and buyer are interchangeable,
each buys from and sells to the other".`,

        `Through its unique concept of Reciprocal Trade ( Barter ) , PMC BARTER MEDIA
enables businesses to leverage their own goods and services to make purchases 
without having to spend cash. It reduces costs, reduces cash outflow, increases 
sales and enhances purchasing power for its clients. PMC BARTER MEDIA helps
its clients to tap the unrealized potential in their businesses, it  helps utilize spare 
capacity, enhance productivity and optimize overall business performance.`,

        `PMC BARTER MEDIA provides a unique
Nationwide B2B Platform for businesses to transact (buy & sell) goods and services.`,

        `PMC BARTER MEDIA clients include some of the country's leading brands in FMCG, 
Electronics, Appliances, Apparels, Media, Entertainment, Real Estate, Construction,
Interiors, Airlines, Hospitality, Healthcare and Wellness ETC.`,
        ``,
        ``,
      ],
    },
    //list
    {
      type: "",
      lists: [
        {
          title: "",
          items: ["", "", "", ""],
        },
        {
          title: "",
          items: ["", "", "", ""],
        },
        {
          title: "",
          items: ["", "", "", ""],
        },
        {
          title: "",
          items: ["", "", "", ""],
        },
      ],
    },
    {
      type: "contentBlock",
      heading: "",
      subheading1: "",
      subheading2: "",
      paragraph: "",
    },
  ],
  imageInfo: {
    items: [
      AboutImg
    ],
  },
};
export { AboutInfo };

import WhatWeDoImg from '../assets/img/what-we-do-section/what-we-do.jpeg'
const WhatWeDoInfo = {
  title: "What We Do",
  slug: "what-we-do",
  preHeading: "",
  heading:
    "We grow businesses through strategic, results-driven television advertising campaigns!",
  // subHeading: "",
  sections: [
    {
      type: "paragraphs",
      content: [
        `PMC BARTER MEDIA has grown at an unprecedented rate to now firmly cement its
position as India's leading "Reciprocal Trade Company". It has been consistently
creating value for its clients and has generated a decent trade volume in the last 13 years. 
Our growth indicates the success of our trading model and our record of nearly 100%
client retention is the strongest testimony to the trust and faith that we enjoy with our clients.`,

        `Under her leadership, the company has grown into one of India's No. 1 media and broadcast advertising companies, trusted by leading brands for high-impact television commercials and nationwide campaigns.She later became the Founder Chairperson of the National Justice and Women Safety Commission under the Government of India, where she actively works to protect women's rights and empower women nationwide`,
        ``,
        ``,
        ``,
        ``,
      ],
    },
    //list
    {
      type: "list",
      lists: [
        {
          title: "Benefits of PMC BARTER MEDIA",
          items: [
            "Reduce Costs",
            "Preserve Cash",
            "Incremental Sales",
            "Enhance Purchasing Power",
            "Utilize Spare Capacity",
            "Move Excess Inventory",
            "Enhance Productivity",
            "Preferred Platform for Purchases",
            "Additional Channel of Sales",
            "Optimize Business Performance",
          ],
        },
        {
          title:
            "We offer TV media solutions across the country, broadly classified as:",
          items: [
            "TV MEDIA",
            "TV SHOWS",
            "CELEBRITY",
            "PVR",
            "OTT",
            "Cinema",
            "Advertising MAKING",
          ],
        },
      ],
    },
    {
      type: "note",
      heading: "NOTE:",
      subheading1: "",
      subheading2: "",
      paragraph:
        "We work across all media platforms as per specific client requirement. All media is available subject to media approval & inventory of media available. Also we buy products on stock lot basis for trading purpose as well.",
    },
  ],
  imageInfo: {
    items: [
      WhatWeDoImg
    ],
  },
};
export { WhatWeDoInfo };

import FounderImg from '../assets/img/founder-section/founder.jpeg'
const FounderMessageInfo = {
  title: "Founder's Message",
  slug: "founders-message",
  preHeading: "Who I'm: ",
  heading: "Pooja Sharma (Chief Managing Director)",
  // subHeading: "",
  sections: [
    {
      type: "paragraphs",
      content: [
        `Ms. Pooja Sharma began her career at a young age as a TV news anchor, where she rose to lea d programming in the national news and devotional channel categories. Alongside her anchoring career, she also acted in several popular TV serials and became a recognized face through more than 100 brand endorsements and television commercials. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonum nibhie With her strong media background, she transitioned into entrepreneurship and dedicated her knowledge to building her own company - Pooja Movie Creations.`,
        `Under her leadership, the company has grown into one of India's No. 1 media and broadcast advertising companies, trusted by leading brands for high-impact television commercials and nationwide campaigns.She later became the Founder Chairperson of the National Justice and Women Safety Commission under the Government of India, where she actively works to protect women's rights and empower women nationwide`,
        ``,
        ``,
        ``,
        ``,
      ],
    },
    //list
    {

      type: "list",
      lists: [
        {
          title:null,
          items: [], // items = ["", "", "", ""]
        },
        
      ],
    },
    {
      type: "contentBlock",
      heading: "",
      subheading1: "",
      subheading2: "",
      paragraph: "",
    },
  ],
  imageInfo: {
    items: [
      FounderImg
    ],
  },
};
export { FounderMessageInfo };


