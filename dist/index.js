import*as e from"mermaid";var r={d:(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)},t={};r.d(t,{Z:()=>o});const a=(n={default:()=>e.default},i={},r.d(i,n),i);var n,i,d=function(e){try{return a.default.parse(e),'<div class="mermaid">'.concat(e,"</div>")}catch(e){var r=e.str;return e.hash,"<pre>".concat(r,"</pre>")}};const o=function(e){e.mermaid=a.default,a.default.loadPreferences=function(e){var r=e.get("mermaid-theme");void 0===r&&(r="default");var t=e.get("gantt-axis-format");return void 0===t&&(t="%Y-%m-%d"),a.default.initialize({theme:r,gantt:{axisFormatter:[[t,function(e){return 1===e.getDay()}]]}}),{"mermaid-theme":r,"gantt-axis-format":t}};var r=e.renderer.rules.fence.bind(e.renderer.rules);e.renderer.rules.fence=function(e,t,a,n,i){var o=e[t],m=o.content.trim();if("mermaid"===o.info)return d(m);var u=m.split(/\n/)[0].trim();return"gantt"===u||"sequenceDiagram"===u||u.match(/^graph (?:TB|BT|RL|LR|TD);?$/)?d(m):r(e,t,a,n,i)}};var m=t.Z;export{m as default};
//# sourceMappingURL=index.js.map