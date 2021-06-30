const Header = ({title}) => {
  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
      </header>
      <p>This is a research survey on how ducks are being fed in parks around the world. Please answer the questions as honestly as you can. Thank you for your participation.</p>
    </div>
    
  )
}

export default Header
