import { AWSCognitoService } from "../../services/AWSCongitoService";
import { SignInRequestDTO } from "./SignInRequsetDTO";

export class SignInUseCase {

    execute(request: SignInRequestDTO, callback: any) {
        const service = new AWSCognitoService();
        return service.signIn(request.username, request.password, callback);
    }
}
