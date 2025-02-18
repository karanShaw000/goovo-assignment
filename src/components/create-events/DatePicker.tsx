import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { ControllerRenderProps, FieldValues, FormProps } from 'react-hook-form'
import { FormControl } from '../ui/form'
import { Button } from '../ui/button'
import { Calendar } from '../ui/calendar'

interface DatePickerProps { 
  dateFormat?: string, 
  field: ControllerRenderProps<FieldValues>, 
  icon: React.ReactNode, 
  placeholder: string,
}

export default function DatePicker({ field, icon, placeholder, dateFormat="PPP" }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            className={cn(
              " flex items-center justify-between bg-secondary text-primary w-full py-4 pl-8 pr-10 text-lg md:text-xl hover:bg-secondary",
              !field.value && "text-muted-foreground"
            )}>

            <div className='text-left'>
              {field.value ? (
                format(field.value, dateFormat)
              ) : (
                <p>{placeholder}</p>
              )}
            </div>
            {icon}
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={field.onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

