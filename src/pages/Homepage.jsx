import { useState } from "react";
import Layout from "./authentication/Layout";
import ProductDisplay from "./ProductDisplay";

const Homepage = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin((prevLogin) => !prevLogin);
  };

  return (
    <div>
      <p>Homepage</p>
      {login ? <ProductDisplay /> : <Layout handleLogin={handleLogin} />}
    </div>
  );
};

export default Homepage;
