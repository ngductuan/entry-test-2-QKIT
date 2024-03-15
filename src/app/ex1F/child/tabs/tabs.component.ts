import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @Input() linkArr: string[] = []
  @Input() linkTemplate: TemplateRef<any>
}
