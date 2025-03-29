import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, Check, Plus, Search, ShoppingCart } from "lucide-react"

export default function PantryPage() {
  // Mock data
  const pantryItems = [
    { id: 1, name: "Pasta", quantity: "500g", category: "Dry Goods", expiryDate: "2025-06-15", status: "good" },
    { id: 2, name: "Rice", quantity: "2kg", category: "Dry Goods", expiryDate: "2025-08-20", status: "good" },
    {
      id: 3,
      name: "Olive Oil",
      quantity: "500ml",
      category: "Oils & Vinegars",
      expiryDate: "2024-05-10",
      status: "good",
    },
    {
      id: 4,
      name: "Canned Tomatoes",
      quantity: "3 cans",
      category: "Canned Goods",
      expiryDate: "2024-07-22",
      status: "good",
    },
    { id: 5, name: "Milk", quantity: "2L", category: "Dairy", expiryDate: "2023-04-05", status: "expired" },
    { id: 6, name: "Eggs", quantity: "6", category: "Dairy", expiryDate: "2023-04-08", status: "low" },
    { id: 7, name: "Flour", quantity: "1kg", category: "Baking", expiryDate: "2024-10-15", status: "good" },
    { id: 8, name: "Sugar", quantity: "500g", category: "Baking", expiryDate: "2025-03-20", status: "good" },
    {
      id: 9,
      name: "Chicken Stock",
      quantity: "2 cartons",
      category: "Stocks & Broths",
      expiryDate: "2023-04-30",
      status: "expiring",
    },
    { id: 10, name: "Soy Sauce", quantity: "250ml", category: "Condiments", expiryDate: "2025-02-15", status: "good" },
  ]

  const shoppingList = [
    { id: 1, name: "Fresh Milk", quantity: "2L", category: "Dairy", store: "Woolworths", price: 3.6 },
    { id: 2, name: "Eggs", quantity: "12 pack", category: "Dairy", store: "Aldi", price: 7.2 },
    { id: 3, name: "Tomatoes", quantity: "500g", category: "Produce", store: "Woolworths", price: 4.5 },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "expired":
        return <Badge variant="destructive">Expired</Badge>
      case "expiring":
        return (
          <Badge variant="warning" className="bg-amber-500">
            Expiring Soon
          </Badge>
        )
      case "low":
        return <Badge variant="outline">Low Stock</Badge>
      default:
        return <Badge variant="secondary">In Stock</Badge>
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Pantry Management</h1>

        <div className="flex gap-2">
          <Button variant="outline">
            <ShoppingCart className="mr-2 h-4 w-4" />
            View Shopping List
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Item
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-base flex items-center">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              Total Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">10</p>
            <p className="text-xs text-muted-foreground">Across 6 categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-base flex items-center text-amber-500">
              <AlertCircle className="mr-2 h-4 w-4 text-amber-500" />
              Expiring Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1</p>
            <p className="text-xs text-muted-foreground">Within 7 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-base flex items-center text-destructive">
              <AlertCircle className="mr-2 h-4 w-4 text-destructive" />
              Expired
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1</p>
            <p className="text-xs text-muted-foreground">Should be discarded</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-base flex items-center">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Shopping List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3</p>
            <p className="text-xs text-muted-foreground">Items to buy</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pantry" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pantry">Pantry Inventory</TabsTrigger>
          <TabsTrigger value="shopping">Shopping List</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        {/* Pantry Inventory Tab */}
        <TabsContent value="pantry">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search pantry items..." className="pl-10" />
              </div>

              <div className="flex gap-4">
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Sort</Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Expiry</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pantryItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{new Date(item.expiryDate).toLocaleDateString()}</TableCell>
                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Shopping List Tab */}
        <TabsContent value="shopping">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="relative w-full md:w-auto md:flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Add an item to shopping list..." className="pl-10" />
              </div>

              <div className="flex gap-4">
                <Button variant="outline">Generate from Recipes</Button>
                <Button>Add Item</Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Store</TableHead>
                      <TableHead>Est. Price</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {shoppingList.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.store}</TableCell>
                        <TableCell>${item.price.toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end">
                            <Button variant="ghost" size="sm" className="mr-2">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Check className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableRow>
                    <TableCell colSpan={4} className="text-right font-medium">
                      Total:
                    </TableCell>
                    <TableCell className="font-bold">
                      ${shoppingList.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </Table>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button variant="outline" className="mr-2">
                Export List
              </Button>
              <Button>Add to Online Cart</Button>
            </div>
          </div>
        </TabsContent>

        {/* Categories Tab */}
        <TabsContent value="categories">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Dry Goods", "Dairy", "Canned Goods", "Baking", "Oils & Vinegars", "Condiments"].map((category) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                  <CardDescription>
                    {pantryItems.filter((item) => item.category === category).length} items
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    {pantryItems
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <li key={item.id} className="flex justify-between">
                          <span>{item.name}</span>
                          <span className="text-muted-foreground">{item.quantity}</span>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

