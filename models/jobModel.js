/** @format */

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
	jobOpeningStatus: {
		type: String,
		required: [true, "Job opening status is required"]
	},
	postingTitle: {
		type: mongoose.Schema.ObjectId,
		required: [true, "Posting Title is required"],
		ref: "PostingTitle"
	},
	department: {
		type: String,
		required: [true, "Department is required"]
	},
	assignedRecruiter: {
		type: String,
		required: [true, "Assigned Recruiter is required"]
	},
	jobType: {
		type: String,
		required: [true, "Job Type is required"]
	},
	responsibilities: {
		type: String,
		required: [true, "Responsibilities is required"]
	},
	minWorkExp: {
		type: String,
		required: [true, "Min Work Exp is required"]
	},
	maxWorkExp: {
		type: String,
		required: [true, "Max Work Exp is required"]
	},

	minSalary: {
		type: String,
		required: [true, " Min Salary is required"]
	},
	maxSalary: {
		type: String,
		required: [true, "Max Salary is required"]
	},
	country: {
		type: String,
		required: [true, "Country Is Required"]
	},

	state: {
		type: String,
		required: [true, "State Is Required"]
	},

	city: {
		type: String,
		required: [true, "City Is Required"]
	},
	panel: {
		type: String,
		required: [true, "panel is required"]
	},
	hiringManager: {
		type: String,
		required: [true, "Hiring Manager is Required"]
	},
	screeningQuestion: [
		{ type: mongoose.Schema.ObjectId, ref: "ScreeningQuestion" }
	]
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
