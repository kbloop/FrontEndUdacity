
    // Model
    var model = {
        currentCat: null,
        add: function(Cat) {
            var catData = JSON.parse(cats);
            catData.push(Cat);
            cats = JSON.stringify(catData);
        },
        cats: [
             {
                name: "Pupper",
                count: 0,
                imgSrc: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
            },
             {
                name: "Fluffer",
                count: 0,
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3M1RhqKMXKPgoIE6pksQrJ74NjU1_DURtqrdXedhhO0CKeLN",
            },
             {
                name: "Jo",
                count: 0,
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbpweYyc1mQOwkCQYsUmWUeRAo00tmYNzx7RfCynUzJhBEZb-",
            },
             {
                name: "Spike",
                count: 0,
                imgSrc: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
            },
             {
                name: "Phteven",
                count: 0,
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pnbX2ymlHMB0338HBDcg3hrWKiWlNwIQ81WmhKoolgkqD5Uofw",
            }
        ]
    };

    // Controller
    var controller = {
        setCat : function(Cat) {
            model.currentCat = Cat;
        },
        getCat: function() {
            return model.currentCat;
        },
        addNewCat : function(src, name){
            model.add(
                // Cat Object being passed to the model
                {
                    "src" : src,
                    "name" : name,
                    "count" : 0,
                });
        },
        getCats : function() {
            return model.cats;
        },
        increment: function() {
            model.currentCat.count++;
            catView.render();
        },
        init: function() {
            model.currentCat = model.cats[0];

            catView.init();
            catListView.init();
        }
    };

    // View

    var catView = {
        // Initialize the page with correct cat imgs/data & renders the view.
        init: function() {
            this.catElem =  document.getElementById('cat-holder');
            this.catNameElem =  document.getElementById('cat-name');
            this.catCountElem =  document.getElementById('cat-count');
            this.catImgElem =  document.getElementById('cat-img');

            this.catImgElem.addEventListener('click', function(e){
                controller.increment();
            });

            this.render();
        },

        // Render the page after data updates from init/controller
        render: function() {
            var currentCat = controller.getCat();
            this.catCountElem.textContent = currentCat.count;
            this.catNameElem.textContent = currentCat.name;
            this.catImgElem.src = currentCat.imgSrc;
        }
    };

    var catListView = {
        init: function() {
            this.catListElem = document.getElementById('cat-holder');

            this.render();
        },
        render: function() {
            var cats = controller.getCats();

            // clear the catlist
            this.catListElem.html = '';

            // loop over all the cats
            for(var i=0; i<cats.length; i++){
                var cat = cats[i];

                var listElem = document.createElement('li');
                listElem.textContent = cat.name;

                listElem.addEventListener('click', (function(catCopy){
                    return function(){
                        controller.setCat(catCopy);
                        catView.render();
                    };
                })(cat));

                this.catListElem.appendChild(listElem);
            }
        }
    };

controller.init();