import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { OilsComponent } from './oils/oils.component';
import { OilDetailComponent } from './oil-detail/oil-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
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
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule,
    AppRoutingModule,
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
