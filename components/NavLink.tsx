// components/NavLink.tsx

import Link from "next/link"

interface NavLinkProps {
  href: string
  label: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link className='py-4 px-2 text-gray-400 hover:text-orange-400' href={href}>
      {label}
    </Link>
  )
}

export default NavLink
