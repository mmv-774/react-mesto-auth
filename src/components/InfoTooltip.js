import success from '../images/message-success-icon.svg';
import fail from '../images/message-fail-icon.svg';

function InfoTooltip({ isSuccess, isOpen }) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        <button type='button' className='popup__btn popup__close animated-element'></button>
        <div className='message'>
          <img className='message__icon' src={isSuccess ? success : fail} alt='Иконка результата авторизации' />
          <p className='message__text'>
            {isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так. Попробуйте еще раз.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
