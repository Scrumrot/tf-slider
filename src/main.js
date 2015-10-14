//main.js
'use strict';

 window.onload = function() {
    var getWarpperArr = function(wrapperSelector){
      return  wrapperSelector = (typeof wrapperSelector === 'string') ? Array.from(document.querySelectorAll(wrapperSelector)) : wrapperSelector; 
       //return Array.from(document.querySelectorAll(wrapperSelector));
    }
    var setItemsWidth = function(itemsInView, itemsMargin, wrappersArr) {
        // let w = document.getElementsByClassName(wrapperClass);
        let sliders = wrappersArr.map( el =>
		    ({
		        itemsMargin: itemsMargin,
		        itemsInView: itemsInView,
		        items: (Array.from(el.children))
		    })
		);
        
		sliders.forEach((wrapper) => {
            let tallest = new equalHeights(wrapper.items);
            
		    wrapper.items.forEach((item, itemIndex, itemArray) => {
		        let ci = (itemIndex + 1) % wrapper.itemsInView;
		        item.style.marginTop = wrapper.itemsInView < (itemIndex + 1) ? wrapper.itemsMargin + '%' : 0;;
		        item.style.marginLeft = ci === 0 ? wrapper.itemsMargin + '%' : ci === 1 ? 0 : wrapper.itemsMargin + '%';
		        item.style.width = getItemWidth(wrapper.itemsMargin, wrapper.itemsInView) + '%';
		        item.style.float = 'left';
                //item.style.minHeight = tallest.getTallest()+'px';
                //item.getElementsByClassName('js-footer')[0].style.marginTop = getFooterMarginTop(tallest.getTallest(),item)+'px';
                
		    })
            tallest.setTallest();
             console.log(tallest.getTallest());
            wrapper.items.forEach((item) => {

                item.style.minHeight = tallest.getTallest()+'px';
                item.getElementsByClassName('js-footer')[0].style.marginTop = getFooterMarginTop(tallest.getTallest(),item,item.getElementsByClassName('js-footer')[0])+'px';
                
            })
		});
        
    };
    var getInnerHeight = function(item,footer){
        let innerTotal = 0; 
        Array.from(item.children).forEach((el) =>{innerTotal += getAbsoluteHeight(el);  }  ); 
        // console.log(innerTotal);
        return innerTotal;
    }
    var getAbsoluteHeight = function(el) {
        // Get the DOM Node if you pass in a string
        el = (typeof el === 'string') ? document.querySelector(el) : el; 
        let styles = window.getComputedStyle(el);
        let margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
        return getOffsetHeight(el) + margin;
    }
    var getOffsetHeight = function(el) {
        // Get the DOM Node if you pass in a string
        el = (typeof el === 'string') ? document.querySelector(el) : el; 
        let styles = window.getComputedStyle(el);
        let total = parseFloat(styles['height']) + parseFloat(styles['paddingTop']) + parseFloat(styles['paddingBottom']) + parseFloat(styles['borderTop']) +parseFloat(styles['borderBottom']);
        return total;
    }
    
    //gets its info from an itemsArray with somthing equivical to this.style.offsetHeight 
    
    var equalHeights = function(itemsArray){
        let tallest=0;
        this.setTallest = function(){ itemsArray.forEach( (el)=> el.offsetHeight > tallest ? tallest = getOffsetHeight(el) : '' ); }
        this.getTallest = ()=>  tallest;

    }
    var getFooterMarginTop = function(tallest,item, footer){
        let a = getOffsetHeight(item);

        let b = getInnerHeight(item,footer);

        return (a - b) > 0 ? (a - b) : 0;
    }
    //gets its info from settings

    var getItemWidth = function(itemsMargin, itemsInView) {
    return (100 - (itemsMargin * (itemsInView - 1))) / itemsInView;
	}
    setItemsWidth(4, 2, getWarpperArr('.js-wrapper'), 'js-item');
    //	end of onload
 };