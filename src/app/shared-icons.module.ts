import { NgModule } from '@angular/core';
import { LucideWrench, LucideExternalLink, LucideArrowUpRight, LucideBookOpen} from '@lucide/angular';

@NgModule({
  imports: [LucideWrench, LucideExternalLink, LucideArrowUpRight, LucideBookOpen],
  exports: [LucideWrench, LucideExternalLink, LucideArrowUpRight, LucideBookOpen]
})
export class SharedIconsModule { }
