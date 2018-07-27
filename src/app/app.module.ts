import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFirestore} from 'angularfire2/firestore';
// import { firebaseConfig } from '../environments/firebase.config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassComponent } from './components/pass/pass.component';
import { HeaderComponent } from './shell/header/header.component';
import { NavComponent } from './shell/nav/nav.component';
import { CheckComponent } from './components/check/check.component';
import { CustomComponent } from './components/custom/custom.component';
import { PnfComponent } from './components/pnf/pnf.component';


@NgModule({
  declarations: [
    AppComponent,
    PassComponent,
    HeaderComponent,
    NavComponent,
    CheckComponent,
    CustomComponent,
    PnfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
