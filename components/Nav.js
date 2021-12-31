import Link from 'next/link'


const Nav = () => {
  const navigation = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'}
  ]
  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px8 bg-gray-800 rounded-lg mb-2'>
      <div className='flex items-center justify-between h-16'>
        <nav className='flex space-x-4'>
          {navigation.map(item => (
            <Link
            key={item.name}
            href={item.href}>
              <a className='text-gray-300 hover:bg-gray-600 hover:text-white 
                            px-3 py-2 rounded-md text-sm font-medium'>
                {item.name}
              </a>
            </Link>
          ))}
          <Link href='https://github.com/OilStein/cryptomancer'>
          <a className='text-gray-300 hover:bg-gray-600 hover:text-white 
                            px-3 py-2 rounded-md text-sm font-medium'>
               Source
              </a>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Nav