const generatePasswords = document.querySelector("#generatePasswords");
const passwordOneEl = document.querySelector("#passwordOne");
const passwordTwoEl = document.querySelector("#passwordTwo");

const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
];

const passwordLength = 15;

generatePasswords.addEventListener("click", function () {
	function getRandomCharacter() {
		const randomCharacter = Math.floor(Math.random() * characters.length);
		return characters[randomCharacter];
	}

	function generateRandomPassword() {
		let randomPassword = "";
		for (let i = 0; i < passwordLength; i++) {
			randomPassword += getRandomCharacter();
		}
		return randomPassword;
	}

	const randomPasswordOne = generateRandomPassword();
	passwordOneEl.innerText = randomPasswordOne;

	const randomPasswordTwo = generateRandomPassword();
	passwordTwoEl.innerText = randomPasswordTwo;
});
