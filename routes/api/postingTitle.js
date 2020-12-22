/** @format */

const express = require("express");
const router = express.Router();
const {
	getPostingTitles,
	createPostingTitle,
	updatePostingTitle,
	getOnePostingTitle,
	deletePostingTitle
} = require("../../controllers/postingTitleController");

router.route("/").get(getPostingTitles).post(createPostingTitle);
router
	.route("/:id")
	.get(updatePostingTitle)
	.patch(getOnePostingTitle)
	.delete(deletePostingTitle);

module.exports = router;
