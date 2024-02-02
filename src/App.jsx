import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";

// import { SessionContext } from "./pages/authentication/Login";
import ProductDisplay from "./pages/ProductDisplay";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Homepage from "./pages/Homepage";
import "./index.css";

export const SessionContext = createContext();

function App() {
  return (
    <div className="relative w-full h-11/12 flex flex-col items-center justify-center">
      <div className="fixed z-10 w-full top-0 left-0 right-0 bg-slate-400">
        <p className="p-4 text-3xl font-semibold">Pick N Pay</p>
      </div>
      <SessionContext.Provider value={"value"}>
        <Router>
          <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route path="/displayproduct" element={<ProductDisplay />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/editproduct/:productId" element={<EditProduct />} />
            <Route
              path="*"
              element={
                <div>
                  <p>404 PAGE NOT FOUND</p>
                </div>
              }
            />
          </Routes>
        </Router>
      </SessionContext.Provider>
    </div>
  );
}

export default App;
