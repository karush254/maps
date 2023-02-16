// function foo(name) {
//   let names = name.split(" ");
//   let upperNmaes =  names.map(function (val) {
//     return (
//       val.substring(0, 1).toUpperCase() +
//       val.substring(1, val.length).toLowerCase()
//     );
//   });
//    return upperNmaes.join(" ")
// }

// alert(foo("Napoleon Bonaparte  born Napoleone Buonaparte  15 August 1769  5 May 1821), later known by his regnal name Napoleon I,[b] was a French military commander and political leader who rose to prominence during the French Revolution and led successful campaigns during the Revolutionary Wars. He was the de facto leader of the French Republic as First Consul from 1799 to 1804, then Emperor of the French from 1804 until 1814 and again in 1815. Napoleon's political and cultural legacy endures to this day, as a highly celebrated and controversial leader. He initiated many liberal reforms that have persisted in society, and is considered one of the greatest military commanders in history. His wars and campaigns are studied by militaries all over the world. Between three and six million civilians and soldiers perished in what became known as the Napoleonic Wars"));

///////////////////////////////////////////////////////////////////////////////////////////////
// let sort1 = "angel glean arc car brag grab bored robed cat act cider cried dusty study elbow below inch chin qaxaq"
// let words = sort1.split(" ");

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   let sorted = word.split("").sort().join("");

//   for (let j = 0; j < words.length; j++) {
//     if (i === j) {
//       continue;
//     }
//     let result = words[j];
//     if (sorted === result.split("").sort().join("")) {
//       console.log(word + " " + result  );
//     }
//   }
// }



/////porcnakan 
// function anagrams (array) {
//     let anagramwords = {};
//     for (var i = 0; i < array.length; i++) {
//         var word = array[i].split('').sort().join('');
//         if (!anagramwords.hasOwnProperty(word)) {
//             anagramwords[word] = [];
//         }
//         anagramwords[word].push(array[i]);
//     }    
//     return anagramwords;
// }


// console.log(anagrams(["angel", "glean", "arc", "car", "brag", "grab", "bored", "robed", "cat", "act", "cider", "cried", "dusty", "study", "elbow", "below", "inch", "chin"]));

