var k=void 0,o=!0,p=null,q=!1;function r(){return function(){}}function s(a){return function(){return a}}
var aa={INIT_LOADING:{sv:"Laddar ner bilder och ljud...",en:"Downloading images and sounds..."},YAY:{sv:"Hurra!",en:"Yay!"},ARE_YOU_READY_TO_TEACH:{sv:"\u00c4r du redo att l\u00e4ra apan?",en:"Are you ready to teach monkey?"},FISHING_CATCH_NUMBER:{sv:"F\u00e5nga nummer %1",en:"Catch number %1"},FISHING_CATCH:{sv:"F\u00e5nga",en:"Catch"},FISHING_FREE_WRONG_ONES:{sv:"Frige fiskarna som \u00e4r fel",en:"Put back the wrong fish"},FISHING_NOT_THIS_ONE:{sv:"Inte den!",en:"Not this one!"},FISHING_THERE_ARE_MORE:{sv:"Det finns mer fiskar att f\u00e5nga. Forts\u00e4tt leta!",
en:"There are more fish to catch. Keep looking!"},FISHING_ARE_YOU_SURE:{sv:"\u00c4r du s\u00e4ker?",en:"Are you sure?"},FISHING_COUNT_FISH:{sv:"R\u00e4kna fiskarna!",en:"Count the fish!"},FISHING_COUNT_TARGET_FISH:{sv:"R\u00e4kna fiskarna med",en:"Count the fish with"},FISHING_ANGEL_CHOOSE_FISH:{sv:"Jag v\u00e4ljer den h\u00e4r fisken eftersom...",en:"I choose this fish, because it..."},FISHING_ANGEL_COUNT:{sv:"Jag v\u00e4ljer den h\u00e4r siffran eftersom...",en:"I choose this number, because..."},
BUBBA_HI:{sv:"Hej! Mitt namn \u00e4r Bubba!",en:"Hi, my name is Bubba!"},BUBBA_HERE_TO_HELP:{sv:"Jag ska hj\u00e4lpa dig och apan l\u00e4ngs v\u00e4gen.",en:"I'm here to help you and monkey throughout his journey."},MONKEY_LEARNED_WELL:{sv:"Toppen! Apan l\u00e4rde sig bra!",en:"Great! Monkey learned well!"},MONKEY_DIDNT_LEARN_WELL:{sv:"\u00c5h, nej! Apan l\u00e4rde sig inte riktigt.",en:"Oh no! Monkey didn't learn well."},LETS_SHOW_HIM_AGAIN:{sv:"Visa honom igen!",en:"Let's show him again!"},THANK_YOU_FOR_HELPING:{sv:"Tack f\u00f6r att du hj\u00e4lpte apan!",
en:"Thank you for helping monkey!"},NOW_MONKEY_SHOW_YOU:{sv:"Nu visar apan dig vad den har l\u00e4rt sig!",en:"Now monkey show you what it learned!"},MONKEYS_TURN:{sv:"Apans tur!",en:"Monkey's turn!"},MONKEY_HMM:{sv:"Apan: Hmmm...",en:"Monkey: Hmm..."},FISHING_KEEP_GOING:{sv:"Forts\u00e4tt!",en:"Keep going!"},NUMBER_1:{sv:"nummer 1",en:"number 1"},NUMBER_2:{sv:"nummer 2",en:"number 2"},NUMBER_3:{sv:"nummer 3",en:"number 3"},NUMBER_4:{sv:"nummer 4",en:"number 4"},NUMBER_5:{sv:"nummer 5",en:"number 5"},
NUMBER_6:{sv:"nummer 6",en:"number 6"},NUMBER_7:{sv:"nummer 7",en:"number 7"},NUMBER_8:{sv:"nummer 8",en:"number 8"},NUMBER_9:{sv:"nummer 9",en:"number 9"},NUMBER_10:{sv:"nummer 10",en:"number 10"}};function u(a,b){for(var g=aa[a].en,c=1;c<arguments.length;c++)g=g.replace("%"+c,arguments[c]);return g};function v(a,b,g){this.T=a;this.na=b;this.P=g}
var ba=new v("19446__totya__yeah.wav",u("YAY")),ea=new v(p,u("ARE_YOU_READY_TO_TEACH")),fa=new v("60443__jobro__tada1.wav",p,2),ga=new v(p,u("FISHING_FREE_WRONG_ONES")),ha=new v(p,u("FISHING_CATCH")),ka=new v(p,u("FISHING_NOT_THIS_ONE")),la=new v(p,u("FISHING_THERE_ARE_MORE")),ma=new v(p,u("FISHING_KEEP_GOING")),na=new v(p,u("FISHING_ARE_YOU_SURE")),oa=new v(p,u("FISHING_COUNT_FISH")),pa=new v(p,u("FISHING_COUNT_TARGET_FISH")),qa=new v("34968__mike-campbell__f-s-1-fishing-reel.wav",p),ra=new v("water_movement_fast_002.wav",
p),sa=new v("60009__qubodup__swosh-22.wav",p),ta=new v(p,u("FISHING_ANGEL_CHOOSE_FISH")),ua=new v(p,u("FISHING_ANGEL_COUNT")),va=new v(p,u("BUBBA_HI")),wa=new v(p,u("BUBBA_HERE_TO_HELP")),xa=new v(p,u("MONKEY_LEARNED_WELL")),ya=new v(p,u("MONKEY_DIDNT_LEARN_WELL")),za=new v(p,u("LETS_SHOW_HIM_AGAIN")),Aa=new v(p,u("THANK_YOU_FOR_HELPING")),Ba=new v(p,u("NOW_MONKEY_SHOW_YOU")),Ca=new v(p,u("MONKEY_HMM")),Da=new v("51710__bristolstories__u-chimes3_short.wav",p),Ea=new v(p,u("NUMBER_1")),Fa=new v(p,
u("NUMBER_2")),Ga=new v(p,u("NUMBER_3")),Ha=new v(p,u("NUMBER_4")),Ia=new v(p,u("NUMBER_5")),Ka=new v(p,u("NUMBER_6")),Na=new v(p,u("NUMBER_7")),Oa=new v(p,u("NUMBER_8")),Pa=new v(p,u("NUMBER_9")),Qa=new v(p,u("NUMBER_10")),E={Nb:ba,pb:ea,Fb:fa,yb:ga,vb:ha,Ab:ka,Db:la,zb:ma,ub:na,wb:oa,xb:pa,Eb:qa,Bb:ra,Cb:sa,sb:ta,tb:ua,rb:va,qb:wa,Kb:xa,Ib:ya,Gb:za,Mb:Aa,Lb:Ba,Jb:Ca,Hb:Da,NUMBER_1:Ea,NUMBER_2:Fa,NUMBER_3:Ga,NUMBER_4:Ha,NUMBER_5:Ia,NUMBER_6:Ka,NUMBER_7:Na,NUMBER_8:Oa,NUMBER_9:Pa,NUMBER_10:Qa},Ra=
[],F;for(F in E){var H=E[F];E[F].$=F;if(H.T!=p){var Sa={name:F,src:"../res/sound/"+H.T};H.P!=k&&(Sa.P=H.P);Ra.push(Sa)}};var Ta={fish0:"fish/0.png",fish1:"fish/1.png",bamboo:"bambu.png",plant:"plant.png",sky:"sky.png",basket:"01-tileable-basket-weave-textures-preview-003.jpg",monkey:"monkey.png",avatar:"Boo-icon.png",monkey_icon:"Gnome-Face-Monkey-64.png",green:"1333364667_Circle_Green.png",red:"1333364683_Circle_Red.png","person-yes":"Accept-Male-User.png","person-no":"Remove-Male-User.png","banana-big":"1333448754_Banana.png","banana-small":"1333448736_Banana64.png","happy-face":"Positive.png","sad-face":"Negative.png",
rafiki:"Rafiki.png"},I={};function Ua(a){J.debug("Loading images...","images");var b=0,g=Object.size(Ta),c;for(c in Ta)I[c]=new Image,I[c].onload=function(){++b>=g&&a()},I[c].src="../res/img/"+Ta[c]};function Va(){var a=0,b=1,g=1,c=1,d=K,f=q,j=[],e=q;this.$a=function(){return 3===g};this.fb=function(){c=1};this.la=function(){j=[];g=b=1};this.xa=function(){c++};this.mb=function(){return 3<=c};this.Ta=function(){f=o};this.Ua=function(){return f};this.bb=function(a){j.push(a)};this.F=function(){return j};this.ua=function(){J.debug("Adding banana","game");a++};this.wa=function(){b++};this.Ka=function(){return b};this.va=function(){g++};this.k=function(){return g};this.o=function(a){d=a};this.c=function(){return d};
this.Ia=function(){return a};this.gb=function(){e=q};this.H=function(){e=o};this.Q=function(){return e}};function M(){}M.prototype.p=r();M.prototype.K="Player";var K="Child Play",Q="Monkey See",S="Monkey Do",T="Guardian Angel";function U(){var a=[],b=q,g=new Wa;this.q=function(b){a.push(b)};this.S=function(){a=[]};this.H=function(){b=o};this.Q=function(){return b};this.ka=function(){b=q};this.ca=function(){return a};this.hb=function(){J.debug("Round done","game");g.a("Game.roundDone");g.a("Game.nextRound")};this.play=function(a,b,f){g=b;a.p[this.K](this,b,f)}}U.prototype=new Xa;U.prototype.K="GameModule";U.prototype.c=function(){return this.mode};
U.prototype.o=function(a){this.mode=a};function V(){J.debug("Creating MonkeyPlayer","player")}V.prototype=new M;V.prototype.p=r();
V.prototype.p.FishingGame=function(a,b,g){function c(){setTimeout(function(){b.play(Ca);setTimeout(function(){var b=f[j++];a.L(b);j<f.length&&c()},2E3)},1E3)}function d(){var b=f[j++];j<=f.length&&"FishingGame.catchingDone"!=b&&this.setTimeout(function(){"correct"==b?a.C(a.ea(),function(){d()}):"incorrect"==b?a.C(a.Oa(),function(){d()}):"freeIncorrect"==b?a.M(a.Pa(),function(){d()}):"freeCorrect"==b?a.M(a.Na(),function(){d()}):J.error("Error when handling happenings (no such happening: "+b+")","monkey")},
2E3)}var f=g.result;J.debug("Applying MonkeyPlayer's strategy to the FishingGame","player");var j=0;b.on("Game.start",function(){a.W();a.oa()},"MonkeyPlayer");b.on("FishingGame.started",function(){d()},"MonkeyPlayer");b.on("FishingGame.countingStarted",function(){c()},"MonkeyPlayer");b.on("Game.tearDown",function(){b.r("MonkeyPlayer")},"MonkeyPlayer")};function Ya(){J.debug("Creating AngelPlayer","player")}Ya.prototype=new M;Ya.prototype.p=r();
Ya.prototype.p.FishingGame=function(a,b){function g(){d<a.Ma()&&(b.play(ta),setTimeout(function(){d++;a.C(a.ea(),function(){g()})},1E3))}function c(){setTimeout(function(){b.play(ua);setTimeout(function(){a.L(a.La())},1E3)},2E3)}var d=0;J.debug("Applying AngelPlayer's strategy to the FishingGame","player");b.on("Game.start",function(){d=0;a.W();a.oa()},"AngelPlayer");b.on("FishingGame.started",function(){setTimeout(function(){g()},2E3)},"AngelPlayer");b.on("FishingGame.countingStarted",function(){c()},
"AngelPlayer");b.on("Game.tearDown",function(){b.r("AngelPlayer")},"AngelPlayer")};function Za(){J.debug("Creating GamerPlayer","player")}Za.prototype=new M;Za.prototype.p=r();Za.prototype.p.FishingGame=function(a,b){J.debug("Applying GamerPlayer's strategy to the FishingGame","player");b.on("fishinggame.started",function(){J.debug("Starting to think","player");b.a("fishinggame.allowClicks")},"GamerPlayer");b.on("Game.tearDown",function(){b.r("GamerPlayer")},"GamerPlayer")};function $a(a,b,g,c,d){var f=Math.floor(2*Math.random()),j=c,e=d,l=Math.random()*(1-0.7)+0.7,h=2*Math.random()*Math.PI,i=1,m=0.3072*l,n=0.2133*l,w=o;this.toString=function(){return"Fish "+b};var t=Math.random()*(8.0E-5-6.0E-5)+6.0E-5,y=Math.random()*(0.5-0.6)+0.6;this.fa=function(){return j};this.Sa=function(){return e};this.l=function(){return g};this.getWidth=s(0.3072);this.getHeight=s(0.2133);this.v=function(){return m};this.Qa=function(){return n};this.getScale=function(){return l};this.Ra=function(){return f};
this.u=function(){return i};var C=q;this.Ba=function(){return w};this.ib=function(){w=q};this.N=function(){switch(f){case 0:return{x:0.1,y:0};case 1:return{x:0.1,y:0};default:return{x:0,y:0}}};this.Xa=function(){C=o};var N=this;this.onFrame=function(b){C||(e=d+0.03*Math.cos(y*(h+2*b.time*Math.PI/3E3)),j=1==i?j+t*b.timeDiff:j-t*b.timeDiff,a.a("fishinggame.fishmoved",{b:N}))};this.Wa=function(b){i=-1;a.a("fishinggame.fishturnedleft",{b:this});j=b-(j-b);a.a("fishinggame.fishmoved",{b:this})};this.Va=
function(b){i=1;a.a("fishinggame.fishturnedright",{b:this});j=b+(b-j);a.a("fishinggame.fishmoved",{b:this})};var A=q;this.isCaptured=function(){return A};this.capture=function(){A=o};this.Ga=function(){C=A=q};a.a("fishinggame.initiatedfish",{b:this})};function W(a,b,g){function c(){if(i==m||h==e.length){for(var b=0;b<e.length;b++)2==e[b].l()&&e[b].ib();h==m||j==Q||j==S?(h!=m&&y.H(),y.q("FishingGame.catchingDone"),a.a("FishingGame.catchingDone")):a.a("FishingGame.freeWrongOnes")}}function d(){var b=p;j==K?(b=la,a.a("FishingGame.inactivity",{ma:b}),f()):j==Q&&(b=ma,a.a("FishingGame.inactivity",{ma:b}),f())}function f(){w&&!(i==m||h==e.length)&&(t=setTimeout(d,5E3))}var j=b.c();J.debug("Applying "+j+" Mode","model");this.K="FishingGame";this.toString=
s("Fish Tank");var e=[],l=[],h=0,i=0,m=2,n={"0":{x:0.3,y:0.3},1:{x:0.8,y:0.4},2:{x:0.6,y:0.6},3:{x:1,y:0.8},4:{x:0.4,y:0.2}};this.La=function(){return m};this.s=function(){for(var b=g.i,c=Y.Da(1,g.h,b,2,m,o),f=0,d=0;d<b;d++){var j=n[d%5];e.push(new $a(a,f++,c[d],j.x,j.y))}return{width:1,height:1}};this.onFrame=function(a){for(var b=0;b<e.length;b++){var c=e[b];c.onFrame(a);var f=c.fa();0<c.u()&&f>=1-c.v()/2?c.Wa(1-c.v()/2):0>c.u()&&f<=c.v()/2&&c.Va(c.v()/2)}};this.nb=function(){for(var b=0;b<e.length;b++)a.a("fishinggame.turnOnClick",
{b:e[b]})};this.Ma=function(){return m};this.W=function(){J.debug("Turning off clicks","FishingGame");for(var b=0;b<e.length;b++)a.a("fishinggame.turnOffClick",{b:e[b]})};var w=o;this.oa=function(){w=q};var t=p;this.ta=function(){t!=p&&clearTimeout(t)};this.ha=function(){f()};this.Ha=function(){return e};this.cb=function(a){var b=this.da();b==l.length?l.push(a):l[b]=a;h++;2==a.l()?(i++,this.q("correct")):this.q("incorrect");c()};var y=this;this.C=function(b,c){a.a("FishingGame.catch",{b:b,t:c})};
this.M=function(b,e){b.l()==m?this.q("freeCorrect"):this.q("freeIncorrect");a.a("FishingGame.free",{b:b,t:function(){for(var a=0;a<l.length;a++)l[a]===b&&(l[a]=k);h--;2==b.l()&&i--;c();b.Ga();e()}})};this.da=function(){for(var a=1E3,b=q,c=0;c<l.length;c++)l[c]===k&&c<a&&(a=c,b=o);return b?a:l.length};this.Ja=function(){return l};var C=0;this.L=function(c){if(b.c()===Q&&0==C||b.c()!=Q){C++;this.q(c);var e=c==m||b.c()!=K;c==m||this.H();a.a("FishingGame.counted",{ia:c});a.a("FishingGame.countingResult",
{Ca:e})}};this.start=function(){f()};this.ea=function(){for(var a=0;a<e.length;a++){var b=e[a];if(!b.isCaptured()&&2==b.l())return b}return p};this.Oa=function(){for(var a=0;a<e.length;a++){var b=e[a];if(!b.isCaptured()&&2!=b.l())return b}return p};this.Pa=function(){for(var a=0;a<e.length;a++)if(e[a].isCaptured()&&2!=e[a].l())return e[a];return p};this.Na=function(){for(var a=0;a<e.length;a++)if(e[a].isCaptured()&&2==e[a].l())return e[a];return p};this.eb=function(){a.a("FishingGame.countingStarted",
{})};this.sa=function(){this.hb()}}W.prototype=new U;function ab(a){function b(a){for(var b=0;b<d.length;b++)d[b].attrs.y-=30;d.push(a)}var g=a.qa,c={};this.on=function(a,b,e){a in c||(c[a]=[]);c[a].push(b);b.I=e;J.debug((e===k?"unnamed":e)+" registerd "+a,"evm")};this.off=function(a,b){for(var e=0;e<c[a].length;e++)c[a][e].I===b&&c[a].splice(e,1);0==c[a].length&&delete c[a]};this.print=function(){console.log("-------EVENT MANAGER STATE-----------------");for(var a in c){console.log("key: "+a);for(var b=0;b<c[a].length;b++)console.log("   "+c[a][b].I)}console.log("-------------------------------------------")};
this.r=function(a){var b=0;for(F in c){for(var e=0;e<c[F].length;e++)c[F][e].I===a&&(c[F].splice(e,1),b++);0==c[F].length&&delete c[F]}J.debug("Forgot "+b+" event registred by "+a,"evm")};this.a=function(a,b){var e=c[a];if(e!=k)for(var d=0;d<e.length;d++)(0,e[d])(b)};var d=[];g.getParent();g.getParent();this.play=function(c){c.T!=p&&SoundJS.play(c.$);if(c.na!=p){var j=new Kinetic.Text({x:g.getParent().attrs.width/2,y:g.getParent().attrs.height-50,text:c.na,fontSize:26,fontFamily:"Arial",textFill:"white",
fill:"gray",textStroke:"black",align:"center",verticalAlign:"middle",textStrokeWidth:1});b(j);g.add(j);a.z();setTimeout(function(){g.remove(j);a.z();for(var b=0;b<d.length;b++)d[b]===j&&d.splice(b,1)},3E3)}};this.stop=function(a){SoundJS.stop(a.$)}}function Wa(){this.on=r()};SoundJS.Yb=r();window.onload=function(){new bb};
function bb(){var a=new Va;function b(b,j,m){g();var A=p;a.c()===K||a.c()===Q?A=l:a.c()===S?A=h:a.c()===T&&(A=i);J.debug("Creating model...","model");j=new j(e,a,m);A!=p&&j.play(A,e,m);J.debug("Initiating model...","model");j.s(m);new b(e,c,a,j);e.a("Game.initiate");e.a("view.initiated");j.start();n=j;e.a("Game.start");f.moveToTop();d.moveToTop()}function g(){n.ka();n.S();n=m;e.a("Game.tearDown")}var c=new Kinetic.Stage({container:"container",width:1024,height:768}),d=new Kinetic.Layer({width:1024,
height:768}),f=new Kinetic.Layer({width:1024,height:768}),j=new Kinetic.Layer({width:1024,height:768});c.add(j);c.add(f);c.add(d);c.qa=f;c.Z=f;c.Ob=j;c.J=q;c.Rb=0;c.Pb=0;c.z=function(){c.J=o};c.X=q;c.Vb=function(){c.X=o};c.Y=o;c.Wb=function(){c.X=o;c.Y=q};c.Xb=function(){c.Y=o};var e=new ab(c),l=new Za,h=new V,i=new Ya;(new cb(e,c,a)).s();var m=new db,n=m,w=function(){var a=0,b=new Kinetic.Text({text:"",fontFamily:"Arial",textFill:"black",textStroke:"white",textStrokeWidth:1,fontSize:18,x:0,y:0});
f.add(b);return{lb:function(c){if(0==a||10<c.time-a)b.setText("FPS: "+Math.round(1E3/c.timeDiff)),a=c.time}}}(),t=function(){var a=p;return{hide:function(){a.setText("");c.z()},show:function(b){a!=p?(a.moveTo(f),c.z(),a.setText(b),a.setPosition(c.attrs.width/2,150)):a=new Kinetic.Text({x:c.attrs.width/2,y:150,text:b,fontSize:26,fontFamily:"Short Stack",textFill:"white",textStroke:"black",align:"center",verticalAlign:"middle",scale:{x:0.001,y:0.001},textStrokeWidth:1});f.add(a);Tween.get(a.attrs.scale).to({x:2,
y:2},1E3).wait(3E3).call(function(){Tween.get(a.attrs.scale).to({x:1,y:1},1E3).call(r());Tween.get(a.attrs).to({y:50},1E3).call(function(){a.moveTo(d);c.z()})})}}}();e.on("Game.showBig",function(a){t.show(a.text)},"game");e.on("Game.hideBig",function(){t.hide()},"game");c.onFrame(function(a){w.lb(a);e.a("frame",{frame:a});n.onFrame(a);f.draw();c.J&&(d.draw(),c.J=q);Tween.tick(a.timeDiff,q)});c.start();e.a("Game.loading");SoundJS.addBatch(Ra);J.debug("Loading sounds...","sound");Ua(function(){SoundJS.onLoadQueueComplete=
function(){e.a("Game.loadingDone");b(Z,W,{result:a.F(),h:9,i:5})}});e.on("Game.setMode",function(b){a.o(b.mode)},"game");e.on("Game.nextRound",function(){if(a.c()==K){var c=function(){b(Z,W,{h:9,i:5})};e.a("Game.readyToTeach",{ob:function(){a.o(Q);e.a("Game.getBanana",{callback:c})},ab:function(){c()}})}else a.c()==Q?(a.bb(n.ca()),n.Q()&&a.H(),n.S(),3>a.Ka()?(a.wa(),b(Z,W,{h:9,i:5})):(g(),a.o(S),e.play(Aa),e.a("Game.thankYouForHelpingMonkey",{callback:function(){a.Ua()?b(Z,W,{result:a.F()[a.k()-1],
h:9,i:5}):(a.Ta(),e.a("Game.getBanana",{callback:function(){b(Z,W,{result:a.F()[a.k()-1],h:9,i:5})}}))}}))):a.c()==S?3>a.k()?(a.va(),b(Z,W,{result:a.F()[a.k()-1],h:9,i:5})):(g(),a.Q()?e.a("Game.showSadSystemConfirmation",{callback:function(){a.mb()?(a.gb(),a.o(T),e.a("Game.introduceBubba",{callback:function(){b(Z,W,{h:9,i:5})}})):(a.xa(),a.o(Q),a.la(),b(Z,W,{h:9,i:5}))}}):e.a("Game.showHappySystemConfirmation",{callback:function(){e.a("Game.getBanana",{callback:function(){setTimeout(function(){e.a("Game.getBanana",
{callback:function(){setTimeout(function(){e.a("Game.eatBananas")},1500)}})},200)}})}})):a.c()==T&&(a.la(),a.fb(),a.o(Q),b(Z,W,{h:9,i:5}))},"game");e.on("Game.startGame",function(a){b(a.view,a.Ub,{h:9,i:5})},"game");e.on("Game.getBanana",function(b){a.ua();var d=new Kinetic.Image({image:I["banana-big"],scale:{x:0.001,y:0.001},centerOffset:{x:256,y:256},x:c.attrs.width/2,y:c.attrs.height/2});f.add(d);e.play(fa);Tween.get(d.attrs).to({rotation:2*Math.PI},1E3).wait(1500).to({rotation:-Math.PI/2,x:c.attrs.width-
50-48*(a.Ia()-1),y:50},1E3);Tween.get(d.attrs.scale).to({x:2,y:2},1E3).wait(1500).to({x:0.125,y:0.125},1E3).call(function(){d.attrs.image=I["banana-small"]}).wait(1500).call(function(){b.callback()})},"game")};function db(){this.s=r();this.start=r();this.U=r();this.onFrame=r();this.ca=r();this.S=r();this.ka=r()};Object.size=function(a){var b=0,g;for(g in a)a.hasOwnProperty(g)&&b++;return b};
var J=new function(){this.debug=r();this.error=r()},Y=new function(){function a(a,g,c,d){var f=0,j=0;this.next=function(){var e=a+f*c,l=g+j*d;f=(f+1)%2;0==f&&j++;return{x:e,y:l}}}this.Za=function(a){return!isNaN(a-0)};this.D=function(a,g){return Math.floor(Math.random()*(g-a+1))+a};this.ga=function(a,g){for(var c=0;c<a.length;c++)if(a[c]===g)return o;return q};this.O=function(b,g,c,d){return new a(b,g,c,d)};this.Da=function(a,g,c,d,f,j){5==arguments.length&&(j=q);for(var e=Array(c),l=Array(f),h=0;h<
f;h++){for(var i=this.D(0,c-1);this.ga(l,i);)i=this.D(0,c-1);l.push(i)}for(h=0;h<c;h++)if(this.ga(l,h))e[h]=d;else if(e[h]=this.D(a,g),j)for(;e[h]==d;)e[h]=this.D(a,g);return e}};function eb(){this.m=[];this.ra=function(a,b){var g=b.j.d,c=o,d;for(d in g)0<g[d].A?(g[d].A-=a,b[d]+=g[d].step*a,c=q):b[d]=g[d].to;return c}}
function $(a,b,g,c){b.j={};var d=b.j;d.d={};for(var f in g){d.d[f]={};d.d[f].to=g[f];if(c.duration!=k){var j=c.duration;Y.Za(c.duration)||(c.duration[f]===k&&alert("Not defined duration for "+f),j=c.duration[f]);d.d[f].duration=j;d.d[f].pa=o}else d.d[f].duration=Math.abs(g[f]-b[f])/c.speed[f],d.d[f].speed=c.speed[f],d.d[f].pa=q;d.d[f].step=(g[f]-b[f])/d.d[f].duration;d.d[f].A=d.d[f].duration}d.Ea=c.onFrame!=k;d.Fa=c.n!=k;d.za=c.onFrame;d.Aa=c.n;d.Tb=Number.MAX_VALUE;d.ba=q;a.m.push(b)}
eb.prototype.tick=function(a){for(var b=0;b<this.m.length;b++)if(this.m[b].j.Ea&&this.m[b].j.za(),this.ra(a,this.m[b])){var g=this.m[b];this.m.splice(b,1);g.j.ba||(g.j.ba=o,g.j.Fa&&g.j.Aa())}};function cb(a,b,g){function c(c,e){J.debug("Game.showSystemConfirmation","GGV");c?a.play(xa):(a.play(ya),g.$a()||setTimeout(function(){a.play(za)},1E3));var f=c?I["happy-face"]:I["sad-face"],h=new Kinetic.Image({image:f,x:b.getWidth()/2,y:b.getHeight()/2,centerOffset:{x:f.width/2,y:f.height/2}});d.add(h);setTimeout(function(){d.remove(h);e()},4E3)}var d=b.Z;this.s=function(){J.debug("GeneralGameView kicking in","GGV")};this.U=function(){a.r("GeneralGameView")};a.on("Game.introduceBubba",function(c){var e=
new Kinetic.Image({image:I.rafiki,x:b.getWidth()/2,y:b.getHeight()/2,centerOffset:{x:I.rafiki.width/2,y:I.rafiki.height/2}});d.add(e);a.play(va);setTimeout(function(){a.play(wa);setTimeout(function(){d.remove(e);c.callback()},2E3)},1E3)},"GeneralGameView");a.on("Game.showHappySystemConfirmation",function(a){c(o,a.callback)},"GeneralGameView");a.on("Game.showSadSystemConfirmation",function(a){c(q,a.callback)},"GeneralGameView");a.on("Game.thankYouForHelpingMonkey",function(a){var c=new Kinetic.Text({fontFamily:"Arial",
fontSize:36,textFill:"white",V:"black",text:u("THANK_YOU_FOR_HELPING"),align:"center",y:b.getHeight()/2,x:b.getWidth()/2});d.add(c);setTimeout(function(){Tween.get(c.attrs).to({x:-300,y:-400,alpha:1},500).call(function(){d.remove(c);a.callback()})},1500)},"GeneralGameView");var f=new Kinetic.Text({fontFamily:"Arial",fontSize:36,textFill:"white",V:"black",text:u("INIT_LOADING"),align:"center",y:b.getHeight()/2+20,x:b.getWidth()/2});a.on("Game.loading",function(){d.add(f)},"GeneralGameView");a.on("Game.loadingDone",
function(){d.remove(f)},"GeneralGameView");a.on("Game.eatBananas",function(){var a=new Kinetic.Text({fontFamily:"Arial",fontSize:36,textFill:"white",V:"black",text:"Here the monkey will eat the bananas and grow.",align:"center",y:b.getHeight()/2-20,x:b.getWidth()/2}),c=new Kinetic.Text({fontFamily:"Arial",fontSize:36,textFill:"white",V:"black",text:"The player can then play another game.",align:"center",y:b.getHeight()/2+20,x:b.getWidth()/2});d.add(a);d.add(c)},"GeneralGameView");a.on("Game.readyToTeach",
function(a){function c(){Tween.get(f.attrs).to({x:-300,y:-300},600).call(g);Tween.get(h.attrs).to({x:b.getWidth()+300,y:b.getHeight()+300},600).call(g);Tween.get(N.attrs).to({x:0,y:b.getHeight()+300},600).call(g)}function g(){C++;3===C&&(d.remove(f),d.remove(h),d.remove(N))}var h=new Kinetic.Group({x:b.getWidth()/2-200-128,y:300}),f=new Kinetic.Group({x:b.getWidth()/2+200-128,y:300}),m=new Kinetic.Image({image:I.green}),n=new Kinetic.Image({image:I.red}),w=new Kinetic.Image({image:I.monkey_icon,scale:{x:2,
y:2},x:100,y:100}),t=new Kinetic.Image({image:I["person-yes"],x:20,y:25}),y=new Kinetic.Image({image:I["person-no"],x:60,y:55});h.add(n);h.add(y);f.add(m);f.add(w);f.add(t);var C=0;f.on("mousedown touchstart",function(){f.off("mousedown touchstart");h.off("mousedown touchstart");c();a.ob()});h.on("mousedown touchstart",function(){f.off("mousedown touchstart");h.off("mousedown touchstart");c();a.ab()});d.add(f);d.add(h);var N=new Kinetic.Text({fontSize:48,fontFamily:"Arial",text:u("ARE_YOU_READY_TO_TEACH"),
textFill:"white",align:"center",y:100,x:b.getWidth()/2});d.add(N);d.draw()},"GeneralGameView")};function Z(a,b,g,c){function d(){a.a("Game.showBig",{text:u("FISHING_CATCH_NUMBER",2).toUpperCase()});a.play(ha);setTimeout(function(){J.debug("Ready to play","view");a.play(E.NUMBER_2);a.a("FishingGame.started",p)},700)}function f(){da.jb(a);D=c;for(var e=D.Ha(),d=0;d<e.length;d++)y(e[d]);da.kb(G);da.ya(g);J.debug("Building stage...","view");new Kinetic.Rect({x:0,y:2,width:b.attrs.width,height:b.attrs.height,fill:"white"});var e=new Kinetic.Rect({x:i,y:n+20,width:h,height:m-20,fill:"#00D2FF",stroke:"#436EEE",
strokeWidth:4}),d=new Kinetic.Shape({drawFunc:function(){var a=this.getContext();a.beginPath();a.moveTo(i+0,n);a.lineTo(i+h-0,n);a.lineTo(i+h,n+20);a.lineTo(i,n+20);a.closePath();this.fillStroke()},fill:"#00FFFF",alpha:1}),f=new Kinetic.Shape({drawFunc:function(){var a=this.getContext();a.beginPath();a.moveTo(i+0,n+10);a.lineTo(i+h-0,n+10);a.lineTo(i+h,n+20);a.lineTo(i,n+20);a.closePath();this.fillStroke()},fill:"#00FFFF",stroke:"#00FFFF",strokeWidth:0,alpha:0.5});I.sky.style.width="300px";L=new Kinetic.Image({x:710,
y:50,width:270,height:400,image:I.basket});var fb=new Kinetic.Image({x:i,y:50,width:h,image:I.sky}),j=new Kinetic.Image({x:i-10,y:35,image:I.bamboo}),l=new Kinetic.Image({x:i+h-10,y:35,image:I.bamboo}),t=new Kinetic.Image({x:i-10,y:255,image:I.bamboo}),w=new Kinetic.Image({x:i+h-10,y:255,image:I.bamboo}),z=new Kinetic.Image({x:i-10,y:n+m+5,height:h,rotation:-Math.PI/2,image:I.bamboo}),gb=new Kinetic.Image({x:i,y:50,height:h,rotation:-Math.PI/2,image:I.bamboo});x.add(fb);G.add(L);x.add(e);x.add(d);
x.add(f);N(x,i,i+h,n+m);x.add(j);x.add(l);x.add(t);x.add(w);x.add(z);x.add(gb);C(x,i+20,n+m-150);C(x,i+100,n+m-160);C(x,i+h-130,n+m-140);if(g.c()==S&&1<g.k()||g.c()==T)L.attrs.x+=A,x.attrs.x+=A,B.attrs.x+=A,X.attrs.x+=A;G.add(x);G.draw();a.on("frame",function(a){a=a.frame;ia.draw(a);O.tick(a.timeDiff);B.draw()},"FishingView")}function j(b,c){if(b.Ba()){J.debug("Starting to free "+b,"fish");var e=z[b];$(O,e.attrs,{x:i+h/2,y:n,rotation:Math.PI/2},{duration:{x:1E3,y:1E3,rotation:1E3},n:function(){a.play(ra);
e.attrs.centerOffset.x=0;e.attrs.centerOffset.y=0;var d=t(b);$(O,e.attrs,{x:d.x,y:d.y,rotation:0},{duration:{x:1E3,y:1E3,rotation:1E3},onFrame:r(),n:function(){c()}})}})}else a.play(ka)}function e(a){D.ta();P&&(a.isCaptured()?(D.M(a,r()),D.ha()):(J.debug("Starting to catch "+a,"fish"),D.C(a,r())))}function l(a){z[a].on("mousedown touchstart",function(){P&&e(a)})}var h,i,m,n;function w(){x.moveTo(B);B.attrs.centerOffset={x:h+i,y:0};B.attrs.x=h+i;x.moveToBottom();G.draw();Tween.get(B.attrs.scale).to({x:0},
2E3).call(function(){B.attrs.centerOffset.x=0;B.attrs.x=A;B.attrs.scale.x=0.1;Tween.get(B.attrs.scale).to({x:1},2E3)});L.moveTo(b.Z);G.draw();Tween.get(L.attrs).to({x:L.attrs.x-230},2E3).call(function(){L.moveTo(G);G.draw()});ia.R(2E3,A)}function t(a){var b={};b.x=a.fa()*h+i;b.y=a.Sa()*m+n;return b}function y(a){var b=t(a),b=new Kinetic.Group({x:b.x,y:b.y,width:a.getScale()*a.getWidth()*h,height:a.getScale()*a.getHeight()*m,centerOffset:{x:0,y:0}});B.add(b);var c=new Kinetic.Image({x:0,y:0,image:I["fish"+
a.Ra()],width:a.getScale()*a.getWidth()*h,height:a.getScale()*a.getHeight()*m,centerOffset:{x:a.v()*h/2,y:a.Qa()*m/2}});c.setScale(-1,1);b.add(c);c=new Kinetic.Text({x:0,y:0,text:a.l(),fontSize:48,fontFamily:"Gloria Hallelujah",textFill:"white",align:"center",verticalAlign:"middle",textStroke:"#444"});b.add(c);c.setScale(a.getScale());z[a]=b;ja[a]=c;l(a)}function C(a,b,c){b=new Kinetic.Image({x:b+64,y:c+64,image:I.plant,width:128,height:128,centerOffset:{x:64,y:64}});a.add(b)}function N(a,b,c,e){var d=
new Kinetic.Shape({drawFunc:function(){var a=this.getContext();a.beginPath();a.moveTo(b,e);a.lineTo(c,e);a.lineTo(c,e-50);a.quadraticCurveTo(b,e-50,b,e-80);a.closePath();this.fillStroke()},fill:"#EED6AF",stroke:"#CDBA96",strokeWidth:4});a.add(d)}i=285;n=150;h=400;m=580;for(var A=-230,Ja={},ca=Y.O(774,386,125,-128),R=0;8>R;R++)Ja[R]=ca.next();var z={},ja={},D=p,O=new eb,P=o,La=new hb(a,b,g),B=new Kinetic.Layer,X=new Kinetic.Layer,G=new Kinetic.Layer,x=new Kinetic.Group({x:0,y:0}),L=p,Ma=G;b.add(G);
b.add(Ma);b.add(B);b.add(X);a.on("FishingGame.catch",function(a){ia.Ya(a.b,a.t)},"FishingView");a.on("FishingGame.free",function(a){j(a.b,a.t)},"FishingView");a.on("fishinggame.turnOnClick",function(a){l(a.b)},"FishingView");a.on("fishinggame.turnOffClick",function(a){z[a.b].off("mousedown touchstart")},"FishingView");a.on("fishinggame.allowClicks",function(){P=o},"FishingView");a.on("fishinggame.disallowClicks",function(){P=q},"FishingView");a.on("FishingGame.freeWrongOnes",function(){a.a("Game.showBig",
{text:u("FISHING_FREE_WRONG_ONES").toUpperCase()});a.play(ga)},"FishingView");a.on("FishingGame.catchingDone",function(){P=q;a.a("Game.showBig",{text:u("YAY").toUpperCase()});a.play(ba);setTimeout(function(){J.debug("Tearing down FishingView's layers","view");a.a("Game.hideBig");b.remove(G);b.remove(B);b.remove(X);b.remove(Ma);a.off("frame","FishingView");La.s(D,z);D.eb()},2E3)},"FishingView");var ia=function(b){function c(a){a=e(a);return Math.atan((d.g.x-a.x)/(d.g.y-a.y))}function e(a){var b=a.u(),
c=t(a);return{x:c.x+b*a.N().x*h,y:c.y+b*a.N().y*m}}var d={g:{x:(2*i+h)/2,y:75},length:300,f:0,w:-1,G:Math.PI/30,speed:1.0E-4,e:p,state:0,aa:{x:i,y:125},Sb:{x:(2*i+h)/2,y:375},end:{x:(2*i+h)/2,y:375}};return{R:function(a,c){Tween.get(b.attrs).to({x:b.attrs.x+c},a)},draw:function(f){var g=d.f;switch(d.state){case 3:P&&D.W();d.ja=q;a.play(sa);var g=c(d.e),i=e(d.e);$(O,d,{f:g,length:Math.sqrt(Math.pow(d.g.x-i.x,2)+Math.pow(d.g.y-i.y,2))},{duration:{length:500,f:500},onFrame:function(){g=c(d.e);var a=
e(d.e),b=d,a={f:g,length:Math.sqrt(Math.pow(d.g.x-a.x,2)+Math.pow(d.g.y-a.y,2))},f=b.j,h;for(h in a)f.d[h].to=a[h],f.d[h].pa?f.d[h].step=(a[h]-b[h])/f.d[h].A:(f.d[h].duration=Math.abs(a[h]-b[h])/f.d[h].speed,f.d[h].step=(a[h]-b[h])/f.d[h].duration,f.d[h].A=f.d[h].duration)},n:function(){d.e.Xa();d.state=1}});d.state=4;case 0:g=d.f;d.f+=d.w*d.speed*f.timeDiff;d.f>=d.G?(d.w*=-1,d.f=d.G):d.f<=-d.G&&(d.w*=-1,d.f=-d.G);break;case 1:d.state=4;var j=d.e,f=z[d.e],i=j.N();i.x*=h;i.y*=m;var l=j.u();f.attrs.centerOffset.y=
i.y;f.attrs.x=0<l?f.attrs.x+i.x:f.attrs.x-i.x;f.attrs.centerOffset.x=i.x;a.play(qa);$(O,f.attrs,{rotation:-1*l*Math.PI/2},{duration:{rotation:500},onFrame:r(),n:r()});$(O,d,{y:n-120,length:20},{speed:{y:1,length:0.5},onFrame:function(){var b=z[d.e];b.attrs.x=d.end.x;b.attrs.y=d.end.y;b=b.attrs.y<n;!d.ja&&b&&(a.play(ra),d.ja=o)},n:function(){a.stop(qa);d.state=2}});break;case 2:d.state=4,f=Ja[D.da()],j=d.e,f.rotation=2*j.u()*Math.PI,Tween.get(z[d.e].attrs).to(f,1500).call(function(){D.cb(j);P&&(d.e.capture(),
D.nb());D.ha()}),Tween.get(z[d.e].attrs.centerOffset).to({x:0,y:0},1500).call(r()),$(O,d,{length:200,f:0,y:75},{duration:{length:1E3,f:1E3,y:200},onFrame:r(),n:function(){d.state=0;d.t()}})}d.end.x=d.g.x+d.length*Math.sin(g);d.end.y=d.g.y+d.length*Math.cos(g);f=b.getContext();i=b.attrs.x;l=b.attrs.y;b.clear();f.beginPath();f.strokeStyle="black";f.moveTo(i+d.aa.x,l+d.aa.y);f.lineTo(i+d.g.x,l+d.g.y);f.stroke();f.closePath();f.beginPath();f.moveTo(i+d.g.x,l+d.g.y);f.lineTo(i+d.end.x,l+d.end.y);f.strokeStyle=
"brown";f.lineWidth=2;f.stroke();f.closePath()},Ya:function(a,b){d.e=a;d.t=b;d.state=3}}}(X);this.toString=s("Fish View");a.on("fishinggame.fishmoved",function(a){var a=a.b,b=t(a);z[a].attrs.x=Math.round(b.x);z[a].attrs.y=Math.round(b.y)},"FishingView");a.on("fishinggame.fishturnedleft",function(a){var b=z[a.b].getScale();z[a.b].setScale(-1*b.x,b.y);ja[a.b].setScale(-1*a.b.getScale(),1*a.b.getScale())},"FishingView");a.on("fishinggame.fishturnedright",function(a){var b=z[a.b].getScale();z[a.b].setScale(-1*
b.x,b.y);ja[a.b].setScale(1*a.b.getScale(),1*a.b.getScale())},"FishingView");a.on("FishingGame.inactivity",function(b){a.play(b.ma)},"FishingView");a.on("Game.initiate",function(){f()},"FishingView");var da=this,ca=new Kinetic.Layer,R=new Kinetic.Text({text:"V\u00e4nta...",fontSize:36,fontFamily:"Arial",textFill:"white",x:b.attrs.width/2,y:b.attrs.height/2,align:"center"});ca.add(R);ca.B=R;a.on("Game.roundDone",function(){J.debug("Tearing down view","view");La.U();a.r("FishingView")},"FishingView");
a.on("Game.start",function(){J.debug("Start rolling view...","view");g.c()==S&&1==g.k()?(a.a("Game.showBig",{text:u("MONKEYS_TURN").toUpperCase()}),a.play(Ba),setTimeout(function(){da.R(d);w()},3E3)):d()},"FishingView")}Z.prototype=new Xa;function hb(a,b,g){function c(a,b,c){var a=new Kinetic.Group({x:a,y:b}),b=new Kinetic.Rect({width:100,height:100}),d=new Kinetic.Text({text:c,fontSize:72,fontFamily:"Arial",textFill:"red",textStroke:"black",textStrokeWidth:2});a.add(b);a.add(d);a.Qb=d;a.B=d;if(g.c()==K||g.c()==Q)a.on("mousedown touchstart",function(){f.L(c)});e.add(a);l[c]=a}var d={x:200,y:200,width:300,height:500,stroke:"black",strokeWidth:3},f=p,j=new Kinetic.Layer,e=new Kinetic.Layer;b.add(j);b.add(e);var l={};this.s=function(g,
i){f=g;J.debug("Setting up FishCountingView","view");var m=new Kinetic.Rect({x:0,y:0,width:b.attrs.width,height:b.attrs.height,fill:"white"});j.add(m);j.draw();m=new Kinetic.Rect(d);e.add(m);for(var l=f.Ja(),w=Y.O(d.x+75,d.y+100,135,135),m=0;m<l.length;m++)if(l[m]!=k){var t=l[m],y=w.next();i[t].attrs.x=y.x;i[t].attrs.y=y.y;e.add(i[t])}l=[1,2,3,4];w=Y.O(700,150,100,150);for(m=0;m<l.length;m++)y=w.next(),c(y.x,y.y,l[m]);e.draw();f.c()==K?a.play(oa):(a.play(pa),setTimeout(function(){a.play(E.NUMBER_2)},
700))};this.U=function(){b.remove(e);b.remove(j)};a.on("FishingGame.countingResult",function(b){b.Ca?(a.play(ba),setTimeout(function(){f.sa()},1500)):a.play(na)},"FishingView");a.on("FishingGame.counted",function(a){for(var b in l)l[b].B.attrs.textFill="red";l[a.ia].B.attrs.textFill="yellow";setTimeout(function(){l[a.ia].B.attrs.textFill="red";e.draw()},1500);e.draw()},"FishingView")};function Xa(){function a(a){y++;3==y&&(a(),c.draw(),g.r("GameView"))}function b(b){g.play(Da);c.getStage();g.on("frame",function(){c.draw()},"GameView");Tween.get(l.attrs).to(w,2E3).call(function(){a(b)});Tween.get(f.attrs).to(n,2E3).call(function(){a(b)});Tween.get(j.attrs).to(m,2E3).call(function(){a(b)})}var g=new Wa,c=new Kinetic.Layer;new Kinetic.Layer;var d=p,f=p,j=p,e=p,l=p,h={x:20,y:20,width:220,height:730,fill:"white",alpha:0.2},i={x:260,y:20,width:740,height:730,fill:"white",alpha:0.8},
m={y:i.y,alpha:0.2,x:i.x+520,width:220,height:i.height,fill:i.fill},n={alpha:0.8,width:740,y:h.y,x:h.x,height:h.height,fill:h.fill},w={x:740+h.x-175,y:540},t={x:60,y:540},y=0;this.jb=function(a){g=a};this.kb=function(a){c=a};this.R=function(a){b(a)};this.ya=function(a){y=0;var b=c.getStage();d=new Kinetic.Rect({x:0,y:0,width:b.getWidth(),height:b.getHeight(),stroke:"white",strokeWidth:4});c.add(d);if(a.c()==Q||a.c()==S){var g=a.c(),b=g==S&&1<a.k()?n:h,g=g==S&&1<a.k()?w:t;c.getStage();f=new Kinetic.Rect(b);
l=new Kinetic.Image({x:g.x,y:g.y,image:I.monkey});c.add(f);c.add(l)}a.c()==T&&(b=n,c.getStage(),b=new Kinetic.Rect(b),g=new Kinetic.Image({x:500,y:450,image:I.rafiki,width:200,height:280}),c.add(b),c.add(g));b=a.c();j=new Kinetic.Rect(b==S&&1<a.k()||b==T?m:i);e=new Kinetic.Image({x:i.x+i.width-210,y:i.y+i.height-220,scale:{x:0.8,y:0.8},image:I.avatar});c.add(j);c.add(e)}};