import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  const { boardId } = useParams();
  return (
    <div>
      <p>Board Id: {boardId}</p>
    </div>
  );
};
export default ScreensPage;
