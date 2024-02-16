function calculateMoney(ticketSale ){
    const unitTicketPrice=120;
    const guardBill=500;
    const lunchBill=400; /* 8*50 per head */
    const utilityBill= guardBill+lunchBill;

    if (ticketSale<0){
       return(" ''Invalid Number'' Please insert a valid number. It must be an integer.")
    }
    else{
        const totalincome=unitTicketPrice*ticketSale;
        const revenue= totalincome-utilityBill;
        return revenue;
    }
    
}

// const result= calculateMoney(10); /* Sample input 10 */
console.log("Today's total revenue is", calculateMoney(10));
// const result1= calculateMoney(1055); /* Sample input 1055 */
// console.log("Today's total revenue is", result1);
// const result2= calculateMoney(93); /* Sample input 93 */
// console.log("Today's total revenue is", result2);
// const result3= calculateMoney(-130); /* Sample input -130 */
// console.log(result3)
