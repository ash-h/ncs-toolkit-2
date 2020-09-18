const categoryData = [
    {
        "Category": "Computer essentials",
        "Desc": "Use a computer, the internet and office programs like spreadsheet and word processors.",
        "Class": "computerEssentials"
    },
    {
        "Category": "Practical maths",
        "Desc": "Fractions, decimals and other math skills for work and everyday life.",
        "Class": "maths"
    },
    {
        "Category": "Business and finance",
        "Desc": "Project and business management, bookkeeping and organisational financial management.",
        "Class": "business"
    },
    {
        "Category": "Digital design and marketing",
        "Desc": "User experience (UX) design, graphic design, mobile apps, accessibility.",
        "Class": "design"
    },
    {
        "Category": "Coding",
        "Desc": "Intro to coding, HTML, CSS, Python, C, C++.",
        "Class": "coding"
    },
    {
        "Category": "Computer science",
        "Desc": "Cybersecurity, computer networks, artificial intelligence (AI), cloud computing.",
        "Class": "computerScience"
    },
    {
        "Category": "Professional development",
        "Desc": "Interpersonal skills, professional online presence, leadership, collaboration.",
        "Class": "professional"
    },
    {
        "Category": "Personal growth and wellbeing",
        "Desc": "Decision making, growth mindset, deal with stress, resilience.",
        "Class": "personal"
    }
]
const data = [
    {
        "Title": "Learn My Way",
        "Url": "https://www.learnmyway.com/?utm_source=skillstoolkit&utm_medium=website&utm_campaign=gov.uk",
        "Desc": "Collection of resources to help you use the internet.",
        "Provider": "Good Things Foundation",
        "Level": "",
        "Time": "0 to 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "No",
        "Roles": ["useful for most jobs"],
        "Lead": "Learn things like:",
        "Bullets": ["how to use your computer or device" , "find a job online","use public service","use office programs like Microsoft Word or Excel"],
        "Type": "self-paced"
    },
    {
        "Title": "Make It Click",
        "Url": "https://makeitclick.learnmyway.com/directory/search/?utm_source=skillstoolkit&utm_medium=website&utm_campaign=gov.uk",
        "Desc": "",
        "Provider": "Good Things Foundation",
        "Level": "",
        "Time": "0 to 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "No",
        "Roles": ["useful for most jobs"],
        "Lead": "Over 150 resources to help things such as:",
        "Bullets": ["sending emails","creating a CV","editing photos","advice for working from home"],
        "Type": "self-paced"
    },
    {
        "Title": "Get the best out of Microsoft Outlook",
        "Url": "https://support.office.com/en-gb/article/outlook-training-8a5b816d-9052-4190-a5eb-494512343cca?ui=en-US&rs=en-GB&ad=GB?utm_source=skillstoolkit&utm_medium=website&utm_campaign=gov.uk",
        "Desc": "Learn how to use Microsoft Outlook, an email program used in the workplace.",
        "Provider": "Microsoft",
        "Level": "",
        "Time": "0 to 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "No",
        "Roles": ["office administrator and other office roles"],
        "Lead": "Find out how to do things like:",
        "Bullets": ["send an email","book a meeting","manage your calendar","organise a to-do list"],
        "Type": "self-paced"
    },
    {
        "Title": "Learn For Everyday Life",
        "Url": "https://www.lloydsbankacademy.co.uk/course-selection/?utm_source=gov_website&utm_medium=affiliate&utm_campaign=national_careers_service",
        "Desc": "",
        "Provider": "Lloyds Bank",
        "Level": "",
        "Time": "0 to 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "No",
        "Roles": ["useful for most jobs"],
        "Lead": "Over 30 resources to help with things like:",
        "Bullets": ["staying safe online","using office programs, like Microsoft Word","working with digital devices","improving your CV"],
        "Type": "self-paced"
    },
    {
        "Title": "Everyday Maths",
        "Url": "https://govuk-ncs-toolkit-2.herokuapp.com/sprint-3/accordion-courses-2",
        "Desc": "Maths skills to help with work and everyday life.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "48 hours",
        "Subject": "Practical maths",
        "ClassList": ["maths"],
        "Certificate": "Yes",
        "Roles": ["Office administration, bookkeeper, payroll administrator"],
        "Lead": "Learn things like:",
        "Bullets": ["fractions","decimals","percentages","how to read diagrams and charts"],
        "Type": "self-paced"
    },
    {
        "Title": "Introduction to Bookkeeping",
        "Url": "https://www.open.edu/openlearn/money-business/introduction-bookkeeping-and-accounting/content-section-0?utm_source=ncs&utm_campaign=ol&utm_medium=bookkeeping",
        "Desc": "Introduction to the essential skills and concepts of bookkeeping and accounting.",
        "Provider": "The Open University",
        "Level": "Introductory",
        "Time": "8 hours",
        "Subject": "Practical maths \nBusiness and marketing",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Roles": ["Bookkeeper, accountant"],
        "Lead": "This course covers:",
        "Bullets": ["double-entry bookkeeping","how to prepare a trial balance","balance sheet","profit and loss accounts"],
        "Type": "self-paced"
    },
    {
        "Title": "Organisational financial management: an introduction",
        "Url": "https://finance.corndel.com/?utm_source=ncs&utm_campaign=ol&utm_medium=everydaymaths",
        "Desc": "Learn the skills needed to manage the finances of a business or organisation.",
        "Provider": "Corndel",
        "Level": "",
        "Time": "40 hours",
        "Subject": "Practical maths \nBusiness and marketing",
        "ClassList": ["business"],
        "Certificate": "No",
        "Roles": ["Finance officer, business manager"],
        "Lead": "This course covers:",
        "Bullets": ["central accounting statements","analysing financial data","managing a budget for a team or department","budget variances"],
        "Type": "self-paced"
    },
    {
        "Title": "Create a Professional Online Presence",
        "Url": "https://www.futurelearn.com/courses/create-a-professional-online-presence",
        "Desc": "How to present yourself professionally online.",
        "Provider": "FutureLearn",
        "Level": "Intermediate",
        "Time": "4 hours",
        "Subject": "Workplace essentials",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": ["useful for most jobs"],
        "Lead": "Find out about:",
        "Bullets": ["different social media platforms","how online behaviour can impact your professional reputation","safety and privacy online"],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "Thriving in the Digital Workplace",
        "Url": "https://www.futurelearn.com/programs/thriving-in-the-digital-workplace",
        "Desc": "Build the skills you need to use digital technology in the workplace, using real life case studies.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "12 hours",
        "Subject": "Workplace essentials",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": ["useful for most jobs"],
        "Lead": "In this course, you will:",
        "Bullets": ["Identify the digital trends in the workplace","Explore skills and techniques for developing your career","Develop techniques to enhance wellbeing and resilience at work"],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "How to Create Great Online Content",
        "Url": "https://www.futurelearn.com/courses/how-to-create-great-online-content",
        "Desc": "Find out about different types of online content and what makes them effective in different situations. Develop best practice for communicating effectively online.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "Business and marketing",
        "ClassList": ["design"],
        "Certificate": "Yes",
        "Roles": ["Digital marketer, social media manager"],
        "Lead": "Learn the importance of:",
        "Bullets": ["tone","style","format"],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "Presenting Your Work with Impact",
        "Url": "https://www.futurelearn.com/courses/presenting-your-work-with-impact",
        "Desc": "Learn to create and present engaging content clearly and confidently in a range of situations, like in interviews and business meetings. Explore different types of presentation software and learn techniques to convey your ideas with confidence.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "Workplace essentials",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": ["useful for many jobs"],
        "Lead": "",
        "Bullets": [],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "Digital Skills: Social Media (for business)",
        "Url": "https://www.futurelearn.com/courses/digital-skills-social-media",
        "Desc": "How social media can help businesses. For people who want to work in social media for a business or promote their own business.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "2 hours",
        "Subject": "Business and marketing",
        "ClassList": ["design"],
        "Certificate": "Yes",
        "Roles": ["Social media manager"],
        "Lead": "Learn how to:",
        "Bullets": ["set campaign objectives","identify target audiences","choose the right channels","create engaging content","measure success"],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "Fundamentals of Digital Marketing",
        "Url": "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing?utm_medium=referral&utm_campaign=2020Q2_UK_Partner&utm_content=DfE",
        "Desc": "Market goods or services online. Learn using a series of short video tutorials and knowledge quizzes.",
        "Provider": "Google",
        "Level": "",
        "Time": "40 hours",
        "Subject": "Business and marketing",
        "ClassList": ["design"],
        "Certificate": "Yes",
        "Roles": ["Digital marketer, market research data analyst, social media manager"],
        "Lead": "Find how how to advertise using:",
        "Bullets": ["search engine optimization (SEO)","social media","email","content","data insights"],
        "Type": "self-paced"
    },
    {
        "Title": "Discovering Computer Networks: hands on in the Open Networking Lab",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/computing-ict/discovering-computer-networks-hands-on-the-open-networking-lab/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=networkinglabs",
        "Desc": "Learn about the principles of computer networking: how computers and other devices connect and work together.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "Coding and computer science",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": ["Network engineer, network manager"],
        "Lead": "Find out how:",
        "Bullets": ["computer networks operate","data is sent around the internet"],
        "Type": "self-paced"
    },
    {
        "Title": "Learn to Code for Data Analysis",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/learn-code-data-analysis/content-section-overview-0?utm_source=ncs&utm_campaign=ol&utm_medium=learntocode",
        "Desc": "Learn programming to analyse and visualise open data. Visualising data helps show patterns and trends.",
        "Provider": "The Open University",
        "Level": "Advanced",
        "Time": "24 hours",
        "Subject": "Coding and computer science",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Roles": ["Data analyst-statistician, market research data analyst"],
        "Lead": "Find out how to:",
        "Bullets": ["access open data","clean and analyse data using code","produce visualisations","present your analyses"],
        "Type": "self-paced"
    },
    {
        "Title": "Programming Essentials in Python",
        "Url": "https://www.netacad.com/portal/web/self-enroll/c/course-1020069",
        "Desc": "Learn to code in Python: a programming language used by small companies and tech giants.",
        "Provider": "Cisco Networking Academy",
        "Level": "",
        "Time": "70 hours",
        "Subject": "Coding and computer science",
        "ClassList": ["coding"],
        "Certificate": "No",
        "Roles": ["App developer, software developer, computer games developer"],
        "Lead": "Find out how to:",
        "Bullets": ["write your own computer programs","design a web or desktop app"],
        "Type": "self-paced"
    },
    {
        "Title": "Introduction to Cyber Security: Stay Safe Online",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/introduction-cyber-security-stay-safe-online/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=cybersecurity",
        "Desc": "Learn how to stay safe online at home and at work.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "Coding and computer science",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": ["IT security co-ordinator, cyber intelligence officer, forensic computer analyst"],
        "Lead": "Find out about:",
        "Bullets": ["malware and viruses","network security","identity theft","risk management"],
        "Type": "self-paced"
    },
    {
        "Title": "Understand the Basics of Code",
        "Url": "https://learndigital.withgoogle.com/digitalgarage/course/basics-code",
        "Desc": "Learn what code is and why understanding it is useful.",
        "Provider": "Google Digital Garage",
        "Level": "",
        "Time": "1 hour",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "No",
        "Roles": [
            "useful for most technology jobs"
        ],
        "Lead": "Find out:",
        "Bullets": [
            "how code works",
            "why so many coding languages exist",
            "which coding languages are suited to specific tasks"
        ],
        "Type": "self-paced"
    },
    {
        "Title": "Manage a Project with Digital Tools",
        "Url": "https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education-uk/en-uk/manage-a-project-with-digital-tools/overview.html?utm_source=partners&utm_medium=website&utm_campaign=20200817-DfEST-MPDT--ad-learn-&src=partners-website-20200817-DfEST-MPDT--ad-learn-",
        "Desc": "",
        "Provider": "Google",
        "Level": "",
        "Time": "9 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Roles": [
            "business manager"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "plan a team project",
            "track its progress and costs",
            "prepare a summary report"
        ],
        "Type": "self-paced"
    },
    {
        "Title": "Communicate Effectively at Work",
        "Url": "https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education-uk/en-uk/effective-communications-at-work/overview.html?utm_source=partners&utm_medium=website&utm_campaign=20200817-DfEST-CEW--ad-learn-&src=partners-website-20200817-DfEST-CEW--ad-learn-",
        "Desc": "Use digital tools to communicate and collaborate with others in the workplace more effectively.",
        "Provider": "Google",
        "Level": "",
        "Time": "9 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "useful for most jobs"
        ],
        "Lead": "Find out how to:",
        "Bullets": [
            "hold a team meeting",
            "collect feedback",
            "create and share a proposal",
            "present information to an audience"
        ],
        "Type": "self-paced"
    },
    {
        "Title": "Introduction to Machine Learning",
        "Url": "https://applieddigitalskills.withgoogle.com/c/middle-and-high-school-uk/en-uk/introduction-to-machine-learning/overview.html?utm_source=partners&utm_medium=website&utm_campaign=20200817-DfEST-ML--ad-learn-&src=partners-website-20200817-DfEST-ML--ad-learn-",
        "Desc": "Computers can be programmed to learn from data and information.",
        "Provider": "Google",
        "Level": "",
        "Time": "5 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "Data scientist",
            "machine learning engineer"
        ],
        "Lead": "Find out how to:",
        "Bullets": [
            "train a computer",
            "make inferences and recommendations using data",
            "consider the ethics of machine learning"
        ],
        "Type": "self-paced"
    },
    {
        "Title": "Digital Skills: Artificial Intelligence",
        "Url": "https://www.futurelearn.com/courses/artificial-intelligence",
        "Desc": "Artificial intelligence (AI) is used in many businesses to improve the way employees work.",
        "Provider": "Futurelearn",
        "Level": "",
        "Time": "6 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "Machine learning engineer"
        ],
        "Lead": "Learn about:",
        "Bullets": [
            "the past, present and future of AI",
            "its potential in the workplace",
            "the working relationship between humans and AI",
            "the predicted skills needed to work with AI"
        ],
        "Type": "scheduled, no instructor"
    },
    {
        "Title": "Introduction to Creative Artificial Intelligence (AI)",
        "Url": "https://www.futurelearn.com/courses/introduction-to-creative-ai",
        "Desc": "Learn how AI is used in creative industries, using practical examples.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "Machine learning engineer, artist"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "the latest developments in machine learning",
            "the skills you need to get ahead in creative computing"
        ],
        "Type": "self-paced"
    },
    {
        "Title": "Computer Programming for Everyone",
        "Url": "https://www.futurelearn.com/courses/computer-programming-for-everyone",
        "Desc": "Explore what computer programming and code can do.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Roles": [
            "App developer, software developer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "how and why people program computers",
            "the kinds of problems that computers can help you solve",
            "an introductory block-language for coding",
            "about different types of coding languages",
            "useful applications of code"
        ],
        "Type": "self-paced"
    },
    {
        "Title": "Creating a Great User Experience for Mobile Apps",
        "Url": "https://www.futurelearn.com/courses/creating-a-great-user-experience-for-mobile-apps",
        "Desc": "Find out how to design mobile apps and create a great user experience.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["design"],
        "Certificate": "Yes",
        "Roles": [
            "User experience (UX) designer, user researcher, app developer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "the principles behind user experience design",
            "how to design your own mobile app",
            "how to create clickable prototypes from design sketches"
        ],
        "Type": "self-paced"
    },
    {
        "Title": "Learn to Code for the Web",
        "Url": "https://www.futurelearn.com/courses/learn-to-code-for-the-web",
        "Desc": "Find out about the different coding languages used to make websites. Then try using them yourself.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Roles": [
            "Web developer"
        ],
        "Lead": "Learn about:",
        "Bullets": [
            "HTML",
            "CSS",
            "Javascript"
        ],
        "Type": "self-paced"
    },
    {
        "Title": "IT Ethics: Professionalism and Ethics in Computing",
        "Url": "https://www.futurelearn.com/courses/information-technology-ethics",
        "Desc": "Learn why ethics matter to computing professionals. Computer ethics is one of the fastest growing areas of interest within IT related industries. A solid knowledge of this field is valued by employers.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "12 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most technology jobs"
        ],
        "Lead": "Find out how:",
        "Bullets": [
            "software and hardware can impact society",
            "to mitigate ethical risks",
            "to improve your decision making"
        ],
        "Type": "scheduled, no instructor"
    },
    {
        "Title": "Introduction to Virtual, Augmented and Mixed Reality",
        "Url": "https://www.futurelearn.com/courses/introduction-to-virtual-reality",
        "Desc": "Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) are known collectively as Extended Reality (XR). These are immersive technologies that are either fully virtual or blend the virtual with reality.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "Software developer, user experience (UX) designer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "tools and technologies that support extended reality",
            "concepts used to create extended reality experiences",
            "ethics involved in extended reality"
        ],
        "Type": "self-paced"
    },
    {
        "Title": "Introduction to UX and Accessible Design",
        "Url": "https://www.futurelearn.com/courses/introduction-to-ux-and-accessible-design",
        "Desc": "User interfaces help people interact with their computers and devices. Find out how to make them accessible for disabled users.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["design"],
        "Certificate": "Yes",
        "Roles": [
            "User experience (UX) designer, user researcher, web developer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "guidance and regulations covering user interfaces",
            "CSS",
            "Javascript",
            "how to find a career in accessible interface design"
        ],
        "Type": "self-paced"
    },
    {
        "Title": "Collaborative Working in a Remote Team",
        "Url": "https://www.futurelearn.com/courses/collaborative-working-in-a-remote-team",
        "Desc": "Find out how to work effectively and collaboratively with your remote team.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "useful for most jobs"
        ],
        "Lead": "You will learn about:",
        "Bullets": [
            "the challenges and benefits of remote working",
            "different technologies for collaboration",
            "project management tools that can help",
            "practical planning skills for remote working"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Communication and Interpersonal Skills at Work",
        "Url": "https://www.futurelearn.com/courses/communication-and-interpersonal-skills-at-work",
        "Desc": "Improve your communication skills at work.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "useful for most jobs"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "communication strategies for workplace collaboration",
            "how to match your communication style with your work",
            "how to have challenging conversations"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Essential Skills for Your Career Development",
        "Url": "https://www.futurelearn.com/courses/essential-skills-for-your-career-development",
        "Desc": "Discover tools that can help develop your career.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "useful for most jobs"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "use planning tools",
            "establish career goals",
            "create a professional network",
            "use your transferable skills",
            "navigate job applications and interviews"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Get Creative with People to Solve Problems",
        "Url": "https://www.futurelearn.com/courses/get-creative-with-people-to-solve-problems",
        "Desc": "Find out about human-centred design, a creative approach to problem solving. It focuses on understanding the needs of the people who have a problem in order to design appropriate solutions.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": [
            "design"
        ],
        "Certificate": "Yes",
        "Roles": [
            "User experience (UX) designer, product designer, any jobs that involve problem solving"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "why this method of thinking is effective",
            "how to use it",
            "how to test solutions",
            "which jobs use this process"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Wellbeing and Resilience at Work",
        "Url": "https://www.futurelearn.com/courses/wellbeing-and-resilience-at-work",
        "Desc": "The modern workplace is demanding and rapidly changing. Find out how to navigate it.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Roles": [
            "useful for most jobs"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "be resilient and adaptable",
            "evaluate your strengths at work",
            "identify the value of workplace wellbeing"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Introduction to Business Management",
        "Url": "https://www.futurelearn.com/courses/introduction-to-business-management",
        "Desc": "Develop a range of business management skills relevant to the world of work.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "16 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Roles": [
            "Business project manager, IT project manager, other management roles"
        ],
        "Lead": "Learn how best to manage:",
        "Bullets": [
            "people",
            "money",
            "information",
            "yourself"
        ],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "Digital Skills: Digital Skills for Work and Life",
        "Url": "https://www.futurelearn.com/courses/digital-skills-for-work-and-life",
        "Desc": "Find out how digital is changing our personal and professional lives. Develop the skills to thrive in a digital world.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "2 hours",
        "Subject": "",
        "ClassList": ["computerEssentials"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "the meaning of ‘digital’",
            "how digital is changing the ways we work and live",
            "its impact on jobs and industries",
            "the opportunities and challenges of digital",
            "how to adopt a ‘growth mindset’"
        ],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "Digital Skills: Digital Marketing",
        "Url": "https://www.futurelearn.com/courses/digital-skills-digital-marketing",
        "Desc": "Find out how to grow your business or career using digital marketing.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": [
            "design"
        ],
        "Certificate": "Yes",
        "Roles": [
            "Digital marketer, market research data analyst, social media manager"
        ],
        "Lead": "Learn about these marketing strategies:",
        "Bullets": [
            "display advertising",
            "pay per click",
            "search engine optimisation (SEO)",
            "email marketing",
            "targeting customers"
        ],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "Digital Skills: Mobile",
        "Url": "https://www.futurelearn.com/courses/digital-skills-mobile",
        "Desc": "Understand the importance of mobile technology in the digital world.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": [
            "design"
        ],
        "Certificate": "Yes",
        "Roles": [
            "App developer, user experience (UX) designer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "what ‘mobile’ is",
            "about the growth of mobile technology",
            "the benefits of mobile",
            "concepts to help design and build a mobile app"
        ],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "Digital Skills: Web Analytics",
        "Url": "https://www.futurelearn.com/courses/digital-skills-web-analytics",
        "Desc": "Find out about the role of analytics in business and why they are important.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "Data analyst-statistician, market research data analyst, entrepreneur "
        ],
        "Lead": "You will learn how to:",
        "Bullets": [
            "create a measurement plan",
            "measure objectives",
            "use Google Analytics"
        ],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "Introduction to Conversational Interfaces",
        "Url": "https://www.futurelearn.com/courses/introduction-to-conversational-interfaces",
        "Desc": "Explore conversational interfaces, like chatbots and virtual assistants.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "User experience (UX) designer, app developer, web developer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "what conversational and voice-based interfaces are",
            "how to design and develop one",
            "the ethics of conversational and voice-based interfaces"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Introduction to Physical Computing",
        "Url": "https://www.futurelearn.com/courses/an-introduction-to-physical-computing",
        "Desc": "Explore microcontrollers, the technology used in smartphones, smartwatches and smart kettles.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "Product designer, software developer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "what physical computing is",
            "the structure of a physical computing system",
            "the ethics of physical computing",
            "careers in physical computing",
            "what the Internet of Things (IoT) is"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Programming Essentials in C",
        "Url": "https://www.netacad.com/courses/programming/cla-programming-c",
        "Desc": "Learn to code in C: a popular programming language commonly used in software development. \n\nYou don't need any previous programming experience or knowledge to do this course.",
        "Provider": "Cisco Networking Academy",
        "Level": "",
        "Time": "70 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Roles": [
            "Software developer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "concepts of computer programming",
            "syntax, semantics and data types of C",
            "how to write your own computer programs"
        ],
        "Type": "scheduled, instructor-led"
    },
    {
        "Title": "Programming Essentials in C++",
        "Url": "https://www.netacad.com/courses/programming/essentials-programming-c-plus-plus",
        "Desc": "Learn to code in C++: a popular programming language commonly used in video games development, \n\nYou don't need any previous programming experience or knowledge to do this course.",
        "Provider": "Cisco Networking Academy",
        "Level": "",
        "Time": "70 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Roles": [
            "Video games developer, software developer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "syntax, semantics and data types of C++",
            "principles of object-oriented programming",
            "how to write in C++"
        ],
        "Type": "scheduled, instructor-led"
    },
    {
        "Title": "Handling Information at Work (level 1)",
        "Url": "https://www.e-junkie.com/i/zvw4?&card",
        "Desc": "",
        "Provider": "Learning Curve Group",
        "Level": "",
        "Time": "2 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "useful for most jobs"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "how to handle information in the workplace",
            "how to meet your organisation’s procedures",
            "about government guidelines for handling information",
            "about penalties for not following guidelines"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Growth Mindset",
        "Url": "https://www.virtual-college.co.uk/courses/professional/personal-professional-development-growth-mindset",
        "Desc": "A growth mindset is a concept from psychology. It is the belief that you can improve your intelligence and character through learning.",
        "Provider": "Virtual college",
        "Level": "",
        "Time": "30 minutes",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Roles": [
            "useful for most jobs"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "what a growth mindset is",
            "how to encourage a growth mindset",
            "the benefits of feedback",
            "about ‘the learning zone’ and ‘the performance zone’"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Personal and Professional Development: Resilience",
        "Url": "https://www.virtual-college.co.uk/courses/professional/personal-professional-development-resilience",
        "Desc": "Learn how to adapt and be flexible in the face of challenging circumstances, whilst maintaining a stable mental outlook.",
        "Provider": "Virtual college",
        "Level": "",
        "Time": "25 minutes",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Roles": [
            "useful for most jobs"
        ],
        "Lead": "You will find out:",
        "Bullets": [
            "what resilience is",
            "what it is important",
            "how to improve your own resilience"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Personal Development and Self-Awareness",
        "Url": "https://www.virtual-college.co.uk/courses/professional/personal-development-self-awareness",
        "Desc": "Discover self-awareness and how it can help you develop.",
        "Provider": "Virtual college",
        "Level": "",
        "Time": "45 minutes",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Roles": [
            "useful for most jobs"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "what self-awareness is and why it is important",
            "SMART objectives",
            "action planning",
            "how to apply self-awareness"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Dealing with Stressful Situations",
        "Url": "https://www.virtual-college.co.uk/courses/professional/dealing-with-stressful-situations",
        "Desc": "Find out how to deal with stressful situations at work and in life.",
        "Provider": "Virtual college",
        "Level": "",
        "Time": "30 minutes",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Roles": [
            "useful for most jobs"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "what stress is",
            "what triggers and responses are",
            "how people cope with stress",
            "tools and techniques for managing stress"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Neuroscience for Personal Development",
        "Url": "https://www.virtual-college.co.uk/courses/professional/neuroscience-for-personal-development",
        "Desc": "Neuroscience plays an important role in how we learn. Insights from neuroscience can help you develop learning, memory and personal development skills.",
        "Provider": "Virtual college",
        "Level": "",
        "Time": "30 minutes",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Roles": [
            "useful for most jobs"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "neural networks and neuroplasticity",
            "attention, memory and neurogenesis",
            "what holistic learning is",
            "the limits of learning"
        ],
        "Type": "Self-paced"
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
           <button type="button" id="accordion-with-summary-sections-heading-1" aria-controls="accordion-with-summary-sections-content-1" class="govuk-accordion__section-button link-colour" aria-describedby="accordion-with-summary-sections-summary-1" aria-expanded="false">
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
        printCoursesOnScreen(x.Title, x.Url, x.Desc, x.Provider, x.Level, x.Type, x.Certificate, x.Bullets, x.Subject, x.ClassList, x.Time, x.Roles, x.Lead);
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
printCoursesOnScreen = (title, url, desc, provider, level, type, certificate, bullets, subject, classList, time, roles, lead) => {
    const courseList = document.getElementsByClassName('course-list');
        for (let x of courseList) {
            classList.forEach((i) => {
                if (x.classList.contains(i)) {
                    const course = `
                        <li class="govuk-body  govuk-!-margin-bottom-4 govuk-tag--grey govuk-!-padding-2">
                        
                            <div class="govuk-!-margin-bottom-1"><span >${provider}</span></div>
                            <div class="govuk-!-margin-bottom-1 course-desc"><h2 class="govuk-heading-s"><a href="${url}" class="govuk-link">${title}</a></h2></div>
                            <hr class=" govuk-section-break govuk-section-break--visible govuk-section-break--m">
                            <div class="govuk-!-margin-bottom-1"><span class="govuk-!-font-weight-bold"></span>${desc}</div>
                            <br>
                            <div class="govuk-!-margin-bottom-1"><span class="govuk-!-font-weight-bold"></span>${lead}</div>
                            ${ctest(bullets)}
                            <div class="govuk-!-margin-bottom-1 govuk-!-font-size-16"><span class="govuk-!-font-weight-bold">Certificate of completion : </span>${certificate}</div>
                            <div class="govuk-!-margin-bottom-1 govuk-!-font-size-16"><span class="govuk-!-font-weight-bold">Total study time : </span>${time}</div>
                            <div class="govuk-!-margin-bottom-1 govuk-!-font-size-16"><span class="govuk-!-font-weight-bold">Study type : </span>${type}</div>
                            <div class="govuk-!-margin-bottom-1 govuk-!-font-size-16"><span class="govuk-!-font-weight-bold">Related jobs : </span>${roles}</div>
                        </li>
                        `
                    x.innerHTML += course;
                }
            })
        }
}

createTriggers(categoryData);
loadCourses(data);
