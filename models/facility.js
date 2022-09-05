import mongoose, { Schema } from "mongoose";

const imageSchema = new Schema(
  {
    image: {
      type: String,
      required: [true, "Add at least one image for this facility"],
    },
    id: String,
  },
  { timestamps: false }
);

const facilitySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Facility name is required"],
      unique: true,
    },
    description: { type: String, required: [true, "Please add a description"] },
    capacity: {
      type: Number,
      required: [true, "Please add an estimated capacity"],
    },
    type: {
      type: String,
      enum: ["INDOOR", "OUTDOOR"],
      required: [true, "Facility type is required"],
    },
    price: { type: Number, required: [true, "Price is required"] },
    images: {
      type: [imageSchema],
      validate: {
        validator: (v) => Array.isArray(v) && v.length > 0,
        message: "Images must not be empty",
      },
    },
    slug: { type: String, required: true },
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
  },
  { timestamps: true }
);

const Facility =
  mongoose.models.Facility || mongoose.model("Facility", facilitySchema);

export default Facility;
