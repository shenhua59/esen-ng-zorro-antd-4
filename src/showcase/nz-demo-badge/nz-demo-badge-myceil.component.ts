import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-badge-myceil',
  template: `
    <nz-badge [nzCount]="99" [nzOverflowCount]="10">
      <ng-template #content>
        <a class="head-example"></a>
      </ng-template>
    </nz-badge>
    <nz-badge [nzCount]="1000" [nzOverflowCount]="99">
      <ng-template #content>
        <a class="head-example"></a>
      </ng-template>
    </nz-badge>
    <nz-badge [nzCount]="200" [nzOverflowCount]="10">
      <ng-template #content>
        <a class="head-example"></a>
      </ng-template>
    </nz-badge>
    <nz-badge [nzCount]="10000" [nzOverflowCount]="999">
      <ng-template #content>
        <a class="head-example"></a>
      </ng-template>
    </nz-badge>
  `,
  styles  : [ `
    :host ::ng-deep .ant-badge {
      margin-right: 16px;
    }

    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 6px;
      background: #eee;
      display: inline-block;
    }
  ` ]
})
export class NzDemoBadgeMyCeilComponent { }
