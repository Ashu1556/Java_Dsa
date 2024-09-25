public class Pattern4 {
    static void pattern(int n) {
        for (int row = 1; row <= 2 * n; row++) {
            int totalcolumn = row > n ? 2 * n - row : row;
            for (int column = 1; column <= totalcolumn; column++) {
                System.out.print(" * ");
            }
            System.out.println();
        }

    }

    public static void main(String[] args) {
        pattern(4);
        pattern(5);
    }
}
