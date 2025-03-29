import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookmarkPlus,
  ChevronLeft,
  Clock,
  DollarSign,
  Heart,
  MessageCircle,
  Share2,
  ShoppingCart,
  ThumbsUp,
  Utensils,
} from "lucide-react"

// This would be replaced with data from your database
const recipe = {
  id: 1,
  title: "Vegetarian Pasta Primavera",
  image: "/placeholder.svg?height=500&width=800",
  cuisine: "Italian",
  prepTime: 25,
  cookTime: 15,
  servings: 4,
  cost: 12,
  costPerPerson: 3,
  likes: 342,
  comments: 28,
  author: "Jamie Oliver",
  dietary: ["vegetarian"],
  description:
    "A light and flavorful pasta dish packed with fresh spring vegetables. Perfect for a quick weeknight dinner that's both nutritious and satisfying.",
  ingredients: [
    "300g pasta (fettuccine or linguine)",
    "1 large red bell pepper, sliced",
    "1 medium zucchini, sliced",
    "1 cup cherry tomatoes, halved",
    "1 small red onion, thinly sliced",
    "3 cloves garlic, minced",
    "100g baby spinach",
    "2 tbsp olive oil",
    "1/4 cup grated parmesan cheese",
    "2 tbsp fresh basil, chopped",
    "Salt and pepper to taste",
    "1/2 lemon, juiced",
    "Red chili flakes (optional)",
  ],
  instructions: [
    "Bring a large pot of salted water to boil. Cook pasta according to package instructions until al dente.",
    "While pasta is cooking, heat olive oil in a large skillet over medium heat. Add onion and cook until softened, about 3 minutes.",
    "Add garlic and cook until fragrant, about 30 seconds.",
    "Add bell pepper and zucchini, cook for 4-5 minutes until vegetables begin to soften.",
    "Add cherry tomatoes and cook for another 2 minutes.",
    "Drain pasta, reserving 1/4 cup of pasta water.",
    "Add pasta to the skillet with vegetables, along with the reserved pasta water and spinach.",
    "Toss until spinach is wilted and everything is well combined.",
    "Remove from heat. Add lemon juice, basil, and parmesan cheese. Toss to combine.",
    "Season with salt, pepper, and optional red chili flakes. Serve immediately.",
  ],
  nutritionInfo: {
    calories: 380,
    protein: 12,
    carbs: 58,
    fat: 11,
    fiber: 6,
  },
  priceComparison: {
    woolworths: 15.6,
    coles: 16.2,
    aldi: 14.4,
    iga: 17.5,
  },
}

export const metadata: Metadata = {
  title: `${recipe.title} | Recipe Hub`,
  description: recipe.description,
}

export default function RecipePage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/recipes" className="flex items-center text-muted-foreground hover:text-primary mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Recipes
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {/* Recipe Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge>{recipe.cuisine}</Badge>
                {recipe.dietary.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl font-bold mb-3">{recipe.title}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <span>By {recipe.author}</span>
                <div className="w-1 h-1 rounded-full bg-muted-foreground mx-2"></div>
                <div className="flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span>{recipe.likes}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-muted-foreground mx-2"></div>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  <span>{recipe.comments}</span>
                </div>
              </div>
            </div>

            {/* Recipe Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
            </div>

            {/* Recipe Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="flex items-center p-4">
                  <Clock className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Prep Time</p>
                    <p className="font-medium">{recipe.prepTime} min</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-4">
                  <Utensils className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Cook Time</p>
                    <p className="font-medium">{recipe.cookTime} min</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-4">
                  <DollarSign className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Cost Per Person</p>
                    <p className="font-medium">${recipe.costPerPerson.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-4">
                  <Heart className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Servings</p>
                    <p className="font-medium">{recipe.servings}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <div>
              <p className="text-muted-foreground">{recipe.description}</p>
            </div>

            {/* Recipe Content */}
            <Tabs defaultValue="ingredients">
              <TabsList className="mb-4">
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="instructions">Instructions</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              </TabsList>

              <TabsContent value="ingredients">
                <Card>
                  <CardContent className="p-4">
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-2 w-2 bg-primary rounded-full mt-2 mr-3"></div>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex justify-between mt-4">
                  <Button variant="outline">Adjust Servings</Button>
                  <Button>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Shopping List
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="instructions">
                <Card>
                  <CardContent className="p-4">
                    <ol className="space-y-4 list-decimal list-outside ml-5">
                      {recipe.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="nutrition">
                <Card>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-xs text-muted-foreground">Calories</p>
                        <p className="font-bold">{recipe.nutritionInfo.calories}</p>
                        <p className="text-xs text-muted-foreground">kcal</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-xs text-muted-foreground">Protein</p>
                        <p className="font-bold">{recipe.nutritionInfo.protein}g</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-xs text-muted-foreground">Carbs</p>
                        <p className="font-bold">{recipe.nutritionInfo.carbs}g</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-xs text-muted-foreground">Fat</p>
                        <p className="font-bold">{recipe.nutritionInfo.fat}g</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-xs text-muted-foreground">Fiber</p>
                        <p className="font-bold">{recipe.nutritionInfo.fiber}g</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower
                      depending on your calorie needs.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Button className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add Ingredients to Cart
            </Button>
            <Button variant="outline" className="w-full">
              <BookmarkPlus className="mr-2 h-4 w-4" />
              Save Recipe
            </Button>
            <Button variant="outline" className="w-full">
              <Share2 className="mr-2 h-4 w-4" />
              Share Recipe
            </Button>
          </div>

          {/* Price Comparison */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-medium">Price Comparison</h3>
              <p className="text-sm text-muted-foreground mb-4">Cost for all ingredients (serves {recipe.servings})</p>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Aldi</span>
                  </div>
                  <span className="font-medium">${recipe.priceComparison.aldi.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span>Woolworths</span>
                  </div>
                  <span className="font-medium">${recipe.priceComparison.woolworths.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span>Coles</span>
                  </div>
                  <span className="font-medium">${recipe.priceComparison.coles.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span>IGA</span>
                  </div>
                  <span className="font-medium">${recipe.priceComparison.iga.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center font-medium">
                  <span>Best Deal</span>
                  <span className="text-green-500">${recipe.priceComparison.aldi.toFixed(2)} at Aldi</span>
                </div>
              </div>

              <Button className="w-full mt-2" variant="outline" asChild>
                <Link href="/compare">View Full Comparison</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Similar Recipes */}
          <div>
            <h3 className="font-medium mb-4">Similar Recipes</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 relative rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Similar recipe"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Mushroom Risotto</h4>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>40 min</span>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground mx-2"></div>
                    <span>Italian</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-16 h-16 relative rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Similar recipe"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Fettuccine Alfredo</h4>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>30 min</span>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground mx-2"></div>
                    <span>Italian</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-16 h-16 relative rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Similar recipe"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Roasted Vegetable Orzo</h4>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>45 min</span>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground mx-2"></div>
                    <span>Mediterranean</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

