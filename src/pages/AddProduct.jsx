import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SessionContext } from "./../App";

const AddProduct = () => {
  const { token } = useContext(SessionContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    productname: "",
    productdesc: "",
    status: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      setFormData((prevData) => ({
        ...prevData,
        price: Number(value),
      }));
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    // console.log(token);

    try {
      const response = await axios.post(
        "http://localhost:3000/product/add",
        {
          ...formData,
          price: Number(formData.price),
        },
        {
          headers: {
            // "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data.added) {
        console.log(response.data.product);
        setMessage("Product added succesfully!");
      } else {
        setMessage("Unable to add product");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      console.error("There was a problem with the request:", error.message);
    }
  };

  return (
    <div className="mt-[70px] flex flex-col items-center gap-2">
      <p className="text-center text-2xl font-bold my-8">Add New Product</p>
      <form className="w-fit p-4 grid grid-cols-2 gap-4 items-center justify-between bg-slate-600 rounded-lg">
        <label>Product Name</label>
        <input
          type="text"
          name="productname"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          className="p-2 rounded-md"
        />

        <label>Enter Product Description</label>
        <input
          type="text"
          name="productdesc"
          value={formData.desc}
          onChange={handleChange}
          placeholder="Enter product description"
          className="p-2 rounded-md"
        />

        <label>Enter Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          className="p-2 rounded-md"
        />

        <label>Status</label>
        <div className="w-full flex gap-2 items-center justify-between">
          <label>
            <input
              type="radio"
              name="status"
              value="active"
              checked={formData.status === "active"}
              onChange={handleChange}
              required
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={formData.status === "inactive"}
              onChange={handleChange}
              required
            />
            Inactive
          </label>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="col-span-2 justify-self-center w-fit py-2 px-4 m-4 bg-red-400 rounded-xl"
        >
          Add Product to Product List
        </button>
      </form>
      <p>{message}</p>
      <Link to="/displayproduct" className="underline">
        Go to Product Display
      </Link>
    </div>
  );
};

export default AddProduct;
