// import MongoProductRepository from "./src/catalog/product/infrastructure/mongo-product-repository";
// import SaveProduct from "./src/catalog/product/application/use-cases/product-service";
import container from "./src/catalog/product/infrastructure/container";
import SaveProduct from "./src/catalog/product/application/use-cases/product-save";
import ProductNameTranslate from "./src/catalog/product/application/use-cases/product-name-translate";
import { TYPES } from "./src/catalog/product/infrastructure/types";

async function main() {
  const id = '770e8400-e29b-41d4-a716-446655440200'
  const name = 'Aceite de Oliva Extra Virgen 750ml - Marca OlivaReal - Producto Natural Premium'
  const baseUnit = 'ml'

  const presentations = [
    {
      id: '770e8400-e29b-41d4-a716-446655440201',
      name: 'Botella 250ml',
      type: 'bottle',
      netQuantity: 250,
      unitOfMeasure: 'ml'
    },
    {
      id: '770e8400-e29b-41d4-a716-446655440202',
      name: 'Botella 500ml',
      type: 'bottle',
      netQuantity: 500,
      unitOfMeasure: 'ml'
    },
    {
      id: '770e8400-e29b-41d4-a716-446655440203',
      name: 'Botella 750ml',
      type: 'bottle',
      netQuantity: 750,
      unitOfMeasure: 'ml'
    },
    {
      id: '770e8400-e29b-41d4-a716-446655440204',
      name: 'Botella 2lt',
      type: 'bottle',
      netQuantity: 2000,
      unitOfMeasure: 'ml'
    }
  ]

  try {    

    const saveProduct = container.get<SaveProduct>(TYPES.ProductService)

    const translateName = container.get<ProductNameTranslate>(TYPES.ProductNameTranslate)

    const newName = String(await translateName.run(name))

    saveProduct.run(id, newName, baseUnit, presentations)


  } catch (error) {
    console.error(error)
  }  
}

main()
