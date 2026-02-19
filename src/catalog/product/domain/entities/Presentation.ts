import PresentationId from "./presentation/presentation_id";
import PresentationName from "./presentation/presentation_name";
import PresentationType from "./presentation/presentation_type";
import PresentationNetQuantity from "./presentation/presentation_net_quantity";
import PresentationUnitOfMeasure from "./presentation/presentation_unit_of_measure";

export default class Presentation{
    private readonly presentationId: PresentationId
    private readonly presentationName: PresentationName
    private readonly presentationType: PresentationType
    private readonly presentationNetQuantity: PresentationNetQuantity
    private readonly presentationUnitOfMeasure: PresentationUnitOfMeasure

    constructor(presentationId: PresentationId, presentationName: PresentationName,
        presentationType: PresentationType, presentationNetQuantity: PresentationNetQuantity,
        presentationUnitOfMeasure: PresentationUnitOfMeasure
    ){
        this.presentationId = presentationId
        this.presentationName = presentationName
        this.presentationType = presentationType
        this.presentationNetQuantity = presentationNetQuantity
        this.presentationUnitOfMeasure = presentationUnitOfMeasure
    }

    public static build(id: string, name: string, type: string, netQuantity: number, unitOfMeasure: string): Presentation{
        const presentationId = new PresentationId(id)
        const presentationName = new PresentationName(name)
        const presentationType = new PresentationType(type)
        const presentationNetQuantity = new PresentationNetQuantity(netQuantity)
        const presentationUnitOfMeasure = new PresentationUnitOfMeasure(unitOfMeasure)

        const newPresentation = new Presentation(presentationId, presentationName, 
            presentationType, presentationNetQuantity, presentationUnitOfMeasure)

        return newPresentation
    }
}