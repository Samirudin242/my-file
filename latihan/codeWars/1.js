/**
 The marketing team is spending way too much time typing in hashtags.
 Let's help them with our own Hashtag Generator!
 
 Here's the deal:
 
 It must start with a hashtag (#).
 All words must have their first letter capitalized.
 If the final result is longer than 140 chars it must return false.
 If the input or the result is an empty string it must return false.
 * 
 */

function generateHashtag (str) {
   
    let arr = []
    let temp = []
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            temp.push(str[i])
        } else if(str[i] === ' ') {
            arr.push(temp)
            temp = []
        }
    }
    arr.push(temp)
    let res = ''
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            arr[i][0] = arr[i][0].toUpperCase()
            res += arr[i][j]
        }
    }
    if(res.length > 140 || res.length < 1) {
        return false
    } else {
        return `#${res}`
    }

}


console.log(generateHashtag('Hervita Ayu Wulandari'))
console.log(generateHashtag('Hervita ayu Wulandari'))