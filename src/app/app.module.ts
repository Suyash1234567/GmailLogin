import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from 'angular-6-social-login';
// import { TwitterLoginProvider } from   FOR REFRENCE-->(https://www.sitepoint.com/building-twitter-app-using-angular/)
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("264241905387-cddgrtv6pflb68jad05o0b7nvmtj8n1s.apps.googleusercontent.com")
        },
        // {
        //   id: TwitterLoginProvider.PROVIDER_ID,
        //   provider: new TwitterLoginProvider("Your-Twitter-Client-Id")   FOR GITHUB-->(https://github.com/sitepoint-editors/twitter-angular-client)
        // }
      ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent
  ],
  imports: [
    SocialLoginModule,
    BrowserModule
  ],
  providers: 
  [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
