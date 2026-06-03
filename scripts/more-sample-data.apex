// Additional sample data for richer dashboard
// Run via: sf apex run --file scripts/more-sample-data.apex

// More Students
List<Student__c> students = new List<Student__c>{
    new Student__c(First_Name__c='Elena', Last_Name__c='Rossi', Email__c='elena.rossi@techcorp.com', Company__c='TechCorp Industries', Role__c='QA Engineer', Status__c='Active'),
    new Student__c(First_Name__c='Marcus', Last_Name__c='Johnson', Email__c='m.johnson@globalfinance.com', Company__c='Global Finance LLC', Role__c='Risk Analyst', Status__c='Active'),
    new Student__c(First_Name__c='Yuki', Last_Name__c='Tanaka', Email__c='yuki.tanaka@novaretail.com', Company__c='Nova Retail Group', Role__c='UX Designer', Status__c='Active'),
    new Student__c(First_Name__c='Fatima', Last_Name__c='Al-Hassan', Email__c='f.alhassan@healthplus.org', Company__c='HealthPlus Medical', Role__c='Clinical Researcher', Status__c='Active'),
    new Student__c(First_Name__c='Chris', Last_Name__c='Anderson', Email__c='c.anderson@techcorp.com', Company__c='TechCorp Industries', Role__c='Cloud Architect', Status__c='Active'),
    new Student__c(First_Name__c='Nina', Last_Name__c='Petrova', Email__c='nina.petrova@globalfinance.com', Company__c='Global Finance LLC', Role__c='Compliance Officer', Status__c='Active'),
    new Student__c(First_Name__c='Raj', Last_Name__c='Kapoor', Email__c='raj.kapoor@novaretail.com', Company__c='Nova Retail Group', Role__c='Marketing Director', Status__c='Graduated'),
    new Student__c(First_Name__c='Lisa', Last_Name__c='Wang', Email__c='lisa.wang@healthplus.org', Company__c='HealthPlus Medical', Role__c='Nurse Practitioner', Status__c='Active'),
    new Student__c(First_Name__c='Tom', Last_Name__c='O\'Brien', Email__c='t.obrien@techcorp.com', Company__c='TechCorp Industries', Role__c='Security Engineer', Status__c='Active'),
    new Student__c(First_Name__c='Amara', Last_Name__c='Okafor', Email__c='a.okafor@globalfinance.com', Company__c='Global Finance LLC', Role__c='Portfolio Manager', Status__c='Inactive')
};
insert students;
System.debug('Inserted ' + students.size() + ' additional students.');

// More Courses
List<Course__c> courses = new List<Course__c>{
    new Course__c(Title__c='Cloud Architecture Fundamentals', Category__c='Technical', Delivery_Format__c='Instructor-Led Virtual', Duration_Hours__c=36, Description__c='Deep dive into AWS, Azure, and GCP architectures. Covers microservices, containerization, CI/CD, and cloud-native design patterns.'),
    new Course__c(Title__c='Advanced Data Visualization', Category__c='Technical', Delivery_Format__c='Self-Paced Online', Duration_Hours__c=20, Description__c='Master Tableau, Power BI, and D3.js for creating compelling data stories. Includes dashboard design principles and real-time analytics.'),
    new Course__c(Title__c='Strategic Planning Workshop', Category__c='Leadership', Delivery_Format__c='In-Person Workshop', Duration_Hours__c=16, Description__c='Executive-level workshop on long-term organizational planning, OKR frameworks, competitive analysis, and change management.'),
    new Course__c(Title__c='Financial Modeling with Excel', Category__c='Business', Delivery_Format__c='Blended Learning', Duration_Hours__c=28, Description__c='Build sophisticated financial models for forecasting, valuation, and scenario analysis. Covers DCF, LBO, and merger models.'),
    new Course__c(Title__c='Cybersecurity Essentials', Category__c='Compliance', Delivery_Format__c='Self-Paced Online', Duration_Hours__c=12, Description__c='Essential cybersecurity practices including threat detection, incident response, vulnerability management, and zero-trust architecture.'),
    new Course__c(Title__c='Design Thinking for Innovation', Category__c='Business', Delivery_Format__c='In-Person Workshop', Duration_Hours__c=16, Description__c='Learn the design thinking methodology: empathize, define, ideate, prototype, and test. Hands-on innovation exercises.')
};
insert courses;
System.debug('Inserted ' + courses.size() + ' additional courses.');

// Get existing courses for enrollment references
List<Course__c> allCourses = [SELECT Id, Title__c FROM Course__c];
Map<String, Id> courseMap = new Map<String, Id>();
for (Course__c c : allCourses) {
    courseMap.put(c.Title__c, c.Id);
}

// More Enrollments
List<Enrollment__c> enrollments = new List<Enrollment__c>{
    // Elena - QA Engineer
    new Enrollment__c(Student__c=students[0].Id, Course__c=courseMap.get('Cloud Architecture Fundamentals'), Status__c='In Progress', Progress__c=55, Enrollment_Date__c=Date.newInstance(2026,2,15), Expected_Completion_Date__c=Date.newInstance(2026,6,1), Notes__c='Strong progress on AWS modules. Moving to Azure next.'),
    new Enrollment__c(Student__c=students[0].Id, Course__c=courseMap.get('Cybersecurity Essentials'), Status__c='Completed', Progress__c=100, Enrollment_Date__c=Date.newInstance(2025,12,1), Expected_Completion_Date__c=Date.newInstance(2026,1,15), Notes__c='Scored 95% on final assessment.'),

    // Marcus - Risk Analyst
    new Enrollment__c(Student__c=students[1].Id, Course__c=courseMap.get('Financial Modeling with Excel'), Status__c='In Progress', Progress__c=70, Enrollment_Date__c=Date.newInstance(2026,1,10), Expected_Completion_Date__c=Date.newInstance(2026,5,1), Notes__c='Excellent work on DCF models. Starting LBO section.'),
    new Enrollment__c(Student__c=students[1].Id, Course__c=courseMap.get('Data Privacy and Security Compliance'), Status__c='Completed', Progress__c=100, Enrollment_Date__c=Date.newInstance(2026,1,5), Expected_Completion_Date__c=Date.newInstance(2026,2,5), Notes__c='Annual compliance requirement met.'),
    new Enrollment__c(Student__c=students[1].Id, Course__c=courseMap.get('Advanced Data Visualization'), Status__c='In Progress', Progress__c=30, Enrollment_Date__c=Date.newInstance(2026,3,20), Expected_Completion_Date__c=Date.newInstance(2026,6,30), Notes__c='Working through Tableau fundamentals.'),

    // Yuki - UX Designer
    new Enrollment__c(Student__c=students[2].Id, Course__c=courseMap.get('Design Thinking for Innovation'), Status__c='Completed', Progress__c=100, Enrollment_Date__c=Date.newInstance(2025,11,1), Expected_Completion_Date__c=Date.newInstance(2026,1,15), Notes__c='Outstanding participation. Led the final team prototype presentation.'),
    new Enrollment__c(Student__c=students[2].Id, Course__c=courseMap.get('Agile Project Management'), Status__c='In Progress', Progress__c=60, Enrollment_Date__c=Date.newInstance(2026,2,1), Expected_Completion_Date__c=Date.newInstance(2026,5,15), Notes__c='Connecting agile practices to design workflow.'),

    // Fatima - Clinical Researcher
    new Enrollment__c(Student__c=students[3].Id, Course__c=courseMap.get('Python for Data Analysis'), Status__c='In Progress', Progress__c=45, Enrollment_Date__c=Date.newInstance(2026,3,1), Expected_Completion_Date__c=Date.newInstance(2026,7,1), Notes__c='Applying pandas to clinical trial datasets.'),
    new Enrollment__c(Student__c=students[3].Id, Course__c=courseMap.get('Data Privacy and Security Compliance'), Status__c='Completed', Progress__c=100, Enrollment_Date__c=Date.newInstance(2026,1,10), Expected_Completion_Date__c=Date.newInstance(2026,2,10), Notes__c='Required for HIPAA compliance.'),

    // Chris - Cloud Architect
    new Enrollment__c(Student__c=students[4].Id, Course__c=courseMap.get('Cloud Architecture Fundamentals'), Status__c='Completed', Progress__c=100, Enrollment_Date__c=Date.newInstance(2025,9,1), Expected_Completion_Date__c=Date.newInstance(2025,12,15), Notes__c='Earned AWS Solutions Architect certification after completion.'),
    new Enrollment__c(Student__c=students[4].Id, Course__c=courseMap.get('Leading High-Performance Teams'), Status__c='In Progress', Progress__c=35, Enrollment_Date__c=Date.newInstance(2026,3,1), Expected_Completion_Date__c=Date.newInstance(2026,6,1), Notes__c='Preparing for team lead promotion.'),
    new Enrollment__c(Student__c=students[4].Id, Course__c=courseMap.get('Cybersecurity Essentials'), Status__c='Completed', Progress__c=100, Enrollment_Date__c=Date.newInstance(2026,1,5), Expected_Completion_Date__c=Date.newInstance(2026,2,5), Notes__c='Completed with perfect score.'),

    // Nina - Compliance Officer
    new Enrollment__c(Student__c=students[5].Id, Course__c=courseMap.get('Data Privacy and Security Compliance'), Status__c='Completed', Progress__c=100, Enrollment_Date__c=Date.newInstance(2025,12,1), Expected_Completion_Date__c=Date.newInstance(2026,1,15), Notes__c='Reviewed and provided feedback on course content accuracy.'),
    new Enrollment__c(Student__c=students[5].Id, Course__c=courseMap.get('Cybersecurity Essentials'), Status__c='In Progress', Progress__c=80, Enrollment_Date__c=Date.newInstance(2026,2,15), Expected_Completion_Date__c=Date.newInstance(2026,4,30), Notes__c='Nearly complete. Final module on incident response remaining.'),

    // Raj - Marketing Director (Graduated)
    new Enrollment__c(Student__c=students[6].Id, Course__c=courseMap.get('Strategic Planning Workshop'), Status__c='Completed', Progress__c=100, Enrollment_Date__c=Date.newInstance(2025,8,1), Expected_Completion_Date__c=Date.newInstance(2025,10,15), Notes__c='Applied frameworks to Q1 2026 marketing strategy.'),
    new Enrollment__c(Student__c=students[6].Id, Course__c=courseMap.get('Design Thinking for Innovation'), Status__c='Completed', Progress__c=100, Enrollment_Date__c=Date.newInstance(2025,10,15), Expected_Completion_Date__c=Date.newInstance(2026,1,1), Notes__c='Integrated design thinking into product launch process.'),

    // Lisa - Nurse Practitioner
    new Enrollment__c(Student__c=students[7].Id, Course__c=courseMap.get('Effective Business Communication'), Status__c='In Progress', Progress__c=50, Enrollment_Date__c=Date.newInstance(2026,3,1), Expected_Completion_Date__c=Date.newInstance(2026,5,15), Notes__c='Focusing on patient communication and report writing.'),
    new Enrollment__c(Student__c=students[7].Id, Course__c=courseMap.get('Data Privacy and Security Compliance'), Status__c='In Progress', Progress__c=20, Enrollment_Date__c=Date.newInstance(2026,4,1), Expected_Completion_Date__c=Date.newInstance(2026,5,1), Notes__c='HIPAA annual refresher in progress.'),

    // Tom - Security Engineer
    new Enrollment__c(Student__c=students[8].Id, Course__c=courseMap.get('Cybersecurity Essentials'), Status__c='Completed', Progress__c=100, Enrollment_Date__c=Date.newInstance(2025,11,1), Expected_Completion_Date__c=Date.newInstance(2025,12,15), Notes__c='Subject matter expert. Provided supplementary materials for future cohorts.'),
    new Enrollment__c(Student__c=students[8].Id, Course__c=courseMap.get('Cloud Architecture Fundamentals'), Status__c='In Progress', Progress__c=40, Enrollment_Date__c=Date.newInstance(2026,2,1), Expected_Completion_Date__c=Date.newInstance(2026,6,15), Notes__c='Focusing on security aspects of cloud architecture.'),

    // Amara - Portfolio Manager (Inactive but has history)
    new Enrollment__c(Student__c=students[9].Id, Course__c=courseMap.get('Financial Modeling with Excel'), Status__c='Dropped', Progress__c=10, Enrollment_Date__c=Date.newInstance(2026,1,15), Expected_Completion_Date__c=Date.newInstance(2026,4,30), Notes__c='Withdrew due to department transition. May re-enroll Q3.'),
    new Enrollment__c(Student__c=students[9].Id, Course__c=courseMap.get('Strategic Planning Workshop'), Status__c='Completed', Progress__c=100, Enrollment_Date__c=Date.newInstance(2025,9,1), Expected_Completion_Date__c=Date.newInstance(2025,11,15), Notes__c='Completed before transitioning to new role.')
};
insert enrollments;
System.debug('Inserted ' + enrollments.size() + ' additional enrollments.');

System.debug('=== Additional sample data import complete ===');
System.debug('New Students: ' + students.size());
System.debug('New Courses: ' + courses.size());
System.debug('New Enrollments: ' + enrollments.size());
