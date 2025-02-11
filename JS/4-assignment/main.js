function isPalindrome(str) {
    let newStr = str.split(' ').join('')
    let str1 = newStr.split(',').join('')
    let myStr = str1.toLowerCase()
    let strLen = myStr.length 

    const mid_index = Math.floor(strLen / 2)
    let right = null
    let left = myStr.slice(0, mid_index)
    if (strLen === 2) {
        right = myStr.slice(mid_index, strLen).split('').reverse().join('')
    } else {
        right = myStr.slice(mid_index + 1, strLen).split('').reverse().join('')
    }

    right.split('').reverse().join('')
    //console.log(left, right)

    if (left === right) {
        return true
    }
    return false 
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome('A man, a plan, a canal, Panama'))
console.log(isPalindrome('bb'))

function reverse(str) {
    return str.split('').reverse().join('')
}

console.log(reverse("moses"))

function longestPalindromicSubstring(str) {
    let longest = ""
    for (let i = 0; i <= str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let substring = str.substring(i, j + 1)
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring
            }
        }   
    }
    return longest
}

console.log(longestPalindromicSubstring('babad'))
console.log(longestPalindromicSubstring('cbbd'))

function areAnagrams(str1, str2) {
    let n1 = str1.length
    let n2 = str2.length

    if (n1 !== n2) {
        return false 
    }

    let smallStr1 = str1.toLowerCase()
    let smallStr2 = str2.toLowerCase()

    let sorted1 = smallStr1.split('').sort().join('')
    let sorted2 = smallStr2.split('').sort().join('')

    console.log(sorted1, sorted2)
    for (let i = 0; i < n1; i++) {
        if (sorted1[i] !== sorted2[i]) {
            return false 
        }
    }

    return true

}

console.log(areAnagrams('Listen', 'Silent'))

function removeDuplicates(str) {
    let res = ''
    let seen = new Set()

    for (let i = 0; i < str.length; i++) {
        if (!seen.has(str[i])) {
            res += str[i]
            seen.add(str[i])
        }
    }

    return res 
}

console.log(removeDuplicates('programming'))
function countPalindromes(s) {
    let n = s.length;

    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          
         
            if (isPalindrome(s, i, j)) 
                res++;  
        }
    }

    return res;
}
console.log(countPalindromes('racecar'))

function longestCommonPrefix(arr) {
    arr.sort()
    let first = arr[0]
    let last = arr[arr.length - 1]
    let minLen = Math.min(first.length, last.length)

    let i = 0
    while (i < minLen && first[i] === last[i]) {
        i++
    }
    return first.substring(0, i)
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))

function isCaseSensitivePalindrome(palindrome) {
    return isPalindrome(palindrome)
}

console.log(isCaseSensitivePalindrome('Aba'))



