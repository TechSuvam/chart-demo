import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private formDataSource = new BehaviorSubject<any>(null);
  currentFormData = this.formDataSource.asObservable();

  updateFormData(data: any) {
    this.formDataSource.next(data);
  }
}
