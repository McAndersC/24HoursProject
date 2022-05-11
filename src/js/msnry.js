const msnry = {};

msnry.init = async () => {

    let prepage = document.querySelector('.prepage-content');
    
    if(!prepage) {

        return false;

    }

    try {

        const timelineData = await fetch('/public/data/timeline.json?' + Date.now()).then((response) => response.json()).then((response) => {
            return response;
        });

        prepage.innerHTML = '';
    
    
        const slotTemplate = (slot) => {
            return `<section>
            <h1 class="h1 ${slot.theme}">${slot.period} <span class="h1-fat">${slot.title}</span></h1>
                <div class="grid-prepage ${slot.id}">
                    <div class="grid-prepage-sizer"></div>
                    <div class="gutter-prepage-sizer"></div>
                    ${slot.slots.map( (timesalot) => {
                        return `
                            <div class="grid-prepage-item ${timesalot.size}">
                                <a href="${timesalot.url}">
                                    <div class="grid-item-caption">
                                        <div class="grid-item-info info-time">${timesalot.time}</div>
                                        <div class="grid-item-info info-text">${timesalot.text}</div>
                                    </div>
                                    <img src="../public/assets/moments/${timesalot.id}/${timesalot.asset}" />
                                </a>
                            </div>
                        `
                    })}
                </div> 
            </section>` 
        }
    
    
        timelineData.forEach((slot) => {
    
    
            prepage.insertAdjacentHTML('beforeend', slotTemplate(slot))
    
        })
    
        timelineData.forEach((slot) => {
    
            const prepageMasonry = new Masonry( '.' + slot.id, {
                itemSelector: '.grid-prepage-item',
                // use element for option
                columnWidth: '.grid-prepage-sizer',
                gutter: '.gutter-prepage-sizer',
                percentPosition: true
                // columnWidth: 80
            }).layout();
            
        })

    } catch (error) {

        console.error(error)
    }

}


export default msnry