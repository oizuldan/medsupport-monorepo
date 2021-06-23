import { AWSCognitoService } from "../../services/AWSCongitoService";
import { ChangePasswordRequestDTO } from "./ChangePasswordRequsetDTO";

export class ChangePasswordUseCase {

    execute(request: ChangePasswordRequestDTO, callback: any) {
        const service = new AWSCognitoService();
        return service.changePassowrd(request.username, request.password, request.new_password, callback);
    }
}
