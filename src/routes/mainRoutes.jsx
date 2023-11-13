import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "../App";
import HomePage from "../pages/homePage";
import Articles from '../pages/articles';

const MainRouter = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article" element={<Articles/>}/>
    </Routes>
    </Router>
  );
};
export default MainRouter;
