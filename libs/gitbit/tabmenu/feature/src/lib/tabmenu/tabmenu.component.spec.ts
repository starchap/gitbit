import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabmenuComponent } from './tabmenu.component';
import { MatBadgeModule, MatIconModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TabmenuComponent', () => {
  let component: TabmenuComponent;
  let fixture: ComponentFixture<TabmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmenuComponent ],
      imports: [
        MatIconModule,
        MatTabsModule,
        MatToolbarModule,
        MatBadgeModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
