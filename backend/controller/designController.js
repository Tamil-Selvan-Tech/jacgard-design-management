import Design from "../models/design.js";
import fs from "fs";
import path from "path";

export const addDesign = async (req, res) => {
  try {
    const design = new Design({
      designNumber: req.body.designNumber,
      stock: req.body.stock || 0,
      image: req.file ? req.file.filename : null,
    });

    const savedDesign = await design.save();

    res.status(201).json(savedDesign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDesigns = async (req, res) => {
  try {
    const designs = await Design.find().sort({ createdAt: -1 });

    res.json(designs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteDesign = async (req, res) => {
  try {

    const design = await Design.findById(req.params.id);

    if (!design) {
      return res.status(404).json({ message: "Design not found" });
    }

    // delete image file if exists
    if (design.image) {
      const imagePath = path.join("uploads", design.image);

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Design.findByIdAndDelete(req.params.id);

    res.json({ message: "Design deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateStock = async (req, res) => {
  try {
    const updated = await Design.findByIdAndUpdate(
      req.params.id,
      { stock: req.body.stock },
      { new: true }
    );

    res.json(updated);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};