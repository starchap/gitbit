import { async, TestBed } from '@angular/core/testing';
import { GitbitDashboardFeatureModule } from './gitbit-dashboard-feature.module';

describe('GitbitDashboardFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitDashboardFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitDashboardFeatureModule).toBeDefined();
  });
});
