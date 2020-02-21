import { async, TestBed } from '@angular/core/testing';
import { GitbitMergeFeatureModule } from './gitbit-merge-feature.module';

describe('GitbitMergeFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitMergeFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitMergeFeatureModule).toBeDefined();
  });
});
