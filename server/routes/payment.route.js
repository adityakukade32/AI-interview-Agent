import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { createOrder, testPaymentSuccess, verifyPayment } from "../controllers/payment.controller.js"



const paymentRouter = express.Router()

paymentRouter.post("/order" , isAuth , createOrder )
paymentRouter.post("/verify" , isAuth , verifyPayment )
paymentRouter.post("/test-success", isAuth, testPaymentSuccess)
paymentRouter.post("/fake-success", isAuth, testPaymentSuccess)


export default paymentRouter