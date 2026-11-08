/* Файлды сақтау: Claude ортасында "downloads" рұқсаты, ал GitHub Pages-те кәдімгі браузер жүктеуі қолданылады */
async function getDl(){
  if(typeof claude!=='undefined'&&claude.use){try{var d=await claude.use('downloads');if(d)return d}catch(e){}}
  return{save:async function(o){
    var b=o.data instanceof Blob?o.data:new Blob([o.data]);
    var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=o.filename;
    document.body.appendChild(a);a.click();a.remove();
    setTimeout(function(){URL.revokeObjectURL(a.href)},2000)}}}

var ROOMS=[{n:"101",t:"Стандарт",p:15000},{n:"102",t:"Стандарт",p:15000},{n:"201",t:"Делюкс",p:22000},{n:"202",t:"Делюкс",p:22000},{n:"301",t:"Люкс",p:35000},{n:"302",t:"Семейный",p:28000},{n:"303",t:"Семейный",p:28000},{n:"401",t:"Президенттік",p:60000},{n:"103",t:"Стандарт",p:15000},{n:"104",t:"Стандарт",p:16000},{n:"203",t:"Делюкс",p:23000},{n:"204",t:"Делюкс",p:24000},{n:"304",t:"Люкс",p:38000},{n:"305",t:"Семейный",p:30000},{n:"402",t:"Президенттік",p:65000}];ROOMS.sort(function(a,b){return a.n<b.n?-1:1});
var KEY="hotel_bookings_v4";
var CAT={"Стандарт":{e:"🛏️",c:2,d:"Wi-Fi, ТВ, кондиционер"},"Делюкс":{e:"🛋️",c:3,d:"Кең бөлме, мини-бар, балкон"},"Люкс":{e:"👑",c:4,d:"Екі бөлмелі, джакузи, таңғы ас"},"Семейный":{e:"👨‍👩‍👧‍👦",c:5,d:"Екі жатын бөлме, балаларға арналған орын"},"Президенттік":{e:"🏰",c:6,d:"Панорамалық көрініс, жеке қызмет"}};
var SEED=[
{id:1,name:"Айдос Нұрлан",phone:"+7 701 111 22 33",room:"101",din:"2026-11-02",dout:"2026-11-05",status:"active"},
{id:2,name:"Мадина Серік",phone:"+7 707 222 33 44",room:"201",din:"2026-11-10",dout:"2026-11-11",status:"active"},
{id:3,name:"Ерлан Қасым",phone:"+7 705 333 44 55",room:"301",din:"2026-10-01",dout:"2026-10-04",status:"inactive"},
{id:4,name:"Динара Әлі",phone:"+7 747 444 55 66",room:"102",din:"2026-11-15",dout:"2026-11-22",status:"active"},
{id:5,name:"Бауыржан Омар",phone:"+7 777 555 66 77",room:"401",din:"2026-09-20",dout:"2026-09-22",status:"inactive"},
{id:6,name:"Жанар Темір",phone:"+7 700 666 77 88",room:"302",din:"2026-12-01",dout:"2026-12-08",status:"active"},
{id:7,name:"Салтанат Ахмет",phone:"+7 702 777 88 99",room:"303",din:"2026-11-25",dout:"2026-11-26",status:"active"},
{id:8,name:"Нұрсұлтан Бекболат",phone:"+7 701 888 11 22",room:"202",din:"2026-11-03",dout:"2026-11-06",status:"active",g:2},
{id:9,name:"Әсел Жақсылық",phone:"+7 707 999 22 33",room:"101",din:"2026-11-08",dout:"2026-11-15",status:"active",g:1},
{id:10,name:"Арман Ержанұлы",phone:"+7 705 123 45 67",room:"201",din:"2026-11-18",dout:"2026-11-20",status:"inactive",g:2},
{id:11,name:"Гүлнар Сағын",phone:"+7 747 234 56 78",room:"301",din:"2026-11-12",dout:"2026-11-14",status:"active",g:3},
{id:12,name:"Расул Қайрат",phone:"+7 777 345 67 89",room:"202",din:"2026-11-20",dout:"2026-11-27",status:"active",g:2},
{id:13,name:"Томирис Дәулет",phone:"+7 700 456 78 90",room:"102",din:"2026-12-03",dout:"2026-12-04",status:"active",g:2},
{id:14,name:"Ержан Мұрат",phone:"+7 702 567 89 01",room:"303",din:"2026-12-10",dout:"2026-12-17",status:"active",g:5},
{id:15,name:"Алия Бақыт",phone:"+7 708 678 90 12",room:"401",din:"2026-12-20",dout:"2026-12-23",status:"active",g:4},
{id:16,name:"Данияр Сәрсен",phone:"+7 701 789 01 23",room:"101",din:"2026-10-10",dout:"2026-10-12",status:"inactive",g:2}];
SEED=SEED.concat([[17,'Айгерім Нұрбек','103','2026-10-05','2026-10-08','i',2],[18,'Нұрлан Сейіт','103','2026-11-04','2026-11-06','a',2],[19,'Зарина Қанат','103','2026-11-20','2026-11-27','a',1],[20,'Мақсат Берік','104','2026-10-15','2026-10-18','i',2],[21,'Ләйлә Әбіл','104','2026-11-09','2026-11-10','a',2],[22,'Тимур Асқар','104','2026-12-05','2026-12-12','a',2],[23,'Сымбат Руслан','203','2026-11-01','2026-11-04','a',3],[24,'Қайрат Жандос','203','2026-11-14','2026-11-16','i',2],[25,'Гүлжан Ермек','203','2026-12-12','2026-12-19','a',3],[26,'Азамат Төлеген','204','2026-10-20','2026-10-23','i',2],[27,'Айнұр Мейір','204','2026-11-07','2026-11-14','a',2],[28,'Дәурен Сағат','204','2026-11-28','2026-11-29','a',1],[29,'Мейірім Оразбай','304','2026-11-02','2026-11-05','a',4],[30,'Бақыт Нұрқан','304','2026-11-19','2026-11-22','a',4],[31,'Алтынай Серікбай','304','2026-12-24','2026-12-31','a',3],[32,'Ермек Шәкір','305','2026-11-11','2026-11-18','a',5],[33,'Арайлым Дидар','305','2026-12-02','2026-12-04','i',4],[34,'Қуаныш Ғалым','305','2026-12-26','2027-01-02','a',5],[35,'Жәния Мұқан','402','2026-11-06','2026-11-09','a',2],[36,'Нұржан Әділет','402','2026-11-21','2026-11-23','a',3],[37,'Аружан Болат','402','2026-12-28','2026-12-31','i',2],[38,'Санжар Ерболат','202','2026-12-06','2026-12-10','a',2],[39,'Меруерт Қасен','201','2026-11-22','2026-11-24','a',2],[40,'Олжас Түймебай','301','2026-11-27','2026-12-01','a',3],[41,'Назерке Бекзат','301','2026-12-14','2026-12-16','i',2],[42,'Ержігіт Амангелді','302','2026-11-13','2026-11-20','a',4],[43,'Айша Сәкен','303','2026-11-03','2026-11-05','a',4],[44,'Қанат Серғазы','102','2026-12-10','2026-12-13','a',2],[45,'Динара Мырзабек','101','2026-12-01','2026-12-05','a',2],[46,'Бекзат Нұрдәулет','202','2026-10-28','2026-10-31','i',2]].map(function(a){return{id:a[0],name:a[1],phone:'+7 70'+(a[0]%10)+' '+(100+a[0]*37%900)+' '+(10+a[0]*3%80)+' '+(10+a[0]*7%80),room:a[2],din:a[3],dout:a[4],status:a[5]==='a'?'active':'inactive',g:a[6]}}));
var mem=null;
function load(){try{var r=localStorage.getItem(KEY);if(r)return JSON.parse(r)}catch(e){}return mem||SEED.slice()}
function save(){mem=data;try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){}}
var data=load();
var COL={'Стандарт':'#2f9e6f','Делюкс':'#2f5bea','Люкс':'#9a3cf0','Семейный':'#e0821f','Президенттік':'#d6336c'};
try{var xr=localStorage.getItem('hotel_rooms_v2');if(xr)ROOMS=JSON.parse(xr)}catch(e){}
function saveRooms(){try{localStorage.setItem('hotel_rooms_v2',JSON.stringify(ROOMS))}catch(e){}}
var $=function(i){return document.getElementById(i)};
function room(n){return ROOMS.filter(function(r){return r.n===n})[0]}
function nights(a,b){return Math.max(1,Math.round((new Date(b)-new Date(a))/864e5))}
function total(b){return nights(b.din,b.dout)*room(b.room).p}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function fmt(n){return n.toLocaleString("ru-RU")+" ₸"}
$("room").innerHTML=ROOMS.map(function(r){return '<option value="'+r.n+'">'+r.n+" · "+r.t+" · "+fmt(r.p)+"</option>"}).join("");

function render(){
 var q=$("q").value.trim().toLowerCase(),f=$("f").value,s=$("s").value.split("-");
 var list=data.filter(function(b){
  if(f!=="all"&&b.status!==f)return false;
  if(rt!=="all"&&room(b.room).t!==rt)return false;
  if($("fd1").value&&b.din<$("fd1").value)return false;
  if($("fd2").value&&b.din>$("fd2").value)return false;
  var tt=total(b);
  if($("fp1").value&&tt<+$("fp1").value)return false;
  if($("fp2").value&&tt>+$("fp2").value)return false;
  if($("fg").value&&(b.g||2)<+$("fg").value)return false;
  if($("frm").value&&$("frm").value!=="all"&&b.room!==$("frm").value)return false;
  var nn=nights(b.din,b.dout);
  if(du==="1"&&nn!==1)return false;
  if(du==="short"&&(nn<2||nn>6))return false;
  if(du==="week"&&nn<7)return false;
  var h=(b.name+" "+b.phone+" "+b.room+" "+room(b.room).t).toLowerCase();
  return !q||h.indexOf(q)>-1});
 list.sort(function(a,b){
  var k=s[0],x,y;
  if(k==="name"){x=a.name;y=b.name;var c=x.localeCompare(y,"kk");return s[1]==="asc"?c:-c}
  if(k==="total"){x=total(a);y=total(b)}else if(k==="room"){x=a.room;y=b.room}else if(k==="nights"){x=nights(a.din,a.dout);y=nights(b.din,b.dout)}else if(k==="id"){x=a.id;y=b.id}else if(k==="status"){x=a.status;y=b.status}else{x=a.din;y=b.din}
  return s[1]==="asc"?(x>y?1:x<y?-1:0):(x<y?1:x>y?-1:0)});
 $("sAll").textContent=data.length;$("fcnt").textContent="Табылды: "+list.length+" / "+data.length;
 $("sOn").textContent=data.filter(function(b){return b.status==="active"}).length;
 $("sOff").textContent=data.filter(function(b){return b.status==="inactive"}).length;
 $("tb").innerHTML=list.length?list.map(function(b){
  var on=b.status==="active",r=room(b.room);
  return "<tr><td>"+b.id+"</td><td>"+esc(b.name)+' <span class="mu">· '+(b.g||2)+' қонақ</span></td><td>'+esc(b.phone)+"</td><td>"+b.room+" · "+r.t+"</td><td>"+b.din+" – "+b.dout+"</td><td>"+fmt(total(b))+'</td><td><span class="b '+(on?"on":"off")+'">'+(on?"Белсенді":"Белсенді емес")+'</span></td><td><button data-t="'+b.id+'">Статусты ауыстыру</button><button class="del" data-d="'+b.id+'">Өшіру</button></td></tr>'}).join(""):'<tr><td colspan="8" class="empty">Ештеңе табылмады</td></tr>';
}
$("add").onclick=function(){
 $("err").style.color="";
 var n=$("name").value.trim(),p=$("phone").value.trim(),a=$("din").value,o=$("dout").value;
 if(!n||!p||!a||!o){$("err").textContent="Барлық өрісті толтырыңыз.";return}
 if(o<=a){$("err").textContent="Шығу күні кіру күнінен кейін болуы керек.";return}
 var st=$("status").value,rm=$("room").value,g=+$("guests").value||1;
 var cp=CAT[room(rm).t].c;
 if(g>cp){$("err").textContent="Бұл бөлмеге ең көбі "+cp+" қонақ сыяды.";return}
 var clash=data.some(function(b){return b.room===rm&&b.status==="active"&&st==="active"&&a<b.dout&&o>b.din});
 if(clash){$("err").textContent="Бұл бөлме таңдалған күндерде бос емес.";return}
 $("err").textContent="";
 var id=data.reduce(function(m,b){return Math.max(m,b.id)},0)+1;
 data.push({id:id,name:n,phone:p,room:rm,din:a,dout:o,status:st,g:g});
 save();$("name").value="";$("phone").value="";render();$("err").style.color="var(--ok)";$("err").textContent="✅ Өтінім қабылданды! Брондау нөмірі: №"+id+" — төменде осы нөмірмен іздеуге болады";$("fq").value=id;find()};
$("reset").onclick=function(){data=SEED.slice();save();render()};
$("tb").onclick=function(e){
 var t=e.target.getAttribute("data-t"),d=e.target.getAttribute("data-d");
 if(t){data.forEach(function(b){if(b.id==t)b.status=b.status==="active"?"inactive":"active"})}
 else if(d){data=data.filter(function(b){return b.id!=d})}else return;
 save();render()};
["q","f","s","fd1","fd2"].forEach(function(i){$(i).oninput=render;$(i).onchange=render});
var rt="all",du="all";
var RT=[["all","Барлығы"]].concat(["Стандарт","Делюкс","Люкс","Семейный","Президенттік"].map(function(t){return[t,t]}));
var DU=[["all","Кез келген мерзім"],["1","1 күндік"],["short","2–6 күн"],["week","Апталық (7+ күн)"]];
function chips(id,arr,get,set){
 $(id).innerHTML=arr.map(function(a){return '<button class="chip'+(get()===a[0]?" act":"")+'" data-v="'+a[0]+'">'+a[1]+"</button>"}).join("");
 $(id).onclick=function(e){var v=e.target.getAttribute("data-v");if(v===null)return;set(v);chips(id,arr,get,set);render()}}
chips("crt",RT,function(){return rt},function(v){rt=v});
chips("cdu",DU,function(){return du},function(v){du=v});
$("hc").innerHTML='<option value="all">Барлық санат</option>'+Object.keys(CAT).map(function(t){return'<option>'+t+'</option>'}).join("");
function avail(r,a,o){return !data.some(function(b){return b.room===r.n&&b.status==="active"&&a<b.dout&&o>b.din})}
function drawRooms(){
 var a=$("hin").value,o=$("hout").value,g=+$("hg").value||1,c=$("hc").value,ok=a&&o&&o>a;
 var L=ROOMS.filter(function(r){return(c==="all"||r.t===c)&&CAT[r.t].c>=g});
 $("rooms").innerHTML=L.length?L.map(function(r){
  var k=CAT[r.t],fr=ok?avail(r,a,o):null,n=ok?nights(a,o):1;
  return'<div class="rc" style="border-top:4px solid '+(COL[r.t]||'#999')+'"><div class="re">'+k.e+'</div><b>'+r.t+' · №'+r.n+'</b><div class="mu">'+k.d+' · '+k.c+' қонаққа дейін</div><div class="pr">'+fmt(r.p)+' <small>/ түн</small></div>'+(ok?'<div class="mu">'+n+' түн: <b>'+fmt(r.p*n)+'</b></div>':'')+(fr===null?'':'<span class="b '+(fr?'on':'off')+'">'+(fr?'Бос':'Бос емес')+'</span>')+'<button data-r="'+r.n+'"'+(fr===false?' disabled':'')+'>Брондау</button></div>'}).join(""):'<div class="empty">Сәйкес бөлме жоқ</div>'}
function drawCalc(){
 var a=$("din").value,o=$("dout").value,r=room($("room").value);
 $("calc").innerHTML=a&&o&&o>a?'💰 '+nights(a,o)+' түн × '+fmt(r.p)+' = <b>'+fmt(nights(a,o)*r.p)+'</b>':'💰 Бір түннің бағасы: <b>'+fmt(r.p)+'</b>'}
["hin","hout","hg","hc"].forEach(function(i){$(i).oninput=drawRooms;$(i).onchange=drawRooms});
["room","din","dout"].forEach(function(i){$(i).oninput=drawCalc;$(i).onchange=drawCalc});
$("rooms").onclick=function(e){
 var r=e.target.getAttribute("data-r");if(!r)return;
 $("room").value=r;
 if($("hin").value)$("din").value=$("hin").value;
 if($("hout").value)$("dout").value=$("hout").value;
 $("guests").value=$("hg").value;
 drawCalc();$("form").scrollIntoView({behavior:"smooth"})};
function drawReport(){
 var a=$('ra').value,o=$('rb').value;
 var L=data.filter(function(b){return(!a||b.din>=a)&&(!o||b.din<=o)});
 var A=L.filter(function(b){return b.status==='active'});
 var rev=A.reduce(function(s,b){return s+total(b)},0);
 var nn=L.reduce(function(s,b){return s+nights(b.din,b.dout)},0);
 var C={};
 L.forEach(function(b){var t=room(b.room).t,c=C[t]||(C[t]={n:0,a:0,r:0});c.n++;if(b.status==='active'){c.a++;c.r+=total(b)}});
 var K=Object.keys(C),mx=Math.max.apply(null,K.map(function(k){return C[k].r}).concat([1]));
 function kp(c,v,t){return'<div class="kpi" style="background:'+c+'"><b>'+v+'</b><span>'+t+'</span></div>'}
 $('rep').innerHTML='<div class="kpis">'+kp('#2f5bea',L.length,'Барлық бронь')+kp('#12805c',fmt(rev),'Белсенді брондар табысы')+kp('#e0821f',L.length?(nn/L.length).toFixed(1):0,'Орташа түн саны')+kp('#c2307a',L.length?Math.round(A.length/L.length*100)+'%':'0%','Белсенділер үлесі')+'</div>'+
 '<div class="tw"><table style="min-width:0"><thead><tr><th>Санат</th><th>Бронь</th><th>Белсенді</th><th>Табыс</th><th style="width:30%"></th></tr></thead><tbody>'+
 (K.length?K.map(function(k){var c=C[k];return'<tr><td><span style="color:'+(COL[k]||'inherit')+'">●</span> '+k+'</td><td>'+c.n+'</td><td>'+c.a+'</td><td>'+fmt(c.r)+'</td><td><div class="bar" style="width:'+Math.round(c.r/mx*100)+'%;background:'+(COL[k]||'var(--pr)')+'"></div></td></tr>'}).join(''):'<tr><td colspan="5" class="empty">Деректер жоқ</td></tr>')+'</tbody></table></div>';
 $('csv').value=['№;Қонақ;Телефон;Бөлме;Санат;Кіру;Шығу;Түн;Сома;Статус'].concat(L.map(function(b){return[b.id,b.name,b.phone,b.room,room(b.room).t,b.din,b.dout,nights(b.din,b.dout),total(b),b.status==='active'?'Белсенді':'Белсенді емес'].join(';')})).join('\n')}
['ra','rb'].forEach(function(i){$(i).oninput=drawReport;$(i).onchange=drawReport});
$('rc').innerHTML=Object.keys(CAT).map(function(t){return'<option>'+t+'</option>'}).join('');
function fillRoom(){$('room').innerHTML=ROOMS.map(function(r){return'<option value="'+r.n+'">'+r.n+' · '+r.t+' · '+fmt(r.p)+'</option>'}).join('')}
$('addRoom').onclick=function(){
 var n=$('rn').value.trim(),p=+$('rp').value,t=$('rc').value,m=$('rerr');
 m.style.color='';
 if(!n||!p){m.textContent='Нөмір мен бағаны енгізіңіз.';return}
 if(room(n)){m.textContent='Бұл нөмірлі бөлме бар.';return}
 ROOMS.push({n:n,t:t,p:p});saveRooms();fillRoom();$('rn').value='';$('rp').value='';
 m.style.color='var(--ok)';m.textContent='✅ Бөлме қосылды: №'+n;render();drawCalc()};
$('prn').onclick=function(){try{window.print()}catch(e){}};
$('csvb').onclick=function(){var t=$('csv');t.hidden=!t.hidden};
var REQ=[];
try{REQ=JSON.parse(localStorage.getItem('hotel_req_v2')||'null')||[{id:1,b:1,t:'Кеш шығу',m:'Шығуды 15:00-ге дейін ұзартыңыз',s:'new',d:'2026-11-01'},{id:2,b:2,t:'Трансфер',m:'Әуежайдан алып кету',s:'done',d:'2026-11-02'},{id:3,b:6,t:'Қосымша кереует',m:'Балаға арналған төсек',s:'new',d:'2026-11-04'},{id:4,b:23,t:'Таңғы ас',m:'Вегетариандық таңғы ас',s:'new',d:'2026-11-01'},{id:5,b:27,t:'Тазалау',m:'Күнде таңертең тазалау',s:'done',d:'2026-11-07'},{id:6,b:32,t:'Қосымша кереует',m:'Екі балаға төсек',s:'new',d:'2026-11-05'},{id:7,b:35,t:'Трансфер',m:'Вокзалдан күту',s:'done',d:'2026-11-05'},{id:8,b:29,t:'Ерте кіру',m:'Сағат 10:00-де кіру',s:'new',d:'2026-11-01'},{id:9,b:42,t:'Кеш шығу',m:'18:00-ге дейін',s:'new',d:'2026-11-12'},{id:10,b:40,t:'Басқа',m:'Мерекелік торт',s:'done',d:'2026-11-05'}]}catch(e){REQ=[]}
function saveReq(){try{localStorage.setItem('hotel_req_v2',JSON.stringify(REQ))}catch(e){}}
function bk(id){return data.filter(function(b){return b.id==id})[0]}
function clash(b,a,o){return data.some(function(x){return x.id!==b.id&&x.room===b.room&&x.status==='active'&&a<x.dout&&o>x.din})}
function card(b){var r=room(b.room),on=b.status==='active',rq=REQ.filter(function(x){return x.b===b.id}).length;
 return'<div class="res"><div class="top"><span class="num">Брондау №'+b.id+'</span><span class="b '+(on?'on':'off')+'">'+(on?'Белсенді':'Белсенді емес')+'</span></div>'+
 '<div>👤 '+esc(b.name)+' · '+esc(b.phone)+' · '+(b.g||2)+' қонақ</div><div>🛏️ №'+b.room+' · '+r.t+' · '+fmt(r.p)+' / түн</div>'+
 '<div>📅 '+b.din+' → '+b.dout+' · '+nights(b.din,b.dout)+' түн · <b>'+fmt(total(b))+'</b></div><div class="mu">Сұраныстар саны: '+rq+'</div>'+
 '<div class="row" style="margin-top:6px"><input type="date" id="e1-'+b.id+'" value="'+b.din+'" style="width:auto"><input type="date" id="e2-'+b.id+'" value="'+b.dout+'" style="width:auto"><button data-fs="'+b.id+'">Күнді өзгерту</button><button class="sec" data-ft="'+b.id+'">'+(on?'Бас тарту':'Белсендіру')+'</button></div><div class="mu" id="fm-'+b.id+'" style="color:var(--dg)"></div></div>'}
function find(){var q=$('fq').value.trim().toLowerCase(),o=$('fr');if(!q){o.innerHTML='';return}
 var dg=q.replace(/\D/g,''),iq=/^(br-?)?\d+$/.test(q)?+dg:0;
 var L=data.filter(function(b){return b.id===iq||b.name.toLowerCase().indexOf(q)>-1||(dg.length>=4&&b.phone.replace(/\D/g,'').indexOf(dg)>-1)});
 o.innerHTML=L.length?'<p class="mu" style="margin:10px 0 0">Табылды: '+L.length+'</p>'+L.map(card).join(''):'<div class="empty">Мұндай брондау табылмады</div>'}
$('fb').onclick=find;$('fq').onkeydown=function(e){if(e.key==='Enter')find()};
$('fr').onclick=function(e){var s=e.target.getAttribute('data-fs'),t=e.target.getAttribute('data-ft');
 if(s){var b=bk(s),a=$('e1-'+s).value,o=$('e2-'+s).value,m=$('fm-'+s);
  if(!a||o<=a){m.textContent='Күндер дұрыс емес.';return}
  if(b.status==='active'&&clash(b,a,o)){m.textContent='Бұл күндерде бөлме бос емес.';return}
  b.din=a;b.dout=o}
 else if(t){var c=bk(t),m2=$('fm-'+t);
  if(c.status==='inactive'&&clash(c,c.din,c.dout)){m2.textContent='Бөлме бұл күндерде бос емес, белсендіруге болмайды.';return}
  c.status=c.status==='active'?'inactive':'active'}
 else return;save();render()};
function drawReqs(){var q=$('qs').value.trim().toLowerCase(),f=$('qf').value;
 var L=REQ.filter(function(r){var b=bk(r.b);return(f==='all'||r.s===f)&&(!q||(r.t+' '+r.m+' '+(b?b.name:'')+' '+r.b).toLowerCase().indexOf(q)>-1)}).sort(function(a,b){return b.id-a.id});
 $('ql').innerHTML=L.length?L.map(function(r){var b=bk(r.b),dn=r.s==='done';
  return'<div class="res" style="border-left-color:'+(dn?'var(--ok)':'#e0821f')+'"><div class="top"><span><span class="num">Сұраныс №'+r.id+'</span> · '+esc(r.t)+'</span><span class="b '+(dn?'on':'off')+'">'+(dn?'Орындалды':'Жаңа')+'</span></div><div class="mu">Брондау №'+r.b+(b?' · '+esc(b.name)+' · бөлме '+b.room:'')+' · '+r.d+'</div><div>'+esc(r.m||'—')+'</div><div class="row" style="margin-top:6px"><button data-rt="'+r.id+'">'+(dn?'Қайта ашу':'Орындалды деп белгілеу')+'</button><button class="del" data-rd="'+r.id+'">Өшіру</button></div></div>'}).join(''):'<div class="empty">Сұраныс жоқ</div>'}
$('qa').onclick=function(){var id=+$('qb').value,m=$('qe');m.style.color='';
 if(!bk(id)){m.style.color='var(--dg)';m.textContent='Мұндай брондау нөмірі жоқ.';return}
 REQ.push({id:REQ.reduce(function(x,r){return Math.max(x,r.id)},0)+1,b:id,t:$('qt').value,m:$('qm').value.trim(),s:'new',d:new Date().toISOString().slice(0,10)});
 saveReq();$('qm').value='';m.style.color='var(--ok)';m.textContent='✅ Сұраныс жіберілді';drawReqs();if($('fq').value)find()};
$('ql').onclick=function(e){var t=e.target.getAttribute('data-rt'),d=e.target.getAttribute('data-rd');
 if(t)REQ.forEach(function(r){if(r.id==t)r.s=r.s==='done'?'new':'done'});else if(d)REQ=REQ.filter(function(r){return r.id!=d});else return;saveReq();drawReqs()};
['qs','qf'].forEach(function(i){$(i).oninput=drawReqs;$(i).onchange=drawReqs});
function drawRoomList(){$('rl').innerHTML=ROOMS.map(function(r){return'<span class="chip2" style="border-color:'+(COL[r.t]||'')+'">'+r.n+' · '+r.t+' · '+fmt(r.p)+' <b data-rx="'+r.n+'" style="cursor:pointer;color:var(--dg)">✕</b></span>'}).join('')}
$('rl').onclick=function(e){var n=e.target.getAttribute('data-rx');if(!n)return;var m=$('rerr');m.style.color='var(--dg)';
 if(ROOMS.length<2){m.textContent='Кемінде бір бөлме қалуы керек.';return}
 if(data.some(function(b){return b.room===n})){m.textContent='№'+n+' бөлмеде брондар бар, өшіруге болмайды.';return}
 ROOMS=ROOMS.filter(function(r){return r.n!==n});saveRooms();fillRoom();m.style.color='var(--ok)';m.textContent='Бөлме өшірілді.';render();drawCalc()};
$('nav').onclick=function(e){var g=e.target.getAttribute('data-go');if(g)$(g).scrollIntoView({behavior:'smooth'})};
function fillFrm(){var f=$('frm'),v=f.value||'all';f.innerHTML='<option value="all">Барлығы</option>'+ROOMS.map(function(r){return'<option value="'+r.n+'">№'+r.n+' · '+r.t+'</option>'}).join('');f.value=v}
['fp1','fp2','fg','frm'].forEach(function(i){$(i).oninput=function(){render()};$(i).onchange=function(){render()}});
$('fclr').onclick=function(){['q','fd1','fd2','fp1','fp2','fg'].forEach(function(i){$(i).value=''});$('f').value='all';$('frm').value='all';rt='all';du='all';chips('crt',RT,function(){return rt},function(v){rt=v});chips('cdu',DU,function(){return du},function(v){du=v});render()};
function rf(){var a=$('ra').value,o=$('rb').value,s=$('rs').value,c=$('rcat').value;
 return data.filter(function(b){return(!a||b.din>=a)&&(!o||b.din<=o)&&(s==='all'||b.status===s)&&(c==='all'||room(b.room).t===c)})}
function tbl(h,rows){return'<div class="tw"><table style="min-width:0"><thead><tr>'+h.map(function(x){return'<th>'+x+'</th>'}).join('')+'</tr></thead><tbody>'+(rows.length?rows.map(function(r){return'<tr>'+r.map(function(x){return'<td>'+x+'</td>'}).join('')+'</tr>'}).join(''):'<tr><td colspan="'+h.length+'" class="empty">Деректер жоқ</td></tr>')+'</tbody></table></div>'}
function rep(){
 var L=rf(),A=L.filter(function(b){return b.status==='active'});
 var tot=L.reduce(function(s,b){return s+total(b)},0),rev=A.reduce(function(s,b){return s+total(b)},0);
 var nn=L.reduce(function(s,b){return s+nights(b.din,b.dout)},0),na=A.reduce(function(s,b){return s+nights(b.din,b.dout)},0);
 var ids=L.map(function(b){return b.id}),RQ=REQ.filter(function(r){return ids.indexOf(r.b)>-1});
 function grp(f,g){var o={};L.forEach(function(b){var k=f(b),c=o[k]||(o[k]={n:0,a:0,t:0,r:0});c.n++;if(b.status==='active'){c.a++;c.t+=nights(b.din,b.dout);c.r+=total(b)}});return Object.keys(o).sort().map(function(k){var c=o[k];return[g?g(k):k,c.n,c.a,c.t,c.r]})}
 var H=['Бронь','Белсенді','Түн','Табыс'];
 return[
 {t:'Қорытынды',h:['Көрсеткіш','Мәні'],m:[],r:[['Барлық бронь',L.length],['Белсенді брондар',A.length],['Белсенді емес брондар',L.length-A.length],['Белсенді брондар табысы',fmt(rev)],['Белсенді емес брондар сомасы',fmt(tot-rev)],['Орташа түн саны',L.length?(nn/L.length).toFixed(1):0],['Орташа чек (белсенді)',fmt(A.length?Math.round(rev/A.length):0)],['Брондалған түндер (белсенді)',na],['Сұраныстар (барлығы / жаңа)',RQ.length+' / '+RQ.filter(function(r){return r.s==='new'}).length]]},
 {t:'Санат бойынша',h:['Санат'].concat(H),m:[4],r:grp(function(b){return room(b.room).t})},
 {t:'Бөлме бойынша',h:['Бөлме'].concat(H),m:[4],r:grp(function(b){return b.room},function(k){return'№'+k+' · '+room(k).t})},
 {t:'Ай бойынша',h:['Ай (кіру)'].concat(H),m:[4],r:grp(function(b){return b.din.slice(0,7)})},
 {t:'Брондар тізімі',h:['№','Қонақ','Телефон','Бөлме','Санат','Қонақ','Кіру','Шығу','Түн','Сома','Статус'],m:[9],r:L.slice().sort(function(a,b){return a.id-b.id}).map(function(b){return[b.id,b.name,b.phone,b.room,room(b.room).t,b.g||2,b.din,b.dout,nights(b.din,b.dout),total(b),b.status==='active'?'Белсенді':'Белсенді емес']})},
 {t:'Сұраныстар',h:['№','Брондау','Қонақ','Түрі','Хабарлама','Күні','Статус'],m:[],r:RQ.map(function(r){var b=bk(r.b);return[r.id,r.b,b?b.name:'',r.t,r.m||'',r.d,r.s==='done'?'Орындалды':'Жаңа']})}]}
function repHTML(R){return R.map(function(s){return'<h3 style="margin:16px 0 6px;color:var(--pr)">'+s.t+'</h3>'+tbl(s.h,s.r.map(function(r){return r.map(function(x,i){return s.m.indexOf(i)>-1?fmt(x):esc(x)})}))}).join('')}
function drawReport(){
 var R=rep(),L=rf(),A=L.filter(function(b){return b.status==='active'}),rev=A.reduce(function(s,b){return s+total(b)},0),nn=L.reduce(function(s,b){return s+nights(b.din,b.dout)},0);
 function kp(c,v,t){return'<div class="kpi" style="background:'+c+'"><b>'+v+'</b><span>'+t+'</span></div>'}
 var C=R[1].r,mx=Math.max.apply(null,C.map(function(c){return c[4]}).concat([1]));
 $('rep').innerHTML='<div class="kpis">'+kp('#2f5bea',L.length,'Барлық бронь')+kp('#12805c',fmt(rev),'Белсенді брондар табысы')+kp('#e0821f',L.length?(nn/L.length).toFixed(1):0,'Орташа түн саны')+kp('#c2307a',L.length?Math.round(A.length/L.length*100)+'%':'0%','Белсенділер үлесі')+'</div>'+
 C.map(function(c){return'<div style="display:flex;gap:8px;align-items:center;margin:4px 0"><span style="width:110px;font-size:13px">'+c[0]+'</span><div style="flex:1"><div class="bar" style="width:'+Math.round(c[4]/mx*100)+'%;background:'+(COL[c[0]]||'var(--pr)')+'"></div></div><span class="mu">'+fmt(c[4])+'</span></div>'}).join('')+repHTML(R);
 $('csv').value=[R[4].h.join(';')].concat(R[4].r.map(function(r){return r.join(';')})).join('\n')}
$('rcat').innerHTML='<option value="all">Барлық санат</option>'+Object.keys(CAT).map(function(t){return'<option>'+t+'</option>'}).join('');
['ra','rb','rs','rcat'].forEach(function(i){$(i).oninput=drawReport;$(i).onchange=drawReport});
function rmsg(t,ok){var m=$('rexp');m.style.color=ok?'var(--ok)':'var(--dg)';m.textContent=t}
function rerrm(e){rmsg(e&&e.code==='declined'?'Сақтау бас тартылды.':'Жүктеу сәтсіз: '+((e&&e.message)||e),false)}
$('xlb').onclick=async function(){
 try{rmsg('Excel дайындалуда...',true);
  var dl=await getDl();if(!dl){rmsg('Жүктеу бұл көріністе қолжетімсіз. CSV батырмасын пайдаланыңыз.',false);return}
  var wb=XLSX.utils.book_new();
  rep().forEach(function(s){var ws=XLSX.utils.aoa_to_sheet([s.h].concat(s.r));ws['!cols']=s.h.map(function(){return{wch:18}});XLSX.utils.book_append_sheet(wb,ws,s.t.slice(0,31))});
  await dl.save({filename:'madielle-esep.xlsx',data:XLSX.write(wb,{bookType:'xlsx',type:'array'})});
  rmsg('✅ Excel файлы сақталды',true)}catch(e){rerrm(e)}};
async function pdfRun(mode){var w=mode==='tab'?window.open('','_blank'):null;
 try{if(mode==='tab'&&!w)mode='save';rmsg('PDF дайындалуда...',true);
  var dl=mode==='tab'?null:await getDl();if(!dl&&mode!=='tab'){rmsg('Жүктеу бұл көріністе қолжетімсіз.',false);return}
  var box=$('pdfbox'),a=$('ra').value||'…',o=$('rb').value||'…';
  box.innerHTML='<h2 style="margin:0 0 4px">🏨 Madielle Oteľ — брондау есебі</h2><div class="mu">Кезең: '+a+' — '+o+' · Құрылған: '+new Date().toISOString().slice(0,10)+'</div>'+$('rep').innerHTML;
  var cv=await html2canvas(box,{scale:2,backgroundColor:'#ffffff',scrollX:0,scrollY:0,windowWidth:900,onclone:function(d){var e=d.getElementById('pdfbox');e.style.left='0';e.style.top='0'}});
  var pdf=new window.jspdf.jsPDF('p','mm','a4'),pw=210,ph=297,pg=Math.floor(cv.width*ph/pw);
  for(var y=0,p=0;y<cv.height;y+=pg,p++){var h=Math.min(pg,cv.height-y),c2=document.createElement('canvas');c2.width=cv.width;c2.height=h;c2.getContext('2d').drawImage(cv,0,y,cv.width,h,0,0,cv.width,h);if(p)pdf.addPage();pdf.addImage(c2.toDataURL('image/jpeg',0.92),'JPEG',0,0,pw,h*pw/cv.width)}
  box.innerHTML='';
  if(mode==='tab'){w.document.write('<title>Madielle Oteľ — есеп</title><body style="margin:0"><iframe src="'+pdf.output('datauristring')+'" style="border:0;width:100%;height:100vh"></iframe>');w.document.close();rmsg('✅ PDF жаңа бетте ашылды',true)}
  else{await dl.save({filename:'madielle-esep.pdf',data:pdf.output('blob')});rmsg('✅ PDF файлы сақталды',true)}}catch(e){if(w)try{w.close()}catch(x){}rerrm(e)}}
$('pdfb').onclick=function(){pdfRun('tab')};$('pdfd').onclick=function(){pdfRun('save')};
var _r=render;render=function(){fillFrm();_r();drawRooms();drawReport();drawRoomList();drawReqs();if($('fq').value)find()};
drawCalc();
render();
