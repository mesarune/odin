"use strict";

/* Many built-in operations that expect strings first coerce their arguments to strings (which is largely why String objects behave similarly to string primitives). */

/* Strings are returned as-is.
undefined turns into "undefined".
null turns into "null".
true turns into "true"; false turns into "false".
Numbers are converted with the same algorithm as toString(10).
BigInts are converted with the same algorithm as toString(10).
Symbols throw a TypeError.
Objects are first converted to a primitive by calling its [@@toPrimitive]() (with "string" as hint), toString(), and valueOf() methods, in that order. The resulting primitive is then converted to a string. */

/* There are several ways to achieve nearly the same effect in JavaScript. */

/* Template literal: `${x}` does exactly the string coercion steps explained above for the embedded expression.
The String() function: String(x) uses the same algorithm to convert x, except that Symbols don't throw a TypeError, but return "Symbol(description)", where description is the description of the Symbol.
Using the + operator: "" + x coerces its operand to a primitive instead of a string, and, for some objects, has entirely different behaviors from normal string coercion. See its reference page for more details. */

/* Depending on your use case, you may want to use `${x}` (to mimic built-in behavior) or String(x) (to handle symbol values without throwing an error), but you should not use "" + x. */

/* Unicodeテキストを1文字ずつ分割するアルゴリズムをUnicodeの仕様として定められており、grapheme cluster (書記素クラスタ)と呼ばれる。 */

/* 人間が考える “文字” はUnicodeのコードポイント1つで表現できるとは限らない。 2つ以上のコードポイントを組み合わせて構成する文字もたくさんある。

例えば

á

という文字は、人間にとって1文字と認識するが、コードポイント2つ(U+0061 U+0301)で構成される。 (ただし、 “á” は U+00E1 という1つのコードポイントでも表現できる)

Grapheme cluster の境界は、検索、正規表現でのマッチング処理、UIなどで重要である。

マウスなどでテキストを範囲指定するときには、文字単位であってコードポイント単位ではなく、このとき grapheme cluster が使われる。 U+0061 U+0301 という並びがあったときに U+0301 だけが選択できてはいけない。また、テキストエディタやワープロなどで、U+0061 U+0301 という並びの右にカーソルがある状態で、 Backspaceを押したときに U+0301 だけが削除されるのではなく、2つのコードポイントが一度に削除されるべきである。ひらがなでも “が” の濁点だけがマウスで選択できたり、右にカーソルがある状態でカーソルの左を押したら “か” と濁点の間にカーソルが表示されたりすると、びっくりするだろう。

ハングルのテキストに対して “하” (U+1112 U+1161) で検索したときに “한” (U+1112 U+1161 U+11AB) という文字はヒットしてほしくないが、 grapheme cluster を考慮せずに、単にコードポイントを比較したらヒットしてしまうだろう。

Unicodeでは legacy grapheme cluster と extended grapheme cluster という2つの grapheme cluster を定める。大抵の場合は extended grapheme cluster を使うことが推奨されている。 Legacy grapheme cluster は過去のUnicodeの仕様で互換性のために残されている。 */

/* Grapheme cluster の例 (legacy grapheme cluster と extended grapheme cluster で共通)

ã	U+0061 U+0303	結合文字は直前のコードポイントと繋がる
각	U+1100 U+1161 U+11A8	ハングル字母は組み合わせて1文字になる
Extended grapheme cluster の例

நி	U+0BA8 U+0BBF	インドのタミル語の文字は子音と母音を組み合わせて1文字になる
กำ	U+0E01 U+0E33	タイ語の文字も子音と母音を組み合わせて1文字になる
Legacy grapheme cluster でも extended grapheme cluster でもないが、地域によっては独自に grapheme cluster を定義して1文字と扱うべき例

ch	U+0063 U+0068	ほとんどの人にはこれは2文字に見えるだろうが、
チェコやスロバキアではこれは1文字である */

/* Grapheme cluster の境界を定義するために以下の文字種が定義されている。

CR	U+000D CARRIAGE RETURN
LF	U+000A LINE FEED
Control	コントロール文字、私用領域など
Extend	結合文字、インド・東南アジアのコードポイントの一部など
SpacingMark	インド・東南アジアのコードポイントの一部など
Regional_Indicator	国旗の絵文字を構成するコード
L	ハングル字母の初声
V	ハングル字母の中声
T	ハングル字母の終声
LV	ハングル音節文字のうち終声のないもの
LVT	ハングル音節文字のうち終声のあるもの
Any	上記以外すべて
すべてのコードポイントはこの文字種のいずれかに該当する。

コードポイントがどの文字種に該当するかの情報は Unicode Character Database に保存されている。

GraphemeBreakProperty.txt | Unicode Character Database | Unicode Consortium
http://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakProperty.txt */

/* 以下のルールが grapheme cluster の定義の本体である。

上のほうが優先度が高い。

テキストの先頭と最後は境界になる。

CR の次に LF が続く箇所は境界にならない

Control, CR, LF の前と後ろは境界になる

L の次に L, V, LV, LVT のいずれかが続く箇所は境界にならない

LV または V の次に V または T が続く箇所は境界にならない

LVT または T の次に T が続く箇所は境界にならない

Regional_Indicator が連続する箇所は境界にならない

Extend の前は境界にならない

SpacingMark の前は境界にならない (extended grapheme cluster でのみ適用されるルール)

上記ルールが適用されないすべての箇所は境界になる

“ã” などのように結合文字が前のコードポイントと結合するのは上記ルール8による。結合文字は直前の文字と結合するが、直前のコードポイントが Control や改行(LF, CR)の場合はルール3により結合せずに単独で文字の扱いになる。

半角カナの濁点・半濁点も Extend に分類されるので、前の文字に結合する。前の文字と結合できないのは前の文字が Control や改行(LF, CR)の場合に限る。つまり前の文字は仮名に限らず、Control や改行(LF, CR)以外のすべての文字と結合できるので、 “a゙” みたいなのも1文字の扱いになる。 */

"😄".split(""); // ['\ud83d', '\ude04']; splits into two lone surrogates

// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// splits into the basic "Backhand Index Pointing Right" emoji and
// the "Dark skin tone" emoji

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// splits into the "Man" and "Boy" emoji, joined by a ZWJ

// The United Nations flag
[..."🇺🇳"]; // [ '🇺', '🇳' ]
// splits into two "region indicator" letters "U" and "N".
// All flag emojis are formed by joining two region indicator letters

/* Constructor
String()
Creates a new String object. It performs type conversion when called as a function, rather than as a constructor, which is usually more useful. */

/* Static methods
String.fromCharCode()
Returns a string created by using the specified sequence of Unicode values.

String.fromCodePoint()
Returns a string created by using the specified sequence of code points.

String.raw()
Returns a string created from a raw template string. */

/* Instance properties
These properties are defined on String.prototype and shared by all String instances.

String.prototype.constructor
The constructor function that created the instance object. For String instances, the initial value is the String constructor.

These properties are own properties of each String instance.

length
Reflects the length of the string. Read-only. */

/* Instance methods
String.prototype.at()
Returns the character (exactly one UTF-16 code unit) at the specified index. Accepts negative integers, which count back from the last string character.

String.prototype.charAt()
Returns the character (exactly one UTF-16 code unit) at the specified index.

String.prototype.charCodeAt()
Returns a number that is the UTF-16 code unit value at the given index.

String.prototype.codePointAt()
Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified pos.

String.prototype.concat()
Combines the text of two (or more) strings and returns a new string.

String.prototype.endsWith()
Determines whether a string ends with the characters of the string searchString.

String.prototype.includes()
Determines whether the calling string contains searchString.

String.prototype.indexOf()
Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.

String.prototype.isWellFormed()
Returns a boolean indicating whether this string contains any lone surrogates.

String.prototype.lastIndexOf()
Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

String.prototype.localeCompare()
Returns a number indicating whether the reference string compareString comes before, after, or is equivalent to the given string in sort order.

String.prototype.match()
Used to match regular expression regexp against a string.

String.prototype.matchAll()
Returns an iterator of all regexp's matches.

String.prototype.normalize()
Returns the Unicode Normalization Form of the calling string value.

String.prototype.padEnd()
Pads the current string from the end with a given string and returns a new string of the length targetLength.

String.prototype.padStart()
Pads the current string from the start with a given string and returns a new string of the length targetLength.

String.prototype.repeat()
Returns a string consisting of the elements of the object repeated count times.

String.prototype.replace()
Used to replace occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.

String.prototype.replaceAll()
Used to replace all occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.

String.prototype.search()
Search for a match between a regular expression regexp and the calling string.

String.prototype.slice()
Extracts a section of a string and returns a new string.

String.prototype.split()
Returns an array of strings populated by splitting the calling string at occurrences of the substring sep.

String.prototype.startsWith()
Determines whether the calling string begins with the characters of string searchString.

String.prototype.substr() Deprecated
Returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

String.prototype.substring()
Returns a new string containing characters of the calling string from (or between) the specified index (or indices).

String.prototype.toLocaleLowerCase()
The characters within a string are converted to lowercase while respecting the current locale.

For most languages, this will return the same as toLowerCase().

String.prototype.toLocaleUpperCase()
The characters within a string are converted to uppercase while respecting the current locale.

For most languages, this will return the same as toUpperCase().

String.prototype.toLowerCase()
Returns the calling string value converted to lowercase.

String.prototype.toString()
Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

String.prototype.toUpperCase()
Returns the calling string value converted to uppercase.

String.prototype.toWellFormed()
Returns a string where all lone surrogates of this string are replaced with the Unicode replacement character U+FFFD.

String.prototype.trim()
Trims whitespace from the beginning and end of the string.

String.prototype.trimEnd()
Trims whitespace from the end of the string.

String.prototype.trimStart()
Trims whitespace from the beginning of the string.

String.prototype.valueOf()
Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.

String.prototype[@@iterator]()
Returns a new iterator object that iterates over the code points of a String value, returning each code point as a String value. */

/* The String() function is a more reliable way of converting values to strings than calling the toString() method of the value, as the former works when used on null and undefined. For example: */
// You cannot access properties on null or undefined

const nullVar = null;
// nullVar.toString(); // TypeError: Cannot read properties of null
String(nullVar); // "null"

const undefinedVar = undefined;
// undefinedVar.toString(); // TypeError: Cannot read properties of undefined
String(undefinedVar); // "undefined"

console.log(String(undefinedVar));
