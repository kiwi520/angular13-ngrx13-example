import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/effects/counter.effects';
import { TodoComponent } from './pages/todo/todo.component';
import {FormsModule} from "@angular/forms";
import {StoreRouterConnectingModule} from "@ngrx/router-store";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CounterEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
