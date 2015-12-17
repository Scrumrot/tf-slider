const elementsDef =  []


function filterByID(obj) {
  if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
    return true;
  } else {
    invalidEntries++;
    return false;
  }
}

var ttt = document.all;
var asx = [].slice.call(ttt).map(function(currentValue){return currentValue.tagName; });

var xxx = [].slice.call(document.all);

function getTags( x ) {
	return x.map(function(currentValue){return currentValue.tagName; });
		
	
}

var tx =getTags( xxx );

function(){}
[].slice.call(document.all).map(function(currentValue){return currentValue.tagName; });

const tagDef =["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br",
"button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn",
"dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5",
"h6","head","header","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link",
"main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option",
"output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select",
"small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th",
"thead","time","title","tr","track","u","ul","var","video","wbr"]

const scan = function(){
	const tagDefArray =["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br",
"button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn",
"dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5",
"h6","head","header","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link",
"main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option",
"output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select",
"small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th",
"thead","time","title","tr","track","u","ul","var","video","wbr"]
	this.tagObj = {};
	this.setTagObj = function(){ tagDefArray.forEach(function(v,i){this.tagObj[v]=i;});}
}

tagDef .forEach(function(v,i){bla[v]=i;});

