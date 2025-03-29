import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Calendar, CreditCard, Search, ShoppingCart, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import FeaturedRecipes from "@/components/featured-recipes"
import PriceComparison from "@/components/price-comparison"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center py-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Save money and time with <span className="text-primary">Recipe Hub</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Find and share recipes, compare grocery prices across stores, and plan your meals - all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/recipes">
                Explore Recipes <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/compare">Compare Prices</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="Recipe Hub" fill className="object-cover" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Everything you need in one platform</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-background">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Recipe Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Discover, save, and organize recipes from around the world.</p>
            </CardContent>
          </Card>
          <Card className="bg-background">
            <CardHeader>
              <Search className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Price Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Compare prices across multiple grocery stores in Australia.</p>
            </CardContent>
          </Card>
          <Card className="bg-background">
            <CardHeader>
              <Calendar className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Meal Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Plan your weekly meals and export to your calendar.</p>
            </CardContent>
          </Card>
          <Card className="bg-background">
            <CardHeader>
              <ShoppingCart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Shopping Lists</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Auto-generate lists based on your recipes and export to stores.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Recipes</h2>
          <Button variant="outline" asChild>
            <Link href="/recipes">View All</Link>
          </Button>
        </div>
        <FeaturedRecipes />
      </section>

      {/* Price Comparison */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">This Week's Price Trends</h2>
          <Button variant="outline" asChild>
            <Link href="/compare">Compare More</Link>
          </Button>
        </div>
        <PriceComparison />
      </section>

      {/* Testimonials/Stats Section */}
      <section className="py-16 bg-muted/50 rounded-lg px-8 my-12">
        <h2 className="text-3xl font-bold text-center mb-12">Why Recipe Hub Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">10,000+</h3>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">15%</h3>
            <p className="text-muted-foreground">Average Savings</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">5,000+</h3>
            <p className="text-muted-foreground">Recipes Shared</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center space-y-6">
        <h2 className="text-4xl font-bold">Ready to save money on groceries?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join Recipe Hub today and start building your recipe collection, comparing prices, and planning your meals.
        </p>
        <Button size="lg" className="mt-4" asChild>
          <Link href="/signup">Get Started for Free</Link>
        </Button>
      </section>
    </div>
  )
}

