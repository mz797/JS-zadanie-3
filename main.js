//1
console.log("=========zadanie 1==========");
const combine = function (foo, arr1, arr2) {
	const finalArr = [];
	for (let i = 0; i < arr1.length; i++) {
		finalArr[i] = foo(arr1[i], arr2[i]);
	}
	return finalArr;
};
const add = combine((a, b) => a + b, [4, 5, 6], [10, 20, 30]);
console.log(add);
const points = combine((a, b) => ({ x: a, y: b }), [4, 5, 6], [10, 20, 30]);
console.log(points);
const points2 = combine((a, b) => ({ x: a, y: b }), [1, 2, 3], [7, 8, 9]);
console.log(points2);
// 1 ***
console.log("========= zadanie 1 *** ==========");
const betterCombine = function (foo, ...arrayOfArrays) {
	const finalArr = [];
	for (let i = 0; i < arrayOfArrays[0].length; i++) {
		const arrOfArraysWithIndex = arrayOfArrays.map((el) => el[i]);
		// console.log(arrOfArraysWithIndex);
		finalArr[i] = foo(...arrOfArraysWithIndex);
	}
	return finalArr;
};

const betterAdd = betterCombine(
	(a, b, c) => a + b + c,
	[4, 5, 6],
	[10, 20, 30],
	[1, 2, 3]
);
console.log(betterAdd);

const betterPoints = betterCombine(
	(a, b, c) => ({ x: a, y: b, z: c }),
	[1, 2, 3],
	[7, 8, 9],
	[10, 20, 30]
);
console.log(betterPoints);
// 2
console.log("=========zadanie 2==========");
const piggyBank = (name, money) => {
	const piggyFoo = function (...arr) {
		if (arr.length === 0) {
			console.log(`${name} get ${money}.`);
			return money;
		} else if (typeof arr[0] === "number") {
			money += arr[0];
			console.log(`${name} set ${money}.`);
		}
	};
	return piggyFoo;
};

const magda = piggyBank("Magda", 200);
magda();
magda(10);
magda(5, 2, 34);

// 3
console.log("=========zadanie 3==========");
const students = [
	{ name: "Piotr", surname: "Nowak", points: 63 },
	{ name: "Tomasz", surname: "Kowalski", points: 88 },
	{ name: "Julia", surname: "Bagińska", points: 75 },
	{ name: "Kasia", surname: "Paszko", points: 51 },
	{ name: "Ala", surname: "Makota", points: 93 },
	{ name: "Kot", surname: "Wbutach", points: 81 },
	{ name: "Kot2", surname: "Wbutach", points: 81 },
];
// znajdź średnią liczbę punktów
const avg =
	students.reduce((total, current) => total + current.points, 0) /
	students.length;
console.log("średnia: ", avg);

// podaj imiona i nazwiska osób które zdobyły więcej niż średnia
const smartStudents = students
	.filter((el) => el.points > avg)
	.map((el) => ({ name: el.name, surname: el.surname }));
console.log(smartStudents);

// wskaż imiona i nazwiska trzech osób, które zdobyły najwięcej punktów (nieco trudniejszy wariant: przynajmniej trzy osoby - jeśli więcej niż jedna zajmuje trzecią pozycję)
const sortStudents = students.sort((prev, next) => {
	if (prev.points <= next.points) return 1;
	if (prev.points > next.points) return -1;
	// prev.points - next.points
});
const topStudents = sortStudents
	.filter((el) => el.points >= sortStudents[2].points)
	.map((el) => ({ name: el.name, surname: el.surname }));

console.log(topStudents);

//zwrócić listę nazwisk z ocenami posortowaną alfabetycznie wg nazwisk (przelicznik: 50 lub więcej punktów - ocena dst, 60 - dst+, 70 - db, 80 - db+, 90 - bdb)
let grades = students
	.map((el) => {
		if (el.points >= 90) return { surname: el.surname, grade: "bdb" };
		if (el.points >= 80) return { surname: el.surname, grade: "db+" };
		if (el.points >= 70) return { surname: el.surname, grade: "db" };
		if (el.points >= 60) return { surname: el.surname, grade: "dst+" };
		if (el.points >= 50) return { surname: el.surname, grade: "dst" };
	})
	.sort((prev, next) => {
		if (prev.surname >= next.surname) return 1;
		if (prev.surname < next.surname) return -1;
	});

console.log(grades);

//policz ile osób zdobyło jaki stopień
const countGrades = {};
grades = grades.map((el) => {
	countGrades[el.grade] = (countGrades[el.grade] || 0) + 1;
	return el;
});

console.log(countGrades);
