
// ********************************chapter 21-25**************************

// Task 1

// var First_Name = prompt("Enter First Name","Your First Name");
// var Last_Name = prompt("Enter First Name","Your First Name");
// var Full_Name = (First_Name+" "+Last_Name);

// alert("Welcome "+Full_Name)


// Task 2

// var phone_Model = prompt("Enter Your Favourate Phone Model","Your Favourate Phone Model is");
// document.write("My Favourate Phone Model is :"+phone_Model+"<br> Length of Strings :"+phone_Model.length)


//Task 3

// var str = "Pakistani";
// str1 =str.indexOf('n');

// document.write("String: "+str+"<br>"+"Index of 'n':"+str1);


// Task 4

// var string = "Hello World";
// var str1 = string.lastIndexOf('l')
// document.write("String:"+string+"<br>"+"last index of 'l' :"+str1);


// Task 5

// var str = "Pakistani";
// var str1 = str.charAt(3);
// document.write("String :"+str+"<br>"+"Character at Index 3 :"+str1)


// Task 6

// var First_Name = prompt("Enter First Name","Your First Name");
// var Last_Name = prompt("Enter First Name","Your First Name");
// var Full_Name = (First_Name+" "+Last_Name);

// alert("Welcome "+Full_Name)


// Task 7

// var city = "Hyderabad";
// var replac = city.replace("Hyderabad","Islamabad");

// document.write("City :"+city+"<br>"+"After Replacement :"+replac)


// Task 8

// var message =" Ali and Sami are Best Friend.They play cricket and Footbal together."
// var replac =message.replace(/and/g,"&")

// document.write(replac)


// Task 9

// var string = "472";
// var con = parseInt("472");

// document.write("Value :"+string+"<br>"+"Type String <br>"+"Value :"+con+"<br>Type: number")


//Task 10

//  var str = prompt("Enter Any Keyword");
//  var str1 =str.toUpperCase();
//  document.write("User Input:"+str+"<br>"+"Uppercase:"+str1)


// Task 11

// var str = prompt("Enter Any Keyword");
// var str1 =str.slice(0,1);
// str1 =str1.toLocaleUpperCase();
// var str2 =str.slice(1,str.length);
// document.write("User Input:"+str+"<br>"+"Title Case:"+str1+str2);

// // Task 12

// var number =35.36
// var num2 = number.toString().replace(".","");
// document.write(num2);

// Task 13

// var u_name= prompt("Enter UserName","Your UserName is: ");

// var code;

// for(var i=0; i<=u_name.length; i++){
//     code = u_name.charCodeAt(i);

//     switch(code){

//         case 33 :{
//             alert("Please Enter a Valid Username");
//             break;
//         }

//         case 44 :{
//             alert("Please Enter a Valid Username");
//             break;
//         }
//         case 46 :{
//             alert("Please Enter a Valid Username");
//             break;
//         }

//         case 64 :{
//             alert("Please Enter a Valid Username");
//             break;
//         }
//     }
// }

// Task 14

// var a = ["cake","apple pie","cookie","chips","patties"];

// var search = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
// search = search.toLocaleLowerCase();

// if(search==="cake"|| search==="apple pie"|| search==="cookie"||search==="chips"||search==="patties"){

//     document.write(search+" is avaible at index "+a.indexOf(search)+" in our bakery.")
// }
// else{
//     document.write("We are Sorry "+search+" is not avaible in our Bakery");
// }



// Task 15

// var pass = prompt("Enter a Password");
// pass = pass.charAt(0);

// if(pass === '0' ||pass === '1' ||pass === '2' ||pass === '3' ||pass === '4' ||pass === '5' ||pass === '6' ||pass === '7' ||pass === '8' ||pass === '9' ||pass === '10' ){
//     alert("Password cannot begin with a number \n Please Enter a valid Password")
// }
// if (pass === /^[0-9]+$/){
//   alert("Password cannot begin with a number \n Please Enter a valid Password")
// }

// else if(pass >= '6'){
//     alert("Password at least 6 character long")
// }






// Task 16

// var str = "University of Karachi";
// str = str.split(" ");
// document.write(str+"<br>")



// Task 17

// var user = prompt("Enter a KeyWord");
// var user1 =user.charAt(user.length-1);
// document.write("User Input :"+user+"<br>"+"Last Character of Input :"+user1);

// Task 18

// var word = "The";
// word = word.toLowerCase();
// var str = "The Quick brown focks jumps over the lazy dog";
// var str1 = str.toLowerCase();
// str1 = str1.split(" ");
// var count=0;
// for (var i=0; i<str.length; i++){
//     if(word===str1[i]){
//        count++;
//     }
// }
// document.write("Text:" +str+"<br>"+"There are "+count+ "occurrence(s) of the word "+ word )





// ********************************chapter 26-30**************************

// Task 1

// var posint = prompt("Enter The Positive Integer");
// document.write("number:"+posint+"<br>"+"Round off Value:"+Math.round(posint)+"<br>"+"Floor Value:"+Math.floor(posint)+
// "<br>"+"Ceil Value"+Math.ceil(posint));


// Task 2


// var posint = prompt("Enter The Negative Floating integer");
// document.write("number:"+posint+"<br>"+"Round off Value:"+Math.round(posint)+"<br>"+"Floor Value:"+Math.floor(posint)+
// "<br>"+"Ceil Value"+Math.ceil(posint));


// Task 3

// var num = prompt("Please Enter a Number");

// if(num<0){
//   document.write("The Absolute value of "+num+" is :"+ (-num));
// }
// else if(num>0){
//   document.write("The Absolute value of "+num+" is :"+ num);
// }


//Task 4

    // var num= Math.random()*11;
    // var cont = Math.round(num);

    // document.write("Random Dice Value :"+cont);


// Task 5

// var toss = Math.random()*2;
// var toss1 = Math.round(toss);

// if (toss1 === 0){
//     document.write("2<br>"+"Random Coin Value :Heads");
// }
// else{
//     document.write("1<br>"+"Random Coin Value :Tails");
// }


// Task 6

// var ran = Math.random()*101;
// var round = Math.round(ran);
// document.write("Random Number between 1 and 100 :"+round)

// Task 7

// var weight = prompt("Enter The Weight");
// var w1 =parseFloat(weight);
// document.write("The Weight of user is "+w1+ " Kilograms")

// Task 8

// var num = Math.random();
// var num1 = Math.round(num);
// var user = +prompt("Enter the Secret Number between 1 to 10");

// if(num1===user){
//     alert("Congratulate! you win")
// }
// else{
//     alert("Try Again");
// }






// ********************************chapter 31-34**************************


// Task 1

// var date = new Date();
// document.write(date);

// Task 2

// var array = ["Janurary","Febraury","March","April","May","June","July","August","Septemter","October","November","December"]
// var date =  new Date();
// document.write(array[date.getMonth()]);


// Task 3

// var array = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
// var date =  new Date();
// console.log("Today is "+array[date.getDay()]);


// Task 4

// var array = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
// var date =  new Date();
// document.write(date)

// if (array[6]==="Sun" || array[5]==="Sat"){

//     alert("It's Fun Day")
// }
// else{
//     alert("error")
// }


// Task 5

// var date = new Date();
// var msg = "Fifteen Days of The Month ";
// var msg2 = "Last days of the Month ";

// if (date.getDate()<15){
// document.write(msg);
// }
// else{
//     document.write(msg2)
// }


// Task 6

// var curr_Date = new Date();
// var date = new Date("26 jan,1970")
// var milisec = curr_Date.getTime();
// var minute =milisec/(1000*60);

// document.write("Current Date: "+curr_Date+"<br>"+"Elapsed Millisecond since January 1,1970:" +milisec+"<br>"+"Elapsed Minute since January 1,1970:"+minute);


// Task 7

// var date = new Date();
// if(date.getHours()>12){
//     alert("It's P.M");
// }
// else{
//     alert("It's A.M")
// }

// Task 8

// var date = new Date("31 Dec, 2020");
// document.write(date)

// Task 9

// var sd = new Date ("1 jan,2015")
// var sdor = new Date ("18 jun,2015");
// var diff = (sdor-sd);
// diff = diff/(1000*60*60*24)

// document.write(diff+" days have passed since 1st Ramadan,2015")

// Task 10

// var date = new Date("26 Dec 2015");
// var date1 = new Date("1 jan, 2015");

// var datemili =date.getTime();
// var date1mili = date1.getTime();
// var diff = (datemili-date1mili)

// document.write("On Reference Date"+date+"<br>"+diff+" second had passed since beginning of 2015");


// // Task 11

// var curr_date = new Date();
// var curr_hour = curr_date.getHours();

// var ago_Date = new Date();
// ago_Date.setHours(curr_hour-1)
// document.write("Current Date:"+curr_date+"<br>"+"1 hour Ago,it was"+ago_Date)

// Task 12
// var curr_Date = new Date();
// var ago_Date = new Date("5 dec,1920");

// document.write("Current Date:"+curr_Date+"<br>"+"100 Years Back,it was "+ago_Date)

// Task 13

// var dob = new Date(prompt("Enter Your Date of Birth"));
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = (todaymili-dobmili);
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))

// console.log(accuage);

// Task 14

// var array = ["January","February","March","April","May","June","July","September","October","Novermber","Decemeber"]
// var cuostomer_name = "ABC Customer";
// var date = new Date();
// var Month = array[date.getMonth()];
// var nou = 410;
// var cpu = 16;
// var lps = 350;

// document.write("Customer Name :"+cuostomer_name+"<br>"+"Month :"+Month+"<br>"+"Number of Units :"+nou+"<br>"+"Charges per Unit :"+cpu+"<br><br><br>"+
// "Net Amount Payable (With in Due Date) :"+(cpu*nou)+"<br>"+"Late Payment Surcharge :"+lps+"<br>"+"Gross Amount Payable (After Due Date):"+((cpu*nou)+lps));





// ********************************chapter 35-38**************************

// Task 1

// function currdate(){
//     var date = new Date();
//     document.write(date);
// }

// currdate();


// Task 2

// function greet (a,b){
//     alert("Welcome "+(a+" "+b));
// }

// greet('Naeem','Shaikh');


// Task 3

// function add(a,b){
//     return a+b;
// }

// document.write( add(2,4))


// Task 4

// function cal (a,b,oper){

//     switch(oper){
//         case "+":
//             return a+b;
//             break
//         case "-":
//             return a-b;
//             break

//         case "*":
//             return a*b;
//             break;

//         case "/":
//             return a/b;
//             break;

//         case "%":
//             return a%b;
//             break

//         default:
//             document.write("Invalid Operator")
//     }
// }

// document.write(cal(1,2,"$"))


// Task 5

// function square (a){
//     document.write(a*a);
// }

// square(8);

// Task 6

// function facto (n){
//   var answer =1;

//   if(n==0 || n==1 ){
//       return answer;
//   }
//   else{
//       for(var i=n; i>=1; i--){
//           answer = answer *i;
//       }
//       return answer;
//   }

// }

// document.write(facto(5));

// Task 7


// function count (num1,num2){
//     for(i=num1; i<=num2; i++){
//         document.write(i+"<br>");
//     }
// }

// count(1,100);


// Task 8

// function hypo (num1,num2){

//          var x=(num1*num1);
//          var y=(num2*num2);

//          var z=(x+y);
//          document.write(z);
// }


// hypo(4,4)

// Task 9

// function area (width, height){

//     return (width*height);
// }

// var b = area(4,5);
// document.write(b);


// Task 10

// function palindrome (str){
//     var check = "";
//     i=str.length;
//     for (var j =i-1; j>=0; j--){
//         check += str.charAt(j);
//         console.log(check+"<br>")
//     }
//     if(str === check){
//         alert(str+" is palindrome word.")
//     }
//     else{
//         alert("not a palindrome Word");
//     }
// }

// palindrome("madam");


// Task 11

// function capital_letter (str){

//     str = str.split(" ");
//     x=str.length;
//     for(var i=0; i<x; i++){
//         str[i]= str[i][0].toUpperCase()+str[i].substr(1);
//     }
//     return str.join("");
// }

// var str1 = capital_letter("the quick brown fox");
// document.write(str1)

// Task 12

// function long_string(str){

//     str = str.split(" ");
//     var length=0;
//     var longest;

//     for(var i=0; i<str.length; i++){
//         if(str[i].length>length){
//             length = str [i].length;
//             longest = str[i];
//         }
//     }
//     alert(longest)

// }

// long_string("Web Development Tutorial")


// Task 13

// function ocuurences (str,word){

// word = word.toLowerCase();
// var str1 = str.toLowerCase();
// str1 = str1.split(" ");
// var count=0;
// for (var i=0; i<str.length; i++){
//      if(word===str[i]){
//         count++;
//      }
// }
// document.write("Text:"+str+"<br>"+"There are "+count+ " occurrence(s) of the word "+ word )

// }


// ocuurences("JSResources.Com",'o');


// Task 14

// var pi = 3.14;

// function calccircumference(radius){

//     document.write("The Circumference is :"+(2*pi*radius)+"<br>");
// }


// function calcArea(radius){

//     document.write("The Area is :"+(pi*(radius*radius)));
// }


// calccircumference(3);
// calcArea(2);