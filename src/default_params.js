function defaultDiscountRate() {
    return .1;
}

function applyDiscount(cost, discount = defaultDiscountRate()) {
    return cost - (cost * discount);
}

console.log(applyDiscount(100));
