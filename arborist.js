$(()=>{
	var data_url = 'https://raw.githubusercontent.com/doulos-software/translogos/master/json/test.json'
	var result = {}
	var stuff = $('div#stuff')

	$.getJSON(data_url)
	.then((data)=>{
		stuff.append(tree(data))

		stuff.find('ul').children().hide()

		$('ul').parent().click(()=>{
			$(this).toggle();
		})
	})
})

function tree(data) {
	var result = ''

    if (typeof(data) == 'object') {
        result += '<ul>';

        for (var i in data) {
            result += `<li><label>${i}</label>`;

            tree(data[i]);            
        }

        result += '</ul>';
    } else {
        result += data;
    }

    return result
}