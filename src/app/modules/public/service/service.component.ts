import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../core/services/service.service';

interface City {
  name: string,
  code: string
}
interface Service{
  id: number;
  name: string; 
  type: string;
  department: any;
  description: string;
  time_handle: string;
  created_at: string;
  updated_at: string;
}
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  cities!: City[];

  selectedCities!: City[];

  services!: Service[];
  constructor(private router: Router,
    private serviceService: ServiceService
  ) {}
  ngOnInit() {
    this.onLoadData();
      this.cities = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];

      // this.services = [
      //   {
      //     id: 1,
      //     name: "Đăng ký nhận giấy chứng nhận sinh viên NCKH", 
      //     type: "online, offline",
      //     department: {
      //       name: "Phòng công tác học sinh viên viên"
      //     },
      //     description: "mo ta",
      //     time_handle: "2 ngày",
      //     created_at: "16/4/2024",
      //     updated_at: "16/4/2024",
      //   },
      //   {
      //     id: 1,
      //     name: "Đề nghị cấp phiếu điểm học tập năm học, toàn khóa", 
      //     type: "online, offline",
      //     department: {
      //       name: "Phòng đào tạo"
      //     },
      //     description: "mo ta",
      //     time_handle: "2 ngày",
      //     created_at: "16/4/2024",
      //     updated_at: "16/4/2024",
      //   },
      //   {
      //     id: 1,
      //     name: "Đơn xin hủy đăng ký học phần", 
      //     type: "online, offline",
      //     department: {
      //       name: "Phòng đào tạo"
      //     },
      //     description: "mo ta",
      //     time_handle: "2 ngày",
      //     created_at: "16/4/2024",
      //     updated_at: "16/4/2024",
      //   },
      //   {
      //     id: 1,
      //     name: "Đơn xin học cải thiện", 
      //     type: "online, offline",
      //     department: {
      //       name: "Phòng đào tạo"
      //     },
      //     description: "mo ta",
      //     time_handle: "2 ngày",
      //     created_at: "16/4/2024",
      //     updated_at: "16/4/2024",
      //   }
      // ]
  }


  onLoadData() {
    let data = null;
    this.serviceService.getAllServices().subscribe({
      next: (data) => {
        console.log(data);
        this.services = data;
        
      },
      error: (error) => {
        console.log(error);
        
      }
    })
  }

  handleForwardDetail(id:any){
    // this.router.navigate(['/create-document', id]);
    window.location.href = "/create-document/"+id;
  }
}
