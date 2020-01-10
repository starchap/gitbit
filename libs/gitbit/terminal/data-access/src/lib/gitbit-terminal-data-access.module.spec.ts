import { async, TestBed } from '@angular/core/testing';
import { GitbitTerminalDataAccessModule } from './gitbit-terminal-data-access.module';

describe('GitbitTerminalDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitTerminalDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitTerminalDataAccessModule).toBeDefined();
  });
});
