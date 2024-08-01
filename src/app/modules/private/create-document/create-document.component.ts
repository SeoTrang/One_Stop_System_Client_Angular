import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../../core/services/service.service';
import { LoadingService } from '../../../core/services/loading.service';
import { DocumentService } from '../../../core/services/document.service';
import { NotificationService } from '../../../core/services/notification.service';


@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {
  service: any;
  attributeValues: any = {};
  selectedCheckboxValues: any[] = [];
  service_id?: number;
  constructor(
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private loadingService: LoadingService,
    private documentService: DocumentService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    
    const serviceId = this.route.snapshot.params['service_id'];
    console.log(serviceId);
    this.service_id = Number(serviceId)

//     this.service = {
//       "id": 1,
//       "name": "Kiểm tra kết quả học tập",
//       "type": "online, offline",
//       "time_handle": "5 ngày",
//       "description": "<h2>Kiểm tra kết quả học tập</h2><p class=\"ql-align-justify\"><strong>HỒ SƠ, THỦ TỤC</strong></p><p class=\"ql-align-justify\">1. Hồ sơ, thủ tục</p><p class=\"ql-align-justify\">Đơn đề nghị kiểm tra kết quả học tập (mẫu số 4, Phụ lục II; lấy tại Bộ phận một cửa; hoặc có thể tải file mềm từ cổng thông tin điện tử của Nhà trường, mục Bộ phận một cửa; điền thông tin và có đầy đủ chữ ký của các bên liên quan trừ các đơn vị trong Trường; trong đơn phải ghi rõ tình huống: đi thi chưa có điểm, đề nghị kiểm tra lại kết quả chấm thi...; ghi rõ tình trạng điểm, số báo danh, ca thi, ngày thi, đợt thi để Nhà trường kiểm tra, xử lý).</p><p class=\"ql-align-justify\"><strong>THỜI GIAN GIẢI QUYẾT</strong></p><p class=\"ql-align-justify\">2. Quy trình giải quyết</p><p class=\"ql-align-justify\">- Nộp hồ sơ tại Bộ phận một cửa, nhận lại giấy hẹn.</p><p class=\"ql-align-justify\">- Bộ phận một cửa kiểm tra và chuyển hồ sơ cho đơn vị chủ trì (Phòng ĐBCLGD hoặc Phòng Đào tạo Đại học tùy theo nội dung cần kiểm tra)</p><p class=\"ql-align-justify\">- Đơn vị chủ trì phối hợp với khoa chuyên môn để xử lý và trả kết quả qua email cho sinh viên và cho Bộ phận một cửa.</p><p class=\"ql-align-justify\">3. Thời gian giải quyết: 5 ngày làm việc kể từ khi nhận đơn.</p><p><br></p>",
//       "created_at": "2024-03-27T02:25:29.378Z",
//       "updated_at": "2024-03-27T02:25:29.378Z",
//       "attributeFormServices": [
//           {
//               "id": 6,
//               "name": "Lí do",
//               "type": "Checkbox",
//               "created_at": "2024-03-27T02:25:29.555Z",
//               "updated_at": "2024-03-27T02:25:29.555Z",
//               "attributeFormEnums": [
//                   {
//                       "id": 1,
//                       "name": " Điểm trung bình học kỳ bị sai ",
//                       "created_at": "2024-03-27T02:25:29.596Z",
//                       "updated_at": "2024-03-27T02:25:29.596Z"
//                   },
//                   {
//                       "id": 2,
//                       "name": "Chưa cập nhật, không thấy điểm học phần ",
//                       "created_at": "2024-03-27T02:25:29.597Z",
//                       "updated_at": "2024-03-27T02:25:29.597Z"
//                   },
//                   {
//                       "id": 3,
//                       "name": " Điểm trung bình tích lũy bị sai ",
//                       "created_at": "2024-03-27T02:25:29.598Z",
//                       "updated_at": "2024-03-27T02:25:29.598Z"
//                   }
//               ]
//           },
//           {
//               "id": 26,
//               "name": "Giới tính",
//               "type": "Select",
//               "created_at": null,
//               "updated_at": "2024-04-19T02:53:40.213Z",
//               "attributeFormEnums": [
//                   {
//                       "id": 5,
//                       "name": "Nam",
//                       "created_at": null,
//                       "updated_at": null
//                   },
//                   {
//                       "id": 6,
//                       "name": "Nữ",
//                       "created_at": null,
//                       "updated_at": null
//                   }
//               ]
//           },
//           {
//               "id": 1,
//               "name": "Họ tên sinh viên",
//               "type": "Input",
//               "created_at": "2024-03-27T02:25:29.441Z",
//               "updated_at": "2024-03-27T02:25:29.441Z",
//               "attributeFormEnums": []
//           },
//           {
//               "id": 2,
//               "name": "Ngày sinh",
//               "type": "Input",
//               "created_at": "2024-03-27T02:25:29.458Z",
//               "updated_at": "2024-03-27T02:25:29.458Z",
//               "attributeFormEnums": []
//           },
//           {
//               "id": 3,
//               "name": "Mã sinh viên",
//               "type": "Input",
//               "created_at": "2024-03-27T02:25:29.479Z",
//               "updated_at": "2024-03-27T02:25:29.479Z",
//               "attributeFormEnums": []
//           },
//           {
//               "id": 4,
//               "name": "Số điện thoại",
//               "type": "Input",
//               "created_at": "2024-03-27T02:25:29.513Z",
//               "updated_at": "2024-03-27T02:25:29.513Z",
//               "attributeFormEnums": []
//           },
//           {
//               "id": 5,
//               "name": "Lớp quản lí sinh viên",
//               "type": "Input",
//               "created_at": "2024-03-27T02:25:29.527Z",
//               "updated_at": "2024-03-27T02:25:29.527Z",
//               "attributeFormEnums": []
//           },
//           {
//               "id": 7,
//               "name": "Học kì",
//               "type": "Input",
//               "created_at": "2024-03-27T02:25:29.597Z",
//               "updated_at": "2024-03-27T02:25:29.597Z",
//               "attributeFormEnums": []
//           },
//           {
//               "id": 8,
//               "name": "Lần thi (nếu có)",
//               "type": "Input",
//               "created_at": "2024-03-27T02:25:29.620Z",
//               "updated_at": "2024-03-27T02:25:29.620Z",
//               "attributeFormEnums": []
//           },
//           {
//               "id": 9,
//               "name": "Năm học",
//               "type": "Input",
//               "created_at": "2024-03-27T02:25:29.634Z",
//               "updated_at": "2024-03-27T02:25:29.634Z",
//               "attributeFormEnums": []
//           },
//           {
//               "id": 10,
//               "name": "Tên học phần/Mã học phần",
//               "type": "Input",
//               "created_at": "2024-03-27T02:25:29.649Z",
//               "updated_at": "2024-03-27T02:25:29.649Z",
//               "attributeFormEnums": []
//           },
//           {
//               "id": 11,
//               "name": "Đã khảo thí/Chưa khảo thí",
//               "type": "Input",
//               "created_at": "2024-03-27T02:25:29.662Z",
//               "updated_at": "2024-03-27T02:25:29.662Z",
//               "attributeFormEnums": []
//           },
//           {
//               "id": 12,
//               "name": "Tình trạng điểm",
//               "type": "Input",
//               "created_at": "2024-03-27T02:25:29.674Z",
//               "updated_at": "2024-03-27T02:25:29.674Z",
//               "attributeFormEnums": []
//           },
//           {
//               "id": 13,
//               "name": "Lý do khác",
//               "type": "Input",
//               "created_at": "2024-03-27T02:25:29.683Z",
//               "updated_at": "2024-03-27T02:25:29.683Z",
//               "attributeFormEnums": []
//           }
//       ]
//   }

    this.onLoadData();

  }

  onLoadData(){
    this.serviceService.getOneById(Number(this.service_id)).subscribe({
        next: (data) => {
            console.log(data);
            this.service = data;
            
        },

        error: (err) => {
            console.log(err);
            
        }
    })
  }

   // Hàm để xử lý sự kiện khi checkbox được chọn hoặc bỏ chọn
   handleCheckboxChange(event: any, attributeId: number, enumId: number): void {
    console.log(enumId);
    
    if (event.target.checked) {

        console.log('check :');
        
        console.log(enumId);
        
      // Nếu checkbox được chọn, thêm giá trị vào mảng selectedCheckboxValues
      this.selectedCheckboxValues.push(enumId);
    } else {
      // Nếu checkbox bị bỏ chọn, loại bỏ giá trị khỏi mảng selectedCheckboxValues
      const index = this.selectedCheckboxValues.indexOf(enumId);
      if (index !== -1) {
        this.selectedCheckboxValues.splice(index, 1);
      }
    }
  }

  // Hàm để xử lý sự kiện input và cập nhật giá trị
  handleInput(event: any, attributeId: number): void {
    if (event.target instanceof HTMLInputElement) {
      this.updateAttributeValue(attributeId, event.target.value);
    }
  }

  // Hàm để cập nhật giá trị thuộc tính
  updateAttributeValue(attributeId: number, value: any): void {
    this.attributeValues[attributeId] = value;
  }

  getCheckBoxId():any{
    let checkBoxId = null;
    let attributeFormServices:any[] = [...this.service.attributeFormServices];
    // console.log(attributeFormServices);
    // console.log(attributeFormServices.length);
    
    for (let index = 0; index < attributeFormServices.length; index++) {
        // console.log(attributeFormServices[index].id);
        
        if(attributeFormServices[index].type == 'Checkbox'){
            checkBoxId = attributeFormServices[index].id;
        }
        
    }
    return checkBoxId;
  }


    convertData(inputData: any): any[] {
        const outputData: any[] = [];

        for (const key in inputData) {
            if (inputData.hasOwnProperty(key)) {
                outputData.push({ [key.toString()]: inputData[key]});
            }
        }

        return outputData;
}


  getFormData(): void {
    console.log(this.attributeValues); // In thông tin đã nhập ra console
    console.log(this.selectedCheckboxValues);

    // kiểm tra checkbox có dữ liệu không
    const checkboxId = this.getCheckBoxId();
    console.log(checkboxId);

    if(checkboxId){
        this.attributeValues[checkboxId] = this.selectedCheckboxValues;
    }

    console.log(this.attributeValues);
    const dataConverted = this.convertData(this.attributeValues);
    // console.log(dataConverted.length);
    // console.log(dataConverted);
    
    if(dataConverted.length < 1){
      
      return this.notificationService.toastError('Vui lòng nhập đầy đủ thông tin!','Thông báo ⚠️');
    }
    // console.log("k vo");
    // return;
    
    const dataSaved = {
        "service_id": this.service_id,
        "attribute":dataConverted
    }
    this.loadingService.showLoading();
    this.documentService.createDocument(dataSaved).subscribe({
        next: (data) => {
            console.log(data);
            setTimeout(() => {
                this.loadingService.hideLoading();
                this.notificationService.toastSuccess("Đăng ký thành công!","Thông báo")
                window.location.href = '/'
            }, 3000);
        },
        error: (err) => {
            console.log(err);
            setTimeout(() => {
                this.loadingService.hideLoading();
            }, 3000);
        }
    })
    
    // Ở đây, bạn có thể thực hiện các xử lý khác với dữ liệu đã nhập
  }

 
}
