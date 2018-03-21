/*var element = React.createElement('div', {}, 'Hello world!');
ReactDOM.render(element, document.getElementById('app'));
*/

/*var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Potter'),
                React.createElement('p', {}, 'Film o czarodzieju')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Król Lew'),
                React.createElement('p', {}, 'Film o lwie')
            )
        )
    );
ReactDOM.render(element, document.getElementById('app'));
*/

var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        actor: 'Daniel Radcliffe',
        image: 'https://static.posters.cz/image/3d/6328.gif'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o lwie',
        actor: 'lew',
        image: 'http://www.gify.net/data/media/1321/krol-lew-ruchomy-obrazek-0162.gif'
    },
    {
        id: 3,
        title: 'Predator',
        desc: 'Komandosi kontra obcy',
        actor: 'Arnold Schwarzenegger',
        image: 'https://media.giphy.com/media/xQvTA5AZ9CFpe/giphy.gif'
    },
    {
        id: 4,
        title: 'Szeregowiec Ryan',
        desc: 'Lądowanie w Normandii',
        actor: 'Tom Hanks',
        image: 'http://education-copyright.org/img/saving-private-ryan-gif-funny.gif'
    },
    {
        id: 5,
        title: 'Obcy-8 pasażer Nostromo',
        desc: 'Sieczka w kosmosie',
        actor: 'Sigourney Weaver',
        image: 'http://www.gifmania.pl/Animowane-Gify-Filmy/Obrazki-Animowane-Film-Fantastycznonaukowy/Animacje-Obcy/Obcy-81665.gif'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('p', {}, movie.actor),
        React.createElement('img', {src:movie.image } )
    );
});
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));