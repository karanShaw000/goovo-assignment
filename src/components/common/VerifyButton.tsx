"use client"
import {  useState } from "react"
import { Button } from "../ui/button"


export default function VerifyButton({ key }: { key: "email" | "mobile" }) {
  const [value, setValue] = useState(false)

  return (
    <>
      {!value && <div className="px-8 py-4 bg-primary text-secondary rounded-md flex items-center justify-between">
        <p>{`Verfiy your ${key}`}</p>
        <Button
          onClick={() => {
            setValue(true)
          }}
          className="px-6 py-3 bg-gradient-to-t from-gradient_color_green  to-gradient_color_teal text-primary">Verify</Button>
      </div>}
    </>
  )
}

