export default interface TranslatorService{
    translate(text: string): Promise<String>
}