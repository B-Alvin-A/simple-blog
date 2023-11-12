const Header = ( {title} ) => {
  return (
    <header className="w-full bg-[#66d8f5] p-4 flex items-center justify-between">
        <h1 className="text-2xl">{title}</h1>
    </header>
  )
}

export default Header