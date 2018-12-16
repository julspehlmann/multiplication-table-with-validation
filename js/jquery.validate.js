/*
Julia Spehlmann, UMass Lowell Computer Science, julia_spehlmann@student.uml.edu
COMP 4610 GUI Programming I
Assignment 7: Using the jQuery Validation Plugin with Your Dynamic Table
Copyright (c) 2018 by Julia Spehlmann. All rights reserved.
Updated by JS on December 16, 2018 at 3:00 PM
File: jquery.validate.js
Description: Validations for multiplication table submit form
*/

//validates all fields are inputted and sends appropriate error message
//validates second input is >= first input
//validates range stays within 1000
//validates min and max of -1000 and 1000
$(document).ready(function() {
  $("form").validate({
    rules: {
      firstStart:{
          required: true,
          min: -1000,
          max: 1000,
      },
      firstEnd: {
        required: true,
        greaterThanOrEqualTo:"#multiplier-start",
        min: -1000,
        max: 1000,
      },
      secondStart:{
        required: true,
        min: -1000,
        max: 1000,
      },
      secondEnd: {
        required: true,
        greaterThanOrEqualTo:"#multiplicand-start",
        min: -1000,
        max: 1000,
      },
    },
    messages: {
      firstStart: {
        required: "Please enter a multiplier start",
        min: "Number must be greater than -1000",
        max: "Number must be less than 1000",
      },
      firstEnd: {
        required: "Please enter a multiplier end",
        greaterThanOrEqualTo: "Multiplier end must be greater than or equal to multiplier start",
        min: "Number must be greater than -1000",
        max: "Number must be less than 1000",
      },
      secondStart: {
        required: "Please enter a multiplcand start",
        min: "Number must be greater than -1000",
        max: "Number must be less than 1000",
      },
      secondEnd: {
        required:"Please enter a multiplicand end",
        greaterThanOrEqualTo: "Multiplicand end must be greater than or equal to multiplicand start",
        min: "Number must be greater than -1000",
        max: "Number must be less than 1000",
      },
    },
  });
})

//custom method for checking if second input is greater than first for multiplier and multiplicand
//taken and modified from https://stackoverflow.com/questions/29451507/how-to-use-jquery-validator-to-determine-value-of-one-field-is-greater-than-anot
$.validator.addMethod("greaterThanOrEqualTo",
    function (value, element, param) {
          var $otherElement = $(param);
          return parseInt(value, 10) >= parseInt($otherElement.val(), 10);
    });
