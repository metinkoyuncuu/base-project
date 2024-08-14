export interface AuthLoginRequest{
    email:string;
    password:string;
    authenticatorCode?:string;
}

export interface LoginResponseModel{
    accessToken:TokenModel;
}

export interface TokenModel{
    token:string;
    expiration:Date;

}

export interface AuthRegisterModel {
    email: string;
    password: string;
}