import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "~/pages";

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
