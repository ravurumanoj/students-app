import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MyRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UsersComponent } from './users/users.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WinnersComponent } from './winners/winners.component';
import { ToppersComponent } from './toppers/toppers.component';
import { MatListModule } from '@angular/material/list';

import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    UsersComponent,
    WinnersComponent,
    ToppersComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    MyRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



