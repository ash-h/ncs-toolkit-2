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
        "Time": "Under 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "No",
        "Roles": ["Useful for most jobs"],
        "Lead": "Learn things like:",
        "Bullets": ["how to use your computer or device" , "find a job online","use public service","use office programs like Microsoft Word or Excel"],
        "Type": "Self-paced"
    },
    {
        "Title": "Make It Click",
        "Url": "https://makeitclick.learnmyway.com/directory/search/?utm_source=skillstoolkit&utm_medium=website&utm_campaign=gov.uk",
        "Desc": "",
        "Provider": "Good Things Foundation",
        "Level": "",
        "Time": "Under 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "No",
        "Roles": ["Useful for most jobs"],
        "Lead": "Over 150 resources to help things such as:",
        "Bullets": ["sending emails","creating a CV","editing photos","advice for working from home"],
        "Type": "Self-paced"
    },
    {
        "Title": "Get the best out of Microsoft Outlook",
        "Url": "https://support.office.com/en-gb/article/outlook-training-8a5b816d-9052-4190-a5eb-494512343cca?ui=en-US&rs=en-GB&ad=GB?utm_source=skillstoolkit&utm_medium=website&utm_campaign=gov.uk",
        "Desc": "Learn how to use Microsoft Outlook, an email program used in the workplace.",
        "Provider": "Microsoft",
        "Level": "",
        "Time": "Under 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "No",
        "Roles": ["office administrator and other office roles"],
        "Lead": "Find out how to do things like:",
        "Bullets": ["send an email","book a meeting","manage your calendar","organise a to-do list"],
        "Type": "Self-paced"
    },
    {
        "Title": "Learn For Everyday Life",
        "Url": "https://www.lloydsbankacademy.co.uk/course-selection/?utm_source=gov_website&utm_medium=affiliate&utm_campaign=national_careers_service",
        "Desc": "",
        "Provider": "Lloyds Bank",
        "Level": "",
        "Time": "Under 4 hours",
        "Subject": "Computer essentials",
        "ClassList": ["computerEssentials"],
        "Certificate": "No",
        "Roles": ["Useful for most jobs"],
        "Lead": "Over 30 resources to help with things like:",
        "Bullets": ["staying safe online","using office programs, like Microsoft Word","working with digital devices","improving your CV"],
        "Type": "Self-paced"
    },
    {
        "Title": "Everyday Maths",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/everyday-maths-1/content-section-overview?active-tab=description-tab&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Maths skills to help with work and everyday life.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "48 hours",
        "Subject": "Practical maths",
        "ClassList": ["maths"],
        "Certificate": "Yes",
        "Roles": ["Office administration, bookkeeper, payroll administrator"],
        "Lead": "This course covers:",
        "Bullets": ["fractions","decimals","percentages","how to read diagrams and charts"],
        "Type": "Self-paced"
    },
    {
        "Title": "Introduction to Bookkeeping",
        "Url": "https://www.open.edu/openlearn/money-business/introduction-bookkeeping-and-accounting/content-section-0?utm_source=ncs&utm_campaign=ol&utm_medium=bookkeeping",
        "Desc": "Introduction to the essential skills and concepts of bookkeeping and accounting.",
        "Provider": "The Open University",
        "Level": "Introductory",
        "Time": "8 hours",
        "Subject": "Practical maths  Business and marketing",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Roles": ["Bookkeeper, accountant"],
        "Lead": "This course covers:",
        "Bullets": ["double-entry bookkeeping","how to prepare a trial balance","balance sheet","profit and loss accounts"],
        "Type": "Self-paced"
    },
    {
        "Title": "Organisational financial management: an introduction",
        "Url": "https://finance.corndel.com/?utm_source=ncs&utm_campaign=ol&utm_medium=everydaymaths",
        "Desc": "Learn the skills needed to manage the finances of a business or organisation.",
        "Provider": "Corndel",
        "Level": "",
        "Time": "40 hours",
        "Subject": "Practical maths  Business and marketing",
        "ClassList": ["business"],
        "Certificate": "No",
        "Roles": ["Finance officer, business manager"],
        "Lead": "This course covers:",
        "Bullets": ["central accounting statements","analysing financial data","managing a budget for a team or department","budget variances"],
        "Type": "Self-paced"
    },
    {
        "Title": "Create a Professional Online Presence",
        "Url": "https://www.futurelearn.com/courses/create-a-professional-online-presence?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "How to present yourself professionally online.",
        "Provider": "FutureLearn",
        "Level": "Intermediate",
        "Time": "4 hours",
        "Subject": "Workplace essentials",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": ["Useful for most jobs"],
        "Lead": "Find out about:",
        "Bullets": ["different social media platforms","how online behaviour can impact your professional reputation","safety and privacy online"],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "Thriving in the Digital Workplace",
        "Url": "https://www.futurelearn.com/programs/thriving-in-the-digital-workplace?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Build the skills you need to use digital technology in the workplace, using real life case studies.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "12 hours",
        "Subject": "Workplace essentials",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": ["Useful for most jobs"],
        "Lead": "In this course, you will:",
        "Bullets": ["Identify the digital trends in the workplace","Explore skills and techniques for developing your career","Develop techniques to enhance wellbeing and resilience at work"],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "How to Create Great Online Content",
        "Url": "https://www.futurelearn.com/courses/how-to-create-great-online-content?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Url": "https://www.futurelearn.com/courses/presenting-your-work-with-impact?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Url": "https://www.futurelearn.com/courses/digital-skills-social-media?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Lead": "Find how to advertise using:",
        "Bullets": ["search engine optimization (SEO)","social media","email","content","data insights"],
        "Type": "Self-paced"
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
        "Type": "Self-paced"
    },
    {
        "Title": "Learn to Code for Data Analysis",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/learn-code-data-analysis/content-section-overview-0?utm_source=ncs&utm_campaign=ol&utm_medium=learntocode",
        "Desc": "Learn programming to analyse and visualise open data. Visualising data helps show patterns and trends.  You will learn to code in Python during this course. You do not need any prior coding knowledge.",
        "Provider": "The Open University",
        "Level": "Advanced",
        "Time": "24 hours",
        "Subject": "Coding and computer science",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Roles": ["Data analyst-statistician, market research data analyst"],
        "Lead": "Find out how to:",
        "Bullets": ["access open data","clean and analyse data using code","produce visualisations","present your analyses"],
        "Type": "Self-paced"
    },
    {
        "Title": "Programming Essentials in Python",
        "Url": "bit.ly/Cisco-td_PEinP",
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
        "Type": "Self-paced"
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
        "Type": "Self-paced"
    },
    {
        "Title": "Understand the Basics of Code",
        "Url": "https://learndigital.withgoogle.com/digitalgarage/course/basics-code?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Learn what code is and why understanding it is useful.",
        "Provider": "Google Digital Garage",
        "Level": "",
        "Time": "1 hour",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "No",
        "Roles": [
            "Useful for most technology jobs"
        ],
        "Lead": "Find out:",
        "Bullets": [
            "how code works",
            "why so many coding languages exist",
            "which coding languages are suited to specific tasks"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Business and customer awareness",
        "Url": "https://www.e-junkie.com/i/zvw1?&card&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "",
        "Provider": "Learning Curve Group Limited",
        "Level": "",
        "Time": "Under 2 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": ["Useful for most jobs"],
        "Lead": "Learn how to:",
        "Bullets": [
            "find local job opportunities",
            "identify the skills needed for a job",
            "write a CV",
            "apply for a job",
            "prepare for a job interview"
        ],
        "Type": "Self-paced"
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
            "Business manager"
        ],
        "Lead": "Learn to manage a team project and how to:",
        "Bullets": [
            "plan a team project",
            "track its progress and costs",
            "prepare a summary report"
        ],
        "Type": "Self-paced"
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
            "Useful for most jobs"
        ],
        "Lead": "Find out how to:",
        "Bullets": [
            "hold a team meeting",
            "collect feedback",
            "create and share a proposal",
            "present information to an audience"
        ],
        "Type": "Self-paced"
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
            "make recommendations using data",
            "consider the ethics of machine learning"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Digital Skills: Artificial Intelligence",
        "Url": "https://www.futurelearn.com/courses/artificial-intelligence?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Lead": "Learn about artificial intelligence's:",
        "Bullets": [
            "the past, present and future",
            "potential in the workplace",
            "working relationship with humans",
            "predicted skills and ones needed to work with AI"
        ],
        "Type": "scheduled, no instructor"
    },
    {
        "Title": "Introduction to Creative Artificial Intelligence (AI)",
        "Url": "https://www.futurelearn.com/courses/introduction-to-creative-ai?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Type": "Self-paced"
    },
    {
        "Title": "Computer Programming for Everyone",
        "Url": "https://www.futurelearn.com/courses/computer-programming-for-everyone?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Type": "Self-paced"
    },
    {
        "Title": "Creating a Great User Experience for Mobile Apps",
        "Url": "https://www.futurelearn.com/courses/creating-a-great-user-experience-for-mobile-apps?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Type": "Self-paced"
    },
    {
        "Title": "Learn to Code for the Web",
        "Url": "https://www.futurelearn.com/courses/learn-to-code-for-the-web?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Lead": "Learn about these coding languages:",
        "Bullets": [
            "HTML",
            "CSS",
            "Javascript"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "IT Ethics: Professionalism and Ethics in Computing",
        "Url": "https://www.futurelearn.com/courses/information-technology-ethics?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Learn why ethics matter to computing professionals. Computer ethics is one of the fastest growing areas of interest within IT related industries. A good understanding of this field is valued by employers.",
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
            "to mitigate against ethical risks",
            "to improve your decision making"
        ],
        "Type": "scheduled, no instructor"
    },
    {
        "Title": "Introduction to Virtual, Augmented and Mixed Reality",
        "Url": "https://www.futurelearn.com/courses/introduction-to-virtual-reality?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "There are immersive technologies known collectively as Extended Reality (XR). They either fully virtual or blend the virtual with reality and include Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR).",
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
        "Type": "Self-paced"
    },
    {
        "Title": "Introduction to User Experience (UX) and Accessible Design",
        "Url": "https://www.futurelearn.com/courses/introduction-to-ux-and-accessible-design?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
            "CSS stylesheet language",
            "Javascript programming language",
            "how to find a career in accessible interface design"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Collaborative Working in a Remote Team",
        "Url": "https://www.futurelearn.com/courses/collaborative-working-in-a-remote-team?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out how to work effectively and collaboratively with your remote team.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
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
        "Url": "https://www.futurelearn.com/courses/communication-and-interpersonal-skills-at-work?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Improve your communication skills at work.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
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
        "Url": "https://www.futurelearn.com/courses/essential-skills-for-your-career-development?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Discover tools to help you identify the skills you need to plan and achieve your career goals.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
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
        "Url": "https://www.futurelearn.com/courses/get-creative-with-people-to-solve-problems?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Url": "https://www.futurelearn.com/courses/wellbeing-and-resilience-at-work?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
            "Useful for most jobs"
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
        "Url": "https://www.futurelearn.com/courses/introduction-to-business-management?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Url": "https://www.futurelearn.com/courses/digital-skills-for-work-and-life?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out how digital is changing our personal and professional lives. Develop the skills to succeed in a digital world.",
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
        "Url": "https://www.futurelearn.com/courses/digital-skills-digital-marketing?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Lead": "Learn about these marketing techniques:",
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
        "Url": "https://www.futurelearn.com/courses/digital-skills-mobile?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
            "what is meant by ‘mobile’",
            "about the growth of mobile technology",
            "the benefits of mobile",
            "concepts to help design and build a mobile app"
        ],
        "Type": "Scheduled, no instructor"
    },
    {
        "Title": "Digital Skills: Web Analytics",
        "Url": "https://www.futurelearn.com/courses/digital-skills-web-analytics?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out about the role of analytics in business and it is important.",
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
        "Url": "https://www.futurelearn.com/courses/introduction-to-conversational-interfaces?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Url": "https://www.futurelearn.com/courses/an-introduction-to-physical-computing?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
        "Url": "bit.ly/Cisco-td_PEinC",
        "Desc": "Learn to code in C: a popular programming language commonly used in software development.   You don't need any previous programming experience or knowledge to do this course.",
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
        "Url": "bit.ly/Cisco-td_PEinCpp",
        "Desc": "Learn to code in C++: a popular programming language commonly used in video games development,   You don't need any previous programming experience or knowledge to do this course.",
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
        "Title": "Handling Information at Work",
        "Url": "https://www.e-junkie.com/i/zvw4?&card&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Develop personal and professional skills for the working environment.",
        "Provider": "Learning Curve Group",
        "Level": "",
        "Time": "2 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
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
        "Url": "https://www.virtual-college.co.uk/courses/professional/personal-professional-development-growth-mindset?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
            "Useful for most jobs"
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
        "Url": "https://www.virtual-college.co.uk/courses/professional/personal-professional-development-resilience?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
            "Useful for most jobs"
        ],
        "Lead": "This course covers:",
        "Bullets": [
            "what resilience is",
            "what resilience is important",
            "how to improve your own resilience"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Personal Development and Self-Awareness",
        "Url": "https://www.virtual-college.co.uk/courses/professional/personal-development-self-awareness?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
            "Useful for most jobs"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "what self-awareness is and why it is important",
            "how to set SMART objectives",
            "action planning",
            "how to apply self-awareness"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Dealing with Stressful Situations",
        "Url": "https://www.virtual-college.co.uk/courses/professional/dealing-with-stressful-situations?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
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
            "Useful for most jobs"
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
        "Url": "https://www.virtual-college.co.uk/courses/professional/neuroscience-for-personal-development?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Neuroscience plays an important role in how we learn. Insights from neuroscience can help you develop learning, memory and personal development skills.",
        "Provider": "Virtual college",
        "Level": "",
        "Time": "20 minutes",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "neural networks and neuroplasticity",
            "attention, memory and neurogenesis",
            "what holistic learning is",
            "the limits of learning"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "AWS Cloud Practitioner Essentials",
        "Url": "https://www.aws.training/Details/Curriculum?id=27076&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "The Amazon Web Services (AWS) cloud is a popular cloud computing platform, used by many large tech companies. Find out how AWS Cloud works.",
        "Provider": "Amazon Web Services",
        "Level": "",
        "Time": "6 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "No",
        "Roles": [
            "IT service engineer, project manager"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "what cloud computing is",
            "how AWS works",
            "how to interact with AWS"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Data Analytics Fundamentals",
        "Url": "https://www.aws.training/Details/eLearning?id=35364&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out how to plan for data analysis using Amazon Web Services (AWS) and the processes you need to follow.   To get the most out of this course, you will need some understanding of databases and enterprise IT systems.",
        "Provider": "Amazon Web Services",
        "Level": "",
        "Time": "3.5 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "No",
        "Roles": [
            "Data analyst-statistician, data scientist, technical architect"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "about different data analysis solutions and when to apply them",
            "how to define different types of data",
            "how data is stored",
            "different techniques used in data analysis",
            "the difference between data and information",
            "how to use data to produce reports"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "AWS Security Fundamentals",
        "Url": "https://www.aws.training/Details/Curriculum?id=10795&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Learn about cloud computing and Amazon Web Service (AWS) security concepts.",
        "Provider": "Amazon Web Services",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "No",
        "Roles": [
            "IT security co-ordinator, IT support technician"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "security benefits of AWS cloud computing",
            "how to secure sensitive information",
            "network security",
            "risk management strategies",
            "auditing AWS security infrastructure"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Become a Software Developer",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/software-developer?trk=li-jobsindemand-softwaredev-en&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit#vmc",
        "Desc": "Collection of resources covering different skills in software development.",
        "Provider": "Microsoft and LinkedIn",
        "Level": "",
        "Time": "40 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "Yes",
        "Roles": [
            "Software developer, web developer, app developer"
        ],
        "Lead": "This course covers:",
        "Bullets": [
            "Databases",
            "HTML and CSS",
            "Javascript, Python and C#",
            "Microsoft technologies, like Azure and 365 developer"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Become a Sales Representative",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/sales-representative?trk=li-jobsindemand-customer-en&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Collection of resources covering different skills in sales.",
        "Provider": "LinkedIn",
        "Level": "",
        "Time": "8 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Roles": [
            "Sales representative"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "develop sales strategies",
            "connect with customers",
            "negotiate",
            "handle objections",
            "close sales"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Become a Customer Service Specialist",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/customer-service?trk=li-jobsindemand-customer-en&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Collection of resources covering different skills in customer service.",
        "Provider": "LinkedIn",
        "Level": "",
        "Time": "6 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Roles": [
            "Customer service assistant, banking customer service adviser"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "make customers feel valued",
            "solve problems for customers",
            "build rapport with customers",
            "handle challenging, upset or abusive customers",
            "use web chat and SMS text when supporting"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Become a Project Manager",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/project-manager?trk=li-jobsindemand-project-en&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Collection of resources covering different skills in project management.",
        "Provider": "LinkedIn",
        "Level": "",
        "Time": "18 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Roles": [
            "Project manager"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "make customers feel valued",
            "solve problems for customers",
            "build rapport with customers",
            "handle challenging, upset or abusive customers",
            "use chat and text when supporting"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Become a Digital Marketing Specialist",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/digital-marketer?trk=li-jobsindemand-digital-en&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Collection of resources covering different skills in digital marketing.",
        "Provider": "LinkedIn",
        "Level": "",
        "Time": "27 hours",
        "Subject": "",
        "ClassList": [
            "design"
        ],
        "Certificate": "Yes",
        "Roles": [
            "Digital marketer, market research data analyst, social media manager"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "Google Analytics and Google Ads",
            "Search engine optimization (SEO)",
            "Content marketing",
            "Social media marketing",
            "Email and newspaper marketing"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Become an IT Administrator",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/it-administrator?trk=li-jobsindemand-itadmin-en&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Collection of resources covering different skills needed for information technology (IT) administration and networking.",
        "Provider": "Microsoft and LinkedIn",
        "Level": "",
        "Time": "43 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "Network engineer, network manager"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "computer networks",
            "internet protocols",
            "wireless, cloud and mobile networking",
            "Microsoft technologies, like Azure Administrator and 365 Administrator"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Become an IT Support Specialist",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/it-support?trk=li-jobsindemand-itsupport-en&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Collection of resources covering different skills needed to work in information technology (IT) support, or on an IT helpdesk.  This prepares you for the industry recognised CompTIA A+ certification.",
        "Provider": "LinkedIn and Microsoft",
        "Level": "",
        "Time": "35 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "IT support technician"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "computer hardware",
            "CPUs and RAM",
            "computer storage",
            "monitors, graphics cards and projectors",
            "computer networks",
            "the internet and cloud computing"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Become a Financial Analyst",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/financial-analyst?trk=li-jobsindemand-financial-en&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Collection of resources covering different skills in financial analysis.",
        "Provider": "LinkedIn",
        "Level": "",
        "Time": "18 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Roles": [
            "Financial analyst"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "strategic planning for organisations",
            "financial accounting",
            "financial modelling and forecasting",
            "using spreadsheets to track and evaluate data",
            "financial ratios and economic theories"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Become a Graphic Designer",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/graphic-designer?trk=li-jobsindemand-graphic-en&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Collection of resources covering different skills in graphic design.",
        "Provider": "LinkedIn",
        "Level": "",
        "Time": "29 hours",
        "Subject": "",
        "ClassList": [
            "design"
        ],
        "Certificate": "Yes",
        "Roles": [
            "Graphic designer"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "layout and composition",
            "typography",
            "colour",
            "tools and software, including Photoshop"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Become a Data Analyst",
        "Url": "https://opportunity.linkedin.com/skills-for-in-demand-jobs/data-analyst?trk=li-jobsindemand-data-en&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Collection of resources covering different skills in data analysis.",
        "Provider": "LinkedIn and Microsoft",
        "Level": "",
        "Time": "30 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "Data analyst-statistician, market research data analyst"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "terms used to describe data",
            "statistics",
            "data visualisation",
            "tools, including Microsoft Excel and Power BI"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Cloud Computing Basics for Developers",
        "Url": "https://docs.microsoft.com/en-us/learn/paths/cmu-cloud-developer-basics/?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out about the basics of cloud computing and Microsoft  Azure.",
        "Provider": "Microsoft and Carnegie Mellon University",
        "Level": "",
        "Time": "7 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "No",
        "Roles": [
            "Software developer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "the history of cloud computing",
            "major cloud providers and types",
            "what resources are available through the cloud",
            "economic benefits of cloud computing",
            "data centres",
            "how to build apps using the cloud"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Take your first steps with C#",
        "Url": "https://docs.microsoft.com/en-gb/learn/paths/csharp-first-steps/?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out about how to build simple applications using C#, a popular programming language.",
        "Provider": "Microsoft",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["coding"],
        "Certificate": "No",
        "Roles": [
            "Software developer"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "write in C#",
            "store and manipulate data",
            "execute functions from code libraries",
            "add logic to your code"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Azure Fundamentals",
        "Url": "https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out about Azure, a popular cloud computing service.",
        "Provider": "Microsoft",
        "Level": "",
        "Time": "10 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "No",
        "Roles": [
            "Software developer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "concepts from cloud computing",
            "the benefits of cloud computing in Azure",
            "strategies for transitioning to Azure",
            "about services available in Azure"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Accessibility Fundamentals",
        "Url": "https://docs.microsoft.com/en-gb/learn/paths/accessibility-fundamentals/?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Learn how to make accessible content and use accessibility features in popular Microsoft products.",
        "Provider": "Microsoft",
        "Level": "",
        "Time": "3 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "No",
        "Roles": [
            "App developer, software developer, user experience (UX) designer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "what accessibility is",
            "about accessibility features in Microsoft products",
            "how to make accessible content for the web and mobile apps"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Introduction to indie games",
        "Url": "https://www.futurelearn.com/courses/introduction-to-indie-games/1?utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out about the thriving independent games sector and how to launch a career in it.",
        "Provider": "FutureLearn",
        "Level": "",
        "Time": "4 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "Computer games developer, product designer"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "about the culture of indie games",
            "why indie games matter",
            "how to pitch a game idea",
            "roles and skills in indie games",
            "where the industry is heading"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Entrepreneurship – from ideas to reality",
        "Url": "https://www.open.edu/openlearn/money-business/entrepreneurship-ideas-reality/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=entrepreneurship",
        "Desc": "Find out how to set up and run your own business.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "",
        "ClassList": ["business"],
        "Certificate": "Yes",
        "Roles": [
            "Entrepreneur"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "develop and refine a business idea",
            "identify gaps in resources and capabilities",
            "create a business plan",
            "pitch an idea"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Digital skills: succeeding in a digital world",
        "Url": "https://www.open.edu/openlearn/education-development/digital-skills-succeeding-digital-world/content-section-overview?active-tab=description-tab&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out how to use digital technology safely and critically.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "",
        "ClassList": ["computerEssentials"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "be confident about your online identity",
            "choose and use the best online tool for a task",
            "use technology confidently and critically",
            "identify digital skills to develop further"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Digital thinking tools for better decision-making",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/digital-thinking-tools-better-decision-making/content-section-overview?active-tab=description-tab?utm_source=ncs&utm_campaign=ol&utm_medium=digital-thinking-tools",
        "Desc": "Find out how digital thinking tools, like Google Search, help us solve problems and make decisions. Then apply those tools to practical issues.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "",
        "ClassList": ["computerScience"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "use digital thinking tools",
            "describe how digital tools help us",
            "discuss the future of digital tools and artificial intelligence"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Returning to Science, Technology, Engineering or Mathematics (STEM)",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/returning-stem/content-section-overview?active-tab=description-tab&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out how to return to STEM after taking a break.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most STEM jobs"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "find STEM jobs online",
            "be visible to employers online",
            "create an action plan and CV",
            "identify mentors and networking opportunities",
            "understand work-life balance and flexible working"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Numbers, units and arithmetic",
        "Url": "https://www.open.edu/openlearn/science-maths-technology/mathematics-statistics/numbers-units-and-arithmetic/content-section-0?active-tab=description-tab&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Learn the basics of working with positive and negative numbers and how to multiply and divide with fractions and decimals.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "5 hours",
        "Subject": "",
        "ClassList": ["maths"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "whole numbers and decimals",
            "multiplication and division",
            "fractions",
            "the best units for a task"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Developing career resilience",
        "Url": "https://www.open.edu/openlearn/money-business/developing-career-resilience/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=career-resilience",
        "Desc": "Find out how to take control of your career and deal with the challenges it can bring.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "",
        "ClassList": [
            "personal"
        ],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "identify strengths of resilient people",
            "recognise the strengths you already have",
            "understand changing trends in the job market",
            "identify tactics for goal setting",
            "overcome setbacks"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Personal branding for career success",
        "Url": "https://www.open.edu/openlearn/money-business/personal-branding-career-success/content-section-overview?active-tab=description-tab&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out how to present yourself to employers and enhance your profile at work.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "apply marketing techniques to yourself ",
            "define your own brand",
            "promote yourself to employers",
            "devise a plan for your brand and career"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Leadership and followership",
        "Url": "https://www.open.edu/openlearn/education-development/learning/leadership-and-followership/content-section-overview?active-tab=description-tab&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out what makes a good leader and to improve your leadership skills.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "analyse leadership styles and approaches",
            "recognise leadership skills",
            "define followership",
            "overcome common challenges with leadership",
            "develop your leadership skills"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Working in diverse teams",
        "Url": "https://www.open.edu/openlearn/money-business/working-diverse-teams/content-section-overview?active-tab=description-tab&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Learn about the benefits and challenges of teamwork, and how to articulate these to an employer.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "the value of team working for employers",
            "different team roles",
            "different stages of team development",
            "the benefits of team diversity",
            "how a virtual team differs from other teams"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Exploring career mentoring and coaching",
        "Url": "https://www.open.edu/openlearn/money-business/exploring-career-mentoring-and-coaching/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=mentoring-coaching",
        "Desc": "Find out what mentors and career coaches do and how to become one.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
        ],
        "Lead": "You will learn:",
        "Bullets": [
            "the difference between mentoring and career coaching",
            "the importance of self-awareness",
            "how to choose a mentor or coach",
            "how to become a mentor or coach"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Effective communication in the workplace",
        "Url": "https://www.open.edu/openlearn/money-business/effective-communication-the-workplace/content-section-overview?utm_source=ncs&utm_campaign=ol&utm_medium=communication",
        "Desc": "Learn about the importance of communication in the workplace and how to improve your communication skills.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
        ],
        "Lead": "Find out about:",
        "Bullets": [
            "different types of communication",
            "the skills required for effective communication",
            "the impact that communication can have",
            "how effective communication can overcome challenges in the workplace"
        ],
        "Type": "Self-paced"
    },
    {
        "Title": "Internships and other work experiences",
        "Url": "https://www.open.edu/openlearn/money-business/internships-and-other-work-experiences/content-section-overview?active-tab=description-tab&utm_source=nationalcareers.service.gov.uk&utm_medium=referral&utm_campaign=skillstoolkit",
        "Desc": "Find out about internships and work experience, and the experience they can provide.",
        "Provider": "The Open University",
        "Level": "",
        "Time": "24 hours",
        "Subject": "",
        "ClassList": ["professional"],
        "Certificate": "Yes",
        "Roles": [
            "Useful for most jobs"
        ],
        "Lead": "Learn how to:",
        "Bullets": [
            "identify different types of internship and work experience opportunities",
            "build on existing skills through an internship or work experience",
            "define personal goals for an internship or work experience opportunity",
            "build a personal brand"
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
