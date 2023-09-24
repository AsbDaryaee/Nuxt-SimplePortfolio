import Message from "~/types/message.type";
import { MessageSchema } from "../models/message.model";

export default defineEventHandler(async (event) => {
  const { data }: { data: Message } = await readBody(event);

  try {
    const message = await MessageSchema.create(data);

    return message;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});
