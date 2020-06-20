import { Component, OnInit, HostListener } from '@angular/core';
import { map } from "rxjs/operators";
import { CartService } from "./../../../core/services/cart.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$:Observable<number>
  installEvent = null;

  @HostListener('window: beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event){
    event.preventDefault();
    this.installEvent = event;
  }

  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    )
  }

  ngOnInit() {
  }

  installByUser(){
    if(this.installEvent){
      this.installEvent.prompt();
      this.installEvent.userChose
      .then(rta=>{
        
      })
    }
  }

}
