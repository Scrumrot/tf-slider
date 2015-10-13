//main.js
'use strict';

window.onload = function() {

    var setItemsWidth = function(itemsInView, itemsMargin, wrapperClass, itemsClass) {

        // arr.map((item, index) => item)
        let w = document.getElementsByClassName(wrapperClass);
        let sliders = Array.from(w, el =>
		    ({
		        itemsMargin: itemsMargin,
		        itemsInView: itemsInView,
		        items: (Array.from(el.children))
		    })
		);
		sliders.forEach((wrapper, index, array) => {
		    wrapper.items.forEach((item, itemIndex, itemArray) => {
		        let ci = (itemIndex + 1) % wrapper.itemsInView;
		        item.style.marginTop = wrapper.itemsInView < (itemIndex + 1) ? wrapper.itemsMargin + '%' : 0;;
		        item.style.marginLeft = ci === 0 ? wrapper.itemsMargin + '%' : ci === 1 ? 0 : wrapper.itemsMargin + '%';
		        item.style.width = getItemWidth(wrapper.itemsMargin, wrapper.itemsInView) + '%';
		        item.style.float = 'left';
		    })
		});
        
        // var itmz = getElementsArray(wrapper).map((item, index, array, thisArg) => this);
        
        // for (var i = 0; i < wrapper.length; i++) {
          
          
        //     var items = wrapper[i].getElementsByClassName(itemsClass);
        //     var wrapperArea = 100 - (itemsMargin * (itemsInView - 1));
        //     var itemWidth = wrapperArea / itemsInView;
        //     for (var z = 0; z < items.length; z++) {
        //         let ci = (z + 1) % itemsInView;
        //         let mL = ci === 0 ? itemsMargin + '%' : ci === 1 ? 0 : itemsMargin + '%';
        //         let mT = itemsInView < (z + 1) ? itemsMargin + '%' : 0;
        //         items[z].style.marginTop = mT;
        //         items[z].style.marginLeft = mL;
        //         items[z].style.width = itemWidth + '%';
        //         items[z].style.float = 'left';


        //     }
        // }
    };
    var getElementsArray = function(warpperObj, itemClass) {
        return Array.prototype.slice.call(warpperClass).map((item, index) => [].slice.call(item.getElementsByClassName(itemClass)));
        // Array.prototype.filter.call(element, (element)=> element);
    }

    var setRowMarginTop = function(itemTotal, itemsPerRow, cuerrentItem, marginTop) {
        if (itemTotal > itemsPerRow && cuerrentItem > itemsPerRow) {

        };

    }
    var getItemWidth = function(itemsMargin, itemsInView) {
    return (100 - (itemsMargin * (itemsInView - 1))) / itemsInView;
	}
    setItemsWidth(4, 2, 'js-wrapper', 'js-item');
    //	end of onload
};


// var getSliders = function(wrapperClass) {
//     let wrapper = document.getElementsByClassName(wrapperClass);
//     Array.prototype.slice.call(warpperClass).map((item, index) => {
//             width:
//         }
//         [].slice.call(item.getElementsByClassName(itemClass))); {
//         width: array[{
//             style: this.style,
//             childeren: getElementsArray(this, itemClass)
//         }]
//     }

// };
// var w = document.getElementsByClassName('js-wrapper');
// var sliders = Array.from(w, el =>
//     ({
//         itemsMargin: 2,
//         itemsInView: 4,
//         items: (Array.from(el.children))
//     })
// );

// sliders.forEach((wrapper, index, array) => {
//     wrapper.items.forEach((item, itemIndex, itemArray) => {
//         let ci = (itemIndex + 1) % wrapper.itemsInView;
//         item.style.marginTop = wrapper.itemsInView < (itemIndex + 1) ? wrapper.itemsMargin + '%' : 0;;
//         item.style.marginLeft = ci === 0 ? wrapper.itemsMargin + '%' : ci === 1 ? 0 : wrapper.itemsMargin + '%';
//         item.style.width = getItemWidth(wrapper.itemsMargin, wrapper.itemsInView) + '%';
//         item.style.float = 'left';
//     })
// });

//[].slice.call(wrapper).map(thisArg)=>thisArg.getElementsByClassName('js-item');


// Array.prototype.slice.call(tiles).map(function(item, index, array,thisArg ){return [].slice.call(item.getElementsByClassName('js-item'))});
// Array.prototype.slice.call(tiles).map((item, index) => [].slice.call(item.getElementsByClassName('js-item')));
