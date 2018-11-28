import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: String[];

  constructor() {
    this.messages = [];
  }

  add(message: String) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
