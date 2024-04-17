/*////////// Mouse Custom Cursor ///////////*/

const cursor = document.querySelector(".custom-cursor");
const links = document.querySelectorAll("a");
let isCursorInited = false;

const initCursor = () => {
  cursor.classList.add("custom-cursor--init");
  isCursorInited = true;
};

const destroyCursor = () => {
  cursor.classList.remove("custom-cursor--init");
  isCursorInited = false;
};

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("custom-cursor--link");
  });

  link.addEventListener("mouseout", () => {
    cursor.classList.remove("custom-cursor--link");
  });
});

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  if (!isCursorInited) {
    initCursor();
  }

  cursor.style = `translate: ${mouseX}px ${mouseY}px`;
});

document.addEventListener("mouseout", destroyCursor);

/*/// End ///*/


/*////////// Why Choose Us sec Revealing /////////*/
$(function() {
  var menu = $('#why_choose');
  var hieghtThreshold = $(".content-full").offset().top;
  var hieghtThreshold_end  = $(".content-full").offset().top +$(".content-full").height() ;
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= hieghtThreshold && scroll <=  hieghtThreshold_end ) {
          menu.addClass('dark');
      } else {
          menu.removeClass('dark');
      }
    });
  });

$(function() {
  var menu1 = $('#why_choose');
  var hieghtThreshold1 = $(".ThirdLockup").offset().top;
  var hieghtThreshold_end1  = $(".ThirdLockup").offset().top +$(".ThirdLockup").height() ;
  $(window).scroll(function() {
      var scroll1 = $(window).scrollTop();

      if (scroll1 >= hieghtThreshold1 && scroll1 <=  hieghtThreshold_end1 ) {
          menu1.addClass('dark1');
      } else {
          menu1.removeClass('dark1');
      }
    });
  });

  /*/// End ///*/
