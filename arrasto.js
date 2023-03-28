var arr_dragobj;
var arr_indrag;
var Arrastado;
var emArrasto;
var e_dEndX;
var e_dEndY;
var e_dElement;

$(document).ready(function () {

  $(document).on('mouseenter mousedown touchstart', 'html:has([arrastavel])', function (Event) {
    $(this).on('mousedown touchstart', '[arrastavel]', function () {
      event.stopPropagation();
      $(this).comecarArrasto();
    })
  });

  $(document).on('mouseleave touchleave', '[emarrasto]', function () {
    $('html').removeAttr('emarrasto');
    Arrastado = undefined;
  });


  $(document).on('mousemove touchmove', '[emarrasto]', function (e_d) {
    if (arr_indrag == true) {

      if (e_d.touches != undefined) {
        e_dEndX = e_d.touches[0].clientX;
        e_dEndY = e_d.touches[0].clientY;

      } else {
        e_dEndX = e_d.clientX;
        e_dEndY = e_d.clientY;
        
      };
      e_dElement = $(document.elementFromPoint(e_dEndX, e_dEndY));
    $('[arrastarPara]').removeAttr('arrastarPara');
      e_dElement.attr('arrastarPara','');
      
      $('[data_dragobj]').css('top', e_dEndY+5).css('left', e_dEndX+7).css('position', 'fixed');
      emArrasto.fadeIn('fast');


    }
  });
  
   $(document).on('mouseup touchcancel touchend', '[emarrasto]', function (e_d) {
       console.log('Fim');
       console.log('Indrag? :'+arr_indrag);
       console.log('Elemento detectado? :'+$('[arrastarPara]').get(0).tagName+'.'+$('[arrastarPara]').attr('class'));
    if (arr_indrag == true) {
      if ( $('[arrastarPara]').is('[ondeixar]')) {
        var fnOn =  $('[arrastarPara]').attr('ondeixar').replaceAll('$(this)', 'e_dElement')
        eval(fnOn);
      } else if ( $('[arrastarPara]').is('[deixavel]')) {
        // $('[arrastarPara]').deixar();
      } else if ( $('[arrastarPara]').is('[deixavel] *')) {
        // $('[arrastarPara]').parents('[deixavel]').deixar();
      } else if ( $('[arrastarPara]').is('[ondeixar] *')) {
        var fnOn =  $('[arrastarPara]').parents('[ondeixar] *').attr('ondeixar').replaceAll('$(this)', 'e_dElement')
        eval(fnOn);
      }
    }
    arr_indragTouch = false;
    $('html').removeAttr('emarrasto');
    $('[arrastarPara]').removeAttr('arrastarPara');
    $('[data_dragobj] *').remove();
  });

});

$.fn.arrastavel = function () {
  if ($('html body > [data_dragobj]+style').length == 0) {
    $('body').append('<hide data_dragobj></hide><style>html:not([emarrasto]) [data_dragobj], html:not([emarrasto]) [data_dragobj] *{opacity:0 !important;zoom:0.1 !important}[emarrasto] [ondeixar],[emarrasto] [deixavel],[emarrasto] [onarrastar], [emarrasto] [arrastavel], [emarrasto] body *:has([ondeixar],[deixavel]),[data_objdrag]{user-select:none !important;cursor:-webkit-grabbing}[emarrasto] [ondeixar],[emarrasto] [deixavel]{cursor:-webkit-grab !important}[emarrasto] :not([ondeixar]),[emarrasto] :not([deixavel]){cursor:no-drop}[arrastarPara]{}</style>')
  };
  arr_dragobj = $('body>[data_dragobj]');
  this.attr('arrastavel', '')
};
$.fn.comecarArrasto = function (call) {
  function getCSS(el) {
    el = el.get(0);
    var styles = window.getComputedStyle(el);
    var cssText = styles.cssText;
    if (!cssText) {
      cssText = Array.from(styles).reduce((str, property) => {
        return `${str}${property}:${styles.getPropertyValue(property)};`;
      }, '');
    }
    return cssText;
  };
  if ((Arrastado == undefined) || (!Arrastado.is(this.find('*')))) {
    this.arrastavel();
    $('html').attr('emarrasto', '');
    arr_indragTouch = true;
    arr_indrag = true;
    Arrastado = this;
    emArrasto = Arrastado.clone().attr('style', getCSS(Arrastado));
    $('[data_dragobj]').width(Arrastado.outerWidth()).height(Arrastado.outerHeight()).css('opacity', 0.6);
    arr_dragobj.html('');
    emArrasto.width(Arrastado.width()).height(Arrastado.height()).hide().appendTo(arr_dragobj)
  }
};


$.fn.arrastar = function (callback) {
  this.each(function () {
    $(this).arrastavel();
    $(this).on('mousedown touchstart', function () {
      if (typeof callback === 'function') {
          callback.call($(this));
      }
    });
  });
}

$.fn.deixar = function (callback) {
var eachDrops = [];
  this.each(function () {
    eachDrops.push(parseInt(Math.random() * 500) + $(this).get(0).tagName + parseInt(Math.random() * 250))
    $(this).attr('deixavel',eachDrops[eachDrops.length-1]);
    $(document).on('mouseup touchcancel touchend','[emarrasto]', function () {
      if (eachDrops.includes(e_dElement.attr('deixavel'))){
      if (typeof callback === 'function') {
        callback.call(e_dElement);
      }
    }
    });
  });
}

