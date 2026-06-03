public with sharing class StudentLookupAction {

    public class StudentInput {
        @InvocableVariable(required=false description='Student email address')
        public String email;

        @InvocableVariable(required=false description='Student last name')
        public String lastName;
    }

    public class StudentOutput {
        @InvocableVariable(description='Formatted student information')
        public String results;
    }

    @InvocableMethod(label='Look Up Student' description='Find a student by email or last name')
    public static List<StudentOutput> lookUpStudent(List<StudentInput> inputs) {
        StudentInput input = inputs[0];
        String query = 'SELECT First_Name__c, Last_Name__c, Email__c, Company__c, Role__c, Status__c FROM Student__c';
        List<String> conditions = new List<String>();

        if (String.isNotBlank(input.email)) {
            conditions.add('Email__c = :email');
        }
        if (String.isNotBlank(input.lastName)) {
            conditions.add('Last_Name__c = :lastName');
        }
        if (!conditions.isEmpty()) {
            query += ' WHERE ' + String.join(conditions, ' AND ');
        }
        query += ' LIMIT 10';

        String email = input.email;
        String lastName = input.lastName;

        List<Student__c> students = Database.query(query);
        List<String> lines = new List<String>();
        for (Student__c s : students) {
            lines.add('• ' + s.First_Name__c + ' ' + s.Last_Name__c +
                       ' | Email: ' + s.Email__c +
                       ' | Company: ' + s.Company__c +
                       ' | Role: ' + s.Role__c +
                       ' | Status: ' + s.Status__c);
        }

        StudentOutput output = new StudentOutput();
        output.results = lines.isEmpty() ? 'No students found matching your criteria.' : String.join(lines, '\n');
        return new List<StudentOutput>{ output };
    }
}
