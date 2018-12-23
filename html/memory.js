document.writeln(`
<div id="myMemory">
				<header>
					<a>内存使用状态</a>
					
				</header>
				<div id="memoryBar">
					<div id="memoryCore" style="width: 50px; height:70px; float:left;" class="tooltip">
						<div style="width: 50px; height: 50px; background-color: pink; float:top;"></div>
						<div style="float:top">
							<a style="float:left;">0</a>
							<a style="float:right;">end</a>
						</div>
						<span class="tooltiptext">内核模块</span>
					</div>
					<div id="memoryBuffer0" style="width: 50px; height:70px; float:left;" class="tooltip">
						<div style="width: 50px; height: 50px; background-color: yellowgreen; float:top;"></div>
						<div style="float:top">
							<a style="float:right;">640K</a>
						</div>
						<span class="tooltiptext">高速缓冲</span>
					</div>
					<div id="videoCardANDBios" style="width: 50px; height:70px; float:left;" class="tooltip">
						<div style="width: 50px; height: 50px; background-color: deepskyblue; float:top;"></div>
						<div style="float:top">
							<a style="float:right;">1M</a>
						</div>
						<span class="tooltiptext">显存和BIOS ROM</span>
					</div>
					<div id="memoryBuffer1" style="width: 50px; height:70px; float:left;" class="tooltip">
						<div style="width: 50px; height: 50px; background-color: yellowgreen; float:top;"></div>
						<div style="float:top">
							<a style="float:right;">4M</a>
						</div>
						<span class="tooltiptext">高速缓冲</span>
					</div>
					<div id="memoryVdisk" style="width: 50px; height:70px; float:left;" class="tooltip">
						<div style="width: 50px; height: 50px; background-color: purple; float:top;"></div>
						<div style="float:top">
							<a style="float:right;">4.5M</a>
						</div>
						<span class="tooltiptext">虚拟盘</span>
					</div>
					<div id="memoryMain" style="width: 148px; height:70px; float:left;" class="tooltip">
						<div style="width: 148px; height: 50px; background-color: yellow; float:top;"></div>
						<div style="float:top">
							<a style="float:right;">16M</a>
						</div>
						<span class="tooltiptext">主内存区</span>
					</div>
				</div>
			</div>
    `);