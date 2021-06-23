import { SignUpRequestDTO } from "./SignUpRequsetDTO";
import {CognitoUserAttribute} from "amazon-cognito-identity-js";
import { AWSCognitoService } from "../../services/AWSCongitoService";

export class SignUpUseCase {

    execute(request: SignUpRequestDTO, callback: any) {
        var attributeList = [
            new CognitoUserAttribute({Name:"name",Value:request.name}),
            new CognitoUserAttribute({Name:"family_name",Value:request.family_name}),
            new CognitoUserAttribute({Name:"gender",Value:request.gender}),
            new CognitoUserAttribute({Name:"birthdate",Value:request.birthdate}),
            new CognitoUserAttribute({Name:"email",Value:request.email}),
            new CognitoUserAttribute({Name:"nickname",Value:request.nickname})
        ];

        const service = new AWSCognitoService();
        return service.signUp(request.username, request.password, attributeList, callback);
    }
}
