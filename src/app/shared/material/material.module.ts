import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDialogModule,
        MatTableModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatProgressSpinnerModule,
    ]
})
export class MaterialModule { }