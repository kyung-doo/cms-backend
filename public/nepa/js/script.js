(function () 
{
	/*
	*	Class 구현
	*/
    var initializing = false, fnTest = /xyz/.test(function () {
        xyz;
    }) ? /\b_super\b/ : /.*/;
    this.Class = function () {
    };

    Class.extend = function (prop) {

        var _super = this.prototype;
        initializing = true;
        var prototype = new this();
        initializing = false;

        for (var name in prop) {
            prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function (name, fn) {
                return function () {
                    var tmp = this._super;
                    this._super = _super[name];
                    var ret = fn.apply(this, arguments);
                    this._super = tmp;
                    return ret;
                };
            })(name, prop[name]) : prop[name];
        };

        function Class() {
            if (!initializing && this.init)
                this.init.apply(this, arguments);
        };

        Class.prototype = prototype;
        Class.prototype.constructor = Class;
        Class.extend = arguments.callee;

        return Class;
	};


    //첫글자 대문자
    String.prototype.firstWopperCase = function() 
    {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    isMobile = {
        Android: function () {
                 return navigator.userAgent.match(/Android/i) == null ? false : true;
        },
        BlackBerry: function () {
                 return navigator.userAgent.match(/BlackBerry/i) == null ? false : true;
        },
        IOS: function () {
                 return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null ? false : true;
        },
        Opera: function () {
                 return navigator.userAgent.match(/Opera Mini/i) == null ? false : true;
        },
        Windows: function () {
                 return navigator.userAgent.match(/IEMobile/i) == null ? false : true;
        },
        any: function () {
                 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if(isMobile.any())
    {
        location.href="/m";
    }


})();



/* NEPA */
(function ( $ )
{
    "use strict"

    var NEPA = NEPA || (function ()
    {
        
        function getClassName( page )
        {
            var classNm = "";
            switch( page )
            {
                case "intro" :
                    this.currentSex = "";
                    this.currentChoice1 = "";
                    this.currentChoice2 = "";
                    classNm = "intro";
                break;

                case "main" :
                    this.currentSex = "";
                    this.currentChoice1 = "";
                    this.currentChoice2 = "";
                    classNm = "main";
                break;

                case "allPage" :
                    this.currentSex = "";
                    this.currentChoice1 = "";
                    this.currentChoice2 = "";
                    classNm = "allPage";
                break;

                case "women" :
                    this.currentSex = "women";
                    this.currentChoice1 = "";
                    this.currentChoice2 = "";
                    classNm = "subMain";
                break;
                case "men" :
                    this.currentSex = "men";
                    this.currentChoice1 = "";
                    this.currentChoice2 = "";
                    classNm = "subMain";
                break;



                case "womenChoice" :
                    this.currentSex = "women";
                    this.currentChoice1 = "";
                    this.currentChoice2 = "";
                    classNm = "mainChoice";
                break;
                case "menChoice" :
                    this.currentSex = "men";
                    this.currentChoice1 = "";
                    this.currentChoice2 = "";
                    classNm = "mainChoice";
                break;



                case "womenBench" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "";
                    classNm = "subChoice";
                break;
                case "womenSafari" :
                    this.currentSex = "women";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "";
                    classNm = "subChoice";
                break;
                case "menBench" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "";
                    classNm = "subChoice";
                break;
                case "menSafari" :
                    this.currentSex = "men";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "";
                    classNm = "subChoice";
                break;

                


                case "womenBenchPaley" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "paley";
                    classNm = "mainProduct";
                break;
                case "womenBenchVetta" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "vetta";
                    classNm = "mainProduct";
                break;
                case "womenBenchPrimia" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "primia";
                    classNm = "mainProduct";
                break;
                case "womenBenchAvenue" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "avenue";
                    classNm = "mainProduct";
                break;
                case "womenBenchCovent" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "covent";
                    classNm = "mainProduct";
                break;
                case "womenBenchEvie" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "evie";
                    classNm = "mainProduct";
                break;
                case "womenBenchJude" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "jude";
                    classNm = "mainProduct";
                break;
                case "womenBenchLimitato"  :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "limitato";
                    classNm = "mainProduct";
                break;
                case "womenBenchCyphon"  :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "cyphon";
                    classNm = "mainProduct";
                break;


                case "womenSafariPatrick" :
                    this.currentSex = "women";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "patrick";
                    classNm = "mainProduct";
                break;
                case "womenSafariAlaska" :
                    this.currentSex = "women";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "alaska";
                    classNm = "mainProduct";
                break;
                case "womenSafariAcme" :
                    this.currentSex = "women";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "acme";
                    classNm = "mainProduct";
                break;
                case "womenSafariOttimo" :
                    this.currentSex = "women";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "ottimo";
                    classNm = "mainProduct";
                break;
                case "womenSafariElcorte" :
                    this.currentSex = "women";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "elcorte";
                    classNm = "mainProduct";
                break;



                case "womenBenchPaleyDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "paley";
                    classNm = "subProduct";
                break;
                case "womenBenchVettaDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "vetta";
                    classNm = "subProduct";
                break;
                case "womenBenchPrimiaDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "primia";
                    classNm = "subProduct";
                break;
                case "womenBenchAvenueDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "avenue";
                    classNm = "subProduct";
                break;
                case "womenBenchCoventDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "covent";
                    classNm = "subProduct";
                break;
                case "womenBenchEvieDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "evie";
                    classNm = "subProduct";
                break;
                case "womenBenchJudeDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "jude";
                    classNm = "subProduct";
                break;
                case "womenBenchLimitatoDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "limitato";
                    classNm = "subProduct";
                break;
                case "womenBenchCyphonDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "cyphone";
                    classNm = "subProduct";
                break;


                case "womenSafariPatrickDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "patrick";
                    classNm = "subProduct";
                break;
                case "womenSafariAlaskaDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "alaska";
                    classNm = "subProduct";
                break;
                case "womenSafariAcmeDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "acme";
                    classNm = "subProduct";
                break;
                case "womenSafariOttimoDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "ottimo";
                    classNm = "subProduct";
                break;
                case "womenSafariElcorteDetail" :
                    this.currentSex = "women";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "elcorte";
                    classNm = "subProduct";
                break;
                



                case "menBenchPresso" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "presso";
                    classNm = "mainProduct";
                break;
                case "menBenchPrimia" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "primia";
                    classNm = "mainProduct";
                break;
                case "menBenchMassimo" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "massimo";
                    classNm = "mainProduct";
                break;
                case "menBenchCovent" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "covent";
                    classNm = "mainProduct";
                break;
                case "menBenchGreenland" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "greenland";
                    classNm = "mainProduct";
                break;
                case "menBenchLimitato" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "limitato";
                    classNm = "mainProduct";
                break;
                case "menBenchCyphon" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "cyphon";
                    classNm = "mainProduct";
                break;


                case "menSafariPatrick" :
                    this.currentSex = "men";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "patrick";
                    classNm = "mainProduct";
                break;
                case "menSafariAlaska" :
                    this.currentSex = "men";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "alaska";
                    classNm = "mainProduct";
                break;
                case "menSafariAcme" :
                    this.currentSex = "men";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "acme";
                    classNm = "mainProduct";
                break;
                case "menSafariOttimo" :
                    this.currentSex = "men";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "ottimo";
                    classNm = "mainProduct";
                break;




                case "menBenchPressoDetail" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "presso";
                    classNm = "subProduct";
                break;
                case "menBenchPrimiaDetail" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "primia";
                    classNm = "subProduct";
                break;
                case "menBenchMassimoDetail" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "massimo";
                    classNm = "subProduct";
                break;
                case "menBenchCoventDetail" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "covent";
                    classNm = "subProduct";
                break;
                case "menBenchGreenlandDetail" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "greenland";
                    classNm = "subProduct";
                break;
                case "menBenchLimitatoDetail" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "limitato";
                    classNm = "subProduct";
                break;
                case "menBenchCyphonDetail" :
                    this.currentSex = "men";
                    this.currentChoice1 = "bench";
                    this.currentChoice2 = "cyphon";
                    classNm = "subProduct";
                break;


                case "menSafariPatrickDetail" :
                    this.currentSex = "men";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "patrick";
                    classNm = "subProduct";
                break;
                case "menSafariAlaskaDetail" :
                    this.currentSex = "men";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "alaska";
                    classNm = "subProduct";
                break;
                case "menSafariAcmeDetail" :
                    this.currentSex = "men";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "acme";
                    classNm = "subProduct";
                break;
                case "menSafariOttimoDetail" :
                    this.currentSex = "men";
                    this.currentChoice1 = "safari";
                    this.currentChoice2 = "ottimo";
                    classNm = "subProduct";
                break;
                
            }

            return classNm;
        }


        


        return {

            init : function ()
            {
                this.currentPage;
                this.currentContent;
                this.aniFlag = false;

                this.currentSex = "";
                this.currentChoice1 = "";
                this.currentChoice2 = "";

                this.loadContent.call(this, "intro", true);

                var owner = this;

                $("#header .logo").on("click", function ( e )
                {
                    NEPA.loadContent("intro");
                });

                $("#header .menu").on("mouseover", function ( e )
                {
                    if(!$(this).is(".active"))
                    {
                        TweenMax.to($(this).find("span").eq(0), 0.4, {y:-3, ease:Cubic.easeOut});
                        TweenMax.to($(this).find("span").eq(2), 0.4, {y:3, ease:Cubic.easeOut});
                    }
                });
                $("#header .menu").on("mouseout", function ( e )
                {
                    if(!$(this).is(".active"))
                    {
                        TweenMax.to($(this).find("span").eq(0), 0.4, {y:0, ease:Cubic.easeOut});
                        TweenMax.to($(this).find("span").eq(2), 0.4, {y:0, ease:Cubic.easeOut});
                    }
                });

                $("#header .menu").on("click", function ( e )
                {
                    if(!$(this).is(".active"))
                    {
                        owner.setGnb();
                        owner.showGnb();
                    }
                    else
                    {
                        owner.hideGnb();
                    }
                });

                $("#header .gnb a").on("click", function ( e )
                {
                    if(!$(this).is(".title"))
                    {
                        var link = $(this).data("link");
                        NEPA.loadContent(link);
                    }
                    else
                    {
                        if(!$(this).next().is(".active"))
                        {
                            $("#header .gnb .sub-ul.active").removeClass("active");
                            $("#header .gnb .title.active").removeClass("active");
                            $(this).next().addClass("active");
                            $(this).addClass("active");
                        }
                        else
                        {
                            $(this).next().removeClass("active");
                            $(this).removeClass("active");
                        }
                    }
                });

                

                $("#header .back-btn").on("click", function ( e )
                {
                    if($(this).is(".active"))
                    {
                        var className = getClassName.call(owner, owner.currentPage);
                        if(className == "subMain")
                        {
                            NEPA.loadContent("main");
                        }
                        else if(className == "mainChoice")
                        {
                            NEPA.loadContent(owner.currentSex);
                        }
                        else if(className == "subChoice")
                        {
                            NEPA.loadContent(owner.currentSex+"Choice");
                        }
                        else if(className == "mainProduct")
                        {
                            NEPA.loadContent(owner.currentSex+owner.currentChoice1.firstWopperCase());
                        }
                        else if(className == "subProduct")
                        {
                            NEPA.loadContent(owner.currentSex+owner.currentChoice1.firstWopperCase()+owner.currentChoice2.firstWopperCase());
                        }
                    }
                });
            },

            loadContent : function ( page, isFirst, choiceNum )
            {
                var owner = this;
                //if(page == "allPage") return;
                if(this.aniFlag) return;
                if(this.currentPage == page) return;

                $("#header .back-btn").removeClass("active");

                if(page == "main" || page == "intro" || page == "allPage")
                {
                    $("#header .back-btn").hide();
                }
                else
                {
                    $("#header .back-btn").show();
                }
                
                if(isFirst)
                {
                    owner.firstFlag = false;
                    owner.currentPage = page;
                    $.get( page + ".html?"+(Math.random()*999999999), function ( data )
                    {
                        owner.currentContent = $(data);
                        $("#content").append(owner.currentContent);
                        NEPA[getClassName.call(owner, owner.currentPage)].init(owner.currentContent);
                    });
                }
                else
                {
                    if($("#header .menu").is(".active"))
                    {
                        this.hideGnb();
                    }
                    
                    this.aniFlag = true;
                    NEPA[getClassName.call(owner, owner.currentPage)].dispose();
                    owner.currentContent.one("finish", function ( e )
                    {
                        owner.aniFlag = false;
                        owner.firstFlag = false;
                        owner.currentPage = page;
                        $.get( page + ".html?"+(Math.random()*999999999), function ( data )
                        {
                            owner.currentContent = $(data);
                            $("#content").empty().append(owner.currentContent);

                            if(!choiceNum)
                            {
                                NEPA[getClassName.call(owner, owner.currentPage)].init(owner.currentContent);
                            }
                            else
                            {
                                NEPA[getClassName.call(owner, owner.currentPage)].init(owner.currentContent, choiceNum);
                            }

                            if(page == "main" || page == "intro"){}
                            else
                            {
                                setTimeout(function ()
                                {
                                    $("#header .back-btn").addClass("active");
                                }, 500);
                            }
                            owner.setGnb();
                        });
                    });
                }
            },

            showGnb : function ()
            {
                $("#header .menu").addClass("active");
                TweenMax.to($("#header .menu").find("span").eq(0), 0.4, {y:6, height:2, rotation:-45, ease:Cubic.easeOut});
                TweenMax.to($("#header .menu").find("span").eq(1), 0.4, {height:2, rotation:45, ease:Cubic.easeOut});
                TweenMax.to($("#header .menu").find("span").eq(2), 0.4, {y:10, opacity:0, ease:Cubic.easeOut});
                $(".gnb").show();
                TweenMax.set($(".gnb-wrap"), {x:648});
                TweenMax.to($(".gnb-wrap"), 0.8, {x:0, ease:Cubic.easeInOut});
            },

            hideGnb : function ()
            {
                $("#header .menu").removeClass("active");
                TweenMax.to($("#header .menu").find("span").eq(0), 0.4, {y:0, height:5, rotation:0, ease:Cubic.easeOut});
                TweenMax.to($("#header .menu").find("span").eq(1), 0.4, {height:5, rotation:0, ease:Cubic.easeOut});
                TweenMax.to($("#header .menu").find("span").eq(2), 0.4, {y:0, opacity:1, ease:Cubic.easeOut});
                TweenMax.to($(".gnb-wrap"), 0.8, {x:648, ease:Cubic.easeInOut, onComplete:function ()
                {
                    $(".gnb").hide();
                }});
            },

            setGnb : function ()
            {
                $("#header .gnb .sub-ul.active").removeClass("active");
                $("#header .gnb .title.active").removeClass("active");
                if(this.currentSex == "women")
                {
                    if(this.currentChoice1 == "bench")
                    {
                        $("#header .gnb .sub-ul").eq(0).addClass("active");
                        $("#header .gnb .title").eq(0).addClass("active");
                    }
                    else if(this.currentChoice1 == "safari")
                    {
                        $("#header .gnb .sub-ul").eq(1).addClass("active");
                        $("#header .gnb .title").eq(1).addClass("active");
                    }
                }
                else if(this.currentSex == "men")
                {
                    if(this.currentChoice1 == "bench")
                    {
                        $("#header .gnb .sub-ul").eq(2).addClass("active");
                        $("#header .gnb .title").eq(2).addClass("active");
                    }
                    else if(this.currentChoice1 == "safari")
                    {
                        $("#header .gnb .sub-ul").eq(3).addClass("active");
                        $("#header .gnb .title").eq(3).addClass("active");
                    }
                }
            }
        }

    })();

    window.NEPA = NEPA;

})(jQuery);


/* intro */
(function ( $ )
{
    "use strict"

    NEPA.intro = (function ()
    {      
        function startMotion()
        {
            var owner = this;
            $(window).on("resize", function ( e )
            {
                var scaleX = $(window).width()/1920;
                var scaleY = $(window).height()/1080;
                var scale;
                if(scaleY < scaleX)
                {
                    scale = scaleY;
                }
                else 
                {
                    scale = scaleX;
                }
                
                TweenMax.set(owner.element.find(".title-con"), {scaleX:scale, scaleY:scale});
            });
            $(window).trigger("resize");

            owner.element.find(".video-con").hide();
            owner.element.find(".bottom-btn").hide();

            TweenMax.set(owner.element.find(".title-con"), {opacity:0});

            TweenMax.set(owner.element.find(".intro-img"), {opacity:0, scaleX:1.2, scaleY:1.2});
            TweenMax.set(owner.element.find(".line-con > span").eq(0), {height:0});
            TweenMax.set(owner.element.find(".line-con > span").eq(1), {height:0,top:"100%"});
            TweenMax.set(owner.element.find(".line-con > span").eq(2), {height:0});

            TweenMax.to(owner.element.find(".intro-img").eq(0), 1.5, {delay:0.2, opacity:1, scaleX:1, scaleY:1, ease:Cubic.easeInOut});
            TweenMax.to(owner.element.find(".line-con > span").eq(0), 0.8, {delay:0.5, height:"100%", ease:Cubic.easeInOut});
            TweenMax.to(owner.element.find(".line-con > span").eq(1), 0.8, {delay:0.6, height:"100%", top:0, ease:Cubic.easeInOut});
            TweenMax.to(owner.element.find(".line-con > span").eq(2), 0.8, {delay:0.7, height:"100%", ease:Cubic.easeInOut, onComplete:function ()
            {
                owner.element.find(".bottom-btn").show();
                owner.element.find(".video-con").show();
                TweenMax.set(owner.element.find(".bottom-btn"), {opacity:0});
                TweenMax.to(owner.element.find(".bottom-btn"), 0.8, {delay:0.5, opacity:1});
                TweenMax.set(owner.element.find(".video-con"), {opacity:0, y:50});
                TweenMax.to(owner.element.find(".video-con"), 0.8, {opacity:1, y:0, ease:Cubic.easeOut});
                owner.element.find(".video-con video")[0].play();
                $(window).trigger("resize");
                setIntro.call(owner);  
            }});

            TweenMax.to(owner.element.find(".title-con"), 0.8, {delay:0.8, opacity:1});

            //setTypoMotion.call(owner);
        }
        

        function setIntro()
        {
            var owner = this;
            owner.element.find(".intro").on("click", function ( e )  
            {
                NEPA.loadContent("main");
            });
        }

        function setTypoMotion()
        {
            var owner = this;
            var addDelay = 1;
            owner.element.find(".main-tit .line").hide();
            owner.element.find(".main-tit .txt > span").each(function ( i )
            {
                $(this).hide();
                if(i == 4) addDelay += 0.2;
                if(i == 8) addDelay += 0.2;
                TweenMax.set($(this), {delay:addDelay+(0.12 * i), display:"inline"});
            });
            TweenMax.set(owner.element.find(".main-tit .line"), {delay:1, display:"inline-block"});
            TweenMax.set(owner.element.find(".sub-tit"), {opacity:0, x:-50});
            TweenMax.to(owner.element.find(".sub-tit"), 0.8, {delay:3, opacity:1, x:0, ease:Cubic.easeOut});
        }

        return {
            init : function ( element )
            {
               this.element = element;
               this.element.find(".intro-img").cover({
                   scale: 'fill',
                   align: {
                       h:'center',
                       v:'20%'
                   }
               });
               this.element.find(".video-con").cover({target:"video"});
               startMotion.call(this);
            },

            dispose : function ()
            {
                var owner = this;
                $(window).off("resize");
                owner.element.find(".intro").off("click");
                owner.element.find(".video-con video")[0].pause();
                TweenMax.to(owner.element.find(".intro"), 0.4, {opacity:0, onComplete:function ()
                {
                    owner.element.trigger("finish");
                }});
            }
        }
    })();

})(jQuery);



/* main */
(function ( $ )
{
    "use strict"

    NEPA.main = (function ()
    {      
        function startMotion()
        {
            var owner = this;
            TweenMax.set(this.element.find(".v-line"), {height:0});
            TweenMax.to(this.element.find(".v-line"), 1, {height:"100%", ease:Expo.easeInOut});
            TweenMax.set(this.element.find(".women"), {y:$(window).height()});
            TweenMax.to(this.element.find(".women"), 1, {delay:0.5, y:0, ease:Cubic.easeInOut});
            TweenMax.set(this.element.find(".men"), {y:-$(window).height()});
            TweenMax.to(this.element.find(".men"), 1, {delay:0.5, y:0, ease:Cubic.easeInOut, onComplete:function ()
            {
                setMain.call(owner);
            }});
        }

        function setMain()
        {
            var owner = this;
            this.element.find(".women .box-con").on("mouseenter", function ( e )
            {
                owner.element.find(".women").addClass("show");
                owner.element.find(".men").addClass("hide");
            });

            this.element.find(".women .box-con").on("mouseleave", function ( e )
            {
                owner.element.find(".women").removeClass("show");
                owner.element.find(".men").removeClass("hide");
            });

            this.element.find(".men .box-con").on("mouseenter", function ( e )
            {
                owner.element.find(".men").addClass("show");
                owner.element.find(".women").addClass("hide");
            });

            this.element.find(".men .box-con").on("mouseleave", function ( e )
            {
                owner.element.find(".men").removeClass("show");
                owner.element.find(".women").removeClass("hide");
            });

            this.element.find(".women").on("click", function ( e )
            {
                NEPA.loadContent("women");
            });

            this.element.find(".men").on("click", function ( e )
            {
                NEPA.loadContent("men");
            });
        }

        return {
            init : function ( element )
            {
               this.element = element;
               this.element.find(".img-con").cover({
                   scale: 'fill',
                   align: {
                       h:'center',
                       v:'20%'
                   }
               });
               startMotion.call(this);
            },

            dispose : function ()
            {
                var owner = this;
                this.element.find(".women").off("click").removeClass("show hide");
                this.element.find(".men").off("click").removeClass("show hide");
                this.element.find(".main-list .box-con").off("mouseenter mouseleave")
                // TweenMax.to(this.element.find(".women"), 1, {delay:0.5, y:-$(window).height(), ease:Cubic.easeInOut});
                // TweenMax.to(this.element.find(".men"), 1, {delay:0.5, y:$(window).height(), ease:Cubic.easeInOut});
                // TweenMax.to(this.element.find(".v-line"), 1, {delay:0.8, height:0, ease:Expo.easeInOut, onComplete:function ()
                // {
                //     owner.element.trigger("finish");
                // }});
                TweenMax.to(owner.element.find(".main"), 0.4, {opacity:0, onComplete:function ()
                {
                    owner.element.trigger("finish");
                }});
            }
        }
    })();

})(jQuery);


/* subMain */
(function ( $ )
{
    "use strict"

    NEPA.subMain = (function ()
    {      
        function startMotion()
        {
            var owner = this;
            $(window).on("resize", function ( e )
            {
                var scale = $(window).width()/1920;
                var width = $(window).width();
                var height = 764*scale;
                var top = ($(window).height()-height)/2;
                var left = 0;
                if(top < 120)
                {
                    height = height - (120 - top) * 2;
                    top = 120;
                }
                owner.element.find(".content-box").css({width:width, height:height, left:left, top:top});
                //owner.element.find(".title-img img").css({width:367*scale});
            });
            $(window).resize();

            setTimeout(function ()
            {
                $(window).resize();
            },100);

            owner.element.find(".video-con").cover({target:"video"});
            owner.element.find(".thumb-con").cover();
            
            TweenMax.set(owner.element.find(".line-con > span").eq(0), {width:0});
            TweenMax.set(owner.element.find(".line-con > span").eq(1), {height:0});
            TweenMax.set(owner.element.find(".line-con > span").eq(2), {width:0, left:"100%"});
            TweenMax.set(owner.element.find(".line-con > span").eq(3), {height:0, top:"100%"});

            TweenMax.to(owner.element.find(".line-con > span").eq(0), 0.3, {delay:0.2, width:"100%"});
            TweenMax.to(owner.element.find(".line-con > span").eq(1), 0.3, {delay:0.5, height:"100%"});
            TweenMax.to(owner.element.find(".line-con > span").eq(2), 0.3, {delay:0.8, width:"100%", left:0});
            TweenMax.to(owner.element.find(".line-con > span").eq(3), 0.3, {delay:1, height:"100%", top:0});

            TweenMax.to(owner.element.find(".scroll-con"), 0.6, {delay:1, opacity:1});

            TweenMax.to(owner.element.find(".video-con"), 0.6, {delay:1, opacity:1, onComplete:function ()
            {
                owner.element.find("video")[0].play();
                setContent.call(owner);
            }});

            TweenMax.set(owner.element.find(".bg-con img"), {x:50});
            TweenMax.to(owner.element.find(".bg-con"), 0.6, {delay:1.2, opacity:1});
            TweenMax.to(owner.element.find(".bg-con img"), 1.5, {delay:1.2, x:0});
            TweenMax.to(owner.element.find(".thumb-con > div"), 1, {delay:1.2, left:0, width:"100%", ease:Cubic.easeOut});
            
        }

        function setContent()
        {
            $("html, body").one('mousewheel DOMMouseScroll', function(e) 
            {
                if(NEPA.currentSex == "women")
                {
                    NEPA.loadContent("womenChoice");
                }
                else
                {
                    NEPA.loadContent("menChoice");
                }
            });
            this.element.find(".sub-main").on("click", function ()
            {
                if(NEPA.currentSex == "women")
                {
                    NEPA.loadContent("womenChoice");
                }
                else
                {
                    NEPA.loadContent("menChoice");
                }
            });
        }

        return {
            init : function ( element )
            {
               this.element = element;
               startMotion.call(this);
            },

            dispose : function ()
            {
                var owner = this;
                $(window).off("resize");
                $("html, body").off('mousewheel DOMMouseScroll');
                TweenMax.killTweensOf(owner.element.find(".video-con"));
                owner.element.find("video")[0].pause();
                owner.element.find(".sub-main").off("click");
                TweenMax.to(owner.element.find(".sub-main"), 0.4, {opacity:0, onComplete:function ()
                {
                    owner.element.trigger("finish");
                }});
            }
        }
    })();

})(jQuery);


/* mainChoice */
(function ( $ )
{
    "use strict"

    NEPA.mainChoice = (function ()
    {      
        function startMotion()
        {
            var owner = this;

            owner.element.find(".img-con").cover({
                scale: 'fillHeight'
            });
            owner.element.find(".video-con").cover({target:"video"});

            TweenMax.set(owner.element.find(".video-con"), {opacity:0});

            TweenMax.to(owner.element.find(".video-con"), 0.6, {delay:1.5, opacity:1, onStart:function ()
            {
                owner.element.find(".video-con video")[0].play();
            }});

            TweenMax.set(this.element.find(".choice-list"), {perspective:1000});
            TweenMax.to(owner.element.find(".bg-con"), 1, {delay:1, opacity:1});
            TweenMax.to(owner.element.find(".v-line"), 1, {delay:0.2, height:"100%", top:0, ease:Cubic.easeInOut});
            
            TweenMax.set(this.element.find(".bench .img-con"), {x:$(window).width()/2});
            TweenMax.to(this.element.find(".bench .img-con"), 1.5, {delay:0.5, x:0, ease:Cubic.easeInOut});
            TweenMax.set(this.element.find(".safari .img-con"), {x:-$(window).width()/2});
            TweenMax.to(this.element.find(".safari .img-con"), 1.5, {delay:0.5, x:0, ease:Cubic.easeInOut});

            // TweenMax.set(this.element.find(".choice-list .line-con"), {scaleX:0.5, scaleY:0.5, opacity:0});
            // TweenMax.to(this.element.find(".choice-list .line-con"), 1, {delay:1.5, opacity:1, scaleX:1, scaleY:1, ease:Cubic.easeInOut});

            TweenMax.set(this.element.find(".choice-list .main-box"), {opacity:0, y:50});
            TweenMax.to(this.element.find(".choice-list .main-box"), 0.6, {delay:1.8, y:1, opacity:1});

            

            TweenMax.set(this.element.find(".choice-list .sub-box"), {opacity:0, y:50});
            TweenMax.to(this.element.find(".choice-list .sub-box"), 0.6, {delay:2, y:1, opacity:1, onComplete:function()
            {
                setContent.call(owner);
            }});

            
            $(window).on("resize", function ( e )
            {
                var scaleX = $(window).width()/1920;
                var scaleY = $(window).height()/1080;
                var scale;
                if(scaleY < scaleX)
                {
                    scale = scaleY;
                }
                else 
                {
                    scale = scaleX;
                }
                var width = 448*scale;
                var height = 876*scale;
                var left = (owner.element.find(".choice-list").width() - width)/2;
                var top = (owner.element.find(".choice-list").height() - height)/2;
                owner.element.find(".choice-list .btn-con").css({width:width, height:height, left:left, top:top});
            });
            $(window).resize();

            setTimeout(function ()
            {
                $(window).resize();
            },100);

        }


        

        function setContent()
        {
            var owner = this;
            owner.element.find(".btn-con").show();
            owner.element.find(".bench .btn-con").on("mouseenter", function ( e )
            {
                owner.element.find(".bench").addClass("show");
                owner.element.find(".men").addClass("hide");
                $(this).on("mousemove", moveBox);
            });

            owner.element.find(".bench .btn-con").on("mouseleave", function ( e )
            {
                owner.element.find(".bench").removeClass("show");
                owner.element.find(".safari").removeClass("hide");
                $(this).off("mousemove", moveBox);
                resetBox();
            });

            owner.element.find(".safari .btn-con").on("mouseenter", function ( e )
            {
                owner.element.find(".safari").addClass("show");
                owner.element.find(".bench").addClass("hide");
                $(this).on("mousemove", moveBox);
            });

            owner.element.find(".safari .btn-con").on("mouseleave", function ( e )
            {
                owner.element.find(".safari").removeClass("show");
                owner.element.find(".bench").removeClass("hide");
                $(this).off("mousemove", moveBox);
                resetBox();
            });

            owner.element.find(".bench .btn-con").on("click", function ( e )
            {
                if(NEPA.currentSex == "women") NEPA.loadContent("womenBench");
                else                           NEPA.loadContent("menBench");
            });

            owner.element.find(".safari .btn-con").on("click", function ( e )
            {
                if(NEPA.currentSex == "women") NEPA.loadContent("womenSafari");
                else                           NEPA.loadContent("menSafari");
            });

            function moveBox( e )
            {
                var pageX = e.pageX - $(this).offset().left;
                var pageY = e.pageY - $(this).offset().top;
                pageX = pageX - ($(this).width()/2);
                pageY = pageY - ($(this).height()/2);
                var percentX = pageX / ($(this).width()/2);
                var percentY = pageY / ($(this).height()/2);
                var rotationY = -5*percentX;
                var rotationX = 5*percentY;
                TweenMax.to($(this).parent().find('.img-con'), 0.6, {rotationY:-rotationY*1.5, rotationX:-rotationX*1.5});
            }

            function resetBox( )
            {
                TweenMax.to(owner.element.find('.choice-list .img-con'), 0.6, {rotationY:0, rotationX:0});
            }
        }

        return {
            init : function ( element )
            {
               this.element = element;
               startMotion.call(this);
            },

            dispose : function ()
            {
                var owner = this;
                owner.element.find(".choice-list .btn-con").off("mouseenter mouseleave mousemove click");
                $(window).off("reisze");
                owner.element.find(".video-con video")[0].pause();
                TweenMax.to(owner.element.find(".main-choice"), 0.4, {opacity:0, onComplete:function ()
                {
                    owner.element.trigger("finish");
                }});
            }
        }
    })();

})(jQuery);


/* subChoice */
(function ( $ )
{
    "use strict"

    NEPA.subChoice = (function ()
    {      
        
        function startMotion()
        {
            var owner = this;
            owner.element.find(".top-image .img-con").css({"visibility":"hidden"});
            owner.element.find(".slider-content .swiper-container").css({"visibility":"hidden"});
            TweenMax.set(owner.element.find(".top-box .txt"), {opacity:0});
            TweenMax.set(owner.element.find(".top-box .line > span").eq(0), {width:0});
            TweenMax.set(owner.element.find(".top-box .line > span").eq(1), {height:0});
            TweenMax.set(owner.element.find(".top-box .line > span").eq(2), {width:0,left:"100%"});
            TweenMax.set(owner.element.find(".top-box .line > span").eq(3), {height:0,top:"100%"});
            TweenMax.set(owner.element.find(".line-con"), {width:0, left:"50%"});

            TweenMax.to(owner.element.find(".top-box .line > span").eq(0), 0.2, {delay:0.2, width:"100%"});
            TweenMax.to(owner.element.find(".top-box .line > span").eq(1), 0.2, {delay:0.4, height:"100%"});
            TweenMax.to(owner.element.find(".top-box .line > span").eq(2), 0.2, {delay:0.6, width:"100%",left:0});
            TweenMax.to(owner.element.find(".top-box .line > span").eq(3), 0.2, {delay:0.8, height:"100%",top:0, onComplete:function ()
            {
                owner.element.find(".top-box").css({"background-color":"#282828"});
                TweenMax.to(owner.element.find(".top-box .txt"), 0.8, {opacity:1});
                owner.element.find(".top-image .img-con").css({"visibility":"visible"});
                TweenMax.set(owner.element.find(".top-image .img-con").eq(0), {top:"-100%"});
                TweenMax.to(owner.element.find(".top-image .img-con").eq(0), 0.8, {delay:1, top:0, ease:Cubic.easeInOut});
                TweenMax.set(owner.element.find(".top-image .img-con").eq(1), {top:"100%"});
                TweenMax.to(owner.element.find(".top-image .img-con").eq(1), 0.8, {delay:1, top:0, ease:Cubic.easeInOut});
                TweenMax.set(owner.element.find(".top-image .img-con").eq(2), {top:"-100%"});
                TweenMax.to(owner.element.find(".top-image .img-con").eq(2), 0.8, {delay:1, top:0, ease:Cubic.easeInOut});
                owner.element.find(".slider-content .swiper-container").css({"visibility":"visible"});
                TweenMax.set(owner.element.find(".slider-content .swiper-wrapper"), {left:$(window).width()});
                TweenMax.to(owner.element.find(".slider-content .swiper-wrapper"), 1, {delay:1, left:0, ease:Cubic.easeInOut});
                TweenMax.set(owner.element.find(".slider-content .swiper-scrollbar"), {opacity:0, y:100});
                TweenMax.to(owner.element.find(".slider-content .swiper-scrollbar"), 1, {delay:1.1, y:0, opacity:1, ease:Cubic.easeInOut});
                setContent.call(owner);
            }});

            TweenMax.to(owner.element.find(".line-con"), 1, {delay:1.2, width:"100%", left:0, ease:Expo.easeInOut});
        }


        

        function setContent()
        {
            var owner = this;
        
            owner.scrollSwiper = new Swiper(owner.element.find("#scrollSwiper")[0], {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 90,
                scrollbar : {
                    el : ".swiper-scrollbar",
                    draggable: true,
                    dragSize:80
                },
                mousewheel: true
            });

            var imgSliderOpt = {
                slidesPerView: 'auto',
                effect: 'fade',
                loop: true,
                speed:1000,
                autoplay: {
                    delay:3000,
                    disableOnInteraction: false,
                },
                simulateTouch:false
            };

            owner.imgSwiper1 = new Swiper(owner.element.find("#imgSwiper1")[0], imgSliderOpt);
            owner.imgSwiper2 = new Swiper(owner.element.find("#imgSwiper2")[0], imgSliderOpt);
            owner.imgSwiper3 = new Swiper(owner.element.find("#imgSwiper3")[0], imgSliderOpt);
            
            

            owner.element.find(".swiper-slide img").one("load", function ( e )
            {
                owner.scrollSwiper.update();
                owner.scrollSwiper.scrollbar.updateSize();
                owner.scrollSwiper.slideTo(0,0);	
            });

            owner.element.find(".slider-content .swiper-slide").on("click", function( e )
            {
                var link = $(this).data("link");
                NEPA.loadContent(link);
            });
            
            $(window).on("resize", function ()
            {
                try
                {
                    owner.imgSwiper1.autoplay.stop();
                    owner.imgSwiper2.autoplay.stop();
                    owner.imgSwiper3.autoplay.stop();
                    
                    owner.timer1 = setTimeout(function ()
                    {
                        if(owner.imgSwiper1.autoplay) owner.imgSwiper1.autoplay.start();
                    }, 3000);
                    owner.timer2 = setTimeout(function ()
                    {
                        if(owner.imgSwiper2.autoplay) owner.imgSwiper2.autoplay.start();
                    }, 3500);
                    owner.timer3 = setTimeout(function ()
                    {
                        if(owner.imgSwiper3.autoplay) owner.imgSwiper3.autoplay.start();
                    }, 4000);
                    owner.scrollSwiper.update();
                    owner.scrollSwiper.scrollbar.updateSize();
                }catch(e){}
            });

            $(window).trigger("resize");

            
        }

        return {
            init : function ( element )
            {
               this.element = element;
               this.imgSwiper1;
               this.imgSwiper2;
               this.imgSwiper3;
               this.timer1;
               this.timer2;
               this.timer3;
               this.scrollSwiper;

               this.element.find(".top-image .img-con").cover({
                   scale: 'fill',
                   align: {
                       h:'center',
                       v:'20%'
                   }
               });
                
               startMotion.call(this);
            },

            dispose : function ()
            {
                var owner = this;
                $(window).off("resize");
                clearTimeout(owner.timer1);
                clearTimeout(owner.timer2);
                clearTimeout(owner.timer3);
                TweenMax.to(owner.element.find(".sub-choice"), 0.4, {opacity:0, onComplete:function ()
                {
                    if(owner.scrollSwiper) owner.scrollSwiper.destroy();
                    if(owner.imgSwiper1) owner.imgSwiper1.destroy();
                    if(owner.imgSwiper2) owner.imgSwiper2.destroy();
                    if(owner.imgSwiper3) owner.imgSwiper2.destroy();
                    owner.element.trigger("finish");
                }});
            }
        }
    })();

})(jQuery);


/* mainProduct */
(function ( $ )
{
    "use strict"

    NEPA.mainProduct = (function ()
    {      
        
        function startMotion()
        {
            var owner = this;

            if(owner.element.find("#itemSlider .swiper-slide").length <= 1)
            {
                owner.element.find(".swiper-button-prev").hide();
                owner.element.find(".swiper-button-next").hide();
            }

            TweenMax.set(owner.element.find(".lightBack"), {opacity:0});

            TweenMax.to(owner.element.find(".lightBack") , 1, {delay:0.8, opacity:0.5});

            TweenMax.set(owner.element.find(".productBlock"), {opacity:0, y:-50});
            TweenMax.set(owner.element.find(".productList"), {opacity:0, y:100});
            TweenMax.set(owner.element.find(".imageSlider"), {opacity:0});
            

            TweenMax.set(owner.element.find(".top-line"), {height:0});
            TweenMax.set(owner.element.find(".bottom-line"), {height:0});
            TweenMax.to(owner.element.find(".top-line"), 0.8, {delay:0.2, height:"12%", ease:Cubic.easeInOut, onComplete:function ()
            {
                setContent.call(owner);
            }});
            TweenMax.to(owner.element.find(".bottom-line"), 0.8, {delay:0.2, height:"12%", ease:Cubic.easeInOut});
            TweenMax.to(owner.element.find(".productList"), 0.8, {delay:0.8, opacity:1, y:0, ease:Cubic.easeOut});
            TweenMax.to(owner.element.find(".imageSlider"), 0.8, {delay:1.2, opacity:1});
            TweenMax.to(owner.element.find(".productBlock"), 0.8, {delay:1, opacity:1, y:0, ease:Cubic.easeOut});

            $(window).on("resize", function ( e )
            {
                var scaleY = $(window).height()/1080;
                TweenMax.set(owner.element.find(".productArea"), {scaleX:scaleY, scaleY:scaleY});
            });
            $(window).trigger("resize");
            
        }


        

        function setContent()
        {
            var owner = this;

            if(owner.element.find("#imgSlider .swiper-slide").length > 1)
            {
                owner.imgSwiper = new Swiper(owner.element.find("#imgSlider")[0], {
                    slidesPerView: 'auto',
                    effect: 'fade',
                    loop: true,
                    speed:1000,
                    autoplay: {
                        delay:3000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type:'progressbar'
                    },
                    simulateTouch:false
                });
            }

            if(owner.element.find("#itemSlider .swiper-slide").length > 1)
            {
                if(owner.itemSwiper)owner.itemSwiper.destroy();
                owner.itemSwiper = new Swiper (owner.element.find("#itemSlider")[0], {
                    effect: 'vertical',
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
                owner.itemSwiper.on("slideChange", function ()
                {
                    setPage.call(owner, this.realIndex+1, 3);
                });
            }

           

            setPage.call(owner, 1, this.totalItem);

            TweenMax.set(owner.element.find("#itemSlider a"), {perspective:1000});
            owner.element.find("#itemSlider a").on("mouseenter", function ( e )
            {
                $(this).css("cursor", "url(images/layout/plus_cursor.png), url(images/layout/plus_cursor.cur), auto");
                $(this).on("mousemove", moveBox);
            });

            owner.element.find("#itemSlider a").on("mouseleave", function ( e )
            {
                $(this).css("cursor", "");
                resetBox.call(owner);
            });

            owner.element.find("#itemSlider a").on("click", function ( e )
            {
                var link = NEPA.currentSex+NEPA.currentChoice1.firstWopperCase()+NEPA.currentChoice2.firstWopperCase()+"Detail";
                var idx;
                if(owner.itemSwiper)    idx = owner.itemSwiper.realIndex;
                else                    idx = 0;
                NEPA.loadContent(link, false, idx);
            });

            function moveBox( e )
            {
                var pageX = e.pageX - $(this).offset().left;
                var pageY = e.pageY - $(this).offset().top;
                pageX = pageX - ($(this).width()/2);
                pageY = pageY - ($(this).height()/2);
                var percentX = pageX / ($(this).width()/2);
                var percentY = pageY / ($(this).height()/2);
                var rotationY = -5*percentX;
                var rotationX = 5*percentY;
                TweenMax.to($(this).find("img"), 0.6, {rotationY:-rotationY*1.5, rotationX:-rotationX*1.5});
            }

            function resetBox( )
            {
                TweenMax.to(owner.element.find('#itemSlider img'), 0.6, {rotationY:0, rotationX:0});
            }
        }


        function setPage(current)
        {
            this.element.find(".pagination .current").text("0"+current);
            this.element.find(".pagination .total").text("0"+this.totalItem);
        }

        return {
            init : function ( element )
            {
               this.element = element;
               this.imgSwiper;
               this.itemSwiper;
               this.totalItem = this.element.find("#itemSlider .swiper-slide").length;

               this.element.find(".imageSlider .swiper-slide").cover({
                   scale: 'fill',
                   align: {
                       h:'center',
                       v:'20%'
                   }
               });
               
               startMotion.call(this);
            },

            dispose : function ()
            {
                var owner = this;
                $(window).off("resize");
                owner.element.find("#itemSlider a").off("mouseenter mouseleave mousemove click");
                TweenMax.to(owner.element.find(".productSimple"), 0.4, {opacity:0, onComplete:function ()
                {
                    if(owner.imgSwiper) owner.imgSwiper.destroy();
                    if(owner.itemSwiper) owner.itemSwiper.destroy();
                    owner.element.trigger("finish");
                }});
            }
        }
    })();

})(jQuery);


/* subProduct */
(function ( $ )
{
    "use strict"

    NEPA.subProduct = (function ()
    {      
        

        function startMotion()
        {
            var owner = this;

            TweenMax.set(this.element.find(".detailImage"), {perspective:1000});

            this.element.find(".imageBlock img").one("load", function ()
            {
                $(window).trigger("resize");
            });
            
            owner.element.find(".detailImage .prevBtn").hide();
            owner.element.find(".detailImage .nextBtn").hide();
            TweenMax.set(owner.element.find(".lightBack"), {opacity:0});
            TweenMax.set(owner.element.find(".backgroundText"), {y:50, opacity:0});
            TweenMax.set(owner.element.find(".productBlock"), {x:100, opacity:0});
            TweenMax.set(owner.element.find(".sizeInfo"), {y:100, opacity:0});
            

            TweenMax.to(owner.element.find(".lightBack") , 1, {delay:0.2, opacity:0.5, onComplete:function ()
            {
                changeGallery.call(owner, owner.initNum);
                TweenMax.set(owner.element.find(".detailImage .prevBtn"), {opacity:0});
                TweenMax.set(owner.element.find(".detailImage .nextBtn"), {opacity:0});
                TweenMax.to(owner.element.find(".detailImage .prevBtn") , 0.5, {delay:0.3, opacity:0.5});
                TweenMax.to(owner.element.find(".detailImage .nextBtn") , 0.5, {delay:0.3, opacity:0.5});
                if(owner.element.find(".detailImage .imageBlock").length > 1)
                {
                    owner.element.find(".detailImage .prevBtn").show();
                    owner.element.find(".detailImage .nextBtn").show();
                }
            }});
            TweenMax.to(owner.element.find(".backgroundText") , 1, {delay:0.3, y:0, opacity:1});
            TweenMax.to(owner.element.find(".sizeInfo"), 0.8, {delay:1.2, y:0, opacity:1, ease:Cubic.easeOut});
            TweenMax.to(owner.element.find(".productBlock"), 0.8, {delay:1.5, x:0, opacity:1, ease:Cubic.easeOut});
            

            $(window).on("resize", function ( e )
            {
                var scaleX = $(window).width()/1920;
                var scaleY = $(window).height()/1080;
                var scale;
                if(scaleY < scaleX)
                {
                    scale = scaleY;
                }
                else 
                {
                    scale = scaleX;
                }
                
                TweenMax.set(owner.element.find(".detailInfo"), {scaleX:scale, scaleY:scale, transformOrigin:"30% 50%"});
                var top = (owner.element.find(".imageBlock").height() - owner.element.find(".imageBlock img").height())/2;
                if(top < 50) top = 50;
                TweenMax.set(owner.element.find(".imageBlock img"), {top:top});
            });

            $(window).trigger("resize");

            if(owner.element.find(".imageBlock .dummy").length == 0) setContent.call(owner)
            setGallery.call(owner);
        }


        

        function setContent()
        {
            var owner = this;

            $("body").on("mousemove", function ( e )
            {
                var pageX = e.pageX - $(this).offset().left;
                var pageY = e.pageY - $(this).offset().top;
                pageX = pageX - ($(this).width()/2);
                pageY = pageY - ($(this).height()/2);
                var percentX = pageX / ($(this).width()/2);
                var percentY = pageY / ($(this).height()/2);
                var rotationY = -5*percentX;
                var rotationX = 5*percentY;
                //TweenMax.to($(this).parent().find('.img-con'), 0.6, {rotationY:-rotationY*1.5, rotationX:-rotationX*1.5});
                owner.element.find(".imageBlock").each(function ( i )
                {
                    if($(this).is(".show"))
                    {
                        TweenMax.to($(this).find(".imageFront"), 1, {x:50*percentX, y:-20*percentY, rotationY:-rotationY*1.2});
                        TweenMax.to($(this).find(".imageBack"), 1, {x:-10*percentX, y:-10*percentY, rotationY:-rotationY*1.2});
                    }
                });
                
                
            });
        }


        function setGallery()
        {
            var owner = this;
            owner.element.find(".imageBlock").css({visibility:"hidden"});
            owner.element.find(".productSelect li").eq(owner.initNum).addClass("active");
            owner.element.find(".productSelect li").on("click", function ( e ) 
            {
                changeGallery.call(owner, $(this).index() );
            });
            
            owner.element.find(".detailImage .prevBtn").on("click", function ( e )
            {   
                var idx = owner.element.find(".imageBlock.show").index()-1;
                if(idx < 0) idx = owner.element.find(".imageBlock").length-1;
                changeGallery.call(owner, idx);
            });

            owner.element.find(".detailImage .nextBtn").on("click", function ( e )
            {
                var idx = owner.element.find(".imageBlock.show").index()+1;
                if(idx > owner.element.find(".imageBlock").length-1) idx = 0;
                changeGallery.call(owner, idx);
            });
        }

        function changeGallery( idx )
        {
            $(window).trigger("resize");
            var owner = this;
            owner.element.find(".productSelect li").removeClass("active");
            owner.element.find(".productSelect li").eq(idx).addClass("active");

            TweenMax.killTweensOf(owner.element.find(".imageBlock img"));
            owner.element.find(".imageBlock").css({visibility:"hidden"}).removeClass("show");
            owner.element.find(".imageBlock").eq(idx).css({visibility:"visible"}).addClass("show");
            var frontImg = owner.element.find(".imageBlock").eq(idx).find(".imageFront img");
            var backImg = owner.element.find(".imageBlock").eq(idx).find(".imageBack img");
            TweenMax.set(frontImg, {opacity:0, x:-150});
            TweenMax.set(backImg, {opacity:0, x:150});

            TweenMax.to(frontImg, 0.8, {x:0, ease:Cubic.easeOut});
            TweenMax.to(backImg, 0.8, {delay:0.1, x:0, ease:Cubic.easeOut});

            TweenMax.to(frontImg, 0.4, {opacity:1});
            TweenMax.to(backImg, 0.4, {delay:0.1, opacity:1});   
            var color= owner.element.find(".productSelect li").eq(idx).data("color");
            owner.element.find(".colorInfo > span").text(color);

        }

        


        return {
            init : function ( element, initNum )
            {
               this.element = element;
               this.initNum = initNum;
               if(!this.initNum) this.initNum = 0;

               
               startMotion.call(this);
            },

            dispose : function ()
            {
                var owner = this;
                $(window).off("resize");
                $("body").off("mousemove");
                TweenMax.to(owner.element.find(".productDetail"), 0.4, {opacity:0, onComplete:function ()
                {
                    owner.element.trigger("finish");
                }});
            }
        }
    })();

})(jQuery);


/* allPage */
(function ( $ )
{
    "use strict"

    NEPA.allPage = (function ()
    {      
        

        function startMotion()
        {
            var owner = this;
            var count = 0;
            
            owner.element.find(".scroll-wrap").isotope({
                itemSelector: '.item-con',
                layoutMode: 'fitRows',
                transitionDuration:0
            });

            owner.element.find(".item-con img").on("load", function ( e )
            {
                $(window).trigger("resize");
            });

            $(window).on("resize", function ()
            {

                var scale = $(window).width()/1920;
                if(scale < 0.85) scale = scale + 0.15;
                else            scale = 1;
                var scale2 = $(window).width()/1920;
                TweenMax.set(owner.element.find(".size-set"), {scaleX:scale, scaleY:scale});
                TweenMax.set(owner.element.find(".gender-title"), {scaleX:scale2, scaleY:scale2, transformOrigin:"0 0"});

                owner.element.find(".scroll-wrap").isotope("layout");

                
            });

            owner.element.find(".scroll-container").scrollbar({
                "autoScrollSize": true,
                "autoUpdate ":true,
                "scrolly": owner.element.find('.external-scroll')
            });

            setContent.call(owner);
        }

        function setContent()
        {
            var owner = this;

            owner.element.find(".apply-btn").on("click", function ( e )
            {
                setFilter.call(owner);
            });

            owner.element.find(".clear-btn").on("click", function ( e )
            {
                resetFilter.call(owner);
            });

            owner.element.find(".item-con .img-con").on("mouseover", mouseOver);
            owner.element.find(".item-con .box-con").on("mouseover", mouseOver);

            function mouseOver( e )
            {
                var gender = $(this).parent().parent().data("gender");
                var cate = $(this).parent().parent().data("category");
                var name = $(this).parent().parent().data("name");
                owner.element.find(".item-con").removeClass("hover");
                $(this).parent().parent().addClass("hover");
                

                if(gender)
                {
                    var src = "images/guide/"+gender+"/"+cate+"/"+name+".png";
                    if(owner.element.find(".size-con .img-con img").attr("src") != src)
                    {
                        owner.element.find(".size-con .img-con").removeClass("women men").addClass(gender);
                        owner.element.find(".size-con .img-con img").attr("src", src);
                        TweenMax.set(owner.element.find(".size-con .img-con img"), {opacity:0, y:-20});
                        TweenMax.to(owner.element.find(".size-con .img-con img"), 1, {delay:0.2, opacity:1, y:0, ease:Cubic.easeOut});
//                        var cateTxt = cate.toUpperCase();
//                        cateTxt += " 다운";
//                        owner.element.find(".brand-title").text(cateTxt);
//                        var genderTxt = "FOR " + gender.toUpperCase();
//                        owner.element.find(".gender-title").text(genderTxt);
                        if(cate == "bench")
                        {
                            owner.element.find(".brand-title").text("벤치 다운");
                        }
                        else if(cate == "safari")
                        {
                            owner.element.find(".brand-title").text("사파리 다운");
                        }

                        if(gender == "women")
                        {
                            owner.element.find(".gender-title").text("여성 제품");
                        }
                        else if(gender == "men")
                        {
                            owner.element.find(".gender-title").text("남성 제품");
                        }
                    }
                }
                
            }

            owner.element.find(".item-con").on("click", function ( e )
            {
                var gender = $(this).data("gender");
                var cate = $(this).data("category");
                var name = $(this).data("name");
                NEPA.loadContent(gender+cate.firstWopperCase()+name.firstWopperCase());
            });

            owner.element.find(".goto-top-btn").on("click", function ( e )
            {
                TweenMax.to(owner.element.find(".scroll-container"), 0.6, {scrollTop:0});
            });

            owner.element.find(".scroll-container").on("scroll", function ( e )
            {
                if($(this).scrollTop() > 100)
                {
                    owner.element.find(".goto-top-btn").show();
                }
                else
                {
                    owner.element.find(".goto-top-btn").hide();
                }

                owner.element.find(".item-con").each(function ( i )
                {
                    
                    var alpha = 350 - $(this).offset().top;
                    if(alpha < 0) alpha = 0;
                    alpha = 1-(alpha/500);
                    if(alpha < 0) alpha = 0;
                    TweenMax.set($(this).find(".item-wrap"), {opacity:alpha});
                });
                
            });

            animateList.call(owner);

        }

        function setFilter()
        {
            var owner = this;
            owner.element.find(".scroll-container").scrollTop(0);

            var cateChk = owner.element.find(".filter-con .category input:checked");
            if(cateChk.length == 2 || cateChk.length == 0)
            {
                owner.cateFilter = "";
            }
            else
            {
                owner.cateFilter = cateChk.data("val");
            }

            var genderChk = owner.element.find(".filter-con .gender input:checked");
            if(genderChk.length == 2 || genderChk.length == 0)
            {
                owner.genderFilter = "";
            }
            else
            {
                owner.genderFilter = genderChk.data("val");
            }

            owner.detailFiler = [];

            owner.element.find(".filter-con .detials input").each(function ( i )
            {
                if($(this).is(":checked"))
                {
                    owner.detailFiler.push(i+1);
                }
            });
            if(owner.detailFiler.length == owner.element.find(".filter-con .detials input").length)  owner.detailFiler = [];



            owner.colorFiler = [];

            owner.element.find(".filter-con .colortone input").each(function ( i )
            {
                if($(this).is(":checked"))
                {
                    owner.colorFiler.push($(this).data("val"));
                }
            });
            if(owner.colorFiler.length == owner.element.find(".filter-con .colortone input").length)  owner.colorFiler = [];


            owner.sizeFiler = [];

            owner.element.find(".filter-con .cm input").each(function ( i )
            {
                if($(this).is(":checked"))
                {
                    var size = $(this).prev().text().toLowerCase().split(" ~ ");
                    owner.sizeFiler.push({min:parseInt(size[0]), max:parseInt(size[1])});
                }
            });
            if(owner.sizeFiler.length == owner.element.find(".filter-con .cm input").length)  owner.sizeFiler = [];

            owner.priceFiler = [];

            owner.element.find(".filter-con .price input").each(function ( i )
            {
                if($(this).is(":checked"))
                {
                    owner.priceFiler.push({min:parseInt($(this).data("min-price")), max:parseInt($(this).data("max-price"))});
                }
            });
            if(owner.priceFiler.length == owner.element.find(".filter-con .price input").length)  owner.priceFiler = [];



            owner.element.find(".scroll-wrap").isotope({filter:function ()
            {
                var cate = $(this).data("category");
                var gender = $(this).data("gender");
                var details = String($(this).data("details")).split(",");
                var color = String($(this).data("color")).split(",");
                var size = parseInt($(this).data("size"));
                var price = parseInt($(this).data("price"));

                

                if(owner.cateFilter != "")
                {
                    if(owner.cateFilter != cate)    return false;
                }
                if(owner.genderFilter != "")
                {
                   if(owner.genderFilter != gender)    return false;
                }
                
                if(owner.detailFiler.length > 0)
                {
                    var detailsCount = 0;
                    for(var i=0; i<details.length; i++)
                    {
                        
                        if($.inArray(parseInt(details[i]), owner.detailFiler) > -1)
                        {
                            detailsCount++;
                        }
                    }
                    if(detailsCount == 0) return false;
                }

                if(owner.colorFiler.length > 0)
                {
                    var colorCount = 0;
                    for(var i=0; i<color.length; i++)
                    {
                        if($.inArray(color[i], owner.colorFiler) > -1)
                        {
                            colorCount++;
                        }
                    }
                    if(colorCount == 0) return false;
                }
            
                if(owner.sizeFiler.length > 0)
                {
                    var sizeCount = 0;
                    for(var i=0; i<owner.sizeFiler.length; i++)
                    {
                        if(size >= owner.sizeFiler[i].min && size <= owner.sizeFiler[i].max )
                        {
                            sizeCount++;
                        }
                    }
                    if(sizeCount == 0) return false;
                }

                if(owner.priceFiler.length > 0)
                {
                    var priceCount = 0;
                    for(var i=0; i<owner.priceFiler.length; i++)
                    {
                        if(price >= owner.priceFiler[i].min && price <= owner.priceFiler[i].max )
                        {
                            priceCount++;
                        }
                    }
                    if(priceCount == 0) return false;
                }

                return true;
            }});

            animateList.call(owner);

        }

        function resetFilter()
        {
            var owner = this;
            owner.element.find(".scroll-container").scrollTop(0);
            owner.element.find(".filter-con input").attr("checked", false);
            owner.element.find(".scroll-wrap").isotope({filter:"*"});
            animateList.call(owner);
        }


        function animateList()
        {
            var owner = this;
            this.element.find(".item-empty").hide();
            this.element.find(".item-con:visible").each(function ( i )
            {
                TweenMax.set($(this), {opacity:0, y:100});
                TweenMax.to($(this), 0.8, {delay:0.1+(0.1 * i), opacity:1, y:0, ease:Cubic.easeOut})
            });
            owner.element.find(".item-con:visible").eq(0).find(".img-con").trigger("mouseover");
            if(this.element.find(".item-con:visible").length == 0)
            {
                this.element.find(".item-empty").show();
            }
            
        }

        
        return {
            init : function ( element )
            {
               this.element = element;
               this.timer;
               this.cateFilter = "";
               this.genderFilter = "";
               this.detailFiler = new Array();
               this.colorFilter = new Array();
               this.sizeFilter = new Array();
               this.priceFilter = new Array();

               startMotion.call(this);
            },

            dispose : function ()
            {
                var owner = this;
                $(window).off("resize");
                owner.element.find(".img-con").off("mouseover");
                owner.element.find(".box-con").off("mouseover");
                owner.element.find(".apply-btn").off("click");
                owner.element.find(".clear-btn").off("click");
                owner.element.find(".item-con").off("click");
                owner.element.find(".goto-top-btn").off("click");
                owner.element.find(".scroll-container").off("scroll");
                TweenMax.to(owner.element.find(".allPage"), 0.4, {opacity:0, onComplete:function ()
                {
                    owner.element.find(".scroll-container").scrollbar("destroy");
                    owner.element.find(".scroll-wrap").isotope("destroy");
                    owner.element.trigger("finish");
                }});
            }
        }
    })();

})(jQuery);