const router = require('express').Router();
const {
  getAllBrands,
  createBrand,
  getBrandById,
  updateBrand,
  deleteBrand,
  updateStatus,
  activeBrands,
} = require('../../controllers/admin/BrandController');

// Get Brands
router.get('/', getAllBrands);

// Get Active Brands
router.get('/active', activeBrands);

// Create Brand
router.post('/', createBrand);

// Get Brand by Id
router.get('/:id', getBrandById);

// Update Brand
router.put('/:id', updateBrand);

// Delete Brand
router.delete('/:id', deleteBrand);

// Update Brand Status
router.put('/:id/status', updateStatus);

module.exports = router;
