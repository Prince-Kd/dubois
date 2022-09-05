import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    facility: {type: Schema.Types.ObjectId, ref: 'Facility', required: [true, "Please select a facility"]},
    clientName: {type: String, required: [true, "Client name is required"]},
    clientEmail: {type: String, required: [true,  "Client email is required"]},
    clientAddress: {type: String, required: [true, "Please provide your address"]},
    clientPhone: {type: String, required: [true, "Client phone number is required"]},
    purpose: {type: String, required: [true, "Please describe what you will use the facility for"]},
    date: {type: String, required: [true, "Please indicate the date and time you want to use the faciity"]},
    status: {type: String, enum: ["PENDING", "APPROVED", "REJECTED"], default: "PENDING"},
}, 
{timestamps: true}
)

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema)

export default Booking;
