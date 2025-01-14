import { Route, Routes } from 'react-router-dom';
import Index from './components/layout';
import Home from './pages/Home';

const App = () => {
  return (
    <Index>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Index>
  );
};

export default App;
