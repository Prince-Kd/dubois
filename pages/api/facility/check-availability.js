import Booking from "../../../models/booking";
import dbConnection from "../../../utils/dbConnection";

export default async function handler(req, res) {
  await dbConnection();
  try {
    const { date, id } = req.body;
    const booking = await Booking.findOne({ "facility._id": id, "date": date });
    if (!booking) {
      return res.status(200).json({
        data: true,
        message: "Facility is available",
      });
    }

    return res.status(400).json({
      data: false,
      message: "Facility has been booked",
    });
  } catch (err) {
    return res.status(400).json({
      message: "Could not check facility availability",
    });
  }
}
