import BoardListItem from '../BoardListItem/BoardListItem';

interface BoardTypes {
  id: string;
  title: string;
  icon: string;
}

interface BoardListProps {
  mokedBoards: BoardTypes[];
}

const BoardList = ({ mokedBoards }: BoardListProps) => {
  return (
    <ul>
      {mokedBoards.map(item => (
        <BoardListItem key={item.id} board={item} />
      ))}
    </ul>
  );
};
export default BoardList;
