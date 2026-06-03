// Sample Data Import Script for Learning Management App
// Run via: sf apex run --file scripts/sample-data.apex

// ============================================================
// 1. Insert Students
// ============================================================
List<Student__c> students = new List<Student__c>{
    new Student__c(
        First_Name__c = 'Priya',
        Last_Name__c = 'Sharma',
        Email__c = 'priya.sharma@techcorp.com',
        Company__c = 'TechCorp Industries',
        Role__c = 'Software Engineer',
        Status__c = 'Active'
    ),
    new Student__c(
        First_Name__c = 'James',
        Last_Name__c = 'Mitchell',
        Email__c = 'j.mitchell@globalfinance.com',
        Company__c = 'Global Finance LLC',
        Role__c = 'Financial Analyst',
        Status__c = 'Active'
    ),
    new Student__c(
        First_Name__c = 'Maria',
        Last_Name__c = 'Gonzalez',
        Email__c = 'maria.gonzalez@healthplus.org',
        Company__c = 'HealthPlus Medical',
        Role__c = 'Operations Manager',
        Status__c = 'Active'
    ),
    new Student__c(
        First_Name__c = 'David',
        Last_Name__c = 'Chen',
        Email__c = 'david.chen@techcorp.com',
        Company__c = 'TechCorp Industries',
        Role__c = 'DevOps Lead',
        Status__c = 'Active'
    ),
    new Student__c(
        First_Name__c = 'Aisha',
        Last_Name__c = 'Patel',
        Email__c = 'aisha.patel@novaretail.com',
        Company__c = 'Nova Retail Group',
        Role__c = 'Product Manager',
        Status__c = 'Active'
    ),
    new Student__c(
        First_Name__c = 'Robert',
        Last_Name__c = 'Yamamoto',
        Email__c = 'r.yamamoto@globalfinance.com',
        Company__c = 'Global Finance LLC',
        Role__c = 'VP of Engineering',
        Status__c = 'Active'
    ),
    new Student__c(
        First_Name__c = 'Sarah',
        Last_Name__c = 'Thompson',
        Email__c = 'sarah.thompson@healthplus.org',
        Company__c = 'HealthPlus Medical',
        Role__c = 'Data Analyst',
        Status__c = 'Graduated'
    ),
    new Student__c(
        First_Name__c = 'Kevin',
        Last_Name__c = 'Brooks',
        Email__c = 'kevin.brooks@novaretail.com',
        Company__c = 'Nova Retail Group',
        Role__c = 'Sales Representative',
        Status__c = 'Inactive'
    )
};

insert students;
System.debug('Inserted ' + students.size() + ' students.');

// ============================================================
// 2. Insert Courses
// ============================================================
List<Course__c> courses = new List<Course__c>{
    new Course__c(
        Title__c = 'Introduction to Salesforce Administration',
        Category__c = 'Technical',
        Delivery_Format__c = 'Instructor-Led Virtual',
        Duration_Hours__c = 40,
        Description__c = 'A comprehensive course covering Salesforce platform fundamentals, including data modeling, security, automation, and reporting. Designed for new administrators preparing for their first certification.'
    ),
    new Course__c(
        Title__c = 'Agile Project Management',
        Category__c = 'Business',
        Delivery_Format__c = 'Blended Learning',
        Duration_Hours__c = 24,
        Description__c = 'Learn Agile and Scrum methodologies for managing software projects. Covers sprint planning, backlog grooming, retrospectives, and cross-functional team collaboration.'
    ),
    new Course__c(
        Title__c = 'Data Privacy and Security Compliance',
        Category__c = 'Compliance',
        Delivery_Format__c = 'Self-Paced Online',
        Duration_Hours__c = 8,
        Description__c = 'Mandatory annual training on GDPR, CCPA, and corporate data handling policies. Covers data classification, breach reporting procedures, and secure information sharing practices.'
    ),
    new Course__c(
        Title__c = 'Python for Data Analysis',
        Category__c = 'Technical',
        Delivery_Format__c = 'Instructor-Led Virtual',
        Duration_Hours__c = 32,
        Description__c = 'Hands-on course teaching Python programming with pandas, NumPy, and matplotlib for business data analysis. Includes real-world case studies and a capstone project.'
    ),
    new Course__c(
        Title__c = 'Leading High-Performance Teams',
        Category__c = 'Leadership',
        Delivery_Format__c = 'In-Person Workshop',
        Duration_Hours__c = 16,
        Description__c = 'A workshop for new and experienced managers focused on coaching, delegation, conflict resolution, and building psychological safety within teams.'
    ),
    new Course__c(
        Title__c = 'Effective Business Communication',
        Category__c = 'Business',
        Delivery_Format__c = 'Self-Paced Online',
        Duration_Hours__c = 12,
        Description__c = 'Develop professional communication skills including executive presentations, stakeholder management, written reports, and cross-cultural communication strategies.'
    )
};

insert courses;
System.debug('Inserted ' + courses.size() + ' courses.');

// ============================================================
// 3. Insert Enrollments
// ============================================================

// Map students and courses by index for readability
Student__c priya   = students[0];
Student__c james   = students[1];
Student__c maria   = students[2];
Student__c david   = students[3];
Student__c aisha   = students[4];
Student__c robert  = students[5];
Student__c sarah   = students[6];
Student__c kevin   = students[7];

Course__c sfAdmin      = courses[0];
Course__c agile        = courses[1];
Course__c compliance   = courses[2];
Course__c python       = courses[3];
Course__c leadership   = courses[4];
Course__c bizComm      = courses[5];

List<Enrollment__c> enrollments = new List<Enrollment__c>{
    // Priya - active engineer taking technical courses
    new Enrollment__c(
        Student__c = priya.Id,
        Course__c = sfAdmin.Id,
        Status__c = 'In Progress',
        Progress__c = 65,
        Enrollment_Date__c = Date.newInstance(2026, 2, 10),
        Expected_Completion_Date__c = Date.newInstance(2026, 5, 15),
        Notes__c = 'On track. Completed data modeling and security modules. Starting automation next week.'
    ),
    new Enrollment__c(
        Student__c = priya.Id,
        Course__c = compliance.Id,
        Status__c = 'Completed',
        Progress__c = 100,
        Enrollment_Date__c = Date.newInstance(2026, 1, 5),
        Expected_Completion_Date__c = Date.newInstance(2026, 1, 31),
        Notes__c = 'Annual compliance training completed on schedule.'
    ),

    // James - finance analyst broadening skills
    new Enrollment__c(
        Student__c = james.Id,
        Course__c = python.Id,
        Status__c = 'In Progress',
        Progress__c = 40,
        Enrollment_Date__c = Date.newInstance(2026, 3, 1),
        Expected_Completion_Date__c = Date.newInstance(2026, 6, 30),
        Notes__c = 'Good progress through pandas fundamentals. Requested additional practice datasets.'
    ),
    new Enrollment__c(
        Student__c = james.Id,
        Course__c = bizComm.Id,
        Status__c = 'Completed',
        Progress__c = 100,
        Enrollment_Date__c = Date.newInstance(2025, 11, 1),
        Expected_Completion_Date__c = Date.newInstance(2025, 12, 15),
        Notes__c = 'Scored 92% on final assessment. Strong improvement in executive presentation skills.'
    ),

    // Maria - operations manager on leadership track
    new Enrollment__c(
        Student__c = maria.Id,
        Course__c = leadership.Id,
        Status__c = 'In Progress',
        Progress__c = 75,
        Enrollment_Date__c = Date.newInstance(2026, 3, 15),
        Expected_Completion_Date__c = Date.newInstance(2026, 5, 1),
        Notes__c = 'Excellent participation in role-play exercises. Workshop facilitator noted strong coaching aptitude.'
    ),
    new Enrollment__c(
        Student__c = maria.Id,
        Course__c = agile.Id,
        Status__c = 'Completed',
        Progress__c = 100,
        Enrollment_Date__c = Date.newInstance(2025, 10, 1),
        Expected_Completion_Date__c = Date.newInstance(2025, 12, 1),
        Notes__c = 'Successfully earned Scrum Master certification after completing the course.'
    ),

    // David - DevOps lead taking compliance and leadership
    new Enrollment__c(
        Student__c = david.Id,
        Course__c = compliance.Id,
        Status__c = 'In Progress',
        Progress__c = 25,
        Enrollment_Date__c = Date.newInstance(2026, 4, 1),
        Expected_Completion_Date__c = Date.newInstance(2026, 4, 30),
        Notes__c = 'Just started. Completed the data classification module.'
    ),
    new Enrollment__c(
        Student__c = david.Id,
        Course__c = leadership.Id,
        Status__c = 'In Progress',
        Progress__c = 50,
        Enrollment_Date__c = Date.newInstance(2026, 2, 1),
        Expected_Completion_Date__c = Date.newInstance(2026, 5, 15),
        Notes__c = 'Attending the in-person workshop series. Completed delegation and conflict resolution modules.'
    ),

    // Aisha - product manager in Agile training
    new Enrollment__c(
        Student__c = aisha.Id,
        Course__c = agile.Id,
        Status__c = 'In Progress',
        Progress__c = 85,
        Enrollment_Date__c = Date.newInstance(2026, 1, 15),
        Expected_Completion_Date__c = Date.newInstance(2026, 4, 30),
        Notes__c = 'Nearly complete. Final capstone project submission pending peer review.'
    ),

    // Robert - VP taking compliance (required) and dropped a tech course
    new Enrollment__c(
        Student__c = robert.Id,
        Course__c = compliance.Id,
        Status__c = 'Completed',
        Progress__c = 100,
        Enrollment_Date__c = Date.newInstance(2026, 1, 10),
        Expected_Completion_Date__c = Date.newInstance(2026, 2, 10),
        Notes__c = 'Completed ahead of deadline.'
    ),

    // Sarah - graduated student with completed courses
    new Enrollment__c(
        Student__c = sarah.Id,
        Course__c = python.Id,
        Status__c = 'Completed',
        Progress__c = 100,
        Enrollment_Date__c = Date.newInstance(2025, 8, 1),
        Expected_Completion_Date__c = Date.newInstance(2025, 11, 30),
        Notes__c = 'Completed capstone project with distinction. Transitioned into a data engineering role.'
    ),

    // Kevin - inactive student who dropped a course
    new Enrollment__c(
        Student__c = kevin.Id,
        Course__c = bizComm.Id,
        Status__c = 'Dropped',
        Progress__c = 15,
        Enrollment_Date__c = Date.newInstance(2026, 1, 20),
        Expected_Completion_Date__c = Date.newInstance(2026, 3, 31),
        Notes__c = 'Withdrew due to department restructuring and role change. Eligible to re-enroll next quarter.'
    )
};

insert enrollments;
System.debug('Inserted ' + enrollments.size() + ' enrollments.');

System.debug('=== Sample data import complete ===');
System.debug('Students: ' + students.size());
System.debug('Courses: ' + courses.size());
System.debug('Enrollments: ' + enrollments.size());
