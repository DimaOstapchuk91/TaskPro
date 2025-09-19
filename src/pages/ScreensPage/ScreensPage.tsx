import { useParams } from 'react-router-dom';
import NoBoardSelected from '../../components/NoBoardSelected/NoBoardSelected';
import BoardContent from '../../components/BoardContent/BoardContent';

const ScreensPage = () => {
  const { boardId } = useParams();
  return (
    <section className='w-full h-screen bg-bg-dark p-5'>
      {boardId ? <BoardContent id={boardId} /> : <NoBoardSelected />}
    </section>
  );
};
export default ScreensPage;
