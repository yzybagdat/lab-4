import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EditorialListService} from '../../../services/editorial-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {User} from '../../../objects/user';

@Component({
  selector: 'app-editorial-create-v2',
  templateUrl: './editorial-create-v2.component.html',
  styleUrls: ['./editorial-create-v2.component.scss']
})
export class EditorialCreateV2Component implements OnInit {
  formEditor: FormGroup;

  constructor(
    private fb: FormBuilder,
    private editorialListService: EditorialListService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
  ) {

  }

  ngOnInit(): void {
    this.createform();
  }

  createform() {
    this.formEditor = this.fb.group({
      userId: [-1],
      photoUrl: ['../../../assets/images/editorial/dc.jpg', Validators.required],
      title: ['', Validators.required],
      movieIds: this.fb.array([
        this.fb.control(-1, Validators.required),
      ]),
      subscriber: this.fb.array([

      ]),
      text: [''],
      texts: this.fb.array([
        this.fb.control(-1, Validators.required),
      ]),
      price: [0]
    });
  }

  get subscriber() {
    return this.formEditor.get('subscriber') as FormArray;
  }

  get movieIds() {
    return this.formEditor.get('movieIds') as FormArray;
  }

  get texts() {
    return this.formEditor.get('texts') as FormArray;
  }

  get title() {
    return this.formEditor.get('title') as FormControl;
  }

  save() {
    console.log("sdaiodaisdioa");
    // this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(resU => {
    //   let user: User = resU[0];
    //
    //   this.formEditor.get('userId').setValue(user.id);
    //
    //   this.editorialListService.createEditor(this.formEditor.getRawValue()).subscribe( () => {
    //     this.router.navigate(['../../../profile/my-editorials']);
    //   });
    // });
  }

  addMovieIds() {
    this.movieIds.push(new FormControl(-1, [Validators.required]));
    this.texts.push(new FormControl('', [Validators.required]));
  }

  deleteMovie() {
    this.movieIds.removeAt(this.movieIds.length - 1);
    this.texts.removeAt(this.texts.length - 1);
  }
}
