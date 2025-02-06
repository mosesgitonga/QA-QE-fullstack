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
// Test
console.log(is_string("W3resource")); // true
console.log(is_string(2)); // false

console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // false

console.log(string_to_array("Robin Singh"));

console.log(truncate_string("Robin Singh", 4)); // "Robi"

console.log(abbrev_name("Robin Singh")); // "Robin S."

console.log(protect_email("robin_singh@example.com"));

console.log(string_parameterize("Robin Singh from USA."));

console.log(capitalize('js string exercises'));