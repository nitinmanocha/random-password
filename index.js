//created by https://nitinmanocha.in

module.exports = (type, length) => {
    if (!type || type == '' || type == null || typeof (type) != 'string')
        type = "all"

    if (!length || length == '' || length == null || length == 0 || typeof (length) != 'number')
        length = 10

    var result = ''
    var set = "a_bc@#de$f%012&3ghijklm&:?nopq567rst$*&%^&*()uvwx^y#z489!><}{][';.,/"
    if (type.toLowerCase() == 'alphabets') {
        set = "abcdefghijklmnopqrstuvwxyzQWERTYUIOPLKJHGFDSAXZCVBNM"
        for (var i = 0; i < length; i++)
            result += set.charAt(Math.floor(Math.random() * 40));
    } else if (type.toLowerCase() == 'number') {
        set = "012345678901234567890123456789"
        for (var i = 0; i < length; i++)
            result += set.charAt(Math.floor(Math.random() * 9));
    } else {
        for (var i = 0; i < length; i++)
            result += set.charAt(Math.floor(Math.random() * 40));
    }
    return result
}

