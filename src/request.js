const Joi = require("joi");









class RouteRequest {


  razorModel = async() => {
    return Joi.object().keys({
        amount: Joi.number().required().trim(),
        currency: Joi.string().required().trim()
    });
  }

  fetchOrderById = async() => {
    return Joi.object().keys({
        orderId: Joi.number().required().trim()
    });
  }






}


module.exports = new RouteRequest();