/** @format */
const Job = require("../models/jobModel");

exports.getJobs = async (req, res) => {
	try {
		const jobs = await Job.find().populate("screeningQuestion");

		res.status(200).json({
			status: "success",
			results: jobs.length,
			data: {
				data: jobs
			}
		});
	} catch (error) {
		res.status(404).json({
			status: "Failed"
		});
	}
};

exports.getOneJob = async (req, res) => {
	try {
		const job = await Job.findById(req.params.id);

		res.status(200).json({
			status: "success",
			data: {
				data: job
			}
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			error: {
				message: error.message
			}
		});
	}
};

exports.createJob = async (req, res) => {
	try {
		const job = await Job.create(req.body);

		res.status(201).json({
			status: "success",
			data: {
				data: job
			}
		});
	} catch (error) {
		res.status(400).json({
			status: "Failed",
			error: {
				message: error.message
			}
		});
	}
};

exports.updateJob = async (req, res) => {
	try {
		const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});

		res.status(200).json({
			status: "Success",
			data: {
				data: job
			}
		});
	} catch (error) {
		res.status(400).json({
			status: "Fail",
			error: {
				message: error.message
			}
		});
	}
};

exports.deleteJob = async (req, res) => {
	try {
		const job = await Job.findByIdAndDelete(req.params.id);

		res.status(204).json({
			status: "success",
			data: null
		});
	} catch (error) {
		res.status(400).json({
			status: "Fail",
			error: {
				message: error.message
			}
		});
	}
};
