public class FirstString {

    public static void main(String[] args) {

        String str1 = "java";
        String str2 = "";
        char ch = str1.charAt(0);
        str2 += ch;
        str2 = str2.toUpperCase();
        for (int i = 1; i <= str1.length() - 1; i++) {
            char ch1 = str1.charAt(i);
            str2 += ch1;
        }

        System.out.println(str2);
    }
}
