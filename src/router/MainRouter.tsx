import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ActionDeckProvider } from "~/contexts";
import { Home } from "~/pages";

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ActionDeckProvider>
              <Home />
            </ActionDeckProvider>
          }
        />
      </Routes>
    </Router>
  );
};
