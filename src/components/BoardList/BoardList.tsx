import { useSelector } from 'react-redux';
import { useGetAllBoardsQuery } from '../../redux/api/boardsApi';
import { Board } from '../../types/boards.type';
import BoardListItem from '../BoardListItem/BoardListItem';
import { selectIsLoggedIn } from '../../redux/selectors/userSelectors';
import { AnimatePresence, motion } from 'framer-motion';

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
        <AnimatePresence>
          {data?.data.map((item: Board) => (
            <motion.li
              key={item.id}
              className='relative'
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25 }}
            >
              <BoardListItem board={item} />
            </motion.li>
          ))}
        </AnimatePresence>
      )}
    </ul>
  );
};
export default BoardList;
