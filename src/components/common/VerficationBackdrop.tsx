"use client"
import { useState } from "react";
import { Button } from "../ui/button";


export default function VerficationBackdrop() {
  const [email, setEmail] = useState(false)
  const [mob, setMob] = useState(false)
  return (
    <section className={`${(email && mob) ? "hidden" : "block"} fixed z-10 min-h-screen w-full overscroll-none overflow-y-hidden  backdrop-blur-lg`}>
      <div className="max-w-screen-md mx-auto px-2 mt-32 md:text-lg space-y-6">
        {!email && <div className="px-8 py-4 bg-primary text-secondary rounded-md flex items-center justify-between">
          <p>{`Verfiy your Email`}</p>
          <Button
            onClick={() => {
              setEmail(true)
            }}
            className="px-6 py-3 bg-gradient-to-t from-gradient_color_green  to-gradient_color_teal text-primary">Verify</Button>
        </div>}

        {!mob && <div className="px-8 py-4 bg-primary text-secondary rounded-md flex items-center justify-between">
          <p>{`Verfiy your Mobile`}</p>
          <Button
            onClick={() => {
              setMob(true)
            }}
            className="px-6 py-3 bg-gradient-to-t from-gradient_color_green  to-gradient_color_teal text-primary">Verify</Button>
        </div>}
      </div>

    </section>
  )
}

