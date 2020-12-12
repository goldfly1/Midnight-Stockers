/*  open stream/ download file   3 different files/streams */
/*  open and read file  */
/*  as you read file act on data   build sorted arrays of picked (buy or sell) stocks  OR display news / tickers    */
/* end of data close file /stream   */
/*    user buttons for stock picks  */
/*    check boxes to pick stocks  */
/*    ul for stock recommendations  */
/*    ul for stock list  */
/*    ul for news  */
/*    string for scrolling ticker  */
/*      */
/*    persistent object or data storage for
      user info/stock portfolio/watch list
      server side  */
/*    track portfolio ups and downs  */
/*    track watchlist ups and downs  */
/*      */
/*      */



function ticker(symbol,open,last){
/* Stock ticker every 3 minutes
it's a string crawling across the div when it gets long enough start clipping off it's nose*/

}
function picks(symbol,name,weekly){
/* USE S&P 500 I GUESS
Reommendations once per load. They are weekly after all

read info      if it is up for the month and up for the week it is a buy
if both are down it's a sell

feed the first 5 or 10 lines to the Top Picks list on home page
the rest go on the marketSheet page.

on the home page they should each have a blurbLine  LOREM will do.

when viewed individually the stock should have a blurbLine

obj has ticker name buy/sell/nothing   blurb
*/
}

function news(line){
/* news feed every 3=30? minutes
read lines into object    object into array
replace on news div every 15 seconds
REMEMBER TOAST*/

}
function client(name){
/* kinda static kinda not
client info obj    fName lName id# address email(s) phone(s)

client portfolio obj id#   stock when bought  price when bought    current price

clent watch obj id#   stock when picked  price when picked    current price

acount obj     cash balance   value of portfolio   value of pseudo portfolio

the system is a client and has it's own account with it's own portfolio of ALL THORETICAL trades*/
}



function getData(){
      stockData("hog","10min","30","json")
      return stockData;
}

//*End Funcion Declarations*//


//**get data for stocks */


console.log(getData());


