(() => {

var elements = document.getElementsByClassName('child');

for (var i = 0; i < elements.length; i++)
{
  elements[i].onclick = function() {

    var el =elements[0];
    while (el)
    {
      if(el.tagName ==="DIV") {
        el.classList.remove("bak");
      }
      el = el.nextSibling; 
    }

    this.classList.add ("bak");
  };
}

    })();


  //   <div class="parent">
  //   <div class="child">aasdfdiv 1
  //     <h2 class="child">sladkfjlk lsdkfjs;ldkfj</h2>

  //   </div>
  //   <div class="child">d sadiv 2</div>
  //   <div class="child">divasdf 3</div>
  //   <div class="child">dasdfiv 4</div>
  //   <div class="child">dasdfiv 5</div>

  //  <div>