interface ColumnItemProps {
  taskData: {
    id: string;
    title: string;
    description: string;
    priority: string;
    deadline: string;
    columnId: string;
  };
}

const ColumnItem = ({ taskData }: ColumnItemProps) => {
  return <div>{taskData.title}</div>;
};
export default ColumnItem;
