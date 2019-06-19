import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { LoginComponent } from './user/login/login.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    UserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:"login",component:LoginComponent,pathMatch:"full"},
        {path:"",redirectTo:"login",pathMatch:"full"},
        {path:"*",component:LoginComponent},
        {path:"**",component:LoginComponent}
      ]),
    ],
    providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
