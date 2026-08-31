import { NgModule } from '@angular/core';
import { LucideWrench, LucideExternalLink, LucideArrowUpRight, LucideBookOpen, LucideInfo} from '@lucide/angular';

@NgModule({
  imports: [LucideWrench, LucideExternalLink, LucideArrowUpRight, LucideBookOpen, LucideInfo],
  exports: [LucideWrench, LucideExternalLink, LucideArrowUpRight, LucideBookOpen, LucideInfo]
})
export class SharedIconsModule { }
