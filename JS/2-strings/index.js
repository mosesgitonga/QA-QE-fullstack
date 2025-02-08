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

const uncamelize = (str, a=' ') => {
    let res = "";
    if (typeof a !== "string" || a.length === 0) {
        a = "-"; 
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase() && i !== 0) {
            res += a;
        }
        res += char.toLowerCase();
    }
    return res;
}

const repeat = (some_str, n) => {
    const res = some_str.repeat(n)
    return res
}

const insert = (some_str, insert_str, n) => {
    let new_str = some_str.slice(0, n - 1) + " " + insert_str + some_str.slice(n, some_str.length)
    return new_str
}

const humanize_format = (some_num) => {
    let num_str = some_num.toString();
    let last_num = parseInt(num_str[num_str.length - 1], 10); 
    let last_two_digits = some_num % 100; 

    if ([11, 12, 13].includes(last_two_digits)) {
        return `${some_num}th`;
    }

    const human_key = {
        "th": [0, 4, 5, 6, 7, 8, 9],
        "st": [1],
        "nd": [2],
        "rd": [3]
    };

    let suffix = "th"; 

    for (const [key, values] of Object.entries(human_key)) {
        if (values.includes(last_num)) { 
            suffix = key;
            break;
        }
    }

    return `${some_num}${suffix}`;
};

const text_truncate = (some_str, index, append_txt) => {
    let trucated_txt = truncate_string(some_str, index)
    return `${trucated_txt} ${append_txt}`
}

const string_chop = (some_str, size) => {
    let chopped = [];
    for (let i = 0; i < some_str.length; i += size) {
        chopped.push(some_str.slice(i, i + size)); 
    }
    return chopped;
};

const count = (main_str, sub_str) => {
    let lowercaseStr = main_str.toLowerCase()

    let pos = lowercaseStr.indexOf(sub_str)
    let count = 0;

    while (pos !== -1) {
        count ++
        pos = main_str.indexOf(sub_str, pos + 1)
    }

    return count    
}   

const reverse_binary = (num) => {
    let binaryStr = num.toString(2);

    let reversedBinaryStr = binaryStr.split('').reverse().join('');
    let decimalRes = parseInt(reversedBinaryStr, 2);
    return decimalRes;
}

const formatted_string = (padding, str, direction) => {
    str = str.toString();    
    let length = padding.length;
    
    if (direction === 'l') {
        return str.padStart(length, padding[0]);
    } else if (direction === 'r') {
        return str.padEnd(length, padding[0]); 
    }
};
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

console.log(capitalize_Words('js string exercises')); // "Js String Exercises"

console.log(swapcase('AaBbc')); // "aAbBC"

console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"

console.log(uncamelize('helloWorld','-')); // "hello-world"
console.log(uncamelize('helloWorld')); // "hello world"

console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"

console.log(insert('We are doing some exercises.', 'JavaScript ', 18));

console.log(humanize_format(301)); // "301st"

console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));

console.log(string_chop('w3resource', 3)); // ["w3r", "eso", "urc", "e"]

console.log(count("The quick brown fox jumps over the lazy dog", 'the'));

console.log(reverse_binary(100)); // 19

console.log(formatted_string('0000', 123, 'l')); // "0123"
