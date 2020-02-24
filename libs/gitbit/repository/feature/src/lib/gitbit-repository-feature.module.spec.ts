import { async, TestBed } from '@angular/core/testing';
import { GitbitRepositoryFeatureModule } from './gitbit-repository-feature.module';

describe('GitbitRepositoryFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitRepositoryFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitRepositoryFeatureModule).toBeDefined();
  });
});
