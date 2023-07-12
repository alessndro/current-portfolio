import { portfolio } from './data.js'

const gridEl = document.getElementById('grid')
let showcaseEl = document.getElementById('showcase')
let showcaseDivEl = document.getElementById('showcase-div')

document.addEventListener('click', function(event)
{
    if (event.target.dataset.portfolioItem)
    {
        getWebsiteHtml(event.target.dataset.portfolioItem)
    }
    else if (event.target.id === 'showcase-exit')
    {
        showcaseDivEl.classList.add('hidden')
    }
})

function getGridHtml()
{
    let gridHtml = ``
    portfolio.forEach(function(website)
    {
       
        gridHtml += `<div class='grid-item'><img src='${website.image}'>
             <p class='header-date'>${website.date}</p>
           <h3>${website.title}</h3>
           <p class='website-intro'>${website.introText}</p>
            <a href="#showcase-div" data-portfolio-item=${website.title} class="btn">Read more</a>
            </div>
        `
    })
    return gridHtml
}

function getWebsiteHtml(website)
{
    const websiteToShow = portfolio.filter(function(portfolioItem)
    {
        return portfolioItem.title === website
    })[0]
    
    let showcaseHtml = ` <h3 class="showcase-title">${websiteToShow.title}</h3>
                        <p class="showcase-date date">${websiteToShow.date}</p>
                        <img class="showcase-image" src=${websiteToShow.image}>
                        <p class="showcase-introtext">${websiteToShow.introText}</p>
                        <p class="showcase-maintopic">${websiteToShow.mainTopic}</p>
                        <p class="showcase-difficulty">Difficulty: ${websiteToShow.difficulty}</p>
                        <p class="showcase-main">${websiteToShow.explanation}</p>
                        <a class='showcase-link btn' target="_blank"  href="${websiteToShow.url}">See website</a>
                        <p class="showcase-exit"><i class="fa-solid fa-xmark" id="showcase-exit"></i></p>`
                        
        
    showcaseEl.innerHTML = showcaseHtml
    showcaseDivEl.classList.remove('hidden')
    render()
   
}


function render()
{
    gridEl.innerHTML = getGridHtml()
}

render()