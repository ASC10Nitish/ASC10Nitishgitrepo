import { bootstrapApplication } from '@angular/platform-browser';
import { PracticeAppComponent } from './app/practice-app/practice-app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(PracticeAppComponent, config);

export default bootstrap;
