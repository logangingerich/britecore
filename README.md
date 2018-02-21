# BriteCore UI Engineer Project

You can visit a live example of this project at: http://logangingerich.com/britecore/

This project was built using HTML, CSS, Bootstrap, Javascript, Vue.JS and VeeValidate (for input validation). 

## Functionality

- Under Field Types, users can search for a type by name (currently available are "Text", "Date", "VIN", "Number", "Currency" and "Select (multiple preset options with a single choice)") and see their options filtered live.
    > Users can also select a type and toggle between their various options.

- Users can enter any string (spaces allowed) into the Display Label. From their input, a Reference name is generated which takes out any spaces and converts the string to camel case.

- Users can enter a string into Custom Validation and see an error when invalid. Custom Validation validates:
	1. That the field is not left blank
	2. That the input is at least 5 characters long
		* These were not the explicit validation rules, but I wanted to demonstrate input validation in some capacity.

- Users can select the "Vinmaster" tag from Tag Groups and see "Make", "Model", and "Year" tags generated under Tags.

- Under Field Groups, users can enter the name of a new group, click "Add New Group" and that group will be added to the list of selectable Field Groups.  As with Field Types, users can select or toggle between Field Group options.

-For demo purposes, the "Save Changes", "Cancel Changes", and "Delete Input" buttons simply clear all input.