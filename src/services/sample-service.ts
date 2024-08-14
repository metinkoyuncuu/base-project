
import {BaseService} from "../core/services/base-service";
import { GetAllSampleResponse, GetSampleDetailResponse, AddSampleRequest, AddSampleResponse, UpdateSampleRequest, UpdateSampleResponse } from "../model/samplmodel";

class SampleService extends BaseService<
	GetAllSampleResponse,
	GetSampleDetailResponse,
	AddSampleRequest,
	AddSampleResponse,
	UpdateSampleRequest,
	UpdateSampleResponse
> {
	constructor() {
		super();
		this.apiUrl = "Sample";
	}

	getByFilter() {}
}

export default new SampleService();