var cats = [
    {
        count: 0,
        name: "tabby",
        src: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=",
        attrib: "https://unsplash.com/search/photos/cat?photo=xulIYVIbYIc",
        nickNames: ['boop', 'leftboob', 'wop', 'gucci', 'hash']
    },
    {
        count: 0,
        name: "Jame",
        src: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=",
        attrib: "https://unsplash.com/search/photos/cat?photo=xulIYVIbYIc",
        nickNames: ['boop', 'leftboob', 'wop', 'gucci', 'hash']
    },
    {
        count: 0,
        name: "Phonte",
        src: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=",
        attrib: "https://unsplash.com/search/photos/cat?photo=xulIYVIbYIc",
        nickNames: ['boop', 'leftboob', 'wop', 'gucci', 'hash']
    },
    {
        count: 0,
        name: "ploon",
        src: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=",
        attrib: "https://unsplash.com/search/photos/cat?photo=xulIYVIbYIc",
        nickNames: ['boop', 'leftboob', 'wop', 'gucci', 'hash']
    },
    {
        count: 0,
        name: "cat",
        src: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=",
        attrib: "https://unsplash.com/search/photos/cat?photo=xulIYVIbYIc",
        nickNames: ['boop', 'leftboob', 'wop', 'gucci', 'hash']
    }
];

// Cat Object
var Cat = function(data) {
    this.name = ko.observable(data.name);
    this.src = ko.observable(data.src);
    this.attrib = ko.observable(data.attrib);
    this.count = ko.observable(data.count);
    this.level = ko.observable('mits');
    this.nickNames = ko.observableArray(['boop', 'leftboob', 'wop', 'gucci', 'hash']);

    this.changeLevel = ko.computed(function(){
        if(this.count() >= 10) {
            return this.level('Booper');
        }
    }, this);
};

// Make cats show in list

// Function to set cur cat onClick


// ViewModel is being rendered on the view
var ViewModel = function (){
    var self = this;

    this.catList = ko.observableArray([]);

    cats.forEach(function(catData){
        self.catList.push(new Cat(catData));
    });

    this.currentCat = ko.observable(this.catList()[0]);
    // "This" is the binding context calling upon the function
    this.incrementCount = function() {
        // Count++
        this.count(this.count()+1);
    };

    self.setCurrent = function(cat) {
        // self.catList.remove(cat);
        self.currentCat(cat);
    };
};

ko.applyBindings(new ViewModel());