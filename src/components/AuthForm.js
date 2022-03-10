function AuthForm({ title, submitCaption, children }) {
  return (
    <div className='auth horizontal-aligned-block'>
      <form name='auth-form' className='form form_asgmt_auth'>
        <h2 className='form__title form__title_asgmt_auth'>{title}</h2>
        <fieldset className='form__fieldset form__fieldset_type_input form__fieldset_type_input_asgmt_auth'>
          <label htmlFor='user-email' className='form__label'>
            <input
              type='email'
              required
              id='user-email'
              name='user-email'
              placeholder='Email'
              className='form__input form__input_asgmt_auth'
            />
          </label>
          <label htmlFor='user-pass' className='form__label'>
            <input
              type='password'
              required
              id='user-pass'
              name='user-pass'
              placeholder='Пароль'
              className='form__input form__input_asgmt_auth'
            />
          </label>
        </fieldset>
        <fieldset className='form__fieldset form__fieldset_type_handler form__fieldset_type_handler_asgmt_auth'>
          <button type='submit' className='form__handler form__handler_asgmt_auth'>
            {submitCaption}
          </button>
        </fieldset>
      </form>
      {children}
    </div>
  );
}

export default AuthForm;
