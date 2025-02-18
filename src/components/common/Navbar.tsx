import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {

  return (
    <div className="container flex h-14 mx-auto items-center md:justify-center">
      <div className="mr-4 hidden md:flex">
        <nav className="flex items-center justify-center space-x-12 font-medium ">
          <Link href="/" className="transition-colors hover:text-foreground text-foreground">
            Home
          </Link>
          <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground">
            Dashboard
          </Link>
          <Link href="/reports" className="transition-colors hover:text-foreground/80 text-foreground">
            Reports
          </Link>
          <Link href="/history" className="transition-colors hover:text-foreground/80 text-foreground">
            History
          </Link>

          <Link href="/create-events" className="text-gradient-from-green-to-teal 
        hover:bg-gradient-to-l after:hover:bg-gradient-to-l transition-all duration-1000 ease-in-out">
            Create Events
          </Link>
        </nav>
      </div>


      <div className="md:hidden flex items-center justify-between  w-full">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="h-6 w-6 cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground">
                Home
              </Link>
              <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground">
                Dashboard
              </Link>
              <Link href="/reports" className="transition-colors hover:text-foreground/80 text-foreground">
                Reports
              </Link>
              <Link href="/history" className="transition-colors hover:text-foreground/80 text-foreground">
                History
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/create-events" className="text-gradient-from-green-to-teal 
        hover:bg-gradient-to-l after:hover:bg-gradient-to-l transition-all duration-1000 ease-in-out">
          Create Events
        </Link>
      </div>
    </div>
  )
}

