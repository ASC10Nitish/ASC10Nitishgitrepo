import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PracticeAppComponent } from './app/practice-app/practice-app.component';

bootstrapApplication(PracticeAppComponent, appConfig)
  .catch((err) => console.error(err));
