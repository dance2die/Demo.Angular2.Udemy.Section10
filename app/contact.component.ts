import {Component} from 'angular2/core';
import {Router, CanDeactivate, ComponentInstruction} from 'angular2/router';


@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    constructor(private _router: Router) {
    }

    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);
    }

    routerCanDeactivate(
        next:ComponentInstruction,
        previous:ComponentInstruction):any {
        // console.log("next", next);
        // console.log("previous", previous);
        // if (this.form.dirty)

        return confirm("Are you sure?");
    }
}