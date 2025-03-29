"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { BookmarkPlus, Clock, DollarSign, ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Recipe = {
  id: number
  title: string
  image: string
  cuisine: string
  prepTime: number
  cost: number
  likes: number
}

const FEATURED_RECIPES: Recipe[] = [
  {
    id: 1,
    title: "Vegetarian Pasta Primavera",
    image: "/placeholder.svg?height=300&width=400",
    cuisine: "Italian",
    prepTime: 25,
    cost: 12,
    likes: 342,
  },
  {
    id: 2,
    title: "Thai Green Curry",
    image: "/placeholder.svg?height=300&width=400",
    cuisine: "Thai",
    prepTime: 35,
    cost: 15,
    likes: 289,
  },
  {
    id: 3,
    title: "Beef Stir Fry",
    image: "/placeholder.svg?height=300&width=400",
    cuisine: "Asian",
    prepTime: 20,
    cost: 17,
    likes: 412,
  },
  {
    id: 4,
    title: "Greek Salad",
    image: "/placeholder.svg?height=300&width=400",
    cuisine: "Mediterranean",
    prepTime: 15,
    cost: 10,
    likes: 156,
  },
  {
    id: 5,
    title: "Chicken Tacos",
    image: "/placeholder.svg?height=300&width=400",
    cuisine: "Mexican",
    prepTime: 30,
    cost: 14,
    likes: 276,
  },
]

export default function FeaturedRecipes() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-2 md:-ml-4">
        {FEATURED_RECIPES.map((recipe) => (
          <CarouselItem key={recipe.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="overflow-hidden h-full flex flex-col">
              <AspectRatio ratio={16 / 9}>
                <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
                <Badge className="absolute top-2 left-2 z-10">{recipe.cuisine}</Badge>
                <Button size="icon" variant="secondary" className="absolute top-2 right-2 z-10 rounded-full">
                  <BookmarkPlus className="h-4 w-4" />
                  <span className="sr-only">Save recipe</span>
                </Button>
              </AspectRatio>

              <CardHeader className="pb-2">
                <h3 className="font-bold text-lg leading-tight hover:text-primary">
                  <Link href={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                </h3>
              </CardHeader>

              <CardContent className="pb-2 flex-grow">
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{recipe.prepTime} min</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span>${recipe.cost.toFixed(2)}/meal</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>{recipe.likes}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/recipes/${recipe.id}`}>View Recipe</Link>
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:flex">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}

