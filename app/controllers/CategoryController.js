export const CategoryList = async (req, res) => {
  try {
    return res.json({
      status: "Success",
      Message: "User Successfully Registered",
    });
  } catch (e) {
    return res.json({ status: "Fail", Message: e.toString() });
  }
};
