import axios from "axios";
import TranslatorService from "../application/ports/translator-service";
import { injectable } from "inversify";

type GoogleResponse = any;

@injectable()
export default class TranslateGoogleFree implements TranslatorService {

    async translate(text: string): Promise<String> {

        const from = 'es';
        const to = 'en';

        const res = await axios.get<GoogleResponse>(
            "https://translate.googleapis.com/translate_a/single",
            {
                params: {
                    client: "gtx",
                    sl: from,
                    tl: to,
                    dt: "t",
                    q: text
                },
                timeout: 5000
            }
        );

        return res.data[0][0][0];
    }
}