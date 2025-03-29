import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookmarkPlus, Clock, DollarSign, Filter, Search, ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RecipesPage() {
  // Mock data for recipes
  const recipes = [
    {
      id: 1,
      title: "Vegetarian Pasta Primavera",
      image: "/placeholder.svg?height=300&width=400",
      cuisine: "Italian",
      prepTime: 25,
      cost: 12,
      likes: 342,
      dietary: ["vegetarian"],
    },
    {
      id: 2,
      title: "Thai Green Curry",
      image: "/placeholder.svg?height=300&width=400",
      cuisine: "Thai",
      prepTime: 35,
      cost: 15,
      likes: 289,
      dietary: ["gluten-free"],
    },
    {
      id: 3,
      title: "Beef Stir Fry",
      image: "/placeholder.svg?height=300&width=400",
      cuisine: "Asian",
      prepTime: 20,
      cost: 17,
      likes: 412,
      dietary: [],
    },
    {
      id: 4,
      title: "Greek Salad",
      image: "/placeholder.svg?height=300&width=400",
      cuisine: "Mediterranean",
      prepTime: 15,
      cost: 10,
      likes: 156,
      dietary: ["vegetarian", "gluten-free"],
    },
    {
      id: 5,
      title: "Chicken Tacos",
      image: "/placeholder.svg?height=300&width=400",
      cuisine: "Mexican",
      prepTime: 30,
      cost: 14,
      likes: 276,
      dietary: [],
    },
    {
      id: 6,
      title: "Mushroom Risotto",
      image: "/placeholder.svg?height=300&width=400",
      cuisine: "Italian",
      prepTime: 40,
      cost: 13,
      likes: 198,
      dietary: ["vegetarian", "gluten-free"],
    },
    {
      id: 7,
      title: "Beef Lasagna",
      image: "/placeholder.svg?height=300&width=400",
      cuisine: "Italian",
      prepTime: 75,
      cost: 22,
      likes: 420,
      dietary: [],
    },
    {
      id: 8,
      title: "Pad Thai",
      image: "/placeholder.svg?height=300&width=400",
      cuisine: "Thai",
      prepTime: 25,
      cost: 16,
      likes: 310,
      dietary: ["gluten-free"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recipe Collection</h1>

      {/* Search and Filter bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search recipes..." className="pl-10" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Cuisine" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cuisines</SelectItem>
              <SelectItem value="italian">Italian</SelectItem>
              <SelectItem value="thai">Thai</SelectItem>
              <SelectItem value="mexican">Mexican</SelectItem>
              <SelectItem value="mediterranean">Mediterranean</SelectItem>
              <SelectItem value="asian">Asian</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Dietary" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="vegetarian">Vegetarian</SelectItem>
              <SelectItem value="vegan">Vegan</SelectItem>
              <SelectItem value="gluten-free">Gluten Free</SelectItem>
              <SelectItem value="dairy-free">Dairy Free</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="recent">Recently Added</SelectItem>
              <SelectItem value="quick">Quick to Make</SelectItem>
              <SelectItem value="budget">Budget Friendly</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Recipe Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Recipes</TabsTrigger>
          <TabsTrigger value="saved">Saved Recipes</TabsTrigger>
          <TabsTrigger value="my">My Recipes</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">You need to log in to view your saved recipes.</p>
            <Button asChild>
              <Link href="/login">Log In</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="my">
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">You need to log in to view your recipes.</p>
            <Button asChild>
              <Link href="/login">Log In</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="trending">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes
              .sort((a, b) => b.likes - a.likes)
              .slice(0, 4)
              .map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="mx-1">
          1
        </Button>
        <Button variant="outline" className="mx-1">
          2
        </Button>
        <Button variant="outline" className="mx-1">
          3
        </Button>
        <Button variant="ghost" className="mx-1">
          ...
        </Button>
        <Button variant="outline" className="mx-1">
          10
        </Button>
      </div>
    </div>
  )
}

// Recipe Card component
function RecipeCard({ recipe }: { recipe: any }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
        <Badge className="absolute top-2 left-2 z-10">{recipe.cuisine}</Badge>
        <Button size="icon" variant="secondary" className="absolute top-2 right-2 z-10 rounded-full">
          <BookmarkPlus className="h-4 w-4" />
          <span className="sr-only">Save recipe</span>
        </Button>
      </div>

      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg leading-tight hover:text-primary">
          <Link href={`/recipes/${recipe.id}`}>{recipe.title}</Link>
        </h3>
      </CardHeader>

      <CardContent className="pb-2 flex-grow">
        <div className="flex flex-wrap gap-1 mb-3">
          {recipe.dietary.map((diet: string) => (
            <Badge key={diet} variant="secondary" className="text-xs">
              {diet}
            </Badge>
          ))}
        </div>
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
  )
}

