import Topping from "../models/topping.model.js";

const ToppingController = {
  getToppings: async (req, res) => {
    try {
      const toppings = await Topping.find();
      if (!toppings) {
        return res.status(404).json({
          success: false,
          message: "Không tìm thấy topping!",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Danh sách topping!",
        result: toppings,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default ToppingController;
