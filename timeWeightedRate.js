// This function will calculate the Time-Weighted Rate of return of a portfolio.
// First, declare the portfolio values by entering the value at the end of a period,
// and then begining of the period; like (value at t1, value at t2).

const portfolioValues = [
    [vt1, vt0],
    [vt1, vt0]
];

// Create a function to calculate rate of return for sub-period.

function rateOfreturn(final, initial) {
    return (final - initial)/initial;
}

// Create a function to perform geometric linking calculation

function rateWeightedReturn(values) {
    let rt = 1;
    for(let value of values){
        const rate = rateOfreturn(value[0], value[1]);
        rt *= (1 + rate);
    }
    // Give the rate in percentage
    return (rt - 1)*100;
}