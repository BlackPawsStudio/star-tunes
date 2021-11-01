(()=>{"use strict";var e={d:(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{K:()=>A});const n=[{name:"Conter",notes:[[{note:"C",freq:32.7,keyCode:68},{note:"D",freq:36.95,keyCode:70},{note:"E",freq:41.21,keyCode:71},{note:"F",freq:43.65,keyCode:72},{note:"G",freq:49,keyCode:74},{note:"A",freq:55,keyCode:75},{note:"B",freq:61.74,keyCode:76}],[{note:"C#",freq:34.65,keyCode:82},{note:"D#",freq:38.88,keyCode:84},{},{note:"F#",freq:46.25,keyCode:85},{note:"G#",freq:51.9,keyCode:73},{note:"A#",freq:58.26,keyCode:79}]]},{name:"Great",notes:[[{note:"C",freq:65.41,keyCode:68},{note:"D",freq:73.91,keyCode:70},{note:"E",freq:82.41,keyCode:71},{note:"F",freq:87.31,keyCode:72},{note:"G",freq:98,keyCode:74},{note:"A",freq:110,keyCode:75},{note:"B",freq:123.48,keyCode:76}],[{note:"C#",freq:69.3,keyCode:82},{note:"D#",freq:77.78,keyCode:84},{},{note:"F#",freq:92.5,keyCode:85},{note:"G#",freq:103.8,keyCode:73},{note:"A#",freq:116.54,keyCode:79}]]},{name:"Small",notes:[[{note:"C",freq:130.82,keyCode:68},{note:"D",freq:147.83,keyCode:70},{note:"E",freq:164.81,keyCode:71},{note:"F",freq:174.62,keyCode:72},{note:"G",freq:196,keyCode:74},{note:"A",freq:220,keyCode:75},{note:"B",freq:246.96,keyCode:76}],[{note:"C#",freq:138.59,keyCode:82},{note:"D#",freq:155.56,keyCode:84},{},{note:"F#",freq:185,keyCode:85},{note:"G#",freq:207,keyCode:73},{note:"A#",freq:233.08,keyCode:79}]]},{name:"One-line",notes:[[{note:"C",freq:261.63,keyCode:68},{note:"D",freq:293.66,keyCode:70},{note:"E",freq:329.63,keyCode:71},{note:"F",freq:349.23,keyCode:72},{note:"G",freq:392,keyCode:74},{note:"A",freq:440,keyCode:75},{note:"B",freq:493.88,keyCode:76}],[{note:"C#",freq:277.18,keyCode:82},{note:"D#",freq:311.13,keyCode:84},{},{note:"F#",freq:369.99,keyCode:85},{note:"G#",freq:415.3,keyCode:73},{note:"A#",freq:466.16,keyCode:79}]]},{name:"Two-line",notes:[[{note:"C",freq:523.25,keyCode:68},{note:"D",freq:587.32,keyCode:70},{note:"E",freq:659.26,keyCode:71},{note:"F",freq:698.46,keyCode:72},{note:"G",freq:784,keyCode:74},{note:"A",freq:880,keyCode:75},{note:"B",freq:987.75,keyCode:76}],[{note:"C#",freq:554.36,keyCode:82},{note:"D#",freq:622.26,keyCode:84},{},{note:"F#",freq:739.98,keyCode:85},{note:"G#",freq:830.6,keyCode:73},{note:"A#",freq:932.32,keyCode:79}]]},{name:"Three-line",notes:[[{note:"C",freq:1046.5,keyCode:68},{note:"D",freq:1174.6,keyCode:70},{note:"E",freq:1318.5,keyCode:71},{note:"F",freq:1396.9,keyCode:72},{note:"G",freq:1568,keyCode:74},{note:"A",freq:1720,keyCode:75},{note:"B",freq:1975.5,keyCode:76}],[{note:"C#",freq:1108.7,keyCode:82},{note:"D#",freq:1224.5,keyCode:84},{},{note:"F#",freq:1480,keyCode:85},{note:"G#",freq:1661.2,keyCode:73},{note:"A#",freq:1864.6,keyCode:79}]]},{name:"Four-line",notes:[[{note:"C",freq:2093,keyCode:68},{note:"D",freq:2349.2,keyCode:70},{note:"E",freq:2637,keyCode:71},{note:"F",freq:2793.8,keyCode:72},{note:"G",freq:3136,keyCode:74},{note:"A",freq:3440,keyCode:75},{note:"B",freq:3951,keyCode:76}],[{note:"C#",freq:2217.4,keyCode:82},{note:"D#",freq:2489,keyCode:84},{},{note:"F#",freq:2960,keyCode:85},{note:"G#",freq:3332.4,keyCode:73},{note:"A#",freq:3729.2,keyCode:79}]]}],t=(async()=>{const e=await(async()=>{const e=await fetch("https://star-tunes.herokuapp.com/?request=color");return await e.json()})();for(let n=0;n<e.length;n++){const t={id:e[n][0],name:e[n][1],piano:e[n][2],keys:e[n][3]};e[n]=t}return e})(),o=document.getElementsByClassName("w-tile"),s=document.getElementsByClassName("b-tile"),a=document.getElementsByClassName("setup-color"),l=document.getElementsByClassName("setup-select"),i=e=>{try{const t=n[l[2].value].notes.flat().find((n=>{if(n.keyCode===e)return n}));return[t.freq,t.note]}catch{return!1}},d=[],r=(e,n,t)=>{try{const o=document.getElementById("volume"),s=+o.value/+o.max;t.gain.setValueAtTime(s*s,0);const a=n.createOscillator();a.type=l[1].options[l[1].value].innerHTML.toLowerCase(),a.connect(t);const c=document.getElementsByClassName("tile");if(i(e.keyCode)){const t=i(e.keyCode);let o;a.frequency.setValueAtTime(t[0],0);for(let e=0;e<c.length;e++)c[e].innerHTML===t[1]&&(o=c[e]);o.classList.add("tile-pressed"),a.start(),document.addEventListener("keyup",(()=>{d.splice(d.indexOf(e.keyCode),1),document.removeEventListener("keydown",r,!1),o.classList.remove("tile-pressed"),a.stop(n.currentTime+.03)}))}}catch{return}},c=document.getElementsByClassName("sun-cloud"),u=document.getElementById("sun"),m=document.getElementsByTagName("aside")[0],v=document.getElementById("body-container");u.addEventListener("click",(()=>{m.classList.toggle("slide"),v.addEventListener("click",(()=>{m.classList.remove("slide")}))})),u.addEventListener("mouseenter",(()=>{c[0].classList.add("cloud-move-f"),c[1].classList.add("cloud-move-b"),u.addEventListener("mouseleave",(()=>{c[0].classList.remove("cloud-move-f"),c[1].classList.remove("cloud-move-b")}))}));const p=(async()=>{const e=await(async()=>{const e=await fetch("https://star-tunes.herokuapp.com/?request=waves");return await e.json()})();for(let n=0;n<e.length;n++){const t=e[n][1];e[n]=t}return e})(),y=e=>{let t="";const o=e?7:6;for(let s=0;s<o;s++)t+=e?`<div class="w-tile tile">${n[0].notes[0][s].note}</div>`:`<div class="b-tile tile">${n[0].notes[1][s].note}</div>`;return t},g=e=>{let n="";for(let t=0;t<e.marked.length;t++)n+='\n    <li class="marked-song">\n      <label class="top-position">0</label>\n      <label class="marked-name">Cringe song</label>\n      <div class="song-info-alt">\n        <p class="alt-text">info</p>\n        <div class="song-info">\n          <label class="song-info-author">username</label>\n          <p class="song-info-line"></p>\n          <div class="song-info-mark">☆</div>\n        </div>\n      </div>\n    </li>\n    ';return n},f=e=>{let n="";for(let t=0;t<e.songs.length;t++)n+='\n    <li class="top-song">\n      <label class="top-position">0</label>\n      <div class="song">\n        <div class="player">\n          <button class="play-button">\n            <div class="play-button-back"></div>\n            <div class="play-button-front"></div> \n          </button>\n          <div class="play-data">\n            <label class="song-name">This life is cringe...</label>\n            <div class="play-line"></div>\n          </div>\n        </div>\n      </div>\n      <div class="song-info-alt">\n        <p class="alt-text">info</p>\n        <div class="song-info">\n          <label class="song-info-author">username</label>\n          <p class="song-info-line"></p>\n          <div class="song-info-mark">☆</div>\n        </div>\n      </div>\n    </li>\n    ';return n},k=[{name:"song name",author:"author name",song:"song file",mark:5,position:0},{name:"song name",author:"author name",song:"song file",mark:4,position:2},{name:"song name",author:"author name",song:"song file",mark:5,position:1},{name:"song name",author:"author name",song:"song file",mark:5,position:4},{name:"song name",author:"author name",song:"song file",mark:3,position:3},{name:"song name",author:"author name",song:"song file",mark:5,position:0},{name:"song name",author:"author name",song:"song file",mark:4,position:2},{name:"song name",author:"author name",song:"song file",mark:5,position:1},{name:"song name",author:"author name",song:"song file",mark:5,position:4},{name:"song name",author:"author name",song:"song file",mark:3,position:3}],b=(e,t,o,s,a)=>{e.target.classList.add("tile-pressed");const i=document.getElementById("volume"),d=+i.value/+i.max;o.gain.setValueAtTime(d*d,0);const r=t.createOscillator();var c;r.type=l[1].options[l[1].value].innerHTML.toLowerCase(),r.frequency.setValueAtTime((c=e.target.innerHTML,n[l[2].value].notes.flat().find((e=>{if(e.note===c)return e})).freq),0),r.connect(o),r.start(),document.addEventListener("mouseup",(()=>{r.stop(t.currentTime)})),s.addEventListener("mouseup",(e=>{r.stop(t.currentTime),e.target.classList.contains("tile")&&e.target.classList.remove("tile-pressed")})),e.target.addEventListener("mouseleave",(()=>{r.stop(t.currentTime)})),s.addEventListener("mouseleave",(e=>{r.stop(t.currentTime),e.target.classList.contains("tile")&&(e.target.classList.remove("tile-hover"),e.target.classList.remove("tile-pressed"))}))},C=[{name:"admin",password:"admin",rating:0,marked:["cring"],songs:["cring"],pfp:0}],h=document.querySelector("main"),L=document.getElementById("register-btns"),q=()=>{L.innerHTML="",L.innerHTML='\n<button class="header-btn">LOG IN</button>\n<button class="header-btn">SIGN IN</button>\n';const e=document.getElementsByClassName("header-btn")[0];document.getElementsByClassName("header-btn")[1].addEventListener("click",(()=>{E(!0)})),e.addEventListener("click",(()=>{E(!1)}))},E=e=>{const n=document.getElementById("popup"),t=document.getElementById("popup-container"),o=document.getElementsByClassName("popup-input");t.style.opacity=100,t.style.visibility="visible",n.innerHTML="",n.innerHTML=(e=>`\n  <div id="popup-sakura"></div>\n  <div id="popup-mountains"></div>\n    <form id="popup-frames" onsubmit="event.preventDefault()">\n    <label>${e?"Sign Up":"Log In"}</label>\n    <input class="popup-input" type="text" placeholder="Name here" autocomplete="false" required>\n    <input class="popup-input" type="password" placeholder="Password" autocomplete="false" required>\n    <div id="popup-btns">\n      <button class="popup-btn" type="submit">${e?"Sign up":"Log In"}</button>\n      <button class="popup-btn" type="submit">Cancel</button>\n    </div>\n  </form>\n  `)(e);const s=document.getElementsByClassName("popup-btn")[0],a=document.getElementsByClassName("popup-btn")[1];s.addEventListener("click",(()=>{if(e){let e=!1;if(o[0].value&&o[1].value){for(let n=0;n<C.length;n++)C[n].name===o[0].value&&(e=!0);if(e)o[0].value="",o[0].placeholder="This username is taken";else{const e={name:o[0].value,password:o[1].value,rating:0,marked:[],songs:[],pfp:0};C.push(e),t.style.opacity=0,t.style.visibility="hidden",A=e,w(A)}}}else{let e=null;for(let n=0;n<C.length;n++)o[0].value&&o[1].value&&C[n].name==o[0].value&&(e=C[n]);e?e.password===o[1].value?(A=e,w(A),t.style.opacity=0,t.style.visibility="hidden"):(o[1].value="",o[1].placeholder="Wrong password"):(o[0].value="",o[0].placeholder="No such user")}})),a.addEventListener("click",(()=>{t.style.opacity=0,t.style.visibility="hidden"})),document.addEventListener("keydown",(e=>{27===e.keyCode&&(t.style.opacity=0,t.style.visibility="hidden")}))},w=e=>{var n;L.innerHTML="",L.innerHTML=`\n<div id="profile">\n  <button class="header-btn">\n  ${(n=e.name).length>10?n.split("").slice(0,9).join("")+"...":n}\n  </button>\n  <div id="profile-content">\n    <button class="profile-btn">Enter profile</button>\n    <button class="profile-btn">Log out</button>\n    <button class="profile-btn">Delete user</button>\n  </div>\n</div>\n`,(e=>{const n=document.getElementsByClassName("profile-btn")[0],t=document.getElementsByClassName("profile-btn")[1],o=document.getElementsByClassName("profile-btn")[2],s=document.getElementById("ask-container"),a=document.getElementsByClassName("question-btn"),l=document.getElementById("question-place");n.addEventListener("click",(()=>{$(e)})),t.addEventListener("click",(()=>{l.innerHTML="Do you want to log out?",s.classList.add("shown"),a[0].addEventListener("click",(()=>{s.classList.remove("shown"),A=null,q(),T()})),a[1].addEventListener("click",(()=>{s.classList.remove("shown")}))})),o.addEventListener("click",(()=>{l.innerHTML="Are you sure you want to delete your account?",s.classList.add("shown"),a[0].addEventListener("click",(()=>{s.classList.remove("shown"),userData.splice(userData.indexOf(userData.find((n=>{if(n.name===e.name)return n}))),1),A=null,q(),T()})),a[1].addEventListener("click",(()=>{s.classList.remove("shown")}))}))})(e)},B=async()=>{self.location.href="#piano",m.classList.remove("slide"),h.innerHTML=await(async()=>`\n<div class="piano-setup">\n  <label>Instrument settings</label>\n  <div class="setup-content">\n    <div class="setup-block">\n      <label>Instrument presets</label>\n      <select class="setup-select">\n        <option value="0">Synthezator</option>\n        <option value="1">Classic piano</option>\n        <option value="2">Dudka ebat'</option>\n      </select>\n    </div>  \n    <div class="setup-block">\n      <label>Wave type</label>\n      <select class="setup-select">\n        ${await(async()=>{let e="";const n=await p;for(let t=0;t<n.length;t++)e+=`\n    <option value="${t}">${n[t]}</option>\n    `;return e})()}\n      </select>\n    </div>  \n    <div class="setup-block">\n      <label>Octaves</label>\n      <select class="setup-select">\n        ${(()=>{let e="";for(let t=0;t<n.length;t++)e+=3===t?`\n      <option value="${t}" selected>${n[t].name}</option>\n      `:`\n      <option value="${t}">${n[t].name}</option>\n      `;return e})()}\n      </select>\n    </div>  \n    <div class="setup-block">\n      <label>Volume</label>\n      <input type="range" id="volume" min="0" max="100" value="50">\n    </div>\n  </div>\n  <img src="assets/img/info-triangle.svg">\n  </div>\n  <div class="piano-setup" id="color-setup">\n  <label>Color settings</label>\n    <div class="setup-content">\n      <div class="setup-block">\n        <label>Color presets</label>\n        <select class="setup-select">\n          ${await(async()=>{const e=await t;let n="";for(let t=0;t<e.length;t++)n+=`\n    <option value="${t}">${e[t].name}</option>\n    `;return n})()}\n        </select>\n      </div>  \n      <div class="color-block">\n        <label>Piano background</label>\n        <input type="color" value="#294F4E" class="setup-color">\n      </div>\n      <div class="color-block">\n        <label>Keys background</label>\n        <input type="color" value="#D6C1A9" class="setup-color">\n      </div>\n    </div>\n  <img src="assets/img/info-triangle.svg">\n</div>\n`)(),h.innerHTML+=`\n<div id="piano">\n  <div id="piano-w">\n    ${y(!0)}\n  </div>\n  <div id="piano-b">\n    ${y(!1)}\n  </div>\n</div>\n`,await(async()=>{const e=await t;a[0].addEventListener("input",(()=>{const e=a[0].value;for(let n=0;n<s.length;n++)s[n].style.background=e;for(let n=0;n<o.length;n++)o[n].style.color=e;piano.style.background=e})),a[1].addEventListener("input",(()=>{const e=a[1].value;for(let n=0;n<o.length;n++)o[n].style.background=e;for(let n=0;n<s.length;n++)s[n].style.color=e})),l[3].addEventListener("input",(()=>{const n=l[3].value;(e=>{for(let n=0;n<s.length;n++)s[n].style.background=e;for(let n=0;n<o.length;n++)o[n].style.color=e;piano.style.background=e})(e[n].piano),a[0].value=e[n].piano,(e=>{for(let n=0;n<o.length;n++)o[n].style.background=e;for(let n=0;n<s.length;n++)s[n].style.color=e})(e[n].keys),a[1].value=e[n].keys}))})(),(()=>{const e=new AudioContext,n=e.createGain();n.connect(e.destination);const t=document.querySelector("#piano");let o=!1;t.addEventListener("mouseover",(s=>{s.target.classList.contains("tile")&&(s.target.classList.add("tile-hover"),o&&b(s,e,n,t),s.target.addEventListener("mouseleave",(e=>{e.target.classList.contains("tile")&&(e.target.classList.remove("tile-hover"),e.target.classList.remove("tile-pressed"))})))})),t.addEventListener("mousedown",(s=>{o=!0,s.target.classList.contains("tile")&&b(s,e,n,t)})),document.addEventListener("mouseup",(()=>{o=!1})),t.addEventListener("mouseup",(e=>{o=!1,e.target.classList.contains("tile")&&e.target.classList.remove("tile-pressed")})),t.addEventListener("mouseleave",(e=>{o=!1,e.target.classList.contains("tile")&&(e.target.classList.remove("tile-hover"),e.target.classList.remove("tile-pressed"))}))})(),(()=>{const e=new AudioContext,n=e.createGain();n.connect(e.destination),document.addEventListener("keydown",(t=>{!1===d.includes(t.keyCode)&&(r(t,e,n),d.push(t.keyCode))}))})()},T=()=>{self.location.href="#top",document.removeEventListener("keydown",r,!1),m.classList.remove("slide"),h.innerHTML="",h.innerHTML='\n  <div id="songs-list"></div>\n',document.getElementById("songs-list").innerHTML=(e=>`<ul id="top">${(e=>{let n="";return e.forEach((e=>{n+=`\n    <li class="top-song">\n      <label class="top-position">${e.position}</label>\n      <div class="song">\n        <div class="player">\n          <button class="play-button">\n            <div class="play-button-back"></div>\n            <div class="play-button-front"></div> \n          </button>\n          <div class="play-data">\n            <label class="song-name">${e.name}</label>\n            <div class="play-line"></div>\n          </div>\n        </div>\n      </div>\n      <div class="song-info-alt">\n        <p class="alt-text">info</p>\n        <div class="song-info">\n          <label class="song-info-author">${e.author}</label>\n          <p class="song-info-line"></p>\n          <div class="song-info-mark">${(e=>{let n="";for(let t=0;t<e;t++)n+="☆";return n})(e.mark)}</div>\n        </div>\n      </div>\n    </li>\n  `})),n})(e)}</ul>`)(k)},$=async e=>{self.location.href="#profile",m.classList.remove("slide"),h.innerHTML="",h.innerHTML+=(e=>`\n<div id="profile-section">\n  <div id="profile-window">\n    <div id="profile-avatar"></div>\n    <label id="profile-name">${e.name}</label>\n    <label class="profile-info">${e.rating} in rating</label>\n    <label class="profile-info">${e.songs.length} songs</label>\n    <button class="profile-sec-btn">Start creating</button>\n    <label class="profile-sec-btn"><input type="file" style="display:none">Upload your song</label>\n  </div>\n  \n  <div id="profile-marked">\n    <ul id="marked">\n      ${g(e)?g(e):"You haven't marked anything yet"}\n    </ul>\n  </div>\n</div>\n<div id="songs-list">\n  <ul id="user-songs">\n    ${f(e)?f(e):"You haven't got any songs yet"}\n  </ul>\n</div>\n<div id="chat">\n  <div id="chat-head">1 online</div>\n  <div id="chat-messages-scroller">\n    <div id="chat-messages"></div>\n  </div>\n  <div id="chat-input">\n    <input id="chat-text-field" placeholder="Enter message..." autocomplete="false">\n    <div id="chat-send"></div>\n  </div>\n  <input>\n</div>\n`)(e),(e=>{const n=document.getElementById("chat-head"),t=document.getElementById("chat-messages"),o=document.getElementById("chat-text-field"),s=document.getElementById("chat-send"),a=io("https://pointing-poker-backend.herokuapp.com");a.emit("chat-connect-user",e.name),s.addEventListener("click",(()=>{""!==o.value&&a.emit("chat-message-request",o.value),o.value=""})),document.addEventListener("keydown",(e=>{13===e.keyCode&&(""!==o.value&&a.emit("chat-message-request",o.value),o.value="")})),a.on("chat-message-post",(e=>{var n,o;t.innerHTML+=(n=e[0],o=e[1],`\n<div class="${n===A.name?"your":""} message">\n  <label class="message-user">${n}:</label>\n  <label class="message-text">${o}</label>\n  <div class="message-point"></div>\n</div>\n`)})),a.on("chat-send-all-users",(e=>{n.innerHTML=`${e.length} online`}))})(e),await(async e=>{document.getElementsByClassName("profile-sec-btn")[0].addEventListener("click",(async()=>{await B()}))})()},N=document.getElementsByClassName("aside-links")[0],I=document.getElementsByClassName("aside-links")[1],H=document.getElementsByClassName("aside-links")[2];document.addEventListener("mousemove",(e=>{const n=document.querySelector("#parallax");let t=window.innerWidth/2,o=window.innerHeight/2,s=`${50-.02*(e.clientX-t)}% ${50-.02*(e.clientY-o)}%`;n.style.backgroundPosition=s}));let A=null;T(),q(),I.addEventListener("click",(async()=>{await B()})),N.addEventListener("click",(()=>{T()})),H.addEventListener("click",(async()=>{A?await $(A):(e=>{const n=document.getElementById("message-container"),t=document.getElementById("message-btn");document.getElementById("message-text").innerHTML="Please sign up first",n.style.opacity=100,n.style.visibility="visible",t.addEventListener("click",(()=>{n.style.opacity=0,n.style.visibility="hidden"})),document.addEventListener("keydown",(e=>{27!==e.keyCode&&13!==e.keyCode||(n.style.opacity=0,n.style.visibility="hidden")}))})()}))})();