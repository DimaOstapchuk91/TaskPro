import sprite from '../../assets/sprite.svg';

interface LogoProps {
  isHeading?: boolean;
}

const Logo = ({ isHeading = false }: LogoProps) => {
  const content = (
    <div className='flex items-center gap-3.5'>
      <svg
        className=''
        href='../../assets/img/brand_icon.svg'
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
    <a href='/'>{content}</a>
  );
};
export default Logo;
