import { async, TestBed } from '@angular/core/testing';
import { GitbitProjectsFeatureModule } from './gitbit-projects-feature.module';

describe('GitbitProjectsFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitProjectsFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitProjectsFeatureModule).toBeDefined();
  });
});
