import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className, type, ...props }, ref) => {
    if ((type === "text" || !type) && icon) {
      return (
        <div className="relative">
          <input
            type={"text"}
            className={cn(
              `flex w-full rounded-md border border-input bg-secondary pl-8 pr-10 py-4 text-lg shadow-2xl transition-colors
                md:text-xl  
                file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground 
                placeholder:text-muted-foreground 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
                disabled:cursor-not-allowed disabled:opacity-50 `,
              className
            )}
            ref={ref}
            {...props}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">{icon}</div>
        </div>
      )
    }

    return (
      <input
        type={type}
        className={cn(
          `flex w-full rounded-md border border-input bg-secondary px-8 py-4 text-lg shadow-2xl transition-colors
          md:text-xl  
          file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground 
          placeholder:text-muted-foreground 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
          disabled:cursor-not-allowed disabled:opacity-50 `,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
