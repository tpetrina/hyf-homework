/*
 * Hack Your Future, Javascript, homework Week1
 * this file includes:
 
  3. Housey pricey (A house price estimator)
*/


// 3. Housey pricey (A house price estimator)

let myFriendsHouses = [

    {
        friendName:"Peter",
        houseWidth:8,
        houseHight:10,
        houseDepth:10,
        gardenSizeInM2:100,
        price:2500000
    },

    {
        friendName:"Julia",
        houseWidth:5,
        houseHight:8,
        houseDepth:11,
        gardenSizeInM2:70,
        price:1000000
    }
];


for(let i = 0; i < 2; i++){
    let volumeInMeters = myFriendsHouses[i].houseHight * myFriendsHouses[i].houseDepth * myFriendsHouses[i].houseWidth;
    let housePrice = volumeInMeters * 2.5 * 1000 + myFriendsHouses[i].gardenSizeInM2 * 300;
    console.log("Actual price: " + housePrice);
    console.log("Paid price: " + myFriendsHouses[i].price);

    if(housePrice >= myFriendsHouses[i].price)
    {
        console.log(myFriendsHouses[i].friendName + ", You got the house on a good price.")
    }else{
        console.log(myFriendsHouses[i].friendName + ", You paide more than the actual price.");
    }
}

