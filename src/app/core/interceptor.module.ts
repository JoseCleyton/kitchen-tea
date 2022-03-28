import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  constructor(
    private _ngxService: NgxUiLoaderService,
    // private store$: Store<AppState>,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._ngxService.start();
    if (localStorage.getItem('token') === null) {
      return next.handle(req).pipe(
        catchError((err: HttpErrorResponse) => {
          this._ngxService.stop();
          if (err.status.toString().includes('4')) {
            // this.store$.dispatch(
            //   new fromAlert.actions.AddAlert({
            //     type: 'error',
            //     message: 'Credenciais Inválidas',
            //   })
            // );
          }
          if (err.status.toString().includes('5')) {
            // this.store$.dispatch(
            //   new fromAlert.actions.AddAlert({
            //     type: 'error',
            //     message: 'Erro Interno. Tente Novamente',
            //   })
            // );
          }
          return throwError(err);
        }),
        finalize(() => {
          this._ngxService.stop();
        })
      );
    } else {
      const dupReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      return next.handle(dupReq).pipe(
        catchError((err: HttpErrorResponse) => {
          this._ngxService.stop();
          if (err.status === 403) {
            // this.store$.dispatch(
            //   new fromAlert.actions.AddAlert({
            //     type: 'error',
            //     message: 'Token expirado',
            //   })
            // );
            localStorage.removeItem('login');
            localStorage.removeItem('token');
            localStorage.removeItem('isAdmin');
            this.router.navigateByUrl('/login');
          }

          if (err.status === 404) {
            // this.store$.dispatch(
            //   new fromAlert.actions.AddAlert({
            //     type: 'error',
            //     message: err.error.message,
            //   })
            // );
          }
          return throwError(err);
        }),
        finalize(() => {
          this._ngxService.stop();
        })
      );
    }
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})
export class Interceptor {}
