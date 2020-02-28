import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryBranchListItemComponent } from './repository-branch-list-item.component';

describe('RepositoryBranchListItemComponent', () => {
  let component: RepositoryBranchListItemComponent;
  let fixture: ComponentFixture<RepositoryBranchListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryBranchListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryBranchListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
