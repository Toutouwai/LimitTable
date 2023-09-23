function checkTable(role_class, inputfield_class, limit, show_all_rows) {
	var $table_rows = $('body' + role_class + ' ' + inputfield_class + ' table:not(.InputfieldTableNested) > tbody > tr').not('.InputfieldTableRowTemplate');
	var $add_button = $('body' + role_class + ' ' + inputfield_class + ' .InputfieldTableAddRow');
	var count = $table_rows.length;
	if(count >= limit) {
		$add_button.addClass('button-hide');
	} else {
		$add_button.removeClass('button-hide');
		if(show_all_rows) {
			var difference = limit - count;
			for(var i = 0; i < difference; i++) {
				$add_button.trigger('click');
			}
			$add_button.addClass('button-hide');
		}
	}
}
