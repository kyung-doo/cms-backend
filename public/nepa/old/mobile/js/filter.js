$(function ()
{
    var cateFilter = "";
    var genderFilter = "";
    var detailFiler = new Array();
    var colorFilter = new Array();
    var sizeFilter = new Array();
    var priceFilter = new Array();



    $('.filterBtn a').on('click',function()
    {
        $('.filter').slideToggle(200);
    });

    $('.btnSubmit .close-btn').on('click',function( e )
    {
        $('.filter').slideUp(200);
    });

    $('.btnSubmit .apply-btn').on('click',function( e )
    {
        setFilter();
        $('.filter').slideUp(200);
    });

    $('.btnSubmit .clear-btn').on('click',function( e )
    {
        resetFilter();
        $('.filter').slideUp(200);
    });


    $(".scroll-wrap").isotope({
        itemSelector: '.item-con',
        layoutMode: 'fitRows',
        transitionDuration:0
    });

    animateList();


    function setFilter()
    {
        $("html, body").scrollTop(0);
        var cateChk = $(".filterList .category input:checked");
        if(cateChk.length == 2 || cateChk.length == 0)
        {
            cateFilter = "";
        }
        else
        {
            cateFilter = cateChk.data("val");
        }

        var genderChk = $(".filterList .gender input:checked");
        if(genderChk.length == 2 || genderChk.length == 0)
        {
            genderFilter = "";
        }
        else
        {
            genderFilter = genderChk.data("val");
        }

        detailFiler = [];
        $(".filterList .detials input").each(function ( i )
        {
            if($(this).is(":checked"))
            {
                detailFiler.push(i+1);
            }
        });
        if(detailFiler.length == $(".filterList .detials input").length)  detailFiler = [];


        colorFiler = [];
        $(".filterList .colortone input").each(function ( i )
        {
            if($(this).is(":checked"))
            {
                colorFiler.push($(this).data("val"));
            }
        });
        if(colorFiler.length == $(".filterList .colortone input").length)  colorFiler = [];


        sizeFiler = [];
        $(".filterList .cm input").each(function ( i )
        {
            if($(this).is(":checked"))
            {
                var size = $(this).parent().text().toLowerCase().split(" ~ ");
                sizeFiler.push({min:parseInt(size[0]), max:parseInt(size[1])});
            }
        });
        if(sizeFiler.length == $(".filterList .cm input").length)  sizeFiler = [];


        priceFiler = [];
        $(".filterList .price input").each(function ( i )
        {
            if($(this).is(":checked"))
            {
                priceFiler.push({min:parseInt($(this).data("min-price")), max:parseInt($(this).data("max-price"))});
            }
        });
        if(priceFiler.length == $(".filterList .price input").length)  priceFiler = [];
        
        $(".scroll-wrap").isotope({filter:function ()
        {
            var cate = $(this).data("category");
            var gender = $(this).data("gender");
            var details = String($(this).data("details")).split(",");
            var color = String($(this).data("color")).split(",");
            var size = parseInt($(this).data("size"));
            var price = parseInt($(this).data("price"));

            if(cateFilter != "")
            {
                if(cateFilter != cate)    return false;
            }
            if(genderFilter != "")
            {
                if(genderFilter != gender)    return false;
            }

            if(detailFiler.length > 0)
            {
                var detailsCount = 0;
                for(var i=0; i<details.length; i++)
                {
                    
                    if($.inArray(parseInt(details[i]), detailFiler) > -1)
                    {
                        detailsCount++;
                    }
                }
                if(detailsCount == 0) return false;
            }

            if(colorFiler.length > 0)
            {
                var colorCount = 0;
                for(var i=0; i<color.length; i++)
                {
                    if($.inArray(color[i], colorFiler) > -1)
                    {
                        colorCount++;
                    }
                }
                if(colorCount == 0) return false;
            }
        
            if(sizeFiler.length > 0)
            {
                var sizeCount = 0;
                for(var i=0; i<sizeFiler.length; i++)
                {
                    if(size >= sizeFiler[i].min && size <= sizeFiler[i].max )
                    {
                        sizeCount++;
                    }
                }
                if(sizeCount == 0) return false;
            }

            if(priceFiler.length > 0)
            {
                var priceCount = 0;
                for(var i=0; i<priceFiler.length; i++)
                {
                    if(price >= priceFiler[i].min && price <= priceFiler[i].max )
                    {
                        priceCount++;
                    }
                }
                if(priceCount == 0) return false;
            }

            return true;

        }});

        animateList();

    }


    function resetFilter()
    {
        $("html, body").scrollTop(0);
        $(".filterList input").attr("checked", false);
        $(".scroll-wrap").isotope({filter:"*"});
        animateList();
    }


    function animateList()
    {
        $(".item-con:visible").each(function ( i )
        {
            TweenMax.set($(this), {opacity:0, y:200});
            TweenMax.to($(this), 0.8, {delay:0.1+(0.1 * i), opacity:1, y:0, ease:Cubic.easeOut})
        });
    }
    

});




