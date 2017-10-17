function convertHTML(str) {

    function funcReplaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    var arrChars = [
    	["&", "&amp;"],
    	["'", "&apos;"],
      ["<", "&lt;"],
      [">", "&gt;"],
      ['"', "&quot;"]
    ];

    console.log(str);
    for (var a in arrChars) {
        var strSearch = arrChars[a][0];
        var strReplace = arrChars[a][1];

        str = funcReplaceAll(str, strSearch, strReplace);

    }

    console.log(str);

    // &colon;&rpar;
    return str;
}

convertHTML("Shindler's List");