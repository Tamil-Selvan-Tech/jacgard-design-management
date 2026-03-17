import { motion } from "framer-motion";
import { FaTrash, FaEdit, FaBoxes } from "react-icons/fa";
import { toast } from "react-toastify";

export default function DesignCard({ design, onDelete, onUpdate }) {

  const stockColor =
    design.stock > 10
      ? "bg-green-500"
      : design.stock > 0
      ? "bg-yellow-500"
      : "bg-red-500";

  const handleDelete = async () => {
    await onDelete(design._id);
    toast.success("Design Deleted Successfully ");
  };

  const handleUpdate = async () => {
    await onUpdate(design._id);
    toast.info("Stock Updated ");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-white via-indigo-50 to-purple-50 backdrop-blur-lg 
      rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
    >

      <div className="relative group">

        <img
          src={`http://localhost:5000/uploads/${design.image}`}
          alt="design"
          className="h-48 sm:h-52 md:h-56 w-full object-cover 
          group-hover:scale-110 transition duration-500"
        />

        {/* Stock Badge */}
        <div
          className={`absolute top-3 right-3 ${stockColor} text-white 
          px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1 
          shadow-lg animate-pulse`}
        >
          <FaBoxes />
          {design.stock}
        </div>

      </div>

      <div className="p-4 sm:p-5 text-center">

        <h2 className="text-lg sm:text-xl font-bold text-gray-800 tracking-wide">
          {design.designNumber}
        </h2>

        <p className="text-gray-500 text-xs sm:text-sm mt-1">
          Design Inventory
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-4 flex-wrap">

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleUpdate}
            className="flex items-center gap-2 bg-gradient-to-r 
            from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-700 
            text-white px-3 sm:px-4 py-2 text-sm rounded-lg shadow-md transition"
          >
            <FaEdit />
            Update
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDelete}
            className="flex items-center gap-2 bg-gradient-to-r 
            from-rose-500 to-red-600 hover:from-red-600 hover:to-rose-700 
            text-white px-3 sm:px-4 py-2 text-sm rounded-lg shadow-md transition"
          >
            <FaTrash />
            Delete
          </motion.button>

        </div>

      </div>

    </motion.div>
  );
}