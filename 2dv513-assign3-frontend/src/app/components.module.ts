import { NgModule } from '@angular/core';
import { InputFileComponent } from './shared/components/input-file/input-file.component';
import { MaterialModule } from './material.module';




@NgModule({
  declarations: [
    InputFileComponent,
  ],
  imports: [
    MaterialModule,
  ],

  exports: [
    InputFileComponent
  ]
})
export class ComponentsModule {
}
