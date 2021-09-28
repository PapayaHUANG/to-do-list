import './App.css';
import { useState } from 'react';
import Form from './Form/Form';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="header">
        <ul className="header-container">
          <li>
            <i className="fas fa-bars" onClick={() => setIsOpen(!isOpen)}></i>
          </li>
          <li>To-do List</li>
        </ul>
      </header>
      {isOpen && <Form></Form>}
    </>
  );
}

export default App;
