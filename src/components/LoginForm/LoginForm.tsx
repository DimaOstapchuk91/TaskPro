import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom';
import { orderLoginSchema } from '../../utils/formValidation';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(orderLoginSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form
      className='bg-bg p-6 rounded-lg max-w-[335px] w-full '
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex gap-3.5 mb-10'>
        <NavLink
          className='text-lg font-medium -tracking-[0.28px] opacity-40 hover:text-label-green hover:opacity-100 transition-all duration-300'
          to='/auth/register'
        >
          Registration
        </NavLink>
        <h2 className='text-lg font-medium -tracking-[0.28px]'>Log In</h2>
      </div>
      <ul className='flex flex-col gap-3.5 mb-6 w-full'>
        <li>
          <label>
            <input
              className='px-4.5 py-3.5 bg-bg-dark border border-label-green rounded-lg opacity-40 outline-none text-white text-sm -tracking-[0.28px] w-full max-w-[287px] hover:opacity-100 focus:opacity-100 transition-all duration-300'
              name='email'
              type='email'
              placeholder='Enter your email'
            />
          </label>
        </li>
        <li>
          <label>
            <input
              className='px-4.5 py-3.5 bg-bg-dark border border-label-green rounded-lg opacity-40 outline-none text-white text-sm -tracking-[0.28px] w-full max-w-[287px] hover:opacity-100 focus:opacity-100 transition-all duration-300'
              name='password'
              type='text'
              placeholder='Confirm a password'
            />
          </label>
        </li>
      </ul>
      <button
        className='w-full bg-label-green rounded-lg p-3.5 text-text-dark text-sm -tracking-[0.28px] hover:bg-hover transition-all duration-300 cursor-pointer'
        type='submit'
      >
        Log In Now
      </button>
    </form>
  );
};
export default LoginForm;
