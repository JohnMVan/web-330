/**
 * Title: finance-calculator.js
 * Author:  John Vanhessche
 * Date:  17 September 2022
 * Desc: FinanceCalculator class for future value app
 */


export class FinanceCalculator {

    static MONTHS_IN_YEAR = 12;

    static calculateFutureValue(monthlyPayment, rate, years) {
        let months = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));
        return futureValue.toFixed(2);
    }

    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
    });

        return currencyFormatter.format(field);
    }
}