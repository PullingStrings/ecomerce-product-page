import Image from "next/image"
import NavLink from "./NavLink"
import Link from "next/link"
import Logo from "../assets/logo.svg"
import Propic from "../assets/image-avatar.png"
import Cart from "../assets/icon-cart.svg"

const Navbar = () => {
  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div>
              <Link className='flex items-center py-4 px-2' href='/'>
                <Image src={Logo} alt={"sneakers"} />
              </Link>
            </div>
            <div className='hidden md:flex items-center space-x-1'>
              <NavLink href='/collections' label='Collections' />
              <NavLink href='/men' label='Men' />
              <NavLink href='/women' label='Women' />
              <NavLink href='/about' label='About' />
              <NavLink href='/contact' label='Contact' />
            </div>
          </div>
          <div className='hidden md:flex items-center space-x-3'>
            <Link href='/cart'>
              <Image src={Cart} alt='cart' />
            </Link>
            <Image
              width={50}
              height={50}
              src={Propic}
              alt='Profile Picture'
              className='rounded-full w-10 h-10'
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
