import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInput!: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput!: ElementRef;

  @Output('addedItems') addedItems = new EventEmitter<Ingredient>();

  constructor() {
  }
  ngOnInit() {
  }

  onAddClick() {
    const ingredient = new Ingredient(this.nameInput.nativeElement.value, this.nameInput.nativeElement.value);
    this.addedItems.emit(ingredient);
  }
}
