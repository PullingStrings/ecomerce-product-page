import { useState } from "react"
import Image from "next/image"
import Lightbox from "./LightBox"
import ImageProductOne from "@/assets/image-product-1.jpg"
import ImageProductTwo from "@/assets/image-product-2.jpg"
import ImageProductThree from "@/assets/image-product-3.jpg"
import ImageProductFour from "@/assets/image-product-4.jpg"
import ImageProductOnePreview from "@/assets/image-product-1-thumbnail.jpg"
import ImageProductTwoPreview from "@/assets/image-product-2-thumbnail.jpg"
import ImageProductThreePreview from "@/assets/image-product-3-thumbnail.jpg"
import ImageProductFourPreview from "@/assets/image-product-4-thumbnail.jpg"

const ImageGallery = () => {
  const [mainImage, setMainImage] = useState(ImageProductOne)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <div className='w-full md:w-1/2 p-4'>
      <div className='mb-4' onClick={() => setLightboxOpen(true)}>
        {/* Main image placeholder */}
        <Image src={mainImage} alt='Main Product' className='w-full h-auto' />
      </div>
      <div className='flex space-x-2'>
        {/* Thumbnails placeholder */}
        <Image
          src={ImageProductOnePreview}
          alt='Preview 1'
          className='w-20 h-20 cursor-pointer'
          onClick={() => setMainImage(ImageProductOne)}
        />
        <Image
          src={ImageProductTwoPreview}
          alt='Preview 2'
          className='w-20 h-20 cursor-pointer'
          onClick={() => setMainImage(ImageProductTwo)}
        />
        <Image
          src={ImageProductThreePreview}
          alt='Preview 3'
          className='w-20 h-20 cursor-pointer'
          onClick={() => setMainImage(ImageProductThree)}
        />
        <Image
          src={ImageProductFourPreview}
          alt='Preview 4'
          className='w-20 h-20 cursor-pointer'
          onClick={() => setMainImage(ImageProductFour)}
        />
      </div>
      <Lightbox
        isOpen={lightboxOpen}
        closeLightbox={() => setLightboxOpen(false)}
        initialImage={0} // This should correspond to the index of 'mainImage' in your images array
      />
    </div>
  )
}

export default ImageGallery
