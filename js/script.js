let numberOfFilms; 

function start() {
    numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "");
    
    while (numberOfFilms == '' || numberOfFilms ==null ||  isNaN(numberOfFilms)){
    numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", ""); 
    }
}

 start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
    
};


function rememberMyFilms(){
    for (let i = 0; i < 2 ; i++) {
        const a = prompt('один из последних просмотренных фильмов?', ''),
              b = prompt('на сколько его оценице?', '');
        if (a != null && b != null && a != ''  && b != '' && a.length < 50) {
            personalMovieDB.movies [a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDB.count < 10 ) {
        console.log ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log (" Вы класический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log ("вы киноман");
    } else {
        console.log ("ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hiden) {
    if (!hiden) {
        console.log(personalMovieDB);
    }
}


showMyDB(personalMovieDB.privat);
 
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);  
    }
}

writeYourGenres();


















 
 