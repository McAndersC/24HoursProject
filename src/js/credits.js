const credits = {};

credits.init = async () => {

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
    
                            <h1 class="h1 ${slot.theme}">${slot.period} <span class="h1-fat">${slot.title}</span></h1>
    
                            <div class="grid-credits ${slot.id}">

                                <div class="grid-credits-sizer"></div>
  
                                ${slot.slots.map( (timeslot) => {
    
                                    return `<div class="grid-credits-item ${timeslot.format}">
                                                <div class="grid-item-caption">
                                                    <div class="grid-item-info info-time">
                                                      ${timeslot.name}
                                               
                                                    </div>
                                                    <div class="grid-item-info info-text">
                                                      ${timeslot.position}    
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
        
                // const prepageMasonry = new Masonry( '.' + slot.id, {
                //     itemSelector: '.grid-credits-item',
                //     columnWidth: '.grid-credits-sizer',
                //     percentPosition: true
                // }).layout();

                imagesLoaded( '.' + slot.id, function() {
                    // init Isotope after all images have loaded
                    const prepageMasonry = new Masonry( '.' + slot.id, {
                        itemSelector: '.grid-credits-item',

                        percentPosition: true
                    }).layout();
                });
                
            })

            window.addEventListener("scroll", function() {
        
    
            })
    
        } catch (error) {
    
            console.error(error)
        }
    
    


}

export default credits