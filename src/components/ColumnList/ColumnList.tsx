import { AnimatePresence, motion } from 'framer-motion';
import { Column } from '../../types/culumn.type';
import AddColumnBtn from '../btn/AddColumnBtn/AddColumnBtn';
import ColumnListItem from '../ColumnListItem/ColumnListItem';

interface BoardContentProps {
  columns: Column[];
  boardId: number;
}

const ColumnList = ({ columns, boardId }: BoardContentProps) => {
  return (
    <div className='h-full w-full'>
      <ul className='flex flex-nowrap gap-8.5 w-max h-full'>
        <AnimatePresence>
          {columns.map(column => (
            <motion.li key={column.id} layout exit={{ opacity: 0, x: -20 }}>
              <ColumnListItem column={column} boardId={boardId} />
            </motion.li>
          ))}
          <motion.div layout exit={{ opacity: 0, x: -20 }}>
            <AddColumnBtn boardId={boardId} />
          </motion.div>
        </AnimatePresence>
      </ul>
    </div>
  );
};
export default ColumnList;
