import { useState } from "react";
import { addDesign } from "../services/api";
import { toast } from "react-toastify";

export default function AddDesign() {

  const [designNumber, setDesignNumber] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("designNumber", designNumber);
    formData.append("stock", stock);
    formData.append("image", image);

    try {
      await addDesign(formData);

      toast.success("Design Added Successfully ");

      setDesignNumber("");
      setStock("");
      setImage(null);

    } catch (err) {
      console.log(err);
      toast.error("Error adding design ");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600">

      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-6 sm:p-8 w-full sm:w-[420px]">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800 tracking-wide">
          Add New Design
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Design Number"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-purple-500 focus:border-transparent 
            transition w-full"
            value={designNumber}
            onChange={(e) => setDesignNumber(e.target.value)}
          />

          <input
            type="number"
            placeholder="Stock"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-purple-500 focus:border-transparent 
            transition w-full"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <input
            type="file"
            className="border border-gray-300 p-2 rounded-lg w-full cursor-pointer
            file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0
            file:bg-purple-600 file:text-white hover:file:bg-purple-700
            transition"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button
            className="bg-gradient-to-r from-purple-600 to-pink-500 
            hover:from-purple-700 hover:to-pink-600 
            text-white py-3 rounded-lg font-semibold 
            shadow-lg hover:shadow-xl transition duration-300 active:scale-95"
          >
            Add Design
          </button>

        </form>

      </div>

    </div>
  );
}