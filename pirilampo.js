
// 1 :
def getUniqueProductsAmount(stockProducts):
    uniqueProducts = set()
    for product in stockProducts:
        uniqueProducts.add(product['name'])
    return len(uniqueProducts)


//2:

def getUniqueProductsName(stockProducts):
uniqueProductNames = []
for product in stockProducts:
    if product['name'] not in uniqueProductNames:
        uniqueProductNames.append(product['name'])
return uniqueProductNames

//3
ef getOutOfStockProducts(stockProducts):
    outOfStockProducts = []    
    outOfStockProducts = []
    outOfStockProducts = []
for product in stockProducts:
if product['quantityInStock'] == 0:
            outOfStockProducts.append(product[
'name'])
return outOfStockProducts

//4
def getLowStockProducts(stockProducts):
    lowStockProducts = []
    for product in stockProducts:
        if 0 < product['quantityInStock'] <= 10:
            message = f"{product['name']}: {product['quantityInStock']} unidades"
            lowStockProducts.append(message)
    return lowStockProducts
//5
def getTotalProductsInStock(stockProducts):
    totalProducts = 0
    for product in stockProducts:
        totalProducts += product['quantityInStock']
    return totalProducts
// 6
def searchProductByName(stockProducts, productName):
    for product in stockProducts:
        if product['name'] == productName:
            return {
                'description': product['description'],
                'formattedPrice': f"R$ {product['price']:.2f}"
            }
    return None
    // 7
    def searchProductsByBrand(stockProducts, brand):
    brandProducts = []
    for product in stockProducts:
        if product['brand'] == brand:
            brandProducts.append(product)
    return brandProducts
// 8
function getProductsOnSale() {
    const formattedProducts = [];
    
    for (const product of stockProducts) {
      if (product.onSale) {
        const formattedPrice = formatPrice(product.price);
        const formattedProduct = {
          description: product.description,
          formattedPrice: formattedPrice,
          onSale: true
        };
        formattedProducts.push(formattedProduct);
      }
    }
    
    return formattedProducts;
  }
  
  function formatPrice(price) {
    return `R$ ${price.toFixed(2)}`;
  }
// 9  
function getProductsWithAllergyOrIntoleranceInfo() {
    const productsWithInfo = stockProducts.filter(product => product.allergyOrIntolerance);
    const formattedProducts = productsWithInfo.map(product => {
      const formattedPrice = `R$ ${product.price.toFixed(2)}`;
      const allergyOrIntoleranceMessage = `Pode conter: ${product.allergyOrIntolerance.join(' ')}`;
      return {
        description: product.description,
        formattedPrice,
        allergyOrIntoleranceMessage
      };
    });
    
    return formattedProducts;
  }
  
// 10
function getProductsWithAllergyOrIntoleranceInfo() {
    const productsWithInfo = stockProducts.filter(product => product.allergyOrIntolerance);
    
    const formattedProducts = productsWithInfo.map(product => {
      const formattedPrice = `R$ ${product.price.toFixed(2)}`;
      const allergyOrIntoleranceMessage = `Pode conter: ${product.allergyOrIntolerance.join(' ')}`;
      return {
        description: product.description,
        formattedPrice,
        allergyOrIntoleranceMessage
      };
    });
    
    return formattedProducts;
  }
  
