"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=i(function(w,u){
var y=require('@stdlib/stats-strided-svariancepn/dist').ndarray,x=require('@stdlib/math-base-special-sqrtf/dist');function j(e,r,a,s,f){return x(y(e,r,a,s,f))}u.exports=j
});var q=i(function(z,v){
var m=require('@stdlib/strided-base-stride2offset/dist'),l=t();function R(e,r,a,s){return l(e,r,a,s,m(e,s))}v.exports=R
});var p=i(function(A,o){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),E=t();_(d,"ndarray",E);o.exports=d
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=p(),n,c=b(O(__dirname,"./native.js"));g(c)?n=h:n=c;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
