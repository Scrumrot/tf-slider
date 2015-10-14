//main.js
'use strict';

// window.onload = function() {

    var setItemsWidth = function(itemsInView, itemsMargin, wrapperClass) {
        let w = document.getElementsByClassName(wrapperClass);
        let sliders = Array.from(w, el =>
		    ({
		        itemsMargin: itemsMargin,
		        itemsInView: itemsInView,
		        items: (Array.from(el.children))
		    })
		);
		sliders.forEach((wrapper, index, array) => {
            
            let tallest = new equalHeights(wrapper.items);
            tallest.setTallest();
		    wrapper.items.forEach((item, itemIndex, itemArray) => {
		        let ci = (itemIndex + 1) % wrapper.itemsInView;
		        item.style.marginTop = wrapper.itemsInView < (itemIndex + 1) ? wrapper.itemsMargin + '%' : 0;;
		        item.style.marginLeft = ci === 0 ? wrapper.itemsMargin + '%' : ci === 1 ? 0 : wrapper.itemsMargin + '%';
		        item.style.width = getItemWidth(wrapper.itemsMargin, wrapper.itemsInView) + '%';
		        item.style.float = 'left';
                item.style.minHeight = tallest.getTallest()+'px';
                item.getElementsByClassName('js-footer')[0].style.marginTop = getFooterMarginTop(item)+'px';
                
		    })
		});
        
    };
    var getInnerHeight = function(item){
        let innerTotal = 0; 
        Array.from(item.children).forEach((innerEl, innerInd, innerArr) =>{innerTotal += innerEl.offsetHeight;}  ); 
        return innerTotal;
    }
    var getFooterMarginTop = function(item){
        return item.offsetHeight-(getInnerHeight(item));
    }
    //gets its info from an itemsArray with somthing equivical to this.style.offsetHeight 
    // var equalHeights = function(itemsArray){
    //     let tallest=0;
    //     itemsArray.forEach((el, ind, arr) => {
    //         if (el.offsetHeight > tallest){tallest = el.offsetHeight; } 
    //     });
    //     return tallest;
    // }
    var equalHeights = function(itemsArray){
        let tallest=0;
        this.setTallest = ()=> itemsArray.find( (el)=> el.offsetHeight > tallest ? tallest = el.offsetHeight : '');
        this.getTallest = ()=>  tallest;
    }
    //gets its info from settings
    var getItemWidth = function(itemsMargin, itemsInView) {
    return (100 - (itemsMargin * (itemsInView - 1))) / itemsInView;
	}
    setItemsWidth(4, 2, 'js-wrapper', 'js-item');
    //	end of onload
// };