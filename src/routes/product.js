const express = require("express");
const router = express.Router();

const Product = require("../controllers/product");
// const cache = require('../cache');

const grantAccess = require("../middlewares/grantAccess");
const { verifyAccessToken } = require("../helpers/jwt");

router.post(
	"/",
	verifyAccessToken,
	grantAccess("createAny", "product"),
	Product.Create
);
router.get(
	"/:product_id",
	// verifyAccessToken,
	// grantAccess('readAny', 'product'),
	// cache.route(),
	Product.Get
);
// router.get('/', cache.route(), Product.GetList);
router.get("/", Product.GetList);
router.put("/:product_id", Product.Update);
router.delete("/:product_id", Product.Delete);

module.exports = router;
