"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowDownIcon, ArrowUpIcon, TrendingDown, TrendingUp } from "lucide-react"

type Store = "Woolworths" | "Coles" | "Aldi" | "IGA"
type PriceStatus = "rising" | "stable" | "falling"

type Product = {
  id: number
  name: string
  category: string
  status: PriceStatus
  prices: Record<Store, number | null>
  bestPrice: Store
  priceChange: number
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Free Range Eggs (12 pack)",
    category: "dairy",
    status: "rising",
    prices: {
      Woolworths: 7.5,
      Coles: 7.9,
      Aldi: 7.2,
      IGA: 7.95,
    },
    bestPrice: "Aldi",
    priceChange: 12.5,
  },
  {
    id: 2,
    name: "Full Cream Milk (2L)",
    category: "dairy",
    status: "stable",
    prices: {
      Woolworths: 3.6,
      Coles: 3.5,
      Aldi: 3.45,
      IGA: 3.8,
    },
    bestPrice: "Aldi",
    priceChange: 0,
  },
  {
    id: 3,
    name: "Chicken Breast (500g)",
    category: "meat",
    status: "falling",
    prices: {
      Woolworths: 9.5,
      Coles: 8.95,
      Aldi: 8.5,
      IGA: 10.2,
    },
    bestPrice: "Aldi",
    priceChange: -5.3,
  },
  {
    id: 4,
    name: "Bananas (1kg)",
    category: "fruit",
    status: "rising",
    prices: {
      Woolworths: 4.9,
      Coles: 4.8,
      Aldi: 4.5,
      IGA: 5.2,
    },
    bestPrice: "Aldi",
    priceChange: 8.2,
  },
  {
    id: 5,
    name: "Carrots (1kg)",
    category: "vegetable",
    status: "stable",
    prices: {
      Woolworths: 2.5,
      Coles: 2.3,
      Aldi: 2.2,
      IGA: 2.7,
    },
    bestPrice: "Aldi",
    priceChange: -1.4,
  },
]

export default function PriceComparison() {
  const getTrendIcon = (status: PriceStatus, className = "h-4 w-4") => {
    switch (status) {
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
    <div>
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
                <span className="text-sm">Eggs</span>
                <Badge variant="outline" className="text-destructive">
                  +12.5%
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Flour</span>
                <Badge variant="outline" className="text-destructive">
                  +8.7%
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Bananas</span>
                <Badge variant="outline" className="text-destructive">
                  +8.2%
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
                <span className="text-sm">Chicken</span>
                <Badge variant="outline" className="text-green-500">
                  -5.3%
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Tomatoes</span>
                <Badge variant="outline" className="text-green-500">
                  -3.2%
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Carrots</span>
                <Badge variant="outline" className="text-green-500">
                  -1.4%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Best Store Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Aldi</span>
                <Badge>17 items</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Coles</span>
                <Badge variant="secondary">9 items</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Woolworths</span>
                <Badge variant="secondary">7 items</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="dairy">Dairy</TabsTrigger>
          <TabsTrigger value="meat">Meat</TabsTrigger>
          <TabsTrigger value="fruit">Fruit</TabsTrigger>
          <TabsTrigger value="vegetable">Vegetables</TabsTrigger>
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
                  {PRODUCTS.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          {getTrendIcon(product.status, "h-4 w-4 mr-2")}
                          {product.name}
                        </div>
                      </TableCell>
                      <TableCell>{formatPrice(product.prices.Woolworths)}</TableCell>
                      <TableCell>{formatPrice(product.prices.Coles)}</TableCell>
                      <TableCell>{formatPrice(product.prices.Aldi)}</TableCell>
                      <TableCell>{formatPrice(product.prices.IGA)}</TableCell>
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

        {["dairy", "meat", "fruit", "vegetable"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
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
                    {PRODUCTS.filter((p) => p.category === category).map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            {getTrendIcon(product.status, "h-4 w-4 mr-2")}
                            {product.name}
                          </div>
                        </TableCell>
                        <TableCell>{formatPrice(product.prices.Woolworths)}</TableCell>
                        <TableCell>{formatPrice(product.prices.Coles)}</TableCell>
                        <TableCell>{formatPrice(product.prices.Aldi)}</TableCell>
                        <TableCell>{formatPrice(product.prices.IGA)}</TableCell>
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
    </div>
  )
}

