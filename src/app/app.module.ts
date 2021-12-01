import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AnimatedTextComponent } from './animated-text/animated-text.component';
import { SkillsComponent } from './skills/skills.component';
import { PreviousWorkComponent } from './previous-work/previous-work.component';
import { SlantedSectionComponent } from './layout/slanted-section/slanted-section.component';
import { AnchorArrowComponent } from './layout/anchor-arrow/anchor-arrow.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AnimatedTextComponent,
    SkillsComponent,
    PreviousWorkComponent,
    SlantedSectionComponent,
    AnchorArrowComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
