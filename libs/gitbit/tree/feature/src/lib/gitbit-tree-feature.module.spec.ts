import { async, TestBed } from '@angular/core/testing';
import { GitbitTreeFeatureModule } from './gitbit-tree-feature.module';

describe('GitbitTreeFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitTreeFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitTreeFeatureModule).toBeDefined();
  });
});
