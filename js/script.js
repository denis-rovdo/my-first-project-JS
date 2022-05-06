const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
    
};
let i = 0;
do {
    i++; 
    const a = prompt('один из последних просмотренных фильмов?', '');
        b = prompt('на сколько его оценице?', '');
                if (a != null && b != null && a != ''  && b != '' && a.length < 50) {
                    personalMovieDB.movies [a] = b;
                    console.log('done');
                } else {
                    console.log('error');
                    i--;
                }
            } while(i < 2);
if (personalMovieDB.count < 10 ) {
    console.log ("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log (" Вы класический зритель");
} else if (personalMovieDB.count > 30) {
    console.log ("вы киноман");
} else {
    console.log ("ошибка");
}

/* for (let i = 0; i < 2 ; i++) {
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

if (personalMovieDB.count < 10 ) {
    console.log ("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log (" Вы класический зритель");
} else if (personalMovieDB.count > 30) {
    console.log ("вы киноман");
} else {
    console.log ("ошибка");
} */
   
console.log(personalMovieDB);

 




/* while(let i =0; i < 2 ; i++ ) {
    const a = prompt('один из последних просмотренных фильмов?', ''),
          b = prompt('на сколько его оценице?', '');

} */