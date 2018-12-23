document.writeln(`
<div id="myScreenWindow" class="myRightWindow">
				<header id="myScreenWindowHeader">
					<img class="myIcon" src="img/console.png" alt="Con"/>
					Console Output
				</header>
				<textarea id="myScreenWindowOutput" spellcheck="false" readonly="readonly" style="font-size:10px; resize: horizontal;">
				</textarea>
			</div>
    `);

$.ajax({url:"initConsole.txt", "dataType":"text",success:function(txt)
    {
        $("textarea#myScreenWindowOutput").html(txt);
    }});