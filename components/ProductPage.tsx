"use client"
import Container from "./Container"
import ImageGallery from "./ImageGallery"
import ProductDetails from "./ProductDetails"

const ProductPage = () => {
  return (
    <Container>
      <div className='flex flex-wrap md:flex-nowrap'>
        {/* Left Section - Image Gallery */}
        <ImageGallery />
        {/* Right Section - Product Details */}
        <ProductDetails />
      </div>
    </Container>
  )
}

export default ProductPage
