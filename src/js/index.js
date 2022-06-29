import mnsry from './msnry'
import templates from './templates'
import credits from './credits'
import about from './about'
import front from './front'

// Navigation
const navigation = {}
navigation.init = () => {

    const navigation = document.querySelector('.nav');

    if(navigation) {

        const navigationBurger = navigation.querySelectorAll('.nav-burger');
        const navigationTitle = navigation.querySelector('.nav-title');
        const navigationClose = navigation.querySelector('.nav-content-close');
        const navigationContent = navigation.querySelector('.nav-links');

        const socialActions = navigation.querySelectorAll('.social-action');
        const socialAction = navigation.querySelector('.share');
        const footerSocialAction = document.querySelectorAll('.someIcon');


        if(footerSocialAction) {

            footerSocialAction.forEach((icon) => {
                icon.addEventListener('click', (e) => {
          
            
                    if(e.target.src.indexOf('facebook') !== -1) {
                        e.target.addEventListener('click', () => {
                            const current_url = window.location.href;
                            let window_size = "width=565,height=569";
                            let fb_shareUrl = "https://www.facebook.com/sharer/sharer.php?u="+ current_url;
                           
                            window.open(fb_shareUrl,"","menubar=no,resizeable=yes,scrollbars=yes,"+window_size);
                            return false;
                        });
                    } else if(e.target.src.indexOf('instagram') !== -1) {
                        e.target.addEventListener('click', () => {
                            const current_url = window.location.href;
                            let window_size = "width=565,height=569";
                            let tw_shareUrl = "https://instagram.com/share?url=" + current_url;
                      
                            window.open(tw_shareUrl,"","menubar=no,resizeable=yes,scrollbars=yes,"+window_size);
                            return false;
                        });
                    } else if(e.target.src.indexOf('linkedin') !== -1) {
                        e.target.addEventListener('click', () => {
                            const current_url = window.location.href;
                            let window_size = "width=565,height=569";
                            let lnk_shareUrl = "https://www.linkedin.com/share?url=" + current_url;
                      
                            window.open(lnk_shareUrl,"","menubar=no,resizeable=yes,scrollbars=yes,"+window_size);
                            return false;
                        });
                    };

                })
            })

        }

        socialAction.addEventListener('click', (e) => {
            e.target.classList.toggle('active')
        })

        if(socialActions) {

            socialActions.forEach((action) => {
                
                const current_url = window.location.href;
                let window_size = "width=565,height=569";
                
                switch (action.dataset.action) {
                    case 'fb':
                            action.addEventListener('click', () => {

                                let fb_shareUrl = "https://www.facebook.com/sharer/sharer.php?u="+ current_url;
                               
                                window.open(fb_shareUrl,"","menubar=no,resizeable=yes,scrollbars=yes,"+window_size);
                                return false;
                            });
                        break;
                        
                    case 'insta':
                            
                            action.addEventListener('click', () => {

                                let tw_shareUrl = "https://instagram.com/share?url=" + current_url;
                          
                                window.open(tw_shareUrl,"","menubar=no,resizeable=yes,scrollbars=yes,"+window_size);
                                return false;

                            });

                        break;               
                    
                    case 'linkedIn':

                            action.addEventListener('click', () => {
                                let lnk_shareUrl = "https://www.linkedin.com/share?url=" + current_url;
                          
                                window.open(lnk_shareUrl,"","menubar=no,resizeable=yes,scrollbars=yes,"+window_size);
                                return false;
                            });

                        break;
                
                    default:
                        break;
                }

            });

        }
      


        // navigationContent.innerHTML = `
        //     <a href="/">Gå til billedoversigten</a>
        //     <a href="/om/om-one-day-viborg.html">Om projektet ONE DAY VIBORG</a>
        //     <a href="/historie/det-historiske-perspektiv.html">Det historiske perspektiv</a>
        //     <a href="/credits/credits.html">Credits</a>
        // `

        navigationContent.innerHTML = `
            <a href="/">Gå til billedoversigten</a>
            <a href="/om/om-one-day-viborg.html">Om projektet ONE DAY VIBORG</a>
            <a href="/credits/credits.html">Fotografer, webudviklere og lærere</a>
            <a href="/historie/det-historiske-perspektiv.html">Viborg for 100 år siden</a>
        `

        let currentScrollValue = 0;
        const toggleActiveNavigation = () => {

            let newScrollValue = window.pageYOffset;
            let compareValue = currentScrollValue - newScrollValue;

            if(compareValue < 0) {

                if(!navigation.classList.contains('hide')) {

                    navigation.classList.add('hide')
                    navigation.classList.remove('active')
                    socialAction.classList.remove('active')
                    
                }
                
            } else if(compareValue >= 0) {

                if(navigation.classList.contains('hide')) {

                    navigation.classList.remove('hide')

                }
            }

            currentScrollValue = newScrollValue;

            if(currentScrollValue === 0)
            {
                navigation.classList.remove('hide')
            }
  
        }

        const activateNavigation = (e) => {
            e.preventDefault();
            navigation.classList.add('active');
        }

        const deActivateNavigation = (e) => {
            e.preventDefault();
            navigation.classList.remove('active');
        }

        // Scroll Event til Navigationen
        window.addEventListener('scroll', toggleActiveNavigation);

        // Click Event til Burger Menu i Navigationen
        navigationBurger.forEach((burger) => {
            
            burger.addEventListener('click',activateNavigation);  

        })
         
        navigationTitle.addEventListener('click', activateNavigation);
        navigationClose.addEventListener('click', deActivateNavigation);
    }
}


// Moments Render
const moments = {};
moments.renderMoment = (moment) => {

    let wrapper = `<div class="bg-color"><div class="wrapper" id="moment-wrapper"></div></div>`

    let momentContainer = document.querySelector('.moment-container');
    momentContainer.insertAdjacentHTML('beforeend', wrapper);
    let wrapperContainer = document.querySelector('#moment-wrapper');

    momentContainer.insertAdjacentHTML('afterbegin', templates.subpageHeaderTemplate(moment));

    moment.templates.forEach((template) => {
 
        switch (template.template) {
    
            case '01':

                wrapperContainer.insertAdjacentHTML('beforeend', templates.template01(moment, template))

                break;

            case '02':

                wrapperContainer.insertAdjacentHTML('beforeend', templates.template02(moment, template))

                break;

            case '03':

                wrapperContainer.insertAdjacentHTML('beforeend', templates.template03(moment, template))

                break;
        }
    })


}



// Moments Initializing
moments.init = async () => {

    try {

        let tempPrefix = '';

        let momentsResult = await fetch(tempPrefix + '/public/data/moments.json?' + Date.now()).then((response) => response.json()).then((response) => {
            return response;
        });

        momentsResult = momentsResult.sort(({ time: a }, {time: b }) => a > b ? 1 : a < b ? -1 : 0);

        // Moment Container
        let momentContainer = document.querySelector('.moment-container');
        if(momentContainer)
        {
            momentContainer.innerHTML = '';

            // let momentPageId = decodeURIComponent(window.location.pathname).split('/')[2].replace('.html', '');
            let momentPageId = window.location.pathname;
            momentPageId = momentPageId.split('/')[2].replace('.html', '');;

            let moment = momentsResult.find((moment) =>{ 
           
                if(moment.id === decodeURI(momentPageId))
                {
                    moments.renderMoment(moment);
                }
            });

        }

    } catch (error) {

        console.error(error)
    }

}


// Application
const application = {};
application.init = () => {

    navigation.init();
    moments.init();
    mnsry.init();
    credits.init();
    about.init();
    front.init();
    
    
}

window.addEventListener('load', application.init());