const myCity = {
    city: 'Tashkent',
    popular: true,
    country: 'Uzbekistan'
}
/*
console.log(myCity.city) //Tashkent

console.log(myCity.popular) //true

const city = {
    city: 'New York'
}

city.city = 'Las Vegas'

city.popular = true

console.log(city) // { city: 'Las Vegas', popular: true }
*/

/*

console.log(myCity) //{ city: 'Tashkent', popular: true, country: 'Uzbekistan' }
delete myCity.country
console.log(myCity) //{ city: 'Tashkent', popular: true }

*/


/*
const city = {
    city: 'New York'
}

city['popular'] = true

console.log(city) //{ city: 'New York', popular: true }

const countryPropertyName = 'country'

city[countryPropertyName] = 'the USA'

console.log(city) //{ city: 'New York', popular: true, country: 'the USA' }

*/


/*
const city = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'the USA'
    }
}

console.log(city.info.isPopular) // true

delete city.info['isPopular']

console.log(city) // { city: 'New York', info: { country: 'the USA' } }
 */


const name = 'James Bond'
const postsQty = 12

const userProfile = {
    name,
    postsQty,
    hasSignedAggreemaent: false
}

console.log(userProfile) // { name: 'James Bond', postsQty: 12, hasSignedAggreemaent: false }
 