import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDownIcon, ArrowUpIcon, Search, TrendingDown, TrendingUp } from "lucide-react"

export default function ComparePage() {
  // Mock data
  const categories = [
    { id: "dairy", name: "Dairy & Eggs" },
    { id: "meat", name: "Meat & Seafood" },
    { id: "produce", name: "Fruit & Vegetables" },
    { id: "bakery", name: "Bakery" },
    { id: "pantry", name: "Pantry" },
  ]

  const products = [
    {
      id: 1,
      name: "Free Range Eggs (12 pack)",
      category: "dairy",
      woolworths: 7.5,
      coles: 7.9,
      aldi: 7.2,
      iga: 7.95,
      bestPrice: "Aldi",
      trend: "rising",
      priceChange: 12.5,
    },
    {
      id: 2,
      name: "Full Cream Milk (2L)",
      category: "dairy",
      woolworths: 3.6,
      coles: 3.5,
      aldi: 3.45,
      iga: 3.8,
      bestPrice: "Aldi",
      trend: "stable",
      priceChange: 0,
    },
    {
      id: 3,
      name: "Chicken Breast (500g)",
      category: "meat",
      woolworths: 9.5,
      coles: 8.95,
      aldi: 8.5,
      iga: 10.2,
      bestPrice: "Aldi",
      trend: "falling",
      priceChange: -5.3,
    },
    {
      id: 4,
      name: "Bananas (1kg)",
      category: "produce",
      woolworths: 4.9,
      coles: 4.8,
      aldi: 4.5,
      iga: 5.2,
      bestPrice: "Aldi",
      trend: "rising",
      priceChange: 8.2,
    },
    {
      id: 5,
      name: "Carrots (1kg)",
      category: "produce",
      woolworths: 2.5,
      coles: 2.3,
      aldi: 2.2,
      iga: 2.7,
      bestPrice: "Aldi",
      trend: "stable",
      priceChange: -1.4,
    },
    {
      id: 6,
      name: "White Bread (700g)",
      category: "bakery",
      woolworths: 3.5,
      coles: 3.5,
      aldi: 2.8,
      iga: 3.8,
      bestPrice: "Aldi",
      trend: "rising",
      priceChange: 3.7,
    },
    {
      id: 7,
      name: "Basmati Rice (1kg)",
      category: "pantry",
      woolworths: 5.5,
      coles: 5.8,
      aldi: 4.99,
      iga: 6.2,
      bestPrice: "Aldi",
      trend: "stable",
      priceChange: 0.5,
    },
  ]

  const getTrendIcon = (trend: string, className = "h-4 w-4") => {
    switch (trend) {
      case "rising":
        return <TrendingUp className={`${className} text-destructive`} />
      case "falling":
        return <TrendingDown className={`${className} text-green-500`} />
      default:
        return null
    }
  }

  const getPriceChangeIcon = (change: number) => {
    if (change > 0) {
      return <ArrowUpIcon className="h-3 w-3 text-destructive" />
    } else if (change < 0) {
      return <ArrowDownIcon className="h-3 w-3 text-green-500" />
    }
    return null
  }

  const formatPrice = (price: number | null) => {
    if (price === null) return "N/A"
    return `$${price.toFixed(2)}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Price Comparison</h1>

      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search for products..." className="pl-10" />
      </div>

      {/* Price Trends Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <TrendingUp className="h-5 w-5 text-destructive mr-2" />
              Rising Prices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Eggs (12 pack)</span>
                <Badge variant="outline" className="text-destructive">
                  +12.5%
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Bananas (1kg)</span>
                <Badge variant="outline" className="text-destructive">
                  +8.2%
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">White Bread (700g)</span>
                <Badge variant="outline" className="text-destructive">
                  +3.7%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <TrendingDown className="h-5 w-5 text-green-500 mr-2" />
              Falling Prices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Chicken Breast (500g)</span>
                <Badge variant="outline" className="text-green-500">
                  -5.3%
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Carrots (1kg)</span>
                <Badge variant="outline" className="text-green-500">
                  -1.4%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Best Deals Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Aldi</span>
                <Badge>7 items</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Coles</span>
                <Badge variant="secondary">0 items</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Woolworths</span>
                <Badge variant="secondary">0 items</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Price Comparison Table */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Products</TabsTrigger>
          {categories.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.id}>
              {cat.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Woolworths</TableHead>
                    <TableHead>Coles</TableHead>
                    <TableHead>Aldi</TableHead>
                    <TableHead>IGA</TableHead>
                    <TableHead>Best Price</TableHead>
                    <TableHead>Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          {getTrendIcon(product.trend, "h-4 w-4 mr-2")}
                          {product.name}
                        </div>
                      </TableCell>
                      <TableCell>{formatPrice(product.woolworths)}</TableCell>
                      <TableCell>{formatPrice(product.coles)}</TableCell>
                      <TableCell>{formatPrice(product.aldi)}</TableCell>
                      <TableCell>{formatPrice(product.iga)}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{product.bestPrice}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {getPriceChangeIcon(product.priceChange)}
                          <span
                            className={
                              product.priceChange > 0
                                ? "text-destructive"
                                : product.priceChange < 0
                                  ? "text-green-500"
                                  : ""
                            }
                          >
                            {product.priceChange > 0 ? "+" : ""}
                            {product.priceChange}%
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Category Tabs */}
        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Woolworths</TableHead>
                      <TableHead>Coles</TableHead>
                      <TableHead>Aldi</TableHead>
                      <TableHead>IGA</TableHead>
                      <TableHead>Best Price</TableHead>
                      <TableHead>Trend</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products
                      .filter((p) => p.category === cat.id)
                      .map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              {getTrendIcon(product.trend, "h-4 w-4 mr-2")}
                              {product.name}
                            </div>
                          </TableCell>
                          <TableCell>{formatPrice(product.woolworths)}</TableCell>
                          <TableCell>{formatPrice(product.coles)}</TableCell>
                          <TableCell>{formatPrice(product.aldi)}</TableCell>
                          <TableCell>{formatPrice(product.iga)}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{product.bestPrice}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              {getPriceChangeIcon(product.priceChange)}
                              <span
                                className={
                                  product.priceChange > 0
                                    ? "text-destructive"
                                    : product.priceChange < 0
                                      ? "text-green-500"
                                      : ""
                                }
                              >
                                {product.priceChange > 0 ? "+" : ""}
                                {product.priceChange}%
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">About Price Comparison</h2>
        <p className="text-muted-foreground mb-4">
          Our price comparison tool tracks prices across major Australian grocery stores to help you find the best
          deals. Prices are updated daily and we highlight significant price changes to help you make informed shopping
          decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="default">Export Price List</Button>
          <Button variant="outline">Suggest Product</Button>
        </div>
      </div>
    </div>
  )
}

