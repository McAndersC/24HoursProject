let front = {};

front.init = () => {

    let frontPageWrapper = document.querySelector('.front-wrapper-container');
    let moments = [];
    if(frontPageWrapper) {


        fetch('/public/data/newtimeline.json')
        .then((response) => response.json())
        .then((moments) => {


            moments.forEach( (moment) => { 

                let num0 = Math.floor(Math.random() * 2)
                let num1 = Math.floor(Math.random() * 4)
                let size;
                let ani;
            
                if (num0 == 0){
                    size = 'medium'
                }
                if (num0 == 1){
                    size = 'big'
                }
            
                if (num1 == 0){
                    ani = 'down'
                }
                if (num1 == 1){
                    ani = 'up'
                }
                if (num1 == 2){
                    ani = 'left'
                }
                if (num1 == 3){
                    ani = 'right'
                }
            
                moment.size = size, moment.animation = ani
            
            } )

            // Json bliver lavet om i rækkefølge efter dato
        let result = moments.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        console.log(result, 'check om der er kommet noget igennem fra api');
        let frontPageWrapper = document.querySelector('.front-wrapper-container');
        frontPageWrapper.innerHTML = '';

        frontPageWrapper.innerHTML += `
        
        <h2 class="txt1">00:00 - 03:00 <span class="display-txt">NAT I VIBORG</span></h2> 
        <div class="container wrapper clock1"></div>

        <h2 class="txt1">03:00 - 06:00 <span class="display-txt">MORGENEN GRYR</span></h2> 
        <div class="container wrapper clock2"></div>

        <h2 class="txt2">06:00 - 09:00 <span class="display-txt">MORGEN</span></h2> 
        <div class="container wrapper clock3"></div>

        <h2 class="txt2">09:00 - 12:00 <span class="display-txt">FORMIDDAG</span></h2> 
        <div class="container wrapper clock4"></div>

        <h2 class="txt2">12:00 - 15:00 <span class="display-txt">MIDDAGSTIMERNE</span></h2> 
        <div class="container wrapper clock5"></div>

        <h2 class="txt2">15:00 - 18:00 <span class="display-txt">EFTERMIDDAG</span></h2> 
        <div class="container wrapper clock6"></div>

        <h2 class="txt1">18:00 - 21:00 <span class="display-txt">TIDLIG AFTEN</span></h2> 
        <div class="container wrapper clock7"></div>

        <h2 class="txt1">21:00 - 24:00 <span class="display-txt">SEN AFTEN</span></h2> 
        <div class="container wrapper clock8"></div>
        `;

        let clock1 = document.querySelector('.clock1');
        let clock2 = document.querySelector('.clock2');
        let clock3 = document.querySelector('.clock3');
        let clock4 = document.querySelector('.clock4');
        let clock5 = document.querySelector('.clock5');
        let clock6 = document.querySelector('.clock6');
        let clock7 = document.querySelector('.clock7');
        let clock8 = document.querySelector('.clock8');

        checkMediaQuery();

        function checkMediaQuery() {
            clock1.innerHTML = '';
            clock2.innerHTML = '';
            clock3.innerHTML = '';
            clock4.innerHTML = '';
            clock5.innerHTML = '';
            clock6.innerHTML = '';
            clock7.innerHTML = '';
            clock8.innerHTML = '';

            for (let index = 0; index < result.length; index++) {
                // Efter den har load content så bruger vi den her til at lave hver img på index.html¨
                const content = `
        <a href="testSide.html" class="fade box ${result[index].size}"><img src="${result[index].img}"><span class="par-elm">${result[index].time}<br><span class="gallery-span">${result[index].text}</span></span></a>
            `;
                // Hvis time fra json er over string så bliver clock += content

                if (result[index].time < '03') clock1.innerHTML += content;
                else if (result[index].time < '06') clock2.innerHTML += content;
                else if (result[index].time < '09') clock3.innerHTML += content;
                else if (result[index].time < '12') clock4.innerHTML += content;
                else if (result[index].time < '15') clock5.innerHTML += content;
                else if (result[index].time < '18') clock6.innerHTML += content;
                else if (result[index].time < '21') clock7.innerHTML += content;
                else if (result[index].time < '24') clock8.innerHTML += content;
            }
        }

        const up = document.querySelectorAll('.fade');

        
        window.addEventListener('scroll', function () {

            for (let i = 0; i < result.length; i++) {
                setTimeout(() => {
                if (scrollY > up[i].offsetTop - window.innerHeight/1.4) {
                            if (!up[i].classList.contains('activate_fadeUp') && result[i].animation == 'up'){
                                up[i].classList.add('activate_fadeUp');
                            }
                            else if (!up[i].classList.contains('activate_fadeDown') && result[i].animation == 'down'){
                                up[i].classList.add('activate_fadeDown');
                            }
                            else if (!up[i].classList.contains('activate_fadeLeft') && result[i].animation == 'left'){
                                up[i].classList.add('activate_fadeLeft');
                            }
                            else if (!up[i].classList.contains('activate_fadeRight') && result[i].animation == 'right'){
                                up[i].classList.add('activate_fadeRight');
                            }
                        }
                    }, 100);
                }
            });
        });
            

        
    }
}

export default front;