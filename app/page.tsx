import Image from "next/image"
import Container from "@/components/Container"
import Navbar from "@/components/Navbar"
import ProductPage from "@/components/ProductPage"

export default function Home() {
  return (
    <Container>
      <Navbar />
      <ProductPage />
    </Container>
  )
}
