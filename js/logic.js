const techs = ['Git', 'Sql', 'Html', 'Css', 'Restful-api', 'Mongodb', 'linux',
    'JWT', 'Cd-Ci', 'Orms', 'testing', 'pytest', 'Fast-api', 'Flask',
    '.net', 'numpy', 'pandas', 'moviepy', 'Unity']
const more_tech_timer = 1 * 1000
const more_tech_len = techs.length
let more_tech_index = 0

document.addEventListener('DOMContentLoaded', function ()
{


    const more_tech = document.querySelector('#more_tech')
    setInterval(() =>
    {

        more_tech.innerText = techs[more_tech_index]
        if (more_tech_index === more_tech_len - 1)
        {
            more_tech_index = 0
        }
        else
        {
            more_tech_index++
        }

    }, more_tech_timer)

    const process_cards = document.querySelectorAll('.card')
    const project_cards = document.querySelectorAll('.projcet_card')

    const observer = new IntersectionObserver(
        entries =>
        {
            entries.forEach(
                entry =>
                {
                    entry.target.classList.toggle('show_card', entry.isIntersecting)
                    if (entry.isIntersecting)
                    {
                        observer.unobserve(entry.target)
                    }
                })



        }, { threshold: 0 }
    )
    const observer_projectcard = new IntersectionObserver(
        entries =>
        {
            entries.forEach(
                entry =>
                {
                    entry.target.classList.toggle('show_project', entry.isIntersecting)

                    if (entry.isIntersecting)
                    {
                        observer_projectcard.unobserve(entry.target)
                    }
                })



        }, { threshold: 0 }
    )


    process_cards.forEach(card =>
    {
        observer.observe(card)
    })

    project_cards.forEach(car =>
    {
        observer_projectcard.observe(car)
    })

})