import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBt0m1C4tnb2fTdA81VKdsrfiIc0DhSAQ0'
    }),
    NgZorroAntdModule.forRoot()
  ],
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, MenuComponent, FooterComponent, SkillsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
