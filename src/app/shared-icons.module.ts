import { NgModule } from '@angular/core';
import { LucideWrench, LucideExternalLink, LucideArrowUpRight, LucideBookOpen, LucideInfo, LucideMenu, LucideX, LucideLoaderCircle} from '@lucide/angular';

@NgModule({
  imports: [LucideWrench, LucideExternalLink, LucideArrowUpRight, LucideBookOpen, LucideInfo, LucideMenu, LucideX, LucideLoaderCircle],
  exports: [LucideWrench, LucideExternalLink, LucideArrowUpRight, LucideBookOpen, LucideInfo, LucideMenu, LucideX, LucideLoaderCircle]
})
export class SharedIconsModule { }
