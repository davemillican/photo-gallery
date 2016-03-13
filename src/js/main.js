
(function () {

    function PhotoGallery (element, pix, id) {

        //  This is for DEBUG
        //  ***********************************
        this.uniqueId = id;

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
            this.gallery.remove();
            this.scrollWindow.remove();
            this.currentWindow.remove();

        }
        var addImageFunction = function addImageFuncton(newImg) {
      
            this.scrollWindow.append (addImage(newImg));  
        }

        var removeImageFunction = function removeImageFunction(imgStr) {
            var toRemove = this.scrollWindow.find('[src="'+imgStr+'"]');

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

    /************   Test Platform **********************
    ****************************************************/

    var images = ['src/bldg.jpg', 'src/skyscraper-day-fun.jpg',
                    'src/beach.jpg', 'src/jaguar1.jpg',
                    'src/chile.jpg', 'src/Argentina_gaucho.jpg'];

    var images2 = ['src/bldg.jpg','src/skyscraper-day-fun.jpg'];

    var shoot = new PhotoGallery ($('.container'), images,2013);


    shoot.addImage('src/tiger2.jpg');
    shoot.addImage('src/tiger1.jpg');
    shoot.removeImage('src/tiger1.jpg');
    //shoot.destroy();
//function testbed () {
    var shoot2 = new PhotoGallery ($('.container2'), images,2014);

    shoot2.destroy();

    shoot2 = new PhotoGallery ($('.container2'), images2,2014);

    console.log (shoot2);

    shoot2.addImage('src/tiger2.jpg');
    //shoot2.removeImage('src/skyscraper-day-fun.jpg')

    var shoot3 = new PhotoGallery ($('.container3'), images2,2015);
    shoot3.addImage('src/tiger1.jpg');
    shoot3.addImage('src/beach.jpg');
    shoot.removeImage('src/bldg.jpg');

//}
 

})();

//*****************************************************
//*****************************************************
//*****************************************************
//*****************************************************



