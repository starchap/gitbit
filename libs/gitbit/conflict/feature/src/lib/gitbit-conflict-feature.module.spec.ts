import { async, TestBed } from '@angular/core/testing';
import { GitbitConflictFeatureModule } from './gitbit-conflict-feature.module';

describe('GitbitConflictFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitConflictFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitConflictFeatureModule).toBeDefined();
  });
});
