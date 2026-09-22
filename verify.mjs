import assert from 'node:assert/strict';
import { writeFile, mkdir } from 'node:fs/promises';
await mkdir('.preview', {recursive:true});
const base = process.argv[2] || 'http://localhost:3000';
const pages = await (await fetch('http://127.0.0.1:9223/json')).json();
const ws = new WebSocket(pages.find(p=>p.type==='page').webSocketDebuggerUrl);
await new Promise(resolve=>ws.addEventListener('open',resolve,{once:true}));
let seq=0;
const pending=new Map(),errors=[];
ws.addEventListener('message',({data})=>{
  const m=JSON.parse(data);
  if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result);}
  if(m.method==='Runtime.exceptionThrown') errors.push(m.params.exceptionDetails.text);
  if(m.method==='Network.responseReceived'&&m.params.response.status>=400) errors.push(`${m.params.response.status} ${m.params.response.url}`);
});
const send=(method,params={})=>new Promise((resolve,reject)=>{pending.set(++seq,{resolve,reject});ws.send(JSON.stringify({id:seq,method,params}));});
async function evaluate(expression){const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true,userGesture:true});if(r.exceptionDetails)throw new Error(JSON.stringify(r.exceptionDetails));return r.result.value;}
const delay=ms=>new Promise(r=>setTimeout(r,ms));
const prefix=base.includes('localhost')?'local':'production';
async function screenshot(name){const r=await send('Page.captureScreenshot',{format:'png'});await writeFile(`.preview/${prefix}-${name}.png`,Buffer.from(r.data,'base64'));}
try{
  await send('Runtime.enable');await send('Network.enable');await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await send('Page.navigate',{url:base});
  for(let i=0;i<120;i++){if(await evaluate('typeof showMain === "function"'))break;await delay(250);}
  assert.equal(await evaluate('document.querySelectorAll(".card-back svg.card-star").length'),12);
  assert.equal(await evaluate('[...document.querySelectorAll(".card-back")].every(card=>card.textContent.trim()==="")'),true,'card backs use SVG geometry, not emoji text');
  assert.equal(await evaluate('getComputedStyle(document.querySelector(".card-star")).width'),'26px');
  await screenshot('svg-card-stars-mobile');
  await evaluate(`document.querySelector('.memory-card').click()`);
  assert.equal(await evaluate('document.querySelectorAll(".memory-card.flipped").length'),1);
  await evaluate(`document.querySelector('#restart-game').click()`);
  assert.equal(await evaluate("document.querySelector('#skip-game').classList.contains('hidden')"),true);
  await delay(Math.max(0,await evaluate('game.skipAvailableAt-Date.now()'))+150);
  assert.equal(await evaluate("document.querySelector('#skip-game').classList.contains('hidden')"),false);
  assert.equal(await evaluate("document.querySelector('#game-screen').classList.contains('hidden')"),false);
  await evaluate("document.querySelector('#skip-game').click();document.querySelector('#giftbox').click()");
  await delay(1200);
  // Scroll normally and wait for native loading; never override image loading or call decode to start it.
  for (const selector of ['.polaroid', '.journey-photo']) {
    const count=await evaluate(`document.querySelectorAll('${selector}').length`);
    for(let i=0;i<count;i++){
      await evaluate(`document.querySelectorAll('${selector}')[${i}].scrollIntoView({behavior:'instant',block:'center'})`);
      for(let wait=0;wait<80;wait++){
        if(await evaluate(`(()=>{const img=document.querySelectorAll('${selector}')[${i}].querySelector('${selector==='.polaroid'?'img':'.journey-real-photo'}');return img.complete&&img.naturalWidth>0})()`))break;
        await delay(100);
      }
      assert.equal(await evaluate(`(()=>{const img=document.querySelectorAll('${selector}')[${i}].querySelector('${selector==='.polaroid'?'img':'.journey-real-photo'}');return img.complete&&img.naturalWidth>0&&getComputedStyle(img).display!=='none'})()`),true);
    }
  }
  const photos=await evaluate(`(async()=>{const imgs=[...document.querySelectorAll('.photo-image.real-photo img,.journey-real-photo')];return await Promise.all(imgs.map(async img=>{try{await img.decode();return {src:img.getAttribute('src'),loaded:img.naturalWidth>0}}catch{return {src:img.getAttribute('src'),loaded:false}}}))})()`);
  assert.equal(photos.length,11);assert.ok(photos.every(p=>p.loaded),JSON.stringify(photos));
  assert.equal(await evaluate('[...document.querySelectorAll(".journey-real-photo")].every(img=>img.getAttribute("src").startsWith("assets/journey/"))'),true);
  await delay(150);
  assert.equal(await evaluate('document.querySelectorAll(".journey-photo.has-photo").length'),5);
  await evaluate(`document.querySelector('#memories').scrollIntoView({behavior:'instant'})`);await delay(1000);await screenshot('photo-gallery-mobile');
  await evaluate(`document.querySelector('.polaroid').click()`);
  await evaluate('document.querySelector("#detail-content img").decode()');
  assert.match(await evaluate('document.querySelector("#detail-content img").getAttribute("src")'),/Gegehh/);
  await evaluate(`document.querySelector('#detail-modal .close-modal').click()`);await delay(100);
  await evaluate(`document.querySelector('#journey').scrollIntoView({behavior:'instant'})`);await delay(900);await screenshot('photo-journey-mobile');
  await evaluate(`document.querySelector('.journey-photo').click()`);
  await evaluate('document.querySelector("#detail-content img").decode()');
  assert.equal(await evaluate('document.querySelector("#detail-content img").getAttribute("src")'),'assets/journey/01-kecil.jpeg');
  await evaluate(`document.querySelector('#detail-modal .close-modal').click()`);await delay(100);
  for(let i=0;i<4;i++){
    await evaluate(`document.querySelectorAll('.wish-card')[${i}].click()`);
    await evaluate('document.querySelector(".letter-real-photo").decode()');await delay(100);
    assert.equal(await evaluate('document.querySelector(".letter-photo").classList.contains("has-photo")'),true);
    assert.equal(await evaluate(`document.querySelector('.letter-copy').textContent===CONFIG.wishes[${i}].text`),true);
    if(i===1)await screenshot('photo-mama-letter-mobile');
    await evaluate(`document.querySelector('#detail-modal .close-modal').click()`);await delay(70);
  }
  assert.equal(await evaluate('document.documentElement.scrollWidth<=innerWidth'),true);
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:960,deviceScaleFactor:1,mobile:false});
  await evaluate(`document.querySelector('#memories').scrollIntoView({behavior:'instant'})`);await delay(700);await screenshot('photo-gallery-desktop');
  assert.equal(await evaluate('document.documentElement.scrollWidth<=innerWidth'),true);
  for (const width of [320,375,390,768]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height:844,deviceScaleFactor:1,mobile:true});
    assert.equal(await evaluate('document.documentElement.scrollWidth<=innerWidth'),true,`overflow at ${width}`);
  }
  await evaluate('startMusic()');await delay(300);
  assert.equal(await evaluate('music.master.gain.value > .69 && music.playing'),true);
  await evaluate("document.querySelector('#celebrate-btn').click()");
  assert.equal(await evaluate("document.querySelector('#detail-modal').open"),true);
  await delay(3300);
  assert.equal(await evaluate("document.querySelector('#surprise-modal').open"),false,'ticket must wait five seconds');
  await delay(2000);
  assert.equal(await evaluate("document.querySelector('#surprise-modal').open"),true);
  await evaluate("document.querySelector('.ticket-frame img').decode()");
  assert.equal(await evaluate("document.querySelector('.ticket-frame img').naturalWidth"),2151);
  await screenshot('ticket-mobile');
  await evaluate("document.querySelector('#next-surprise').click()");
  assert.match(await evaluate("document.querySelector('#surprise-content').textContent"),/lemari/);
  assert.equal(await evaluate("/[\\u2726\\u2727\\u2733\\u2728\\u274b\\u2b50\\u2605\\u2606]/u.test(document.body.textContent)"),false);
  assert.deepEqual(errors,[]);
  console.log(`PASS ${base}: all 15 photographs loaded, gallery and milestone photo modals work, all four family photos and supplied letters match, mobile/desktop layout checked, no browser errors or failed resources.`);
}finally{ws.close();}
