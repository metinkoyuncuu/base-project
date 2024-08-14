import axios from "axios";
import {BASE_API_URL} from "../../environment/environment";
import {store} from "../../store/configure-store";
import {addRequest, removeRequest} from "../../store/loading/loading-slice";
import {handleError} from "../error_handlers/error-handler";
import tokenService from "../services/token-service";

const axiosInstance = axios.create({
	baseURL: BASE_API_URL,
});

axiosInstance.interceptors.request.use(config => {
	store.dispatch(addRequest());

	const token = tokenService.getToken();
	config.headers.Authorization = "Bearer " + token;
	return config;
});

axiosInstance.interceptors.response.use(
	response => {
		store.dispatch(removeRequest());
		return response;
	},
	error => {
		handleError(error);
		store.dispatch(removeRequest());
		return error;
	},
);

export default axiosInstance;