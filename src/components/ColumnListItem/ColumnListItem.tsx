import ControlButtons from '../btn/ControlButtons/ControlButtons';
import sprite from '../../assets/sprite.svg';
import ColumnModal from '../modals/ColumnModal/ColumnModal';
import { useState } from 'react';
import TaskModal from '../modals/TaskModal/TaskModal';
import Modal from '../modals/Modal';
import { Column } from '../../types/culumn.type';
import TaskItem from '../TaskItem/TaskItem';
import { useDeleteColumnMutation } from '../../redux/api/columnsApi';
import { AnimatePresence, motion } from 'framer-motion';

interface ColumnListProps {
  column: Column;
  boardId: number;
}

const ColumnListItem = ({ column, boardId }: ColumnListProps) => {
  const [isAddTaskModal, setAddTaskModal] = useState<boolean>(false);

  const [deleteColumn, { isLoading }] = useDeleteColumnMutation();

  const ColumnEditModal = ({ onClose }: { onClose: () => void }) => (
    <ColumnModal
      onClose={onClose}
      mode='edit'
      boardId={boardId}
      id={column.id}
    />
  );

  const tasks = column.tasks ?? [];

  const handleDellColumn = async () => {
    await deleteColumn({ boardId: boardId, columnId: column.id }).unwrap();
  };

  const handleCloseTaskModal = () => {
    setAddTaskModal(false);
  };

  return (
    <div className=' w-[335px]  snap-center flex flex-col'>
      <div className='relative  px-5 py-4.5 mb-3.5 bg-bg w-full rounded-lg '>
        <h2 className='text-sm font-medium -tracking-[0.28px]'>
          {column.title}
        </h2>
        <div className='absolute top-1/2 -translate-y-1/2 right-5 flex gap-2 '>
          <ControlButtons
            isLoading={isLoading}
            confirmAction={handleDellColumn}
            confirmTitle={'Delete column?'}
            CreateModal={ColumnEditModal}
          />
        </div>
      </div>
      <ul className=' flex  flex-col pr-2  -mr-4 gap-2 mb-3.5 h-[calc(100vh-314px)]  overflow-y-auto overflow-hidden  scrollbar-thumb-bg scrollbar-track-text-theme/10 scrollbar-thumb-rounded-full scrollbar-w-2 scrollbar scrollbar-track-rounded-full'>
        <AnimatePresence>
          {tasks.map(item => (
            <motion.li
              key={item.id}
              layout
              exit={{
                opacity: 0,
                scale: 0.6,
                y: 20,
              }}
              transition={{ duration: 0.25 }}
            >
              <TaskItem
                taskData={item}
                boardId={boardId}
                columnId={column.id}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <button
        className='p-3.5 flex items-center gap-2 justify-center w-full !text-sm font-bold -tracking-[0.26px] bg-brand rounded-lg  text-text-dark hover:bg-hover'
        type='button'
        onClick={() => setAddTaskModal(true)}
      >
        <span className='flex justify-center items-center rounded w-7 h-7 bg-text-dark'>
          <svg
            width='14'
            height='14'
            className='stroke-text-theme fill-transparent'
          >
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </span>
        Add another card
      </button>
      <Modal isOpen={isAddTaskModal} onClose={handleCloseTaskModal}>
        <TaskModal
          mode={'create'}
          onClose={handleCloseTaskModal}
          boardId={boardId}
          columnId={column.id}
        />
      </Modal>
    </div>
  );
};
export default ColumnListItem;
