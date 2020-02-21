import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTerminalComponent } from './small-terminal.component';

describe('SmallTerminalComponent', () => {
  let component: SmallTerminalComponent;
  let fixture: ComponentFixture<SmallTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
