const Request = require('../models/requestModel');

// Create a new request
exports.createRequest = async (req, res) => {
    try {
        const newRequest = new Request(req.body);
        const request = await newRequest.save();
        res.status(201).json(request);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all requests
exports.getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update request status
exports.updateRequestStatus = async (req, res) => {
    try {
        const request = await Request.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        res.status(200).json(request);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};