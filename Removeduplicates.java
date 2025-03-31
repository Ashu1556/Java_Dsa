import java.util.Arrays;

public class Removeduplicates {

    public static void main(String[] args) {
        int[] array = { 1, 1, 2, 2, 3, 4 };

        int[] newArray = new int[4];

        int start = 0;

        int iteration = 0;

        while (start < array.length) {
            if (start < array.length - 1 && array[start] == array[start + 1]) {
                newArray[iteration] = array[start];
                start = start + 2;
            } else {
                newArray[iteration] = array[start];
                start++;
            }
            iteration++;
        }

        System.out.println(Arrays.toString(newArray));
    }
}
