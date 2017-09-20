/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */
var namesArray = ["Slappy the Frog", "Lilly the Lizard",  "Paulrus the Walrus", "Gregory the Goat", "Adam the Anaconda"];

/*
    * read name => append
    * read days missed from days array => set inputs to match
    * read totals => append
    * event listener on click of input => update days array
*/

(function() {

}());


var model = {
    init: function(days) {
        if (!localStorage.attendance) {
            console.log('Creating attendance records...');

            var namesArray = [
                'Adam the Anaconda',
                'Gregory the Goat',
                'Lilly the Lizard',
                'Paulrus the Walrus',
                'Slappy the Frog'];

            var attendance = {};

            namesArray.forEach(function(name){
                attendance[name] = [];
                for(var i=0; i<days; i++){
                    attendance[name][i] = (Math.random() >= 0.5);
                }
            });


            localStorage.attendance = JSON.stringify(attendance);
        }
        view.init();
    },
    set: function(attendance){
        localStorage.attendance = JSON.stringify(attendance);
    }
};

var controller = {
    init: function(){

    },
    getAttendance: function(){
        return JSON.parse(localStorage.attendance);
    },
    updateArray: function(changedInput, attendance){
        attendance[changedInput] = !attendance[changedInput];
        this.checkAttendance(attendance);
    },
    setDays: function(name, days) {
        var prevDays = controller.getAttendance();
        prevDays[name] = days;
        localStorage.attendance = JSON.stringify(prevDays);
    },
    checkAttendance: function(attendance){
        var missedDays=0;
        attendance.forEach(function(elem){
            if(elem===false){
                missedDays++;
            }
        });
        return missedDays;
    },
    genInputs : function(attendance) {
        attendance.forEach(function(elem){
            if(elem===true){
                missedDays++;
            }
        });
        return missedDays;
    }
};



var view = {
    init: function(){
        console.log("Initializing the view");
        this.students = '';
        this.students = controller.getAttendance();

        view.render();
    },
    render: function() {
        var tbody = document.getElementById('table-body');
        tbody.innerHTML = '';
        console.log("Rendering the view");
        var daysChanged = [];
        $.each(this.students, function(name,days){
            var row = document.createElement('tr');
            var nameCol = document.createElement('td');
            row.classList.add('student');
            nameCol.classList.add('name-col');
            nameCol.innerText = name;
            row.appendChild(nameCol);

            for(var i=0; i<days.length; i++){
                var td = document.createElement('td');
                td.classList.add('attend-col');
                var input = document.createElement('input');
                input.type = "checkbox";

                input.addEventListener('change', function(numCopy){
                    return function(){
                        controller.updateArray(numCopy,days);
                        var daysMissed = controller.checkAttendance(days);
                        controller.setDays(name, days);
                        view.render();
                    };
                }(i));

                if(days[i] === true){
                    input.checked = true;
                }
                td.appendChild(input);
                row.appendChild(td);
            }
            daysChanged.push(days);

            var daysMissed = controller.checkAttendance(days);

            var missedCol = document.createElement('td');
            missedCol.classList.add('missed-col');
            missedCol.innerText = daysMissed;
            row.appendChild(missedCol);
            tbody.appendChild(row);
        });
    }
};
// =====================

model.init(12);
