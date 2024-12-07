package calculadoraSimple;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Calculadora");
        System.out.println("¿Que operación deseas realizar?");
        System.out.println("1.Sum\n2.Subtraction\n3.Multiplication\n4.Division\n");
        Scanner scanner= new Scanner(System.in);
        int i= scanner.nextInt();

        System.out.println("What operation do you want perform?");
        System.out.println("Number 1:");
        double num1= scanner.nextInt();
        System.out.println("Number 2:");
        double num2= scanner.nextInt();

        switch (i) {
            case 1:
                double suma= num1 + num2;
                System.out.println("The sum of these numbers is "+ suma);
            break;

            case 2:
                double resta= num1 - num2;
                System.out.println("The subtracion of these numbers is "+ resta);
            break;

            case 3:
                double multi= num1 * num2;
                System.out.println("The multiplication of these numbers is "+ multi);
            break;

            case 4:
                double division= num1 / num2;
                System.out.println("The division of these numbers is "+ division);
            break;
        
            default:
                System.out.println("Error. This operation cannot be performed ");
            break;
        }
    }
}

