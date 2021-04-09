import { Component, OnInit } from '@angular/core';
import { IDeactivateComponent } from '../route-guards/decativate.guard';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent    implements IDeactivateComponent
{

  //Check if there any unsaved data etc. If yes then as for confirmation
  canExit() : boolean {

    if (confirm("Do you wish to Please confirm")) {
      return true
    } else {
      return false
    }
  }

}
