import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {

  @Input() manager_details:any;
  @Output() valueChange = new EventEmitter();
  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();
  color = '';
  updatedstockvalue: number;

  area_name:string;
  pin_code:number;
  public counter = 0;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.manager_details.name)
    // console.log(this.manager_details.age)
    this.childDetails();
  }

  showDetails(){
    console.log(this.manager_details.name)
    console.log(this.manager_details.age)
    console.log(this.manager_details.mobile)
  }

  childDetails(){
    this.area_name = "Ambedkar Street";
    this.pin_code =  777777;
  }

  valueChanged() { // You can give any function name
      this.counter = this.counter + 1;
      this.valueChange.emit(this.counter);
  }

  stockValueChanged() {
    this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue });
    this.updatedstockvalue = null;
  }

  ngOnChanges() {
      if (this.stock > 10) {
          this.color = 'green';
      } else {
          this.color = 'red';
      }
      console.log(this.color)
  }

}
