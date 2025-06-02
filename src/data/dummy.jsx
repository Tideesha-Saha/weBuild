export default {
  firstName: 'Rajesh',
  lastName: 'Sharma',
  jobTitle: 'Full Stack Developer',
  address: 'MG Road, Bangalore, Karnataka',
  phone: '+91 12345 67890',
  email: 'rajesh.sharma@email.com',
  themeColor: "#1E40AF",
  summary: 'Experienced Full Stack Developer with expertise in developing scalable web applications using React and Node.js. Passionate about building user-centric products and optimizing performance across platforms.',
  experience: [
    {
      id: 1,
      title: 'Full Stack Developer',
      companyName: 'Company 1',
      city: 'Bangalore',
      state: 'Karnataka',
      startDate: 'Jan 2021',
      endDate: '',
      currentlyWorking: true,
      worksummary:
        'Designed, developed, and maintained full-stack applications using React and Node.js.\n' +
        '• Implemented responsive user interfaces with React, ensuring seamless user experiences across\n' +
        'various devices and browsers.\n' +
        '• Maintained React Native applications for internal projects.\n' +
        '• Created RESTful APIs with Node.js and Express to facilitate data communication between front-end\n' +
        'and back-end systems.'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      companyName: 'Company 2',
      city: 'Pune',
      state: 'Maharashtra',
      startDate: 'May 2019',
      endDate: 'Dec 2020',
      currentlyWorking: false,
      worksummary:
        'Developed and maintained scalable frontend applications using React.\n' +
        '• Ensured cross-browser compatibility and responsive design.\n' +
        '• Collaborated with backend teams to integrate APIs and improve performance.\n' +
        '• Contributed to React Native mobile app development.'
    }
  ],
  education: [
    {
      id: 1,
      universityName: 'College 1',
      startDate: 'Aug 2017',
      endDate: 'May 2019',
      degree: 'Master of Technology',
      major: 'Computer Science and Engineering',
      description:
        'Specialized in software engineering and full stack web development. Coursework included data structures, algorithms, distributed systems, and cloud computing.'
    },
    {
      id: 2,
      universityName: 'College 2',
      startDate: 'Aug 2013',
      endDate: 'May 2017',
      degree: 'Bachelor of Science',
      major: 'Computer Science',
      description:
        'Focused on core computer science subjects and programming fundamentals. Active member of the coding club.'
    }
  ],
  skills: [
    {
      id: 1,
      name: 'Angular',
      rating: 80,
    },
    {
      id: 2,
      name: 'React',
      rating: 100,
    },
    {
      id: 3,
      name: 'MySQL',
      rating: 80,
    },
    {
      id: 4,
      name: 'React Native',
      rating: 100,
    }
  ]
}
