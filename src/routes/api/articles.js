const router = require("expres").Router();
const articlesController = require("../../controllers/nytController");

router.route("/")
.get(articlesController.findAll)
.post(articlesController.create);

router.route("/:id")
.delete(articlesController.remove);

module.exports = router;