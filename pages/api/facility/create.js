import dbConnection from "../../../utils/dbConnection";
import Facility from "../../../models/facility";
import cloudinary from "../../../cloudinary";

export default async function handler(req, res) {
  await dbConnection();
  try {
    const { name, images } = req.body;
    const uploadedImages = [];
    const slug = name.includes(" ")
      ? name.toLowerCase().replaceAll(" ", "-")
      : name.toLowerCase();

    for (let i = 0; i < images.length; i++) {
      cloudinary.uploader
        .upload(images[i])
        .then((result) => {
          uploadedImages.push({ image: result.url, id: result.public_id });
        })
        .catch((err) => {
          console.log("Cloudinary error: ", err);
          return res.status(400).json({
            message: "Error saving images",
          });
        });
    }

    const facility = await Facility.create({
      ...req.body,
      images: uploadedImages,
      slug: slug,
    });

    return res.status(200).json({
      data: facility,
      message: "New facility created",
    });
  } catch (error) {
    console.log(error);
    const err = error.errors;

    return res.status(400).json({
      data: null,
      message: Object.values(err)[0].message,
    });
  }
}
