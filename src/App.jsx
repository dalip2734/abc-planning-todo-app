import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoContainer from './components/TodoContainer';
import TodoItem from './components/TodoItem';

function App() {
  const [todos] = useState([
    { id: 1, title: 'Design System Architecture', description: '' },
    { id: 2, title: 'Implement Authentication', description: '' },
    { id: 3, title: 'Create API Documentation', description: '' },
    { id: 4, title: 'Optimize Database Queries', description: '' },
    { id: 5, title: 'Setup CI/CD Pipeline', description: '' },
    { id: 6, title: 'Conduct Security Audit', description: '' },
  ]);

  const handleUpdateTask = (id, description) => {
    // Handle task updates here
    console.log(`Task ${id} updated with description: ${description}`);
  };

  return (
    <div className="min-h-screen bg-loudy-slate/10 flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <TodoContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                title={todo.title}
                onUpdate={(description) =>
                  handleUpdateTask(todo.id, description)
                }
              />
            ))}
          </div>
        </TodoContainer>
      </main>
      <Footer />
    </div>
  );
}

export default App;
