const Joi = require("joi");

/** create user */
const getUser =  {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    student_bday: Joi.string().required().trim(),
    student_email: Joi.string().required().trim()
  }),
};

/** GEt user list */
// const creatUser = {
//   query: Joi.object().keys({
//     first_name: Joi.string().trim().allow(""),
//     student_bday: Joi.string().trim().allow(""),
//     student_email: Joi.number().integer().allow("")
//   }),
// };

module.exports = getUser;
