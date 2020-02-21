import { async, TestBed } from '@angular/core/testing';
import { GitbitProjectsLibraryModule } from './gitbit-projects-library.module';

describe('GitbitProjectsLibraryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitProjectsLibraryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitProjectsLibraryModule).toBeDefined();
  });
});
