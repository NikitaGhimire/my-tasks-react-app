import React from 'react';
import ClassInput from './components/TaskInput';
import './styles.App.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List Application</h1>
      </header>
      <main>
        <ClassInput name="My Todo List" />
      </main>
    </div>
  );
}

export default App;
