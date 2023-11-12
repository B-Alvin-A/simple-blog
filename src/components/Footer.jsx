const Footer = () => {
  const today = new Date();

  return (
    <footer className="w-full bg-[#66d8f5] p-3 grid place-content-center">
        <p>
          Copyright &copy; {today.getFullYear()}
        </p>
    </footer>
  )
}

export default Footer