// (function () {

//     var ul = $('ul');

//     ul.on('click', function(e) {
//         var target = $(e.target);

//         if (target.is('li')) {
//             target.remove();
//         } else if (target.parents('li').lenght > 0) {
//             target.parents('li').remove();
//         }
//     });

//     $('button').on('click', function() {
//         var newLi = $('<li>');
//         newLi.html('yo ');
//         ul.append(newLi);
//     });
  
// })();

    var images = ['src/bldg.jpg', 'src/skyscraper-day-fun.jpg','src/bldg.jpg', 'src/skyscraper-day-fun.jpg','src/bldg.jpg', 'src/skyscraper-day-fun.jpg']

function photoGallery (element, pix) {

    // define some necessary variables.
    var refObject = {};

    var gallery = $(element);

    // Add the Big picture element.
    var current = $('<img>', {class:'gallery-current'});
    gallery.append (current);

    // Add the Scroll Bar below 
    var scroll = $('<div>',{class:'gallery-scroll'});
    gallery.append (scroll);

    // Utility functions:tools working with images image.
    function setCurrentSrc (url) {
        current.attr('src',url);
    }

    //  This will take an image (url) and return a JQuery
    //  object with the url in an img element.
    function addImage (url) {
        var image =$('<img>');
        image.attr('src',next);
        return image;        
    }

    //  ***********   Presentation Section ***********
    //  The next section of code will setup the Gallery 
    //  for presentation. 

    //  Produce a ScrollElements container that will 
    //  contain all the images .
    var scrollElements = images.reduce (function(prev,next) {
        var image =$('<img>');
        image.attr('src',next);
        return prev.add(image);
    },$());


    scroll.append(scrollElements);
    setCurrentSrc(images[0]);

    //  ********   API Section  ********************
    // API: the following functions will be returned to the
    // caller to allow the user to control the workings of 
    //the gallery

    var destroyFunction = function destroyFunction( ) {
        scroll.remove();
        current.remove();

    }
    var addImageFunction = function addImageFuncton(newImg) {
        scroll.append (addImage);
    
    }

    var removeImageFunction = function removeImageFunction(imgStr) {
   
    }

    // ***********   Wrap Up Section 
    // **************************************
    refObject.destroy = destroyFunction;
    refObject.addImage = addImageFunction;
    refObject.removeImage = removeImageFunction;

    return refObject;    

}

    var images = ['src/bldg.jpg', 'src/skyscraper-day-fun.jpg','src/bldg.jpg', 'src/skyscraper-day-fun.jpg','src/bldg.jpg', 'src/skyscraper-day-fun.jpg']

    var shoot = photoGallery ($('.gallery'), images);

    //shoot.destroy();


//*****************************************************
//*****************************************************
//*****************************************************
//*****************************************************
function Holdoff () { 

    var images = ['src/bldg.jpg', 'src/skyscraper-day-fun.jpg','src/bldg.jpg', 'src/skyscraper-day-fun.jpg','src/bldg.jpg', 'src/skyscraper-day-fun.jpg']

    var container = $('#gallery');

    var current = container.find('.gallery-current');
    var scroll = container.find('.gallery-scroll');

    function setCurrentSrc (url) {
        current.attr('src',url);
    }

    //  ********   API Section  ********************
    // API: the following functions will be returned to the
    // caller to allow the user to control the workings of 
    //the gallery

    var destroyFunction = function destroyFunction( ) {
    }
    var addImageFunction = function addImageFuncton(newImg) {
        // body...
    }

    var removeImageFunction = function removeImageFunction(img) {
    }



    //  ***********   Presentation Section ***********
    //  The next section of code will setup the Gallery 
    //  for presentation. 

    //  Produce a ScrollElements container that will 
    //  contain all the images .
    var scrollElements = images.reduce (function(prev,next) {
        var image =$('<img>');
        image.attr('src',next);
        return prev.add(image);
    },$());


 

    scroll.append(scrollElements);
    setCurrentSrc(images[0]);

    //  Create a Event Listener that will pickup any 
    //  mouse clicks on the Scroll List.
    $('.gallery-scroll').on('click', function (e) {
        if($(e.target).is('img')) {
            current.attr('src',$(e.target).attr('src'));
        }
    });


    // ***********   Wrap Up Section 
    // **************************************
    refObject.destroy = destroyFunction;
    refObject.addImage = addImageFunction;
    refObject.removeImage = removeImageFunction;

    return refObject;
}
/*  Notes from 11:20am 
var gpage = photoGallery ($('#gallery'),arr);

PhotoGallery.prototype.destroy ()
PhotoGallery.prototype.addImage ()
PhotoGallery.prototype.removeImage ()


function photoGallery () {
    return {
        destroy:
        addImage:
        removeImage:
    }
}

$("[src ='+string']")

*/



