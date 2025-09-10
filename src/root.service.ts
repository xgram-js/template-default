import { Provider } from "@xgram/main";

@Provider()
export class RootService {
    getHelloWorld() {
        return "Hello XGram.js World!";
    }
}
