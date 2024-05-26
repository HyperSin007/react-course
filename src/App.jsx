import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import TodoList from './TodoList';
// import '';

function App() {
  return (
    <Router>
      <div id="main">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/TodoList">Book Store</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TodoList" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;