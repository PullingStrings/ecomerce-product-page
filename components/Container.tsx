// components/Container.tsx

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='mx-auto px-4 max-w-[1440px]'>{children}</div>
}

export default Container
