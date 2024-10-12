import { BrandListService } from "../service/ProductServices.js";

export const BrandList = async (req, res) => {
  try {
    let result = await BrandListService();
    return res.json(result);
  } catch (e) {
    return res.json({ status: "Fail", Message: e.toString() });
  }
};
