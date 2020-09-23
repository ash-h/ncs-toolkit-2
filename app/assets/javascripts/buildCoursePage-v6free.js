const categoryData = [
    {
        "Category": "Practical maths",
        "Desc": "2 courses to help with fractions, decimals and other maths skills for work and everyday life",
        "Class": "maths"
    },
    {
        "Category": "Computer essentials",
        "Desc": "6 courses to help you use a computer, the internet and office programs like spreadsheets and word processors. ",
        "Class": "computerEssentials"
    },
    {
        "Category": "Personal growth and wellbeing",
        "Desc": "7 courses to help with decision making, your mindset, dealing with stress and resilience.",
        "Class": "personal"
    },
    {
        "Category": "Professional development",
        "Desc": "16 courses to help with interpersonal skills, your professional online presence, leadership and collaboration. ",
        "Class": "professional"
    },
    {
        "Category": "Business and finance",
        "Desc": "6 courses including project and business management, bookkeeping and sales.",
        "Class": "business"
    },
    {
        "Category": "Digital design and marketing",
        "Desc": "9 courses including user experience design (UX), graphic design, app design and social media. ",
        "Class": "design"
    },
    {
        "Category": "Computer science",
        "Desc": "15 courses including cybersecurity, computer networks, artificial intelligence (AI) and cloud computing.",
        "Class": "computerScience"
    },
    {
        "Category": "Coding",
        "Desc": "8 courses including HTML, CSS, Python, C, C++.",
        "Class": "coding"
    }
]
const data = [
    {
        "Title": "Learn My Way",
        "Url": "https://www.learnmyway.com/?utm_source=skillstoolkit&utm_medium=website&utm_campaign=gov.uk",
        "Desc": "Collection of resources to help you use the internet.",
        "Provider": "Good Things Foundation",
        "Level": "",
        "Total study time": "Under 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "No",
        "Related job roles": ["Useful for most jobs"],
        "Lead-in": "Learn things like:",
        "Bullets": ["how to use your computer or device","find a job online","use public service","use office programs like Microsoft Word or Excel"],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Make It Click",
        "Url": "https://makeitclick.learnmyway.com/directory/search/?utm_source=skillstoolkit&utm_medium=website&utm_campaign=gov.uk",
        "Desc": "",
        "Provider": "Good Things Foundation",
        "Level": "",
        "Total study time": "Under 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "No",
        "Related job roles": ["Useful for most jobs"],
        "Lead-in": "Over 150 resources to help things such as:",
        "Bullets": ["sending emails","creating a CV","editing photos","advice for working from home"],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Get the best out of Microsoft Outlook",
        "Url": "https://support.office.com/en-gb/article/outlook-training-8a5b816d-9052-4190-a5eb-494512343cca?ui=en-US&rs=en-GB&ad=GB?utm_source=skillstoolkit&utm_medium=website&utm_campaign=gov.uk",
        "Desc": "Learn how to use Microsoft Outlook, an email program used in the workplace.",
        "Provider": "Microsoft",
        "Level": "",
        "Total study time": "Under 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "No",
        "Related job roles": ["office administrator and other office roles"],
        "Lead-in": "Find out how to do things like:",
        "Bullets": ["send an email","book a meeting","manage your calendar","organise a to-do list"],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Learn For Everyday Life",
        "Url": "https://www.lloydsbankacademy.co.uk/course-selection/?utm_source=gov_website&utm_medium=affiliate&utm_campaign=national_careers_service",
        "Desc": "",
        "Provider": "Lloyds Bank",
        "Level": "",
        "Total study time": "Under 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "No",
        "Related job roles": ["Useful for most jobs"],
        "Lead-in": "Over 30 resources to help with things like:",
        "Bullets": ["staying safe online","using office programs, like Microsoft Word","working with digital devices","improving your CV"],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Everyday Maths",
        "Url": "https://govuk-ncs-toolkit-2.herokuapp.com/sprint-3/accordion-courses-2",
        "Desc": "Maths skills to help with work and everyday life.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "48 hours",
        "Subject": "Practical maths",
        "ClassList": ["maths"],
        "Certificate": "Yes",
        "Related job roles": ["Office administration, bookkeeper, payroll administrator"],
        "Lead-in": "This course covers:",
        "Bullets": ["fractions","decimals","percentages","how to read diagrams and charts"],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Introduction to Bookkeeping",
        "Url": "https://www.open.edu/openlearn/money-business/introduction-bookkeeping-and-accounting/content-section-0?utm_source=ncs&utm_campaign=ol&utm_medium=bookkeeping",
        "Desc": "Introduction to the essential skills and concepts of bookkeeping and accounting.",
        "Provider": "The Open University",
        "Level": "Introductory",
        "Total study time": "8 hours",
        "Subject": "Practical maths  Business and marketing",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Related job roles": ["Bookkeeper, accountant"],
        "Lead-in": "This course covers:",
        "Bullets": ["double-entry bookkeeping","how to prepare a trial balance","balance sheet","profit and loss accounts"],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Organisational financial management: an introduction",
        "Url": "https://finance.corndel.com/?utm_source=ncs&utm_campaign=ol&utm_medium=everydaymaths",
        "Desc": "Learn the skills needed to manage the finances of a business or organisation.",
        "Provider": "Corndel",
        "Level": "",
        "Total study time": "40 hours",
        "Subject": "Practical maths  Business and marketing",
        "ClassList": ["business"],
        "Certificate": "No",
        "Related job roles": ["Finance officer, business manager"],
        "Lead-in": "This course covers:",
        "Bullets": ["central accounting statements","analysing financial data","managing a budget for a team or department","budget variances"],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Create a Professional Online Presence",
        "Url": "https://www.futurelearn.com/courses/create-a-professional-online-presence",
        "Desc": "How to present yourself professionally online.",
        "Provider": "FutureLearn",
        "Level": "Intermediate",
        "Total study time": "4 hours",
        "Subject": "Workplace essentials",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": ["Useful for most jobs"],
        "Lead-in": "Find out about:",
        "Bullets": ["different social media platforms","how online behaviour can impact your professional reputation","safety and privacy online"],
        "Studytype": "Scheduled, no instructor"
    },
    {
        "Title": "Thriving in the Digital Workplace",
        "Url": "https://www.futurelearn.com/programs/thriving-in-the-digital-workplace",
        "Desc": "Build the skills you need to use digital technology in the workplace, using real life case studies.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "12 hours",
        "Subject": "Workplace essentials",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": ["Useful for most jobs"],
        "Lead-in": "In this course, you will:",
        "Bullets": ["Identify the digital trends in the workplace","Explore skills and techniques for developing your career","Develop techniques to enhance wellbeing and resilience at work"],
        "Studytype": "Scheduled, no instructor"
    },
    {
        "Title": "How to Create Great Online Content",
        "Url": "https://www.futurelearn.com/courses/how-to-create-great-online-content",
        "Desc": "Find out about different types of online content and what makes them effective in different situations. Develop best practice for communicating effectively online.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "Business and marketing",
        "ClassList": ["design"],
        "Certificate": "Yes",
        "Related job roles": ["Digital marketer, social media manager"],
        "Lead-in": "Learn the importance of:",
        "Bullets": ["tone","style","format"],
        "Studytype": "Scheduled, no instructor"
    },
    {
        "Title": "Presenting Your Work with Impact",
        "Url": "https://www.futurelearn.com/courses/presenting-your-work-with-impact",
        "Desc": "Learn to create and present engaging content clearly and confidently in a range of situations, like in interviews and business meetings. Explore different types of presentation software and learn techniques to convey your ideas with confidence.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "Workplace essentials",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": ["useful for many jobs"],
        "Lead-in": "",
        "Bullets": [],
        "Studytype": "Scheduled, no instructor"
    },
    {
        "Title": "Digital Skills: Social Media (for business)",
        "Url": "https://www.futurelearn.com/courses/digital-skills-social-media",
        "Desc": "How social media can help businesses. For people who want to work in social media for a business or promote their own business.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "2 hours",
        "Subject": "Business and marketing",
        "ClassList": ["design"],
        "Certificate": "Yes",
        "Related job roles": ["Social media manager"],
        "Lead-in": "Learn how to:",
        "Bullets": ["set campaign objectives","identify target audiences","choose the right channels","create engaging content","measure success"],
        "Studytype": "Scheduled, no instructor"
    },
    {
        "Title": "Fundamentals of Digital Marketing",
        "Url": "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing?utm_medium=referral&utm_campaign=2020Q2_UK_Partner&utm_content=DfE",
        "Desc": "Market goods or services online. Learn using a series of short video tutorials and knowledge quizzes.",
        "Provider": "Google",
        "Level": "",
        "Total study time": "40 hours",
        "Subject": "Business and marketing",
        "ClassList": ["design"],
        "Certificate": "Yes",
        "Related job roles": ["Digital marketer, market research data analyst, social media manager"],
        "Lead-in": "Find how to advertise using:",
        "Bullets": ["search engine optimization (SEO)","social media","email","content","data insights"],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Discovering Computer Networks: hands on in the Open Networking Lab",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/computing-ict/discovering-computer-networks-hands-on-the-open-networking-lab/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=networkinglabs",
        "Desc": "Learn about the principles of computer networking: how computers and other devices connect and work together.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "Coding and computer science",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": ["Network engineer, network manager"],
        "Lead-in": "Find out how:",
        "Bullets": ["computer networks operate","data is sent around the internet"],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Learn to Code for Data Analysis",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/learn-code-data-analysis/content-section-overview-0?utm_source=ncs&utm_campaign=ol&utm_medium=learntocode",
        "Desc": "Learn programming to analyse and visualise open data. Visualising data helps show patterns and trends.  You will learn to code in Python during this course. You do not need any prior coding knowledge.",
        "Provider": "The Open University",
        "Level": "Advanced",
        "Total study time": "24 hours",
        "Subject": "Coding and computer science",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Related job roles": ["Data analyst-statistician, market research data analyst"],
        "Lead-in": "Find out how to:",
        "Bullets": ["access open data","clean and analyse data using code","produce visualisations","present your analyses"],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Programming Essentials in Python",
        "Url": "bit.ly/Cisco-td_PEinP",
        "Desc": "Learn to code in Python: a programming language used by small companies and tech giants.",
        "Provider": "Cisco Networking Academy",
        "Level": "",
        "Total study time": "70 hours",
        "Subject": "Coding and computer science",
        "ClassList": ["coding"],
        "Certificate": "No",
        "Related job roles": ["App developer, software developer, computer games developer"],
        "Lead-in": "Find out how to:",
        "Bullets": ["write your own computer programs","design a web or desktop app"],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Introduction to Cyber Security: Stay Safe Online",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/introduction-cyber-security-stay-safe-online/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=cybersecurity",
        "Desc": "Learn how to stay safe online at home and at work.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "Coding and computer science",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": ["IT security co-ordinator, cyber intelligence officer, forensic computer analyst"],
        "Lead-in": "Find out about:",
        "Bullets": ["malware and viruses","network security","identity theft","risk management"],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Understand the Basics of Code",
        "Url": "https://learndigital.withgoogle.com/digitalgarage/course/basics-code",
        "Desc": "Learn what code is and why understanding it is useful.",
        "Provider": "Google Digital Garage",
        "Level": "",
        "Total study time": "1 hour",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "No",
        "Related job roles": [
            "Useful for most technology jobs"
        ],
        "Lead-in": "Find out:",
        "Bullets": [
            "how code works",
            "why so many coding languages exist",
            "which coding languages are suited to specific tasks"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Business and customer awareness",
        "Url": "https://www.e-junkie.com/i/zvw1?&card",
        "Desc": "",
        "Provider": "Learning Curve Group Limited",
        "Level": "",
        "Total study time": "Under 2 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": ["Useful for most jobs"],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "find local job opportunities",
            "identify the skills needed for a job",
            "write a CV",
            "apply for a job",
            "prepare for a job interview"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Manage a Project with Digital Tools",
        "Url": "https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education-uk/en-uk/manage-a-project-with-digital-tools/overview.html?utm_source=partners&utm_medium=website&utm_campaign=20200817-DfEST-MPDT--ad-learn-&src=partners-website-20200817-DfEST-MPDT--ad-learn-",
        "Desc": "",
        "Provider": "Google",
        "Level": "",
        "Total study time": "9 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Related job roles": [
            "Business manager"
        ],
        "Lead-in": "Learn to manage a team project and how to:",
        "Bullets": [
            "plan a team project",
            "track its progress and costs",
            "prepare a summary report"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Communicate Effectively at Work",
        "Url": "https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education-uk/en-uk/effective-communications-at-work/overview.html?utm_source=partners&utm_medium=website&utm_campaign=20200817-DfEST-CEW--ad-learn-&src=partners-website-20200817-DfEST-CEW--ad-learn-",
        "Desc": "Use digital tools to communicate and collaborate with others in the workplace more effectively.",
        "Provider": "Google",
        "Level": "",
        "Total study time": "9 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Find out how to:",
        "Bullets": [
            "hold a team meeting",
            "collect feedback",
            "create and share a proposal",
            "present information to an audience"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Introduction to Machine Learning",
        "Url": "https://applieddigitalskills.withgoogle.com/c/middle-and-high-school-uk/en-uk/introduction-to-machine-learning/overview.html?utm_source=partners&utm_medium=website&utm_campaign=20200817-DfEST-ML--ad-learn-&src=partners-website-20200817-DfEST-ML--ad-learn-",
        "Desc": "Computers can be programmed to learn from data and information.",
        "Provider": "Google",
        "Level": "",
        "Total study time": "5 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "Data scientist",
            "machine learning engineer"
        ],
        "Lead-in": "Find out how to:",
        "Bullets": [
            "train a computer",
            "make recommendations using data",
            "consider the ethics of machine learning"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Digital Skills: Artificial Intelligence",
        "Url": "https://www.futurelearn.com/courses/artificial-intelligence",
        "Desc": "Artificial intelligence (AI) is used in many businesses to improve the way employees work.",
        "Provider": "Futurelearn",
        "Level": "",
        "Total study time": "6 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "Machine learning engineer"
        ],
        "Lead-in": "Learn about artificial intelligence's:",
        "Bullets": [
            "the past, present and future",
            "potential in the workplace",
            "working relationship with humans",
            "predicted skills and ones needed to work with AI"
        ],
        "Studytype": "scheduled, no instructor"
    },
    {
        "Title": "Introduction to Creative Artificial Intelligence (AI)",
        "Url": "https://www.futurelearn.com/courses/introduction-to-creative-ai",
        "Desc": "Learn how AI is used in creative industries, using practical examples.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "Machine learning engineer, artist"
        ],
        "Lead-in": "Find out about:",
        "Bullets": [
            "the latest developments in machine learning",
            "the skills you need to get ahead in creative computing"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Computer Programming for Everyone",
        "Url": "https://www.futurelearn.com/courses/computer-programming-for-everyone",
        "Desc": "Explore what computer programming and code can do.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Related job roles": [
            "App developer, software developer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "how and why people program computers",
            "the kinds of problems that computers can help you solve",
            "an introductory block-language for coding",
            "about different types of coding languages",
            "useful applications of code"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Creating a Great User Experience for Mobile Apps",
        "Url": "https://www.futurelearn.com/courses/creating-a-great-user-experience-for-mobile-apps",
        "Desc": "Find out how to design mobile apps and create a great user experience.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["design"],
        "Certificate": "Yes",
        "Related job roles": [
            "User experience (UX) designer, user researcher, app developer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "the principles behind user experience design",
            "how to design your own mobile app",
            "how to create clickable prototypes from design sketches"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Learn to Code for the Web",
        "Url": "https://www.futurelearn.com/courses/learn-to-code-for-the-web",
        "Desc": "Find out about the different coding languages used to make websites. Then try using them yourself.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Related job roles": [
            "Web developer"
        ],
        "Lead-in": "Learn about these coding languages:",
        "Bullets": [
            "HTML",
            "CSS",
            "Javascript"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "IT Ethics: Professionalism and Ethics in Computing",
        "Url": "https://www.futurelearn.com/courses/information-technology-ethics",
        "Desc": "Learn why ethics matter to computing professionals. Computer ethics is one of the fastest growing areas of interest within IT related industries. A good understanding of this field is valued by employers.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "12 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most technology jobs"
        ],
        "Lead-in": "Find out how:",
        "Bullets": [
            "software and hardware can impact society",
            "to mitigate against ethical risks",
            "to improve your decision making"
        ],
        "Studytype": "scheduled, no instructor"
    },
    {
        "Title": "Introduction to Virtual, Augmented and Mixed Reality",
        "Url": "https://www.futurelearn.com/courses/introduction-to-virtual-reality",
        "Desc": "There are immersive technologies known collectively as Extended Reality (XR). They either fully virtual or blend the virtual with reality and include Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR).",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "Software developer, user experience (UX) designer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "tools and technologies that support extended reality",
            "concepts used to create extended reality experiences",
            "ethics involved in extended reality"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Introduction to User Experience (UX) and Accessible Design",
        "Url": "https://www.futurelearn.com/courses/introduction-to-ux-and-accessible-design",
        "Desc": "User interfaces help people interact with their computers and devices. Find out how to make them accessible for disabled users.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["design"],
        "Certificate": "Yes",
        "Related job roles": [
            "User experience (UX) designer, user researcher, web developer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "guidance and regulations covering user interfaces",
            "CSS stylesheet language",
            "Javascript programming language",
            "how to find a career in accessible interface design"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Collaborative Working in a Remote Team",
        "Url": "https://www.futurelearn.com/courses/collaborative-working-in-a-remote-team",
        "Desc": "Find out how to work effectively and collaboratively with your remote team.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "You will learn about:",
        "Bullets": [
            "the challenges and benefits of remote working",
            "different technologies for collaboration",
            "project management tools that can help",
            "practical planning skills for remote working"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Communication and Interpersonal Skills at Work",
        "Url": "https://www.futurelearn.com/courses/communication-and-interpersonal-skills-at-work",
        "Desc": "Improve your communication skills at work.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "communication strategies for workplace collaboration",
            "how to match your communication style with your work",
            "how to have challenging conversations"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Essential Skills for Your Career Development",
        "Url": "https://www.futurelearn.com/courses/essential-skills-for-your-career-development",
        "Desc": "Discover tools to help you identify the skills you need to plan and achieve your career goals.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "use planning tools",
            "establish career goals",
            "create a professional network",
            "use your transferable skills",
            "navigate job applications and interviews"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Get Creative with People to Solve Problems",
        "Url": "https://www.futurelearn.com/courses/get-creative-with-people-to-solve-problems",
        "Desc": "Find out about human-centred design, a creative approach to problem solving. It focuses on understanding the needs of the people who have a problem in order to design appropriate solutions.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": [
            "design"
        ],
        "Certificate": "Yes",
        "Related job roles": [
            "User experience (UX) designer, product designer, any jobs that involve problem solving"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "why this method of thinking is effective",
            "how to use it",
            "how to test solutions",
            "which jobs use this process"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Wellbeing and Resilience at Work",
        "Url": "https://www.futurelearn.com/courses/wellbeing-and-resilience-at-work",
        "Desc": "The modern workplace is demanding and rapidly changing. Find out how to navigate it.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "be resilient and adaptable",
            "evaluate your strengths at work",
            "identify the value of workplace wellbeing"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Introduction to Business Management",
        "Url": "https://www.futurelearn.com/courses/introduction-to-business-management",
        "Desc": "Develop a range of business management skills relevant to the world of work.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "16 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Related job roles": [
            "Business project manager, IT project manager, other management roles"
        ],
        "Lead-in": "Learn how best to manage:",
        "Bullets": [
            "people",
            "money",
            "information",
            "yourself"
        ],
        "Studytype": "Scheduled, no instructor"
    },
    {
        "Title": "Digital Skills: Digital Skills for Work and Life",
        "Url": "https://www.futurelearn.com/courses/digital-skills-for-work-and-life",
        "Desc": "Find out how digital is changing our personal and professional lives. Develop the skills to succeed in a digital world.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "2 hours",
        "Subject": "",
        "ClassList": ["computerEssentials"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "the meaning of ‘digital’",
            "how digital is changing the ways we work and live",
            "its impact on jobs and industries",
            "the opportunities and challenges of digital",
            "how to adopt a ‘growth mindset’"
        ],
        "Studytype": "Scheduled, no instructor"
    },
    {
        "Title": "Digital Skills: Digital Marketing",
        "Url": "https://www.futurelearn.com/courses/digital-skills-digital-marketing",
        "Desc": "Find out how to grow your business or career using digital marketing.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": [
            "design"
        ],
        "Certificate": "Yes",
        "Related job roles": [
            "Digital marketer, market research data analyst, social media manager"
        ],
        "Lead-in": "Learn about these marketing techniques:",
        "Bullets": [
            "display advertising",
            "pay per click",
            "search engine optimisation (SEO)",
            "email marketing",
            "targeting customers"
        ],
        "Studytype": "Scheduled, no instructor"
    },
    {
        "Title": "Digital Skills: Mobile",
        "Url": "https://www.futurelearn.com/courses/digital-skills-mobile",
        "Desc": "Understand the importance of mobile technology in the digital world.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": [
            "design"
        ],
        "Certificate": "Yes",
        "Related job roles": [
            "App developer, user experience (UX) designer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "what is meant by ‘mobile’",
            "about the growth of mobile technology",
            "the benefits of mobile",
            "concepts to help design and build a mobile app"
        ],
        "Studytype": "Scheduled, no instructor"
    },
    {
        "Title": "Digital Skills: Web Analytics",
        "Url": "https://www.futurelearn.com/courses/digital-skills-web-analytics",
        "Desc": "Find out about the role of analytics in business and it is important.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "Data analyst-statistician, market research data analyst, entrepreneur "
        ],
        "Lead-in": "You will learn how to:",
        "Bullets": [
            "create a measurement plan",
            "measure objectives",
            "use Google Analytics"
        ],
        "Studytype": "Scheduled, no instructor"
    },
    {
        "Title": "Introduction to Conversational Interfaces",
        "Url": "https://www.futurelearn.com/courses/introduction-to-conversational-interfaces",
        "Desc": "Explore conversational interfaces, like chatbots and virtual assistants.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "User experience (UX) designer, app developer, web developer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "what conversational and voice-based interfaces are",
            "how to design and develop one",
            "the ethics of conversational and voice-based interfaces"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Introduction to Physical Computing",
        "Url": "https://www.futurelearn.com/courses/an-introduction-to-physical-computing",
        "Desc": "Explore microcontrollers, the technology used in smartphones, smartwatches and smart kettles.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "Product designer, software developer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "what physical computing is",
            "the structure of a physical computing system",
            "the ethics of physical computing",
            "careers in physical computing",
            "what the Internet of Things (IoT) is"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Programming Essentials in C",
        "Url": "bit.ly/Cisco-td_PEinC",
        "Desc": "Learn to code in C: a popular programming language commonly used in software development.   You don't need any previous programming experience or knowledge to do this course.",
        "Provider": "Cisco Networking Academy",
        "Level": "",
        "Total study time": "70 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Related job roles": [
            "Software developer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "concepts of computer programming",
            "syntax, semantics and data types of C",
            "how to write your own computer programs"
        ],
        "Studytype": "scheduled, instructor-led"
    },
    {
        "Title": "Programming Essentials in C++",
        "Url": "bit.ly/Cisco-td_PEinCpp",
        "Desc": "Learn to code in C++: a popular programming language commonly used in video games development,   You don't need any previous programming experience or knowledge to do this course.",
        "Provider": "Cisco Networking Academy",
        "Level": "",
        "Total study time": "70 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Related job roles": [
            "Video games developer, software developer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "syntax, semantics and data types of C++",
            "principles of object-oriented programming",
            "how to write in C++"
        ],
        "Studytype": "scheduled, instructor-led"
    },
    {
        "Title": "Handling Information at Work",
        "Url": "https://www.e-junkie.com/i/zvw4?&card",
        "Desc": "Develop personal and professional skills for the working environment.",
        "Provider": "Learning Curve Group",
        "Level": "",
        "Total study time": "2 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "how to handle information in the workplace",
            "how to meet your organisation’s procedures",
            "about government guidelines for handling information",
            "about penalties for not following guidelines"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Growth Mindset",
        "Url": "https://www.virtual-college.co.uk/courses/professional/personal-professional-development-growth-mindset",
        "Desc": "A growth mindset is a concept from psychology. It is the belief that you can improve your intelligence and character through learning.",
        "Provider": "Virtual college",
        "Level": "",
        "Total study time": "30 minutes",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "what a growth mindset is",
            "how to encourage a growth mindset",
            "the benefits of feedback",
            "about ‘the learning zone’ and ‘the performance zone’"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Personal and Professional Development: Resilience",
        "Url": "https://www.virtual-college.co.uk/courses/professional/personal-professional-development-resilience",
        "Desc": "Learn how to adapt and be flexible in the face of challenging circumstances, whilst maintaining a stable mental outlook.",
        "Provider": "Virtual college",
        "Level": "",
        "Total study time": "25 minutes",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "This course covers:",
        "Bullets": [
            "what resilience is",
            "what resilience is important",
            "how to improve your own resilience"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Personal Development and Self-Awareness",
        "Url": "https://www.virtual-college.co.uk/courses/professional/personal-development-self-awareness",
        "Desc": "Discover self-awareness and how it can help you develop.",
        "Provider": "Virtual college",
        "Level": "",
        "Total study time": "45 minutes",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "what self-awareness is and why it is important",
            "how to set SMART objectives",
            "action planning",
            "how to apply self-awareness"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Dealing with Stressful Situations",
        "Url": "https://www.virtual-college.co.uk/courses/professional/dealing-with-stressful-situations",
        "Desc": "Find out how to deal with stressful situations at work and in life.",
        "Provider": "Virtual college",
        "Level": "",
        "Total study time": "30 minutes",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "what stress is",
            "what triggers and responses are",
            "how people cope with stress",
            "tools and techniques for managing stress"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Neuroscience for Personal Development",
        "Url": "https://www.virtual-college.co.uk/courses/professional/neuroscience-for-personal-development",
        "Desc": "Neuroscience plays an important role in how we learn. Insights from neuroscience can help you develop learning, memory and personal development skills.",
        "Provider": "Virtual college",
        "Level": "",
        "Total study time": "20 minutes",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Find out about:",
        "Bullets": [
            "neural networks and neuroplasticity",
            "attention, memory and neurogenesis",
            "what holistic learning is",
            "the limits of learning"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "AWS Cloud Practitioner Essentials",
        "Url": "https://www.aws.training/Details/Curriculum?id=27076",
        "Desc": "The Amazon Web Services (AWS) cloud is a popular cloud computing platform, used by many large tech companies. Find out how AWS Cloud works.",
        "Provider": "Amazon Web Services",
        "Level": "",
        "Total study time": "6 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "No",
        "Related job roles": [
            "IT service engineer, project manager"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "what cloud computing is",
            "how AWS works",
            "how to interact with AWS"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Data Analytics Fundamentals",
        "Url": "https://www.aws.training/Details/eLearning?id=35364",
        "Desc": "Find out how to plan for data analysis using Amazon Web Services (AWS) and the processes you need to follow.   To get the most out of this course, you will need some understanding of databases and enterprise IT systems.",
        "Provider": "Amazon Web Services",
        "Level": "",
        "Total study time": "3.5 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "No",
        "Related job roles": [
            "Data analyst-statistician, data scientist, technical architect"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "about different data analysis solutions and when to apply them",
            "how to define different types of data",
            "how data is stored",
            "different techniques used in data analysis",
            "the difference between data and information",
            "how to use data to produce reports"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "AWS Security Fundamentals",
        "Url": "https://www.aws.training/Details/Curriculum?id=10795",
        "Desc": "Learn about cloud computing and Amazon Web Service (AWS) security concepts.",
        "Provider": "Amazon Web Services",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "No",
        "Related job roles": [
            "IT security co-ordinator, IT support technician"
        ],
        "Lead-in": "Find out about:",
        "Bullets": [
            "security benefits of AWS cloud computing",
            "how to secure sensitive information",
            "network security",
            "risk management strategies",
            "auditing AWS security infrastructure"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Become a Software Developer",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/software-developer?trk=li-jobsindemand-softwaredev-en#vmc",
        "Desc": "Collection of resources covering different skills in software development.",
        "Provider": "Microsoft and LinkedIn",
        "Level": "",
        "Total study time": "40 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Related job roles": [
            "Software developer, web developer, app developer"
        ],
        "Lead-in": "This course covers:",
        "Bullets": [
            "Databases",
            "HTML and CSS",
            "Javascript, Python and C#",
            "Microsoft technologies, like Azure and 365 developer"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Become a Sales Representative",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/sales-representative?trk=li-jobsindemand-customer-en",
        "Desc": "Collection of resources covering different skills in sales.",
        "Provider": "LinkedIn",
        "Level": "",
        "Total study time": "8 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Related job roles": [
            "Sales representative"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "develop sales strategies",
            "connect with customers",
            "negotiate",
            "handle objections",
            "close sales"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Become a Customer Service Specialist",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/customer-service?trk=li-jobsindemand-customer-en",
        "Desc": "Collection of resources covering different skills in customer service.",
        "Provider": "LinkedIn",
        "Level": "",
        "Total study time": "6 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Related job roles": [
            "Customer service assistant, banking customer service adviser"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "make customers feel valued",
            "solve problems for customers",
            "build rapport with customers",
            "handle challenging, upset or abusive customers",
            "use web chat and SMS text when supporting"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Become a Project Manager",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/project-manager?trk=li-jobsindemand-project-en",
        "Desc": "Collection of resources covering different skills in project management.",
        "Provider": "LinkedIn",
        "Level": "",
        "Total study time": "18 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Related job roles": [
            "Project manager"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "make customers feel valued",
            "solve problems for customers",
            "build rapport with customers",
            "handle challenging, upset or abusive customers",
            "use chat and text when supporting"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Become a Digital Marketing Specialist",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/digital-marketer?trk=li-jobsindemand-digital-en",
        "Desc": "Collection of resources covering different skills in digital marketing.",
        "Provider": "LinkedIn",
        "Level": "",
        "Total study time": "27 hours",
        "Subject": "",
        "ClassList": [
            "design"
        ],
        "Certificate": "Yes",
        "Related job roles": [
            "Digital marketer, market research data analyst, social media manager"
        ],
        "Lead-in": "Find out about:",
        "Bullets": [
            "Google Analytics and Google Ads",
            "Search engine optimization (SEO)",
            "Content marketing",
            "Social media marketing",
            "Email and newspaper marketing"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Become an IT Administrator",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/it-administrator?trk=li-jobsindemand-itadmin-en",
        "Desc": "Collection of resources covering different skills needed for information technology (IT) administration and networking.",
        "Provider": "Microsoft and LinkedIn",
        "Level": "",
        "Total study time": "43 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "Network engineer, network manager"
        ],
        "Lead-in": "Find out about:",
        "Bullets": [
            "computer networks",
            "internet protocols",
            "wireless, cloud and mobile networking",
            "Microsoft technologies, like Azure Administrator and 365 Administrator"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Become an IT Support Specialist",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/it-support?trk=li-jobsindemand-itsupport-en",
        "Desc": "Collection of resources covering different skills needed to work in information technology (IT) support, or on an IT helpdesk.  This prepares you for the industry recognised CompTIA A+ certification.",
        "Provider": "LinkedIn and Microsoft",
        "Level": "",
        "Total study time": "35 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "IT support technician"
        ],
        "Lead-in": "Find out about:",
        "Bullets": [
            "computer hardware",
            "CPUs and RAM",
            "computer storage",
            "monitors, graphics cards and projectors",
            "computer networks",
            "the internet and cloud computing"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Become a Financial Analyst",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/financial-analyst?trk=li-jobsindemand-financial-en",
        "Desc": "Collection of resources covering different skills in financial analysis.",
        "Provider": "LinkedIn",
        "Level": "",
        "Total study time": "18 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Related job roles": [
            "Financial analyst"
        ],
        "Lead-in": "Find out about:",
        "Bullets": [
            "strategic planning for organisations",
            "financial accounting",
            "financial modelling and forecasting",
            "using spreadsheets to track and evaluate data",
            "financial ratios and economic theories"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Become a Graphic Designer",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/graphic-designer?trk=li-jobsindemand-graphic-en",
        "Desc": "Collection of resources covering different skills in graphic design.",
        "Provider": "LinkedIn",
        "Level": "",
        "Total study time": "29 hours",
        "Subject": "",
        "ClassList": [
            "design"
        ],
        "Certificate": "Yes",
        "Related job roles": [
            "Graphic designer"
        ],
        "Lead-in": "Find out about:",
        "Bullets": [
            "layout and composition",
            "typography",
            "colour",
            "tools and software, including Photoshop"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Become a Data Analyst",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/data-analyst?trk=li-jobsindemand-data-en",
        "Desc": "Collection of resources covering different skills in data analysis.",
        "Provider": "LinkedIn and Microsoft",
        "Level": "",
        "Total study time": "30 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "Data analyst-statistician, market research data analyst"
        ],
        "Lead-in": "Find out about:",
        "Bullets": [
            "terms used to describe data",
            "statistics",
            "data visualisation",
            "tools, including Microsoft Excel and Power BI"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Cloud Computing Basics for Developers",
        "Url": "https://docs.microsoft.com/en-us/learn/paths/cmu-cloud-developer-basics/",
        "Desc": "Find out about the basics of cloud computing and Microsoft  Azure.",
        "Provider": "Microsoft and Carnegie Mellon University",
        "Level": "",
        "Total study time": "7 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "No",
        "Related job roles": [
            "Software developer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "the history of cloud computing",
            "major cloud providers and types",
            "what resources are available through the cloud",
            "economic benefits of cloud computing",
            "data centres",
            "how to build apps using the cloud"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Take your first steps with C#",
        "Url": "https://docs.microsoft.com/en-gb/learn/paths/csharp-first-steps/",
        "Desc": "Find out about how to build simple applications using C#, a popular programming language.",
        "Provider": "Microsoft",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "No",
        "Related job roles": [
            "Software developer"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "write in C#",
            "store and manipulate data",
            "execute functions from code libraries",
            "add logic to your code"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Azure Fundamentals",
        "Url": "https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/",
        "Desc": "Find out about Azure, a popular cloud computing service.",
        "Provider": "Microsoft",
        "Level": "",
        "Total study time": "10 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "No",
        "Related job roles": [
            "Software developer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "concepts from cloud computing",
            "the benefits of cloud computing in Azure",
            "strategies for transitioning to Azure",
            "about services available in Azure"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Accessibility Fundamentals",
        "Url": "https://docs.microsoft.com/en-gb/learn/paths/accessibility-fundamentals/",
        "Desc": "Learn how to make accessible content and use accessibility features in popular Microsoft products.",
        "Provider": "Microsoft",
        "Level": "",
        "Total study time": "3 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "No",
        "Related job roles": [
            "App developer, software developer, user experience (UX) designer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "what accessibility is",
            "about accessibility features in Microsoft products",
            "how to make accessible content for the web and mobile apps"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Introduction to indie games",
        "Url": "https://www.futurelearn.com/courses/introduction-to-indie-games/1",
        "Desc": "Find out about the thriving independent games sector and how to launch a career in it.",
        "Provider": "FutureLearn",
        "Level": "",
        "Total study time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "Computer games developer, product designer"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "about the culture of indie games",
            "why indie games matter",
            "how to pitch a game idea",
            "roles and skills in indie games",
            "where the industry is heading"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Entrepreneurship – from ideas to reality",
        "Url": "https://www.open.edu/openlearn/money-business/entrepreneurship-ideas-reality/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=entrepreneurship",
        "Desc": "Find out how to set up and run your own business.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Related job roles": [
            "Entrepreneur"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "develop and refine a business idea",
            "identify gaps in resources and capabilities",
            "create a business plan",
            "pitch an idea"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Digital skills: succeeding in a digital world",
        "Url": "https://www.open.edu/openlearn/education-development/digital-skills-succeeding-digital-world/content-section-overview?active-tab=description-tab",
        "Desc": "Find out how to use digital technology safely and critically.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "",
        "ClassList": ["computerEssentials"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "be confident about your online identity",
            "choose and use the best online tool for a task",
            "use technology confidently and critically",
            "identify digital skills to develop further"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Digital thinking tools for better decision-making",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/digital-thinking-tools-better-decision-making/content-section-overview?active-tab=description-tab?utm_source=ncs&utm_campaign=ol&utm_medium=digital-thinking-tools",
        "Desc": "Find out how digital thinking tools, like Google Search, help us solve problems and make decisions. Then apply those tools to practical issues.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "use digital thinking tools",
            "describe how digital tools help us",
            "discuss the future of digital tools and artificial intelligence"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Returning to Science, Technology, Engineering or Mathematics (STEM)",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/returning-stem/content-section-overview?active-tab=description-tab",
        "Desc": "Find out how to return to STEM after taking a break.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most STEM jobs"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "find STEM jobs online",
            "be visible to employers online",
            "create an action plan and CV",
            "identify mentors and networking opportunities",
            "understand work-life balance and flexible working"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Numbers, units and arithmetic",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/mathematics-statistics/numbers-units-and-arithmetic/content-section-0?active-tab=description-tab",
        "Desc": "Learn the basics of working with positive and negative numbers and how to multiply and divide with fractions and decimals.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "5 hours",
        "Subject": "",
        "ClassList": ["maths"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Find out about:",
        "Bullets": [
            "whole numbers and decimals",
            "multiplication and division",
            "fractions",
            "the best units for a task"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Developing career resilience",
        "Url": "https://www.open.edu/openlearn/money-business/developing-career-resilience/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=career-resilience",
        "Desc": "Find out how to take control of your career and deal with the challenges it can bring.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "identify strengths of resilient people",
            "recognise the strengths you already have",
            "understand changing trends in the job market",
            "identify tactics for goal setting",
            "overcome setbacks"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Personal branding for career success",
        "Url": "https://www.open.edu/openlearn/money-business/personal-branding-career-success/content-section-overview?active-tab=description-tab",
        "Desc": "Find out how to present yourself to employers and enhance your profile at work.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "apply marketing techniques to yourself ",
            "define your own brand",
            "promote yourself to employers",
            "devise a plan for your brand and career"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Leadership and followership",
        "Url": "https://www.open.edu/openlearn/education-development/learning/leadership-and-followership/content-section-overview?active-tab=description-tab",
        "Desc": "Find out what makes a good leader and to improve your leadership skills.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "analyse leadership styles and approaches",
            "recognise leadership skills",
            "define followership",
            "overcome common challenges with leadership",
            "develop your leadership skills"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Working in diverse teams",
        "Url": "https://www.open.edu/openlearn/money-business/working-diverse-teams/content-section-overview?active-tab=description-tab",
        "Desc": "Learn about the benefits and challenges of teamwork, and how to articulate these to an employer.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Find out about:",
        "Bullets": [
            "the value of team working for employers",
            "different team roles",
            "different stages of team development",
            "the benefits of team diversity",
            "how a virtual team differs from other teams"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Exploring career mentoring and coaching",
        "Url": "https://www.open.edu/openlearn/money-business/exploring-career-mentoring-and-coaching/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=mentoring-coaching",
        "Desc": "Find out what mentors and career coaches do and how to become one.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "You will learn:",
        "Bullets": [
            "the difference between mentoring and career coaching",
            "the importance of self-awareness",
            "how to choose a mentor or coach",
            "how to become a mentor or coach"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Effective communication in the workplace",
        "Url": "https://www.open.edu/openlearn/money-business/effective-communication-the-workplace/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=communication",
        "Desc": "Learn about the importance of communication in the workplace and how to improve your communication skills.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Find out about:",
        "Bullets": [
            "different types of communication",
            "the skills required for effective communication",
            "the impact that communication can have",
            "how effective communication can overcome challenges in the workplace"
        ],
        "Studytype": "Self-paced"
    },
    {
        "Title": "Internships and other work experiences",
        "Url": "https://www.open.edu/openlearn/money-business/internships-and-other-work-experiences/content-section-overview?active-tab=description-tab",
        "Desc": "Find out about internships and work experience, and the experience they can provide.",
        "Provider": "The Open University",
        "Level": "",
        "Total study time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Related job roles": [
            "Useful for most jobs"
        ],
        "Lead-in": "Learn how to:",
        "Bullets": [
            "identify different types of internship and work experience opportunities",
            "build on existing skills through an internship or work experience",
            "define personal goals for an internship or work experience opportunity",
            "build a personal brand"
        ],
        "Studytype": "Self-paced"
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
                        <li class="govuk-body  govuk-!-margin-bottom-4  course govuk-!-padding-2">
                        
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
                            <div class="govuk-!-margin-bottom-1 govuk-!-font-size-16"><span class="govuk-!-font-weight-bold">Cost : </span>Free</div>
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
