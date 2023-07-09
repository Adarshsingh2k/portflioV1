import { Component } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {
ngOnInit(){
  
}
redirectToEmail(): void {
  const recipientId = 'recipient@example.com'; // Replace with your recipient email ID
  window.location.href = `mailto:${recipientId}`;
}
}
