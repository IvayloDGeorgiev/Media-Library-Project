class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }

    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
      function sum(total, amount) {
        return total + amount;
      }
      const length = this._ratings.length;
      const average = this._ratings.reduce(sum) / length;
      return average; 
    }
    addRating(newRating) {
      if (newRating >= 1 && newRating <= 5) {
        this._ratings.push(newRating);
      } else {
        console.log('Each rating should be between 1 to 5.');
      }
    }
  }

  //Book class 
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = 0;

      mediaList._books.push(this._title + ' | ' + this._author);
    }

    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }

  //Movie class
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = 0;
      this._movieCast = [];

      mediaList._movies.push(this._title + ' | ' + this._director);
    }

    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
    get movieCast() {
      return this._movieCast;
    }

    addCast(castName) {
      this._movieCast.push(castName);
    }

    getNumOfCast() {
      return this._movieCast.length;
    }
  }

  //CD class
  class CD extends Media {
    constructor(title, artist, tracks) {
      super(title);
      this._artist = artist;
      this._tracks = tracks; //changed from 'songs', to avoid confusion with songTitles; tracks = number of songs
      this._songTitles = []; 

      mediaList._CDs.push(this._title + ' | ' + this._artist);
    }

    get artist() {
      return this._artist;
    }
    get tracks() {
      return this._tracks;
    }
    get songTitles() { 
      if (this._tracks === this._songTitles.length) {
        return this._songTitles;
      } else if (this._tracks > this._songTitles.length) {
        let moreTracks = this._tracks - this._songTitles.length;
        return this._songTitles + `, and ${moreTracks} unknown track(s)`;
      } else if (this._tracks < this._songTitles.length) {
        let moreTitles = this._songTitles.length - this._tracks
        return this._tracks + moreTitles;
      }
    }

    addSongTitles(songTitle) {
      this._songTitles.push(songTitle);
    }

    shuffle() {
      let trackLength = this._songTitles.length;
      let randomNum = Math.floor(Math.random()*trackLength);
      return this._songTitles[randomNum];
    }
  }


  class Catalog {
    constructor() {
      this._books = [];
      this._movies = [];
      this._CDs = [];
    }

    get books() {
      return this._books;
    }
    get movies() {
      return this._movies;
    }
    get CDs() {
      return this._CDs;
    }


  }

  const mediaList = new Catalog;


  // Instance : BOOK
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

  historyOfEverything.toggleCheckOutStatus();
  //console.log(historyOfEverything.isCheckedOut);

  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  //console.log(historyOfEverything.getAverageRating());

  const theSecret = new Book('The Secret', 'Rhonda B.', 450);
  theSecret.addRating(5);
  theSecret.addRating(4);
  theSecret.addRating(3);
  //console.log(theSecret.getAverageRating());


  // Instance : MOVIE
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  //console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  //console.log(speed.getAverageRating());
  speed.addCast('Michael Ford');
  speed.addCast('Rimmy Joe');
  //console.log(speed.getNumOfCast());

  const avengers = new Movie('Avengers', 'Anthony R., Joe R., Joss W.', 220);
  avengers.addRating(5);
  avengers.addCast('Chris H.');
  avengers.addCast('Scarlett J.');
  avengers.addCast('Robert Jr.');
  //console.log(avengers.movieCast);

  // Instance : CD
  const myLover = new CD('My Lover', 'Jennifer Lee', 2);
  myLover.addSongTitles('When you were gone');
  myLover.addSongTitles('Waiting for you');
  myLover.addSongTitles('Love You Forever');
  //console.log(myLover.tracks);
  //console.log(myLover.songTitles);
  //console.log(myLover.shuffle());

  const afterSchool = new CD('After School', 'Laura V.', 7);
  afterSchool.addSongTitles('Homemade Cookies');
  afterSchool.addSongTitles('Birthday Party Invite');
  afterSchool.addSongTitles('Texting with Crush');
  afterSchool.addSongTitles('I Liked Your Post');
  afterSchool.addSongTitles('Movies with Dad');
  afterSchool.addSongTitles(`Don't wanna go to bed`);
  //console.log(afterSchool.shuffle());

  //console.log(mediaList);
  console.log(mediaList.books);
  console.log(mediaList.movies);
  console.log(mediaList.CDs); 