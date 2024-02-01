import { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    status: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // fetch("http://example.com/submit", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Failed to submit form data");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Form data submitted successfully:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error submitting form data:", error);
    //   });
  };

  return (
    <div className="mt-[70px]">
      <p className="text-center text-2xl font-bold my-8">Add New Product</p>
      <form className="w-fit p-4 grid grid-cols-2 gap-4 items-center justify-between bg-slate-600 rounded-lg">
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          className="p-2 rounded-md"
        />

        <label>Enter Product Description</label>
        <input
          type="text"
          name="desc"
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
    </div>
  );
};

export default AddProduct;