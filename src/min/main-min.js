window.onload=function(){var e=function(e,l,t,n){for(var o=document.getElementsByClassName(t),a=0;a<o.length;a++)for(var s=o[a].getElementsByClassName(n),r=100-l*(e-1),g=r/e,i=0;i<s.length;i++){var m=(i+1)%e;switch(0===m?console.log("0"):1===m?console.log("1"):console.log("null"),s[i].style.width=g+"%",(i+1)%e){case 0:s[i].style.marginTop=l+"%",s[i].style.marginLeft=l+"%";break;case 1:s[i].style.marginTop=l+"%";break;default:s[i].style.marginLeft=l+"%",s[i].style.marginTop=l+"%"}s[i].style["float"]="left"}},l=function(e,l,t,n){};e(4,2,"js-wrapper","js-item")};