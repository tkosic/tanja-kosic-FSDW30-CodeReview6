class Media {

	constructor(title, author, genre, image, publisher) {
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.image = image;
		this.publisher = publisher;
	}
}

var album = [
	new Media("New Eyes", "Clean Bandit", "House | Sythie Pop", "img/cds/clean-bandit.jpg", "Atlantic Records UK"),
	new Media("Divide", "Ed Sheeren", "Pop", "img/cds/ed.jpg", "Atlantic Records UK"),
	new Media("Pandora", "Božo Vrećo", "Sevdah", "img/cds/bozo.jpg", "unknown"),
	new Media("Parachutes", "Coldplay", "Alternative | Indie Rock", "img/cds/coldplay.png", "Parlophone | Warner Music Group"),
];

var books = [
	new Media("Jenseits von Gut und Böse", "Friedrich Nietzsche", "Reference work", "img/books/friedrich.jpg", "Moral|Metaphysics"),
	new Media("Die unerträgliche Leichtigkeit des Seins", "Milan Kundera", "Philosophical Novel", "img/books/milan.jpg", "Philosophy"),
	new Media("Darm mit Charme", "Giulia Enders", "Non Fiction", "img/books/darm.jpg", "Health|Digestive system"),
	new Media("Der Idiot", "Fjodor Dostojewski", "Philosophical Novel", "img/books/fjodor.jpg", "Philosophy"),
];

var movies = [
	new Media("Lawrence of Arabia", "T.E.Lawrence", "Historical Drama", "img/dvds/lawrence.jpg", "Columbia Pictures"),
	new Media("The Pianist", "Roman Polanski", "Biography|Drama", "img/dvds/pianist.jpg", "Focus Features"),
	new Media("The Shawshank Redemption", "Frank Darabont", "Crime|Drama", "img/dvds/shawshank.jpg", "Columbia Pictures"),
	new Media("The Intouchables", "Olivier Nakache|Éric Toledano", " Biography|Comedy|Drama", "img/dvds/intouchables.jpg", "Quad Productions")
];

var shows = [
	new Media("Friends", "David Crane | Marta Kauffman", "Comedy | Romance", "img/series/friends.jpg", " Warner Bros. Television"),
	new Media("The Big Bang Theory", "Chuck Lorre | Bill Prady", " Comedy | Romance", "img/series/bigbang.jpg", "Warner Bros. Television"),
	new Media("Breaking Bad", "Vince Gilligan", "Crime | Drama | Thriller", "img/series/breakingbad.jpg", "High Bridge Productions"),
	new Media("Game of Thrones ", "David Benioff | D.B. Weiss", " Action | Adventure | Drama", "img/series/thrones.jpg", "Home Box Office (HBO)")
];

//Getting the elements Id's from HTML
var allCds = document.getElementById("cds");
var allBooks = document.getElementById("books");
var allMovies = document.getElementById("dvds");
var allShows = document.getElementById("series");

//Loop for Music
for (var i=0; i<album.length; i++) {
	allCds.innerHTML += '<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">' +
	'<h3>' + album[i].author + '</h3>' +
	'<div><img src="' + album[i].image + '" class="center-block"></div>' +
		'<h4><strong>' + album[i].title + '</strong></h4>' + 
		'<p>' + album[i].genre + '<br>' +
				album[i].publisher + '<br>' +
				'Tanja\'s rating: <br>' + 
					'<span class="fa fa-star"></span>' + 
					'<span class="fa fa-star"></span>' +
					'<span class="fa fa-star"></span>' +
					'<span class="fa fa-star"></span>' +
					'<span class="fa fa-star"></span>'+
		'</p>' + 
	'</div>';
}

//Loop for Books
for (var i=0; i<books.length; i++) {
	allBooks.innerHTML += '<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">' +
	'<h3>' + books[i].author + '</h3>' +
	'<div><img src="' + books[i].image + '" class="center-block"></div>' +
		'<h4><strong>' + books[i].title + '</strong></h4>' + 
		'<p>' + books[i].genre + '<br>' +
				books[i].publisher + '<br>' +
				'Tanja\'s rating: <br>' + 
					'<span class="fa fa-star"></span>' + 
					'<span class="fa fa-star"></span>' +
					'<span class="fa fa-star"></span>' +
					'<span class="fa fa-star"></span>' +
					'<span class="fa fa-star"></span>'+
		'</p>' + 
	'</div>';
}

//Loop for Movies
for (var i=0; i<movies.length; i++) {
	allMovies.innerHTML += '<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">' +
	'<h3>' + movies[i].title + '</h3>' +
	'<div><img src="' + movies[i].image + '" class="center-block"></div>' +
		'<h4><strong>' + movies[i].genre + '</strong></h4>' + 
		'<p>' + movies[i].author + '<br>' +
				movies[i].publisher + '<br>' +
				'Tanja\'s rating: <br>' + 
					'<span class="fa fa-star"></span>' + 
					'<span class="fa fa-star"></span>' +
					'<span class="fa fa-star"></span>' +
					'<span class="fa fa-star"></span>' +
					'<span class="fa fa-star"></span>'+
		'</p>' + 
	'</div>';
}

//Loop for TV Series
for (var i=0; i<shows.length; i++) {
	allShows.innerHTML += '<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">' +
	'<h3>' + shows[i].title + '</h3>' +
	'<div><img src="' + shows[i].image + '" class="center-block"></div>' +
		'<h4><strong>' + shows[i].genre + '</strong></h4>' + 
		'<p>' + shows[i].author + '<br>' +
				shows[i].publisher + '<br>' +
				'Tanja\'s rating: <br>' + 
					'<span class="fa fa-star"></span>' + 
					'<span class="fa fa-star"></span>' +
					'<span class="fa fa-star"></span>' +
					'<span class="fa fa-star"></span>' +
					'<span class="fa fa-star"></span>'+
		'</p>' + 
	'</div>';
}