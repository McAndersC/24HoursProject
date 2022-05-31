const credits = {};

credits.init = async () => {

    let momentsLinkable = false;

    let creditsPage = document.querySelector('.credits-page');

        if(!creditsPage) {

            return false;
    
        }

   

        try {
    
            const timelineData = await fetch('/public/data/students.json?' + Date.now()).then((response) => response.json()).then((response) => {
                return response;
            });
    
            creditsPage.innerHTML = '';
        
        
            const slotTemplate = (slot) => {
                return `<section>
    
                            <div class="grid-credits-header">
                                <h1 class="h1 ${slot.theme}">${slot.period} <span class="h1-fat">${slot.title}</span> - One Day Viborg</h1>
                            </div>
                            <div class="grid-credits ${slot.id}">

                                <div class="grid-credits-sizer"></div>
  
                                ${slot.slots.map( (timeslot) => {
    
                                    return `<div class="grid-credits-item ${timeslot.format}">
                                                <div class="grid-item-caption ${timeslot.moments.length < 1 ? '' : 'grid-moments-pane'}">
                                                    
                                                    <div class="grid-item-info info-time">
                                                        ${timeslot.name}
                                                    </div>
                                                    <div class="grid-item-info info-text">
                                                        ${timeslot.position}
                                                    </div>
                                                    <div class="grid-item-info info-moments">
                                                        ${timeslot.moments.length > 0 ? `<h4>${timeslot.name} øjeblikke.</h4>` : ''}
                                                        ${timeslot.moments.length > 0 ? timeslot.moments.map((moment) => `<a href="/moments/${moment.id}.html">${moment.title}</a>`).join('') : ''}
                                                    </div>
                                                </div>   
                                    
                                                <img src="../public/assets/portraits/${timeslot.asset}" />
                                       
                                            </div>`
                                }).join('')}
    
                            </div> 
    
                        </section>` 
            }
        
    
        
            timelineData.forEach((slot) => {
        
                creditsPage.insertAdjacentHTML('beforeend', slotTemplate(slot))
        
            })
        
            timelineData.forEach((slot) => {
        
                console.log('asdasd', slot.id)
                imagesLoaded( '.' + slot.id, function() {
                    // init Isotope after all images have loaded
                    const prepageMasonry = new Masonry( '.' + slot.id, {
                        itemSelector: '.grid-credits-item',

                        percentPosition: true
                    }).layout();
                });
                
            })

            let momentsLists = document.querySelectorAll('.grid-moments-pane');
            // console.log('moment hvvaaa', momentsLists);

            if(momentsLinkable) {
                momentsLists.forEach( (moment) => {
    
                    moment.addEventListener('click', (e) => {
                        console.log('Click', e.currentTarget.classList);
                        e.currentTarget.classList.toggle('active')
    
                    })
                
                });
            }
    
        } catch (error) {
    
            console.error(error)
        }
    
    


}

export default credits