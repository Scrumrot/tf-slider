//tf_slider.js

// Create an immediately invoked functional expression to wrap our code
(function() {
  'use strict';

    // Define our constructor
    this.TFS = function() {

        // Create global element references
        this.closeButton = null;
        this.wrapper = null;
        this.items = null;
        this.overlay = null;

        // Define option defaults
        var defaults = {
            wrapperClass: 'tf-slider',
            itemsClass: 'tf-item',
            itemsInView: 1,
            evenFooter: true,
            content: "",
            maxWidth: 600,
            minWidth: 280,
            overlay: true
        },

        // Create options by extending defaults with the passed in arugments
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

    }
    Modal.prototype.wrapper = function() {
        // open code goes here
    }
    Modal.prototype.setItemsWidth = function(itemsInView,itemsMargin,wrapperClass,itemsClass) {
        var wrapperArea = 100-itemsMargin;
        var itemWidth = wrapperArea/itemsInView;
        var wrapper = document.getElementsByClassName(wrapperClass);
        for (var i = 0; i < wrapper.length; i++) {
          var items = wrapper[i].getElementsByClassName(itemsClass);
          for (var z = 0; z < items.length; z++) {
            items[z].style.width= itemWidth+'%';
          };
        };
    }
    Modal.prototype.open = function() {
        // open code goes here
    }
    TFS.prototype.equalHeights = function (item) {
        var tallest = 0
            $(item).find('.js-auto-H').each(function() {
                var cH = $(this).outerHeight();
                $(this).css({
                    height: 'auto',
                    minHeight: 0
                });
                if ($(this).outerHeight() > tallest) {
                    tallest = $(this).outerHeight();
                };
                // $(this).css('height',cH);
            });

            $(item).find('.js-auto-H').animate({
                minHeight: tallest + 'px'
            }, 300, 'easeOut');

    };
    function boxMarginBottom(wrapper,target,footer) {
        $(wrapper).find(target).each(function() {
            if ($(this).parents(wrapper).find(footer).length !== 0) {
                var boxH = $(this).parents(wrapper).find(footer).outerHeight();
                $(this).css('margin-bottom',boxH+'px');
            };
        });
    };

    // Utility method to extend defaults with user options
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

}());