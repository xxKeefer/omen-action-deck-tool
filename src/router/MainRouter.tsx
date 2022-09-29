import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Shell } from "~/components";
import { ActionDeckSteps } from "~/constants";
import { ActionDeckProvider } from "~/contexts";
import { ChooseArt, DownloadDeck, UploadOverlays } from "~/pages";

export const MainRouter = () => {
  return (
    <Shell>
      <ActionDeckProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/${ActionDeckSteps[1]}`} replace />}
            />
            <Route path={`/${ActionDeckSteps[1]}`} element={<ChooseArt />} />
            <Route
              path={`/${ActionDeckSteps[2]}`}
              element={<UploadOverlays />}
            />
            <Route path={`/${ActionDeckSteps[3]}`} element={<DownloadDeck />} />
          </Routes>
        </Router>
      </ActionDeckProvider>
    </Shell>
  );
};
