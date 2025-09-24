import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full h-15'>
      <FallingLines
        color='var(--color-brand)'
        width='60'
        visible={true}
        ariaLabel='falling-circles-loading'
      />
    </div>
  );
};

export default Loader;
