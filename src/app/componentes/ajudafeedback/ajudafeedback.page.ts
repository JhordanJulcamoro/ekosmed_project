import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-ajudafeedback',
  templateUrl: './ajudafeedback.page.html',
  styleUrls: ['./ajudafeedback.page.scss'],
})
export class AjudafeedbackPage implements OnInit {

  constructor(public emailComposer:EmailComposer){}
    
   sendEmail(){
    let email = {
      to: 'ekosmed@gmail.com',
      cc: 'ekosmed@gmail.com',
      subject: 'Ajuda Com EkosMed',
      body: 'Solicito ajuda com EkosMed!',
      isHtml: true
    };

    this.emailComposer.open(email);

   }
   


  ngOnInit() {
  }

}
