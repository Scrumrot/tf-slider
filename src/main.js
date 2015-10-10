//main.js
'use strict';

window.onload=function(){

	var setItemsWidth = function(itemsInView,itemsMargin,wrapperClass,itemsClass) {

        // arr.map((item, index) => item)
        
        var wrapper = document.getElementsByClassName(wrapperClass);
        var itmz = getElementArray(wrapper).map( (item, index, array,thisArg ) =>this);
        console.log(itmz);
        for (var i = 0; i < wrapper.length; i++) {
	      var items = wrapper[i].getElementsByClassName(itemsClass);
	      var wrapperArea = 100-(itemsMargin*(itemsInView-1));
	      var itemWidth = wrapperArea/itemsInView;
          for (var z = 0; z < items.length; z++) {
          	let ci = (z+1) % itemsInView;  
			let mL = ci === 0 ? itemsMargin+'%' : ci ===1 ? 0 : itemsMargin+'%';
			let mT = itemsInView< (z+1) ? itemsMargin+'%' : 0;
			items[z].style.marginTop = mT;
			items[z].style.marginLeft = mL;
            items[z].style.width= itemWidth+'%';
   //          switch((z+1) % itemsInView) {
			//     case 0:
			//         items[z].style.marginTop = itemsMargin+'%';
			//         items[z].style.marginLeft = (itemsMargin)+'%';
			//         break;
			//     case 1:
			//         items[z].style.marginTop = (itemsMargin)+'%';
			//         break;
			//     default:
			//         items[z].style.marginLeft = (itemsMargin)+'%';
	  //           	items[z].style.marginTop = (itemsMargin)+'%';	
			// }
            items[z].style.float= 'left';

            
          }
        }
    };
    var getElementArray = function(element){
    	return Array.prototype.filter.call(element, (element)=> element);
    }
    var setRowMarginTop= function(itemTotal,itemsPerRow,cuerrentItem,marginTop){
    	if (itemTotal > itemsPerRow && cuerrentItem > itemsPerRow ) {

    	};

    }
    setItemsWidth(4,2,'js-wrapper','js-item');
 //	end of onload
};

