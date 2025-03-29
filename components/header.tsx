import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Menu, Search, User } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">RecipeHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" asChild>
            <Link href="/recipes">Recipes</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/compare">Price Compare</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/meal-plan">Meal Planner</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/pantry">Pantry</Link>
          </Button>
        </nav>

        {/* Search, Theme Toggle, and User Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search recipes..." className="w-full pl-9" />
          </div>
          <ModeToggle />
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="default" className="hidden md:flex" asChild>
            <Link href="/login">Log In</Link>
          </Button>

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/recipes" className="w-full">
                  Recipes
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/compare" className="w-full">
                  Price Compare
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/meal-plan" className="w-full">
                  Meal Planner
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pantry" className="w-full">
                  Pantry
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/login" className="w-full">
                  Log In
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

