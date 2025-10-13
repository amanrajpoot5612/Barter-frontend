import { TVShowsGallery } from "./imageImporter";

import {
  AsiaCupImages,
  IPLImages,
  MoviesImages,
  MusicImages,
  OTTImages,
  PVRImages,
  ZeeNewsImages,
  BarterImages,
  BusinessImages,
  EntertainmentImages,
  IndiaNewsImages,
  News18Images,
  NewsChannelImages,
} from "../importer/imageImporter.js";

const productInfo = {
  category: "Barter Products",
  key: "barterproducts",
  subCategory: [
    {
      title: "ALL BARTER MEDIA PRODUCTS",
      type: "slide",
      images: [
        { name: "Product 1", img: BarterImages[0] },
        { name: "Product 2", img: BarterImages[1] },
        { name: "Product 3", img: BarterImages[2] },
        { name: "Product 4", img: BarterImages[3] },
        { name: "Product 5", img: BarterImages[4] },
        { name: "Product 6", img: BarterImages[5] },
        { name: "Product 7", img: BarterImages[6] },
        { name: "Product 8", img: BarterImages[7] },
        { name: "Product 9", img: BarterImages[8] },
        { name: "Product 10", img: BarterImages[9] },
        { name: "Product 11", img: BarterImages[10] },
        { name: "Product 12", img: BarterImages[11] },
        { name: "Product 13", img: BarterImages[12] },
      ],
    },
    {
      // more can be there
    },
  ],
};

const nationalShowInfo = {
  category: "NATIONAL SHOWS IN BARTER",
  key: "nationalshows",
  subCategory: [
    // tv shows
    {
      title: "TV Shows",
      type: "card", // kept at parent
      images: [
        { name: "Product 1", img: TVShowsGallery[0] },
        { name: "Product 2", img: TVShowsGallery[1] },
        { name: "Product 3", img: TVShowsGallery[2] },
        { name: "Product 4", img: TVShowsGallery[3] },
        { name: "Product 5", img: TVShowsGallery[4] },
        { name: "Product 6", img: TVShowsGallery[5] },
        { name: "Product 7", img: TVShowsGallery[6] },
        { name: "Product 8", img: TVShowsGallery[7] },
        { name: "Product 9", img: TVShowsGallery[8] },
        { name: "Product 10", img: TVShowsGallery[9] },
        { name: "Product 11", img: TVShowsGallery[10] },
        { name: "Product 12", img: TVShowsGallery[11] },
        { name: "Product 13", img: TVShowsGallery[12] },
        { name: "Product 14", img: TVShowsGallery[13] },
        { name: "Product 15", img: TVShowsGallery[14] },
        { name: "Product 16", img: TVShowsGallery[15] },
        { name: "Product 17", img: TVShowsGallery[16] },
        { name: "Product 18", img: TVShowsGallery[17] },
        { name: "Product 19", img: TVShowsGallery[18] },
        { name: "Product 20", img: TVShowsGallery[19] },
        { name: "Product 21", img: TVShowsGallery[20] },
        { name: "Product 22", img: TVShowsGallery[21] },
        { name: "Product 23", img: TVShowsGallery[22] },
      ],
    },
    {
      title: "OTT",
      type: "slide",
      images: [
        { name: "Product 1", img: OTTImages[0] },
        { name: "Product 2", img: OTTImages[1] },
        { name: "Product 3", img: OTTImages[2] },
        { name: "Product 4", img: OTTImages[3] },
        { name: "Product 5", img: OTTImages[4] },
      ],
    },
    {
      title: "IPL & Asia Cup",
      type: "card",
      images: [
        { name: "Product 1", img: IPLImages[0] },
        { name: "Product 2", img: IPLImages[1] },
        { name: "Product 1", img: AsiaCupImages[0] },
        { name: "Product 2", img: AsiaCupImages[1] },
      ],
    },
    // {
    //   title: "Asia Cup",
    //   type: "card",
    //   images: [
    //     { name: "Product 1", img: AsiaCupImages[0] },
    //     { name: "Product 2", img: AsiaCupImages[1] },
    //   ],
    // },
    {
      title: "News Channel",
      type: "slide",
      images: [
        { name: "Product 1", img: NewsChannelImages[0] },
        { name: "Product 2", img: NewsChannelImages[1] },
        { name: "Product 3", img: NewsChannelImages[2] },
        { name: "Product 4", img: NewsChannelImages[3] },
        { name: "Product 5", img: NewsChannelImages[4] },
        { name: "Product 6", img: NewsChannelImages[5] },
        { name: "Product 7", img: NewsChannelImages[6] },
        { name: "Product 8", img: NewsChannelImages[7] },
        { name: "Product 9", img: NewsChannelImages[8] },
        { name: "Product 10", img: NewsChannelImages[9] },
        { name: "Product 11", img: NewsChannelImages[10] },
      ],
    },
    {
      title: "Entertainment",
      type: "slide",
      images: [
        { name: "Product 1", img: EntertainmentImages[0] },
        { name: "Product 2", img: EntertainmentImages[1] },
        { name: "Product 3", img: EntertainmentImages[2] },
        { name: "Product 4", img: EntertainmentImages[3] },
        { name: "Product 5", img: EntertainmentImages[4] },
        { name: "Product 6", img: EntertainmentImages[5] },
        { name: "Product 7", img: EntertainmentImages[6] },
        { name: "Product 8", img: EntertainmentImages[7] },
        { name: "Product 9", img: EntertainmentImages[8] },
      ],
    },
    {
      title: "Movies",
      type: "slide",
      images: [
        { name: "Product 1", img: MoviesImages[0] },
        { name: "Product 2", img: MoviesImages[1] },
        { name: "Product 3", img: MoviesImages[2] },
        { name: "Product 4", img: MoviesImages[3] },
        { name: "Product 5", img: MoviesImages[4] },
      ],
    },
    {
      title: "Music",
      type: "slide",
      images: [
        { name: "Product 1", img: MusicImages[0] },
        { name: "Product 2", img: MusicImages[1] },
        { name: "Product 3", img: MusicImages[2] },
        { name: "Product 4", img: MusicImages[3] },
        { name: "Product 5", img: MusicImages[4] },
      ],
    },
    {
      title: "Business",
      type: "card",
      images: [
        { name: "Product 1", img: BusinessImages[0] },
        { name: "Product 2", img: BusinessImages[1] },
        { name: "Product 3", img: BusinessImages[2] },
      ],
    },
  ],
};

const regionalShowInfo = {
  category: "Regional Shows in Barter",
  key: "regionalshows",
  subCategory: [
    {
      title: "India News in Barter",
      type: "slide",
      images: [
        { name: "Product 1", img: IndiaNewsImages[0] },
        { name: "Product 2", img: IndiaNewsImages[1] },
        { name: "Product 3", img: IndiaNewsImages[2] },
        { name: "Product 4", img: IndiaNewsImages[3] },
        { name: "Product 5", img: IndiaNewsImages[4] },
        { name: "Product 6", img: IndiaNewsImages[5] },
      ],
    },
    {
      title: "Zee News in Barter",
      type: "slide",
      images: [
        { name: "Product 1", img: ZeeNewsImages[0] },
        { name: "Product 2", img: ZeeNewsImages[1] },
        { name: "Product 3", img: ZeeNewsImages[2] },
        { name: "Product 4", img: ZeeNewsImages[3] },
        { name: "Product 5", img: ZeeNewsImages[4] },
      ],
    },
    {
      title: "News 18 in Barter",
      type: "slide",
      images: [
        { name: "Product 1", img: News18Images[0] },
        { name: "Product 2", img: News18Images[1] },
        { name: "Product 3", img: News18Images[2] },
        { name: "Product 4", img: News18Images[3] },
        { name: "Product 5", img: News18Images[4] },
      ],
    },
    {
      title: "PVR Cinemas in Barter",
      type: "card",
      images: [
        { name: "Product 1", img: PVRImages[0] },
        { name: "Product 2", img: PVRImages[1] },
      ],
    },
  ],
};



export { productInfo };
export { nationalShowInfo };
export { regionalShowInfo};
export { cardInfo };

const barterInfo = [productInfo, nationalShowInfo, regionalShowInfo];
export {barterInfo};


const cardInfo = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    meta: {
      title: "Europe Street beat",
      description: "www.instagram.com",
    },
    type: "slide",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    meta: {
      title: "Europe Street beat",
      description: "www.instagram.com",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    meta: {
      title: "Europe Street beat",
      description: "www.instagram.com",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    meta: {
      title: "Europe Street beat",
      description: "www.instagram.com",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    meta: {
      title: "Europe Street beat",
      description: "www.instagram.com",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    meta: {
      title: "Europe Street beat",
      description: "www.instagram.com",
    },
  },
];
