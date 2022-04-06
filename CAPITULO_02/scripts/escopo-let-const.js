let movie = 'Lord of the Rings';
// var movie = 'Batman vs Superman'; lança um erro (movie já foi declarada)

function starWarsFan(){
    const movie = 'Star Wars'; //declara nova variável 'movie' dentro do escopo local
    return movie;
}

function marvelFan(){
    movie = 'The Avengers'; //altera o valor de 'movie' referente a variável global (linha 1)
    return movie;
}

function blizzardFan(){
    const isFan = true;
    let phrase = 'Warcraft'; //declara 'phrase' dentro do escopo local da função
    console.log('Before if: '+phrase);

    if(isFan){
        let phrase = 'initial text'; //declara 'phrase' dentro do escopo local do if
        phrase = 'For the Horde!'; //altera o valor de 'phrase' do escopo local do if (linha 20)
        console.log('Inside if: '+phrase)
    }

    phrase = 'For the Alliance!'; //altera o valor de 'phrase' do escopo local da função (linha 16)
    console.log('after if: '+phrase);
}

console.log(movie);
console.log(starWarsFan())
console.log(marvelFan())
console.log(movie)
blizzardFan()

//Esse mesmo comportamento pode ser visto em outras linguagens como C ou Java. 