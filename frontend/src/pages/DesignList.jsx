import { useEffect, useState } from "react";
import { getDesigns, deleteDesign, updateStock } from "../services/api";
import DesignCard from "../components/DesignCard";
import { motion } from "framer-motion";
import { FaSearch, FaBoxOpen } from "react-icons/fa";

export default function DesignList() {

  const [designs, setDesigns] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDesigns();
  }, []);

  const loadDesigns = async () => {
    const res = await getDesigns();
    setDesigns(res.data);
  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this design?")) return;

    await deleteDesign(id);
    loadDesigns();
  };

  const handleUpdate = async (id) => {

    const newStock = prompt("Enter new stock");

    if (newStock) {
      await updateStock(id, newStock);
      loadDesigns();
    }
  };

  const filteredDesigns = designs.filter((d) =>
    d.designNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto mt-8 px-4"
    >

      {/* Search Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >

        <div className="relative">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

          <input
            type="text"
            placeholder="Search Design Number"
            className="w-full pl-11 pr-4 py-3 sm:py-4 rounded-xl 
            border border-gray-300 shadow-md 
            bg-gradient-to-r from-white to-indigo-50
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            focus:shadow-lg transition duration-300"
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </motion.div>

      {/* Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

        {filteredDesigns.length > 0 ? (
          filteredDesigns.map((design) => (
            <DesignCard
              key={design._id}
              design={design}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))
        ) : (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full flex flex-col items-center justify-center py-16 text-gray-500"
          >

            <FaBoxOpen className="text-5xl mb-4 text-indigo-400" />
            <p className="text-lg font-medium">No Designs Found</p>

          </motion.div>

        )}

      </div>

    </motion.div>
  );
}