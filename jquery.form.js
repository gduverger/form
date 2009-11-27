/*
 * Form - jQuery plugin
 * jQuery plugin for in-line editing (save, edit, and cancel)
 * Author: Georges Duverger
 */

// Methods attached to the jQuery.fn object

// Save a field
// ex.: $("input#example").save()

jQuery.fn.save = function() {
	return this.each(function(){
		var value;
		
		// Recover the saved element
		var element = $(".value[data-for='"+$(this).attr("id")+"']");
		
		// Determine which type of input we're trying to save
		if($(this).is("input[type=text], select")) {
			value = $(this).hide().val();
		} else if($(this).is("input[type=checkbox], input[type=radio]")) {
			// TODO Make the default false value customizable
			value = $(this).hide().is(":checked") ? $(this).val() : "-";
		} else {
			// TODO Throw more informative errors
			throw "Can't save "+this;
		}
		
		// Display the saved value
		if(element.length != 0) {
			// Insert the value into the "saved element" and show it
			$(element).text(value).show();
		} else {
			// If not existing, create a "saved element" with the correct value
			$(this).hide().after("<span class='value' data-for='"+$(this).attr("id")+"'>"+value+"</span>");
		}
	});
};

// Switch to edit mode
// ex.: $("input#example").edit()

jQuery.fn.edit = function() {
	return this.each(function(){
		$(".value[data-for='"+$(this).show().attr("id")+"']").hide();
	});
};


// Cancel the current edition
// ex.: $("input#example").cancel()

jQuery.fn.cancel = function() {
	return this.each(function(){
		if($(this).is("input[type=text], select")) {
			// For input and select
			$(this).hide().val($(".value[data-for='"+$(this).attr("id")+"']").show().text());
		} else if($(this).is("input[type=checkbox], input[type=radio]")) {
			// For checkbox and radio
			$(this).hide().attr("checked", ($(".value[data-for='"+$(this).attr("id")+"']").show().text() == $(this).val()));
		} else { throw "Can't save"+this; }
	});
};