
(function () {

    function PhotoGallery (element, pix) {

        // define some necessary variables
        this.gallery = $('<div>',{class:'gallery'});

        $(element).append(this.gallery);
        // Add the Big picture element.
        this.currentWindow = $('<img>', {class:'gallery-current'});
        this.gallery.append (this.currentWindow);

        // Add the Scroll Bar below 
        this.scrollWindow = $('<div>',{class:'gallery-scroll'});
        this.gallery.append (this.scrollWindow);

        // Utility functions:tools working with images image.
        this.setCurrentSrc = function (url) {
            this.currentWindow.attr('src',url);
        };

        //  This will take an image (url) and return a JQuery
        //  object with the url in an img element.
        function addImage (url) {
            var image =$('<img>');
            image.attr('src',url);
            return image;        
        }

        //  ***********   Presentation Section ***********
        //  The next section of code will setup the Gallery 
        //  for presentation. 

        //  Produce a ScrollElements container that will 
        //  contain all the images .
        var scrollElements = pix.reduce (function(prev,next) {
            var image =$('<img>');
            image.attr('src',next);
            return prev.add(image);
        },$());


        this.scrollWindow.append(scrollElements);
        this.setCurrentSrc(pix[0]);


        //  ********   API Section  ********************
        // API: the following functions will be returned to the
        // caller to allow the user to control the workings of 
        //the gallery

        var destroyFunction = function destroyFunction( ) {
            this.scrollWindow.remove();
            this.currentWindow.remove();

        }
        var addImageFunction = function addImageFuncton(newImg) {
      
            this.scrollWindow.append (addImage(newImg));  
        }

        var removeImageFunction = function removeImageFunction(imgStr) {
            var toRemove = scrollWindow.find('[src="'+imgStr+'"]');

            toRemove.remove();     
        }

        // ***********   Wrap Up Section 
        // **************************************


        //  Create a Event Listener that will pickup any 
        //  mouse clicks on the Scroll List.
        var saved = this;
        this.scrollWindow.on('click', function (e) {
            if($(e.target).is('img')) {
                saved.currentWindow.attr('src',$(e.target).attr('src'));
            }
        });

        this.destroy = destroyFunction;
        this.addImage = addImageFunction;
        this.removeImage = removeImageFunction;    

    }

    var images = ['src/bldg.jpg', 'src/skyscraper-day-fun.jpg','src/bldg.jpg', 'src/skyscraper-day-fun.jpg','src/bldg.jpg', 'src/skyscraper-day-fun.jpg']

    var shoot = new PhotoGallery ($('.container'), images);

    shoot.addImage('src/tiger2.jpg');
    shoot.addImage('src/tiger1.jpg');
    //shoot.removeImage('src/tiger1.jpg');
    //shoot.destroy();

    var shoot2 = new PhotoGallery ($('.container2'), images);


    shoot2.destroy();

    shoot2 = new PhotoGallery ($('.container2'), images);
 

})();

//*****************************************************
//*****************************************************
//*****************************************************
//*****************************************************



