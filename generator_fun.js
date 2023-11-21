function* generatorFn(){
    return 'hello vineesh welcome '
}

const generator = generatorFn()

// console.log(generator.next())

function* gen(){
    yield 'hello'
    yield 'vineesh'
    yield 'welcome'
}

const gene = gen()

// console.log(gene.next())
// console.log(gene.next())
// console.log(gene.next())

function* even(){
    let count = 0

    while(true){
        yield count
        count += 2;
    }
}

const evengen = even()

// console.log(evengen.next())
// console.log(evengen.next())
// console.log(evengen.next())
// console.log(evengen.next())

///////////////////////////////////

function* even(){
    let count = 2;
    while(true){
        yield count
        count += 2
    }
}

const call = even()

for (let i=0; i<5 ; i++){
    console.log(call.next().value)
}