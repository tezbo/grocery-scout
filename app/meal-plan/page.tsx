import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { BookmarkPlus, CalendarIcon, Clock, DollarSign, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MealPlanPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Meal Planner</h1>

        <div className="flex gap-2">
          <Button variant="outline">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Export to Calendar
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Shopping List
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Meal Plan Calendar */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Meal Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" className="mb-6" />

              <Tabs defaultValue="mon">
                <TabsList className="grid grid-cols-7 w-full">
                  <TabsTrigger value="mon">Mon</TabsTrigger>
                  <TabsTrigger value="tue">Tue</TabsTrigger>
                  <TabsTrigger value="wed">Wed</TabsTrigger>
                  <TabsTrigger value="thu">Thu</TabsTrigger>
                  <TabsTrigger value="fri">Fri</TabsTrigger>
                  <TabsTrigger value="sat">Sat</TabsTrigger>
                  <TabsTrigger value="sun">Sun</TabsTrigger>
                </TabsList>

                {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => (
                  <TabsContent key={day} value={day} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["Breakfast", "Lunch", "Dinner"].map((mealType) => (
                        <MealCard key={`${day}-${mealType}`} mealType={mealType} day={day} />
                      ))}
                    </div>

                    <div className="bg-muted p-4 rounded-lg mt-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-medium">Daily Summary</h3>
                        <Badge variant="secondary">3 Meals</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Estimated Cost</span>
                        <span className="font-medium">$23.45</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Total Cook Time</span>
                        <span className="font-medium">65 mins</span>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Weekly Summary Card */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Meals</span>
                  <span className="font-medium">21</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Estimated Cost</span>
                  <span className="font-medium">$152.80</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cost per Meal</span>
                  <span className="font-medium">$7.28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Cook Time</span>
                  <span className="font-medium">8h 15m</span>
                </div>

                <div className="pt-4">
                  <Button className="w-full">Generate Shopping List</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recipe Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle>Recipe Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 relative rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Recipe suggestion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-medium">Vegetarian Pasta Primavera</h4>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>25 min</span>
                    <DollarSign className="h-3 w-3 ml-2 mr-1" />
                    <span>$12.00</span>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="flex-shrink-0">
                  <BookmarkPlus className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 relative rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Recipe suggestion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-medium">Greek Salad</h4>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>15 min</span>
                    <DollarSign className="h-3 w-3 ml-2 mr-1" />
                    <span>$10.00</span>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="flex-shrink-0">
                  <BookmarkPlus className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 relative rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Recipe suggestion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-medium">Chicken Tacos</h4>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>30 min</span>
                    <DollarSign className="h-3 w-3 ml-2 mr-1" />
                    <span>$14.00</span>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="flex-shrink-0">
                  <BookmarkPlus className="h-4 w-4" />
                </Button>
              </div>

              <Button variant="link" size="sm" className="w-full">
                Browse More Recipes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Meal Card Component
function MealCard({ mealType, day }: { mealType: string; day: string }) {
  // This is a placeholder - in a real app, you'd fetch the actual meal data
  const meal =
    day === "mon" && mealType === "Dinner"
      ? {
          id: 1,
          title: "Vegetarian Pasta Primavera",
          image: "/placeholder.svg?height=150&width=150",
          prepTime: 25,
          cost: 12,
        }
      : null

  return (
    <Card className="overflow-hidden">
      <CardHeader className="py-3">
        <CardTitle className="text-sm font-medium">{mealType}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {meal ? (
          <div>
            <div className="relative h-32">
              <Image src={meal.image || "/placeholder.svg"} alt={meal.title} fill className="object-cover" />
            </div>
            <div className="p-3">
              <h4 className="font-medium text-sm mb-2">{meal.title}</h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{meal.prepTime} min</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-3 w-3 mr-1" />
                  <span>${meal.cost.toFixed(2)}</span>
                </div>
              </div>
              <Button variant="link" size="sm" className="px-0 h-auto">
                Change
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
            <p className="text-sm text-muted-foreground mb-3">No meal planned</p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/recipes">Add Recipe</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

