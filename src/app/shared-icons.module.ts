import { NgModule } from '@angular/core';
import { LucideWrench, LucideExternalLink, LucideArrowUpRight, LucideBookOpen, LucideInfo, LucideMenu, LucideX} from '@lucide/angular';

@NgModule({
  imports: [LucideWrench, LucideExternalLink, LucideArrowUpRight, LucideBookOpen, LucideInfo, LucideMenu, LucideX],
  exports: [LucideWrench, LucideExternalLink, LucideArrowUpRight, LucideBookOpen, LucideInfo, LucideMenu, LucideX]
})
export class SharedIconsModule { }
