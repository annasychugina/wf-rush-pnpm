/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * Maps the names of commonly used characters to the string of length 1 that contains that character.
 */
export const enum Char {
    // C0 controls

    /** NULL                                                    (0x00) */ null                     = "\0",
    /** BACKSPACE                                               (0x08) */ backspace                = "\b",
    /** CHARACTER TABULATION, horizontal tabulation (HT), tab   (0x09) */ characterTabulation      = "\t",
    /** LINE FEED (LF), new line (NL), end of line (EOL)        (0x0A) */ lineFeed                 = "\n",
    /** LINE TABULATION, vertical tabulation (VT)               (0x0B) */ lineTabulation           = "\v",
    /** FORM FEED (FF)                                          (0x0C) */ formFeed                 = "\f",
    /** CARRIAGE RETURN (CR)                                    (0x0D) */ carriageReturn           = "\r",

    // ASCII punctuation and symbols

    /** SPACE                                                   (0x20) */ space                    = " ",
    /** EXCLAMATION MARK, factorial, bang                       (0x21) */ exclamationMark          = "!",
    /** QUOTATION MARK                                          (0x22) */ quotationMark            = "\"",
    /** NUMBER SIGN, pound sign, hash, crosshatch, octothorpe   (0x23) */ numberSign               = "#",
    /** DOLLAR SIGN, milréis, escudo                            (0x24) */ dollarSign               = "$",
    /** PERCENT SIGN                                            (0x25) */ percentSign              = "%",
    /** AMPERSAND                                               (0x26) */ ampersand                = "&",
    /** APOSTROPHE, apostrophe-quote (1.0), APL quote           (0x27) */ apostrophe               = "'",
    /** LEFT PARENTHESIS, opening parenthesis                   (0x28) */ leftParenthesis          = "(",
    /** RIGHT PARENTHESIS, closing parenthesis (1.0)            (0x29) */ rightParenthesis         = ")",
    /** ASTERISK, star (on phone keypads)                       (0x2A) */ asterisk                 = "*",
    /** PLUS SIGN                                               (0x2B) */ plusSign                 = "+",
    /** COMMA                                                   (0x2C) */ comma                    = ",",
    /** HYPHEN-MINUS, hyphen or minus sign                      (0x2D) */ hyphenMinus              = "-",
    /** FULL STOP, period, dot, decimal point                   (0x2E) */ fullStop                 = ".",
    /** SOLIDUS, slash, virgule                                 (0x2F) */ solidus                  = "/",

    // ASCII digits

    /** DIGIT ZERO  (0x30) */ digit0 = "0",
    /** DIGIT ONE   (0x31) */ digit1 = "1",
    /** DIGIT TWO   (0x32) */ digit2 = "2",
    /** DIGIT THREE (0x33) */ digit3 = "3",
    /** DIGIT FOUR  (0x34) */ digit4 = "4",
    /** DIGIT FIVE  (0x35) */ digit5 = "5",
    /** DIGIT SIX   (0x36) */ digit6 = "6",
    /** DIGIT SEVEN (0x37) */ digit7 = "7",
    /** DIGIT EIGHT (0x38) */ digit8 = "8",
    /** DIGIT NINE  (0x39) */ digit9 = "9",

    // ASCII punctuation and symbols

    /** COLON               (0x3A) */ colon            = ":",
    /** SEMICOLON           (0x3B) */ semicolon        = ";",
    /** LESS-THAN SIGN      (0x3C) */ lessThanSign     = "<",
    /** EQUALS SIGN         (0x3D) */ equalsSign       = "=",
    /** GREATER-THAN SIGN   (0x3E) */ greaterThanSign  = ">",
    /** QUESTION MARK       (0x3F) */ questionMark     = "?",
    /** COMMERCIAL AT       (0x40) */ commercialAt     = "@",

    // Uppercase Latin alphabet

    /** LATIN CAPITAL LETTER A (0x41) */ A = "A",
    /** LATIN CAPITAL LETTER B (0x42) */ B = "B",
    /** LATIN CAPITAL LETTER C (0x43) */ C = "C",
    /** LATIN CAPITAL LETTER D (0x44) */ D = "D",
    /** LATIN CAPITAL LETTER E (0x45) */ E = "E",
    /** LATIN CAPITAL LETTER F (0x46) */ F = "F",
    /** LATIN CAPITAL LETTER G (0x47) */ G = "G",
    /** LATIN CAPITAL LETTER H (0x48) */ H = "H",
    /** LATIN CAPITAL LETTER I (0x49) */ I = "I",
    /** LATIN CAPITAL LETTER J (0x4A) */ J = "J",
    /** LATIN CAPITAL LETTER K (0x4B) */ K = "K",
    /** LATIN CAPITAL LETTER L (0x4C) */ L = "L",
    /** LATIN CAPITAL LETTER M (0x4D) */ M = "M",
    /** LATIN CAPITAL LETTER N (0x4E) */ N = "N",
    /** LATIN CAPITAL LETTER O (0x4F) */ O = "O",
    /** LATIN CAPITAL LETTER P (0x50) */ P = "P",
    /** LATIN CAPITAL LETTER Q (0x51) */ Q = "Q",
    /** LATIN CAPITAL LETTER R (0x52) */ R = "R",
    /** LATIN CAPITAL LETTER S (0x53) */ S = "S",
    /** LATIN CAPITAL LETTER T (0x54) */ T = "T",
    /** LATIN CAPITAL LETTER U (0x55) */ U = "U",
    /** LATIN CAPITAL LETTER V (0x56) */ V = "V",
    /** LATIN CAPITAL LETTER W (0x57) */ W = "W",
    /** LATIN CAPITAL LETTER X (0x58) */ X = "X",
    /** LATIN CAPITAL LETTER Y (0x59) */ Y = "Y",
    /** LATIN CAPITAL LETTER Z (0x5A) */ Z = "Z",

    // ASCII punctuation and symbols

    /** LEFT SQUARE BRACKET, opening square bracket (1.0)   (0x5B) */ leftSquareBracket        = "[",
    /** REVERSE SOLIDUS, backslash                          (0x5C) */ reverseSolidus           = "\\",
    /** RIGHT SQUARE BRACKET, closing square bracket        (0x5D) */ rightSquareBracket       = "]",
    /** CIRCUMFLEX ACCENT                                   (0x5E) */ circumflexAccent         = "^",
    /** LOW LINE, spacing underscore (1.0)                  (0x5F) */ lowLine                  = "_",
    /** GRAVE ACCENT                                        (0x60) */ graveAccent              = "`",

    // Lowercase Latin alphabet

    /** LATIN SMALL LETTER A (0x61) */ a = "a",
    /** LATIN SMALL LETTER B (0x62) */ b = "b",
    /** LATIN SMALL LETTER C (0x63) */ c = "c",
    /** LATIN SMALL LETTER D (0x64) */ d = "d",
    /** LATIN SMALL LETTER E (0x65) */ e = "e",
    /** LATIN SMALL LETTER F (0x66) */ f = "f",
    /** LATIN SMALL LETTER G (0x67) */ g = "g",
    /** LATIN SMALL LETTER H (0x68) */ h = "h",
    /** LATIN SMALL LETTER I (0x69) */ i = "i",
    /** LATIN SMALL LETTER J (0x6A) */ j = "j",
    /** LATIN SMALL LETTER K (0x6B) */ k = "k",
    /** LATIN SMALL LETTER L (0x6C) */ l = "l",
    /** LATIN SMALL LETTER M (0x6D) */ m = "m",
    /** LATIN SMALL LETTER N (0x6E) */ n = "n",
    /** LATIN SMALL LETTER O (0x6F) */ o = "o",
    /** LATIN SMALL LETTER P (0x70) */ p = "p",
    /** LATIN SMALL LETTER Q (0x71) */ q = "q",
    /** LATIN SMALL LETTER R (0x72) */ r = "r",
    /** LATIN SMALL LETTER S (0x73) */ s = "s",
    /** LATIN SMALL LETTER T (0x74) */ t = "t",
    /** LATIN SMALL LETTER U (0x75) */ u = "u",
    /** LATIN SMALL LETTER V (0x76) */ v = "v",
    /** LATIN SMALL LETTER W (0x77) */ w = "w",
    /** LATIN SMALL LETTER X (0x78) */ x = "x",
    /** LATIN SMALL LETTER Y (0x79) */ y = "y",
    /** LATIN SMALL LETTER Z (0x7A) */ z = "z",

    // ASCII punctuation and symbols

    /** LEFT CURLY BRACKET, opening curly bracket (1.0), left brace     (0x7B) */ leftCurlyBracket     = "{",
    /** VERTICAL LINE, vertical bar                                     (0x7C) */ verticalLine         = "|",
    /** RIGHT CURLY BRACKET, closing curly bracket (1.0), right brace   (0x7D) */ rightCurlyBracket    = "}",
    /** TILDE                                                           (0x7E) */ tilde                = "~",
    
    // Control character

    /** DELETE                    (0x7F) */ delete               = "\u007F",
    
    // C1 controls

    /** NEXT LINE (NEL)           (0x85) */ nextLine             = "\u0085",

    // Format characters

    /** ZERO WIDTH SPACE        (0x200B) */ zeroWidthSpace       = "\u200B",
    
    // Format characters
    
    /** LINE SEPARATOR          (0x2028) */ lineSeparator        = "\u2028",
    /** PARAGRAPH SEPARATOR     (0x2029) */ paragraphSeparator   = "\u2029",

    // Special

    /** OBJECT REPLACEMENT CHARACTER                                (0xFFFC) */ objectReplacementCharacter  = "\uFFFC",
    /** REPLACEMENT CHARACTER                                       (0xFFFD) */ replacementCharacter        = "\uFFFD",
    /** ZERO WIDTH NO-BREAK SPACE, BYTE ORDER MARK, BOM, ZWNBSP     (0xFEFF) */ zeroWidthNoBreakSpace       = "\uFEFF",
}
