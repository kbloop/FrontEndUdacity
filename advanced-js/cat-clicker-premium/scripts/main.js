window.onload = function() {

    // Cat object constructor
    var Cat = function(src, name) {
        this.src = src;
        this.name = name;
        this.count = 0;
    };

    var model = {
        currentCat: null,
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

    var controller = {
        init: function() {
            model.currentCat = model.cats[0];

            view.list.init();
            view.display.init();
            view.admin.init();
        },
        getCat: function() {
            return model.currentCat;
        },
        getAllCats: function() {
            return model.cats;
        },
        setCat: function(Cat) {
            model.currentCat = Cat;
            view.display.render();
        },
        click: function() {
            model.currentCat.count++;
            view.display.render();
        },
        admCancel: function() {
            view.admin.admin = false;
            view.admin.render();
        },
        admToggle: function() {
            view.admin.admin = !view.admin.admin;
            view.admin.render();
        },
        admSave: function(name, count, src) {
            model.currentCat.name = name;
            model.currentCat.imgSrc = src;
            model.currentCat.count = count;
            view.admin.admin = false;

            view.list.render();
            view.display.render();
            view.admin.render();
        }
    };

    var view = {
        display: {
            init: function() {
                this.countElem = document.getElementById('cat-count');
                this.nameElem = document.getElementById('cat-name');
                this.imgElem = document.getElementById('cat-img');
                this.imgElem.addEventListener('click', function(){
                    controller.click();
                });
                // render the view
                view.display.render();
            },
            render: function() {
                curCat = controller.getCat();
                this.countElem.textContent = curCat.count;
                this.nameElem.textContent = curCat.name;
                this.imgElem.src = curCat.imgSrc;
            }
        },
        list: {
            init: function() {
                this.listElem = document.getElementById('cat-list');

                // render the view
                view.list.render();
            },
            render: function() {
                this.listElem.innerHTML = '';
                var cats = controller.getAllCats();

                for(var i =0; i<cats.length; i++){
                    var cat = cats[i];
                    var elem = document.createElement('li');
                    elem.textContent = cat.name;
                    elem.addEventListener('click', (function(catCopy) {
                        return function() {
                            controller.setCat(catCopy);
                        };
                    })(cat));

                    this.listElem.append(elem);
                }

            }
        },
        admin: {
            init: function() {
                this.admin = false;
                this.adminElem = document.getElementById("admin");
                this.adminBtn = document.getElementById("admin-btn");
                this.nameElem = document.getElementById("inp-name");
                this.countElem = document.getElementById("inp-count");
                this.srcElem = document.getElementById("inp-src");

                this.cancelBtn = document.getElementById('cancel-btn');
                this.saveBtn = document.getElementById('save-btn');

                this.cancelBtn.addEventListener('click', function() {
                    controller.admCancel();
                });
                this.adminBtn.addEventListener('click', function() {
                    controller.admToggle();
                });

                this.saveBtn.addEventListener('click', function(nameElem, countElem, srcElem) {
                    return function() {
                        controller.admSave(nameElem.value, countElem.value, srcElem.value);
                    };
                }(this.nameElem, this.countElem, this.srcElem));

                view.admin.render();
            },
            render: function() {
                if(this.admin===true){
                    this.adminElem.classList.remove('hidden');
                    var cat = controller.getCat();

                    this.nameElem.placeholder = cat.name;
                    this.countElem.placeholder = cat.count;
                    this.srcElem.placeholder = cat.src;

                    this.nameElem.value = cat.name;
                    this.countElem.value = cat.count;
                    this.srcElem.value = cat.imgSrc;
                }
                else{
                    view.admin.adminElem.classList.add('hidden');
                }

            }
        }
    };
    controller.init();
};