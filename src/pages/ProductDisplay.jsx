import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SessionContext } from "./../App";
import axios from "axios";

const ProductDisplay = () => {
  const { token } = useContext(SessionContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log(token);

    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/product", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        if (response.data.fetched) {
          console.log(response.data.products);
          setProducts(response.data.products);
        }
      } catch (error) {
        console.log(error);
        console.error("There was a problem with the request:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mt-[70px]">
      <p className="text-center text-2xl font-bold my-8">Product Display</p>
      <Link
        to="/addproduct"
        className="w-fit p-3 m-4 flex items-center text-lg gap-2 bg-black text-white font-semibold rounded-xl cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 13H6q-.425 0-.712-.288T5 12q0-.425.288-.712T6 11h5V6q0-.425.288-.712T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.712-.288T11 18z"
          />
        </svg>
        <p>Add Product</p>
      </Link>
      <div className="grid grid-cols-2">
        {products.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col p-4 m-4 bg-red-400 rounded-xl drop-shadow-md"
            >
              <div className="flex justify-between">
                <p className="text-2xl font-semibold">{item.productname}</p>
                <div>
                  {item.status === "active" ? (
                    <div className="w-4 h-4 rounded-full bg-green-600 border"></div>
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-red-600 border"></div>
                  )}
                </div>
              </div>
              <p>{item.productdesc}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M435.2 48H312.3c-3.8 0-7.5 1.5-10.2 4.2L56.4 297.9c-11.2 11.2-11.2 29.5 0 40.7l117 117c11.2 11.2 29.5 11.2 40.7 0L459.7 210c2.7-2.7 4.2-6.4 4.2-10.2v-123C464 60.9 451.1 48 435.2 48zm-47.7 111.8c-20.4 2.2-37.4-14.9-35.3-35.3 1.6-14.8 13.5-26.8 28.3-28.3 20.4-2.2 37.4 14.9 35.3 35.3-1.6 14.8-13.5 26.7-28.3 28.3z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>Rs. {item.price}</p>
                </div>

                <Link
                  to={`/editproduct/${item.id}`}
                  className="bg-black rounded-full text-white p-2
                  cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-1 2q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductDisplay;
