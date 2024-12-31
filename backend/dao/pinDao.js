const Pin = require("../models/Pin");

const createPinDao = async (data) => {
  try {
    const newPin = await Pin.create(data);
    return newPin;
  } catch (err) {
    throw err;
  }
};

const getAllPinsDao = async () => {
  try {
    const fetchAllPins = await Pin.findAll();
    return fetchAllPins;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createPinDao,
  getAllPinsDao,
};
