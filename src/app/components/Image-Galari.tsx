"use client";

import { useState } from "react";
// import { useEffect, useState } from "react"
import Image from "next/image";

// Define our image data structure
type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  gridArea?: string;
};

export default function AdvancedImageGallery() {
  // Create dummy image data with specific grid areas to match the reference layout
  const initialImages: GalleryImage[] = [
    {
      id: 1,
      src: "/image/image1.jpeg",
      alt: "Portrait 1",
      gridArea: "1 / 1 / 3 / 2",
    },
    {
      id: 2,
      src: "/image/image2.jpeg",
      alt: "Portrait 2",
      gridArea: "1 / 2 / 2 / 3",
    },
    {
      id: 3,
      src: "/image/image3.jpeg",
      alt: "Portrait 3",
      gridArea: "1 / 3 / 2 / 4",
    },
    {
      id: 4,
      src: "/image/image4.jpeg",
      alt: "Portrait 4",
      gridArea: "1 / 4 / 3 / 5",
    },
    {
      id: 5,
      src: "/image/image5.jpeg",
      alt: "Portrait 5",
      gridArea: "1 / 5 / 3 / 6",
    },
    {
      id: 6,
      src: "/image/image6.jpeg",
      alt: "Portrait 6",
      gridArea: "1 / 6 / 2 / 7",
    },

    {
      id: 7,
      src: "/image/image7.jpeg",
      alt: "Portrait 7",
      gridArea: "3 / 1 / 4 / 2",
    },
    {
      id: 8,
      src: "/image/image8.jpeg",
      alt: "Portrait 8",
      gridArea: "2 / 2 / 4 / 4",
    },
    {
      id: 9,
      src: "/image/image9.jpeg",
      alt: "Portrait 9",
      gridArea: "3 / 4 / 4 / 5",
    },
    {
      id: 10,
      src: "/image/image10.jpeg",
      alt: "Portrait 10",
      gridArea: "2 / 6 / 3 / 7",
    },
    {
      id: 11,
      src: "/image/image11.jpeg",
      alt: "Portrait 11",
      gridArea: "3 / 5 / 4 / 6",
    },
    {
      id: 12,
      src: "/image/image2.jpeg",
      alt: "Portrait 12",
      gridArea: "3 / 6 / 4 / 7",
    },

    {
      id: 13,
      src: "/image/image1.jpeg",
      alt: "Portrait 13",
      gridArea: "4 / 1 / 6 / 2",
    },
    {
      id: 14,
      src: "/image/image2.jpeg",
      alt: "Portrait 14",
      gridArea: "4 / 2 / 5 / 3",
    },
    {
      id: 15,
      src: "/image/image3.jpeg",
      alt: "Portrait 15",
      gridArea: "4 / 3 / 5 / 4",
    },
    {
      id: 16,
      src: "/image/image4.jpeg",
      alt: "Portrait 16",
      gridArea: "4 / 4 / 6 / 5",
    },
    {
      id: 17,
      src: "/image/image5.jpeg",
      alt: "Portrait 17",
      gridArea: "4 / 5 / 6 / 6",
    },
    {
      id: 18,
      src: "/image/image6.jpeg",
      alt: "Portrait 18",
      gridArea: "4 / 6 / 5 / 7",
    },

    {
      id: 19,
      src: "/image/image7.jpeg",
      alt: "Portrait 19",
      gridArea: "6 / 1 / 7 / 2",
    },
    {
      id: 20,
      src: "/image/image6.jpeg",
      alt: "Portrait 20",
      gridArea: "5 / 2 / 7 / 4",
    },
    {
      id: 21,
      src: "/image/image9.jpeg",
      alt: "Portrait 21",
      gridArea: "6 / 4 / 7 / 5",
    },
    {
      id: 22,
      src: "/image/image10.jpeg",
      alt: "Portrait 22",
      gridArea: "5 / 6 / 6 / 7",
    },
    {
      id: 23,
      src: "/image/image11.jpeg",
      alt: "Portrait 23",
      gridArea: "6 / 5 / 7 / 6",
    },
    {
      id: 24,
      src: "/image/image2.jpeg",
      alt: "Portrait 24",
      gridArea: "6 / 6 / 7 / 7",
      },
    
      { id: 25, src: "/image/image1.jpeg", alt: "Portrait 25", gridArea: "7 / 1 / 9 / 2" },
      { id: 26, src: "/image/image2.jpeg", alt: "Portrait 26", gridArea: "7 / 2 / 8 / 3" },
      { id: 27, src: "/image/image3.jpeg", alt: "Portrait 27", gridArea: "7 / 3 / 8 / 4" },
      { id: 28, src: "/image/image4.jpeg", alt: "Portrait 28", gridArea: "7 / 4 / 9 / 5" },
      { id: 29, src: "/image/image5.jpeg", alt: "Portrait 29", gridArea: "7 / 5 / 9 / 6" },
      { id: 30, src: "/image/image6.jpeg", alt: "Portrait 30", gridArea: "7 / 6 / 8 / 7" },

      { id: 31, src: "/image/image7.jpeg", alt: "Portrait 31", gridArea: "9 / 1 / 10 / 2" },
      { id: 32, src: "/image/image8.jpeg", alt: "Portrait 32", gridArea: "8 / 2 / 10 / 4" },
      { id: 33, src: "/image/image9.jpeg", alt: "Portrait 33", gridArea: "9 / 4 / 10 / 5" },
      { id: 34, src: "/image/image10.jpeg", alt: "Portrait 34", gridArea: "8 / 6 / 9 / 7" },
      { id: 35, src: "/image/image11.jpeg", alt: "Portrait 35", gridArea: "9 / 5 / 10 / 6" },
      { id: 36, src: "/image/image5.jpeg", alt: "Portrait 36", gridArea: "9 / 6 / 10 / 7" },

      { id: 37, src: "/image/image11.jpeg", alt: "Portrait 37", gridArea: "10 / 1 / 12 / 2" },
      { id: 38, src: "/image/image10.jpeg", alt: "Portrait 38", gridArea: "10 / 2 / 11 / 3" },
      { id: 39, src: "/image/image9.jpeg", alt: "Portrait 39", gridArea: "10 / 3 / 11 / 4" },
      { id: 40, src: "/image/image8.jpeg", alt: "Portrait 40", gridArea: "10 / 4 / 12 / 5" },
      { id: 41, src: "/image/image7.jpeg", alt: "Portrait 41", gridArea: "10 / 5 / 12 / 6" },
      { id: 42, src: "/image/image6.jpeg", alt: "Portrait 42", gridArea: "10 / 6 / 11 / 7" },

      { id: 43, src: "/image/image5.jpeg", alt: "Portrait 43", gridArea: "12 / 1 / 13 / 2" },
      { id: 44, src: "/image/image4.jpeg", alt: "Portrait 44", gridArea: "11 / 2 / 13 / 4" },
      { id: 45, src: "/image/image3.jpeg", alt: "Portrait 45", gridArea: "12 / 4 / 13 / 5" },
      { id: 46, src: "/image/image2.jpeg", alt: "Portrait 46", gridArea: "11 / 6 / 12 / 7" },
      { id: 47, src: "/image/image1.jpeg", alt: "Portrait 47", gridArea: "12 / 5 / 13 / 6" },
      { id: 48, src: "/image/image9.jpeg", alt: "Portrait 48", gridArea: "12 / 6 / 13 / 7" },
  ];

  // All available image paths for cycling through during refresh
  // const availableImages = [
  //     "/public/image/image1.jpeg",
  //     "/public/image/image1.jpeg",
  //     "/public/image/image1.jpeg",
  //     "/public/image/image1.jpeg",
  //     "/public/image/image1.jpeg"
  // ]

  // State to hold current images
  const [images, setImages] = useState<GalleryImage[]>(initialImages);
  console.log(setImages);

  // State to track refresh countdown
  const [refreshCountdown, setRefreshCountdown] = useState(3);

  console.log(refreshCountdown, setRefreshCountdown);

  // Function to refresh random images with actual images from collection
  // const refreshRandomImages = () => {
  //     setImages((prevImages) => {
  //         // Create a copy of the current images
  //         const newImages = [...prevImages]

  //         // Select 2-3 random indices to refresh
  //         const indicesToRefresh = new Set<number>()
  //         const numToRefresh = Math.floor(Math.random() * 2) + 2 // 2 or 3 images
  //         while (indicesToRefresh.size < numToRefresh) {
  //             indicesToRefresh.add(Math.floor(Math.random() * newImages.length))
  //         }

  //         // Update those images with new images from our collection
  //         indicesToRefresh.forEach((index) => {
  //             const image = newImages[index]
  //             // Get a random image from our available images
  //             const randomImageSrc = availableImages[Math.floor(Math.random() * availableImages.length)]
  //             newImages[index] = {
  //                 ...image,
  //                 // Add timestamp to force refresh but keep the actual image path
  //                 src: `${randomImageSrc}?t=${Date.now()}-${index}`,
  //             }
  //         })

  //         return newImages
  //     })

  //     // Reset countdown timer
  //     setRefreshCountdown(3)
  // }

  // Set up the refresh interval
  // useEffect(() => {
  //     // AUTO REFRESH TIMER: Set to refresh every 3 seconds
  //     const refreshInterval = 3000 // 3 seconds

  //     const intervalId = setInterval(refreshRandomImages, refreshInterval)

  //     // Countdown timer for visual feedback
  //     const countdownId = setInterval(() => {
  //         setRefreshCountdown((prev) => (prev > 0 ? prev - 1 : 3))
  //     }, 1000)

  //     // Clean up the interval when component unmounts
  //     return () => {
  //         clearInterval(intervalId)
  //         clearInterval(countdownId)
  //     }
  // }, [])

  return (
    <div className=" container mx-auto px-4 py-8">
      {/* Desktop layout with 16:9 aspect ratio */}

      <div className="hidden lg:grid grid-cols-6 grid-rows-4 gap-2 h-auto  ">
        {images.slice(0, 48).map((image) => (
          <div
            key={`${image.id}-${image.src}`}
            className="relative overflow-hidden transition-all duration-300 ease-in-out"
            style={{ gridArea: image.gridArea }}
          >
            <div className="aspect-video w-full h-full relative bg-gray-100">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-opacity duration-500 "
                // sizes="(max-width: 1024px) 50vw, 16vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/tablet responsive layout with 16:9 aspect ratio */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden gap-1">
        {images.slice(0, 48).map((image) => (
          <div
            key={`${image.id}-${image.src}`}
            className={`relative overflow-hidden transition-all duration-300 ease-in-out 
                ${
                  image.id === 1 || image.id === 4 || image.id === 8
                    ? "col-span-2 row-span-2"
                    : ""
                }`}
          >
            <div className="aspect-video w-full relative bg-gray-100">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/tablet responsive layout with 16:9 aspect ratio */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden gap-2">
        {images.slice(0, 12).map((image) => (
          <div
            key={`${image.id}-${image.src}`}
            className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
              image.id === 1 || image.id === 4 || image.id === 8
                ? "col-span-2 row-span-2"
                : ""
            }`}
          >
            <div className="aspect-video w-full relative bg-gray-100">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
