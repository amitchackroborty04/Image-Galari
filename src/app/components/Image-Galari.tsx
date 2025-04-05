"use client"

import { useEffect, useState } from "react"

// Define our image data structure
type GalleryImage = {
  id: number
  src: string
  alt: string
  gridArea?: string
}

export default function AdvancedImageGallery() {
  // Available image paths for cycling through during refresh
  const availableImages = [
    "/image/image1.jpeg",
    "/image/image2.jpeg",
    "/image/image3.jpeg",
    "/image/image4.jpeg",
    "/image/image5.jpeg",
    "/image/image6.jpeg",
    "/image/image7.jpeg",
    "/image/image8.jpeg",
    "/image/image9.jpeg",
    "/image/image10.jpeg",
    "/image/image11.jpeg",
  ]

  // Create initial images array
  const createInitialImages = () => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      src: availableImages[i % availableImages.length],
      alt: `Portrait ${i + 1}`,
    }))
  }

  // State to hold current images
  const [images, setImages] = useState<GalleryImage[]>(createInitialImages)

  // State to track refresh countdown
  const [refreshCountdown, setRefreshCountdown] = useState(3)

  // State to track which images are currently transitioning
  const [transitioning, setTransitioning] = useState<Set<number>>(new Set())

  // Helper function to check if an image is currently transitioning
  const isTransitioning = (index: number) => transitioning.has(index)

  // Function to refresh random images with actual images from collection
  const refreshRandomImages = () => {
    // Select 2-3 random indices to refresh
    const indicesToRefresh = new Set<number>()
    const numToRefresh = Math.floor(Math.random() * 2) + 2 // 2 or 3 images
    while (indicesToRefresh.size < numToRefresh) {
      indicesToRefresh.add(Math.floor(Math.random() * images.length))
    }

    // Step 1: Set the transitioning state to fade out the selected images
    setTransitioning(indicesToRefresh)

    // Step 2: After fade out completes, update the images and fade back in
    setTimeout(() => {
      setImages((prevImages) => {
        // Create a copy of the current images
        const newImages = [...prevImages]

        // Update those images with new images from our collection
        indicesToRefresh.forEach((index) => {
          const image = newImages[index]
          // Get a random image from our available images
          const randomImageSrc = availableImages[Math.floor(Math.random() * availableImages.length)]
          newImages[index] = {
            ...image,
            // Add timestamp to force refresh but keep the actual image path
            src: `${randomImageSrc}?t=${Date.now()}-${index}`,
          }
        })

        return newImages
      })

      // Step 3: After a brief delay, clear the transitioning state to fade images back in
      setTimeout(() => {
        setTransitioning(new Set())
      }, 50)
    }, 500) // Wait for fade-out animation to complete

    // Reset countdown timer
    setRefreshCountdown(5)
  }

  // Set up the refresh interval
  useEffect(() => {
    // AUTO REFRESH TIMER: Set to refresh every 10 seconds
    const refreshInterval = 10000

    const intervalId = setInterval(refreshRandomImages, refreshInterval)

    // Countdown timer for visual feedback
    const countdownId = setInterval(() => {
      setRefreshCountdown((prev) => (prev > 0 ? prev - 1 : 10))
    }, 1000)

    // Clean up the interval when component unmounts
    return () => {
      clearInterval(intervalId)
      clearInterval(countdownId)
    }
  }, [])

  // Function to render a gallery image with consistent styling
  const renderGalleryImage = (index: number) => (
    <div className="w-full h-full overflow-hidden">
      <img
        src={images[index % images.length].src || "/placeholder.svg"}
        alt={images[index % images.length].alt}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          isTransitioning(index) ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  )

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      {/* Mobile layout (1 column) */}
      <div className="grid grid-cols-1 gap-2 md:hidden">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={`mobile-${index}`} className="aspect-square">
            {renderGalleryImage(index)}
          </div>
        ))}
      </div>

      {/* Tablet layout (6 columns, simplified grid) */}
      <div className="hidden md:grid lg:hidden grid-cols-6 grid-rows-8 gap-2 h-[80vh]">
        {/* Row 1 */}
        <div className="col-span-2 row-span-2">{renderGalleryImage(0)}</div>
        <div className="col-span-2 row-span-2">{renderGalleryImage(1)}</div>
        <div className="col-span-2 row-span-2">{renderGalleryImage(2)}</div>
        
        {/* Row 2 */}
        <div className="col-span-3 row-span-2">{renderGalleryImage(3)}</div>
        <div className="col-span-3 row-span-2">{renderGalleryImage(4)}</div>
        
        {/* Row 3 */}
        <div className="col-span-2 row-span-2">{renderGalleryImage(5)}</div>
        <div className="col-span-2 row-span-2">{renderGalleryImage(6)}</div>
        <div className="col-span-2 row-span-2">{renderGalleryImage(7)}</div>
        
        {/* Row 4 */}
        <div className="col-span-3 row-span-2">{renderGalleryImage(8)}</div>
        <div className="col-span-3 row-span-2">{renderGalleryImage(9)}</div>
      </div>

      {/* Desktop layout (original complex grid) */}
      <div className="hidden lg:grid grid-cols-12 grid-rows-6 gap-2 h-[80vh]">
        <div className="col-span-2 row-span-3 overflow-hidden">
          <img
            src={images[0].src || "/placeholder.svg"}
            alt={images[0].alt}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isTransitioning(0) ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="col-span-3 row-span-2 col-start-3 row-start-1 grid grid-cols-2 gap-2">
          <div className="overflow-hidden">
            <img
              src={images[1].src || "/placeholder.svg"}
              alt={images[1].alt}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                isTransitioning(1) ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={images[2].src || "/placeholder.svg"}
              alt={images[2].alt}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                isTransitioning(2) ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>

        <div className="col-span-2 row-span-3 col-start-6 row-start-1 overflow-hidden">
          <img
            src={images[3].src || "/placeholder.svg"}
            alt={images[3].alt}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isTransitioning(3) ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="col-span-3 row-span-4 col-start-8 row-start-1 overflow-hidden">
          <img
            src={images[4].src || "/placeholder.svg"}
            alt={images[4].alt}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isTransitioning(4) ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="col-span-2 row-span-2 col-start-11 row-start-1 overflow-hidden">
          <img
            src={images[5].src || "/placeholder.svg"}
            alt={images[5].alt}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isTransitioning(5) ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="col-span-3 row-span-4 col-start-3 row-start-3 overflow-hidden">
          <img
            src={images[6].src || "/placeholder.svg"}
            alt={images[6].alt}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isTransitioning(6) ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="col-span-2 row-span-2 col-start-11 row-start-3 overflow-hidden">
          <img
            src={images[7].src || "/placeholder.svg"}
            alt={images[7].alt}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isTransitioning(7) ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="col-span-2 row-span-3 col-start-1 row-start-4 overflow-hidden">
          <img
            src={images[8].src || "/placeholder.svg"}
            alt={images[8].alt}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isTransitioning(8) ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="col-span-2 row-span-3 col-start-6 row-start-4 overflow-hidden">
          <img
            src={images[9].src || "/placeholder.svg"}
            alt={images[9].alt}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isTransitioning(9) ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="col-span-3 row-span-2 col-start-8 row-start-5 grid grid-cols-2 gap-2">
          <div className="overflow-hidden">
            <img
              src={images[10].src || "/placeholder.svg"}
              alt={images[10].alt}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                isTransitioning(10) ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={images[11 % images.length].src || "/placeholder.svg"}
              alt={images[11 % images.length].alt}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                isTransitioning(11) ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>

        <div className="col-span-2 row-span-2 col-start-11 row-start-5 overflow-hidden">
          <img
            src={images[0].src || "/placeholder.svg"}
            alt={images[0].alt}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isTransitioning(0) ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>

      {/* Optional countdown display */}
      {/* <div className="mt-4 text-center text-sm text-gray-500">Images refresh in: {refreshCountdown} seconds</div> */}
    </div>
  )
}