var app = new Vue({
    el: '#app',
    data: {
        label: "",
        search: "",
        newGroup: "",
        types: [
            {name: "Text", definition: "String of Text", default: "Free-form text input"},
            {name: "Date", definition: "Standard ISO format date", default: "Datepicker, with configurable format"},
            {name: "VIN", definition: "Vehicle Identification Number", default: "Free-form text input"},
            {name: "Number", definition: "Numerical quantity", default: "Free-form numerical input"},
            {name: "Currency", definition: "Form of money", default: "Free-form numerial input"}
        ],
        groups: [
            {name: "Rental Vehicale Coverage Package"}
        ]
    },
    computed: {
        noSpaces: function () {
            return this.label.replace(/\W+(.)/g, function(match, chr){
                return chr.toUpperCase();
            });
        },
        filteredList: function () {
          return this.types.filter(type => {
            return type.name.toLowerCase().includes(this.search.toLowerCase())
          })
        },
        addNewGroup: function () {
            this.groups.push({
                name: this.newGroup
            })
            this.newGroup = ''
        }
    }
});
