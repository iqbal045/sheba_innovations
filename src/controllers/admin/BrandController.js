// Get all brands
const response = require('../../helpers/response');
const { Brand } = require('../../models/Brand');
const mongooseIdValidator = require('../../helpers/mongooseIdValidator');

// Get all brands
exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();

    return response.success(res, brands, 'Brands fetched.', 200);
  } catch (err) {
    return response.error(res, err, 'Error Occurred.', err.status || 500);
  }
};

// Get all active brands
exports.activeBrands = async (req, res) => {
  try {
    const brands = await Brand.find({ status: true });

    return response.success(res, brands, 'Active brands fetched.', 200);
  } catch (err) {
    return response.error(res, err, 'Error Occurred.', err.status || 500);
  }
};

// Create Brand
exports.createBrand = async (req, res) => {
  try {
    const { name, status } = req.body;
    const brand = await Brand.create({
      name,
      status,
    });

    return response.success(res, brand, 'Brand created.', 201);
  } catch (err) {
    return response.error(res, err, 'Error Occurred.', err.status || 500);
  }
};

// Get brand by id
exports.getBrandById = async (req, res) => {
  try {
    await mongooseIdValidator(req.params.id, 'Brand', res);

    const brand = await Brand.findById(req.params.id);

    if (!brand) {
      return response.error(res, {}, 'Brand not found.', 404);
    }

    return response.success(res, brand, 'Brand fetched.', 200);
  } catch (err) {
    return response.error(res, err, 'Error Occurred.', err.status || 500);
  }
};

// Update Brand
exports.updateBrand = async (req, res) => {
  try {
    await mongooseIdValidator(req.params.id, 'Brand', res);

    const brand = await Brand.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        status: req.body.status,
      },
      { new: true },
    );

    if (!brand) {
      return response.error(res, {}, 'Brand not found.', 404);
    }

    return response.success(res, brand, 'Brand updated.', 200);
  } catch (err) {
    return response.error(res, err, 'Error Occurred.', err.status || 500);
  }
};

// Delete brand
exports.deleteBrand = async (req, res) => {
  try {
    await mongooseIdValidator(req.params.id, 'Brand', res);

    const brand = await Brand.findByIdAndRemove(req.params.id);

    if (!brand) {
      return response.error(res, {}, 'Brand not found.', 404);
    }

    return response.success(res, brand, 'Brand deleted.', 200);
  } catch (err) {
    return response.error(res, err, 'Error Occurred.', err.status || 500);
  }
};

// Update status
exports.updateStatus = async (req, res) => {
  try {
    await mongooseIdValidator(req.params.id, 'Brand', res);

    const brand = await Brand.findById(req.params.id);

    if (!brand) {
      return response.error(res, {}, 'Brand not found.', 404);
    }

    brand.status = !brand.status;
    await brand.save();

    return response.success(res, brand, 'Brand status updated.', 200);
  } catch (err) {
    return response.error(res, err, 'Error Occurred.', err.status || 500);
  }
};
