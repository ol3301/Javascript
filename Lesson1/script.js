function areaOfTriangle(obj){
    var a=1*obj.st1.value;
    var b=1*obj.st2.value;
    var c=1*obj.st3.value;
    var p=(a+b+c)/2;  
    var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    obj.res.value=s.toFixed(2);
  }
  
function maxZnach(obj){
    var a=1*obj.zn1.value;
    var b=1*obj.zn2.value;
    var c=1*obj.zn3.value;
    var m=a;
    if (b>m) m=b;
    if (c>m) m=c;
    obj.res.value=m;
  }

function bigPict(){
    var w=document.tigr.width;
    if (w<302){
     document.tigr.width=w+10;
     //document.tigr.src="1.jpg"
     setTimeout("bigPict()", 10)
    }
}

function NormalPict(){
    var w = document.tigr.width;
    if(w>102){
        document.tigr.width-=10;
        setTimeout("NormalPict()",10);
    }
}
 

function Vday(obj){
    if (obj.elements[0][0].selected)
     obj.res.value="В понедельник будет ветрено, температура воздуха поднимется до +20 градусов";
    if (obj.elements[0][1].selected)
     obj.res.value="Во вторник будет солнечно, температура воздуха поднимется до +25 градусов";
    if (obj.elements[0][2].selected)
     obj.res.value="В среду будет прохладно, температура воздуха опустится до +17 градусов";
    if (obj.elements[0][3].selected)
     obj.res.value="В четверг будет пасмурно, температура воздуха опустится до +10 градусов";
    if (obj.elements[0][4].selected)
     obj.res.value="В пятницу будет облачно, температура воздуха поднимется до +15 градусов";
    if (obj.elements[0][5].selected)
     obj.res.value="В субботу будет ветрено, температура воздуха поднимется до +27 градусов";
    if (obj.elements[0][6].selected)
     obj.res.value="В воскресенье будет ясно, температура воздуха поднимется до +30 градусов";
  }
  
function Vday1(obj){
    var a=obj.zn.value;
    var s;
    switch (a)
    {
     case 'понедельник': s="В понедельник будет ветрено, температура воздуха поднимется до +20 градусов";
                                                                                                    break;
     case 'вторник': s="Во вторник будет солнечно, температура воздуха поднимется до +25 градусов"; break;
     case 'среда': s="В среду будет прохладно, температура воздуха опустится до +17 градусов"; break;
     case 'четверг': s="В четверг будет пасмурно, температура воздуха опустится до +10 градусов"; break;
     case 'пятница': s="В пятницу будет облачно, температура воздуха поднимется до +15 градусов"; break;
     case 'суббота': s="В субботу будет ветрено, температура воздуха поднимется до +27 градусов"; break;
     case 'воскресенье': s="В воскресенье будет ясно, температура воздуха поднимется до +30 градусов";
                                                                                                  break;
     default: s='Укажите правильно день недели'
    }
    obj.res.value=s;
  }

function summa(obj) {
    var summa=0;
    var a1=1*obj.a1.value;
    var a2=1*obj.a2.value;
    for (var i = a1; i <= a2; i++) {
     summa+=i;
    }
    obj.result.value = summa;
}

  
  