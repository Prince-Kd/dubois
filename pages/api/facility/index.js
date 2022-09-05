import Facility from "../../../models/facility"
import dbConnection from "../../../utils/dbConnection";


export default async function handler(req, res){
    await dbConnection()
    try{
        const facilities = await Facility.find();
        if(facilities){
            return res.status(200).json({
                data: facilities,
                message: "All facilities"
            })
        }
        res.status(400).json({
            data: null,
            mesage: "Could not retrieve facilities"
        })
    }catch(error){
        console.log(error)
        return res.status(400).json({
            data: null,
            message: "Error retrieving facilities"
        })
    }
}