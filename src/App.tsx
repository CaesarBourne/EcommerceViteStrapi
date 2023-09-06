import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, useLocation, Routes } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
