import Layout from "../common/Layout";
import "./App.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}

export default App;
