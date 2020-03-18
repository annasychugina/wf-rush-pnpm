/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * Maps the names of commonly used characters to that character's integer character code.
 */
export const enum CharCode {
    // C0 controls

    /** NULL                                                    */ null                     = 0,
    /** BACKSPACE                                               */ backspace                = 0x08, // \b
    /** CHARACTER TABULATION, horizontal tabulation (HT), tab   */ characterTabulation      = 0x09, // \t
    /** LINE FEED (LF), new line (NL), end of line (EOL)        */ lineFeed                 = 0x0A, // \n
    /** LINE TABULATION, vertical tabulation (VT)               */ lineTabulation           = 0x0B, // \v
    /** FORM FEED (FF)                                          */ formFeed                 = 0x0C, // \f
    /** CARRIAGE RETURN (CR)                                    */ carriageReturn           = 0x0D, // \r

    // ASCII punctuation and symbols

    /** SPACE                                                   */ space                    = 0x20, // " "
    /** EXCLAMATION MARK, factorial, bang                       */ exclamationMark          = 0x21, // !
    /** QUOTATION MARK                                          */ quotationMark            = 0x22, // "
    /** NUMBER SIGN, pound sign, hash, crosshatch, octothorpe   */ numberSign               = 0x23, // #
    /** DOLLAR SIGN, milréis, escudo                            */ dollarSign               = 0x24, // $
    /** PERCENT SIGN                                            */ percentSign              = 0x25, // %
    /** AMPERSAND                                               */ ampersand                = 0x26, // &
    /** APOSTROPHE, apostrophe-quote (1.0), APL quote           */ apostrophe               = 0x27, // '
    /** LEFT PARENTHESIS, opening parenthesis                   */ leftParenthesis          = 0x28, // (
    /** RIGHT PARENTHESIS, closing parenthesis (1.0)            */ rightParenthesis         = 0x29, // )
    /** ASTERISK, star (on phone keypads)                       */ asterisk                 = 0x2A, // *
    /** PLUS SIGN                                               */ plusSign                 = 0x2B, // +
    /** COMMA                                                   */ comma                    = 0x2C, // ,
    /** HYPHEN-MINUS, hyphen or minus sign                      */ hyphenMinus              = 0x2D, // -
    /** FULL STOP, period, dot, decimal point                   */ fullStop                 = 0x2E, // .
    /** SOLIDUS, slash, virgule                                 */ solidus                  = 0x2F, // /

    // ASCII digits

    /** DIGIT ZERO  */ digit0 = 0x30,
    /** DIGIT ONE   */ digit1 = 0x31,
    /** DIGIT TWO   */ digit2 = 0x32,
    /** DIGIT THREE */ digit3 = 0x33,
    /** DIGIT FOUR  */ digit4 = 0x34,
    /** DIGIT FIVE  */ digit5 = 0x35,
    /** DIGIT SIX   */ digit6 = 0x36,
    /** DIGIT SEVEN */ digit7 = 0x37,
    /** DIGIT EIGHT */ digit8 = 0x38,
    /** DIGIT NINE  */ digit9 = 0x39,

    // ASCII punctuation and symbols

    /** COLON               */ colon            = 0x3A, // :
    /** SEMICOLON           */ semicolon        = 0x3B, // ;
    /** LESS-THAN SIGN      */ lessThanSign     = 0x3C, // <
    /** EQUALS SIGN         */ equalsSign       = 0x3D, // =
    /** GREATER-THAN SIGN   */ greaterThanSign  = 0x3E, // >
    /** QUESTION MARK       */ questionMark     = 0x3F, // ?
    /** COMMERCIAL AT       */ commercialAt     = 0x40, // @

    // Uppercase Latin alphabet

    /** LATIN CAPITAL LETTER A */ A = 0x41,
    /** LATIN CAPITAL LETTER B */ B = 0x42,
    /** LATIN CAPITAL LETTER C */ C = 0x43,
    /** LATIN CAPITAL LETTER D */ D = 0x44,
    /** LATIN CAPITAL LETTER E */ E = 0x45,
    /** LATIN CAPITAL LETTER F */ F = 0x46,
    /** LATIN CAPITAL LETTER G */ G = 0x47,
    /** LATIN CAPITAL LETTER H */ H = 0x48,
    /** LATIN CAPITAL LETTER I */ I = 0x49,
    /** LATIN CAPITAL LETTER J */ J = 0x4A,
    /** LATIN CAPITAL LETTER K */ K = 0x4B,
    /** LATIN CAPITAL LETTER L */ L = 0x4C,
    /** LATIN CAPITAL LETTER M */ M = 0x4D,
    /** LATIN CAPITAL LETTER N */ N = 0x4E,
    /** LATIN CAPITAL LETTER O */ O = 0x4F,
    /** LATIN CAPITAL LETTER P */ P = 0x50,
    /** LATIN CAPITAL LETTER Q */ Q = 0x51,
    /** LATIN CAPITAL LETTER R */ R = 0x52,
    /** LATIN CAPITAL LETTER S */ S = 0x53,
    /** LATIN CAPITAL LETTER T */ T = 0x54,
    /** LATIN CAPITAL LETTER U */ U = 0x55,
    /** LATIN CAPITAL LETTER V */ V = 0x56,
    /** LATIN CAPITAL LETTER W */ W = 0x57,
    /** LATIN CAPITAL LETTER X */ X = 0x58,
    /** LATIN CAPITAL LETTER Y */ Y = 0x59,
    /** LATIN CAPITAL LETTER Z */ Z = 0x5A,

    // ASCII punctuation and symbols

    /** LEFT SQUARE BRACKET, opening square bracket (1.0)   */ leftSquareBracket        = 0x5B, // [
    /** REVERSE SOLIDUS, backslash                          */ reverseSolidus           = 0x5C, // \
    /** RIGHT SQUARE BRACKET, closing square bracket        */ rightSquareBracket       = 0x5D, // ]
    /** CIRCUMFLEX ACCENT                                   */ circumflexAccent         = 0x5E, // ^
    /** LOW LINE, spacing underscore (1.0)                  */ lowLine                  = 0x5F, // _
    /** GRAVE ACCENT                                        */ graveAccent              = 0x60, // `

    // Lowercase Latin alphabet

    /** LATIN SMALL LETTER A */ a = 0x61,
    /** LATIN SMALL LETTER B */ b = 0x62,
    /** LATIN SMALL LETTER C */ c = 0x63,
    /** LATIN SMALL LETTER D */ d = 0x64,
    /** LATIN SMALL LETTER E */ e = 0x65,
    /** LATIN SMALL LETTER F */ f = 0x66,
    /** LATIN SMALL LETTER G */ g = 0x67,
    /** LATIN SMALL LETTER H */ h = 0x68,
    /** LATIN SMALL LETTER I */ i = 0x69,
    /** LATIN SMALL LETTER J */ j = 0x6A,
    /** LATIN SMALL LETTER K */ k = 0x6B,
    /** LATIN SMALL LETTER L */ l = 0x6C,
    /** LATIN SMALL LETTER M */ m = 0x6D,
    /** LATIN SMALL LETTER N */ n = 0x6E,
    /** LATIN SMALL LETTER O */ o = 0x6F,
    /** LATIN SMALL LETTER P */ p = 0x70,
    /** LATIN SMALL LETTER Q */ q = 0x71,
    /** LATIN SMALL LETTER R */ r = 0x72,
    /** LATIN SMALL LETTER S */ s = 0x73,
    /** LATIN SMALL LETTER T */ t = 0x74,
    /** LATIN SMALL LETTER U */ u = 0x75,
    /** LATIN SMALL LETTER V */ v = 0x76,
    /** LATIN SMALL LETTER W */ w = 0x77,
    /** LATIN SMALL LETTER X */ x = 0x78,
    /** LATIN SMALL LETTER Y */ y = 0x79,
    /** LATIN SMALL LETTER Z */ z = 0x7A,

    // ASCII punctuation and symbols

    /** LEFT CURLY BRACKET, opening curly bracket (1.0), left brace     */ leftCurlyBracket     = 0x7B, // {
    /** VERTICAL LINE, vertical bar                                     */ verticalLine         = 0x7C, // |
    /** RIGHT CURLY BRACKET, closing curly bracket (1.0), right brace   */ rightCurlyBracket    = 0x7D, // }
    /** TILDE                                                           */ tilde                = 0x7E, // ~
    
    // Control character

    /** DELETE                  */ delete               = 0x7F,
    
    // C1 controls

    /** NEXT LINE (NEL)         */ nextLine             = 0x85,

    // Format characters

    /** ZERO WIDTH SPACE        */ zeroWidthSpace       = 0x200B,
    
    // Format characters
    
    /** LINE SEPARATOR          */ lineSeparator        = 0x2028,
    /** PARAGRAPH SEPARATOR     */ paragraphSeparator   = 0x2029,

    // Special

    /** OBJECT REPLACEMENT CHARACTER                                */ objectReplacementCharacter   = 0xFFFC,
    /** REPLACEMENT CHARACTER                                       */ replacementCharacter         = 0xFFFD,
    /** ZERO WIDTH NO-BREAK SPACE, BYTE ORDER MARK, BOM, ZWNBSP     */ zeroWidthNoBreakSpace        = 0xFEFF,
}
