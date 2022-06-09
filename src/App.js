import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/search' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetailPage />} />
    </Routes>
  );
};

export default App;
