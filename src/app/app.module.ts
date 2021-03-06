import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";

import { HttpClientModule } from "@angular/common/http";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";

import { EmailComposer } from '@ionic-native/email-composer/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    

  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
