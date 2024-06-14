const countEle = document.querySelector(".counter");
const bodyEle = document.querySelector("body");

const color = [
    "linear-gradient(90deg, rgba(31,36,0,1) 0%, rgba(90,121,9,0.5271358543417367) 50%, rgba(237,255,0,1) 100%)",
    "linear-gradient(90deg, rgba(36,0,0,1) 1%, rgba(18,194,183,0.7148109243697479) 50%, rgba(99,89,54,1) 100%)",
    "linear-gradient(90deg, rgba(36,0,0,1) 1%, rgba(38,18,194,0.6531862745098039) 50%, rgba(99,89,54,1) 100%)",
    "linear-gradient(90deg, rgba(36,0,0,1) 1%, rgba(151,18,194,0.7092086834733893) 50%, rgba(99,89,54,1) 100%)",
    "linear-gradient(90deg, rgba(36,0,0,1) 1%, rgba(194,18,184,0.768032212885154) 50%, rgba(99,89,54,1) 100%)",
    "linear-gradient(90deg, rgba(36,0,0,1) 1%, rgba(194,18,184,0.768032212885154) 50%, rgba(99,89,54,1) 100%)",
    "linear-gradient(90deg, rgba(36,0,0,1) 1%, rgba(194,18,107,0.7512254901960784) 50%, rgba(99,89,54,1) 100%)",
    "linear-gradient(90deg, rgba(36,0,0,1) 1%, rgba(194,18,54,0.5887605042016807) 50%, rgba(99,89,54,1) 100%)",
    "linear-gradient(90deg, rgba(36,0,0,1) 1%, rgba(194,18,18,0.44030112044817926) 50%, rgba(99,89,54,1) 100%)",
    "linear-gradient(90deg, rgba(36,0,0,1) 1%, rgba(194,115,18,0.44030112044817926) 50%, rgba(99,89,54,1) 100%)",
    "linear-gradient(90deg, rgba(36,0,0,1) 1%, rgba(194,115,18,0.44030112044817926) 50%, rgba(99,89,54,1) 100%)"
];

    setTimeout (() => {
        countEle.innerText = 10;
        bodyEle.style.background = color[10];
        countEle.style.color = "#FFF";
        countEle.style.textShadow ="2px 2px 4px rgba(0,0,0,0.5)";

        setTimeout (() => {
          countEle.innerText = 9;
          bodyEle.style.background = color[9];
          countEle.style.color = "#FFF";
          countEle.style.textShadow ="2px 2px 4px rgba(0,0,0,0.5)";

              setTimeout (() => {
                countEle.innerText = 8;
                bodyEle.style.background = color[8];
                countEle.style.color = "#FFF";
                countEle.style.textShadow ="2px 2px 4px rgba(0,0,0,0.5)";

                    setTimeout (() => {
                       countEle.innerText = 7;
                       bodyEle.style.background = color[7];
                       countEle.style.color = "#FFF";
                       countEle.style.textShadow ="2px 2px 4px rgba(0,0,0,0.5)";

                            setTimeout (() => {
                                countEle.innerText = 6;
                                bodyEle.style.background = color[6];
                                countEle.style.color = "#FFF";
                                countEle.style.textShadow ="2px 2px 4px rgba(0,0,0,0.5)";

                                     setTimeout (() => {
                                        countEle.innerText = 5;
                                        bodyEle.style.background = color[5];
                                        countEle.style.color = "#FFF";
                                        countEle.style.textShadow ="2px 2px 4px rgba(0,0,0,0.5)";

                                           setTimeout (() => {
                                                countEle.innerText = 4;
                                                bodyEle.style.background = color[4];
                                                countEle.style.color = "#FFF";
                                                countEle.style.textShadow ="2px 2px 4px rgba(0,0,0,0.5)";

                                                 setTimeout (() => {
                                                      countEle.innerText = 3;
                                                      bodyEle.style.background = color[3];
                                                      countEle.style.color = "#FFF";
                                                      countEle.style.textShadow ="2px 2px 4px rgba(0,0,0,0.5)";

                                                       setTimeout (() => {
                                                            countEle.innerText = 2;
                                                            bodyEle.style.background = color[2];
                                                            countEle.style.color = "#FFF";
                                                            countEle.style.textShadow ="2px 2px 4px rgba(0,0,0,0.5)";

                                                               setTimeout (() => {
                                                                 countEle.innerText = 1;
                                                                 bodyEle.style.background = color[1];
                                                                 countEle.style.color = "#FFF";
                                                                 countEle.style.textShadow ="2px 2px 4px rgba(0,0,0,0.5)";

                                                                  setTimeout (() => {
                                                                      countEle.innerText = "Happy Indepence Day";
                                                                      bodyEle.style.background = color[0];
                                                                      countEle.style.color = "#FFF";
                                                                      countEle.classList.add("zoom");
                                                                      countEle.style.textShadow ="2px 2px 4px rgba(0,0,0,0.5)";
                                                       },1000)
                                                  }, 1000)
                                             }, 1000)
                                        }, 1000)
                                   }, 1000)
                              },1000)
                         },1000)
                  },1000)
            },1000)
      },1000)
},1000)