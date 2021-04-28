import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppComponent }   from './app.component';
import { NodeService } from './nodeservice';
import {TreeModule} from 'primeng/tree';
import {ButtonModule} from 'primeng/button';
import { TreeYComponent } from './components/tree-y/tree-y.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    RadioButtonModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    InputTextModule
    
  ],
  providers: [NodeService],
  declarations: [ AppComponent ,TreeYComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
