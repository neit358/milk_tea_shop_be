import Topping from "../models/topping.model.js";

const ToppingController = {
  getToppings: async (req, res) => {
    try {
      const toppings = await Topping.find();
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
