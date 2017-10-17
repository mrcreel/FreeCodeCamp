function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins


    function funcReplaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    var arrChars = [
        [/[\W_]+/g, "-"]
    ];

    var strResult = "";

    for (var i = 0; i < str.length; i++) {
        strChar = str.charAt(i);
        if (strChar === strChar.toUpperCase()) {
            strChar = " " + strChar.toLowerCase();
        }
        strResult += strChar;
    }


    for (var a in arrChars) {
        var strSearch = arrChars[a][0];
        //console.log(strSearch);
        var strReplace = arrChars[a][1];

        str = funcReplaceAll(strResult, strSearch, strReplace);

    }

    if (str[0] === "-") {
        str = str.slice(1);
    }

    console.log(str);

    return str;
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");