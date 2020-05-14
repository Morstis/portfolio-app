import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { KeySkillBtnsComponent } from './key-skill-btns/key-skill-btns.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDataService } from './services/project-data.service';
import { TagsService } from './services/tags.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsService } from './services/skills.service';
import { GenericModule } from './generic/generic.module';
import { GenericTagService } from './generic/services/generic-tag.service';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    KeySkillBtnsComponent,
    ProjectDetailsComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    GenericModule,
    ModalModule.forRoot()
  ],
  providers: [
    ProjectDataService,
    TagsService,
    SkillsService,
    GenericTagService,
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
