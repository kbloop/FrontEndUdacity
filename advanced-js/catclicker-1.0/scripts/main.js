window.onload = function() {
    var catDispElem = document.getElementById('cat-display');
    var catListElem = document.getElementById('cat-holder');
    // Cat object
    var Cat = function(src, name) {
        this.src = src;
        this.name = name;
        this.count = 0;
        this.elemHeader = document.createElement('header');
        this.elemCounter = document.createElement('h3');
        this.elemImg = document.createElement("img");
        this.elemListNode = document.createElement("li");
        // updates the counter value
        this.click = function(){
            this.count++;
            this.elemCounter.innerHTML = this.count;
            console.log(this.count)
        }
        // renders the html to screen
        this.render = function() {
            this.elemCounter.innerHTML = this.count;
            this.elemCounter.id = name+"-count";
            this.elemImg.id = name+"-image"
            this.elemImg.src = src;
            this.elemHeader.append(this.elemCounter);
            this.elemListNode.append(this.name);
            this.elemListNode.classList.add('list-node');

            // Don't append the cats to the display area immediately
            // catDispElem.append(this.elemHeader);
            // catDispElem.appendChild(this.elemImg);

            catListElem.appendChild(this.elemListNode);

        }
        this.display = function() {
                catDispElem.innerHTML = " ";
                catDispElem.append(this.elemHeader);
                catDispElem.appendChild(this.elemImg);
                console.log(this.elemImg);
                // catDispElem.prepend(catArray[i].name);
                // catDispElem.prepend(catArray[i].count);
        };
    };

    var namesArray = ["Pupper", "Fluffer", "Jo", "Spike", "Phteven"];
    var srcArray  = [
        "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
        "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3M1RhqKMXKPgoIE6pksQrJ74NjU1_DURtqrdXedhhO0CKeLN",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbpweYyc1mQOwkCQYsUmWUeRAo00tmYNzx7RfCynUzJhBEZb-",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pnbX2ymlHMB0338HBDcg3hrWKiWlNwIQ81WmhKoolgkqD5Uofw"
    ]
    var catArray = [];

    for(var i = 0; i< namesArray.length; i++) {
        var num = i+1;
        // Use "let" to avoid the Kitten obj being hoisted & overwritten each time
        let Kitten = new Cat(srcArray[i],namesArray[i]);
        Kitten.render();

        Kitten.elemImg.addEventListener('click', (function(numCopy) {
            return function() {
                Kitten.click(numCopy);
            };
        })(num));

        Kitten.elemListNode.addEventListener('click', (function(numCopy) {
            return function() {
                Kitten.display();
            }
        })(num));
        catArray.push(Kitten);
    }

};
