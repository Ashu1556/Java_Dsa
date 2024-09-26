public class String3 {
    public static void main(String[] args) {
        String str = "Geeks";

        int n = str.length() - 1;

        String str1 = " ";

        for (int i = n; i >= 0; i--) {
            str1 += str.charAt(i);

        }

        System.out.println(str1);
    }
}
