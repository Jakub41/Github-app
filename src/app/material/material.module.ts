import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdSidenavModule, MdCardModule, MdInputModule, MdListModule, MdTooltipModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdCardModule,
    MdInputModule,
    MdTooltipModule
  ],
  exports: [
    MdToolbarModule,
    MdSidenavModule,
    MdCardModule,
    MdInputModule,
    MdTooltipModule
  ],
  declarations: []
})
export class MaterialModule { }
