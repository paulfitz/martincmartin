#!/usr/bin/env node

m = {};
//m["S"] = "0";
//m["L"] = "1";
//m["X"] = "<EOL>";
//m["MMMM"] = " = ";
var fs = require("fs");
var txt = fs.readFileSync(process.argv[2],'utf-8');

function rep(src,dest) {
    txt = txt.replace(new RegExp(src, "g"),dest);
}

//var ks = Object.keys(m);
//for (var i=0; i<ks.length; i++) {
//    txt = txt.replace(new RegExp(ks[i], "g"),m[ks[i]]);
//}
txt = txt.replace(/\n/g,"");

rep("S","0");
rep("L","1");
rep("MMMM","  =  ");
rep("M","  ");
rep("X","  \n  ");
rep(" 000 ", " [0] ");
rep(" 001 ", " [1] ");
//rep(" 00010 ", " [2] ");
//rep(" 00011 ", " [3] ");
rep(" 1100 ", " or ");
rep(" 1101 ", " and ");
rep(" 110 ", " not ");
rep(" 010 ", " {a} ");
rep(" 10 ", " <- ");
rep(" 0110 ", " {c} ");
rep(" 11000 ", " nor ");
rep(" 011 ", " {b} ");
rep(" 0111 ", " {d} ");
rep(" 01100 ", " {e} ");
rep(" 01101 ", " {f} ");
rep(" 01110 ", " {g} ");
rep(" 01111 ", " {h} ");
rep(" 011000 ", " {i} ");
rep(" 011001 ", " {j} ");
rep(" 011010 ", " {k} ");
rep(" 011011 ", " {l} ");
rep(" 011100 ", " {m} ");
rep(" 11010 ", " andNN ");
rep(" 1110 ", " add_carry ");
rep(" 11001 ", " xor ");
rep(" 1111 ", " add_carry_2 ");

rep(" 00101 ", " 5 ");
rep(" 0010110 ", " 22 ");

rep(" 100 ", " + ");
rep(" 101 ", " - ");

//rep(" 1100 ", " gee ");
//rep(" 1101 ", " gah ");
//rep(" 110 ", " hrmm ");

txt = txt.replace(/  +/g," ");
txt = txt.replace(/\n +/g,"\n");
txt = txt.replace(/ +\n/g,"\n");
console.log(txt);


// isn't this buggy?
// or {a} {b} <- {c} not {a} <- {d} = andNN {a} {b} {d}
// and {a} {b} <- {c} not {a} <- {d} = nor {a} {b} {d}
// the logic feels full of bugs...
