const Joi = require("joi");

// create user

const createCategory =  {
  query: Joi.object().keys({
    category_name: Joi.string().trim(),
    category_desc: Joi.string().trim()
  }),
};

module.exports = {createCategory};