import { async, TestBed } from '@angular/core/testing';
import { GitbitStashFeatureModule } from './gitbit-stash-feature.module';

describe('GitbitStashFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitStashFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitStashFeatureModule).toBeDefined();
  });
});
