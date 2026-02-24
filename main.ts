import Product from "./src/catalog/product/domain/Product";
import MongoProductRepository from "./src/catalog/product/infrastructure/mongo-product-repository";
import { connectDB, disconnectDB } from "./src/shared/persistence/db";

async function main() {
  const id = '550e8400-e29b-41d4-a716-446655440000'
  const name = 'Pollo Frito'
  const baseUnit = 'Kg'
  
  await connectDB()
  
  const presentations = [
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      name: 'Bolsa 1Kg',
      type: 'bag',
      netQuantity: 1,
      unitOfMeasure: 'Kg'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440001',
      name: 'Bolsa 2Kg',
      type: 'bag',
      netQuantity: 2,
      unitOfMeasure: 'Kg'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440002',
      name: 'Caja 5Kg',
      type: 'box',
      netQuantity: 5,
      unitOfMeasure: 'Kg'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440003',
      name: 'Caja 10Kg',
      type: 'box',
      netQuantity: 10,
      unitOfMeasure: 'Kg'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440005',
      name: 'bottle 20Kg',
      type: 'bottle',
      netQuantity: 20,
      unitOfMeasure: 'Kg'
    }
  ]
  
  const newProduct = Product.build(id, name, baseUnit, presentations)
  
  const productRepository = new MongoProductRepository()
  
  try {
    
    const result = await productRepository.save(newProduct)
    
  } catch (error) {
    console.error(error)
  }
  
  await disconnectDB()
  
}

main()
