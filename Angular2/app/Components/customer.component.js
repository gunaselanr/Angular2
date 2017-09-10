"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customer_service_1 = require("../service/customer.service");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var global_1 = require("../Shared/global");
var CustomerComponent = (function () {
    function CustomerComponent(fb, _customerService) {
        this.fb = fb;
        this._customerService = _customerService;
        this.indLoading = false;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.customerFrm = this.fb.group({
            Id: [''],
            FirstName: ['', forms_1.Validators.required],
            LastName: ['']
            // ,Gender: ['', Validators.required]
        });
        this.LoadUsers();
    };
    CustomerComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._customerService.get(global_1.Global.Base_Customer_EndPoint)
            .subscribe(function (users) { _this.cutomers = users; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    return CustomerComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], CustomerComponent.prototype, "modal", void 0);
CustomerComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/components/customer.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, customer_service_1.CustomerService])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map