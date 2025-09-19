import sprite from '../../assets/sprite.svg';

interface BoardContentProps {
  id: string;
}

const BoardContent = ({ id }: BoardContentProps) => {
  return (
    <div>
      <h2 className='text-sm font-medium mb-6.5 -tracking-[0.28px]'>
        Title Board: {id}
      </h2>
      <button
        className='flex items-center justify-center gap-2 w-full max-w-[335px] p-3.5 bg-bg rounded-lg'
        type='button'
      >
        <span className='flex justify-center items-center rounded-lg w-7 h-7 bg-white'>
          <svg
            width='14'
            height='14'
            className='stroke-text-dark fill-transparent'
          >
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </span>

        <p className='text-sm font-medium -tacking-[0.28px]'>
          Add another column
        </p>
      </button>
    </div>
  );
};
export default BoardContent;
