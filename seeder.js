/**
* call library
*/
const db = require('../config/database')
const User = require('../models/User')
const Bill = require('../models/Bill')
const booking = require('../models/booking')
const Chef = require('../models/Chef')
const Customer = require('../models/Customer')
const Waiter = require('../models/Waiter')
const Drink = require('../models/Drink')
const Food = require('../models/Food')
const Table = require('../models/Table')

// Users Seeder
let users = [
    new User({
        _id : ("5e946cbe64937321dc961e5e"),
        role : "adminstrator",
        Fname : "Muhammad",
        LName : "Parkar",
        Contact : "90225",
        email : "momo@gmail.com",
        password : "$2a$08$GwAHBgid3dyUSMDHvve43uS9hJemE5wiLaRSud9FinAnX2Fu2Wjp2",
        avatar : "profile.png",
        created_at : ("2020-04-13T13:44:30.521+00:00")
    })
]

// Drinks Seeder
let drinks = []

// Foods Seeder
let foods = []

// Tables Seeder
let tables = []

// Chefs Seeder
let chefs = []

// Waiters Seeder
let waiters = []

let cstomers = []

// Booking Seeder
let Booking = []

// Bills Seeder
let bills = []

// excute loop all objects
users.forEach( (users)=> {
    users.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})

// excute loop all objects
drinks.forEach( (drinks)=> {
    drinks.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})

// excute loop all objects
foods.forEach( (foods)=> {
    foods.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})

// excute loop all objects
tables.forEach( (tables)=> {
    tables.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})

// excute loop all objects
chefs.forEach( (chefs)=> {
    chefs.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})

// excute loop all objects
waiters.forEach( (waiters)=> {
    waiters.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})

// excute loop all objects
cstomers.forEach( (cstomers)=> {
    cstomers.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})

// excute loop all objects
Booking.forEach( (Booking)=> {
    Booking.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})

// excute loop all objects
bills.forEach( (bills)=> {
    bills.save( (err)=> {
        if (err) {
            console.log(err)
        }
    })
})