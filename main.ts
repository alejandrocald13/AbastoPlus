// import MongoProductRepository from "./src/catalog/product/infrastructure/mongo-product-repository";
// import SaveProduct from "./src/catalog/product/application/use-cases/product-service";
import container from "./src/catalog/product/infrastructure/container";
import SaveProduct from "./src/catalog/product/application/use-cases/product-save";
import { TYPES } from "./src/catalog/product/infrastructure/types";

async function main() {
  const id = '660e8400-e29b-41d4-a716-446655440100'
  const name = 'Salsa de Tomate'
  const baseUnit = 'lt'

  const presentations = [
    {
      id: '660e8400-e29b-41d4-a716-446655440101',
      name: 'Botella 1L',
      type: 'bottle',
      netQuantity: 1,
      unitOfMeasure: 'lt'
    },
    {
      id: '660e8400-e29b-41d4-a716-446655440102',
      name: 'Frasco 500ml',
      type: 'jar',
      netQuantity: 0.5,
      unitOfMeasure: 'lt'
    },
    {
      id: '660e8400-e29b-41d4-a716-446655440103',
      name: 'Lata 3L',
      type: 'can',
      netQuantity: 3,
      unitOfMeasure: 'lt'
    },
    {
      id: '660e8400-e29b-41d4-a716-446655440104',
      name: 'Caja 12L',
      type: 'box',
      netQuantity: 12,
      unitOfMeasure: 'lt'
    },
    {
      id: '660e8400-e29b-41d4-a716-446655440105',
      name: 'Saco 20L',
      type: 'sack',
      netQuantity: 20,
      unitOfMeasure: 'lt'
    }
  ]

  try {    

    const repository = container.get<SaveProduct>(TYPES.ProductService)

    const product = repository.run(id, name, baseUnit, presentations)

  } catch (error) {
    console.error(error)
  }  
}

main()
