var i=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var r=t=>i(t,"__esModule",{value:!0});var a=(t,o)=>{for(var e in o)i(t,e,{get:o[e],enumerable:!0})},w=(t,o,e,p)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of f(o))!m.call(t,n)&&(e||n!=="default")&&i(t,n,{get:()=>o[n],enumerable:!(p=c(o,n))||p.enumerable});return t};var b=(t=>(o,e)=>t&&t.get(o)||(e=w(r({}),o,1),t&&t.set(o,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var d={};a(d,{default:()=>u});var s=require("@raycast/api");async function u(){(0,s.open)("https://www.youtube.com/feed/subscriptions")}module.exports=b(d);0&&(module.exports={});