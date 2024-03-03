import { ErrorBase } from "../base/error.base";

export async function getGallery() {
  try {
    const response = [
      {
        url: "/img/gallery/gallery-1.jpg",
      },
      {
        url: "/img/gallery/gallery-2.jpg",
      },
      {
        url: "/img/gallery/gallery-3.jpg",
      },
      {
        url: "/img/gallery/gallery-4.jpg",
      },
      {
        url: "/img/gallery/gallery-5.jpg",
      },
      {
        url: "/img/gallery/gallery-6.jpg",
      },
      {
        url: "/img/gallery/gallery-7.jpg",
      },
      {
        url: "/img/gallery/gallery-8.jpg",
      },
    ];

    return response;
  } catch (e: any) {
    throw new ErrorBase(e);
  }
}
