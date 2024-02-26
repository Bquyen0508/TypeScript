enum API_STATUS  {
    PENDING,
    FULFILLED = "FULFILLED",
    REJECTED = "Rejected" //promise
}
let a1 = API_STATUS.FULFILLED;
let a2 = API_STATUS.PENDING;
console.log(a1, a2);