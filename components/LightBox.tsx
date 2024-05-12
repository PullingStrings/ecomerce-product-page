import Image from "next/image"
import { useState } from "react"
import ImageProductOne from "@/assets/image-product-1.jpg"
import ImageProductTwo from "@/assets/image-product-2.jpg"
import ImageProductThree from "@/assets/image-product-3.jpg"
import ImageProductFour from "@/assets/image-product-4.jpg"

interface LightboxProps {
  isOpen: boolean
  closeLightbox: () => void
  initialImage: number
}

const images = [
  { src: ImageProductOne, alt: "Image 1" },
  { src: ImageProductTwo, alt: "Image 2" },
  { src: ImageProductThree, alt: "Image 3" },
  { src: ImageProductFour, alt: "Image 4" },
]

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  closeLightbox,
  initialImage,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImage)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex: number) => (prevIndex + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex(
      (prevIndex: number) => (prevIndex - 1 + images.length) % images.length
    )
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4'>
      <div className='bg-white p-2 rounded'>
        <div className='flex justify-between items-center'>
          <button onClick={previousImage}>&lt;</button>
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            width={600}
            height={600}
          />
          <button onClick={nextImage}>&gt;</button>
        </div>
        <div className='flex justify-center space-x-2 mt-2'>
          {images.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt={img.alt}
              className={`w-20 h-20 cursor-pointer ${
                currentImageIndex === index ? "border border-blue-500" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <button onClick={closeLightbox} className='absolute top-0 right-0 p-2'>
          X
        </button>
      </div>
    </div>
  )
}

export default Lightbox
