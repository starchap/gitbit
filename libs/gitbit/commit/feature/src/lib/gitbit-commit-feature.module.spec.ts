import { async, TestBed } from '@angular/core/testing';
import { GitbitCommitFeatureModule } from './gitbit-commit-feature.module';

describe('GitbitCommitFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitCommitFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitCommitFeatureModule).toBeDefined();
  });
});
