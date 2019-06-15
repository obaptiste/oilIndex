import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OilsComponent } from './oils/oils.component';
import { OilDetailComponent } from './oil-detail/oil-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OilService } from './oil.service';
import { OilSearchComponent }  from './oil-search/oil-search.component';
import 'rxjs/Rx';

@NgModule({
  declarations: [
    AppComponent,
    OilsComponent,
    OilDetailComponent,
    MessagesComponent,
    DashboardComponent,
    OilSearchComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

  ],
  providers: [
    OilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
