import express from "express";
import { addDoctor,allDoctors,appointmentsAdmin,loginAdmin,appointmentCancel,adminDashboard, getUser} from "../Controllers/Admin.Controller.js";
import upload from "../Middleware/Multer.js";
import authAdmin from "../Middleware/AuthAdmin.js";
import { changeAvailability } from "../Controllers/Doctor.Controller.js";


const adminRouter = express.Router();

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.get('/all-doctors',authAdmin,allDoctors);
adminRouter.post('/change-availabilty',authAdmin,changeAvailability)
adminRouter.get('/appointments',authAdmin,appointmentsAdmin)
adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)
adminRouter.get('/dashboard',authAdmin,adminDashboard)
adminRouter.get('/all-users',authAdmin,getUser);

export default adminRouter;
