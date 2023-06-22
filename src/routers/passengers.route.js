import { Router } from "express";
import { getInfo } from "../controllers/passengers.controllers.js";

const passengerRouter = Router();

passengerRouter.get("/passengers/travels/:page", getInfo);

export { passengerRouter };