import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryBranchListComponent } from './repository-branch-list.component';

describe('RepositoryBranchListComponent', () => {
  let component: RepositoryBranchListComponent;
  let fixture: ComponentFixture<RepositoryBranchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryBranchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryBranchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
