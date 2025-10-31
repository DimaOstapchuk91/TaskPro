import { useSelector } from 'react-redux';
import { useGetAllBoardsQuery } from '../../redux/api/boardsApi';
import { Board } from '../../types/boards.type';
import BoardListItem from '../BoardListItem/BoardListItem';
import { selectIsLoggedIn } from '../../redux/selectors/userSelectors';

const BoardList = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { data, isLoading } = useGetAllBoardsQuery(undefined, {
    skip: !isLoggedIn,
  });
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
