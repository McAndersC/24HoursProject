const msnry = {};

msnry.init = () => {

    let grid = document.querySelectorAll('.grid');
    
    if(grid.length > 0)
    {
        let msnry1 = new Masonry( '.grid1', {
            itemSelector: '.grid-item',
            // use element for option
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true
            // columnWidth: 80
        });
        msnry1.layout();

        let msnry2 = new Masonry( '.grid2', {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true
        });
        msnry2.layout();

        let msnry3 = new Masonry( '.grid3', {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true
        });
        msnry3.layout();

        let msnry4 = new Masonry( '.grid4', {
            itemSelector: '.grid-item',
            // use element for option
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true

        });
        msnry4.layout();

        let msnry5 = new Masonry( '.grid5', {
            itemSelector: '.grid-item',
            // use element for option
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true

        });
        msnry5.layout();

        let msnry6 = new Masonry( '.grid6', {
            itemSelector: '.grid-item',
            // use element for option
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true

        });
        msnry6.layout();

        let msnry7 = new Masonry( '.grid7', {
            itemSelector: '.grid-item',
            // use element for option
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true

        });
        msnry7.layout();
    }


    // let grid1 = document.querySelector('.grid');
    // imagesLoaded(grid1).on('progress', (e) => {

    //     console.log('Image Loaded', e)
    //     msnry.layout();
    // })

}

export default msnry