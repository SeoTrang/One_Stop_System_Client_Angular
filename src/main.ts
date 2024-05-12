import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

import { AppModule } from './app/app.module';
import {
  register
  as 
  registerSwiperElements
} from 'swiper/element/bundle';
registerSwiperElements();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
