import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import 'bootstrap/dist/css/bootstrap.min.css';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
