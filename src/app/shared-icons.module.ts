import { NgModule } from '@angular/core';
import { LucideWrench, LucideExternalLink} from '@lucide/angular';

@NgModule({
  imports: [LucideWrench, LucideExternalLink],
  exports: [LucideWrench, LucideExternalLink]
})
export class SharedIconsModule { }
