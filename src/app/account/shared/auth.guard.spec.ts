import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        AuthGuard,
        {
          provide: ActivatedRouteSnapshot,
          useClass: MockActivatedRouteSnapshot
        },
        {
          provide: RouterStateSnapshot,
          useClass: MockRouterStateSnapshot
        }
    ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate route', () => {
    window.localStorage.setItem('token', 'user-token');

    const route = TestBed.inject(ActivatedRouteSnapshot);
    const state = TestBed.inject(RouterStateSnapshot);
    
    expect(guard.canActivate(route, state)).toBe(true);
  });

  it('should not activate route', () => {
    window.localStorage.removeItem('token');

    const route = TestBed.inject(ActivatedRouteSnapshot);
    const state = TestBed.inject(RouterStateSnapshot);
    
    expect(guard.canActivate(route, state)).toBe(false);
  });
});

class MockActivatedRouteSnapshot {
  private _data: any;
  get data(){
     return this._data;
  }
}

class MockRouterStateSnapshot {
  private _data: any;
  get data(){
     return this._data;
  }
}
