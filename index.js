// ARRAY TASKS

//TASK 1

// function foundElement(a,n)
// {
//     return a[n - 1];
// }

// console.log(foundElement([22,3,5,6,3],1));
////////////////////////////////////////////////

//TASK 2

// function deleteValue(a)
// {
//     return a.toSpliced(0,3);
// }

// console.log(deleteValue([1,2,3,4]));
///////////////////////////////////////

//TASK 3

// function deleteValue_end(a)
// { 
//     return a.splice(-3,3);
// }

// console.log(deleteValue_end([1,2,3,4,5,6]));
////////////////////////////////////////////////

//TASK 4

// function first_3_element(a)
// {
//     return a.slice(0,3);
// }

// console.log(first_3_element([1,2,3,4,5]));
///////////////////////////////////////////////

//TASK 5

// function myFunction(a,n)
// {
//     return a.slice(-n);
// }

// console.log(myFunction([1,2,3,4,5],2))
///////////////////////////////////////////

//TASK 6
// function splice_element(a,b)
// {
//     let array = a.filter(x => x != b)
//     return array;
// }

// console.log(splice_element([1,1,2],2));
//////////////////////////////////////////

//TASK 7
// function arraySize(a)
// {
//     return a.length;
// }

// console.log(arraySize([1,2,3,4]));
////////////////////////////////////////////

//TASK 8

// function negativeCount(a)
// {
//     let negative_array = a.filter(x => x <=0);
//     let negativeCount = negative_array.length;
//     return negativeCount;
// }

// console.log(negativeCount([2,-3,4,-5]));
/////////////////////////////////////////////////

//TASK 9

// function sort_abc(arr)
// {
//     return arr.sort();
// }

// console.log(sort_abc(['b','a','c','f']))
///////////////////////////////////////////

//TASK 10

// function sort_number(arr)
// {
//     return arr.sort().reverse();
// }

// console.log(sort_number([6,3,5,4,8,2,1]))
/////////////////////////////////////////////

//TASK 11

// function sum_elements(a)
// {
//     let sum = 0;
//     a.map((i) => {
//         sum += i;
//     })
//     return sum;
// }

// console.log(sum_elements([2,3,4]));
///////////////////////////////////////

//TASK 12
// function average_number(a)
// {
//     let sum = 0;
//     a.map((i) => {
//         sum += i;
//     })
//     sum /= a.length;
//     return sum;
// }
// console.log(average_number([2,3,4]));
////////////////////////////////////////

//TASK 13
// function max_len_word(arr)
// {
//     let max_word = "";
//     arr.map((i) => {
//         if(i.length > max_word.length)
//         {
//             max_word = i;
//         }
//     })    
//     return max_word;
// }
// console.log(max_len_word(['La','Casa','De','Papel']));
/////////////////////////////////////////////////////////////////////

//TASK 14
// function equal_elements(arr)
// {
//     return arr.every(element => element == arr[0] && typeof element == typeof arr[0])
// }

// console.log(equal_elements([true,true]))
/////////////////////////////////////////////////////////////////////////

//TASK 15

// function merge_array(...arrays)
// {
//     return arrays.flat()
// }

// console.log(merge_array([1,2,3],[4,5,6]))
/////////////////////////////////////////////

//TASK 16

// function sorted_array(arr)
// {
//     return arr.sort((x,y) => x.y - y.y) 
// }

// console.log(sorted_array([{a:9,b:5},{a:7,b:1}]))
//////////////////////////////////////////////////////

//TASK 17

// function merge_and_sortARR(arr1, arr2) {
//     const merged = arr1.concat(arr2).sort();
//     return merged.filter((value, index) => value != merged[index - 1]);
// }

// console.log(merge_and_sortARR([1, 2, 3], [3, 4, 5]));
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// OBJECT TASKS

//TASK 1

// function return_ObjectProperty(obj)
// {
//     return obj.country
// }

// console.log(return_ObjectProperty({continent: 'Mehemmed',country: 'Italy'}))
////////////////////////////////////////////////////////////////////////////////

//TASK 2

// function return_ObjectProperty(obj)
// {
//     return obj['country']
// }

// console.log(return_ObjectProperty({continent: 'Mehemmed','country': 'Italy'}))
///////////////////////////////////////////////////////////////////////////////////

//TASK 3

// function return_ObjectProperty(obj,key)
// {
//     return obj[key]
// }

// console.log(return_ObjectProperty({continent: 'Mehemmed',country: 'Italy'},'country'))
/////////////////////////////////////////////////////////////////////////////////////////

//TASK 4

// function true_or_false(obj,key)
// {
//     return key in obj
// }

// console.log(true_or_false({continent: 'Mehemmed',country: 'Italy'},'country'))
///////////////////////////////////////////////////////////////////////////////

//TASK 5

// function true_or_false(obj,key)
// {
//     return obj[key] != undefined
// }

// console.log(true_or_false({continent: 'Mehemmed',country: null},'country'))
/////////////////////////////////////////////////////////////////////////

//TASK 6

// function create_js_obj(a)
// {
//     return { key: a}
// }

// console.log(create_js_obj('3'))
///////////////////////////////////

//TASK 7

// function create_js_obj2(a,b)
// {
//     return {[a]:b}
// }

// console.log(create_js_obj2('a','b'))
///////////////////////////////////////

//TASK 8

// function create_js_obj3(a,b)
// {
//     return Object.fromEntries(a.map((key, index) => [key, b[index]]));
// }
// console.log(create_js_obj3(['a','b',1],[1,2,3]))
///////////////////////////////////////////////////

//TASK 9

// function return_obj_keys(a)
// {
//     return Object.keys(a)
// }

// console.log(return_obj_keys({a:1,b:2,c:3}))
//////////////////////////////////////////////////

//TASK 11

// function object_sum(obj)
// {
//     return Object.values(obj).reduce((acc, value) => acc + value, 0);
// }

// console.log(object_sum({a:1,b:2,c:3}))
///////////////////////////////////////////////

//TASK 12

// function delete_obj(obj)
// {
//     delete obj.b
//     return obj
// }

// console.log(delete_obj({a:1,b:2,c:3}))
/////////////////////////////////////////

//TASK 13

// function obj_match_keys(x, y) {
//     y.d = y.b;
//     delete y.b;
//     return Object.assign({}, x, y);
// }
// console.log(obj_match_keys({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))  
////////////////////////////////////////////////////////////////

//TASK 14

// function multiply_obj(a,b)
// {
//     return Object.values(a).map(value => value * b); 
// }

// console.log(multiply_obj({a:1,b:2,c:3},10))
