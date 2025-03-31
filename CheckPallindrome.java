public class CheckPallindrome {
    public static void main(String[] args) {
        String str = "racecar";

        int start = 0;
        int end = str.length() - 1;
        Boolean flag = false;

        while (start < end) {
            if (str.charAt(start) == str.charAt(end)) {
                flag = true;
            } else {
                flag = false;
            }
            start++;
            end--;

        }
        System.out.println(flag);

    }
}
