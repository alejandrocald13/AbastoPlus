import Presentation from "../entities/Presentation";

export default class ProductPresentations{
    private readonly value: Presentation[]

    constructor(presentations: {
        id: string;
        name: string;
        type: string;
        netQuantity: number;
        unitOfMeasure: string;
    }[], baseUnitProduct: string){

        this.insureLengthPresentationsIsValid(presentations)
        this.verifyProductUnitOfMeasurement(presentations, baseUnitProduct)
        
        const newPresentations = [] 
        
        for (const presentation of presentations){
            const newPresentation = Presentation.build(presentation.id, 
                presentation.name, presentation.type, presentation.netQuantity, presentation.unitOfMeasure)
                
                newPresentations.push(newPresentation)
            }
            
        this.value = newPresentations


    }

    private insureLengthPresentationsIsValid(presentations: {
        id: string;
        name: string;
        type: string;
        netQuantity: number;
        unitOfMeasure: string;
    }[]){
        if (presentations.length > 5){
            throw new Error("Number of presentations not valid")
        }
    }

    private verifyProductUnitOfMeasurement(presentations: {
        id: string;
        name: string;
        type: string;
        netQuantity: number;
        unitOfMeasure: string;
        }[], baseUnitProduct: string)
    {
        for (const presentation of presentations){
            if (presentation.unitOfMeasure != baseUnitProduct){
                throw new Error(`Name Presentation: ${presentation.name}
                    \nUnit presentation ${presentation.unitOfMeasure} must match with ${baseUnitProduct}.`)
            }
        }
    }
}