public class Pattern5 {
    static void pattern(int n) {
        for (int row = 1; row <= n; row++) {
            for (int space = 1; space <= n - row; space++) {
                System.out.print(" ");
            }
            for (int column = 1; column <= row; column++) {
                System.out.print("*");
            }
            System.out.println();

        }
    }

    static void pattern1(int n) {
        for (int row = 1; row <= n; row++) {
            for (int space = 1; space < row; space++) {
                System.out.print(" ");
            }
            for (int column = 1; column <= n - row + 1; column++) {
                System.out.print("*");
            }

            System.out.println();
        }
    }

    static void pattern2(int n) {
        for (int row = 1; row <= n; row++) {
            for (int space = 1; space <= n - row; space++) {
                System.out.print("   ");
            }
            for (int column = 1; column <= row; column++) {
                System.out.print(" * ");
            }
            for (int column = 1; column <= row - 1; column++) {
                System.out.print(" * ");
            }
            System.out.println();
        }
    }

    static void pattern3(int n) {
        for (int row = 1; row <= n; row++) {
            for (int space = 1; space < row; space++) {
                System.out.print(" ");
            }
            for (int column = 1; column <= n - row; column++) {
                System.out.print("*");
            }
            for (int column = 1; column < n - row; column++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        pattern(5);
        System.out.println("2nd print");
        pattern1(5);

        System.out.println("3rd print");

        pattern2(5);

        System.out.println("4th point");

        pattern3(6);
    }
}
