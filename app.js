//alert("Hello World");

// console.log("Hello World");

// document.write("Hello World");

//  var a = 5;
//  var b = 10;
//  var c = a+b;
//  alert(c);

// var x = 10;
// var y = "ali";
// var z = x + y;
// alert(z);

// var f = "ali";
// var g = "mughal";
// var h = f + " "+ g;
// alert(h);


// var a = 5;
// var b = "10";
// var c = a+b;
// alert(c);

// var a = 5;
// var b = "10";
// var c = a/b;
// alert(c);

// var x;
// x = 15;

// var g = 22/(5+6)*3;
// alert(g);

// var a = 12;
// var b = 3;
// var c = a % 3;
// alert(c);


// var a = 5;
// var b = a--;
// alert(b);


// a++;
// a=a+1;
// a+=1;


// var x = 5;
// var y = x++ + x - --x + x-- + x - x++ + ++x - x;
// alert(y);


// var f = 10;
// var g = f + --f - --f + f-- + ++f - f + f + ++f - --f;
// alert(g);

// var a = +prompt("Enter your value","Your value is:");
// var b = 10;
// var c = a+b;
// alert(c)


// var marks = 80;
// var grade;

// if (marks < 50){
//     grade = "70%";
//     alert(grade);
// }



// var age = 15

// if (age > 18) {
//     alert('User Allowed In Stadium')
// } else if (age > 10) {
//     alert('This user is under 18 and not allowed')
// }

// var gender = prompt("Enter your gender");
// var age = +prompt("Enter your age");
// if(gender == "male" || age > 18){
//     alert("Allow for ride")
// }
// else{
//     alert("Not Allowed")
// }

// var x = 5;
// if(x !== "5"){
//     alert("True")
// }
// else{
//     alert("False");
// }


// var age = 20;
// var gender = "male";
// var height = "6";
// if(age > 15 && gender == "male" || height > 6.4){
//     alert("Eligible for Air Hostess")
// }
// else{
//     alert("not eligible");
// }


// var per = prompt("Enter your Percentage");
// if(per <=100 && per >= 80 ){
//     alert("A+")
// }
// else if(per < 80 && per >= 70){
//     alert("A")
// }
// else if(per < 70 && per >= 60){
//     alert("B")
// }
// else if(per < 60 && per >= 50){
//     alert("C")
// }
// else if(per < 50 && per >= 40){
//     alert("D")
// }
// else if(per < 40 && per >= 33){
//     alert("E")
// }
// else if(per < 33 && per >= 0){
//     alert("Fail");
// }
// else{
//     alert("You have inserted wrong percentage")
// }


// var x = 3;
// var y = 3;
// var a = 5;
// var b = 6;
// var c = 4;
// var d = 4;
// var g;
// var e;
// var h = 8;
// var f = 7;
// if ((x === y || a === b) && c === d) {
//     g = h;
//     alert(g);
// }
// else {
//     e = f;
//     alert(e);
// }


// var name1 = "Ali";
// var name2 = "Ahmed";
// var name3 = "Samad";
// var name4 = "Ayesha";
// var name5 = "Qaser";
// var name6 = "Ariba";
// document.write(name1 + "<br>" + name2 + "<br>" + name3);


// var names =["Ali","Ahmed","Samad","Ayesha"];
// console.log(names);


// var name = new Array("Sharjeel","Waqas","Qaiser");

// console.log(name);

// alert('sdhgf')

// var a =[[0,1,3,4],[0,1,3,4],[0,1,3,4]]
// var b = 4
// for(var i=0; i<b; i++){
//     document.write(a[i]+'<br />')
// }



// var a = ['karachi', 'lahore']
// var flag = false
// var b = prompt('city')
// for(var i =0; i<a.length; i++){
//     if(b == a[i]){
//         alert('found')
//         flag = true
//         break
//     }else{
//         flag = false
//     }
// }
// if(flag == false){
//     document.write('false')
// }

//var pera = 'Lorem ipsum dolor sit amet consectetur adipisicing dolor. Placeat unde vitae eum voluptas Areeba reprehenderit corporiscumque, samad tenetur vel sunt porro officiis cupiditate veritatis est architecto earum ducimus laboriosam consectetur!'

//charAt(index Number)
//indexOf(word)
//replace(word,second word)
//replace(/word/g,second word)
//var text = pera.replace('Areeba','Areesha')
//console.log(text)

// for (var a = 0; a < pera.length; a++) {
//     console.log(pera[a])
//     if (pera.slice(a, a + 6) === 'Areeba') {
//         var b = pera.slice(a, a + 6)
//         // alert(a)
//         alert(b)
//         var starting = pera.slice(0, a)
//         var myWord = 'Areesha'
//         var ending = pera.slice(a + 6)

//         var final = starting + myWord + ending
//         document.write(final)
//     }
// }

// var a = prompt("Enter city")
// a = a.toLowerCase()
// var b = ["karachi", "lahore"]
// for(c = 0; c < b.length; a++){
//     if(a === b [c]){
//         alert("welcome")
//     }
// }


//"Revision"

// var items = ["cake", "chips", "cookies"]
// var write = prompt("Enter item")
// var matchfound = false
// for(a = 0; a < items.length; a++){
//     if(write === items [a]){
//         matchfound = true
//         alert("Availabe")
//     }
// }
// if(matchfound === false){
//     alert("Not available")
// }

// var items = ["cake", "chips", "cookies"]
// var write = prompt("Enter item")
// write = write.toLowerCase()
// var matchfound = false
// for(a = 0; a < items.length; a++){
//     if(write === items [a]){
//         matchfound = true
//         alert("Availabe")
//     }
// }
// if(matchfound === false){
//     alert("Not available")
// }

// var items = ["Cake", "Chips", "Cookies"]
// var write = prompt("Enter item")
// first = write.slice(0,1)
// first = first.toUpperCase()
// other = write.slice(1)
// other = other.toLowerCase()
// var combine = first + other
// var matchfound = false
// for(a = 0; a < items.length; a++){
//     if(combine === items [a]){
//         matchfound = true
//         alert("Availabe")
//     }
// }
// if(matchfound === false){
//     alert("Not available")
// }

// var pera = ("My name is Waqas Altaf")
// var index = pera.indexOf("Waqas")
// if(index !== -1){
//     pera = pera.slice(0, index) + "Hassan" + pera.slice(index + 5)
// }
// alert(pera)

// var pera = ("My name is Waqas Altaf")
// var replace = pera.replace("Waqas", "Hassan")
// alert(replace)

/*var pera = ("My name is Waqas Altaf Waqas")
pera = pera.replace("Waqas", "Hassan")
alert(pera)*/

// a = "w"
// a = "s"
// alert(a)

// var a
// a = 56
// alert(a)

// var b = (2 * 4) * (4 + 2);
// alert(b)

// alert("dsad" + (2 + 2))

// var h = prompt("rewr", "rewrew")
// alert(h)

// var f = +prompt("w")
// alert(f + 2)

