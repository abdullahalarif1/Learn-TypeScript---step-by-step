


// spread operator
const bros1: string[] = ['Fayez', 'Turag', 'Sohan', 'banty']
const bros2: string[] = ['Fayez1', 'Turag2', 'Sohan3', 'banty4']

bros1.push(...bros2)

const friends1 = {
    college: 'akik',
    school: 'fyz',

}

const friends2 = {
    university: 'fahim',
    regular: 'fyz1',

}

const friendsList = {
    ...friends1,
    ...friends2,
}


// rest operator
const greetFriends =(...friends: string[]) => {
  friends.forEach(friend => {
    console.log(friend);
  })
}

greetFriends('abul', 'kabul', 'chubul', 'rahul')
