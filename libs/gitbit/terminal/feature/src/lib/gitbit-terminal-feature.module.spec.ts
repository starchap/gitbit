import { async, TestBed } from '@angular/core/testing';
import { GitbitTerminalFeatureModule } from './gitbit-terminal-feature.module';

describe('GitbitTerminalFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitTerminalFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitTerminalFeatureModule).toBeDefined();
  });
});
