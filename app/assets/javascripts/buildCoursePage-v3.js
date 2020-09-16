const categoryData = [
    {
        "Category": "Practical Maths",
        "Desc": "Learn fractions, decimals and other everyday math skills. Then apply them to work or your finances.",
        "Class": "practicalMaths"
    },
    {
        "Category": "Computer essentials",
        "Desc": "Learn how to use a computer, the internet and office programs like spreadsheet and word processors.",
        "Class": "computerEssentials"
    },
    {
        "Category": "Workplace essentials",
        "Desc": "Present your work, create a professional online presence and get the most from the digital workplace.",
        "Class": "workplaceEssentials"
    },
    {
        "Category": "Coding and computer science",
        "Desc": "Python, cybersecurity, computer networks and coding for data analysis.",
        "Class": "coding"
    },
    {
        "Category": "Business and marketing",
        "Desc": "Social media, online content, digital marketing, finance and bookkeeping.",
        "Class": "businessAndMarketing"
    }
]
const data = [
    {
        "Title": "Learn My Way",
        "Url": "https://www.learnmyway.com/?utm_source=skillstoolkit&utm_medium=website&utm_campaign=gov.uk",
        "Desc": "Collection of resources to help you use the internet. Learn how to use your computer or device, find a job online, use public service and use office programs like Microsoft Word. ",
        "Provider": "Good Things Foundation",
        "Level": "",
        "Time": "0 to 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "no",
        "Related job roles": ["job 1","job 2","job 3"],
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    },
    {
        "Title": "Make It Click",
        "Url": "https://makeitclick.learnmyway.com/directory/search/?utm_source=skillstoolkit&utm_medium=website&utm_campaign=gov.uk",
        "Desc": "Over 150 resources to help with everything from sending emails and creating a CV to editing photos and advice for working from home.",
        "Provider": "Good Things Foundation",
        "Level": "",
        "Time": "0 to 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "no",
        "Related job roles": "",
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    },
    {
        "Title": "Get the best out of Microsoft Outlook",
        "Url": "https://support.microsoft.com/en-gb/office/outlook-training-8a5b816d-9052-4190-a5eb-494512343cca?ui=en-us&rs=en-gb&ad=gb&utm_medium=website&utm_campaign=gov.uk",
        "Desc": "Learn how to send an email, book a meeting, manage your calendar and organise a to-do list. ",
        "Provider": "Microsoft",
        "Level": "",
        "Time": "0 to 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "no",
        "Related job roles": "",
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    },
    {
        "Title": "Learn For Everyday Life",
        "Url": "https://www.lloydsbankacademy.co.uk/course-selection/?utm_source=gov_website&utm_medium=affiliate&utm_campaign=national_careers_service",
        "Desc": " Inspire your digital journey with lessons on a variety of skills to help you master video calling, deal with online fraud, improve your CV, present yourself and work with others safely online.",
        "Provider": "Lloyds Bank",
        "Level": "",
        "Time": "0 to 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "no",
        "Related job roles": "",
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    },
    {
        "Title": "Everyday Maths",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/everyday-maths-1/content-section-overview?active-tab=description-tab",
        "Desc": "Refresh your maths skills to help with everyday life or get on in your job. From using a calculator, learning to convert fractions to decimals and understanding percentages, to measuring objects, distances and weights. Understand how to use tables, diagrams and charts. You'll get lots of practice using the maths you need in daily life.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "48 hours",
        "Subject": "Practical maths",
        "ClassList": ["practicalMaths"],
        "Certificate": "Yes",
        "Related job roles": "",
        "Bullets": "",
        "Studytype": "self-paced"
    },
    {
        "Title": "Introduction to Bookkeeping",
        "Url": "https://www.open.edu/openlearn/money-business/introduction-bookkeeping-and-accounting/content-section-0?active-tab=description-tab",
        "Desc": "Get an introduction to the essential skills and concepts of bookkeeping and accounting. The course covers double-entry bookkeeping, how to prepare a trial balance and the two principal financial statements: the balance sheet and the profit and loss account.",
        "Provider": "The Open University",
        "Level": "Introductory",
        "Time": "8 hours",
        "Subject": "Practical maths \nBusiness and marketing",
        "ClassList": ["practicalMaths" , "businessAndMarketing"],
        "Certificate": "Yes",
        "Related job roles": "",
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    },
    {
        "Title": "Introduction to Finance",
        "Url": "https://finance.corndel.com/?utm_source=ncs&utm_campaign=ol&utm_medium=everydaymaths",
        "Desc": "Understand the essential analytical tools and financial reports that are used to manage organisations, like understanding balance sheets, profit and loss accounts and cash flow forecast and managing budgets.",
        "Provider": "Corndel",
        "Level": "",
        "Time": "40 hours",
        "Subject": "Practical maths \nBusiness and marketing",
        "ClassList": ["practicalMaths" , "businessAndMarketing"],
        "Certificate": "No",
        "Related job roles": "",
        "Bullets": "",
        "Studytype": "self-paced"
    },
    {
        "Title": "Create a Professional Online Presence",
        "Url": "https://www.futurelearn.com/courses/create-a-professional-online-presence",
        "Desc": "Explore how to present yourself professionally online. Find out more about different social media platforms and how the way that you conduct yourself online can impact your professional reputation. Learn about safety and privacy and the ways that your online activity might be viewed by different audiences.",
        "Provider": "FutureLearn",
        "Level": "Intermediate",
        "Time": "4 hours in total over 2 weeks",
        "Subject": "Workplace essentials",
        "ClassList": ["workplaceEssentials"],
        "Certificate": "Yes",
        "Related job roles": "",
        "Bullets": "",
        "Studytype": "set start dates "
    },
    {
        "Title": "Thriving in the Digital Workplace",
        "Url": "https://www.futurelearn.com/programs/thriving-in-the-digital-workplace",
        "Desc": "Boost your confidence and build the skills you need to use digital technology in the workplace. Explore jobs that need digital skills through real life case studies. Get to know what digital skills you're most likely to need in the future to stay one step ahead and develop techniques to enhance wellbeing and resilience at work.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "12 hours",
        "Subject": "Workplace essentials",
        "ClassList": ["workplaceEssentials"],
        "Certificate": "Yes",
        "Related job roles": "",
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    },
    {
        "Title": "How to Create Great Online Content",
        "Url": "https://www.futurelearn.com/courses/how-to-create-great-online-content",
        "Desc": "Find out about different types of online content and what makes them effective in different situations. Discover the importance of tone, style and format in your communications, and develop best practice for communicating effectively online",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "Business and marketing",
        "ClassList": ["businessAndMarketing"],
        "Certificate": "Yes",
        "Related job roles": "",
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    },
    {
        "Title": "Presenting Your Work with Impact",
        "Url": "https://www.futurelearn.com/courses/presenting-your-work-with-impact",
        "Desc": "Learn to create and present engaging content clearly and confidently in a range of situations, like in interviews and business meetings. Explore different types of presentation software and learn techniques to convey your ideas with confidence.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "Workplace essentials",
        "ClassList": ["workplaceEssentials"],
        "Certificate": "Yes",
        "Related job roles": "",
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    },
    {
        "Title": "Digital Skills: Social Media (for business)",
        "Url": "https://www.futurelearn.com/courses/digital-skills-social-media",
        "Desc": "A course for those wanting to use social media effectively to develop their entrepreneurial skills, to enter the workplace or to change career. Learn how to use social media to establish and improve your brand, set campaign objectives and identify your target audience. Create engaging content and discover the best places to pitch it.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "2 hours",
        "Subject": "Business and marketing",
        "ClassList": ["businessAndMarketing"],
        "Certificate": "Yes",
        "Related job roles": "",
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    },
    {
        "Title": "Fundamentals of Digital Marketing",
        "Url": "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing?utm_medium=referral&utm_campaign=2020Q2_UK_Partner&utm_content=DfE",
        "Desc": "Learn how to market goods or services online through a series of short video tutorials and knowledge quizzes. The course covers topics like creating a website and getting it known, marketing your business locally and internationally and advertising using social media. There are modules covering how to sell online as well as how to analyse the success of your marketing plan.",
        "Provider": "Google Digital Garage",
        "Level": "",
        "Time": "40 hours",
        "Subject": "Business and marketing",
        "ClassList": ["businessAndMarketing"],
        "Certificate": "Yes",
        "Related job roles": "",
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    },
    {
        "Title": "Discovering Computer Networks: hands on in the Open Networking Lab",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/computing-ict/discovering-computer-networks-hands-on-the-open-networking-lab/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=networkinglabs",
        "Desc": "Learn how computer networks operate, how data is sent around the internet and put your understanding into practice using an inbuilt network simulator to create your own simulated computer networks.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "Coding and computer science ",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Related job roles": "",
        "Bullets": "",
        "Studytype": "self-paced"
    },
    {
        "Title": "Learn to Code for Data Analysis",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/learn-code-data-analysis/content-section-overview-0?active-tab=description-tab",
        "Desc": "Learn how to write your own computer programs, one line of code at a time. Find out how to access open data, clean and analyse it, and produce visualisations, and how to present your analyses, privately or publicly. You'll be coding in Python, a widely used programming language across all disciplines.",
        "Provider": "The Open University",
        "Level": "Advanced",
        "Time": "1d",
        "Subject": "Coding and computer science ",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Related job roles": "",
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    },
    {
        "Title": "Programming Essentials in Python",
        "Url": "https://www.netacad.com/portal/web/self-enroll/c/course-1020069",
        "Desc": "Learn how to code in Python: an object-oriented programming language used by small companies to tech giants. Gain skills to write your own computer programmes, or to design a web or desktop application. You don't need to have any previous programming experience or knowledge to do this course.",
        "Provider": "Cisco Networking Academy",
        "Level": "",
        "Time": "70 hours",
        "Subject": "Coding and computer science ",
        "ClassList": ["coding"],
        "Certificate": "No",
        "Related job roles": "",
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    },
    {
        "Title": "Introduction to Cyber Security: Stay Safe Online",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/introduction-cyber-security-stay-safe-online/content-section-overview?active-tab=description-tab",
        "Desc": "Learn how to stay safe online at home and at work. The course will help you to recognise cyber threats and the steps to take to reduce your risks online. Find out about malware, viruses, trojans, network security, cryptography, identity theft and risk management.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "Coding and computer science ",
        "ClassList": ["coding"],
        "Certificate": "Yes ",
        "Related job roles": "",
        "Bullets": ["This is bullet one" , "This is bullet two"],
        "Studytype": "self-paced"
    }
]

createTriggers = (categoryData) =>{
    for(let x of categoryData) {
        createTitles(x.Category,x.Class, x.Desc );
    }
}

createTitles = (category, classList, description) => {
    //console.log(classList);
    const container = document.getElementsByClassName('tstaccordions')[0];
    if(container){
        const html = `
        <div class="govuk-accordion__section">
       <div class="govuk-accordion__section-header">
         <h2 class="govuk-accordion__section-heading">
           <button type="button" id="accordion-with-summary-sections-heading-1" aria-controls="accordion-with-summary-sections-content-1" class="govuk-accordion__section-button" aria-describedby="accordion-with-summary-sections-summary-1" aria-expanded="false">
             ${category}
             <span class="govuk-accordion__icon" aria-hidden="true"></span></button></h2>
         <div class="govuk-accordion__section-summary govuk-body" id="accordion-with-summary-sections-summary-1">
            ${description}
         </div>
       </div>
       <div id="accordion-with-summary-sections-content-1" class="govuk-accordion__section-content" aria-labelledby="accordion-with-summary-sections-heading-1">
         <ul class="course-list govuk-list ${classList}">

         </ul>
       </div>
     </div>
        `
        container.innerHTML += html;
    }
}
loadCourses = (courses) => {
    for(let x of courses) {
        printCoursesOnScreen(x.Title, x.Url, x.Desc, x.Provider, x.Level, x.Studytype, x.Certificate, x.Bullets, x.Subject, x.ClassList, x.Time);
    }
}
ctest = (tags)=> {

    if(tags) {
        let str = '<ul class="govuk-list govuk-list--bullet">'
        tags.forEach(function(tag) {
            str += '<li>'+ tag + '</li>';
        });
        str += '</ul>';
        return str
    } else {
        return ``
    }
}

//  ${ctest(tags)}


//${ctest(tags)}
printCoursesOnScreen = (title, url, desc, provider, level, duration, certificate, tags, subject, classList, time) => {
    const courseList = document.getElementsByClassName('course-list');
        for (let x of courseList) {
            classList.forEach((i) => {
                if (x.classList.contains(i)) {
                    const course = `
                        <li class="govuk-body  govuk-!-margin-bottom-4 govuk-tag--grey govuk-!-padding-2">
                        
                            <div class="govuk-!-margin-bottom-1"><span >${provider}</span></div>
                            <div class="govuk-!-margin-bottom-1 course-desc"><h2 class="govuk-heading-s"><a href="${url}" class="govuk-link">${title}</a></h2></div>
                            <hr class=" govuk-section-break govuk-section-break--visible govuk-section-break--m">
                            <div class="govuk-!-margin-bottom-1"><span class="govuk-!-font-weight-bold">Description : </span>${desc}</div>
                            ${ctest(tags)}
                            <div class="govuk-!-margin-bottom-1"><span class="govuk-!-font-weight-bold">Certificate of completion : </span>${certificate}</div>
                            <div class="govuk-!-margin-bottom-1"><span class="govuk-!-font-weight-bold">Study time : </span>${time}</div>
                            <div class="govuk-!-margin-bottom-1"><span class="govuk-!-font-weight-bold">Study type : </span>${duration}</div>
                            <div class="govuk-!-margin-bottom-1"><span class="govuk-!-font-weight-bold">Related jobs : </span>${duration}</div>
                        </li>
                        `
                    x.innerHTML += course;
                }
            })
        }
}

createTriggers(categoryData);
loadCourses(data);
