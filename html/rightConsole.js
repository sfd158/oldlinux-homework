document.writeln(`
<div id="myScreenWindow" class="myRightWindow">
				<header id="myScreenWindowHeader">
					<img class="myIcon" src="img/console.png" alt="Con"/>
					Console Output
					<div class="myRightMenu">
						<a onclick="$('textarea#myScreenWindowOutput').html('');">清空</a>
						<a>输出</a>
					</div>
				</header>
				<textarea id="myScreenWindowOutput" spellcheck="false">
				</textarea>
			</div>
    `);

$.ajax({url:"initConsole.txt", "dataType":"text",success:function(txt)
    {
        $("textarea#myScreenWindowOutput").html(txt);
    }});