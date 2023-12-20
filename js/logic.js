const techs = ['Git', 'Sql', 'Html', 'Css', 'Restful-api', 'Mongodb', 'linux',
    'JWT', 'Cd-Ci', 'Orms', 'testing', 'pytest', 'Fast-api', 'Flask',
    '.net', 'numpy', 'pandas', 'moviepy','Unity']
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





})