(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0yzY":function(t,e,n){"use strict";n.r(e);var o=n("mrSG"),i=n("ofXK"),r=n("3Pt+"),a=n("TEn/"),c=n("tyNb"),s=n("fXoL");let u=(()=>{class t{constructor(t,e){this.taquito=t,this.summaryFunc=e,this.destination="tz1PirboZKFVqkfE45hVLpkpXaZtLk3mqC17",this.amount="1"}ngOnInit(){}send(){return Object(o.a)(this,void 0,void 0,(function*(){const t=yield this.taquito,e=yield t.wallet.transfer({amount:Number(this.amount),to:this.destination}).send();yield this.summaryFunc(e)}))}}return t.\u0275fac=function(e){return new(e||t)(s.Jb("Taquito"),s.Jb("SummaryFunc"))},t.\u0275cmp=s.Db({type:t,selectors:[["app-home"]],decls:11,vars:2,consts:[["lines","none"],["position","stacked"],["placeholder","Destination",3,"ngModel","ngModelChange"],["placeholder","Amount",3,"ngModel","ngModelChange"],["expand","block","color","primary",3,"click"]],template:function(t,e){1&t&&(s.Mb(0,"ion-list",0),s.Mb(1,"ion-item"),s.Mb(2,"ion-label",1),s.ic(3,"Destination"),s.Lb(),s.Mb(4,"ion-input",2),s.Ub("ngModelChange",(function(t){return e.destination=t})),s.Lb(),s.Lb(),s.Mb(5,"ion-item"),s.Mb(6,"ion-label",1),s.ic(7,"Amount"),s.Lb(),s.Mb(8,"ion-input",3),s.Ub("ngModelChange",(function(t){return e.amount=t})),s.Lb(),s.Lb(),s.Mb(9,"ion-button",4),s.Ub("click",(function(){return e.send()})),s.ic(10,"Send"),s.Lb(),s.Lb()),2&t&&(s.zb(4),s.bc("ngModel",e.destination),s.zb(4),s.bc("ngModel",e.amount))},directives:[a.k,a.i,a.j,a.h,a.A,r.c,r.d,a.c],styles:["[_nghost-%COMP%]{margin:0 auto;max-width:600px;display:block}"]}),t})();function d(t,e){1&t&&s.Kb(0,"ion-spinner",2)}function l(t,e){1&t&&(s.Mb(0,"p"),s.ic(1,"Completed"),s.Lb())}let b=(()=>{class t{constructor(){this.loading=!0}ngOnInit(){return Object(o.a)(this,void 0,void 0,(function*(){this.loading=!0,yield this.op.confirmation(),this.loading=!1}))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-summary-modal"]],inputs:{op:"op"},decls:2,vars:2,consts:[["name","crescent",4,"ngIf"],[4,"ngIf"],["name","crescent"]],template:function(t,e){1&t&&(s.hc(0,d,1,0,"ion-spinner",0),s.hc(1,l,2,0,"p",1)),2&t&&(s.bc("ngIf",e.loading),s.zb(1),s.bc("ngIf",!e.loading))},directives:[i.j,a.p],styles:[""]}),t})();var p=n("c3o+"),m=n("7OIR"),h=n("SxV6"),f=n("flj8"),v=n("qYoc");class g{constructor(t,e){this.pkh=t,this.opRequest=e}getPKH(){return Object(o.a)(this,void 0,void 0,(function*(){return this.pkh}))}mapTransferParamsToWalletParams(t){return Object(o.a)(this,void 0,void 0,(function*(){return Object(m.e)(t)}))}mapOriginateParamsToWalletParams(t){return Object(o.a)(this,void 0,void 0,(function*(){return Object(m.c)(t)}))}mapDelegateParamsToWalletParams(t){return Object(o.a)(this,void 0,void 0,(function*(){return Object(m.d)(t)}))}sendOperations(t){return Object(o.a)(this,void 0,void 0,(function*(){const e=yield this.opRequest.sendOperationRequest(t,"test"),{hash:n}=yield e.pipe(Object(h.a)()).toPromise();return n}))}}let y=(()=>{class t{constructor(t,e,n){this.opRequest=t,this.account=e,this.modalController=n}getTaquito(t){return Object(o.a)(this,void 0,void 0,(function*(){const t=yield this.account.currentAccount$.pipe(Object(h.a)()).toPromise(),e=new m.b;return e.setProvider({rpc:"https://api.tez.ie/rpc/carthagenet",wallet:new g(yield t.getPKH(),this.opRequest)}),e}))}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(v.a),s.Qb(f.a),s.Qb(a.x))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var P=n("xJ+R");let O=(()=>{class t{constructor(t){this.taquito=t}getMenu(t){return Object(o.a)(this,void 0,void 0,(function*(){const e=yield this.taquito,n=yield e.tz.getBalance(t);return Promise.resolve([{title:"Tezos",url:"/home",amount:`${e.format("mutez","tz",n).toFixed(2)} tz`,icon:"wallet"}])}))}}return t.\u0275fac=function(e){return new(e||t)(s.Qb("Taquito"))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac}),t})();n.d(e,"HomePageModule",(function(){return j}));let j=(()=>{class t{constructor(t,e,n,o,i){t.registerCb(i,o),e.registerService(i,n)}}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)(s.Qb(p.a),s.Qb(P.a),s.Qb(O),s.Qb("SummaryFunc"),s.Qb("APP_ID"))},providers:[{provide:"APP_ID",useValue:"test"},{provide:"Taquito",useFactory:(t,e)=>t.getTaquito(e),deps:[y,"APP_ID"]},{provide:"SummaryFunc",useFactory:t=>e=>Object(o.a)(void 0,void 0,void 0,(function*(){return(yield t.create({component:b,componentProps:{op:e}})).present()})),deps:[a.x]},O],imports:[[i.c,r.a,a.u,c.j.forChild([{path:"",component:u}])]]}),t})()}}]);