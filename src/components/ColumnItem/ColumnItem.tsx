import clsx from 'clsx';
import ControlButtons from '../btn/ControlButtons/ControlButtons';
import TaskModal from '../modals/TaskModal/TaskModal';
import DropdownProgres from '../DropdownProgres/DropdownProgres';
import { Task } from '../../types/task.type';

interface ColumnItemProps {
  taskData: Task;
}

const ColumnItem = ({ taskData }: ColumnItemProps) => {
  const handleDellTask = async () => {
    console.log('Видалення завдання');
  };
  return (
    <div
      className={clsx(
        'p-5 bg-header rounded-tl-[4px] rounded-bl-[4px] rounded-r-lg border-l-4',
        {
          'border-label-green': taskData.priority === 'High',
          'border-label-pink': taskData.priority === 'Medium',
          'border-label-violet': taskData.priority === 'Low',
          'border-label-gray': taskData.priority === 'Without',
        }
      )}
    >
      <h3 className='text-sm text-text-theme mb-2 font-semibold -tracking-[0.28px]'>
        {taskData.title}
      </h3>
      <p className='text-xs max-w-[290px] h-8 mb-3.5 text-text-theme/50 leading-4 -tracking-[0.24px] overflow-hidden text-ellipsis  line-clamp-2 '>
        {taskData.description}
      </p>
      <div className='flex justify-between items-end pt-3.5 border-t border-text-theme/10 relative'>
        <div className='flex gap-3.5'>
          <div>
            <p className='text-[8px] mb-1 text-text-theme/50 -tracking-[0.16px]'>
              Priority
            </p>
            <p className='flex items-center text-text-theme text-[10px] -tracking-[0.2px]'>
              <span
                className={clsx('w-3 h-3 block rounded-full mr-1', {
                  'bg-label-green': taskData.priority === 'High',
                  'bg-label-pink': taskData.priority === 'Medium',
                  'bg-label-violet': taskData.priority === 'Low',
                  'bg-label-gray': taskData.priority === 'Without',
                })}
              ></span>
              {taskData.priority}
            </p>
          </div>
          <div>
            <p className='text-[8px] mb-1 text-text-theme/50 -tracking-[0.16px]'>
              Deadline
            </p>
            <p className='text-text-theme text-[10px] -tracking-[0.2px]'>
              {taskData.deadline}
            </p>
          </div>
        </div>
        <div className='flex gap-2 relative'>
          <DropdownProgres />
          <ControlButtons
            confirmTitle={'Delete Task?'}
            confirmAction={handleDellTask}
            CreateModal={TaskModal}
          />
        </div>
      </div>
    </div>
  );
};
export default ColumnItem;
