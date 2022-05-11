const templates = {};


templates.template01 = (moment, template) => { 
    return `
    <section class="template1">
        <img src="../public/assets/moments/${moment.id}/${template.media[0].image}" class="temp1-pic1" alt="">
        <div class="text-pic1">${template.media[0].text}</div>
        ${template.media.length === 1 ? '' : `
        <img src="../public/assets/moments/${moment.id}/${template.media[1].image}" class="temp1-pic2" alt="">
        <div class="text-pic2">${template.media[1].text}</div>`}
    </section>
    `
}

templates.template02 = (moment, template) => {
    return `
    <section class="template2">
        <img src="../public/assets/moments/${moment.id}/${template.media[0].image}" class="temp2-pic1" alt="">
        <div class="text-pic1">${template.media[0].text}</div>
    </section>
    `
}

templates.template03 = (moment, template) => {
    return `
    <section class="template3">
        <img src="../public/assets/moments/${moment.id}/${template.media[0].image}" class="temp3-pic1" alt="">
        <div class="text-pic1">${template.media[0].text}</div>
    </section>
    `
}

templates.TEMPsubpageHeaderTemplate = (moment) => 
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

    templates.subpageHeaderTemplate = (moment) => 
    `
    <section class="square-and-text">
        <img src="../public/assets/moments/${moment.id}/${moment.square}" class="cover-square" alt="${moment.description} © ${moment.author}">
        <div class="cover-text">
        <h1 class="cover-time">${moment.time}</h1>
        <h1 class="header-text">${moment.title}</h1>
        <p>${moment.description}</p>
        <p class="photographer">© ${moment.author}</p></div>
    </section>
    `
export default templates