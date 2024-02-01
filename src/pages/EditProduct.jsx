import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../assets/products";

const EditProduct = () => {
  const { productId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    status: "",
    price: 0,
  });

  useEffect(() => {
    products.forEach((item) => {
      if (item.id === productId) {
        setFormData({
          name: item.product_name,
          desc: item.product_description,
          status: item.status,
          price: item.price,
        });
      }
    });
    setTimeout(console.log(formData), 2000);
  }, [productId]);

  return (
    <div className="mt-[90px]">
      <p>Edit Product {productId}</p>
    </div>
  );
};
export default EditProduct;
