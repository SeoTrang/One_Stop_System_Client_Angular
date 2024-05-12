import { AfterViewInit, Component } from '@angular/core';
interface City {
  name: string,
  code: string
}

interface Person {
  fullName: string;
  phoneNumber: string;
  email: string;
  note: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent  {

  cities!: City[];
  array = [1, 2, 3, 4];
    selectedCities!: City[];

    people: Person[] = [
      { fullName: 'ThS. Nguyễn Phạm Bảo Quý', phoneNumber: '0934842333', email: 'npbquy@ictu.edu.vn', note: 'Tổ trưởng' },
      { fullName: 'ThS. Thân Bá Tuấn', phoneNumber: '0845615588', email: 'tbtuan@ictu.edu.vn', note: '' },
      { fullName: 'CN. Phạm Trần Hồng Phúc', phoneNumber: '0932500142', email: 'hongphucpham@ictu.edu.vn', note: '' }
    ];
  constructor(){
    
  }

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}
