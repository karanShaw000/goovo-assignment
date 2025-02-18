import { ACCEPTED_IMAGE_TYPES, MAX_IMAGE_UPLOAD_SIZE } from "@/constants";
import { z } from "zod"

export const imageSchema = typeof window === "undefined" ? z.any() : z.instanceof(FileList, { message: "Image Required" }).transform((fileList) => fileList[0])
  .refine((file) => {
    return !file || file.size < MAX_IMAGE_UPLOAD_SIZE;
  }, `File size must be less than 2 MB`)
  .refine((file) => {
    return ACCEPTED_IMAGE_TYPES.includes(file.type);
  }, 'Not valid image file type')
