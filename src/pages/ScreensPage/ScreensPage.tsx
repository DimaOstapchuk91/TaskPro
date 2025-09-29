import { useParams } from 'react-router-dom';
import NoBoardSelected from '../../components/NoBoardSelected/NoBoardSelected';
import BoardContent from '../../components/BoardContent/BoardContent';
import sprite from '../../assets/sprite.svg';

const ScreensPage = () => {
  const { boardId } = useParams<string>();
  return (
    <section className='flex flex-col h-full bg-bg-light p-5'>
      <div className='flex justify-between items-start mb-6.5 flex-shrink-0'>
        <h2 className='text-sm text-text-theme font-medium -tracking-[0.28px]'>
          Title Board: {boardId}
        </h2>

        <button
          className='flex items-center gap-1 stroke-text-theme/80 text-text-theme/80 hover:stroke-hover hover:text-hover '
          type='button'
        >
          <svg width='16' height='16' className='fill-transparent'>
            <use href={`${sprite}#icon-filter`}></use>
          </svg>
          Filters
        </button>
      </div>

      <div className='flex-1 w-full overflow-x-auto overflow-y-hidden'>
        {boardId ? <BoardContent id={boardId} /> : <NoBoardSelected />}
      </div>
    </section>
  );
};
export default ScreensPage;
