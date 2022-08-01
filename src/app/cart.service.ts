import { Injectable } from '@angular/core';
import { Product } from './products';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  item: Product[] = [];
  constructor() { }
}
