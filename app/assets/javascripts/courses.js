const data = [
    {
        "Title": "Learn to Code for Data Analysis",
        "Desc": "Learn how to write your own computer programs, one line of code at a time. Find out how to access open data, clean and analyse it, and produce visualisations, and how to present your analyses, privately or publicly. You'll be coding in Python, a widely used programming language across all disciplines.",
        "Provider": "The Open University",
        "Level": "Advanced",
        "Duration": "1d",
        "": "",
        "__1": ""
    },
    {
        "Title": "Create a Professional Online Presence",
        "Desc": "Explore how to present yourself professionally online. Find out more about different social media platforms and how the way that you conduct yourself online can impact your professional reputation. Learn about safety and privacy and the ways that your online activity might be viewed by different audiences.",
        "Provider": "FutureLearn",
        "Level": "Intermediate",
        "Duration": "4 hours in total over 2 weeks",
        "": "",
        "__1": ""
    },
    {
        "Title": "Introduction to Bookkeeping",
        "Desc": "Get an introduction to the essential skills and concepts of bookkeeping and accounting. The course covers double-entry bookkeeping, how to prepare a trial balance and the two principal financial statements: the balance sheet and the profit and loss account.",
        "Provider": "The Open University",
        "Level": "Introductory",
        "Duration": "8h",
        "": "",
        "__1": ""
    },
    {
        "Title": "Learn My Way",
        "Desc": " Resources to help you get started online. Find topics from getting to grips with your computer, tablet or mobile phone to how to use office programs like Excel, Word and PowerPoint. You can also learn to manage your money, use public services or find jobs and careers advice online",
        "Provider": "Good Things Foundation",
        "Level": "Introductory",
        "Duration": "Bite-sized resources from a few minutes to a few hours",
        "": "",
        "__1": ""
    }
];

const courseList = document.getElementsByClassName('course-list')[0];

loadCourses = (courses) => {
    for(let x of courses) {
        printCoursesOnScreen(x.Title, x.Desc, x.Provider, x.Level, x.Duration);
    }
}

filterCourses = (level, category) => {
    const result = data.filter(course => course.Level === level);
    if(category) {
        const level2 = result.filter(course => course.Category === category);

    }
    clearCourses();
    loadCourses(result);
}
const filterButton = document.getElementsByClassName('filter-button')[0];
const resetButton = document.getElementsByClassName('reset-button')[0];

resetButton.addEventListener('click', (e)=>{
    e.preventDefault();
    clearCourses();
    loadCourses(data);
})
filterButton.addEventListener('click', (e)=>{
    e.preventDefault();
    const selectedItem = document.querySelector('.govuk-radios__input:checked');
    const level = selectedItem.value;
    filterCourses(level);
})


printCoursesOnScreen = (title, desc, provider, level, duration) => {

    if(courseList)  {
       //
        const course =`
            <li class="govuk-body"> 
            <div class="govuk-!-margin-bottom-1"><span class="govuk-hint">${provider}</span></div>
            <div class="govuk-!-margin-bottom-1"><h2 class="govuk-heading-m"><a href class="govuk-link">${title}</a></h2></div>
            <div class="govuk-!-margin-bottom-1"><span class="govuk-!-font-weight-bold">Description : </span>${desc}</div>
            <div class="govuk-!-margin-bottom-1"><span class="govuk-!-font-weight-bold">Level : </span>${level}</div>
            <div class="govuk-!-margin-bottom-1"><span class="govuk-!-font-weight-bold">Study time : </span>${duration}</div>
            </li>
            <hr class=" govuk-section-break govuk-section-break--visible govuk-section-break--l">`
        courseList.innerHTML += course;
    }
}
clearCourses = ()=> {
    courseList.innerHTML="";
}
loadCourses(data);

