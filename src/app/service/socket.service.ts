import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;
  constructor() { 
    this.socket = io('https://chatter-box-socket.onrender.com');
  }

  sendMessage(message: string) {
    this.socket.emit('chat message', message);
  }

  
}
