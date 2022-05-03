const templates = {};


templates.template01 = (moment) => { 
    return `
        <section class="threexfour fadeInUp">
            <div class="container-75">
                <div class="row">
                    <div class="col1">
                        <img src="../public/assets/moments/${moment.id}/${moment.templates[0].media[0].image}" /> <!-- Variabler som skal tages ud fra Jason -->
                        <p class="pic-text"><span class="square"></span>${moment.templates[0].media[0].text}</p>
                    </div>
                    <div class="col2" style="width: 1.6vw;">
                    </div>
                    <div class="col3">
                        <img src="../public/assets/moments/${moment.id}/${moment.templates[0].media[1].image}" />
                        <p class="pic-text"><span class="square"></span>${moment.templates[0].media[1].text}</p>
                    </div>
                </div>
            </div>
        </section>
    `
}

templates.template02 = (moment) => {
    return `
    <section class="fourxthree">
        <div class="container-75" style="margin: auto;">
            <img src="../public/assets/moments/${moment.id}/${moment.templates[0].media[0].image}" />
            <p class="pic-text"><span class="square"></span>${moment.templates[0].media[0].text}</p>
        </div>
    </section>
    `
}

templates.template03 = (moment) => {
    return `
    <section class="onexone">
        <div class="container-75">
        <img src="../public/assets/moments/${moment.id}/${moment.templates[0].media[0].image}" /> 
            <p class="pic-text"><span class="square"></span>${moment.templates[0].media[0].text}</p>
        </div>
    </section>
    `
}

templates.subpageHeaderTemplate = (moment) => 
    `
        <section class="hero">
        <div class="container-75">
            <div class="row">
                <div class="col1">
                    <img src="../public/assets/moments/${moment.id}/${moment.square}" alt="${moment.description}">
                </div>
                <div class="col2" style="width: 3vw;">

                </div>
                <div class="col3">
                    <p class="time">${moment.time}</p>
                    <h1 class="display-text">${moment.title}</h1>
                    <div class="spacer"></div>
                    <p class="body-text">${moment.description}</p>
                    <div class="spacer"></div>
                    <p class="byline">© Foto: ${moment.author}</p>
                </div>
            </div>
        </div>
        </section>
    `

// Navigation
const navigation = {}
navigation.init = () => {

    const navigation = document.querySelector('.navigation');
    const navigationContent = navigation.querySelector('.nav-content');
    const navigationBurger = navigation.querySelector('.nav-burger');

    navigationContent.innerHTML = `
    <a href="/build/">Forside</a><a href="/build/moments/moment.html">Moment</a>
    <a href="/build/moments/moment_tmpl.html">Moment Tmpl</a>
    <a href="/build/moments/11-30-tidligt-i-seng.html">11-30-tidligt-i-seng</a>
    <a href="/build/moments/12-30-natur-er-dejligt.html">12-30-natur-er-dejligt</a>
    `
    let currentScrollValue = 0;

    const toggleActiveNavigation = () => {

        let newScrollValue = window.pageYOffset;
        let compareValue = currentScrollValue - newScrollValue;

        if(compareValue < 0) {

            if(!navigation.classList.contains('hide')) {
                navigation.classList.add('hide')
                navigation.classList.remove('active')
            }
            
        } else if(compareValue > 0) {

            if(navigation.classList.contains('hide')) {

                navigation.classList.remove('hide')

            }
        }

        currentScrollValue = newScrollValue;
        
    }

    // Scroll Event til Navigationen
    window.addEventListener('scroll', toggleActiveNavigation);

    // Click Event til Navigationen
    navigationBurger.addEventListener('click', (e) => {
        e.preventDefault();
        navigation.classList.toggle('active');
    });
}


// Moments Render
const moments = {};
moments.renderMoment = (moment) => {

    let momentContainer = document.querySelector('.moment-container');
    momentContainer.insertAdjacentHTML('beforeend', templates.subpageHeaderTemplate(moment));

  

    moment.templates.forEach((template) => {

        switch (template.template) {
    
            case '01':

                momentContainer.insertAdjacentHTML('beforeend', templates.template01(moment, template))

                break;

            case '02':

                momentContainer.insertAdjacentHTML('beforeend', templates.template02(moment, template))

                break;

            case '03':

                momentContainer.insertAdjacentHTML('beforeend', templates.template03(moment, template))

                break;
        }
    })


}

// Moments Initializing
moments.init = async () => {

    try {

        let tempPrefix = window.location.pathname.length > 8 ? '../' : ''

        const momentsResult = await fetch(tempPrefix + 'public/data/moments.json').then((response) => response.json()).then((response) => {
            return response;
        });

        // Moment Container
        let momentContainer = document.querySelector('.moment-container');
        if(momentContainer)
        {
            momentContainer.innerHTML = '';

            let momentPageId = window.location.pathname.split('/')[3].replace('.html', '');
            
            let moment = momentsResult.find((moment) => moment.id === momentPageId);
            moments.renderMoment(moment);

            console.log(momentPageId);
            console.log(momentsResult.length, moment);

        }

    } catch (error) {

        console.error(error)
    }

}




// Application
const application = {};
application.init = () => {

    console.log('Application init on load');

    // Setting Up Navigation
    navigation.init();
    moments.init();

}

window.addEventListener('load', application.init());