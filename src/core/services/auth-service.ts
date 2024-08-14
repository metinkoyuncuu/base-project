import axios from "axios";
import toastr from 'toastr'
import { store } from "../../store/configure-store";
import { BASE_API_URL } from "../../environment/environment";
import { AuthLoginRequest, AuthRegisterModel, LoginResponseModel, TokenModel } from "../models/auth-model";
import tokenService from "./token-service";
import { error } from "console";

class AuthService {
  public async login(data: AuthLoginRequest){
    await axios.post<LoginResponseModel>(
        `${BASE_API_URL}Auth/Login`,
        data
      )
      .then((response)=>{
        tokenService.setToken(response.data.accessToken.token);
      })
      .catch((response)=>{
        toastr.error(response);
      })
      ;
    
    }
  
  
  async Logout() {
    tokenService.clearToken();
  }

  async register(data: AuthRegisterModel) {
    await axios.post(`${BASE_API_URL}Auth/Register`, data)
        .catch((error=>{
            toastr.error(error);
        })
    )
    ;
  }

  async changePassword(data: string) {    

    await axios.put(`${BASE_API_URL}/ChangePassword`, data, {
        headers: {
          Authorization: `Bearer ${tokenService.getToken()}`,
        },
      });
      
    }
}


export default new AuthService();