const Joi = require("joi");

/** create user */
const createUser = {
    body: Joi.object().keys({
      first_name: Joi.string().required().trim(),
      student_bday: Joi.string().required().trim(),
      student_email: Joi.string().required().trim()
    }),
  };

  /** GEt user list */
  const getUserList = {
    query: Joi.object().keys({
      first_name: Joi.string().trim().allow(""),
      student_bday: Joi.string().trim().allow(""),
      student_email: Joi.number().integer().allow("")
    }),
  };



  module.exports={
    createUser,getUserList
}
