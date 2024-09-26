public class String2 {

    public static void main(String[] args) {

        String str2 = "00000123569";

        String str3 = "";

        String str4 = "";

        for (int i = 0; i < str2.length(); i++) {
            char ch = str2.charAt(i);
            if (ch == '0') {
                str3 += str2.charAt(i);
            } else {
                str4 += str2.charAt(i);
            }
        }

        System.out.println(str4);
    }
}
