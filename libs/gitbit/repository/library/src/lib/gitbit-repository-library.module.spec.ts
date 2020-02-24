import { async, TestBed } from '@angular/core/testing';
import { GitbitRepositoryLibraryModule } from './gitbit-repository-library.module';

describe('GitbitRepositoryLibraryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GitbitRepositoryLibraryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GitbitRepositoryLibraryModule).toBeDefined();
  });
});
