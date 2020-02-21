import { async, TestBed } from '@angular/core/testing';
import { GitbitTerminalLibraryModule } from './gitbit-terminal-library.module';

describe('GitbitTerminalLibraryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitTerminalLibraryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitTerminalLibraryModule).toBeDefined();
  });
});
