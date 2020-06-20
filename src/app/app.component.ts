import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AngularFireMessaging } from "@angular/fire/messaging";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

interface Token{
  token: string;
}

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private tokensCollections: AngularFirestoreCollection<any>

  constructor(
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging,
    private dataBase: AngularFirestore)
  {
    this.tokensCollections = this.dataBase.collection<Token>('tokens')
  }

  ngOnInit(){
    this.updatePWA();
    this.requestPermission();
    this.listenNotifications();
  }

  updatePWA(){
    this.swUpdate.available.subscribe(value =>{
      window.location.reload();
    });
  }

  requestPermission(){
    this.messaging.requestToken
    .subscribe(token =>{
      this.tokensCollections.add({token})
    })
  }

  listenNotifications(){
    this.messaging.messages
    .subscribe(message=>{

    })
  }


  
}
