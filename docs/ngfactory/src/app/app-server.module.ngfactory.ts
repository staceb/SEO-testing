/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../src/app/app-server.module';
import * as i2 from '../../../../src/app/app.component';
import * as i3 from './app.component.ngfactory';
import * as i4 from '@angular/http';
import * as i5 from '@angular/platform-server';
import * as i6 from '@angular/common/http';
import * as i7 from '@angular/common';
import * as i8 from '@angular/platform-browser';
import * as i9 from '@angular/animations/browser';
import * as i10 from '@angular/platform-browser/animations';
import * as i11 from '@angular/animations';
import * as i12 from '../../../../src/app/app.module';
export const AppServerModuleNgFactory:i0.NgModuleFactory<i1.AppServerModule> = i0.ɵcmf(i1.AppServerModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
          i0.ɵmpd(4608,i4.BrowserXhr,i5.ɵc,([] as any[])),i0.ɵmpd(4608,i4.ResponseOptions,
              i4.BaseResponseOptions,([] as any[])),i0.ɵmpd(4608,i4.XSRFStrategy,i5.ɵd,
              ([] as any[])),i0.ɵmpd(4608,i4.XHRBackend,i4.XHRBackend,[i4.BrowserXhr,
              i4.ResponseOptions,i4.XSRFStrategy]),i0.ɵmpd(4608,i4.RequestOptions,
              i4.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,i4.Http,i5.ɵe,[i4.XHRBackend,
              i4.RequestOptions]),i0.ɵmpd(4608,i6.HttpXsrfTokenExtractor,i6.ɵg,[i7.DOCUMENT,
              i0.PLATFORM_ID,i6.ɵe]),i0.ɵmpd(4608,i6.ɵh,i6.ɵh,[i6.HttpXsrfTokenExtractor,
              i6.ɵf]),i0.ɵmpd(5120,i6.HTTP_INTERCEPTORS,(p0_0:any) => {
            return [p0_0];
          },[i6.ɵh]),i0.ɵmpd(4608,i6.XhrFactory,i5.ɵc,([] as any[])),i0.ɵmpd(4608,
              i6.HttpXhrBackend,i6.HttpXhrBackend,[i6.XhrFactory]),i0.ɵmpd(6144,i6.HttpBackend,
              (null as any),[i6.HttpXhrBackend]),i0.ɵmpd(5120,i6.HttpHandler,i5.ɵf,
              [i6.HttpBackend,[2,i6.HTTP_INTERCEPTORS]]),i0.ɵmpd(4608,i6.HttpClient,
              i6.HttpClient,[i6.HttpHandler]),i0.ɵmpd(4608,i6.ɵd,i6.ɵd,([] as any[])),
          i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i7.NgLocalization,
              i7.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(4608,i0.Compiler,i0.Compiler,
              ([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,([] as any[])),
          i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),i0.ɵmpd(4608,i8.DomSanitizer,
              i8.ɵe,[i7.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i8.DomSanitizer]),
          i0.ɵmpd(4608,i8.HAMMER_GESTURE_CONFIG,i8.HammerGestureConfig,([] as any[])),
          i0.ɵmpd(5120,i8.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
            return [new i8.ɵDomEventsPlugin(p0_0),new i8.ɵKeyEventsPlugin(p1_0),new i8.ɵHammerGesturesPlugin(p2_0,
                p2_1)];
          },[i7.DOCUMENT,i7.DOCUMENT,i7.DOCUMENT,i8.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i8.EventManager,i8.EventManager,[i8.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i8.ɵDomSharedStylesHost,i8.ɵDomSharedStylesHost,[i7.DOCUMENT]),
          i0.ɵmpd(4608,i8.ɵDomRendererFactory2,i8.ɵDomRendererFactory2,[i8.EventManager,
              i8.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i5.ɵb,i5.ɵb,[i8.DOCUMENT,[2,i8.ɵTRANSITION_ID]]),
          i0.ɵmpd(6144,i8.ɵSharedStylesHost,(null as any),[i5.ɵb]),i0.ɵmpd(4608,i5.ɵServerRendererFactory2,
              i5.ɵServerRendererFactory2,[i0.NgZone,i8.DOCUMENT,i8.ɵSharedStylesHost]),
          i0.ɵmpd(4608,i9.AnimationDriver,i9.ɵNoopAnimationDriver,([] as any[])),i0.ɵmpd(5120,
              i9.ɵAnimationStyleNormalizer,i10.ɵd,([] as any[])),i0.ɵmpd(4608,i9.ɵAnimationEngine,
              i10.ɵb,[i9.AnimationDriver,i9.ɵAnimationStyleNormalizer]),i0.ɵmpd(5120,
              i0.RendererFactory2,i5.ɵa,[i5.ɵServerRendererFactory2,i9.ɵAnimationEngine,
                  i0.NgZone]),i0.ɵmpd(4352,i0.Testability,(null as any),([] as any[])),
          i0.ɵmpd(4608,i8.Meta,i8.Meta,[i7.DOCUMENT]),i0.ɵmpd(4608,i8.Title,i8.Title,
              [i7.DOCUMENT]),i0.ɵmpd(4608,i11.AnimationBuilder,i10.ɵBrowserAnimationBuilder,
              [i0.RendererFactory2,i8.DOCUMENT]),i0.ɵmpd(512,i4.HttpModule,i4.HttpModule,
              ([] as any[])),i0.ɵmpd(512,i6.HttpClientXsrfModule,i6.HttpClientXsrfModule,
              ([] as any[])),i0.ɵmpd(512,i6.HttpClientModule,i6.HttpClientModule,([] as any[])),
          i0.ɵmpd(512,i7.CommonModule,i7.CommonModule,([] as any[])),i0.ɵmpd(1024,
              i0.ErrorHandler,i8.ɵa,([] as any[])),i0.ɵmpd(256,i0.APP_ID,'blogist',
              ([] as any[])),i0.ɵmpd(2048,i8.ɵTRANSITION_ID,(null as any),[i0.APP_ID]),
          i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any,p1_1:any,p1_2:any) => {
            return [i8.ɵc(p0_0,p0_1),i8.ɵf(p1_0,p1_1,p1_2)];
          },[[2,i8.NgProbeToken],[2,i0.NgProbeToken],i8.ɵTRANSITION_ID,i7.DOCUMENT,
              i0.Injector]),i0.ɵmpd(512,i0.ApplicationInitStatus,i0.ApplicationInitStatus,
              [[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,i0.ɵe,[i0.NgZone,i0.ɵConsole,
              i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,i0.ApplicationInitStatus]),
          i0.ɵmpd(2048,i0.ApplicationRef,(null as any),[i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,
              i0.ApplicationModule,[i0.ApplicationRef]),i0.ɵmpd(512,i8.BrowserModule,
              i8.BrowserModule,[[3,i8.BrowserModule]]),i0.ɵmpd(512,i10.NoopAnimationsModule,
              i10.NoopAnimationsModule,([] as any[])),i0.ɵmpd(512,i5.ServerModule,
              i5.ServerModule,([] as any[])),i0.ɵmpd(512,i12.AppModule,i12.AppModule,
              ([] as any[])),i0.ɵmpd(512,i1.AppServerModule,i1.AppServerModule,([] as any[])),
          i0.ɵmpd(256,i6.ɵe,'XSRF-TOKEN',([] as any[])),i0.ɵmpd(256,i6.ɵf,'X-XSRF-TOKEN',
              ([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvbWlsYW4vRGVza3RvcC9qYWluQGFsZ293b3Jrcy90ZXN0L0FuZ3VsYXItU0VPLWZyaWVuZGx5LWV4YW1wbGUtbWFzdGVyL3NyYy9hcHAvYXBwLXNlcnZlci5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9taWxhbi9EZXNrdG9wL2phaW5AYWxnb3dvcmtzL3Rlc3QvQW5ndWxhci1TRU8tZnJpZW5kbHktZXhhbXBsZS1tYXN0ZXIvc3JjL2FwcC9hcHAtc2VydmVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==