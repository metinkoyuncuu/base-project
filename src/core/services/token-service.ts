class TokenService {
	getToken(): string | null {
		return localStorage.getItem("token");
	}

	setToken(token:string): void {
		localStorage.setItem("token",token);
	}
	clearToken():void{
		localStorage.removeItem('token');
	}
	hasToken(): boolean {
		return localStorage.getItem("token") != null;
	}
}

export default new TokenService();