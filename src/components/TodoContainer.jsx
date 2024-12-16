import TodoItem from './TodoItem';

const TodoContainer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-crisp-frost rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-midnight-navy mb-6">
          Todo List
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TodoItem title="Complete Project" />
          <TodoItem title="Implementation Code" />
          <TodoItem title="Write Documentation" />
          <TodoItem title="Setup CI/CD Pipeline" />
          <TodoItem title="Security Conduct Audit" />
          <TodoItem title='Optimize Database'/>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
