import { useState } from 'react';
import './App.css';
import ActiveTaskList from './components/ActiveTaskList';
import MainHeader from './components/MainHeader';

function App() {
  const [newTaskModal, setNewTaskModal] = useState(false);

  function closeNewTaskModal() {
    setNewTaskModal(false);
  }
  function showNewTaskModal() {
    setNewTaskModal(true);
  }
  return (
    <>
      <MainHeader onCreateTask={showNewTaskModal} />
      <ActiveTaskList isModal={newTaskModal} closeModal={closeNewTaskModal} />
    </>
  );
}

export default App;
