var app = new Vue({
    el: '#app',
    data: {
        label: "",
        executed: false,
        search: "",
        selectedType: undefined,
        selectedGroup: undefined,
        newGroup: "",
        newBadge: "",
        defaultValue: "",
        customVal: "",
        types: [
            {name: "Text", definition: "String of Text", default: "Free-form text input"},
            {name: "Date", definition: "Standard ISO format date", default: "Datepicker, with configurable format"},
            {name: "VIN", definition: "Vehicle Identification Number", default: "Free-form text input"},
            {name: "Number", definition: "Numerical quantity", default: "Free-form numerical input"},
            {name: "Currency", definition: "Form of money", default: "Free-form numerial input"}
        ],
        groups: [
            {name: "Rental Vehicale Coverage Package"}
        ],
        tagGroups: [
            {name: "Vinmaster"},
        ],
        individualTags: [
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
    },
    methods: {
        addNewGroup: function () {
            this.groups.push({
                name: this.newGroup
            })
            this.newGroup = ""
        },
        addNewTag: function () {
            if (!this.executed) {
                this.individualTags.push({
                    name: "Make",
                })
                this.individualTags.push({
                    name: "Model",
                })
                this.individualTags.push({
                    name: "Year",
                })
            }
            this.executed = true;
        },
        clearAll: function () {
            this.label = "";
            this.search = "";
            this.defaultValue = "";
            this.customVal = "";
            this.newGroup = "";
            this.individualTags = [];
            this.selectedType = undefined;
            this.selectedGroup = undefined;
        }
    }
});
