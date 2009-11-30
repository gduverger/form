Form
====

Allows you to save, edit, and cancel the edition of inputs.

Supported inputs (so far): `input[type=text]`, `input[type=checkbox]`, and `select`.

Save
----

	$("input#example").save()
	
The command above appends the following code after the input (`#example`).

	<span class="value" data-for="example">…</span>
	
It will then **show that *saved* element** (`span`) and **hide the initial input** (`#example`).

Edit
----

	$("input#example").save()
	
The command above does the opposite of `save()` — it will **hide the *saved* element** and **show the initial input** (`#example`).

Cancel
------

	$("input#example").cancel()
	
The command above not only **hide the initial input** and **show the *saved* element** but it will also **restore the *saved* value** from its last saved state.