﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v8.8.6231.38725 (NJsonSchema v7.7.6231.35489) (http://NSwag.org)
// </auto-generated>
//----------------------

import * as moment from 'moment';

import 'rxjs/Rx'; 
import {Observable} from 'rxjs/Observable';
import {Injectable, Inject, Optional, OpaqueToken} from '@angular/core';
import {Http, Headers, Response, RequestOptionsArgs} from '@angular/http';

export const API_BASE_URL = new OpaqueToken('API_BASE_URL');

@Injectable()
export class ComboBoxItemsServiceProxy {
    private http: Http = null; 
    private baseUrl: string = undefined; 
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http; 
        this.baseUrl = baseUrl ? baseUrl : ""; 
    }

    /**
     * @return Success
     */
    getAllStatus(): Observable<ListResultDtoOfComboBoxItemDto> {
        let url_ = this.baseUrl + "/api/comboBoxItems/GetAllStatus";

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processGetAllStatus(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processGetAllStatus(response));
                } catch (e) {
                    return <Observable<ListResultDtoOfComboBoxItemDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfComboBoxItemDto>><any>Observable.throw(response);
        });
    }

    protected processGetAllStatus(response: Response): ListResultDtoOfComboBoxItemDto {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: ListResultDtoOfComboBoxItemDto = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfComboBoxItemDto.fromJS(resultData200) : new ListResultDtoOfComboBoxItemDto();
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    /**
     * @return Success
     */
    getAllUsers(): Observable<ListResultDtoOfComboBoxItemDto> {
        let url_ = this.baseUrl + "/api/comboBoxItems/GetAllUsers";

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processGetAllUsers(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processGetAllUsers(response));
                } catch (e) {
                    return <Observable<ListResultDtoOfComboBoxItemDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfComboBoxItemDto>><any>Observable.throw(response);
        });
    }

    protected processGetAllUsers(response: Response): ListResultDtoOfComboBoxItemDto {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: ListResultDtoOfComboBoxItemDto = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfComboBoxItemDto.fromJS(resultData200) : new ListResultDtoOfComboBoxItemDto();
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    protected throwException(message: string, status: number, response: string, result?: any): any {
        if(result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response);
    }
}

@Injectable()
export class SamplesServiceProxy {
    private http: Http = null; 
    private baseUrl: string = undefined; 
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http; 
        this.baseUrl = baseUrl ? baseUrl : ""; 
    }

    /**
     * @return Success
     */
    getAll(): Observable<ListResultDtoOfSampleDto> {
        let url_ = this.baseUrl + "/api/samples/GetAll";

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processGetAll(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processGetAll(response));
                } catch (e) {
                    return <Observable<ListResultDtoOfSampleDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfSampleDto>><any>Observable.throw(response);
        });
    }

    protected processGetAll(response: Response): ListResultDtoOfSampleDto {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: ListResultDtoOfSampleDto = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfSampleDto.fromJS(resultData200) : new ListResultDtoOfSampleDto();
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    /**
     * @return Success
     */
    getByStatus(statusId: number): Observable<ListResultDtoOfSampleDto> {
        let url_ = this.baseUrl + "/api/samples/GetByStatus?";
        if (statusId !== undefined)
        
            url_ += "statusId=" + encodeURIComponent("" + statusId) + "&";

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processGetByStatus(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processGetByStatus(response));
                } catch (e) {
                    return <Observable<ListResultDtoOfSampleDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfSampleDto>><any>Observable.throw(response);
        });
    }

    protected processGetByStatus(response: Response): ListResultDtoOfSampleDto {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: ListResultDtoOfSampleDto = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfSampleDto.fromJS(resultData200) : new ListResultDtoOfSampleDto();
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    /**
     * @return Success
     */
    getByUserName(userName: string): Observable<ListResultDtoOfSampleDto> {
        let url_ = this.baseUrl + "/api/samples/GetByUserName?";
        if (userName !== undefined)
        
            url_ += "userName=" + encodeURIComponent("" + userName) + "&";

        const content_ = "";
        
        return this.http.request(url_, {
            body: content_,
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processGetByUserName(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processGetByUserName(response));
                } catch (e) {
                    return <Observable<ListResultDtoOfSampleDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<ListResultDtoOfSampleDto>><any>Observable.throw(response);
        });
    }

    protected processGetByUserName(response: Response): ListResultDtoOfSampleDto {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: ListResultDtoOfSampleDto = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? ListResultDtoOfSampleDto.fromJS(resultData200) : new ListResultDtoOfSampleDto();
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    /**
     * @return Success
     */
    createSample(input: CreateSampleInput): Observable<SampleDto> {
        let url_ = this.baseUrl + "/api/samples/CreateSample";

        const content_ = JSON.stringify(input ? input.toJS() : null);
        
        return this.http.request(url_, {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
				"Accept": "application/json; charset=UTF-8"
            })
        }).map((response) => {
            return this.processCreateSample(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processCreateSample(response));
                } catch (e) {
                    return <Observable<SampleDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<SampleDto>><any>Observable.throw(response);
        });
    }

    protected processCreateSample(response: Response): SampleDto {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: SampleDto = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? SampleDto.fromJS(resultData200) : new SampleDto();
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }

    protected throwException(message: string, status: number, response: string, result?: any): any {
        if(result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response);
    }
}

export class ListResultDtoOfComboBoxItemDto { 
    items: ComboBoxItemDto[];
    constructor(data?: any) {
        if (data !== undefined) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(ComboBoxItemDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListResultDtoOfComboBoxItemDto {
        return new ListResultDtoOfComboBoxItemDto(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJS());
        }
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new ListResultDtoOfComboBoxItemDto(JSON.parse(json));
    }
}

export class ComboBoxItemDto { 
    value: string; 
    text: string;
    constructor(data?: any) {
        if (data !== undefined) {
            this.value = data["value"] !== undefined ? data["value"] : null;
            this.text = data["text"] !== undefined ? data["text"] : null;
        }
    }

    static fromJS(data: any): ComboBoxItemDto {
        return new ComboBoxItemDto(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["value"] = this.value !== undefined ? this.value : null;
        data["text"] = this.text !== undefined ? this.text : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new ComboBoxItemDto(JSON.parse(json));
    }
}

export class ListResultDtoOfSampleDto { 
    items: SampleDto[];
    constructor(data?: any) {
        if (data !== undefined) {
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(SampleDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListResultDtoOfSampleDto {
        return new ListResultDtoOfSampleDto(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJS());
        }
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new ListResultDtoOfSampleDto(JSON.parse(json));
    }
}

export class SampleDto { 
    barcode: string; 
    createDate: string; 
    statusDescription: string; 
    creatorUserFirstName: string; 
    creatorUserLastName: string; 
    id: number;
    constructor(data?: any) {
        if (data !== undefined) {
            this.barcode = data["barcode"] !== undefined ? data["barcode"] : null;
            this.createDate = data["createDate"] !== undefined ? data["createDate"] : null;
            this.statusDescription = data["statusDescription"] !== undefined ? data["statusDescription"] : null;
            this.creatorUserFirstName = data["creatorUserFirstName"] !== undefined ? data["creatorUserFirstName"] : null;
            this.creatorUserLastName = data["creatorUserLastName"] !== undefined ? data["creatorUserLastName"] : null;
            this.id = data["id"] !== undefined ? data["id"] : null;
        }
    }

    static fromJS(data: any): SampleDto {
        return new SampleDto(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["barcode"] = this.barcode !== undefined ? this.barcode : null;
        data["createDate"] = this.createDate !== undefined ? this.createDate : null;
        data["statusDescription"] = this.statusDescription !== undefined ? this.statusDescription : null;
        data["creatorUserFirstName"] = this.creatorUserFirstName !== undefined ? this.creatorUserFirstName : null;
        data["creatorUserLastName"] = this.creatorUserLastName !== undefined ? this.creatorUserLastName : null;
        data["id"] = this.id !== undefined ? this.id : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new SampleDto(JSON.parse(json));
    }
}

export class CreateSampleInput { 
    barcode: string; 
    statusId: number; 
    createBy: number;
    constructor(data?: any) {
        if (data !== undefined) {
            this.barcode = data["barcode"] !== undefined ? data["barcode"] : null;
            this.statusId = data["statusId"] !== undefined ? data["statusId"] : null;
            this.createBy = data["createBy"] !== undefined ? data["createBy"] : null;
        }
    }

    static fromJS(data: any): CreateSampleInput {
        return new CreateSampleInput(data);
    }

    toJS(data?: any) {
        data = data === undefined ? {} : data;
        data["barcode"] = this.barcode !== undefined ? this.barcode : null;
        data["statusId"] = this.statusId !== undefined ? this.statusId : null;
        data["createBy"] = this.createBy !== undefined ? this.createBy : null;
        return data; 
    }

    toJSON() {
        return JSON.stringify(this.toJS());
    }

    clone() {
        const json = this.toJSON();
        return new CreateSampleInput(JSON.parse(json));
    }
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    result?: any; 

    constructor(message: string, status: number, response: string, result?: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.result = result;
    }
}