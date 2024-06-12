import Joi from "joi";
import validateWrapper from "../../../utils/validate-wrapper";

const registerSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Email is wrong format",
    }),
  name: Joi.string()
    .required()
    .pattern(/^[a-zA-Z]+$/)
    .trim()
    .messages({
      "string.empty": "Name is required",
      "string.pattern.base": "Name must be alphabet",
    }),
  phone: Joi.string()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      "string.empty": "Phone is required",
      "string.pattern.base": "Phone should be 10 digits",
    }),

  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be at least 6 character and contain alphabet or number",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
    "string.empty": "Confirm password is required",
    "any.only": "Password and confirm password did not match",
  }),
});

const validateRegister = (input) => validateWrapper(registerSchema, input);

export default validateRegister;
