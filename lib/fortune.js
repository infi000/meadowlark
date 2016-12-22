/*
* @Author: 张驰阳
* @Date:   2016-12-22 16:53:52
* @Last Modified by:   张驰阳
* @Last Modified time: 2016-12-22 17:02:12
*/

'use strict';

var fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];

exports.getFortune=function(){
	var idx=Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];

}