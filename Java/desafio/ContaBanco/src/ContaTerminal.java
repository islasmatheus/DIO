import java.util.Locale;
import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in).useLocale(Locale.US);
        System.out.println("Por favor, digite o número da Conta !");
        int numero = sc.nextInt();
        System.out.println("Por favor, digite o número da Agência !");
        String agencia = sc.next();
        System.out.println("Por favor, digite o seu Nome !");
        String nomeCliente = sc.next();
        System.out.println("Por favor, digite o seu Saldo !");
        double saldo = sc.nextDouble();
        System.out.println("Olá, " + nomeCliente + " obrigado por criar uma conta em nosso banco, sua agência é, "
                + agencia + " conta " + numero + " e seu saldo " + saldo + " já está disponível para saque");
        sc.close();
    }
}
