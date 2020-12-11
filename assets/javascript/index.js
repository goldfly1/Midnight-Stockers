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



function ticker(symbol,price,change){
/* Stock ticker every 3 minutes */
}
function picks(symbol,name,weekly){
/* Reommendations once per load. They are weekly after all
take info if it is up for the month and up for the week it is recommended buy
if both are down it's a sell
feed the first 5 or 6 lines to the Top Picks list on home page
the rest go on the marketSheet page.
*/
}
function news(line){
/* news feed every 3=30? minutes
read lines into object    object into array
replace on news div every 15 seconds*/

}
function client(name){
/* kinda static kinda not
client info obj    fName lName id# address email(s) phone(s)
client portfolio obj id#   stock when bought  price when bought    current price
clent watch obj id#   stock when picked  price when picked    current price
acount obj     money in   value of portfolio   value of pseudo portfolio
*/
}