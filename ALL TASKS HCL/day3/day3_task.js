// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compil
function fun(n)
{
    return n*2
}

let x=fun(10);
console.log(x);
let ans=[1,2,3,4,5, x, "hello"];
console.log(ans);
let arr=["banana","apple","papaya","kiwi","mango"];
var len=arr.length
let i=0
for(i=0;i<len;i++)
{
console.log(arr[i]);
}
arr.pop();
arr.unshift("kiwi");
arr.includes("mango");
arr.indexOf("banana");
console.log(arr);
ans.push(40);
ans.pop()
for(let value of arr)
{
    console.log(value);
}
let arr1=[1,2,3,4,5]
let double=arr1.map(n=>n*2);
console.log(double);

let arr2=arr1.filter(n=>n%2==0);
console.log(arr2);

let a1=[2,4,6,8]
let a1_ans=a1.map(n=>n*2);
console.log(a1_ans);


let a2=[10,25,30,5,60]
let a2_ans=a2.filter(n=>n>20)
console.log(a2_ans)


let a3=[1,2,3,4,5];
let s3_ans=a3.reduce((acc,val)=>acc+val,0);
console.log(s3_ans)