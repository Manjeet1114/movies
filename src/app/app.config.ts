import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router'; // ✅ Import this
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes) // ✅ This now works
  ]
};