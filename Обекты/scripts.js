class Car{
    constructor(perfomance, year, av_speed){
        this.av_speed = av_speed;
        this.perfomance = perfomance;
        this.year = year;
    }

    ToString() {
        return this.perfomance+" "+this.year+" "+ this.av_speed;
    }

    //в километрах
    CountTime(distance) {
        var relaxation = 0;//4
        var hours =0;
        for(var i=distance;i > 0;i -= this.av_speed){
            ++hours;
            if(relaxation == 4){
                i += this.av_speed;
                relaxation = 0;
                continue;
            }
            ++relaxation;
        }
        return hours;
    }

    Test(distance){
        alert(this.CountTime(distance)+" часов");       
    }
}

class Fraction{
    constructor(numerator,denominator){
        this.numerator = numerator;
        this.denominator = denominator;
    }

    Sum(fraction){
        return new Fraction(this.numerator * fraction.denominator+ fraction.Numerator*this.denominator,this.denominator*fraction.denominator);
    }

    Subtraction(fraction){
        return new Fraction(this.numerator * fraction.denominator - fraction.numerator*this.denominator,this.denominator*fraction.denominator);
    }

    Multiplication(fraction){
        return new Fraction(this.numerator * fraction.denominator * fraction.numerator*this.denominator,this.denominator*fraction.denominator);
    }

    Division(fraction){
        return new Fraction(this.numerator * fraction.denominator / fraction.numerator*this.denominator,this.denominator*fraction.denominator);
    }
}

class Time{
    constructor(){
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;         
    }

    ToString(){
        return `${this.hours}:${this.minutes}:${this.seconds}`
    }

    AddSeconds(seconds){
        this.seconds += seconds;
       
        if(this.seconds >= 60){
            var i=this.seconds;
            for(;i>=60;i-=60){
                this.AddMinutes(1);
            }
            this.seconds = i;
            return;
        }
    }

    AddMinutes(minutes){
        this.minutes += minutes;
        if(this.minutes >= 60){
            this.minutes=0;
            this.AddHours(1);
            return;
        }
    }

    AddHours(hours){
        this.hours+=hours;
    }
}

class Purchase{
    constructor(name,count=0){
        this.name = name;
        this.count = count;
        this.isBuy = false;
    }
}

class PurchaseMaster{
    constructor(purchases){
        this.purchases = purchases;
    }
    showPurchases(){
        var res = "";

        for(var i in this.purchases){
            if(this.purchases[i].isBuy == false){
                res+= this.purchases[i].name+", ";              
            }
        }
    
        for(var i=0;i<this.purchases.length;++i){
            if(this.purchases[i].isBuy == true){
                res+= this.purchases[i].name+", ";              
            }
        }

        document.form.res.value = res;
    }
    
    AddPurchase(purchase){
        for(var _purchase in this.purchases){
            if(this.purchases[_purchase].name == purchase.name){
                this.purchases[_purchase].count += purchase.count;
                return;
            }
        }

        this.purchases[this.purchases.length] = purchase ;
    }

    Buy(purchase_name){
        for(var p in this.purchases){
            if(this.purchases[p].name == purchase_name){
                this.purchases[p].isBuy = true;
                alert('отметили');
            }
        }
    }
}

class Product{
    constructor(name,price,count=0){
        this.name = name;
        this.count = count;
        this.price = price;
    }
}

class Check{
    constructor(products){
        this.products = products;
    }

    Print(){
        var res ="";
        var all_price = 0;
        for(var p in this.products){
            all_price += this.products[p].price*this.products[p].count;
            res+="Название: "+this.products[p].name+", цена: "+this.products[p].price*this.products[p].count+", количество: "+this.products[p].count+"\n";
        }
        res += "Общая стоимость покупок: "+all_price;
        alert(res);
    }

    MaxPrice(){
        var max=0;
        for(var p in this.products){
            if(max < this.products[p].price){
                max = this.products[p].price;
            }
        }
        alert(max);
    }

    AvgPrice(){
        var total=0;
        for(var p in this.products){
            total+= this.products[p].price;
        }
        alert(total/this.products.length);
    }
}

class CssStyle{
    constructor(name,data){
        this.name = name;
        this.data = data;
    }
}

function TestCss(arr_css){
    for(var css in arr_css){
        document.write(`<p style="${arr_css[css].data}">Name: ${arr_css[css].name}<br>test_text\nntest_textrgbrtbrt<br>fdfgtrhtg<br></p>`);
    }
}

class ClassRoom{
    constructor(name,seats_count,faculty_name){
        this.name = name;
        this.seats_count = seats_count;
        this.faculty_name = faculty_name;
    }
}

class Group{
    constructor(name,student_count,faculty_name){
        this.name = name;
        this.student_count = student_count;
        this.faculty_name = faculty_name;
    }
}

class ClassRoomsMaster{
    constructor(rooms){
        this.rooms = rooms;
    }

    print(){
        var res = "";
        for(var r in this.rooms){
            res+= this.rooms[r].name+"\n";
        }
        alert(res);
    }

    printForFacultyName(faculty_name){
        var res ="";
        for(var r in this.rooms){
            if(this.rooms[r].faculty_name == faculty_name){
                res+= this.rooms[r].name+"\n";
            }
        }
        alert(res);
    }

    printForGroup(group,a){
        var res ="";
        for(var r in this.rooms){
            if(this.rooms[r].seats_count == group.student_count & this.rooms[r].faculty_name == group.faculty_name){
                res+= this.rooms[r].name+"\n";
            }
        }
        alert(res);
    }

    sortForSeatsCount(){
        this.rooms.sort((r1,r2)=>{
            return r1.seats_count - r2.seats_count;
        });
    }
    sortForName(){
        this.rooms.sort((r1,r2)=>{
            if(r1.name > r2.name){
                return 1;
            }
            else{
                return -1;
            }
        });  
    }
}

function statistick(str){
    var res="";
    res+="количество букв: "+str.match(/[a-z]/gi).length+"\n";
    res+="количество цыфр: "+str.match(/[0-9]/gi).length+"\n";
    res+="количество других знаков: "+str.match(/\W{1}/gi).length+"\n";
    alert(res);

}

function numberToStrView(number){
    labels = {1:''}
}

function Replacer(str){
    var s=str;
    for(var i=0;i<str.length;++i){
        if(str[i].toLowerCase() == str[i]){
            //s[i] = str[i].toUpperCase;
            s[i]='1';
        }
    }
    alert(s);
}

function Test() {
    Replacer('aA');
}