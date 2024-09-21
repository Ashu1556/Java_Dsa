public class Pattern1 {
    static void pattern(int n) {
        for (int row = 1; row <= n; row++) {
            for (int column = 1; column <= row; column++) {
                System.out.print(" * ");

            }
            System.out.println(" ");
        }
    }

    public static void main(String[] args) {
        pattern(4);
    }
}
