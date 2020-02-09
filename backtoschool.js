{\rtf1\ansi\ansicpg1252\cocoartf2511
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /*\
 * Programming Quiz: Back to School (3-9)\
 *\
 * Write a switch statement to set the average salary of a person based on their type of completed education.\
 *\
 */\
\
// change the value of `education` to test your code\
var education = 'no high school diploma';\
\
// set the value of this based on a person's education\
var salary = 0;\
\
// a Professional degree earned an average of $89,960/year,\
// and a Doctoral degree earned an average of $84,396/year.\
// your code goes here\
switch (education) \{\
    case 'no high school diploma':\
        salary = 25636;\
        break;\
    case 'a high school diploma':\
        salary = 35256;\
        break;\
    case "an Associate's degree":\
        salary = 41496;\
        break;\
    case "a Bachelor's degree":\
        salary = 59124;\
        break;\
    case "a Master's degree ":\
        salary = 69732;\
        break;\
    case "a Professional degree ":\
        salary = 89960;\
        break;\
    case "a Doctoral degree":\
        salary = 84396;\
        break;\
    \
\}\
\
console.log(`In 2015, a person with $\{education\} earned an average of $\{salary\}year`)\
\
\
\
\
\
}