import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderRegistrationSchema } from '../../utils/formValidation';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderRegistrationSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    // const { name, email, password } = data;
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRepeatPasswordVisibility = () => {
    setRepeatPasswordVisible(!repeatPasswordVisible);
  };

  return (
    <form
      className='bg-bg p-6 rounded-lg max-w-[335px] w-full md:p-10 md:max-w-[424px]'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex gap-3.5 mb-10'>
        <h2 className='text-lg font-medium -tracking-[0.28px]'>Registration</h2>
        <NavLink
          className='text-lg font-medium -tracking-[0.28px] opacity-40 hover:text-label-green hover:opacity-100 transition-all duration-300'
          to='/auth/login'
        >
          Log In
        </NavLink>
      </div>
      <ul className='flex flex-col gap-3.5 mb-6 w-full'>
        <li>
          <label className='relative block'>
            <input
              className={`px-4.5 py-3.5 bg-bg-dark border rounded-lg opacity-40 outline-none text-white text-sm -tracking-[0.28px] w-full  ${
                errors.name ? 'border-error' : 'border-label-green'
              } hover:opacity-100 focus:opacity-100 transition-all duration-300`}
              type='text'
              placeholder='Enter your name'
              {...register('name')}
            />
            {errors.name && (
              <p className='absolute -top-[12px] right-0 text-error text-[10px] ml-3 font-medium leading-3 -tracking-[0.3px] opacity-40'>
                {errors.name.message}
              </p>
            )}
          </label>
        </li>
        <li>
          <label className='relative block'>
            <input
              className={`px-4.5 py-3.5 bg-bg-dark border rounded-lg opacity-40 outline-none text-white text-sm -tracking-[0.28px] w-full ${
                errors.email ? 'border-error' : 'border-label-green'
              } hover:opacity-100 focus:opacity-100 transition-all duration-300`}
              type='email'
              placeholder='Enter your email'
              {...register('email')}
            />
            {errors.email && (
              <p className='absolute -top-[12px] right-0 text-error text-[10px] ml-3 font-medium leading-3 -tracking-[0.3px] opacity-40'>
                {errors.email.message}
              </p>
            )}
          </label>
        </li>
        <li>
          <label className='relative block'>
            <input
              className={`px-4.5 py-3.5 bg-bg-dark border rounded-lg opacity-40 outline-none text-white text-sm -tracking-[0.28px] w-full ${
                errors.password ? 'border-error' : 'border-label-green'
              } hover:opacity-100 focus:opacity-100 transition-all duration-300`}
              type={passwordVisible ? 'text' : 'password'}
              placeholder='Create a password'
              {...register('password')}
            />
            {errors.password && (
              <p className='absolute -top-[12px] right-0 text-error text-[10px] ml-3 font-medium leading-3 -tracking-[0.3px] opacity-40'>
                {errors.password.message}
              </p>
            )}
            <button
              type='button'
              className='group absolute top-3.5 transition-all duration-300 right-4 cursor-pointer md:top-4 md:right-4 opacity-40 hover:opacity-100'
              tabIndex={-1}
              onMouseDown={e => e.preventDefault()}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <svg
                  width='18'
                  height='18'
                  className={`fill-transparent  md:w-5.5 md:h-5.5 ${
                    errors.password ? 'stroke-error' : 'stroke-label-green'
                  }  `}
                >
                  <use href={`${sprite}#icon-eye-off`}></use>
                </svg>
              ) : (
                <svg
                  width='18'
                  height='18'
                  className={`fill-transparent md:w-5.5 md:h-5.5 ${
                    errors.password ? 'stroke-error' : 'stroke-label-green'
                  } `}
                >
                  <use href={`${sprite}#icon-eye`}></use>
                </svg>
              )}
            </button>
          </label>
        </li>
        <li>
          <label className='relative block'>
            <input
              className={`px-4.5 py-3.5 bg-bg-dark border rounded-lg opacity-40 outline-none text-white text-sm -tracking-[0.28px] w-full transition-all duration-300 ${
                errors.confirmPassword ? 'border-error' : 'border-label-green  '
              } hover:opacity-100 focus:opacity-100`}
              type={repeatPasswordVisible ? 'text' : 'password'}
              placeholder='Confirm a password'
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className='absolute -top-[12px] right-0 text-error text-[10px] ml-3 font-medium leading-3 -tracking-[0.3px] opacity-40'>
                {errors.confirmPassword.message}
              </p>
            )}
            <button
              type='button'
              className='group absolute top-3.5 transition-all duration-300 right-4.5 cursor-pointer opacity-40 hover:opacity-100'
              tabIndex={-1}
              onMouseDown={e => e.preventDefault()}
              onClick={toggleRepeatPasswordVisibility}
            >
              {repeatPasswordVisible ? (
                <svg
                  width='18'
                  height='18'
                  className={`fill-transparent md:w-5.5 md:h-5.5  ${
                    errors.confirmPassword
                      ? 'stroke-error'
                      : 'stroke-label-green'
                  }`}
                >
                  <use href={`${sprite}#icon-eye-off`}></use>
                </svg>
              ) : (
                <svg
                  width='18'
                  height='18'
                  className={`fill-transparent md:w-5.5 md:h-5.5  ${
                    errors.confirmPassword
                      ? 'stroke-error'
                      : 'stroke-label-green'
                  }`}
                >
                  <use href={`${sprite}#icon-eye`}></use>
                </svg>
              )}
            </button>
          </label>
        </li>
      </ul>
      <button
        className='w-full bg-label-green rounded-lg p-3.5 text-text-dark text-sm -tracking-[0.28px] hover:bg-hover transition-all duration-300 cursor-pointer'
        type='submit'
      >
        Register Now
      </button>
    </form>
  );
};
export default RegisterForm;
