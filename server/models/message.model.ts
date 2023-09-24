import { defineMongooseModel } from "#nuxt/mongoose";

export const MessageSchema = defineMongooseModel(
  "MessageSchema",
  {
    email: {
      type: "string",
      required: true,
    },
    firstName: {
      type: "string",
      required: true,
    },
    lastName: {
      type: "string",
      required: false,
    },
    phone: {
      type: "number",
      required: false,
      minlength: 6,
    },
    message: {
      type: "string",
      required: true,
      maxlength: 500,
    },
  },
  {},
  (schema) => {}
);
