public class FinancialForecast {

    // Recursive method
    public static double predictFutureValue(double currentValue,
                                            double growthRate,
                                            int years) {

        // Base condition
        if (years == 0) {
            return currentValue;
        }

        // Recursive calculation
        return predictFutureValue(
                currentValue * (1 + growthRate),
                growthRate,
                years - 1
        );
    }

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double futureValue = predictFutureValue(
                currentValue,
                growthRate,
                years
        );

        System.out.println("Future Value after "
                + years
                + " years: "
                + futureValue);
    }
}