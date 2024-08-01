// const reverse = (str) => {
//   let x = true;
//   //return str.split("").reverse().join("");
//   const str1 = str.split(" ");
//   //console.log(str1);
//   for (let i = 0; i < str1.length; i++) {
//     console.log(str1[i]);
//     let c = str1[i].split("");
//     for (let j = 0; j < c.length; j++) {
//       if (c[j] == "." || c[j] == ",") continue;
//       let temp = c[j];
//       c[j] = c[c.length - 1];
//       c[c.length - 1] = temp;
//     }
//     console.log("from out ", c);
//     str1[i] = str1[i].split("").reverse().join("");
//   }
//   const str2 = str1.join(" ");
//   console.log(str2);
// };
// console.log(reverse("My, name. is Basavaraj"));

// const reverse = (str) => {
//   return str.split(" ").reverse().join(" ").split("").reverse().join("");
// };

// console.log(reverse("My, name. is Basavaraj"));
const inputString =
  "HELLO, Welcome to Google's meeting. My name is Jean-Piere... Bye";
console.log("Normal words: ", inputString);

const result = reverseWords(inputString);
console.log("Words reversed: ", result);

function reverseWords(str = "", separators = " ,.-") {
  let result = "";
  let word = "";
  for (const char of str) {
    if (separators.includes(char)) {
      result += word + char;
      word = "";
    } else {
      word = char + word;
    }
  }

  // Adds last remaining word, if there is no separator at the end.
  result += word;

  return result;
}
