import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

function Register() {
  return (
    <AuthForm title={'Регистрация'} submitCaption={'Зарегистрироваться'}>
      <Link className='auth__link animated-element' to='/sign-in'>
        Уже зарегистрированы? Войти
      </Link>
    </AuthForm>
  );
}

export default Register;
