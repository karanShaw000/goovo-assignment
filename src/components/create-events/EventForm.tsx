"use client"
import { Controller, FieldValues, useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ZapIcon, VideoIcon, CallIcon, PlusIcon, ImageIcon, TimerIcon, ExportIcon, ProfileIcon, UpIcon } from "../icons"
import { ACCEPTED_IMAGE_TYPES, ACCEPTED_VIDEO_TYPES, eventCategory, termsAndConditions } from "@/constants"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select"
import { Button } from "../ui/button"
import { Form, FormControl, FormMessage, FormItem, FormField, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { FileTypeContraintsBadges } from "./FileTypeContraintsBadges"
import { Checkbox } from "../ui/checkbox"
import { Textarea } from "../ui/textarea"
import DatePicker from "./DatePicker"
import { Switch } from "../ui/switch"
import { format } from "date-fns"
import { createEventFormSchema } from "@/lib/zod"
import { useToast } from "@/hooks/use-toast"


export default function EventForm() {
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(createEventFormSchema),
    defaultValues: {
      eventName: "",
      eventCategory: "",
      uploadHorizontal: "",
      displayTitle: false,
      uploadVertical: "",
      uploadVideo: "",
      eventDescription: '',
      startDate: "",
      endDate: "",
      registrationDeadline: "",
      eventType: "",
      cityName: '',
      venueName: "",
      totalTicket: "",
      pricePerTicket: "",
      organizerName: "",
      phoneNumber: "",
      eventPrivate: false,
      tierPricingOption: false,
      tieredPriceList: []
    }
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "tieredPriceList"
  })

  const onSubmit = (data: FieldValues) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4 text-primary">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    form.reset()
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} encType="multipart/form-data" className="md:grid grid-cols-2 
      font-medium space-y-6 md:space-y-0 md:gap-10 pb-10">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl col-span-2">Event Details</p>

        {/*Form Field for eventName*/}
        <FormField
          control={form.control}
          name="eventName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Event Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Mohan Yadav R"
                  icon={<ProfileIcon size={30} />}
                />
              </FormControl>
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />


        {/*Form Field for eventCategory*/}
        <FormField
          control={form.control}
          name="eventCategory"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Event Category</FormLabel>
              <Select onValueChange={field.onChange} value={field.value} name={field.name}>
                <SelectTrigger className="relative pl-12 pr-10 py-4 text-muted-foreground" >
                  <SelectValue placeholder="Select Category" />
                  <ZapIcon size={35} className="absolute pl-2 left-0.5" />
                </SelectTrigger>
                <SelectContent >
                  {
                    eventCategory.map((category) => <SelectItem key={category.value} value={category.value}>{category.label}</SelectItem>)
                  }
                </SelectContent>
              </Select>
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />

        {/*Form Field for uploadHorizontal*/}
        <FormField
          control={form.control}
          name="uploadHorizontal"
          rules={{ required: true }}
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem>
              <div className="relative">
                <Input
                  type="file"
                  accept={ACCEPTED_IMAGE_TYPES.join(', ')}
                  multiple={false}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => {
                    onChange(e?.target?.files ?? "")
                  }}
                  {...field}
                />
                <div className="border border-primary h-[220px] grid grid-rows-3 w-full px-4 text-lg text-muted-foreground rounded-md shadow-lg cursor-pointer bg-secondary">

                  <div className="h-full row-span-2 flex justify-self-center items-center mt-6">
                    <div className="flex flex-col items-center justify-center  gap-4">
                      <ImageIcon size={50} />
                      <p className="mb-2 font-medium">
                        Click to upload Horizontal
                      </p>
                    </div>
                  </div>

                  <FileTypeContraintsBadges typeArray={ACCEPTED_IMAGE_TYPES} size={2} sizeType="MB" />
                </div>

              </div>
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />

        <div className="font-mochiy border border-primary flex h-[220px] items-start justify-center 
        w-full p-4 text-lg text-muted-foreground rounded-md shadow-lg bg-transparent">
          <div className="text-white space-y-2 sm:space-y-4">
            <p className="text-sm text-right">TrekkarIndia</p>
            <p className="text-2xl text-center text-[#EFFF08]">Mahabalipuram</p>
            <p className="text-sm  text-center">Trek</p>
          </div>
        </div>

        {/*Form Field for displayTitle*/}
        <FormField
          control={form.control}
          name="displayTitle"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  className="rounded-[4px]"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-lg">
                Display title on the card
              </FormLabel>
            </FormItem>
          )}
        />

        {/*Form Field for uploadVertical*/}
        <FormField
          control={form.control}
          name="uploadVertical"
          rules={{ required: true }}
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem className="col-span-2">
              <div className="relative">
                <Input
                  type="file"
                  accept={ACCEPTED_IMAGE_TYPES.join(', ')}
                  multiple={false}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => {
                    onChange(e?.target?.files ?? "")
                  }}
                  {...field}
                />
                <div className="border border-primary h-[220px] grid grid-rows-3 w-full px-4 text-lg text-muted-foreground rounded-md shadow-lg cursor-pointer bg-secondary">

                  <div className="h-full row-span-2 flex justify-self-center items-center mt-6">
                    <div className="flex flex-col items-center justify-center  gap-4">
                      <ImageIcon size={50} />
                      <p className="mb-2 font-medium">
                        Click to upload Vertical
                      </p>
                    </div>
                  </div>

                  <FileTypeContraintsBadges typeArray={ACCEPTED_IMAGE_TYPES} size={2} sizeType="MB" />
                </div>

              </div>
              <FormMessage className="md:text-lg" />
              <p className="text-lg text-center text-muted-foreground">We require event images in both vertical (portrait) and horizontal (landscape) formats<span className="text-destructive">*</span></p>
            </FormItem>
          )}
        />

        {/*Form Field for uploadVideo*/}
        <FormField
          control={form.control}
          name="uploadVideo"
          rules={{ required: true }}
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem className="col-span-2">
              <div className="relative">
                <Input
                  type="file"
                  accept={ACCEPTED_VIDEO_TYPES.join(', ')}
                  multiple={false}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => {
                    console.log(e.currentTarget.files)
                    onChange(e?.target?.files ?? "")
                  }}
                  {...field}
                />
                <div className="h-[299px] grid grid-rows-3 w-full px-4 text-lg text-muted-foreground rounded-md shadow-lg cursor-pointer bg-secondary">

                  <div className="h-full row-span-2 flex justify-self-center items-center mt-6">
                    <div className="flex flex-col items-center justify-center  gap-4">
                      <VideoIcon size={50} />
                      <p className="mb-2 font-medium">
                        Click to upload Video
                      </p>
                    </div>
                  </div>

                  <FileTypeContraintsBadges typeArray={ACCEPTED_VIDEO_TYPES} size={30} sizeType="SEC" />
                </div>

              </div>
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />

        <div className="col-span-2 flex justify-end cursor-pointer items-center gap-2 text-lg text-center text-primary">
          <p>
            Card Guidelines
          </p>
          <ExportIcon />
        </div>

        {/*Form Field for EventDescription*/}
        <FormField
          control={form.control}
          name="eventDescription"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel className="text-lg">Event Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter Event Description"
                  className="resize-none h-[120px] p-4 text-lg md:text-xl bg-secondary text-primary placeholder:text-muted-foreground"
                  {...field}
                />
              </FormControl>
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />

        {/*Form Field for startDate*/}
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-lg">Start Date</FormLabel>
              <DatePicker
                field={field}
                icon={<UpIcon size={30} />}
                dateFormat="EEEE, do LLLL"
                placeholder="Wednesday, 1st January" />

              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />

        {/*Form Field for endDate*/}
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-lg">End Date</FormLabel>
              <DatePicker
                field={field}
                icon={<UpIcon size={30} />}
                dateFormat="EEEE, do LLLL"
                placeholder="Wednesday, 1st January" />
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />

        {/*Form Field for registrationDeadline*/}
        <FormField
          control={form.control}
          name="registrationDeadline"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-lg">Registration Deadline</FormLabel>
              <DatePicker
                field={field}
                icon={<TimerIcon size={30} />}
                dateFormat="dd/MM/yyy"
                placeholder="DD/MM/YYYY" />
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />

        {/*Form Field for eventType*/}
        <FormField
          control={form.control}
          name="eventType"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Event Type</FormLabel>
              <Select onValueChange={field.onChange} value={field.value} name={field.name}>
                <SelectTrigger className="relative pl-14 pr-10 text-muted-foreground" >
                  <SelectValue placeholder="Select Type" />
                  <ZapIcon size={35} className="absolute pl-2 left-0.5" />
                </SelectTrigger>
                <SelectContent >
                  {
                    eventCategory.map((category) => <SelectItem key={category.value} value={category.value}>{category.label}</SelectItem>)
                  }
                </SelectContent>
              </Select>
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />

        {/*Form Field for venueName*/}
        <FormField
          control={form.control}
          name="venueName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Venue Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter Venue"
                />
              </FormControl>
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />

        {/*Form Field for cityName*/}
        <FormField
          control={form.control}
          name="cityName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">City Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="e.g Bangalore"
                />
              </FormControl>
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />

        {/*Form Field for pricePerTicket*/}
        <FormField
          control={form.control}
          name="pricePerTicket"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Price per Ticket</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="Enter Amount"
                />
              </FormControl>
              <FormMessage className="md:text-lg" />
              <p className="text-lg text-muted-foreground">This is the standard price for your tickets<span className="text-destructive">*</span></p>
            </FormItem>
          )}
        />

        {/*Form Field for totalTicket*/}
        <FormField
          control={form.control}
          name="totalTicket"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Total Ticket</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="Enter Tickets"
                />
              </FormControl>
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />

        {/*Form Field for tierPricingOption*/}
        <FormField
          control={form.control}
          name="tierPricingOption"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  className="rounded-[4px]"
                  checked={field.value}
                  onCheckedChange={(e) => {
                    if (e) {
                      append({
                        tierName: "",
                        availabilityDeadline: "",
                        slots: "",
                        tierPricePerTicket: ""
                      })
                    } else {
                      remove()
                    }
                    field.onChange(e)
                  }}
                />
              </FormControl>
              <FormLabel className="cursor-pointer text-lg">
                Add Tiered Pricing Options (Optional)
              </FormLabel>
            </FormItem>
          )}
        />

        {
          form.watch("tierPricingOption") &&
          (
            <div className={`space-y-6 col-span-2 ${form.watch("tierPricingOption") ? "animate-in fade-in-20" : "animate-out fade-out-30"} transition-all`}>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Tiered Pricing Options</p>
              {
                fields.map((field, index) => {
                  return (
                    <div key={field.id} className="md:grid grid-cols-2 
      font-medium space-y-6 md:space-y-0 md:gap-10">

                      {/*Form Array Field for tierName*/}
                      <FormField
                        control={form.control}
                        name={`tieredPriceList.${index}.tierName`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="e.g Early Bird"
                              />
                            </FormControl>
                            <FormMessage className="md:text-lg" />
                          </FormItem>
                        )}
                      />

                      {/*Form Array Field for tierPricePerTicket*/}
                      <FormField
                        control={form.control}
                        name={`tieredPriceList.${index}.tierPricePerTicket`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">Price Per Ticket</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                placeholder="Enter Amount"
                              />
                            </FormControl>
                            <FormMessage className="md:text-lg" />
                          </FormItem>
                        )}
                      />

                      {/*Form Array Field for availabilityDeadline*/}
                      <FormField
                        control={form.control}
                        name={`tieredPriceList.${index}.availabilityDeadline`}
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-lg">Availability Deadline</FormLabel>
                            <DatePicker
                              field={field}
                              icon={<TimerIcon size={30} />}
                              dateFormat="dd/MM/yyy"
                              placeholder="DD/MM/YYYY" />
                            <FormMessage className="md:text-lg" />
                          </FormItem>
                        )}
                      />

                      {/*Form Array Field for slots*/}
                      <FormField
                        control={form.control}
                        name={`tieredPriceList.${index}.slots`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">Slots</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                placeholder="Limited Slots"
                              />
                            </FormControl>
                            <FormMessage className="md:text-lg" />
                          </FormItem>
                        )}
                      />

                      <div className="col-span-2 flex items-center justify-end">
                        <Button type="button"
                          onClick={() => {
                            if (form.getValues("tieredPriceList").length === 1) {
                              form.setValue("tierPricingOption", false)
                            }
                            remove(index)
                          }}
                          className="py-4 px-8 text-primary bg-destructive text-lg border border-primary hover:bg-destructive/80">
                          Delete Tier
                        </Button>
                      </div>
                    </div>
                  )
                })
              }
              <div className="col-span-2 flex items-center justify-start">
                <Button type="button"
                  onClick={() => {
                    append({
                      tierPricePerTicket: "",
                      slots: "",
                      availabilityDeadline: "",
                      tierName: ""
                    })
                  }}
                  className="flex items-center justify-center gap-2 py-4 px-8 text-primary bg-transparent text-lg border border-primary hover:bg-primary/10">
                  <PlusIcon />
                  Add More
                </Button>
              </div>

            </div>
          )
        }

        <p className="col-span-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">Point of Contact</p>

        {/*Form Field for organizerName*/}
        <FormField
          control={form.control}
          name="organizerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Organizer Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Name"
                  icon={<ProfileIcon size={30} />}
                />
              </FormControl>
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />

        {/*Form Field for phoneNumber*/}
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Phone Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="(123) 456 - 7890"
                  icon={<CallIcon size={28} />}
                />
              </FormControl>
              <FormMessage className="md:text-lg" />
            </FormItem>
          )}
        />


        {/*Terms and Condition*/}
        <div className="col-span-2 space-y-4">
          <FormLabel className="text-lg">Terms and Conditions</FormLabel>
          <div className="font-normal w-full p-10 space-y-2 text-lg text-muted-foreground rounded-md shadow-lg bg-secondary">
            <p>E.g</p>
            <ul className="px-8 list-disc">
              <li>{`Tickets are non-refundable after ${form.getValues('startDate') ? format(form.getValues("startDate"), "dd/MM/yyyy") : "specific date"}.`}</li>
              {
                termsAndConditions.map((t, idx) => <li key={idx}>{t}</li>)
              }
            </ul>
          </div>
        </div>

        {/*Form Field for eventPrivate*/}
        <FormField
          control={form.control}
          name="eventPrivate"
          render={({ field }) => (
            <FormItem className="col-span-2 flex items-center justify-between w-full py-4 px-8 text-lg text-primary rounded-md shadow-lg bg-secondary">
              <FormLabel className="text-lg">Set Event to private</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="col-span-2 flex items-center justify-end ">
          <Button type="button" className="py-4 px-8 text-primary bg-secondary text-lg border border-primary hover:bg-secondary/50">Add Section</Button>
        </div>


        <div className=" col-span-2 flex items-center justify-end ">
          <Button type="submit" className="py-4 px-8 text-primary bg-transparent shadow-lg shadow-[#58E9D640] text-lg ">Preview</Button>
        </div>

      </form>
    </Form >
  )
}

