import{e,i as r,d as t}from"./core-CVoMgJtU.js";const n=new WeakSet,i=({interpreter:e,io:r,run:t,type:n},{sync:i})=>{if("mpy"!==n||!i.is_pyterminal())return;const{pyterminal_ready:o,pyterminal_read:a,pyterminal_write:s}=i;e.registerJsModule("_pyscript_input",{input:a}),t(["from _pyscript_input import input","from polyscript import currentScript as _","__terminal__ = _.terminal","del _"].join(";"));const l=new Uint8Array([13]);r.stdout=e=>{10===e[0]&&s(l),s(e)},r.stderr=e=>{s(String(e.message||e))},e.registerJsModule("code",{interact(){const r=new TextEncoderStream;r.readable.pipeTo(new WritableStream({write(r){for(const t of r)e.replProcessChar(t)}}));const t=r.writable.getWriter();i.pyterminal_stream_write=e=>t.write(e),o(),e.replInit()}})};var o=async o=>{const[{Terminal:a},{FitAddon:s},{WebLinksAddon:l}]=await Promise.all([import("./xterm-BY7uk_OU.js"),import("./xterm_addon-fit--gyF3PcZ.js"),import("./xterm_addon-web-links-Cnej-nJ6.js")]),m={disableStdin:!1,cursorBlink:!0,cursorStyle:"block"};let d;const p=()=>{let e=o;const r=o.getAttribute("target");if(r){if(e=document.getElementById(r)||document.querySelector(r),!e)throw new Error(`Unknown target ${r}`)}else e=document.createElement("py-terminal"),e.style.display="block",o.after(e);const n=new a({theme:{background:"#191A19",foreground:"#F5F2E7"},...m}),i=new s;return n.loadAddon(i),n.loadAddon(new l),n.open(e),i.fit(),n.focus(),t(o,{terminal:{value:n},process:{value:async e=>{for(const r of e.split(/(?:\r\n|\r|\n)/))await d.write(`${r}\r`)}}}),n};o.hasAttribute("worker")?(e.main.onWorker.add((function r(t,i){if(n.has(i))return;n.add(i),e.main.onWorker.delete(r);const o=p(),{sync:a}=i;let s=null,l="";a.is_pyterminal=()=>!0,a.pyterminal_read=e=>(o.write(e),s=Promise.withResolvers(),s.promise),a.pyterminal_write=e=>{s||o.write(e)},a.pyterminal_ready=()=>{let e=Promise.resolve();d={write:r=>e=e.then((()=>a.pyterminal_stream_write(r)))},o.onData((e=>{s?(l+=e,o.write(e),l.endsWith("\r")&&(o.write("\n"),s.resolve(l.slice(0,-1)),s=null,l="")):d.write(e)}))}})),e.worker.onReady.add(i)):(e.main.codeBeforeRun.delete(r),e.main.onReady.add((function r({interpreter:t,io:n,run:i,type:o}){if("mpy"!==o)return;e.main.onReady.delete(r);const a=p(),s=new Uint8Array([13]);n.stdout=e=>{10===e[0]&&a.write(s),a.write(e)},globalThis.__py_terminal__=a,i(["from js import prompt as input","from js import __py_terminal__ as __terminal__"].join(";")),delete globalThis.__py_terminal__,t.registerJsModule("code",{interact(){const e=new TextEncoderStream;e.readable.pipeTo(new WritableStream({write(e){for(const r of e)t.replProcessChar(r)}})),d=e.writable.getWriter(),a.onData((e=>d.write(e))),t.replInit()}})})))};export{o as default};
//# sourceMappingURL=mpy-Bfshdqz6.js.map