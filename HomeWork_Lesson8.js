//add class code

class Movie {
    constructor(title, IMDbRating, duration) {
        this.title = title;
        this.IMDbRating = IMDbRating;
        this.duration = duration;
    }
};

const item1 = new Movie('Titanic',7.3, "3:14");
console.log(item1);