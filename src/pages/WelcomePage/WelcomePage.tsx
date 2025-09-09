import Logo from '../../components/Logo/Logo';
import welcomeImg from '../../assets/img/welcome_img.png';
import { NavLink } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <section className='flex justify-center items-center min-h-screen w-full bg-[linear-gradient(180deg,#ffffff_50%,#BEDBB0_80%)]'>
      <div>
        <div className='flex flex-col items-center max-w-[335px]'>
          <img
            className='mb-3.5'
            src={welcomeImg}
            width={124}
            height={124}
            alt='welcome images'
          />
          <Logo isHeading={true} />
          <p className='mb-12 text-center text-text-dark text-sm font-normal leading-[18px] -tracking-[0.28px]'>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
          </p>
          <NavLink
            className='w-full text-center p-3.5 border rounded-lg bg-text-dark text-sm font-medium -tracking-[0.28px] mb-3.5 hover:opacity-90 transition-all duration-300'
            to='/auth/register'
          >
            Registration
          </NavLink>
          <NavLink
            className='w-full text-center text-text-dark text-sm font-medium -tracking-[0.28px] mb-3.5  hover:text-hover transition-all duration-300'
            to='/auth/login'
          >
            Log In
          </NavLink>
        </div>
      </div>
    </section>
  );
};
export default WelcomePage;
