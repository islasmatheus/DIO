public class Usuário {

    public static void main(String[] args) throws Exception {

        SmartTv smartTv = new SmartTv();

        System.out.println("Qual canal ? " + smartTv.canal);

        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.diminuirVolume();
        smartTv.aumentarVolume();

        smartTv.mudarCanal(13);
        System.out.println("Qual canal ? " + smartTv.canal);

        System.out.println("Volume atual: " + smartTv.volume);

        System.out.println("Tv Ligada ? " + smartTv.ligada);
        System.out.println("Qual canal ? " + smartTv.canal);
        System.out.println("Qual o volume ? " + smartTv.volume);

        smartTv.ligar();
        System.out.println("Novo Status -> Tv ligada ? " + smartTv.ligada);

        smartTv.desligar();
        System.out.println("Novo Status -> Tv ligada ? " + smartTv.ligada);

    }
}
