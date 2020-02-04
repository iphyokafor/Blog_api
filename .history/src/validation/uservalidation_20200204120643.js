import Joi from 'joi';

const registerValidation = (data) => {
    const schema = Joi.object({
        first_name: Joi.string()
            .min(2)
            .max(50)
            .trim()
            .lowercase()
            .required(),
        last_name: Joi.string()
            .trim()
            .min(2)
            .max(50)
            .lowercase()
            .required(),
        email: Joi.string()
            .email()
            .regex(/\S+@\S+\.\S+/)
            .min(3)
            .max(100)
            .trim()
            .required(),
        password: Joi.string()
            .alphanum()
            .min(8)
            .required()
    });
    return Joi.validate(data, schema);
};


const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .email()
            .regex(/\S+@\S+\.\S+/)
            .min(3)
            .max(100)
            .trim()
            .required(),
        password: Joi.string()
            .alphanum()
            .min(8)
            .required()
    });
    // return schema.validate({ data });
    // const { error, value } = schema.validate({ a: 'a string' });
    return Joi.validate(data, schema);
};

// module.exports.registerValidation = registerValidation;
// module.exports.loginValidation = loginValidation;
export default { registerValidation, loginValidation };