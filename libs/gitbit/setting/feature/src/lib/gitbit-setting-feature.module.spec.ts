import { async, TestBed } from '@angular/core/testing';
import { GitbitSettingFeatureModule } from './gitbit-setting-feature.module';

describe('GitbitSettingFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitSettingFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitSettingFeatureModule).toBeDefined();
  });
});
