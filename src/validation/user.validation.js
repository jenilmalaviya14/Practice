const Joi = require("joi");

/** get user */

const getUser =  {
  query: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password:Joi.string()
  }),
};

module.exports = getUser;
