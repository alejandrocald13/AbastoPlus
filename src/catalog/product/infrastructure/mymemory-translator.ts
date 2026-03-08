import axios from "axios";
import TranslatorService from "../application/ports/translator-service";
import { injectable } from "inversify";

type MyMemoryResponse = {
    responseData: { translatedText: string };
};

@injectable()
export default class TranslateMyMemory implements TranslatorService{

    async translate(text: string): Promise<String> {
        const url = "https://api.mymemory.translated.net/get";

        const from = 'es'
        const to = 'en'

        const res = await axios.get<MyMemoryResponse>(url, {
            params: {
            q: text,
            langpair: `${from}|${to}`,
            },
        });

        return res.data.responseData.translatedText;
    }
}