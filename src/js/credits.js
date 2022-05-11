const credits = {};

credits.init = () => {

    let creditsPage = document.querySelector('.credits-page');

    if(creditsPage)
    {
        console.log('Run Credit Page.')

        var grid = document.querySelector('.grid');
        var grid1 = document.querySelector('.grid1');

        var msnry1 = new Masonry( grid1, {
            // options...
            itemSelector: '.grid-item1'
        });

        // init with selector
        var msnry = new Masonry( grid, {
            itemSelector: '.grid-item'
        
        
        });

        console.log('Run Credit Page.', grid, grid1, msnry);
        
        msnry.layout();
        msnry1.layout();

        let picturesList = document.querySelectorAll(".grid-item");

        window.addEventListener("scroll", function() {
        
            for (var i = 0; i < picturesList.length; i++) {
                var distanceInFrame = picturesList[i].getBoundingClientRect().top - window.innerHeight;

                if (distanceInFrame < 100) {
                    picturesList[i].style.marginTop = "0px"
                } 
                else if (distanceInFrame > 100 - window.innerHeight) {
                    let random = Math.floor(Math.random() * 150) + 70;
                    
                    picturesList[i].style.marginTop = random+"px"
                }   
            }
            
        })
    }


}

export default credits