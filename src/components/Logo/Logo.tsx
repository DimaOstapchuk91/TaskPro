import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

interface LogoProps {
  isHeading?: boolean;
}

const Logo = ({ isHeading = false }: LogoProps) => {
  const content = (
    <div className={`flex items-center ${isHeading ? 'gap-3.5' : 'gap-2'}`}>
      <svg
        className={`${isHeading ? 'w-10 h-10' : 'w-8 h-8'}`}
        width={40}
        height={40}
      >
        <use href={`${sprite}#icon-brand`} />
      </svg>
      <span>Task Pro</span>
    </div>
  );
  return isHeading ? (
    <h1 className='text-text-dark text-[28px] font-semibold -traking-[1.12px] mb-6'>
      {content}
    </h1>
  ) : (
    <NavLink
      className={'mb-17.5 block font-semibold -tracking-[0.64px]'}
      to='/home'
    >
      {content}
    </NavLink>
  );
};
export default Logo;
