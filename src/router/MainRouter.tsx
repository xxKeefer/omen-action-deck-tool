import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Shell } from "~/components";
import { ActionDeckProvider } from "~/contexts";
import { Home } from "~/pages";

export const MainRouter = () => {
  return (
    <Shell>
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
    </Shell>
  );
};
