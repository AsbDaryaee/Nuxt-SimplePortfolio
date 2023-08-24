import Message from "~/types/message.type";

import { defineMongooseModel } from "#nuxt/mongoose";

export const Message = defineMongooseModel("Message", {
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
});

export default defineEventHandler(async (event) => {
  const { data }: { data: Message } = await readBody(event);

  try {
    const message = await Message.create(data);

    return message;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});
