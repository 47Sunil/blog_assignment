import mongoose from "mongoose";

// Function to check if ObjectId is valid
export const isValidObjectId = (ObjectId) => {
  return mongoose.Types.ObjectId.isValid(ObjectId);
};

// Function to check if value is valid
export const isValid = (value) => {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

// Function to check if name is valid
export const isValidName = (name) => {
  if (!name) {
    return false;
  }
  if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
    return true;
  }
  return false;
};
