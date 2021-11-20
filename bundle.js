(()=>{"use strict";var e={d:(n,t)=>{for(var s in t)e.o(t,s)&&!e.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:t[s]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{K:()=>W});const n=[{name:"Conter",notes:[[{note:"C",freq:32.7,keyCode:68},{note:"D",freq:36.95,keyCode:70},{note:"E",freq:41.21,keyCode:71},{note:"F",freq:43.65,keyCode:72},{note:"G",freq:49,keyCode:74},{note:"A",freq:55,keyCode:75},{note:"B",freq:61.74,keyCode:76}],[{note:"C#",freq:34.65,keyCode:82},{note:"D#",freq:38.88,keyCode:84},{},{note:"F#",freq:46.25,keyCode:85},{note:"G#",freq:51.9,keyCode:73},{note:"A#",freq:58.26,keyCode:79}]]},{name:"Great",notes:[[{note:"C",freq:65.41,keyCode:68},{note:"D",freq:73.91,keyCode:70},{note:"E",freq:82.41,keyCode:71},{note:"F",freq:87.31,keyCode:72},{note:"G",freq:98,keyCode:74},{note:"A",freq:110,keyCode:75},{note:"B",freq:123.48,keyCode:76}],[{note:"C#",freq:69.3,keyCode:82},{note:"D#",freq:77.78,keyCode:84},{},{note:"F#",freq:92.5,keyCode:85},{note:"G#",freq:103.8,keyCode:73},{note:"A#",freq:116.54,keyCode:79}]]},{name:"Small",notes:[[{note:"C",freq:130.82,keyCode:68},{note:"D",freq:147.83,keyCode:70},{note:"E",freq:164.81,keyCode:71},{note:"F",freq:174.62,keyCode:72},{note:"G",freq:196,keyCode:74},{note:"A",freq:220,keyCode:75},{note:"B",freq:246.96,keyCode:76}],[{note:"C#",freq:138.59,keyCode:82},{note:"D#",freq:155.56,keyCode:84},{},{note:"F#",freq:185,keyCode:85},{note:"G#",freq:207,keyCode:73},{note:"A#",freq:233.08,keyCode:79}]]},{name:"One-line",notes:[[{note:"C",freq:261.63,keyCode:68},{note:"D",freq:293.66,keyCode:70},{note:"E",freq:329.63,keyCode:71},{note:"F",freq:349.23,keyCode:72},{note:"G",freq:392,keyCode:74},{note:"A",freq:440,keyCode:75},{note:"B",freq:493.88,keyCode:76}],[{note:"C#",freq:277.18,keyCode:82},{note:"D#",freq:311.13,keyCode:84},{},{note:"F#",freq:369.99,keyCode:85},{note:"G#",freq:415.3,keyCode:73},{note:"A#",freq:466.16,keyCode:79}]]},{name:"Two-line",notes:[[{note:"C",freq:523.25,keyCode:68},{note:"D",freq:587.32,keyCode:70},{note:"E",freq:659.26,keyCode:71},{note:"F",freq:698.46,keyCode:72},{note:"G",freq:784,keyCode:74},{note:"A",freq:880,keyCode:75},{note:"B",freq:987.75,keyCode:76}],[{note:"C#",freq:554.36,keyCode:82},{note:"D#",freq:622.26,keyCode:84},{},{note:"F#",freq:739.98,keyCode:85},{note:"G#",freq:830.6,keyCode:73},{note:"A#",freq:932.32,keyCode:79}]]},{name:"Three-line",notes:[[{note:"C",freq:1046.5,keyCode:68},{note:"D",freq:1174.6,keyCode:70},{note:"E",freq:1318.5,keyCode:71},{note:"F",freq:1396.9,keyCode:72},{note:"G",freq:1568,keyCode:74},{note:"A",freq:1720,keyCode:75},{note:"B",freq:1975.5,keyCode:76}],[{note:"C#",freq:1108.7,keyCode:82},{note:"D#",freq:1224.5,keyCode:84},{},{note:"F#",freq:1480,keyCode:85},{note:"G#",freq:1661.2,keyCode:73},{note:"A#",freq:1864.6,keyCode:79}]]},{name:"Four-line",notes:[[{note:"C",freq:2093,keyCode:68},{note:"D",freq:2349.2,keyCode:70},{note:"E",freq:2637,keyCode:71},{note:"F",freq:2793.8,keyCode:72},{note:"G",freq:3136,keyCode:74},{note:"A",freq:3440,keyCode:75},{note:"B",freq:3951,keyCode:76}],[{note:"C#",freq:2217.4,keyCode:82},{note:"D#",freq:2489,keyCode:84},{},{note:"F#",freq:2960,keyCode:85},{note:"G#",freq:3332.4,keyCode:73},{note:"A#",freq:3729.2,keyCode:79}]]}],t=(async()=>{const e=await(async()=>{const e=await fetch("https://star-tunes.herokuapp.com/?request=color");return await e.json()})();for(let n=0;n<e.length;n++){const t={id:e[n][0],name:e[n][1],piano:e[n][2],keys:e[n][3]};e[n]=t}return e})(),s=document.getElementsByClassName("w-tile"),a=document.getElementsByClassName("b-tile"),o=document.getElementsByClassName("setup-color"),l=document.getElementsByClassName("setup-select"),i=e=>{try{const t=n[l[2].value].notes.flat().find((n=>{if(n.keyCode===e)return n}));return[t.freq,t.note]}catch{return!1}},r=[],d=(e,n,t)=>{try{const s=document.getElementById("volume"),a=+s.value/+s.max;t.gain.setValueAtTime(a*a,0);const o=n.createOscillator();o.type=l[1].options[l[1].value].innerHTML.toLowerCase(),o.connect(t);const c=document.getElementsByClassName("tile");if(i(e.keyCode)){const t=i(e.keyCode);let s;o.frequency.setValueAtTime(t[0],0);for(let e=0;e<c.length;e++)c[e].innerHTML===t[1]&&(s=c[e]);s.classList.add("tile-pressed"),o.start(),document.addEventListener("keyup",(()=>{r.splice(r.indexOf(e.keyCode),1),document.removeEventListener("keydown",d,!1),s.classList.remove("tile-pressed"),o.stop(n.currentTime+.03)}))}}catch{return}},c=document.getElementsByClassName("sun-cloud"),u=document.getElementById("sun"),m=document.getElementsByTagName("aside")[0],p=document.getElementById("body-container");u.addEventListener("click",(()=>{m.classList.toggle("slide"),p.addEventListener("click",(()=>{m.classList.remove("slide")}))})),u.addEventListener("mouseenter",(()=>{c[0].classList.add("cloud-move-f"),c[1].classList.add("cloud-move-b"),u.addEventListener("mouseleave",(()=>{c[0].classList.remove("cloud-move-f"),c[1].classList.remove("cloud-move-b")}))}));const v=(async()=>{const e=await(async()=>{const e=await fetch("https://star-tunes.herokuapp.com/?request=waves");return await e.json()})();for(let n=0;n<e.length;n++){const t=e[n][1];e[n]=t}return e})(),y=async()=>{const e=await(async()=>{const e=await fetch("https://star-tunes.herokuapp.com/?request=songs");return await e.json()})();for(let n=0;n<e.length;n++){const t={id:e[n][0],name:e[n][1],url:e[n][2],mark:e[n][3],reviews:e[n][4],author:e[n][5]};e[n]=t}return e},g=(y(),async e=>{const n=await fetch(`https://star-tunes.herokuapp.com/?delete=song&id=${e}`);console.log(await n.json())}),f=async()=>{const e=await(async()=>{const e=await fetch("https://star-tunes.herokuapp.com/?request=users");return await e.json()})();for(let n=0;n<e.length;n++){const t={id:e[n][0],name:e[n][1],password:e[n][2],rating:e[n][3],marked:["cringe"],songs:["cringe"],pfp:e[n][5]};console.log(e[n][0],e[n][1],e[n][2],e[n][3],e[n][4],e[n][5]),e[n]=t}return e},k=e=>{let t="";const s=e?7:6;for(let a=0;a<s;a++)t+=e?`<div class="w-tile tile">${n[0].notes[0][a].note}</div>`:`<div class="b-tile tile">${n[0].notes[1][a].note}</div>`;return t},b=e=>{let n="";for(let t=0;t<e;t++)n+="☆";return n},h=e=>{let n="";for(let t=0;t<e.marked.length;t++)n+='\n    <li class="marked-song">\n      <label class="top-position">0</label>\n      <label class="marked-name">Cringe song</label>\n      <div class="song-info-alt">\n        <p class="alt-text">info</p>\n        <div class="song-info">\n          <label class="song-info-author">username</label>\n          <p class="song-info-line"></p>\n          <div class="song-info-mark">☆</div>\n        </div>\n      </div>\n    </li>\n    ';return n},C=async e=>{const n=await y(),t=[];for(let s=0;s<n.length;s++)n[s].author==e.name&&t.push(n[s]);let s="";for(let e=0;e<t.length;e++)s+=`\n    <li class="top-song">\n      <label class="song-id">${t[e].id}</label>\n      <div class="song">\n        <div class="player">\n          <button class="play-button">\n            <div class="play-button-back"></div>\n            <div class="play-button-front"></div> \n          </button>\n          <div class="play-data">\n            <label class="song-name">${t[e].name}</label>\n            <div class="play-line"></div>\n          </div>\n        </div>\n      </div>\n      <div class="song-info-alt">\n        <button class="delete-song">Delete song</button>\n      </div>\n    </li>\n    `;return s},L=e=>{const n=document.getElementById("message-container"),t=document.getElementsByClassName("message-btn")[0];document.getElementById("message-text").innerHTML=e,n.style.opacity=100,n.style.visibility="visible",t.addEventListener("click",(()=>{n.style.opacity=0,n.style.visibility="hidden"})),document.addEventListener("keydown",(e=>{27!==e.keyCode&&13!==e.keyCode||(n.style.opacity=0,n.style.visibility="hidden")}))},w=()=>{const e=document.getElementById("url-container"),n=document.getElementsByClassName("message-btn")[1],t=document.getElementsByClassName("message-btn")[2],s=document.getElementsByClassName("url-input");e.style.opacity=100,e.style.visibility="visible";const a=(e,n)=>n.map((e=>+e.id)).includes(e)?a(++e,n):e;n.addEventListener("click",(async()=>{const n=s[1].value.replace(/\\/g,"/"),t=await y();try{const o={id:a(0,t),name:s[0].value,url:n,mark:0,reviews:0,author:W.name};await(async e=>{const n=await fetch(`https://star-tunes.herokuapp.com/?create=song&id=${e.id}&name=${e.name}&url=${e.url}&mark=${e.mark}&reviews=${e.reviews}&author=${e.author}`);console.log(await n.json())})(o),s[0].value="",s[1].value="",e.style.opacity=0,e.style.visibility="hidden",await x(W)}catch{L("Please, give correct link"),s[0].value="",s[1].value="",e.style.opacity=0,e.style.visibility="hidden",w()}})),t.addEventListener("click",(()=>{s[0].value="",s[1].value="",e.style.opacity=0,e.style.visibility="hidden"}))},E=[{name:"song name",author:"author name",song:"song file",mark:5,position:0},{name:"song name",author:"author name",song:"song file",mark:4,position:2},{name:"song name",author:"author name",song:"song file",mark:5,position:1},{name:"song name",author:"author name",song:"song file",mark:5,position:4},{name:"song name",author:"author name",song:"song file",mark:3,position:3},{name:"song name",author:"author name",song:"song file",mark:5,position:0},{name:"song name",author:"author name",song:"song file",mark:4,position:2},{name:"song name",author:"author name",song:"song file",mark:5,position:1},{name:"song name",author:"author name",song:"song file",mark:5,position:4},{name:"song name",author:"author name",song:"song file",mark:3,position:3}],q=async e=>{const n=await fetch(`https://star-tunes.herokuapp.com/?update=user&id=${e.id}&pfp=${e.pfp}`);console.log(await n.json())},$=(e,t,s,a,o)=>{e.target.classList.add("tile-pressed");const i=document.getElementById("volume"),r=+i.value/+i.max;s.gain.setValueAtTime(r*r,0);const d=t.createOscillator();var c;d.type=l[1].options[l[1].value].innerHTML.toLowerCase(),d.frequency.setValueAtTime((c=e.target.innerHTML,n[l[2].value].notes.flat().find((e=>{if(e.note===c)return e})).freq),0),d.connect(s),d.start(),document.addEventListener("mouseup",(()=>{d.stop(t.currentTime)})),a.addEventListener("mouseup",(e=>{d.stop(t.currentTime),e.target.classList.contains("tile")&&e.target.classList.remove("tile-pressed")})),e.target.addEventListener("mouseleave",(()=>{d.stop(t.currentTime)})),a.addEventListener("mouseleave",(e=>{d.stop(t.currentTime),e.target.classList.contains("tile")&&(e.target.classList.remove("tile-hover"),e.target.classList.remove("tile-pressed"))}))},B=async e=>{const n=document.getElementsByClassName("play-button"),t=document.getElementsByClassName("delete-song"),s=document.getElementsByClassName("song-id");for(let t=0;t<n.length;t++){let s=new Audio(e[t].url);n[t].addEventListener("click",(()=>{n[t].classList.toggle("active-btn"),console.log(e[t].url),n[t].classList.contains("active-btn")?s.play():s.pause()}))}for(let e=0;e<t.length;e++)t[e].addEventListener("click",(async()=>{await g(s[e].innerHTML),await x(W)}))},T=document.querySelector("main"),N=document.getElementById("register-btns"),M=()=>{N.innerHTML="",N.innerHTML='\n<button class="header-btn">LOG IN</button>\n<button class="header-btn">SIGN IN</button>\n';const e=document.getElementsByClassName("header-btn")[0];document.getElementsByClassName("header-btn")[1].addEventListener("click",(async()=>{await I(!0)})),e.addEventListener("click",(async()=>{await I(!1)}))},I=async e=>{const n=document.getElementById("popup"),t=document.getElementById("popup-container"),s=document.getElementsByClassName("popup-input");t.style.opacity=100,t.style.visibility="visible",n.innerHTML="",n.innerHTML=(e=>`\n  <div id="popup-sakura"></div>\n  <div id="popup-mountains"></div>\n    <form id="popup-frames" onsubmit="event.preventDefault()">\n    <label>${e?"Sign Up":"Log In"}</label>\n    <input class="popup-input" type="text" placeholder="Name here" autocomplete="false" required>\n    <input class="popup-input" type="password" placeholder="Password" autocomplete="false" required>\n    <div id="popup-btns">\n      <button class="popup-btn" type="submit">${e?"Sign up":"Log In"}</button>\n      <button class="popup-btn" type="submit">Cancel</button>\n    </div>\n  </form>\n  `)(e);const a=document.getElementsByClassName("popup-btn")[0],o=document.getElementsByClassName("popup-btn")[1];let l=await f();a.addEventListener("click",(async()=>{if(e){let e=!1;if(s[0].value&&s[1].value){for(let n=0;n<l.length;n++)l[n].name===s[0].value&&(e=!0);if(e)s[0].value="",s[0].placeholder="This username is taken";else{const e=(n,t)=>t.map((e=>+e.id)).includes(n)?e(++n,t):n,n={id:e(0,l),name:s[0].value,password:s[1].value,rating:0,marked:"''",songs:[],pfp:0};await(async e=>{const n=await fetch(`https://star-tunes.herokuapp.com/?create=user&id=${e.id}&name=${e.name}&password=${e.password}&rating=${e.rating}&marked=${e.marked}&pfp=${e.pfp}`);console.log(await n.json())})(n),l=await f(),t.style.opacity=0,t.style.visibility="hidden",W=n,await H(W)}}}else{let e=null;for(let n=0;n<l.length;n++)s[0].value&&s[1].value&&l[n].name==s[0].value&&(e=l[n]);e?e.password===s[1].value?(W=e,await H(W),t.style.opacity=0,t.style.visibility="hidden"):(s[1].value="",s[1].placeholder="Wrong password"):(s[0].value="",s[0].placeholder="No such user")}})),o.addEventListener("click",(()=>{t.style.opacity=0,t.style.visibility="hidden"})),document.addEventListener("keydown",(e=>{27===e.keyCode&&(t.style.opacity=0,t.style.visibility="hidden")}))},H=async e=>{var n;N.innerHTML="",N.innerHTML=`\n<div id="profile">\n  <button class="header-btn">\n  ${(n=e.name).length>10?n.split("").slice(0,9).join("")+"...":n}\n  </button>\n  <div id="profile-content">\n    <button class="profile-btn">Enter profile</button>\n    <button class="profile-btn">Log out</button>\n    <button class="profile-btn">Delete user</button>\n  </div>\n</div>\n`,await(async e=>{const n=document.getElementsByClassName("profile-btn")[0],t=document.getElementsByClassName("profile-btn")[1],s=document.getElementsByClassName("profile-btn")[2],a=document.getElementById("ask-container"),o=document.getElementsByClassName("question-btn"),l=document.getElementById("question-place");let i=await f();n.addEventListener("click",(()=>{x(e)})),t.addEventListener("click",(()=>{l.innerHTML="Do you want to log out?",a.classList.add("shown"),o[0].addEventListener("click",(()=>{a.classList.remove("shown"),W=null,M(),G()})),o[1].addEventListener("click",(()=>{a.classList.remove("shown")}))})),s.addEventListener("click",(async()=>{l.innerHTML="Are you sure you want to delete your account?",a.classList.add("shown"),o[0].addEventListener("click",(async()=>{a.classList.remove("shown"),await(async e=>{const n=await fetch(`https://star-tunes.herokuapp.com/?delete=user&id=${e.id}`),t=await fetch(`https://star-tunes.herokuapp.com/?delete=songs&author=${e.name}`);console.log(await n.json(),await t.json())})(e),i.splice(i.indexOf(i.find((n=>{if(n.name===e.name)return n}))),1),W=null,M(),G()})),o[1].addEventListener("click",(()=>{a.classList.remove("shown")}))}))})(e)},A=async()=>{self.location.href="#piano",m.classList.remove("slide"),T.innerHTML=await(async()=>`\n<div class="piano-setup">\n  <label>Instrument settings</label>\n  <div class="setup-content">\n    <div class="setup-block">\n      <label>Instrument presets</label>\n      <select class="setup-select">\n        <option value="0">Synthezator</option>\n        <option value="1">Classic piano</option>\n        <option value="2">Dudka ebat'</option>\n      </select>\n    </div>  \n    <div class="setup-block">\n      <label>Wave type</label>\n      <select class="setup-select">\n        ${await(async()=>{let e="";const n=await v;for(let t=0;t<n.length;t++)e+=`\n    <option value="${t}">${n[t]}</option>\n    `;return e})()}\n      </select>\n    </div>  \n    <div class="setup-block">\n      <label>Octaves</label>\n      <select class="setup-select">\n        ${(()=>{let e="";for(let t=0;t<n.length;t++)e+=3===t?`\n      <option value="${t}" selected>${n[t].name}</option>\n      `:`\n      <option value="${t}">${n[t].name}</option>\n      `;return e})()}\n      </select>\n    </div>  \n    <div class="setup-block">\n      <label>Volume</label>\n      <input type="range" id="volume" min="0" max="100" value="50">\n    </div>\n  </div>\n  <img src="assets/img/info-triangle.svg">\n  </div>\n  <div class="piano-setup" id="color-setup">\n  <label>Color settings</label>\n    <div class="setup-content">\n      <div class="setup-block">\n        <label>Color presets</label>\n        <select class="setup-select">\n          ${await(async()=>{const e=await t;let n="";for(let t=0;t<e.length;t++)n+=`\n    <option value="${t}">${e[t].name}</option>\n    `;return n})()}\n        </select>\n      </div>  \n      <div class="color-block">\n        <label>Piano background</label>\n        <input type="color" value="#294F4E" class="setup-color">\n      </div>\n      <div class="color-block">\n        <label>Keys background</label>\n        <input type="color" value="#D6C1A9" class="setup-color">\n      </div>\n    </div>\n  <img src="assets/img/info-triangle.svg">\n</div>\n`)(),T.innerHTML+=`\n<div id="piano">\n  <div id="piano-w">\n    ${k(!0)}\n  </div>\n  <div id="piano-b">\n    ${k(!1)}\n  </div>\n</div>\n`,await(async()=>{const e=await t;o[0].addEventListener("input",(()=>{const e=o[0].value;for(let n=0;n<a.length;n++)a[n].style.background=e;for(let n=0;n<s.length;n++)s[n].style.color=e;piano.style.background=e})),o[1].addEventListener("input",(()=>{const e=o[1].value;for(let n=0;n<s.length;n++)s[n].style.background=e;for(let n=0;n<a.length;n++)a[n].style.color=e})),l[3].addEventListener("input",(()=>{const n=l[3].value;(e=>{for(let n=0;n<a.length;n++)a[n].style.background=e;for(let n=0;n<s.length;n++)s[n].style.color=e;piano.style.background=e})(e[n].piano),o[0].value=e[n].piano,(e=>{for(let n=0;n<s.length;n++)s[n].style.background=e;for(let n=0;n<a.length;n++)a[n].style.color=e})(e[n].keys),o[1].value=e[n].keys}))})(),(()=>{const e=new AudioContext,n=e.createGain();n.connect(e.destination);const t=document.querySelector("#piano");let s=!1;t.addEventListener("mouseover",(a=>{a.target.classList.contains("tile")&&(a.target.classList.add("tile-hover"),s&&$(a,e,n,t),a.target.addEventListener("mouseleave",(e=>{e.target.classList.contains("tile")&&(e.target.classList.remove("tile-hover"),e.target.classList.remove("tile-pressed"))})))})),t.addEventListener("mousedown",(a=>{s=!0,a.target.classList.contains("tile")&&$(a,e,n,t)})),document.addEventListener("mouseup",(()=>{s=!1})),t.addEventListener("mouseup",(e=>{s=!1,e.target.classList.contains("tile")&&e.target.classList.remove("tile-pressed")})),t.addEventListener("mouseleave",(e=>{s=!1,e.target.classList.contains("tile")&&(e.target.classList.remove("tile-hover"),e.target.classList.remove("tile-pressed"))}))})(),(()=>{const e=new AudioContext,n=e.createGain();n.connect(e.destination),document.addEventListener("keydown",(t=>{!1===r.includes(t.keyCode)&&(d(t,e,n),r.push(t.keyCode))}))})()},D=()=>{document.removeEventListener("keydown",d,!1),m.classList.remove("slide"),T.innerHTML="",T.innerHTML='\n  <div id="songs-list"></div>\n'},G=()=>{self.location.href="#top",D(),document.getElementById("songs-list").innerHTML=(e=>`<h3>Top Songs</h3><ul id="top">${(e=>{let n="";return e.forEach((e=>{n+=`\n    <li class="top-song">\n      <label class="top-position">${e.position}</label>\n      <div class="song">\n        <div class="player">\n          <button class="play-button">\n            <div class="play-button-back"></div>\n            <div class="play-button-front"></div> \n          </button>\n          <div class="play-data">\n            <label class="song-name">${e.name}</label>\n            <div class="play-line"></div>\n          </div>\n        </div>\n      </div>\n      <div class="song-info-alt">\n        <p class="alt-text">info</p>\n        <div class="song-info">\n          <label class="song-info-author">${e.author}</label>\n          <p class="song-info-line"></p>\n          <div class="song-info-mark">${b(e.mark)}</div>\n        </div>\n      </div>\n    </li>\n  `})),n})(e)}</ul>`)(E)},x=async e=>{self.location.href="#profile",m.classList.remove("slide"),T.innerHTML="",T.innerHTML=await(async e=>{const n=await y(),t=[];for(let s=0;s<n.length;s++)n[s].author==e.name&&t.push(n[s]);return`\n<div id="profile-section">\n  <div id="profile-window"> \n    <div id="pfp">\n      <img class="profile-avatar current-pfp" src="./assets/img/pfp/ico-man.svg">\n      <img class="profile-avatar" src="./assets/img/pfp/ico-demon.svg">\n      <img class="profile-avatar" src="./assets/img/pfp/ico-dragon.svg">\n      <img class="profile-avatar" src="./assets/img/pfp/ico-lotos.svg">\n      <img class="profile-avatar" src="./assets/img/pfp/ico-ninja.svg">\n      <img class="profile-avatar" src="./assets/img/pfp/ico-samurai.svg">\n      <img class="profile-avatar" src="./assets/img/pfp/ico-woman.svg">\n    </div>\n    <label id="profile-name">${e.name}</label>\n    <label class="profile-info">${e.rating} in rating</label>\n    <label class="profile-info">${t.length} songs</label>\n    <button class="profile-sec-btn">Start creating</button>\n    <label class="profile-sec-btn">Upload your song</label>\n  </div>\n  \n  <div id="profile-marked">\n    <ul id="marked">\n      ${h(e)?h(e):"You haven't marked anything yet"}\n    </ul>\n  </div>\n</div>\n<div id="songs-list">\n  <ul id="user-songs">\n    ${await C(e)?await C(e):"You haven't got any songs yet"}\n  </ul>\n</div>\n<div id="chat">\n  <div id="chat-head">1 online</div>\n  <div id="chat-messages-scroller">\n    <div id="chat-messages"></div>\n  </div>\n  <div id="chat-input">\n    <input id="chat-text-field" placeholder="Enter message..." autocomplete="off">\n    <div id="chat-send"></div>\n  </div>\n  <input>\n</div>\n`})(e);const n=await(async e=>{const n=await y(),t=[];for(let s=0;s<n.length;s++)n[s].author==e.name&&t.push(n[s]);return t})(e);await B(n),(e=>{const n=document.getElementById("chat-head"),t=document.getElementById("chat-messages"),s=document.getElementById("chat-text-field"),a=document.getElementById("chat-send"),o=io("https://pointing-poker-backend.herokuapp.com");o.emit("chat-connect-user",e.name),a.addEventListener("click",(()=>{""!==s.value&&o.emit("chat-message-request",s.value),s.value=""})),document.addEventListener("keydown",(e=>{13===e.keyCode&&(""!==s.value&&o.emit("chat-message-request",s.value),s.value="")})),o.on("chat-message-post",(e=>{var n,s;t.innerHTML+=(n=e[0],s=e[1],`\n<div class="${n===W.name?"your":""} message">\n  <label class="message-user">${n}:</label>\n  <label class="message-text">${s}</label>\n  <div class="message-point"></div>\n</div>\n`)})),o.on("chat-send-all-users",(e=>{n.innerHTML=`${e.length} online`}))})(e),await(async e=>{const n=document.getElementsByClassName("profile-sec-btn")[0],t=document.getElementById("pfp"),s=document.getElementsByClassName("profile-sec-btn")[1];n.addEventListener("click",(async()=>{await A()})),t.addEventListener("click",(()=>{t.classList.toggle("open-pfp")})),t.addEventListener("mouseleave",(()=>{t.classList.remove("open-pfp")}));const a=document.getElementsByClassName("profile-avatar");for(let n=0;n<a.length;n++)a[n].classList.remove("current-pfp"),a[n].addEventListener("click",(async()=>{e.pfp=n,await q(e),console.log(e);for(let e=0;e<a.length;e++)a[e].classList.remove("current-pfp");a[e.pfp].classList.add("current-pfp")}));a[e.pfp].classList.add("current-pfp"),s.addEventListener("click",(async()=>{await w()}))})(e)},F=async()=>{self.location.href="#songs",m.classList.remove("slide"),T.innerHTML="",D();const e=await y();document.getElementById("songs-list").innerHTML=await(e=>`<h3>All Songs</h3><ul id="top">${(e=>{let n="";return console.log(e),e.forEach((e=>{n+=`\n    <li class="top-song">\n      <label class="top-position">${e.id}</label>\n      <div class="song">\n        <div class="player">\n          <button class="play-button">\n            <div class="play-button-back"></div>\n            <div class="play-button-front"></div> \n          </button>\n          <div class="play-data">\n            <label class="song-name">${e.name}</label>\n            <div class="play-line"></div>\n          </div>\n        </div>\n      </div>\n      <div class="song-info-alt">\n        <p class="alt-text">info</p>\n        <div class="song-info">\n          <label class="song-info-author">${e.author}</label>\n          <p class="song-info-line"></p>\n          <div class="song-info-mark">${b(Math.trunc(e.mark/e.reviews))}</div>\n        </div>\n      </div>\n    </li>\n  `})),n})(e)}</ul>`)(e),await B(e)},j=async()=>{self.location.href="#admin",m.classList.remove("slide"),T.innerHTML=await(async()=>`\n<div id="admin-panel-container">\n  <div class="admin-panel-section">\n    <h3 class="admin-panel-h3">Users</h3>\n    <ul class = "admin-panel-list">\n      ${await(async()=>{const e=await f();let n="";return e.forEach((e=>{n+=`\n      <li class="admin-panel-element">\n        <div class="admin-panel-user-data">\n          <label>ID: ${e.id}</label>\n          <label>Username: ${e.name}</label>\n          <label>Password: ${e.password}</label>\n        </div>\n        <button class="delete-song del-user">Delete user</button>\n      </li>\n    `})),n})()}\n    </ul>\n  </div>\n  <div class="admin-panel-section">\n    <h3 class="admin-panel-h3">Songs</h3>\n    <ul class="admin-panel-list">\n      ${await(async()=>{const e=await y();let n="";return e.forEach((e=>{n+=`\n      <li class="admin-panel-element">\n        <div class="admin-panel-user-data">\n          <label>ID: ${e.id}</label>\n          <label>Name: ${e.name}</label>\n          <label>Url: <input class="url-container" type="text" value=${e.url}></label>\n          <label>Author: ${e.author}</label>\n          <label>Mark: ${Math.trunc(e.mark/e.reviews)?Math.trunc(e.mark/e.reviews):0}</label>\n        </div>\n        <button class="delete-song del-song">Delete song</button>\n      </li>\n    `})),n})()}\n    </ul>\n  </div>\n</div\n`)()},S=document.getElementsByClassName("aside-links")[0],O=document.getElementsByClassName("aside-links")[1],P=document.getElementsByClassName("aside-links")[2],U=document.getElementsByClassName("aside-links")[3],V=document.getElementsByClassName("aside-links")[4];document.addEventListener("mousemove",(e=>{const n=document.querySelector("#parallax");let t=window.innerWidth/2,s=window.innerHeight/2,a=`${50-.02*(e.clientX-t)}% ${50-.02*(e.clientY-s)}%`;n.style.backgroundPosition=a}));let W=null;window.onload=async()=>{await(async()=>{await j(),M(),P.addEventListener("click",(async()=>{await A()})),S.addEventListener("click",(()=>{G()})),O.addEventListener("click",(async()=>{await F()})),U.addEventListener("click",(async()=>{W?await x(W):L("Please sign up first")})),V.addEventListener("click",(async()=>{await j()}))})()}})();