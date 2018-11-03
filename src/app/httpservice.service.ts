import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HTTPService{
    headers;
    constructor(private http: HttpClient){
        this.headers = new HttpHeaders({
            'Content-type': 'application/json'
        });
    }

    sendGETRequest(url): Observable<ArrayBuffer>{
        return this.http.get(url, this.headers)
                .catch(err => {
                    return Observable.throw(err);
                })

    }
}