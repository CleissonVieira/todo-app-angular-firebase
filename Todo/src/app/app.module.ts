import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AllComponent } from './pages/all/all.component';
import { TodayComponent } from './pages/today/today.component';
import { TomorrowComponent } from './pages/tomorrow/tomorrow.component';
import { NewComponent } from './pages/new/new.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// import { provideAuth, getAuth } from '@angular/fire/auth'; // ng add @angular/fire
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app'; // ng add @angular/fire

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ButtonComponent,
    LoginComponent,
    UserCardComponent,
    TabsComponent,
    TodoListComponent,
    AllComponent,
    TodayComponent,
    TomorrowComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)), // ng add @angular/fire
    // provideAuth(() => getAuth()) // ng add @angular/fire
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
