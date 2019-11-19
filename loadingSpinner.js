window.progressBar = {
    name : "progress bar draw",
    version : "1.0.0",
};


progressBar.LoadingSpinner = function(options){
    this.name = 'progressBarDraw.Spinner';

    var options = $.extend(true, {
        className : 'loader',
        message : '파일 업로드 중입니다.',
        dim : true

    }, options);

    var keyframes = '@keyframes loaderSpinner{0%,100%{box-shadow:0 -2.7em 0 0 #1ba1f8,1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.3),-1.4em -2.4em 0 0 #89d0ff}8.3%{box-shadow:0 -2.7em 0 0 #89d0ff,1.4em -2.4em 0 0 #1ba1f8,2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.3)}16.6%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.3),1.4em -2.4em 0 0 #89d0ff,2.4em -1.4em 0 0 #1ba1f8,2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}25%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.3),2.4em -1.4em 0 0 #89d0ff,2.7em 0 0 0 #1ba1f8,2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}33.3%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.3),2.7em 0 0 0 #89d0ff,2.4em 1.4em 0 0 #1ba1f8,1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}41.6%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.3),2.4em 1.4em 0 0 #89d0ff,1.4em 2.4em 0 0 #1ba1f8,0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}50%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.3),1.4em 2.4em 0 0 #89d0ff,0 2.7em 0 0 #1ba1f8,-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}58.3%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.3),0 2.7em 0 0 #89d0ff,-1.4em 2.4em 0 0 #1ba1f8,-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}66.6%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.3),-1.4em 2.4em 0 0 #89d0ff,-2.4em 1.4em 0 0 #1ba1f8,-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}75%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.3),-2.4em 1.4em 0 0 #89d0ff,-2.7em 0 0 0 #1ba1f8,-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}83.3%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.3),-2.7em 0 0 0 #89d0ff,-2.4em -1.4em 0 0 #1ba1f8,-1.4em -2.4em 0 0 rgba(255,255,255,.2)}91.6%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.3),-2.4em -1.4em 0 0 #89d0ff,-1.4em -2.4em 0 0 #1ba1f8}}@-webkit-keyframes loaderSpinner{0%,100%{box-shadow:0 -2.7em 0 0 #1ba1f8,1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.3),-1.4em -2.4em 0 0 #89d0ff}8.3%{box-shadow:0 -2.7em 0 0 #89d0ff,1.4em -2.4em 0 0 #1ba1f8,2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.3)}16.6%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.3),1.4em -2.4em 0 0 #89d0ff,2.4em -1.4em 0 0 #1ba1f8,2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}25%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.3),2.4em -1.4em 0 0 #89d0ff,2.7em 0 0 0 #1ba1f8,2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}33.3%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.3),2.7em 0 0 0 #89d0ff,2.4em 1.4em 0 0 #1ba1f8,1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}41.6%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.3),2.4em 1.4em 0 0 #89d0ff,1.4em 2.4em 0 0 #1ba1f8,0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}50%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.3),1.4em 2.4em 0 0 #89d0ff,0 2.7em 0 0 #1ba1f8,-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}58.3%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.3),0 2.7em 0 0 #89d0ff,-1.4em 2.4em 0 0 #1ba1f8,-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}66.6%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.3),-1.4em 2.4em 0 0 #89d0ff,-2.4em 1.4em 0 0 #1ba1f8,-2.7em 0 0 0 rgba(255,255,255,.2),-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}75%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.3),-2.4em 1.4em 0 0 #89d0ff,-2.7em 0 0 0 #1ba1f8,-2.4em -1.4em 0 0 rgba(255,255,255,.2),-1.4em -2.4em 0 0 rgba(255,255,255,.2)}83.3%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.3),-2.7em 0 0 0 #89d0ff,-2.4em -1.4em 0 0 #1ba1f8,-1.4em -2.4em 0 0 rgba(255,255,255,.2)}91.6%{box-shadow:0 -2.7em 0 0 rgba(255,255,255,.2),1.4em -2.4em 0 0 rgba(255,255,255,.2),2.4em -1.4em 0 0 rgba(255,255,255,.2),2.7em 0 0 0 rgba(255,255,255,.2),2.4em 1.4em 0 0 rgba(255,255,255,.2),1.4em 2.4em 0 0 rgba(255,255,255,.2),0 2.7em 0 0 rgba(255,255,255,.2),-1.4em 2.4em 0 0 rgba(255,255,255,.2),-2.4em 1.4em 0 0 rgba(255,255,255,.2),-2.7em 0 0 0 rgba(255,255,255,.3),-2.4em -1.4em 0 0 #89d0ff,-1.4em -2.4em 0 0 #1ba1f8}}';

    this.setKeyFrames = function(){
        var styleEl = $('<style></style>', { 
            id : options.className + 'style'
        }).html(keyframes);

        $('head').append(styleEl);
    }

    this.init = function(){
        var styleEl = $('#' + options.className + 'style');
        if(styleEl.length < 1) this.setKeyFrames();
        
        this.draw();
        this.appendElement();
    };

    this.draw = function(){

        this.wrap = $('<div></div>', { 
            class : options.className + '_wrap'

        }).css({
            'position' : 'absolute',
            'top' : '0',
            'left' : '0',
            'bottom' : '0',
            'right' : '0',
            'margin' : 'auto',
            'width' : '155px',
            'height' : '115px'
        });

        this.element = $('<div></div>', { 
            class : options.className 

        }).css({
            'margin' : '38px auto 43px',
            'fontSize' : '10px',
            'width' : '.9em',
            'height' : '.9em',
            'borderRadius' : '50%',
            '-webkit-animation' :'loaderSpinner 1.1s infinite ease',
            'animation' : 'loaderSpinner 1.1s infinite ease',
            '-webkit-transform' : 'translateZ(0)',
            '-ms-transform' : 'translateZ(0)',
            'transform' : 'translateZ(0)'
        });

        if(options.message){
            this.message = $('<p></p>', { 
                class : options.className + '_message'

            }).css({
                'margin' : '0',
                'fontSize' : '14px',
                'color' : '#fff',
                'textAlign' : 'center'

            }).text(options.message);
        }

        if(options.dim){
            this.dim = $('<div></div>', { 
                class : options.className + '_dim'

            }).css({
                'display' : 'none',
                'position' : 'fixed',
                'left' : '0',
                'right' : '0',
                'top' : '0',
                'bottom' : '0',
                'zIndex' : '999',
                'background' : 'rgba(0,0,0,0.5)' 
            });;
        }
    };

    this.appendElement = function(){
        this.wrap.append(this.element);

        if(options.message){
            this.wrap.append(this.message);
        }

        if(options.dim){
            this.dim.append(this.wrap);
            this.wrap = this.dim;
        }

        $('body').append(this.wrap);
    }

    this.show = function(){
        $(this.wrap).show();
    };

    this.hide = function(){
        $(this.wrap).hide();
    }

    this.remove = function(){
        $('body').find(this.wrap).remove();
        $('#' + options.className + 'style').remove();
    }

    this.init();

    return{
        wrap : this.wrap,
        show : this.show,
        hide : this.hide,
        remove : this.remove,
    }
};