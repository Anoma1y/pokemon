import {AxiosInstance} from 'axios';

abstract class AbstractApiModule {
    public constructor(
        protected http: AxiosInstance,
    ) {
    }
}

export default AbstractApiModule;