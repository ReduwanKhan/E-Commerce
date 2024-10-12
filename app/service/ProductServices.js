import BrandModel from "../model/brandsModel.js";
import CategoryModel from "../model/categoriesModel.js";

export const BrandListService = async () => {
  try {
    let data = await BrandModel.find();
    return {
      status: true,
      data: data,
    };
  } catch (e) {
    return {
      status: "fail",
      data: error.toString(),
    };
  }
};
export const CategoryListService = async () => {
  try {
    let data = await CategoryModel.find();
    return {
      status: true,
      data: data,
    };
  } catch (e) {
    return {
      status: "fail",
      data: error.toString(),
    };
  }
};
export const SliderListService = async () => {
  try {
    let data = await BrandModel.find();
    return {
      status: true,
      data: data,
    };
  } catch (e) {
    return {
      status: "fail",
      data: error.toString(),
    };
  }
};
export const ListByBrandService = async () => {
  try {
    let data = await BrandModel.find();
    return {
      status: true,
      data: data,
    };
  } catch (e) {
    return {
      status: "fail",
      data: error.toString(),
    };
  }
};
export const ListByCategoryService = async () => {
  try {
    let data = await BrandModel.find();
    return {
      status: true,
      data: data,
    };
  } catch (e) {
    return {
      status: "fail",
      data: error.toString(),
    };
  }
};
export const ListByRemarkService = async () => {
  try {
    let data = await BrandModel.find();
    return {
      status: true,
      data: data,
    };
  } catch (e) {
    return {
      status: "fail",
      data: error.toString(),
    };
  }
};
export const ListByKeywordService = async () => {
  try {
    let data = await BrandModel.find();
    return {
      status: true,
      data: data,
    };
  } catch (e) {
    return {
      status: "fail",
      data: error.toString(),
    };
  }
};
export const DetailService = async () => {
  try {
    let data = await BrandModel.find();
    return {
      status: true,
      data: data,
    };
  } catch (e) {
    return {
      status: "fail",
      data: error.toString(),
    };
  }
};
export const ReviewListService = async () => {
  try {
    let data = await BrandModel.find();
    return {
      status: true,
      data: data,
    };
  } catch (e) {
    return {
      status: "fail",
      data: error.toString(),
    };
  }
};
