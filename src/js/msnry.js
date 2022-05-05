const msnry = {};

msnry.dyn = async () => {
    try {

        let tempPrefix = '';

        const stubData = await fetch(tempPrefix + '/public/data/timeline.json').then((response) => response.json()).then((response) => {
            return response;
        });

        let prepage = document.querySelector('.prepage-content');
        prepage.innerHTML = '';
    
        const slotTemplate = (slot) => {
            return `<section>
            <h1 class="h1 ${slot.theme}">${slot.period} <span class="h1-fat">${slot.title}</span></h1>
                <div class="grid ${slot.id}">
                    <div class="grid-sizer"></div>
                    <div class="gutter-sizer"></div>
                    ${slot.slots.map( (timesalot) => {
                        return `
                            <div class="grid-item ${timesalot.size}">
                                <a href="${timesalot.url}">
                                    <div class="grid-item-caption">
                                        <div class="grid-item-info info-time">${timesalot.time}</div>
                                        <div class="grid-item-info info-text">${timesalot.text}</div>
                                    </div>
                                    <img src="public/assets/moments/${timesalot.asset}" />
                                </a>
                            </div>
                        `
                    })}
                </div> 
            </section>` 
        }
    
    
        stubData.forEach((slot) => {
    
    
            prepage.insertAdjacentHTML('beforeend', slotTemplate(slot))
    
        })
    
        stubData.forEach((slot) => {
    
            new Masonry( '.' + slot.id, {
                itemSelector: '.grid-item',
                // use element for option
                columnWidth: '.grid-sizer',
                gutter: '.gutter-sizer',
                percentPosition: true
                // columnWidth: 80
            }).layout();
            
        })

    } catch (error) {

        console.error(error)
    }
    let stubData = [
        {
            "period" : "03:00 - 06:00",
            "title" : "NAT I VIBORG",
            "id" : "slot01",
            "slots" : [
                {
                    "url" : "moments/18-30-en-god-titel.html",
                    "asset" : "3_4_03.jpg",
                    "size" : "height1",
                    "time" : "11:30",
                    "text" : "En lille tekst der kan gå på to linjer"
                },
                {
                    "url" : "moments/18-30-en-god-titel.html",
                    "asset" : "3_4_03.jpg",
                    "size" : "height2",
                    "time" : "11:30",
                    "text" : "En lille tekst der kan gå på to linjer"
                },
                {
                    "url" : "moments/18-30-en-god-titel.html",
                    "asset" : "3_4_03.jpg",
                    "size" : "height3",
                    "time" : "11:30",
                    "text" : "En lille tekst der kan gå på to linjer"
                }
            ]
        },
        {
            "period" : "06:00 - 09:00",
            "title" : "Ikke NAT I VIBORG",
            "id" : "slot02",
            "slots" : [
                {
                    "url" : "moments/18-30-en-god-titel.html",
                    "asset" : "3_4_03.jpg",
                    "size" : "height3",
                    "time" : "11:30",
                    "text" : "En lille tekst der kan gå på to linjer"
                },
                {
                    "url" : "moments/18-30-en-god-titel.html",
                    "asset" : "3_4_03.jpg",
                    "size" : "height2",
                    "time" : "11:30",
                    "text" : "En lille tekst der kan gå på to linjer"
                },
                {
                    "url" : "moments/18-30-en-god-titel.html",
                    "asset" : "3_4_03.jpg",
                    "size" : "height1",
                    "time" : "11:30",
                    "text" : "En lille tekst der kan gå på to linjer"
                }
            ]
        }
    ];


 
}

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