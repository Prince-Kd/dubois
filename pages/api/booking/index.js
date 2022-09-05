import Booking from "../../../models/booking";
import dbConnection from "../../../utils/dbConnection";

export default async function handler(req, res) {
    await dbConnection()
    const { method } = req;

    switch (method) {
        case "POST":
            const {id, name, email, date, phone, address, purpose } = req.body;
            const booking = await Booking.create(
                {
                    facility: id,
                    clientName: name,
                    clientEmail: email,
                    clientAddress: address,
                    clientPhone: phone,
                    purpose: purpose,
                }
            )
    }
        

}