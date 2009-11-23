/*
 * Form - jQuery plugin
 * Author: Georges Duverger
 */

// Methods attached to the jQuery.fn object

jQuery.fn.save = function() {
	return this.each(function(){
		var value;
		var element = $(".value[data-for='"+$(this).attr("id")+"']");
		// Get the value (and hide the input)
		if($(this).is("input[type=text], select")) {
			value = $(this).hide().val(); // input, select
		} else if($(this).is("input[type=checkbox], input[type=radio]")) {
			value = $(this).hide().is(":checked") ? $(this).val() : "-"; // checkbox, radio
		} else { throw "Can't save "+this; }
		// Save the value
		if(element.length != 0) { $(element).text(value).show() }
		else { $(this).hide().after("<span class='value' data-for='"+$(this).attr("id")+"'>"+value+"</span>") }
	});
};

jQuery.fn.edit = function() {
	return this.each(function(){
		$(".value[data-for='"+$(this).show().attr("id")+"']").hide();
	});
};

jQuery.fn.cancel = function() {
	return this.each(function(){
		if($(this).is("input[type=text], select")) {
			$(this).hide().val($(".value[data-for='"+$(this).attr("id")+"']").show().text()); // input, select
		} else if($(this).is("input[type=checkbox], input[type=radio]")) {
			$(this).hide().attr("checked", ($(".value[data-for='"+$(this).attr("id")+"']").show().text() == $(this).val())); // checkbox, radio
		} else { throw "Can't save"+this; }
	});
};