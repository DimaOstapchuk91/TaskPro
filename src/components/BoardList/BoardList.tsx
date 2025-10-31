import { useGetAllBoardsQuery } from '../../redux/api/boardsApi';
import { Board } from '../../types/boards.type';
import BoardListItem from '../BoardListItem/BoardListItem';

const BoardList = () => {
  const { data, isLoading } = useGetAllBoardsQuery();
  console.log(data);

  return (
    <ul>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.data.map((item: Board) => (
          <BoardListItem key={item.id} board={item} />
        ))
      )}
    </ul>
  );
};
export default BoardList;
