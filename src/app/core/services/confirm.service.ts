// ConfirmService
import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private confirmationService: ConfirmationService) { }

  confirmMessage(title: string, content: string, acceptLabel: string, rejectLabel: string, acceptCallback: () => void, rejectCallback?: () => void) {
    this.confirmationService.confirm({
      message: content,
      header: title,
      acceptLabel: acceptLabel,
      rejectLabel: rejectLabel,
      accept: acceptCallback,
      reject: rejectCallback || (() => {})
    });
  }

  confirmDelete(title: string, content: string, acceptLabel: string, rejectLabel: string, acceptCallback: () => void, rejectCallback?: () => void) {
    this.confirmationService.confirm({
      message: content,
      header: title,
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-success p-button-text",
      acceptIcon: "pi pi-check mr-2",
      rejectIcon: "pi pi-times mr-2",
      acceptLabel: acceptLabel,
      rejectLabel: rejectLabel,
      
      accept: acceptCallback,
      reject: rejectCallback || (() => {})
    });
  }
}
