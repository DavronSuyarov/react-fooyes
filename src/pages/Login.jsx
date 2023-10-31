import React from 'react';

const Login = () => {
  return (
    <div id='register'>
      <aside>
        <figure>
          <a href='index.html'>
            <img src='img/logo_sticky.svg' width={140} height={35} alt='' />
          </a>
        </figure>
        <div className='access_social'>
          <a href='#0' className='social_bt facebook'>
            Login with Facebook
          </a>
          <a href='#0' className='social_bt google'>
            Login with Google
          </a>
        </div>
        <div className='divider'>
          <span>Or</span>
        </div>
        <form autoComplete='off'>
          <div className='form-group'>
            <input className='form-control' type='email' placeholder='Email' />
            <i className='icon_mail_alt' />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              id='password'
              placeholder='Password'
            />
            <i className='icon_lock_alt' />
          </div>
          <div className='clearfix add_bottom_15'>
            <div className='checkboxes float-start'>
              <label className='container_check'>
                Remember me
                <input type='checkbox' />
                <span className='checkmark' />
              </label>
            </div>
            <div className='float-end'>
              <a id='forgot' href='#0'>
                Forgot Password?
              </a>
            </div>
          </div>
          <a href='#0' className='btn_1 gradient full-width'>
            Login Now!
          </a>
          <div className='text-center mt-2'>
            <small>
              Don't have an acccount?{' '}
              <strong>
                <a href='register.html'>Sign Up</a>
              </strong>
            </small>
          </div>
        </form>
        <div className='copy'>© 2020 FooYes</div>
      </aside>
    </div>
  );
};

export default Login;
