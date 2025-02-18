import { z } from "zod"
import { imageSchema } from "./imageSchema";
import { videoSchema } from "./videoSchema";

export const phoneRegex = new RegExp(/^\(\d{3}\) \d{3} - \d{4}$/);

export const createEventFormSchema = z.object({
  eventName: z.string().min(3, "Event name must contain 3 letters").max(16, {
    message: "Event name limit to 16 letters",
  }),
  eventCategory: z.string().nonempty("Event Category Required"),
  uploadHorizontal: imageSchema,
  displayTitle: z.boolean().optional(),
  uploadVertical: imageSchema,
  uploadVideo: videoSchema,
  eventDescription: z.string(),
  startDate: z.date({ message: "Date is Required" }).transform((date) => date.toString()),
  endDate: z.date({ message: "Date is Required" }).transform((date) => date.toString()),
  registrationDeadline: z.date({ message: "Date is Required" }).transform((date) => date.toString()),
  eventType: z.string().nonempty("Event Type Required"),
  venueName: z.string().nonempty("Venue Name Required"),
  cityName: z.string().nonempty("City Name Required"),
  pricePerTicket: z.coerce.number({ message: "Price Per Ticket required" }).min(0, "Mininum price should be zero"),
  totalTicket: z.coerce.number({ message: "Total Ticket required" }).min(1, "Mininum number of ticket should be 1"),
  tierPricingOption: z.boolean().optional(),
  organizerName: z.string().nonempty("Organizer Name required"),
  phoneNumber: z.string().nonempty("Phone Number Required").regex(phoneRegex, 'Invalid Number!'),
  eventPrivate: z.boolean().optional(),

  tieredPriceList: z.object({
    tierName: z.string().nonempty("Tier Name Required"),
    availabilityDeadline: z.date({ message: "Date is Required" }).transform((date) => date.toString()),
    tierPricePerTicket: z.coerce.number({ message: "Tier Price Per Ticket required" }).min(0, "Mininum price should be zero"),
    slots: z.coerce.number({ message: "Slots required" }).min(1, "Mininum number of slot should be 1"),
  }).array()
})

export type CreateEventFormType = z.infer<typeof createEventFormSchema>

