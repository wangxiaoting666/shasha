if(window._mv_loader){(function(){window.$mv_fpass=true;var h="1.0.0.1";var d=true;function a(l){var k=new Image(1,1);k.onload=function(){};k.src=l}function f(){if(!i("_jzqckmp")){function k(l){var m=document.createElement("iframe");m.style.width="1px";m.style.border=0;m.style.position="absolute";m.style.left="-100px";m.style.top="-100px";m.style.height="1px";m.src=l;m.id="mediav_cookiemapping";document.body.insertBefore(m,document.body.childNodes[0])}k(" http://ckmap.mediav.com/b?type=10");setCookieMappingMark()}}function i(l){var m=new RegExp("(^| )"+l+"=([^;]*)(;|\x24)"),k=m.exec(document.cookie);if(k){return k[2]||null;W}return null}setCookieMappingMark=function(){j("_jzqckmp=1",g(86400000))};function j(l,k){document.cookie=l+"; path=/; "+k}function g(m){var l=new Date,k=new Date(l.getTime()+m);return"expires="+k.toGMTString()+"; "}var e,b;function c(){if(window.$mat){return}var k=document.createElement("script");k.type="text/javascript";k.async=true;k.src="mba.js"/*tpa=http://material.mediav.com/bjjs/mba.js*/;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(k,l)}window._mv_loader.support({"$setBeacon":function(k){b=k},"$setAccount":function(k){k=k+"";if(k.indexOf("m-")==0){k=k.split("-")[1];c()}e=k},"$logConversion":function(){if(!b||!d){return}var k="http://tran.mediav.com/t?type=3&jzqt=bc&cus="+e+"&jzqbc="+b;a(k);f();d=false}})})()};