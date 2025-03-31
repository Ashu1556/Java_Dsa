import java.util.Arrays;

public class Concate {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
        int[] array1 = { 1, 3, 5 };
        int[] array2 = { 2, 4, 6 };

        int totalLength = array1.length + array2.length;
        System.out.println(totalLength);
        System.out.println(array1.length);
        int[] newArray = new int[totalLength];

        int start = 0;
        int i = 0;
        while (start < array1.length) {
            if (array1[start] < array2[start]) {
                newArray[i] = array1[start];
                i++;
                newArray[i] = array2[start];
                i++;
            } else {
                newArray[i] = array2[start];
                i++;
                newArray[i] = array1[start];
                i++;
            }
            start++;

        }
        System.out.println(Arrays.toString(newArray));
    }
}
