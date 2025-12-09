import { useParams } from 'react-router-dom';
import NoBoardSelected from '../../components/NoBoardSelected/NoBoardSelected';
import BoardContent from '../../components/BoardContent/BoardContent';
import DropdownFilter from '../../components/DropdownFilter/DropdownFilter';
import { useGetBoardByIdQuery } from '../../redux/api/boardsApi';
import { useMemo, useState } from 'react';

const ScreensPage = () => {
  const { boardId } = useParams<string>();
  const { data, isLoading, isError } = useGetBoardByIdQuery(Number(boardId));

  const [filter, setFilter] = useState<string | null>(null);

  const handleFilter = (value: string) => setFilter(value);

  const filteredColumns = useMemo(() => {
    if (!data?.data?.columns) return [];
    return data.data.columns.map(col => ({
      ...col,
      tasks: col.tasks.filter(task => {
        if (!filter) return true;
        return task.priority === filter;
      }),
    }));
  }, [data, filter]);

  if (!boardId) return <NoBoardSelected />;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading board</div>;

  return (
    <section className='flex flex-col h-full bg-bg-light p-5'>
      <div className='flex justify-between items-start mb-6.5 flex-shrink-0'>
        <h2 className='text-sm text-text-theme font-medium -tracking-[0.28px]'>
          {data?.data?.title}
        </h2>

        <DropdownFilter onSelect={handleFilter} />
      </div>

      <div className='flex-1 w-full h-full overflow-x-auto overflow-y-hidden scrollbar-thumb-bg scrollbar-track-text-theme/10 scrollbar-thumb-rounded-full scrollbar-h-2 scrollbar scrollbar-track-rounded-full'>
        {boardId ? (
          <BoardContent columns={filteredColumns} />
        ) : (
          <NoBoardSelected />
        )}
      </div>
    </section>
  );
};
export default ScreensPage;
