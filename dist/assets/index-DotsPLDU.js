(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const l={main:{title:"SYSTEM DEPLOYMENTS LOG",tag:"Active Directory // Sneho.OS Modules",body:`
      These are the currently running project deployments mapped in the central storage unit. You can view individual details or query them directly through the terminal shell.
      <br><br>
      <strong>1. Project Hyperion:</strong> A high-performance GLSL shader render system using WebGL/WebGPU to output generative cyberpunk layouts in real time. Runs at constant 60fps.
      <br><br>
      <strong>2. Chrono-Grid Dashboard:</strong> A brutalist responsive bento layout generator, styled in industrial color schemes. Fully optimized for high-density monitor screens.
      <br><br>
      <strong>3. DPM Core Engine:</strong> A lightweight asynchronous state management client library with built-in reactive event loops. Created for modular tech grids.
    `,tech:["WebGL","GLSL","WebGPU","Javascript","CSS Grid","State Machines"],liveLink:"https://github.com",repoLink:"https://github.com"},hyperion:{title:"PROJECT HYPERION",tag:"Generative GLSL Shader Client",body:"An experimental visualizer running complex custom GLSL fragment shaders on the GPU. Simulates scanline matrices, retro CRT distortion filters, and vector grid animations.",tech:["WebGL","GLSL","HTML5","Vanilla JS"],liveLink:"#",repoLink:"#"},chronogrid:{title:"CHRONO-GRID",tag:"Bento Layout Configurator",body:"A tool designed for interface designers to map out responsive bento grids and generate clean HTML/CSS snippets instantly. Follows brutalist retro patterns.",tech:["CSS Grid","Flexbox","Javascript","DOM API"],liveLink:"#",repoLink:"#"},dpmcore:{title:"DPM SYSTEM CORE",tag:"Reactive Event State Library",body:"A dependency-free modular state orchestrator that handles complex asynchronous operations with minimal overhead, maintaining deep memory logging.",tech:["ES6 JS","Unit Tests","Design Patterns"],liveLink:"#",repoLink:"#"}};document.addEventListener("DOMContentLoaded",()=>{p(),E(),h(),u();const e=Object.keys(l).length-1;document.getElementById("proj-counter").innerText=`0${e}`});function u(){const e=document.getElementById("theme-toggle");if(!e)return;const t=e.querySelector(".toggle-label");function r(n){n?(document.body.classList.add("light-theme"),t&&(t.innerText="DARK_MODE")):(document.body.classList.remove("light-theme"),t&&(t.innerText="LIGHT_MODE"))}localStorage.getItem("theme")==="light"&&(r(!0),setTimeout(()=>{c("SYS_THEME // Light mode theme config initialized.")},100)),e.addEventListener("click",()=>{const n=!document.body.classList.contains("light-theme");r(n),localStorage.setItem("theme",n?"light":"dark"),c(`SYS_THEME // Theme modulated to ${n?"LIGHT":"DARK"} mode.`)})}function p(){const e=document.getElementById("utc-clock");if(!e)return;function t(){const i=new Date().toISOString().replace("T"," ").substring(0,19)+" UTC";e.innerText=i}t(),setInterval(t,1e3)}function E(){const e=document.getElementById("temp-val");setInterval(()=>{const r=(Math.random()*2.5).toFixed(1),i=(37+parseFloat(r)).toFixed(1);e&&(e.innerText=`${i}°C`)},3e3)}const m={help:()=>`
Available commands:
  about    - Return unit identity and biographical log
  skills   - Print tech stack and mastery ratios
  projects - Display index of active deployments
  contact  - Output communications coordinates
  temp     - Report system CPU core temperatures
  date     - Show current Epoch and standard timestamps
  clear    - Flush terminal console lines
  secret   - Unlock developer mode matrix override
  `,about:()=>`
UNIT IDENTITY: SNEHO
DESIGNATION:   CREATIVE INTERACTIVE DEVELOPER
BIOLOGICAL:    Active Node. Human developer based on Earth coordinates.
MISSION:       Crafting bespoke retro-industrial web environments that look premium and function flawlessly. 
               Fusing brutalist, cyberpunk graphic design layouts with robust, clean vanilla architectures.
`,skills:()=>`
SYSTEM MODULE CAPACITIES:
=========================================
MODULE             | CODE      | CAPACITY
=========================================
JAVASCRIPT         | JS-ES6    | [|||||||||.] 90%
HTML5 / CSS3       | HT-CS3    | [||||||||||] 95%
REACT & VUE        | FR-WRK    | [||||||||..] 85%
NODEJS & GRAPHQL   | ND-GQL    | [|||||||...] 75%
GLSL & WEBGPU      | SH-DRS    | [||||||....] 60%
SYSTEMS ARCH       | SY-ARC    | [|||||||...] 70%
=========================================
  `,projects:()=>`
SYSTEM DEPLOYMENTS REGISTERED:
-----------------------------------------
[01] PROJECT HYPERION [Active]
     Generative GLSL shader client running on WebGL.
     Query: "project hyperion" for details.

[02] CHRONO-GRID [Active]
     Brutalist CSS grid design configurator.
     Query: "project chronogrid" for details.

[03] DPM SYSTEM CORE [Idle]
     Event state orchestrator for Web GUI components.
     Query: "project dpmcore" for details.
-----------------------------------------
Type "project [name]" for individual node details.
  `,contact:()=>`
COMMUNICATION PROTOCOL DETAILS:
-----------------------------------------
BEAM CHANNEL:  sneho.dev (hypothetical)
SIGNAL PATH:   sneho.dev@gmail.com
GITHUB LINK:   github.com/sneho-dev
STATUS:        OPEN FOR COMMISSIONS // CONTRACTS
-----------------------------------------
Use Card 06 to transmit signals directly.
  `,temp:()=>{const e=[(35+Math.random()*8).toFixed(1),(36+Math.random()*8).toFixed(1),(34+Math.random()*7).toFixed(1),(38+Math.random()*9).toFixed(1)];return`
DIAGNOSTIC REPORT // CPU THERMAL SENSORS:
-----------------------------------------
CORE 0: [${e[0]}°C] - ONLINE
CORE 1: [${e[1]}°C] - ONLINE
CORE 2: [${e[2]}°C] - STABLE
CORE 3: [${e[3]}°C] - ELEVATED LOAD
COOLING FAN SPEED: 4200 RPM // STATUS: STABLE
    `},date:()=>`
SYSTEM TIMESTAMPS:
-----------------------------------------
EPOCH TIME:  ${Math.floor(Date.now()/1e3)}
ISO TIME:    ${new Date().toISOString()}
LOCAL TIME:  ${new Date().toLocaleString()}
-----------------------------------------
  `,secret:()=>(setTimeout(()=>{document.body.style.textShadow="0 0 5px #00ff00";const e=document.querySelector(".status-indicator");e&&(e.style.backgroundColor="#ff003c",e.style.boxShadow="0 0 10px #ff003c")},100),`
[!!! OVERRIDE DETECTED !!!]
Developer mode overrides compiled.
Visual text-shadow elements modulated.
Status node illuminated RED.
System integrity compromise level: 0.04%
    `)};function h(){const e=document.getElementById("terminal-textbox");e&&e.addEventListener("keydown",t=>{if(t.key==="Enter"){const r=e.value.trim();if(e.value="",r==="")return;g(r)}})}function g(e){const t=document.getElementById("terminal-display");if(!t)return;const r=document.createElement("div");r.className="terminal-line command",r.innerText=`guest@sneho-os:~$ ${e}`,t.appendChild(r);const i=e.toLowerCase().replace(/\s+/g," ");let o="",n=!1;if(m[i])o=m[i]();else if(i.startsWith("project ")){const s=i.substring(8).trim(),d=s.replace(/[-_]/g,"");if(l[d]){const a=l[d];o=`
PROJECT DATA SHEET: ${a.title}
=========================================
TYPE:        ${a.tag}
STACK:       ${a.tech.join(", ")}
DESCRIPTION: ${a.body.replace(/<br>/g,`
`).replace(/<\/?[^>]+(>|$)/g,"")}
=========================================
      `}else o=`QUERY FAILED: No database matches found for deployment "${s}".`,n=!0}else i==="clear"?(t.innerHTML="",o="Console log flushed. SNEHO-OS active."):(o=`COMMAND FAILED: Command "${e}" not recognized. Type "help" for a list of active system commands.`,n=!0);if(o){const s=document.createElement("div");s.className=`terminal-line ${n?"error":"response"}`,s.innerText=o,t.appendChild(s)}t.scrollTop=t.scrollHeight}function c(e){const t=document.getElementById("terminal-display");if(!t)return;const r=document.createElement("div");r.className="terminal-line system",r.innerText=e,t.appendChild(r),t.scrollTop=t.scrollHeight}function S(){const e=document.getElementById("project-modal");e&&(e.classList.remove("active"),c("UI // Viewport modal dismissed."))}window.addEventListener("keydown",e=>{e.key==="Escape"&&S()});
