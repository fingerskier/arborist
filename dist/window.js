let to = false;
let editor = {}
let export_json = {}
let query = {}

$(function(){
	editor = $('#tree_edit')
	export_json = $('#export_json')
	query = $('#query')

	editor.jstree({
		"core" : {
			"check_callback" : true
		}
		,
		"plugins" : [
			"contextmenu",
			"dnd",
			"massload",
			"search",
			"state",
			"types",
			"wholerow"
		]
	})

	editor.on('changed.jstree', function(event, data){
		console.log(event, data)
	})
	
	// search/filtering
	query.keyup(function () {
		let search_string = query.val()

		if (search_string.length > 1) editor.jstree(true).search(query);
	}

	// JSON exporting
	export_json.click(()=>{
		console.log(editor.jstree().get_json('', {
			no_state: true,
			no_data: true
		}))
	})
})