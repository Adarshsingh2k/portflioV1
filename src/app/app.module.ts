import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutSectionComponent } from './blocks/linkedin/about-section/about-section.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { NavbarComponent } from './blocks/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeetGFGComponent } from './blocks/leet-gfg/leet-gfg.component';
import { NgChartsModule } from 'ng2-charts';
import { SkillsComponent } from './blocks/skills/skills.component';
import { ConnectComponent } from './blocks/connect/connect.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutSectionComponent,
    NavbarComponent,
    LeetGFGComponent,
    SkillsComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
