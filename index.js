const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}]

const averageAge = arr => {
    return Math.floor(arr.reduce((acc,curr) =>{
        return acc + curr.age
    },0)/arr.length)
}
console.log(averageAge(alumni))

const orderedAlumni = arr => {
    return arr.sort((a,b) => b.age - a.age)
}
console.log(orderedAlumni(alumni))

const allUseJavaScript = arr => {
    return arr.every(elem => /(javascript)/gi.test(elem.language))
}

console.log(allUseJavaScript(alumni))