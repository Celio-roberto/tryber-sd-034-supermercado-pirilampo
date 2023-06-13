
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

