public class TiposVariaveis {

    public static void main(String[] args) {
        String primeiroNome = "Islas";
        String segundoNome = "Matheus";
        String nomeCompleto = nomeCompleto(primeiroNome,segundoNome);
        System.out.println(nomeCompleto);
    }

    public static String nomeCompleto(String primeiroNome, String segundoNome){
        return primeiroNome + " "+ segundoNome;
    }

}