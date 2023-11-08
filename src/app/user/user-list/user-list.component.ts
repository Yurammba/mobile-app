import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  isChecked: { day: string, date: string, checked: boolean }[] = [
    {day: 'Пн', date: '6 сент.', checked: false},
    {day: 'Вт', date: '7 сент.', checked: false},
    {day: 'Ср', date: '8 сент.', checked: false},
    {day: 'Чт', date: '9 сент.', checked: false},
    {day: 'Пт', date: '10 сент.', checked: false}
  ];

  timeArray: { value: string, checked: boolean, disabled: boolean }[] = [
    {value: '11:00', checked: true, disabled: true},
    {value: '12:00', checked: true, disabled: true},
    {value: '13:00', checked: true, disabled: true},
    {value: '14:00', checked: true, disabled: true},
    {value: '15:00', checked: true, disabled: true}
  ];

  @ViewChild('deleteConfirmationDialog')
  deleteConfirmationDialog!: TemplateRef<any>;

  constructor(
    private router: Router
  ) {}

  next() {
    this.router.navigate(['registration']);
  }

  toggleCheckbox(index: number) {
    this.updateCheckboxes(this.isChecked, index);
    this.enableAllTimeArrayItems();
  }

  toggleCheckboxTime(index: number) {
    this.updateCheckboxes(this.timeArray, index);
    this.enableAllTimeArrayItems();
  }

  private updateCheckboxes(checkboxes: { checked: boolean }[], index: number) {
    checkboxes.forEach((item, i) => item.checked = i == index);
  }

  enableAllTimeArrayItems() {
    this.timeArray.forEach((item) => {
      item.checked = false;
      item.disabled = false;
    });
  }
}
