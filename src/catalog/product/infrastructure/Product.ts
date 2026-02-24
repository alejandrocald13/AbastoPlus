import { prop, getModelForClass } from "@typegoose/typegoose";

class Presentation{
    @prop({required: true})
    _id: string

    @prop({required: true})
    presentation_name: string

    @prop({required: true})
    presentation_type: string

    @prop({required: true})
    presentation_net_quantity: number

    @prop({required: true})
    presentation_unit_of_measure: string
}


class Product {
    @prop({required: true})
    _id: string;

    @prop({required: true})
    product_name: string

    @prop({required: true})
    product_base_unit: string

    @prop({type: () => [Presentation]})
    presentations: Presentation[]

}

export const ProductModel = getModelForClass(Product)