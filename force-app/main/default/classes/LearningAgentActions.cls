public with sharing class LearningAgentActions {

    // ── Search Courses ──
    public class CourseSearchInput {
        @InvocableVariable(required=false description='Course category to filter by')
        public String category;

        @InvocableVariable(required=false description='Keyword to search in course title or description')
        public String keyword;
    }

    public class CourseSearchOutput {
        @InvocableVariable(description='Formatted list of matching courses')
        public String results;
    }

    @InvocableMethod(label='Search Courses' description='Search for courses by category or keyword')
    public static List<CourseSearchOutput> searchCourses(List<CourseSearchInput> inputs) {
        CourseSearchInput input = inputs[0];
        String query = 'SELECT Title__c, Category__c, Delivery_Format__c, Duration_Hours__c, Description__c FROM Course__c';
        List<String> conditions = new List<String>();

        if (String.isNotBlank(input.category)) {
            conditions.add('Category__c = :category');
        }
        if (String.isNotBlank(input.keyword)) {
            String kw = '%' + String.escapeSingleQuotes(input.keyword) + '%';
            conditions.add('(Title__c LIKE :kw OR Description__c LIKE :kw)');
        }
        if (!conditions.isEmpty()) {
            query += ' WHERE ' + String.join(conditions, ' AND ');
        }
        query += ' LIMIT 20';

        String category = input.category;
        String kw = String.isNotBlank(input.keyword) ? '%' + String.escapeSingleQuotes(input.keyword) + '%' : null;

        List<Course__c> courses = Database.query(query);
        List<String> lines = new List<String>();
        for (Course__c c : courses) {
            lines.add('• ' + c.Title__c + ' | Category: ' + c.Category__c +
                       ' | Format: ' + c.Delivery_Format__c +
                       ' | Duration: ' + c.Duration_Hours__c + ' hrs' +
                       (String.isNotBlank(c.Description__c) ? ' | ' + c.Description__c : ''));
        }

        CourseSearchOutput output = new CourseSearchOutput();
        output.results = lines.isEmpty() ? 'No courses found matching your criteria.' : String.join(lines, '\n');
        return new List<CourseSearchOutput>{ output };
    }
}
