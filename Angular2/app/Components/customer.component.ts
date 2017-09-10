import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ICustomer } from '../Models/Customer';
import { DbOpeation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';

@Component({
    templateUrl:'/app/components/customer.component.html'
})
    
export class CustomerComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    cutomers: ICustomer[];
    customer: ICustomer;
    msg: string;
    indLoading: boolean = false;
    customerFrm: FormGroup;
    dbops: DbOpeation;
    modalTitle: string;
    modalBtnTitle: string;

    constructor(private fb: FormBuilder, private _customerService: CustomerService) { }

    ngOnInit(): void {
        this.customerFrm = this.fb.group({
            Id: ['']
            , FirstName: ['', Validators.required]
            , LastName: ['']
            // ,Gender: ['', Validators.required]
        });
        this.LoadUsers();
    }

    LoadUsers(): void {
        this.indLoading = true;
        this._customerService.get(Global.Base_Customer_EndPoint)
            .subscribe(users => { this.cutomers = users; this.indLoading = false; },
            error => this.msg = <any>error);
    }
}