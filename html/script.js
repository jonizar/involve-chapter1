const students = [
    {
      name: "Ersaad",
      score: 90,
      age: 10,
    },
    {
      name: "Gisda",
      score: 82,
      age: 11,
    },
    {
      name: "Anwar",
      score: 76,
      age: 11,
    },
    {
      name: "Jo",
      score: 80,
      age: 11,
    },
    {
      name: "Eka",
      score: 75,
      age: 12,
    },
    {
      name: "Dody",
      score: 78,
      age: 12,
    },
    {
      name: "Putera",
      score: 88,
      age: 10,
    },
    {
      name: "Esya",
      score: 98,
      age: 10,
    },
  ];

  
const dataFilter = students.filter((student)=>student.score > 80 && student.age >1);
const findNama= students.find((student) => student.name === "Putera" );
console.log("find nama Putera: ")
  console.log(findNama);
  console.log("filter score d atas 80 dan age d atas 1")
  console.log(dataFilter);

  const luasPersegi = (a) =>{
    return a*a;
  }

  const luasSegitiga = (a,b) =>{
    return a*b/2;
  }
console.log("function : ")
  console.log("luas persegi : "+luasPersegi(3));
  console.log("luas segitiga : "+luasSegitiga(4,4));
  console.log("luas segitiga : "+luasSegitiga(4,10));

  function solution (x,y) {
    if (y-x-0.5 >=0) {
        if (x % 5 ==0) {
            return y-x-0.5;
        } else {
            return y;
        }
    } else {
        return "Saldo kurang!";
    }
  }

  console.log(solution(30,20));
  console.log(solution(42,100));
  console.log(solution(40,40));
  console.log(solution(50,100));

  function nilai (a) {
    if (a>=91 && a<=100) {
        return "A";
    } else
    if (a>=81 && a<=90) {
        return "B";
    } else
    if (a>=71 && a<=80) {
        return "C";
    } else
    if (a>=61 && a<=70) {
        return "D";
    } else {
        return "E";
    }
  }

  console.log("nilai(95) : "+nilai(95));
  console.log("nilai(85) : "+nilai(85));
  console.log("nilai(75) : "+nilai(75));
  console.log("nilai(65) : "+nilai(65));
  console.log("nilai(55) : "+nilai(55));