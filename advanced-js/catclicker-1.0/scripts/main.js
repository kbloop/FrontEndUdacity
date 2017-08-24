window.onload = function() {

    // Cat object
    var Cat = function(src, name) {
        this.src = src;
        this.name = name;
        this.catElem = document.getElementById(name+"-image");
        this.count = 0;
        this.countElem = document.getElementById(name+"-count");
        this.click = function(){
            this.count++;
            this.countElem.innerHTML = this.count;
            console.log(this.count)
        }
    };

    var Pop = new Cat("https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426", 'pop');
    Pop.catElem.addEventListener('click', function(){
        Pop.click();
    });

    var Mittens = new Cat("https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496", "mittens");
    Mittens.catElem.addEventListener('click', function(){
        Mittens.click()
    });

};
