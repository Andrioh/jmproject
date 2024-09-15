import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  // Icon

  private alterIconSubject = new BehaviorSubject<boolean>(false);
  currentIconStatus = this.alterIconSubject.asObservable();

  GetAlterIcon() {
    return this.alterIconSubject.getValue();
  }

  ModAlterIcon() {
    const currentValue = this.GetAlterIcon();
    this.alterIconSubject.next(!currentValue);
  }

  // Background

  private BgColor = new BehaviorSubject<string>("#FFFFFF")
  CurrentBgColor = this.BgColor.asObservable()

  AlterColor(){
    let CurrentValue = this.BgColor.getValue();
    let NewColor = CurrentValue === "#FFFFFF" ? "#E5E7EB" : "#FFFFFF"
    this.BgColor.next(NewColor)
  }
}
