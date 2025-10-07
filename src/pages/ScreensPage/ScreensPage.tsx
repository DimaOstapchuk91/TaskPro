import { useParams } from 'react-router-dom';
import NoBoardSelected from '../../components/NoBoardSelected/NoBoardSelected';
import BoardContent from '../../components/BoardContent/BoardContent';
import DropdownFilter from '../../components/DropdownFilter/DropdownFilter';

const ScreensPage = () => {
  const { boardId } = useParams<string>();
  return (
    <section className='flex flex-col h-full bg-bg-light p-5'>
      <div className='flex justify-between items-start mb-6.5 flex-shrink-0'>
        <h2 className='text-sm text-text-theme font-medium -tracking-[0.28px]'>
          Title Board: {boardId}
        </h2>

        <DropdownFilter />
      </div>

      <div className='flex-1 w-full h-full overflow-x-auto overflow-y-hidden scrollbar-thumb-bg scrollbar-track-text-theme/10 scrollbar-thumb-rounded-full scrollbar-h-2 scrollbar scrollbar-track-rounded-full'>
        {boardId ? <BoardContent id={boardId} /> : <NoBoardSelected />}
      </div>
    </section>
  );
};
export default ScreensPage;
