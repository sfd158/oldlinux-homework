document.writeln(`
<svg width="300" height="600" id="chrDrvSvg">
        <text style="cursor: move;"    font-size="20" y="445.908369" x="25.301435">终端显示器</text>
        <text font-size="20" y="447.11318" x="165.060213">终端键盘</text>
        <rect id="localMonitor" height="33.734857" width="116.867259" y="421.812025" x="19.277342"   fill="none"/>
        <rect id="localKeyboard" height="34.93968" width="102.409452" y="420" x="157.831307"   fill="none"/>
        <rect height="109.638352" width="286.746454" y="20.607934" x="7"   fill="none"/>
        <rect height="28.915607" width="203.614097" y="25.427213" x="15.662894"   fill="none"/>
        <text font-size="20" y="48.31873" x="16.867712">系统调用</text>
        <text font-size="20" y="48.318739" x="97.590459">read</text>
        <text font-size="20" y="47.113921" x="153.01204">write</text>
        <rect id="localCharDrvIntf" height="27.710793" width="199.999624" y="73.619896" x="20.482172"   fill="#EDFFFF"/>
        <text font-size="18" y="70.005444" x="114.457896">read_write.c</text>
        <text font-size="22" y="45" x="270">文</text>
        <text font-size="22" y="70" x="270">件</text>
        <text font-size="22" y="95" x="269.879293">系</text>
        <text font-size="22" y="120" x="270">统</text>
        <text font-size="18" y="119.402943" x="132.530153"    >char_dev.c</text>
        <rect id="localSecondary" height="24.096343" width="121.686523" y="167.194014" x="107.228995"  fill="#84D3DB"/>
        <text style="cursor: move;" font-size="18" y="157.555481" x="144.578323">tty_read()</text>
        <line stroke-linecap="null" stroke-linejoin="null" y2="164.784384" x2="121.686799" y1="102.133896" x1="121.686799" fill="none"/>
        <rect id="localwrite_queue" height="27.710798" width="106.023903" y="322.615414" x="39.75924"  fill="#84D3DB"/>
        <rect id="localread_queue" height="26.505979" width="133.734688" y="231" x="120.481987"   fill="#84D3DB"/>
        <rect height="24.096341" width="102.40945" y="166.999998" x="119.277165"  fill="#7DD8B5"/>
        <rect height="26.505975" width="86.746828" y="323.000002" x="51.80741" fill="#7DD8B5"/>
        <rect height="27" width="101.204632" y="231.000002" x="134.939785"  fill="#7DD8B5"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="228.639687" x2="134.939787" y1="192.495176" x1="134.939787" fill="none"/>
        <text font-size="18" y="204.543334" x="140.963866">copy_to_</text>
        <text font-size="18" y="181.651817" x="13.253267">tty_</text>
        <text font-size="18" y="204.543325" x="13.253261">write()</text>
        <text font-size="20" y="373.217736" x="59.036312">con_</text>
        <text font-size="20" y="392.494808" x="60.241128">write()</text>
        <line stroke-linecap="null" stroke-linejoin="null" y2="420.205601" x2="53.012227" y1="351.531028" x1="54.217044" fill="none"/>
        <text font-size="20" y="286.470898" x="121.686793">回显</text>
        <text font-size="20" y="308.157608" x="124.096431">echo</text>
        <line stroke-linecap="null" stroke-linejoin="null" y2="321.410601" x2="90.361556" y1="100.929079" x1="89.156739" fill="none"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="321.410606" x2="106.024182" y1="259.964934" x1="124.096438" fill="none"/>
        <text font-size="18" y="222.615591" x="142.168689"    >cooked()</text>
        <line stroke-linecap="null" stroke-linejoin="null" y2="420" x2="187.951738" y1="258.760114" x1="189.156555" fill="none"/>
        <text style="cursor: move;"    font-size="18" y="341.892484" x="195.180638">put_</text>
        <line stroke-linecap="null" stroke-linejoin="null" y2="73.218286" x2="93.024086" y1="52.736396" x1="92.77118" fill="none"/>
        <text font-size="18" y="363.579192" x="192.771004"    >queue()</text>
        <rect id="localCharDrv" height="267.469388" width="287" y="137.073596" x="7.229187" fill="none"/>
        <rect height="71.084206" width="287" y="415.386328" x="7"   fill="none"/>
        <rect stroke-dasharray="5,5" id="localtty_write" height="46.987864" width="73.493839" y="167.194008" x="12.048447" fill="none"/>
        <rect id="localcon_write" height="39.758963" width="93.97573" y="356.35029" x="57.831495"  stroke-dasharray="5,5" fill="none"/>
        <rect id="localput_queue" height="46.987865" width="78.313109" y="326.229865" x="192.771005"  stroke-dasharray="5,5" fill="none"/>
        <rect id="localtty_read" height="18.07221" width="110.843172" y="143.097791" x="142.168689"  stroke-dasharray="5,5" fill="none"/>
        <rect id="localcopy_to_cooked" height="33.734886" width="91.566101" y="192.495181" x="142.168688"  stroke-dasharray="5,5" fill="none"/>
        <rect id="localreadcall" height="22.891514" width="49.3975" y="28.640034" x="98.795273"  stroke-dasharray="5,5"  fill="none"/>
        <rect id="localwritecall" height="24.09634" width="61.445668" y="28.640065" x="153.012041" stroke-dasharray="5,5" fill="none"/>
        <text font-size="20" y="245" x="14">字</text>
        <text font-size="20" y="265" x="14">符</text>
        <text font-size="20" y="285" x="14">设</text>
        <text font-size="20" y="305" x="14">备</text>
        <text font-size="20" y="325" x="14">驱</text>
        <text font-size="20" y="345" x="14">动</text>
        <text font-size="20" y="365" x="14">程</text>
        <text font-size="20" y="385" x="14">序</text>
        <text font-size="20" y="480.446453" x="120.481981">控制台终端设备</text>
        <text font-size="16" y="515.386148" x="12">备注: con_write()在console.c中</text>
        <text font-size="16" y="535" x="12">put_queue()在kb.s中</text>
        <text font-size="16" y="555" x="12">copy_to_cooked(),tty_read(),</text>
        <text font-size="16" y="575" x="12">tty_write()在tty_io.c中</text>
        <rect stroke-dasharray="5,5" id="localecho" height="46.987865" width="54.216768" y="268.398651" x="121.686799" fill="none"/>
        <text font-size="18" y="250.326395" x="151.807226">read_q</text>
        <text font-size="18" y="184.061456" x="124.096432">secondary</text>
        <text font-size="18" y="341.892492" x="60.241129">write_q</text>
        <text font-size="20" y="96.109811" x="60.241131">字符设备接口</text>
    </svg>
    `);