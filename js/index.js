// Iteration 1: Names and Input
let hacker1 = "Angel";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Torvalds";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let caracteresSeparados = "";

for (let i = 0; i < hacker1.length; i++) {
  caracteresSeparados += hacker1[i].toUpperCase() + " ";
}

console.log(caracteresSeparados);

let reverseCaracter = "";

for (i = hacker2.length - 1; i >= 0; i--) {
  reverseCaracter += hacker2[i];
}

console.log(reverseCaracter);

const hacker1FirstChar = caracteresSeparados[0];
const hacker2FirstChar = reverseCaracter[0];
console.log(hacker1FirstChar, hacker2FirstChar);

if (hacker1FirstChar > hacker2FirstChar) {
  console.log("The driver's name goes first.");
} else if (hacker1FirstChar < hacker2FirstChar) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed eget massa augue. Proin tempor mauris vel arcu condimentum consequat.
    Morbi scelerisque massa sit amet eleifend fringilla. Etiam vitae lectus leo.
    Sed convallis a dui ac ornare. Aliquam accumsan luctus orci ac dapibus.
    Ut semper velit at augue pellentesque, nec venenatis mauris pretium.
    Mauris eros ex, auctor quis sagittis ut, efficitur vitae ante.
    Curabitur a libero quam. In hac habitasse platea dictumst. Nam vitae finibus purus.
    Fusce dignissim turpis risus, in varius sapien lacinia sit amet. Aenean ut placerat sapien.
    Mauris commodo finibus metus, et ornare nulla sollicitudin eu. In hac habitasse platea dictumst.
    Duis posuere leo sed euismod facilisis. Nulla ornare purus ut quam ultricies sagittis non sed urna.
    Pellentesque bibendum posuere massa quis feugiat. Aenean sit amet blandit quam, a cursus magna.
    Mauris aliquet nulla a ante rhoncus, vel tincidunt sapien faucibus. Nullam ut lorem enim. Aliquam erat volutpat.
    Fusce mollis lacinia aliquet. Nullam porta ex sodales mi pellentesque imperdiet.
    Sed tristique hendrerit risus nec interdum. Donec id nunc elementum, porttitor orci vel, tincidunt ligula.
    Ut eget pharetra nisi. Etiam lobortis est risus, a lacinia augue bibendum vel. Quisque tristique libero sed ipsum vestibulum pharetra at vel felis.
    Integer rutrum tristique dapibus. Donec scelerisque laoreet nisi at eleifend. Proin pulvinar lorem nisi.
    Nullam ante ex, posuere a purus ut, placerat cursus orci. Cras commodo ex vel arcu efficitur aliquet.
    Curabitur laoreet tincidunt nisi, id egestas urna maximus sed. Donec orci est, varius ut porta id, imperdiet ut nunc.
    Nullam aliquam felis ut justo tincidunt lacinia nec vel velit. Integer sollicitudin, nisi eget porttitor iaculis,
    est justo consequat justo, a porttitor metus turpis eget dolorK`

let counter = 0;

for(let i = 0; i < longText.length; i++) {
    if (longText[i] === 'e' && longText[i+1] === 't') {
        counter ++;
    }
}

console.log(`Hay ${counter} veces 'et'`);