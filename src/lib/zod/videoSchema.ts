import { ACCEPTED_VIDEO_TYPES, MAX_VIDEO_DURATION_LENGTH } from "@/constants";
import {z} from "zod"
import getVideoDuration from "../getVideoDuration";

export const videoSchema = typeof window === "undefined" ? z.any() : z.instanceof(FileList, { message: "Video Required" }).transform((fileList) => fileList[0])
  .refine((file) => {
    return ACCEPTED_VIDEO_TYPES.includes(file.type);
  }, 'Not valid video file type')
  .refine(async (file) => {
    const duration = await getVideoDuration(file)
    console.log(duration)
    //@ts-ignore
    return duration < MAX_VIDEO_DURATION_LENGTH
  }, `Video duration must be less than ${MAX_VIDEO_DURATION_LENGTH}`)
