import Facility from "../../../models/facility";
import dbConnection from "../../../utils/dbConnection";

export default async function (req, res) {
  await dbConnection();
  const {
    query: { slug },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const facility = await Facility.findOne({
          slug: slug,
        });

        if (!facility) {
          return res.status(400).json({
            data: null,
            message: "Facility not found",
          });
        }
        return res.status(200).json({
          data: facility,
          message: "Facility found",
        });
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          data: null,
          message: "Error retrieving facility ",
        });
      }
      break;
    case "PUT":
      try {
        const { name } = req.body;
        let newSlug;
        if (name) {
          newSlug = name.includes(" ")
            ? name.toLowerCase().replaceAll(" ", "-")
            : name.toLowerCase();
        }
        const facility = await Facility.findOneAndUpdate(
          { slug: slug },
          { ...req.body, slug: newSlug ?? slug },
          { new: true, runValidators: true }
        );

        if (!facility) {
          return res.status(400).json({
            data: null,
            message: "Could not update facility ",
          });
        }
        return res.status(200).json({
          data: facility,
          message: "Facility updated",
        });
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          data: null,
          message: "Error updating facility ",
        });
      }
    default:
      return res.status(400).json({
        data: null,
        message: "No action ",
      });
  }
}
