function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9AGB":function(t,e,r){"use strict";var n=r("w5QO");function c(t){return t?1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}:n.noop}e.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return c(t)},e.pipeFromArray=c},FWf1:function(t,e,r){var n=r("mrSG").__extends,c=r("pshJ"),o=r("GiSu"),i=r("zB/H"),s=r("p//D"),a=r("n3uD"),u=r("MkmW"),l=function(t){function e(r,n,c){var i=t.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=o.empty;break;case 1:if(!r){i.destination=o.empty;break}if("object"==typeof r){r instanceof e?(i.syncErrorThrowable=r.syncErrorThrowable,i.destination=r,r.add(i)):(i.syncErrorThrowable=!0,i.destination=new f(i,r));break}default:i.syncErrorThrowable=!0,i.destination=new f(i,r,n,c)}return i}return n(e,t),e.prototype[s.rxSubscriber]=function(){return this},e.create=function(t,r,n){var c=new e(t,r,n);return c.syncErrorThrowable=!1,c},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(i.Subscription);e.Subscriber=l;var f=function(t){function e(e,r,n,i){var s,a=t.call(this)||this;a._parentSubscriber=e;var u=a;return c.isFunction(r)?s=r:r&&(s=r.next,n=r.error,i=r.complete,r!==o.empty&&(u=Object.create(r),c.isFunction(u.unsubscribe)&&a.add(u.unsubscribe.bind(u)),u.unsubscribe=a.unsubscribe.bind(a))),a._context=u,a._next=s,a._error=n,a._complete=i,a}return n(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;a.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,r=a.config.useDeprecatedSynchronousErrorHandling;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):u.hostReportError(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;u.hostReportError(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};a.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(r){if(this.unsubscribe(),a.config.useDeprecatedSynchronousErrorHandling)throw r;u.hostReportError(r)}},e.prototype.__tryOrSetError=function(t,e,r){if(!a.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(n){return a.config.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=n,t.syncErrorThrown=!0,!0):(u.hostReportError(n),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(l);e.SafeSubscriber=f},FiyT:function(t,e,r){var n=r("mrSG").__extends;e.SubjectSubscription=function(t){function e(e,r){var n=t.call(this)||this;return n.subject=e,n.subscriber=r,n.closed=!1,n}return n(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var r=e.indexOf(this.subscriber);-1!==r&&e.splice(r,1)}}},e}(r("zB/H").Subscription)},GMZp:function(t,e,r){"use strict";e.isObject=function(t){return null!==t&&"object"==typeof t}},GiSu:function(t,e,r){"use strict";var n=r("n3uD"),c=r("MkmW");e.empty={closed:!0,next:function(t){},error:function(t){if(n.config.useDeprecatedSynchronousErrorHandling)throw t;c.hostReportError(t)},complete:function(){}}},LBXl:function(t,e,r){"use strict";e.UnsubscriptionError=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}()},MkmW:function(t,e,r){"use strict";e.hostReportError=function(t){setTimeout((function(){throw t}),0)}},Mxlh:function(t,e,r){"use strict";e.ObjectUnsubscribedError=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}()},Q1FS:function(t,e,r){"use strict";var n=r("yx2s"),c=r("Xwq/"),o=r("zfKp"),i=r("9AGB"),s=r("n3uD");function a(t){if(t||(t=s.config.Promise||Promise),!t)throw new Error("no Promise impl found");return t}e.Observable=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n=this.operator,o=c.toSubscriber(t,e,r);if(o.add(n?n.call(o,this.source):this.source||s.config.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),s.config.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){s.config.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),n.canReportError(t)?t.error(e):console.warn(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=a(e))((function(e,n){var c;c=r.subscribe((function(e){try{t(e)}catch(r){n(r),c&&c.unsubscribe()}}),n,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[o.observable]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:i.pipeFromArray(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=a(t))((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))},t.create=function(e){return new t(e)},t}()},"Xwq/":function(t,e,r){"use strict";var n=r("FWf1"),c=r("p//D"),o=r("GiSu");e.toSubscriber=function(t,e,r){if(t){if(t instanceof n.Subscriber)return t;if(t[c.rxSubscriber])return t[c.rxSubscriber]()}return t||e||r?new n.Subscriber(t,e,r):new n.Subscriber(o.empty)}},ds6q:function(t,e,r){var n=r("mrSG").__extends,c=r("Q1FS"),o=r("FWf1"),i=r("zB/H"),s=r("Mxlh"),a=r("FiyT"),u=r("p//D"),l=function(t){function e(e){var r=t.call(this,e)||this;return r.destination=e,r}return n(e,t),e}(o.Subscriber);e.SubjectSubscriber=l;var f=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return n(e,t),e.prototype[u.rxSubscriber]=function(){return new l(this)},e.prototype.lift=function(t){var e=new p(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new s.ObjectUnsubscribedError;if(!this.isStopped)for(var e=this.observers,r=e.length,n=e.slice(),c=0;c<r;c++)n[c].next(t)},e.prototype.error=function(t){if(this.closed)throw new s.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,r=e.length,n=e.slice(),c=0;c<r;c++)n[c].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new s.ObjectUnsubscribedError;this.isStopped=!0;for(var t=this.observers,e=t.length,r=t.slice(),n=0;n<e;n++)r[n].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new s.ObjectUnsubscribedError;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new s.ObjectUnsubscribedError;return this.hasError?(t.error(this.thrownError),i.Subscription.EMPTY):this.isStopped?(t.complete(),i.Subscription.EMPTY):(this.observers.push(t),new a.SubjectSubscription(this,t))},e.prototype.asObservable=function(){var t=new c.Observable;return t.source=this,t},e.create=function(t,e){return new p(t,e)},e}(c.Observable);e.Subject=f;var p=function(t){function e(e,r){var n=t.call(this)||this;return n.destination=e,n.source=r,n}return n(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):i.Subscription.EMPTY},e}(f);e.AnonymousSubject=p},l1Fo:function(t,e,r){"use strict";r.r(e);var n=r("fXoL"),c=r("ofXK"),o=r("vvyD"),i=r("tyNb"),s=r("LcAk"),a=r("jF+W"),u=r("MBod"),l=r("nAMr"),f=["mat-dialog-title",""],p=[3,"value",4,"ngIf"],b=[1,"mat-dialog-actions-end"],h=["type","button",1,"mat-raised-button",3,"click"],d=[1,"mat-raised-button","mat-warn",3,"disabled","click"],m=[3,"value"];function y(t,e){if(1&t&&n.Wb(0,"oz-alert",m),2&t){var r=n.nc();n.tc("value",r.error)}}var v,g=((v=function(t){function e(t,r,n){var c;return _classCallCheck(this,e),(c=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,r))).projectsService=t,c.dialog=r,c.data=n,c}return _inherits(e,t),_createClass(e,[{key:"submit",value:function(){var t=this;this.projectsService.delete({ids:this.data.map((function(t){return t.id}))}).subscribe((function(e){t.working=!1,t.dialog.close(t.data.map((function(t){return t.id})))}),(function(e){t.error=e,t.working=!1}))}}]),e}(a.a)).ngComponentDef=n.Pb({type:v,selectors:[["app-projects-delete"]],factory:function(t){return new(t||v)(n.Vb(u.a),n.Vb(s.f),n.Vb(s.a))},features:[n.Eb],consts:12,vars:2,template:function(t,e){1&t&&(n.cc(0,"h2",f),n.Mc(1,"Delete"),n.ac(),n.Lc(2,y,1,1,"oz-alert",p),n.cc(3,"mat-dialog-content"),n.cc(4,"p"),n.Mc(5,"Are you sure to delete selected items"),n.ac(),n.ac(),n.cc(6,"mat-dialog-actions",b),n.cc(7,"button",h),n.ic("click",(function(t){return e.close()})),n.Mc(8,"Close"),n.ac(),n.cc(9,"button",d),n.ic("click",(function(t){return e.save()})),n.cc(10,"span"),n.Mc(11,"Delete"),n.ac(),n.ac(),n.ac()),2&t&&(n.Dc(2),n.tc("ngIf",null!=e.error),n.Dc(9),n.tc("disabled",e.working))},directives:[s.g,c.l,s.d,s.c,l.a],encapsulation:2}),v),_=r("M88V"),w=["mat-dialog-title",""],S=[3,"value",4,"ngIf"],D=[1,"mat-dialog-actions-end"],E=["type","button",1,"mat-raised-button",3,"click"],k=[1,"mat-raised-button","mat-warn",3,"disabled","click"],O=[3,"value"];function j(t,e){if(1&t&&n.Wb(0,"oz-alert",O),2&t){var r=n.nc();n.tc("value",r.error)}}var C,x=((C=function(t){function e(t,r,n){var c;return _classCallCheck(this,e),(c=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,r))).projectService=t,c.dialog=r,c.data=n,c}return _inherits(e,t),_createClass(e,[{key:"submit",value:function(){var t=this;this.projectService.delete(this.data.id).subscribe((function(e){t.working=!1,t.dialog.close(t.data.id)}),(function(e){t.error=e,t.working=!1}))}}]),e}(a.a)).ngComponentDef=n.Pb({type:C,selectors:[["app-projects-project-delete"]],factory:function(t){return new(t||C)(n.Vb(_.a),n.Vb(s.f),n.Vb(s.a))},features:[n.Eb],consts:12,vars:2,template:function(t,e){1&t&&(n.cc(0,"h2",w),n.Mc(1,"Delete"),n.ac(),n.Lc(2,j,1,1,"oz-alert",S),n.cc(3,"mat-dialog-content"),n.cc(4,"p"),n.Mc(5,"Are you sure to delete selected item"),n.ac(),n.ac(),n.cc(6,"mat-dialog-actions",D),n.cc(7,"button",E),n.ic("click",(function(t){return e.close()})),n.Mc(8,"Close"),n.ac(),n.cc(9,"button",k),n.ic("click",(function(t){return e.save()})),n.cc(10,"span"),n.Mc(11,"Delete"),n.ac(),n.ac(),n.ac()),2&t&&(n.Dc(2),n.tc("ngIf",null!=e.error),n.Dc(9),n.tc("disabled",e.working))},directives:[s.g,c.l,s.d,s.c,l.a],encapsulation:2}),C),P=r("Mvvl"),M=r("3Pt+"),T=r("A2Vd"),A=r("XiUz"),I=r("IRfi"),L=["mat-dialog-title",""],R=[3,"value",4,"ngIf"],V=[3,"formGroup"],z=["fxLayout","row"],F=["fxFlex","1 1 100%"],H=["autocomplete","off","formControlName","name","matInput","","placeholder","Name"],U=[4,"ngIf"],W=["autocomplete","off","formControlName","description","matInput","","placeholder","Description"],G=[1,"mat-dialog-actions-end"],Y=["type","button",1,"mat-raised-button",3,"click"],B=[1,"mat-raised-button","mat-primary",3,"disabled","click"],Z=[3,"value"];function $(t,e){if(1&t&&n.Wb(0,"oz-alert",Z),2&t){var r=n.nc();n.tc("value",r.error)}}function q(t,e){1&t&&(n.cc(0,"mat-error"),n.Mc(1,"required"),n.ac())}var X,J=((X=function(t){function e(t,r,n,c){var o;return _classCallCheck(this,e),(o=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,n))).projectsService=t,o.fb=r,o.dialog=n,o.data=c,o.form=o.fb.group({name:["",[M.n.required,M.n.minLength(3)]],description:["",[M.n.required]]}),o}return _inherits(e,t),_createClass(e,[{key:"ngOnInit",value:function(){}},{key:"submit",value:function(){var t=this;this.projectsService.add(this.form.value).subscribe((function(e){t.working=!1,t.dialog.close(e)}),(function(e){t.error=e,t.working=!1}))}}]),e}(a.a)).ngComponentDef=n.Pb({type:X,selectors:[["app-projects-add"]],factory:function(t){return new(t||X)(n.Vb(u.a),n.Vb(M.c),n.Vb(s.f),n.Vb(s.a))},features:[n.Eb],consts:20,vars:4,template:function(t,e){1&t&&(n.cc(0,"h2",L),n.Mc(1,"Add"),n.ac(),n.Lc(2,$,1,1,"oz-alert",R),n.cc(3,"mat-dialog-content"),n.cc(4,"form",V),n.cc(5,"div",z),n.cc(6,"mat-form-field",F),n.cc(7,"label"),n.Wb(8,"input",H),n.ac(),n.Lc(9,q,2,0,"mat-error",U),n.ac(),n.ac(),n.cc(10,"div",z),n.cc(11,"mat-form-field",F),n.cc(12,"label"),n.Wb(13,"textarea",W),n.ac(),n.ac(),n.ac(),n.ac(),n.ac(),n.cc(14,"mat-dialog-actions",G),n.cc(15,"button",Y),n.ic("click",(function(t){return e.close()})),n.Mc(16,"Close"),n.ac(),n.cc(17,"button",B),n.ic("click",(function(t){return e.save()})),n.cc(18,"span"),n.Mc(19,"Add"),n.ac(),n.ac(),n.ac()),2&t&&(n.Dc(2),n.tc("ngIf",null!=e.error),n.Dc(4),n.tc("formGroup",e.form),n.Dc(9),n.tc("ngIf",e.form.controls.name.hasError("required")),n.Dc(17),n.tc("disabled",e.working))},directives:[s.g,c.l,s.d,M.o,M.k,M.e,A.b,I.b,A.a,M.b,T.b,M.j,M.d,s.c,l.a,I.a],encapsulation:2}),X),N=r("BvTm"),K=r("IYfF"),Q=r("0DX0"),tt=r("Xlwt"),et=r("gVAx"),rt=r("TY1r"),nt=r("tmTa"),ct=r("sCmA"),ot=r("SSqQ"),it=r("1OTw"),st=r("C/sw"),at=r("wTI4"),ut=r("82uk"),lt=[1,"oz-container"],ft=[1,"mat-table-container"],pt=[1,"oz-toolbar"],bt=[1,"title"],ht=[1,"mat-toolbar-spacer"],dt=["mat-icon-button","","matTooltip","Search",3,"click",4,"ngIf"],mt=["mat-icon-button","","matTooltip","Add",3,"click"],yt=[3,"visible","changed","closed"],vt=[3,"visible"],gt=["mat-icon-button","","matTooltip","Delete",3,"click"],_t=[1,"mat-table-content",3,"dataSource"],wt=["matColumnDef","select"],St=["class","mat-cell-small",4,"matHeaderCellDef"],Dt=["class","mat-cell-small",4,"matCellDef"],Et=["matColumnDef","id"],kt=[4,"matHeaderCellDef"],Ot=[4,"matCellDef"],jt=["matColumnDef","name"],Ct=["matColumnDef","tasks"],xt=["matColumnDef","hours"],Pt=["style","color: yellow;",4,"matCellDef"],Mt=["matColumnDef","createdAt"],Tt=["matColumnDef","updatedAt"],At=["matColumnDef","edit"],It=["class","mat-column-end",4,"matCellDef"],Lt=[4,"matHeaderRowDef"],Rt=[4,"matRowDef","matRowDefColumns"],Vt=["showFirstLastButtons","",3,"length","pageSize","page"],zt=["mat-icon-button","","matTooltip","Search",3,"click"];function Ft(t,e){if(1&t){var r=n.dc();n.cc(0,"button",zt),n.ic("click",(function(t){return n.Ac(r),n.nc().search=!0})),n.cc(1,"mat-icon"),n.Mc(2,"search"),n.ac(),n.ac()}}var Ht=[1,"mat-cell-small"],Ut=[3,"checked","indeterminate","change"];function Wt(t,e){if(1&t){var r=n.dc();n.cc(0,"mat-header-cell",Ht),n.cc(1,"mat-checkbox",Ut),n.ic("change",(function(t){n.Ac(r);var e=n.nc();return t?e.masterToggle():null})),n.ac(),n.ac()}if(2&t){var c=n.nc();n.Dc(1),n.tc("checked",c.selection.hasValue()&&c.isAllSelected())("indeterminate",c.selection.hasValue()&&!c.isAllSelected())}}var Gt=[3,"checked","change","click"];function Yt(t,e){if(1&t){var r=n.dc();n.cc(0,"mat-cell",Ht),n.cc(1,"mat-checkbox",Gt),n.ic("change",(function(t){n.Ac(r);var c=e.$implicit,o=n.nc();return t?o.selection.toggle(c):null})),n.ic("click",(function(t){return n.Ac(r),t.stopPropagation()})),n.ac(),n.ac()}if(2&t){var c=e.$implicit,o=n.nc();n.Dc(1),n.tc("checked",o.selection.isSelected(c))}}function Bt(t,e){1&t&&(n.cc(0,"mat-header-cell"),n.Mc(1," #"),n.ac())}function Zt(t,e){if(1&t&&(n.cc(0,"mat-cell"),n.Mc(1),n.ac()),2&t){var r=e.$implicit;n.Dc(1),n.Oc(" ",r.id," ")}}function $t(t,e){1&t&&(n.cc(0,"mat-header-cell"),n.Mc(1," Name"),n.ac())}var qt=[3,"routerLink"];function Xt(t,e){if(1&t&&(n.cc(0,"mat-cell"),n.cc(1,"strong"),n.cc(2,"a",qt),n.Mc(3),n.ac(),n.ac(),n.ac()),2&t){var r=e.$implicit;n.Dc(2),n.tc("routerLink",r.id),n.Dc(3),n.Nc(r.name)}}function Jt(t,e){1&t&&(n.cc(0,"mat-header-cell"),n.Mc(1," Tasks"),n.ac())}function Nt(t,e){if(1&t&&(n.cc(0,"mat-cell"),n.Mc(1),n.ac()),2&t){var r=e.$implicit;n.Dc(1),n.Nc(r.tasks||0)}}function Kt(t,e){1&t&&(n.cc(0,"mat-header-cell"),n.Mc(1," Hours"),n.ac())}var Qt=[2,"color","yellow"],te=[3,"value"];function ee(t,e){if(1&t&&(n.cc(0,"mat-cell",Qt),n.Wb(1,"oz-counter",te),n.ac()),2&t){var r=e.$implicit;n.Dc(1),n.tc("value",r.hours||0)}}function re(t,e){1&t&&(n.cc(0,"mat-header-cell"),n.Mc(1," Created"),n.ac())}function ne(t,e){if(1&t&&(n.cc(0,"mat-cell"),n.Mc(1),n.oc(2,"date"),n.ac()),2&t){var r=e.$implicit;n.Dc(1),n.Oc(" ",n.qc(2,1,r.createdAt,"medium")," ")}}function ce(t,e){1&t&&(n.cc(0,"mat-header-cell"),n.Mc(1," Updated"),n.ac())}function oe(t,e){if(1&t&&(n.cc(0,"mat-cell"),n.Mc(1),n.ac()),2&t){var r=e.$implicit;n.Dc(1),n.Oc(" ",r.updatedAt," ")}}function ie(t,e){1&t&&n.Wb(0,"mat-header-cell")}var se=[1,"mat-column-end"],ae=["mat-icon-button","",3,"matMenuTriggerFor"],ue=["projectMenu","matMenu"],le=["mat-menu-item","",3,"click"],fe=[2,"color","darkred"];function pe(t,e){if(1&t){var r=n.dc();n.cc(0,"mat-cell",se),n.cc(1,"button",ae),n.cc(2,"mat-icon"),n.Mc(3,"more_vert"),n.ac(),n.ac(),n.cc(4,"mat-menu",null,ue),n.cc(6,"button",le),n.ic("click",(function(t){n.Ac(r);var c=e.$implicit;return n.nc().openProjectDeleteDialog(c)})),n.cc(7,"mat-icon",fe),n.Mc(8,"delete"),n.ac(),n.cc(9,"span"),n.Mc(10,"Delete"),n.ac(),n.ac(),n.ac(),n.ac()}if(2&t){var c=n.yc(5);n.Dc(1),n.tc("matMenuTriggerFor",c)}}function be(t,e){1&t&&n.Wb(0,"mat-header-row")}function he(t,e){1&t&&n.Wb(0,"mat-row")}var de,me,ye=[{path:"",component:(de=function(t){function e(t,r,n,c,o){var i;return _classCallCheck(this,e),(i=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this))).projectsService=t,i.eventsService=r,i.authService=n,i.dialog=c,i.snackBar=o,i.columns=["select","name","tasks","hours","createdAt","edit"],i.displayedColumns=["select","name","tasks","hours","createdAt","edit"],i}return _inherits(e,t),_createClass(e,[{key:"ngOnInit",value:function(){this.get()}},{key:"ngOnDestroy",value:function(){}},{key:"openDeleteComponent",value:function(){var t=this;this.dialog.open(g,{autoFocus:!0,data:this.selection.selected}).afterClosed().subscribe((function(e){e&&t.delete(e)}))}},{key:"openAddComponent",value:function(){var t=this;this.dialog.open(J,{autoFocus:!0,width:"480px"}).afterClosed().subscribe((function(e){e&&t.add(e)}))}},{key:"openProjectDeleteDialog",value:function(t){var e=this;this.dialog.open(x,{autoFocus:!0,width:"480px",data:t}).afterClosed().subscribe((function(t){t&&e.delete(t)}))}},{key:"get",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";this.working=!0,this.clear(),this.projectsService.get({filterValue:e,sortOrder:r,pageIndex:this.pageIndex,pageSize:this.pageSize}).subscribe((function(e){t.working=!1,t.set(e)}),(function(e){t.working=!1,t.snackBar.open(0===e.status?e.message:e.error,null,{duration:3e3})}))}}]),e}(P.a),de.ngComponentDef=n.Pb({type:de,selectors:[["app-projects"]],factory:function(t){return new(t||de)(n.Vb(u.a),n.Vb(N.a),n.Vb(K.a),n.Vb(s.b),n.Vb(Q.a))},features:[n.Eb],consts:47,vars:9,template:function(t,e){1&t&&(n.cc(0,"div",lt),n.cc(1,"div",ft),n.cc(2,"div",pt),n.cc(3,"div"),n.cc(4,"span",bt),n.Mc(5,"Projects"),n.ac(),n.Wb(6,"span",ht),n.Lc(7,Ft,3,0,"button",dt),n.cc(8,"button",mt),n.ic("click",(function(t){return e.openAddComponent()})),n.cc(9,"mat-icon"),n.Mc(10,"add"),n.ac(),n.ac(),n.ac(),n.ac(),n.cc(11,"oz-search",yt),n.ic("changed",(function(t){return e.onSearch(t)})),n.ic("closed",(function(t){return e.onSearchClose()})),n.ac(),n.cc(12,"oz-header",vt),n.cc(13,"span"),n.Mc(14),n.ac(),n.Wb(15,"span",ht),n.cc(16,"button",gt),n.ic("click",(function(t){return e.openDeleteComponent()})),n.cc(17,"mat-icon"),n.Mc(18,"delete"),n.ac(),n.ac(),n.ac(),n.cc(19,"mat-table",_t),n.Zb(20,wt),n.Lc(21,Wt,2,2,"mat-header-cell",St),n.Lc(22,Yt,2,1,"mat-cell",Dt),n.Yb(),n.Zb(23,Et),n.Lc(24,Bt,2,0,"mat-header-cell",kt),n.Lc(25,Zt,2,1,"mat-cell",Ot),n.Yb(),n.Zb(26,jt),n.Lc(27,$t,2,0,"mat-header-cell",kt),n.Lc(28,Xt,4,2,"mat-cell",Ot),n.Yb(),n.Zb(29,Ct),n.Lc(30,Jt,2,0,"mat-header-cell",kt),n.Lc(31,Nt,2,1,"mat-cell",Ot),n.Yb(),n.Zb(32,xt),n.Lc(33,Kt,2,0,"mat-header-cell",kt),n.Lc(34,ee,2,1,"mat-cell",Pt),n.Yb(),n.Zb(35,Mt),n.Lc(36,re,2,0,"mat-header-cell",kt),n.Lc(37,ne,3,4,"mat-cell",Ot),n.Yb(),n.Zb(38,Tt),n.Lc(39,ce,2,0,"mat-header-cell",kt),n.Lc(40,oe,2,1,"mat-cell",Ot),n.Yb(),n.Zb(41,At),n.Lc(42,ie,1,0,"mat-header-cell",kt),n.Lc(43,pe,11,1,"mat-cell",It),n.Yb(),n.Lc(44,be,1,0,"mat-header-row",Lt),n.Lc(45,he,1,0,"mat-row",Rt),n.ac(),n.cc(46,"mat-paginator",Vt),n.ic("page",(function(t){return e.onPageChange(t)})),n.ac(),n.ac(),n.ac()),2&t&&(n.Dc(7),n.tc("ngIf",!1),n.Dc(11),n.tc("visible",e.search),n.Dc(12),n.tc("visible",e.selection.hasValue()),n.Dc(14),n.Oc("",e.selection.selected.length," selected"),n.Dc(19),n.tc("dataSource",e.dataSource),n.Dc(44),n.tc("matHeaderRowDef",e.displayedColumns),n.Dc(45),n.tc("matRowDefColumns",e.displayedColumns),n.Dc(46),n.tc("length",e.total)("pageSize",e.pageSize))},directives:[c.l,tt.a,et.a,rt.a,st.a,at.a,nt.j,nt.c,nt.e,nt.b,nt.g,nt.i,ct.a,nt.d,ot.a,nt.a,i.d,ut.a,it.c,it.d,it.a,nt.f,nt.h],pipes:[c.e],encapsulation:2}),de)}],ve=((me=function t(){_classCallCheck(this,t)}).ngModuleDef=n.Tb({type:me}),me.ngInjectorDef=n.Sb({factory:function(t){return new(t||me)},imports:[[i.e.forChild(ye)],i.e]}),me);i.e.forChild(ye);var ge=r("bvNZ"),_e=r("bTKi"),we=r("jLzX"),Se=r("K86D");r("dEu6"),r("ds6q"),r("tkJt");var De,Ee=((De=function t(){_classCallCheck(this,t)}).ngModuleDef=n.Tb({type:De}),De.ngInjectorDef=n.Sb({factory:function(t){return new(t||De)},imports:[[o.a]]}),De);r.d(e,"ProjectsModule",(function(){return Oe}));var ke,Oe=((ke=function t(){_classCallCheck(this,t)}).ngModuleDef=n.Tb({type:ke}),ke.ngInjectorDef=n.Sb({factory:function(t){return new(t||ke)},providers:[u.a,_.a,_e.a,we.a,Se.a],imports:[[c.c,o.a,ve,ge.a,Ee]]}),ke)},mbIT:function(t,e,r){"use strict";e.isArray=Array.isArray||function(t){return t&&"number"==typeof t.length}},mrSG:function(t,e,r){"use strict";r.r(e),r.d(e,"__extends",(function(){return c})),r.d(e,"__assign",(function(){return o})),r.d(e,"__rest",(function(){return i})),r.d(e,"__decorate",(function(){return s})),r.d(e,"__param",(function(){return a})),r.d(e,"__metadata",(function(){return u})),r.d(e,"__awaiter",(function(){return l})),r.d(e,"__generator",(function(){return f})),r.d(e,"__exportStar",(function(){return p})),r.d(e,"__values",(function(){return b})),r.d(e,"__read",(function(){return h})),r.d(e,"__spread",(function(){return d})),r.d(e,"__spreadArrays",(function(){return m})),r.d(e,"__await",(function(){return y})),r.d(e,"__asyncGenerator",(function(){return v})),r.d(e,"__asyncDelegator",(function(){return g})),r.d(e,"__asyncValues",(function(){return _})),r.d(e,"__makeTemplateObject",(function(){return w})),r.d(e,"__importStar",(function(){return S})),r.d(e,"__importDefault",(function(){return D}));var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function c(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var o=function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var c in e=arguments[r])Object.prototype.hasOwnProperty.call(e,c)&&(t[c]=e[c]);return t}).apply(this,arguments)};function i(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(r[n[c]]=t[n[c]])}return r}function s(t,e,r,n){var c,o=arguments.length,i=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(i=(o<3?c(i):o>3?c(e,r,i):c(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i}function a(t,e){return function(r,n){e(r,n,t)}}function u(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,r,n){return new(r||(r=Promise))((function(c,o){function i(t){try{a(n.next(t))}catch(e){o(e)}}function s(t){try{a(n.throw(t))}catch(e){o(e)}}function a(t){t.done?c(t.value):new r((function(e){e(t.value)})).then(i,s)}a((n=n.apply(t,e||[])).next())}))}function f(t,e){var r,n,c,o,i={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(c=2&o[0]?n.return:o[0]?n.throw||((c=n.return)&&c.call(n),0):n.next)&&!(c=c.call(n,o[1])).done)return c;switch(n=0,c&&(o=[2&o[0],c.value]),o[0]){case 0:case 1:c=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(c=(c=i.trys).length>0&&c[c.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!c||o[1]>c[0]&&o[1]<c[3])){i.label=o[1];break}if(6===o[0]&&i.label<c[1]){i.label=c[1],c=o;break}if(c&&i.label<c[2]){i.label=c[2],i.ops.push(o);break}c[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(s){o=[6,s],n=0}finally{r=c=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function p(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}function b(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}}function h(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,c,o=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(s){c={error:s}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(c)throw c.error}}return i}function d(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(h(arguments[e]));return t}function m(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),c=0;for(e=0;e<r;e++)for(var o=arguments[e],i=0,s=o.length;i<s;i++,c++)n[c]=o[i];return n}function y(t){return this instanceof y?(this.v=t,this):new y(t)}function v(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,c=r.apply(t,e||[]),o=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(t){c[t]&&(n[t]=function(e){return new Promise((function(r,n){o.push([t,e,r,n])>1||s(t,e)}))})}function s(t,e){try{(r=c[t](e)).value instanceof y?Promise.resolve(r.value.v).then(a,u):l(o[0][2],r)}catch(n){l(o[0][3],n)}var r}function a(t){s("next",t)}function u(t){s("throw",t)}function l(t,e){t(e),o.shift(),o.length&&s(o[0][0],o[0][1])}}function g(t){var e,r;return e={},n("next"),n("throw",(function(t){throw t})),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,c){e[n]=t[n]?function(e){return(r=!r)?{value:y(t[n](e)),done:"return"===n}:c?c(e):e}:c}}function _(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t=b(t),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise((function(n,c){!function(t,e,r,n){Promise.resolve(n).then((function(e){t({value:e,done:r})}),e)}(n,c,(e=t[r](e)).done,e.value)}))}}}function w(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function S(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function D(t){return t&&t.__esModule?t:{default:t}}},n3uD:function(t,e,r){"use strict";var n=!1;e.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){var e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else n&&console.log("RxJS: Back to a better error behavior. Thank you. <3");n=t},get useDeprecatedSynchronousErrorHandling(){return n}}},"p//D":function(t,e,r){"use strict";e.rxSubscriber="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),e.$$rxSubscriber=e.rxSubscriber},pshJ:function(t,e,r){"use strict";e.isFunction=function(t){return"function"==typeof t}},w5QO:function(t,e,r){"use strict";e.noop=function(){}},yx2s:function(t,e,r){"use strict";var n=r("FWf1");e.canReportError=function(t){for(;t;){var e=t.destination;if(t.closed||t.isStopped)return!1;t=e&&e instanceof n.Subscriber?e:null}return!0}},"zB/H":function(t,e,r){"use strict";var n=r("mbIT"),c=r("GMZp"),o=r("pshJ"),i=r("LBXl");function s(t){return t.reduce((function(t,e){return t.concat(e instanceof i.UnsubscriptionError?e.errors:e)}),[])}e.Subscription=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var e;if(!this.closed){var r=this._parentOrParents,a=this._unsubscribe,u=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof t)r.remove(this);else if(null!==r)for(var l=0;l<r.length;++l)r[l].remove(this);if(o.isFunction(a))try{a.call(this)}catch(b){e=b instanceof i.UnsubscriptionError?s(b.errors):[b]}if(n.isArray(u)){l=-1;for(var f=u.length;++l<f;){var p=u[l];if(c.isObject(p))try{p.unsubscribe()}catch(b){e=e||[],b instanceof i.UnsubscriptionError?e=e.concat(s(b.errors)):e.push(b)}}}if(e)throw new i.UnsubscriptionError(e)}},t.prototype.add=function(e){var r=e;if(!e)return t.EMPTY;switch(typeof e){case"function":r=new t(e);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof t)){var n=r;(r=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var c=r._parentOrParents;if(null===c)r._parentOrParents=this;else if(c instanceof t){if(c===this)return r;r._parentOrParents=[c,this]}else{if(-1!==c.indexOf(this))return r;c.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[r]:o.push(r),r},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},t.EMPTY=((e=new t).closed=!0,e),t}()},zfKp:function(t,e,r){"use strict";e.observable="function"==typeof Symbol&&Symbol.observable||"@@observable"}}]);