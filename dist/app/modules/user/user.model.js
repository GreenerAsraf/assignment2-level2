"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
// Define sub-schemas
const FullNameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});
const AddressSchema = new mongoose_1.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
});
const OrderSchema = new mongoose_1.Schema({
    productName: { type: String },
    price: { type: Number },
    quantity: { type: Number },
});
// Define the main User schema
const UserSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        required: [true, 'Id is required'],
    },
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullName: {
        type: FullNameSchema,
        required: [true, 'Name is required'],
    },
    age: { type: Number },
    email: { type: String, required: true },
    isActive: { type: Boolean },
    hobbies: [{ type: String }, { type: String }],
    address: { type: AddressSchema, required: true },
    orders: [OrderSchema],
});
exports.UserModel = (0, mongoose_1.model)('User', UserSchema);
