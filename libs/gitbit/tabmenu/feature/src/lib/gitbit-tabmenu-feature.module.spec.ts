import { async, TestBed } from '@angular/core/testing';
import { GitbitTabmenuFeatureModule } from './gitbit-tabmenu-feature.module';

describe('GitbitTabmenuFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitTabmenuFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitTabmenuFeatureModule).toBeDefined();
  });
});
