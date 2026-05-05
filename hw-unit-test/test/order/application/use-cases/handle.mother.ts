import Product from "../../../../src/order/domain/entities/product";

export default class HandlerMother {
    public static createTestProduct(uuid: string, price: number): Product{
        return Product.create(uuid, 70, price, 'USD')
    }
}