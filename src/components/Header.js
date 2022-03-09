import logo from '../images/header-logo.svg';

function Header() {
  return (
    <header className='header horizontal-aligned-block'>
      <img src={logo} alt='Проект Mesto. Логотип.' className='header__logo' />
    </header>
  );
}

export default Header;
