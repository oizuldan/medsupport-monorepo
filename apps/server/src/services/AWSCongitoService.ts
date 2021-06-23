import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

export class AWSCognitoService {

    private userPool: AmazonCognitoIdentity.CognitoUserPool;
    
    constructor () {
        this.userPool = this.getUserPool();
    }

    private getUserPool () {
        const poolData = {    
          UserPoolId : "us-east-2_2qCOMZ56b",    
          ClientId : "p18h8i449cctksajoalvbllm9"
        };
      
        return new AmazonCognitoIdentity.CognitoUserPool(poolData);
    }

    signUp (
        username: string, 
        password: string, 
        attributes: AmazonCognitoIdentity.CognitoUserAttribute[],
        callback: any
    ) {
        this.userPool.signUp(username, password, attributes, [], callback);
    }

    signIn (
        username: string,
        password: string,
        callback: any,
    ) {
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username : username,
            Password : password,
        });
      
        var userData = {
          Username : username,
          Pool : this.userPool
        };
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);    
        
        cognitoUser.authenticateUser(authenticationDetails, callback);
    }

    changePassowrd (
        username:    string,
        password:    string,
        newPassowrd: string,
        callback: any
    ) {
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username : username,
            Password : password,
        });
        
        var userData = {
            Username : username,
            Pool : this.userPool
        };
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        // TODO: Refactor nested callbacks
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function () {
                cognitoUser.changePassword(password, newPassowrd, callback);
            },
            onFailure: function (err: any) {
                console.log(err);
                return;
            },
        });
    }
}