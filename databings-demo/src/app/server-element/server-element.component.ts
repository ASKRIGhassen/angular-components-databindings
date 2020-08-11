import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Native , None
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() element: { type: string, name: string, content: string };
  @ContentChild('contentParagraph', {static: true}) contentParagraph: ElementRef;
  constructor() {
    console.log('constructor called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngAfterContentInit(): void {
    console.log('aftercontentinit called !');
    console.log('content is :' + this.contentParagraph.nativeElement.textContent);
  }

}
