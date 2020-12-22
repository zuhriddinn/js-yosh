let c = prompt ('Ismiz ')

function age() {
    let  a = +prompt('Hoz nechanchi yil')
    let  b = +prompt('Nechanchi yil tug`ilgansiz')
    
    return a-b
}

if(age){
alert('Sizni ismingiz ' + c + ' yoshinigiz ' + age() + ' da')
}