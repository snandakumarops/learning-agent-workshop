public with sharing class EnrollmentQueryAction {

    public class EnrollmentInput {
        @InvocableVariable(required=false description='Student email to look up enrollments for')
        public String studentEmail;

        @InvocableVariable(required=false description='Course title to look up enrollments for')
        public String courseTitle;

        @InvocableVariable(required=false description='Enrollment status filter (e.g. In Progress, Completed)')
        public String status;
    }

    public class EnrollmentOutput {
        @InvocableVariable(description='Formatted enrollment information')
        public String results;
    }

    @InvocableMethod(label='Query Enrollments' description='Find enrollments by student email, course title, or status')
    public static List<EnrollmentOutput> queryEnrollments(List<EnrollmentInput> inputs) {
        EnrollmentInput input = inputs[0];
        String query = 'SELECT Student__r.First_Name__c, Student__r.Last_Name__c, ' +
                        'Course__r.Title__c, Status__c, Progress__c, ' +
                        'Enrollment_Date__c, Expected_Completion_Date__c, Notes__c ' +
                        'FROM Enrollment__c';
        List<String> conditions = new List<String>();

        if (String.isNotBlank(input.studentEmail)) {
            conditions.add('Student__r.Email__c = :studentEmail');
        }
        if (String.isNotBlank(input.courseTitle)) {
            String ct = '%' + String.escapeSingleQuotes(input.courseTitle) + '%';
            conditions.add('Course__r.Title__c LIKE :ct');
        }
        if (String.isNotBlank(input.status)) {
            conditions.add('Status__c = :status');
        }
        if (!conditions.isEmpty()) {
            query += ' WHERE ' + String.join(conditions, ' AND ');
        }
        query += ' LIMIT 20';

        String studentEmail = input.studentEmail;
        String ct = String.isNotBlank(input.courseTitle) ? '%' + String.escapeSingleQuotes(input.courseTitle) + '%' : null;
        String status = input.status;

        List<Enrollment__c> enrollments = Database.query(query);
        List<String> lines = new List<String>();
        for (Enrollment__c e : enrollments) {
            String line = '• ' + e.Student__r.First_Name__c + ' ' + e.Student__r.Last_Name__c +
                          ' → ' + e.Course__r.Title__c +
                          ' | Status: ' + e.Status__c +
                          ' | Progress: ' + (e.Progress__c != null ? String.valueOf(e.Progress__c) + '%' : 'N/A') +
                          ' | Enrolled: ' + (e.Enrollment_Date__c != null ? String.valueOf(e.Enrollment_Date__c) : 'N/A');
            if (e.Expected_Completion_Date__c != null) {
                line += ' | Expected Completion: ' + String.valueOf(e.Expected_Completion_Date__c);
            }
            lines.add(line);
        }

        EnrollmentOutput output = new EnrollmentOutput();
        output.results = lines.isEmpty() ? 'No enrollments found matching your criteria.' : String.join(lines, '\n');
        return new List<EnrollmentOutput>{ output };
    }
}
