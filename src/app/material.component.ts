import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule],

})
export class MaterialComponent { }