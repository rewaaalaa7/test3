let search_course = document.getElementById('searchcourse');
let dataOfCourses =
    [
        [
            {
                nameCourses: 'Web Development Beginners Course',
                date: ' Updated 12/20/2022',
                pathImage: 'courses/web2.jpeg',
                LinkVideo: 'https://youtu.be/nu_pCVPKzTk',
            },
            {
                nameCourses: 'Algrothims Beginners Course',
                date: ' Updated 12/20/2022',
                pathImage: 'courses/algroo.jpg',
                LinkVideo: 'https://youtu.be/8hly31xKli0',
            },


            {
                nameCourses: 'SQL Beginners Course',
                date: 'Updated 12/20/2022',
                pathImage: 'courses/sql.jpg',
                LinkVideo: 'https://youtu.be/HXV3zeQKqGY',
            }

        ],

        [
            {
                nameCourses: 'Data Science Beginners Course',
                date: ' Updated 12/20/2022',
                pathImage: 'courses/ds.jpg',
                LinkVideo: 'https://youtu.be/ua-CiDNNj30',
            },
            {
                nameCourses: 'Software Engineering Beginners Course',
                date: ' Updated 12/20/2022',
                pathImage: 'courses/SWE.jpg',
                LinkVideo: 'https://youtu.be/8jH07r6135o',
            },


            {
                nameCourses: 'Computer Organization Beginners Course',
                date: 'Updated 12/20/2022',
                pathImage: 'courses/co.jpg',
                LinkVideo: 'https://youtu.be/CDO28Esqmcg',
            },
        ],



        [
            {
                nameCourses: 'Ordinary Differential Equations Beginners Course',
                date: ' Updated 12/20/2022',
                pathImage: 'courses/ode.jpg',
                LinkVideo: 'https://youtu.be/B5IjsTONKkw',
            },
            {
                nameCourses: 'Probability Beginners Course',
                date: ' Updated 12/20/2022',
                pathImage: 'courses/prob.jpg',
                LinkVideo: 'https://youtu.be/uzkc-qNVoOk',
            },


            {
                nameCourses: 'Japanese Beginners Course',
                date: 'Updated 12/20/2022',
                pathImage: 'courses/Japanese.jpg',
                LinkVideo: 'https://youtu.be/8YV8KmfBbBM',
            },
        ],
    ]



let concat = '';
let visit_courses = document.getElementById('visit-courses');


function display() {
    concat = '';
    for (let n = 0; n < dataOfCourses.length; n++) {

        concat +=
            `<tr>`
        for (let i = 0; i < dataOfCourses[n].length; i++) 
        {
            concat +=
                `<td class="child ds">
                    <a href="${dataOfCourses[n][i].LinkVideo}">
                        <img class="image" src="${dataOfCourses[n][i].pathImage}" alt="Data Sceince"
                            width="500px"> 
                    </a>
                
                    <div class="details">
                        <span> ${dataOfCourses[n][i].date}</span>
                        <h6>${dataOfCourses[n][i].nameCourses}</h6>
                        </div>
                </td>
                    `
        }
        concat += '</tr>';
    }
    visit_courses.innerHTML = concat;
}
display();





function displayFilter(x) 
{

    concat = '';
    concat +='<tr>'
    for (let n = 0; n < x.length; n++) 
    {
        concat +=
            `
                <td class="child ds">
                    <a href="${x[n].LinkVideo}">
                        <img class="image" src="${x[n].pathImage}" alt="Data Sceince"
                            width="500px"> 
                    </a>
                
                    <div class="details">
                        <span> ${x[n].date}/span>
                        <h6>${x[n].nameCourses}</h6>
                        </div>
                </td>`
    }
    concat +='</tr>'
    visit_courses.innerHTML = concat;
}







search_course.addEventListener('input', function ()
 { 
    if(search_course.value=='')
    {
        display();
    }
    else
    {
        searchData(search_course.value);
    }

})




function searchData(x) {

    let FilterData = [];
    for (let n = 0; n < dataOfCourses.length; n++) {
        for (let i = 0; i < dataOfCourses.length; i++) {
            if (dataOfCourses[n][i].nameCourses.toLowerCase().includes(x.toLowerCase())) {
                FilterData.push(dataOfCourses[n][i]);
            }
        }
    }
    displayFilter(FilterData);
    console.log(FilterData)
}






// const search = () => {
//     const searchbox = document.getElementById("search-course").value;
//     const items = document.getElementById("visit-courses"); // access the table
//     const item = document.querySelectorAll("child"); // access each item in the table
//     const tname = document.getElementsByTagName("h6");

//     for (var i = 0; i < tname.length; i++) {
//         let match = item[i].getElementsByTagName('h6')[0];

//         if (match) {
//             let txtValue = match.textContent || match.innerHTML;

//             if (txtValue.indexOf(searchbox) > -1) {
//                 item[i].style.display = "";
//             } else {
//                 item[i].style.display = "none  ";
//             }
//         }
//     }
// }
