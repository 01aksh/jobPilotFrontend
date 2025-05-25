import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ProgressProvider } from "./contexts/ProgressContext";
import { AppRoutes } from "./routes";

function App() {
  return (
    <Router>
      <ProgressProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </ProgressProvider>
    </Router>
  );
}

export default App;
