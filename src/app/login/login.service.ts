import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class LoginService {

    username: Subject<string> = new Subject();
    login(username: string) {
        this.username.next(username);
        localStorage.setItem("username", username);
    }
}