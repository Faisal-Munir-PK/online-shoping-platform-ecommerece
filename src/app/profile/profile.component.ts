import { Component } from '@angular/core';
import type { IProfile, IResponse } from '../Interfaces';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class Profile {
  constructor(private toastr: ToastrService) {}
  userProfile: IProfile = {
    first_name: '',
    last_name: '',
    email: '',
    phone: null,
    password: '',
    confirm_password: '',
  };

  successMessage: IResponse = {
    status: null,
    message: null,
  };
  save() {
    // send request to api
    // return response message
    this.successMessage = {
      status: 200,
      message: 'Success',
    };
    // console.warn("counterStore", this.counterStore.copy())

    this.toastr.success('Have fun storming the castle!', '', {
      timeOut: 1000,
      positionClass: 'toast-success-bottom-right',
    });
  }
}
