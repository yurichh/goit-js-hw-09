function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=i);var r=i("7Y9D8");const a=document.querySelector("button"),l=document.querySelector(".form");function s(e,o){return new Promise(((t,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}l.addEventListener("submit",(function(o){o.preventDefault();const t=parseInt(l.querySelector("[name=delay]").value),n=parseInt(l.querySelector("[name=step]").value),i=parseInt(l.querySelector("[name=amount]").value);if(t<0||n<0||i<0)return void e(r).Notify.warning("Please choose a valid value");for(let o=0;o<i;o++)s(o+1,t+o*n).then((({position:o,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}));a.disabled=!0;setTimeout((()=>{a.disabled=!1,e(r).Notify.info("Promise generator is available again")}),(i-1)*n+t)}));
//# sourceMappingURL=03-promises.43a30414.js.map