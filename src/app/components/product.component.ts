import {
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChanges, 
    OnInit, 
    DoCheck, 
    OnDestroy} from '@angular/core'
import {Product} from '../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: [ './product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy{
    
    // ngOnChanges(changes: SimpleChanges): void {
    //     //Detecta el estado anterior y el nuevo.
    // }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }

    ngDoCheck(): void {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        
    }

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    addCart(){
        console.log('Agregado.');
        this.productClicked.emit(this.product.id)
    }
}