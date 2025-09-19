import { useParams } from 'react-router-dom';
import NoBoardSelected from '../../components/NoBoardSelected/NoBoardSelected';
import BoardContent from '../../components/BoardContent/BoardContent';
import sprite from '../../assets/sprite.svg';

const ScreensPage = () => {
  const { boardId } = useParams<string>();
  return (
    <section className='w-full h-screen bg-bg-dark p-5 relative'>
      <button
        className='absolute top-5 right-5 flex items-center gap-1 stroke-white/80 text-white/80 hover:stroke-hover hover:text-hover '
        type='button'
      >
        <svg width='16' height='16' className='fill-transparent'>
          <use href={`${sprite}#icon-filter`}></use>
        </svg>
        Filters
      </button>
      {boardId ? <BoardContent id={boardId} /> : <NoBoardSelected />}
    </section>
  );
};
export default ScreensPage;
