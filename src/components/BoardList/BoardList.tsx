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

  return (
    <ul className=' w-[calc(100%+12px)] h-[320px] pl-6 pr-7 -mr-4 overflow-y-auto scrollbar-thumb-text-theme/10 scrollbar-track-brand/10 scrollbar-thumb-rounded-full scrollbar-w-2 scrollbar scrollbar-track-rounded-full'>
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
