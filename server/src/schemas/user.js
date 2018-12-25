import Joi from "joi";

export default Joi.object().keys({
  email: Joi.string()
    .email()
    .required()
    .label("Email"),
  firstname: Joi.string()
    .max(254)
    .required()
    .label("firstName"),
  lastname: Joi.string()
    .max(254)
    .required()
    .label("lastName"),
  password: Joi.string()
    .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/)
    .label("Password")
    .options({
      language: {
        string: {
          regex: {
            base:
              "must have atleast one lowercase letter, one uppercase letter, one digit, and one special character"
          }
        }
      }
    })
});
