(function(g){var window=this;'use strict';var whb=function(a,b){g.T.call(this,{G:"button",Ia:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],X:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},W:[{G:"svg",X:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},W:[{G:"g",X:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},W:[{G:"g",X:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
W:[{G:"path",X:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.F=a;this.Qa("click",this.onClick,this);this.updateValue("title",g.JT(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.$a(this,g.PS(b.Dc(),this.element))},xhb=function(a){g.T.call(this,{G:"div",
N:"ytp-miniplayer-ui"});this.Zf=!1;this.player=a;this.S(a,"minimized",this.Zh);this.S(a,"onStateChange",this.pP)},yhb=function(a){g.oT.call(this,a);
this.u=new g.aI(this);this.j=new xhb(this.player);this.j.hide();g.ES(this.player,this.j.element,4);a.wg()&&(this.load(),g.Up(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(whb,g.T);whb.prototype.onClick=function(){this.F.Na("onExpandMiniplayer")};g.w(xhb,g.T);g.k=xhb.prototype;
g.k.vM=function(){this.tooltip=new g.XV(this.player,this);g.D(this,this.tooltip);g.ES(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Rc=new g.UT(this.player);g.D(this,this.Rc);this.Wj=new g.T({G:"div",N:"ytp-miniplayer-scrim"});g.D(this,this.Wj);this.Wj.Ea(this.element);this.S(this.Wj.element,"click",this.cH);var a=new g.T({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.cQ()]});g.D(this,a);a.Ea(this.Wj.element);this.S(a.element,"click",this.fp);
a=new whb(this.player,this);g.D(this,a);a.Ea(this.Wj.element);this.Mu=new g.T({G:"div",N:"ytp-miniplayer-controls"});g.D(this,this.Mu);this.Mu.Ea(this.Wj.element);this.S(this.Mu.element,"click",this.cH);var b=new g.T({G:"div",N:"ytp-miniplayer-button-container"});g.D(this,b);b.Ea(this.Mu.element);a=new g.T({G:"div",N:"ytp-miniplayer-play-button-container"});g.D(this,a);a.Ea(this.Mu.element);var c=new g.T({G:"div",N:"ytp-miniplayer-button-container"});g.D(this,c);c.Ea(this.Mu.element);this.MW=new g.YU(this.player,
this,!1);g.D(this,this.MW);this.MW.Ea(b.element);b=new g.XU(this.player,this);g.D(this,b);b.Ea(a.element);this.nextButton=new g.YU(this.player,this,!0);g.D(this,this.nextButton);this.nextButton.Ea(c.element);this.uj=new g.QV(this.player,this);g.D(this,this.uj);this.uj.Ea(this.Wj.element);this.Jc=new g.cV(this.player,this);g.D(this,this.Jc);g.ES(this.player,this.Jc.element,4);this.SG=new g.T({G:"div",N:"ytp-miniplayer-buttons"});g.D(this,this.SG);g.ES(this.player,this.SG.element,4);a=new g.T({G:"button",
Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.cQ()]});g.D(this,a);a.Ea(this.SG.element);this.S(a.element,"click",this.fp);a=new g.T({G:"button",Ia:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Close"},W:[g.jQ()]});g.D(this,a);a.Ea(this.SG.element);this.S(a.element,"click",this.Q6);this.S(this.player,"presentingplayerstatechange",this.zd);this.S(this.player,"appresize",this.Eb);this.S(this.player,"fullscreentoggled",this.Eb);this.Eb()};
g.k.show=function(){this.rf=new g.Gp(this.Iv,null,this);this.rf.start();this.Zf||(this.vM(),this.Zf=!0);0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.Jc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.rf&&(this.rf.dispose(),this.rf=void 0);g.T.prototype.hide.call(this);this.player.wg()||(this.Zf&&this.Jc.hide(),this.player.loadModule("annotations_module"))};
g.k.oa=function(){this.rf&&(this.rf.dispose(),this.rf=void 0);g.T.prototype.oa.call(this)};
g.k.fp=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.Q6=function(){this.player.playVideo()};
g.k.cH=function(a){if(a.target===this.Wj.element||a.target===this.Mu.element)g.LO(this.player.Fb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Zh=function(){g.Up(this.player.getRootNode(),"ytp-player-minimized",this.player.wg())};
g.k.Je=function(){this.Jc.yc();this.uj.yc()};
g.k.Iv=function(){this.Je();this.rf&&this.rf.start()};
g.k.zd=function(a){g.S(a.state,32)&&this.tooltip.hide()};
g.k.Eb=function(){g.pV(this.Jc,0,this.player.ib().getPlayerSize().width,!1);g.dV(this.Jc)};
g.k.pP=function(a){this.player.wg()&&(0===a?this.hide():this.show())};
g.k.Dc=function(){return this.tooltip};
g.k.vg=function(){return!1};
g.k.lh=function(){return!1};
g.k.Sb=function(){return!1};
g.k.Ql=function(){return!1};
g.k.SD=function(){};
g.k.Sp=function(){};
g.k.jy=function(){};
g.k.Om=function(){return null};
g.k.NF=function(){return null};
g.k.QF=function(){return new g.Fe(0,0)};
g.k.cC=function(){return null};
g.k.Dk=function(){return new g.Nm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Vv=function(a,b,c,d,e){var f=0,h=d=0,l=g.an(a);if(b){c=g.Pp(b,"ytp-prev-button")||g.Pp(b,"ytp-next-button");var m=g.Pp(b,"ytp-play-button"),n=g.Pp(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Zm(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Pp(b,"ytp-miniplayer-button-top-left"),f=g.Zm(b,this.element),b=g.an(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.ib().getPlayerSize().width;e=f+(e||0);l=g.ye(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.xp=function(){};
g.k.Kl=function(){return!1};
g.k.TD=function(){};
g.k.Qz=function(){};
g.k.Xq=function(){};
g.k.Wq=function(){};
g.k.ZA=function(){};
g.k.Wr=function(){};
g.k.ED=function(){};g.w(yhb,g.oT);g.k=yhb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Up(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.oT.prototype.create.call(this);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Xk=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.nT("miniplayer",yhb);})(_yt_player);
