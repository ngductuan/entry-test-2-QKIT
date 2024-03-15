import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-com-1-b-a',
  templateUrl: './com-1-b-a.component.html',
  styleUrl: './com-1-b-a.component.scss'
})
export class Com1BAComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
  }

  ngOnInit(): void {
    console.log('on init');
  }

  ngDoCheck(): void {
    console.log('do check');
  }

  ngAfterContentInit(): void {
    console.log('after content init');
  }
  
  ngAfterContentChecked(): void {
    console.log('after content checked');
  }
  
  ngAfterViewInit(): void {
    console.log('after view init');
  }
  ngAfterViewChecked(): void {
    console.log('after view checked');
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }
  
}
