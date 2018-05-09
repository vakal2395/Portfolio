var pht = document.getElementById('image');
pht.addEventListener('click',nextPht);

var count = 3;


function nextPht() {
	count++;
	if (count > 14) {
		count = 3;
	}
	pht.setAttribute('src','img/'+ count + '.jpg');
}
  

  var hov = document.getElementById('icon');

  hov.onmouseover = function(){
        hov.setAttribute('src','img/a1.png');
    }
    hov.onmouseout = function(){
       hov.setAttribute('src','img/a2.jpg');
    }


    var hov1 = document.getElementById('icon1');

  hov1.onmouseover = function(){
        hov1.setAttribute('src','img/a2.png');
    }
    hov1.onmouseout = function(){
       hov1.setAttribute('src','img/a3.jpg');
    }


    var hov2 = document.getElementById('icon2');

  hov2.onmouseover = function(){
        hov2.setAttribute('src','img/a3.png');
    }
    hov2.onmouseout = function(){
       hov2.setAttribute('src','img/a4.jpg');
    }
