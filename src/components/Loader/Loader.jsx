import { PropagateLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full h-15'>
      <PropagateLoader
        color='var(--color-brand)'
        width='60'
        ariaLabel='falling-circles-loading'
      />
    </div>
  );
};

export default Loader;
