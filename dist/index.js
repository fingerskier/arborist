let to = false;
let editor = {}
let export_json = {}

$(function(){
	editor = $('#tree_edit')
	export_json = $('#export_json')

	editor.jstree({
		"core" : {
			"check_callback" : true
		}
		,
		"plugins" : [
			"contextmenu",
			"dnd",
			"massload",
			"state",
			"types",
			"wholerow"
		]
	})

	editor.on('changed.jstree', function(event, data){
		console.log(event, data)
	})
	
	// JSON exporting
	export_json.click(()=>{
		console.log(editor.jstree().get_json('', {
			no_state: true,
			no_data: true
		}))
	})
})