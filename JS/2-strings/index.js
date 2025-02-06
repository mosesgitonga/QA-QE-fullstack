const is_string = (some_string) => {
    /**
     * checks if is a string
     * some_string - the string to verify
     * return Boolean
     */
    if (typeof some_string === 'string') {
        return true
    }
    return false
}


const is_Blank = (some_string) => {
    /**
     * check if a string is blank
     * some_string - the actual string to check
     * return boolean
     */

    if (some_string === '') {
        return true 
    }
    return false 
}

const string_to_array = (some_string) => {
    /**
     * converts a string to an array of words.
     * some_string - the string to convert
     * returns an array of words
     */

    const theArray = some_string.split(' ')
    return theArray

}

const truncate_string = (some_string, index) => {
    /**
     * extracts characters of a string upto the index except the index itself
     *  some_string - the string to extract from
     *  index - the index upto which to extract to
     */
    if (some_string.length > index) {
        some_string = some_string.slice(0, index)
        return some_string
    }
}


const abbrev_name = (some_string) => {
    /**
     * abbreviates some strings
     * some_string - > the string
     * return String
     */
    let output

    let myArray = some_string.split(' ')
    const first_word = myArray[0]
    for (let i = 0; i < myArray.length; i++) {
        let current_word = myArray[i]
        if (i >= 1) {
            let first_letter = current_word[0]
            output = first_word.concat(" ", first_letter + '.')
        }
    }
    return output
}

const protect_email = (email) => {
    if (email.length >= 5) {
        const truncated_email = truncate_string(email, 5)
        const email_provider = email.split('@')[1]
        //email_provider = email_provider[1]
        const anonymous_email = truncated_email + "...@" + email_provider
        return anonymous_email
    }
}

const string_parameterize = (some_string) => {
    const lowercase_str = some_string.toLowerCase()
    const res = some_string.replaceAll(' ', '-')
    return res 
}

const capitalize = (some_string) => {
    const first_letter = some_string[0].toUpperCase()
    console.log(first_letter)
    let new_str = some_string.replace(some_string[0], first_letter)
    return new_str
}

const capitalize_Words = (some_string) => {
    const words = some_string.split(' ')
    let myArray = [];
    for (let i = 0; i < words.length; i++) {
        let word = capitalize(words[i])
        myArray.push(word)
    }
    let capitalizedWords = myArray.join(' ')
    return capitalizedWords 
}


const swapcase = (some_string) => {
    let new_str
    let myArray = []
    for (let i = 0; i < some_string.length; i++) {
        if (some_string[i] === some_string[i].toLowerCase()) {
            small_char = some_string[i].toUpperCase()
            myArray.push(small_char)
        } 
        cap_char = some_string[i].toLowerCase()
        myArray.push(cap_char)
    }
    let res = myArray.join('')
    return  res
}

const camelize = (some_string) => {
    let sliced = some_string.split(' ')
    console.log(sliced)
    const concated = sliced.join('')
    return concated
}

const uncamelize = (some_string, replacement) => {
    let res;
    let strings = some_string.slice(some_string[i])

    for (let i = 0; i < strings.length; i++) {
        if (some_string[i] === strings[i].toUpperCase() && strings[i] !== 0) {
            console.log(some_string[i])
            console.log(strings)
            // let concated = strings.join('-')
            // res = concated.toLowerCase()
        }
    }
    return res 
}


// Test
// console.log(is_string("W3resource")); // true
// console.log(is_string(2)); // false

// console.log(is_Blank('')); // true
// console.log(is_Blank('abc')); // false

// console.log(string_to_array("Robin Singh"));

// console.log(truncate_string("Robin Singh", 4)); // "Robi"

// console.log(abbrev_name("Robin Singh")); // "Robin S."

// console.log(protect_email("robin_singh@example.com"));

// console.log(string_parameterize("Robin Singh from USA."));

// console.log(capitalize('js string exercises'));

//console.log(capitalize_Words('js string exercises')); // "Js String Exercises"

// console.log(swapcase('AaBbc')); // "aAbBC"

// console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"

console.log(uncamelize('helloWorld','-')); // "hello-world"