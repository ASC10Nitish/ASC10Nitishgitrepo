package asgn;

public class Asgn15 {

    public static void testCharAt(String str) {
        System.out.println("Char at index 2: " + str.charAt(2));
    }

    public static void testContains(String str) {
        System.out.println("Contains 'java': " + str.contains("java"));
    }

    public static void testLength(String str) {
        System.out.println("Length: " + str.length());
    }

    public static void testIndexOf(String str) {
        System.out.println("Index of 'e': " + str.indexOf('e'));
    }

    public static void testEquals(String str1, String str2) {
        System.out.println("Equals: " + str1.equals(str2));
    }

    public static void testEqualsIgnoreCase(String str1, String str2) {
        System.out.println("Equals Ignore Case: " + str1.equalsIgnoreCase(str2));
    }

    public static void testJoin(String delimiter, String... elements) {
        System.out.println("Join: " + String.join(delimiter, elements));
    }

    public static void testLastIndexOf(String str) {
        System.out.println("Last index of 'a': " + str.lastIndexOf('a'));
    }

    public static void testSubstring(String str) {
        System.out.println("Substring from index 5: " + str.substring(5));
    }

    public static void testToLowerCase(String str) {
        System.out.println("To Lower Case: " + str.toLowerCase());
    }

    public static void testToUpperCase(String str) {
        System.out.println("To Upper Case: " + str.toUpperCase());
    }

    public static void testTrim(String str) {
        System.out.println("Trimmed: '" + str.trim() + "'");
    }

    public static void main(String[] args) {
        String str1 = "Java Programming";
        String str2 = "java programming";

        testCharAt(str1);
        testContains(str1);
        testLength(str1);
        testIndexOf(str1);
        testEquals(str1, str2);
        testEqualsIgnoreCase(str1, str2);
        testJoin(", ", "apple", "banana", "cherry");
        testLastIndexOf(str1);
        testSubstring(str1);
        testToLowerCase(str1);
        testToUpperCase(str1);
        testTrim("   Hello World!   ");
    }
}

