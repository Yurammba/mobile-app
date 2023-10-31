import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
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

  ngOnInit() {

  }

  next() {
    this.router.navigate(['registration']);
  }

  toggleCheckbox(index: number) {
    this.isChecked.forEach((item, i) => {
      if (i !== index) {
        item.checked = false;
      }
    });
    // Затем переключаем состояние выбранного элемента
    this.isChecked[index].checked = !this.isChecked[index].checked;
    this.enableAllTimeArrayItems();
  }

  toggleCheckboxTime(index: number) {
    this.timeArray.forEach((item, i) => {
      if (i !== index) {
        item.checked = false;
      }
    });
    // Затем переключаем состояние выбранного элемента
    this.timeArray[index].checked = !this.timeArray[index].checked;
    this.enableAllTimeArrayItems();
  }

  enableAllTimeArrayItems() {
    this.timeArray.forEach((item) => {
      item.checked = false;
      item.disabled = false;
    });
  }
}
