const questions = [
    {
        id: 1,
        img: 'paris',
        answers: [
        {
            key: 'a',
            text: 'Paris'
        },
        {
            key: 'b',
            text: 'Lisbon'
        },
        {
            key: 'c',
            text: 'Milan'
        },
        {
            key: 'd',
            text: 'Amsterdam'
        }
        ],
        correct: 'a'
    },
    {
        id: 2,
        img: 'lisbon',
        answers: [
        {
            key: 'a',
            text: 'Rome'
        },
        {
            key: 'b',
            text: 'Lisbon'
        },
        {
            key: 'c',
            text: 'Porto'
        },
        {
            key: 'd',
            text: 'Naples'
        }
        ],
        correct: 'b'
    },
    {
        id: 3,
        img: 'barcelona',
        answers: [
        {
            key: 'a',
            text: 'Madrid'
        },
        {
            key: 'b',
            text: 'Budapest'
        },
        {
            key: 'c',
            text: 'Rome'
        },
        {
            key: 'd',
            text: 'Barcelona'
        }
        ],
        correct: 'd'
    },
    {
        id: 4,
        img: 'london',
        answers: [
        {
            key: 'a',
            text: 'London'
        },
        {
            key: 'b',
            text: 'Prague'
        },
        {
            key: 'c',
            text: 'Budapest'
        },
        {
            key: 'd',
            text: 'Munich'
        }
        ],
        correct: 'a'
    },
    {
        id: 5,
        img: 'amsterdam',
        answers: [
        {
            key: 'a',
            text: 'Venice'
        },
        {
            key: 'b',
            text: 'Amsterdam'
        },
        {
            key: 'c',
            text: 'Lille'
        },
        {
            key: 'd',
            text: 'Brussels'
        }
        ],
        correct: 'b'
    },
    {
        id: 6,
        img: 'athens',
        answers: [
        {
            key: 'a',
            text: 'Rome'
        },
        {
            key: 'b',
            text: 'Saloniki'
        },
        {
            key: 'c',
            text: 'Athens'
        },
        {
            key: 'd',
            text: 'Dubrovnik'
        }
        ],
        correct: 'c'
    },
    {
        id: 7,
        img: 'berlin',
        answers: [
        {
            key: 'a',
            text: 'Zurich'
        },
        {
            key: 'b',
            text: 'Warsaw'
        },
        {
            key: 'c',
            text: 'Berlin'
        },
        {
            key: 'd',
            text: 'Brussels'
        }
        ],
        correct: 'c'
    },
    {
        id: 8,
        img: 'krakow',
        answers: [
        {
            key: 'a',
            text: 'Krakow'
        },
        {
            key: 'b',
            text: 'Prague'
        },
        {
            key: 'c',
            text: 'Lviv'
        },
        {
            key: 'd',
            text: 'Vienna'
        }
        ],
        correct: 'a'
    },
    {
        id: 9,
        img: 'dublin',
        answers: [
        {
            key: 'a',
            text: 'Dublin'
        },
        {
            key: 'b',
            text: 'London'
        },
        {
            key: 'c',
            text: 'Paris'
        },
        {
            key: 'd',
            text: 'Belfast'
        }
        ],
        correct: 'a'
    },
    {
        id: 10,
        img: 'dubrovnik',
        answers: [
        {
            key: 'a',
            text: 'Porto'
        },
        {
            key: 'b',
            text: 'Malaga'
        },
        {
            key: 'c',
            text: 'Dubrovnik'
        },
        {
            key: 'd',
            text: 'Athens'
        }
        ],
        correct: 'c'
    },
    {
        id: 11,
        img: 'prague',
        answers: [
        {
            key: 'a',
            text: 'Drezno'
        },
        {
            key: 'b',
            text: 'Rimini'
        },
        {
            key: 'c',
            text: 'Gdansk'
        },
        {
            key: 'd',
            text: 'Prague'
        }
        ],
        correct: 'd'
    },
    {
        id: 12,
        img: 'budapest',
        answers: [
        {
            key: 'a',
            text: 'Lviv'
        },
        {
            key: 'b',
            text: 'Budapest'
        },
        {
            key: 'c',
            text: 'Wroclaw'
        },
        {
            key: 'd',
            text: 'Prague'
        }
        ],
        correct: 'b'
    },
]

const shuffle = (array) => {
    const b = array.slice()
    const newArr = [];
    
    for(let i= 0; i<array.length; i++){
     let arr = b[Math.floor(Math.random()*b.length)];
      
     let index = b.indexOf(arr);
      
      b.splice(index, 1 );
      
      newArr.push(arr)
      
    }
    return newArr
}

export const shuffledQuestions = shuffle(questions)