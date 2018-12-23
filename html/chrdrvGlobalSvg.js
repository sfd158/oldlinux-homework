document.writeln(`
<svg id="globalsvg" width="600" height="600" style=" ">
        <rect id="globalHardware" height="32" width="494" y="453.139484" x="12.774119" fill="#FFB27C"/>
        <rect id="globalHardwareCtrl" height="29" width="490" y="396.886425" x="14.183766"  fill="#CE7975"/>
        <rect id="globalDeviceCtrl" height="70" width="190" y="309.219756" x="22.228943"   fill="#9ACEE6"/>
        <rect id="globalFileSystem" height="70.40965" width="190" y="215.605284" x="22.340352" fill="#CBFFFF"/>
        <rect id="globalProcessCtrl" height="167" width="245" y="217.219756" x="248.978943" fill="#FFAAB8"/>
        <rect id="globalSystemCallIntf" height="34" width="490" y="163.219756" x="9.978943" fill="#FFAFCC"/>
        <rect id="globalFuncLib" height="35" width="203.615219" y="97.715097" x="271.686632" fill="#DDDDDD"/>
        <rect id="globalUserProg" height="35" width="180.723567" y="44.702851" x="163.252492" fill="#A4FFFF"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="144.703224" x2="557.024119" y1="147.112871" x1="10.024119"    fill="none"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="436.270579" x2="557" y1="433.860931" x1="10" fill="none"/>
        <rect id="globalManageProg" height="39.759185" width="121.6872" y="282.469756" x="356.048238" fill="none"/>
        <rect id="globalProcessCommunicate" height="39.759185" width="120.482375" y="225.469756" x="356.228943" fill="none"/>
        <rect id="globalMemoryManage" height="38.554361" width="119.277563" y="341.892712" x="358.433937" fill="#B9FFCE"/>
        <text style="cursor: move;" font-size="20" y="478.037803" x="217.469562">硬件</text>
        <text font-size="20" y="421.411084" x="200.602028">硬件控制</text>
        <text font-size="24" y="520.206637" x="506.204823">硬件级</text>
        <text font-size="24" y="412.977322" x="517.470684">内核级</text>
        <text font-size="24" y="128.638897" x="510.241748">用户级</text>
        <rect id="globalBuffer" height="32.530242" width="103.61485" y="250.326104" x="105.420946"   fill="#EEFF9F"/>
        <text font-size="20" y="275.627408" x="117.469189">高速缓冲</text>
        <text style="cursor: move;" font-size="20" y="245.506814" x="42.770113">文件子系统</text>
        <text font-size="22" y="186.470461" x="186.144143">系统调用接口</text>
        <rect id="globalCharDrv" height="31.325498" width="85" y="312.615514" x="29.517057"   fill="none"/>
        <rect id="globalBlockDrv" height="30" width="85" y="314.181768" x="121.083659"   fill="none"/>
        <text font-size="22" y="333.458951" x="28.312226">字符设备</text>
        <text font-size="22" y="334.663774" x="133.131897">块设备</text>
        <text font-size="22" y="370.808494" x="53.613528">设备驱动程序</text>
        <text font-size="22" y="367.194012" x="374.096658">内存管理</text>
        <text font-size="22" y="309.362475" x="375.301472">调度程序</text>
        <text font-size="22" y="253.940584" x="362.04841">进程间通信</text>
        <text font-size="22" y="121.409975" x="345.180888">函数库</text>
        <text font-size="22" y="69.602531" x="211.445443">用户程序</text>
        <line stroke-linecap="null" stroke-linejoin="null" y2="217.469756" x2="116.264364" y1="197.469756" x1="116.264364" fill="none"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="310.567299" x2="62.047294" y1="285.265999" x1="62.047294" fill="none"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="309.362475" x2="163.252492" y1="282.856352" x1="163.252492" fill="none"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="397.314611" x2="119.878836" y1="378.03743" x1="119.878836"    fill="none"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="238.277872" x2="247.228943" y1="238.277872" x1="211.445443"    fill="none"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="220.205515" x2="370.482182" y1="197.313863" x1="370.482182"    fill="none"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="397.469756" x2="310.240993" y1="382.469756" x1="310.240993"    fill="none"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="397.314611" x2="418.675133" y1="379.242254" x1="418.675133"    fill="none"/>
        <rect height="25.301298" width="13.253062" y="426.23038" x="228.312976"   fill="#729C62"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="164.27718" x2="209" y1="79.27718" x1="209.035786"    fill="none"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="96.911883" x2="310.240984" y1="77.634702" x1="310.240984"    fill="none"/>
        <line stroke-linecap="null" stroke-linejoin="null" y2="164.382014" x2="369.277349" y1="134.27718" x1="369.277349"    fill="none"/>
        <text font-size="22" y="283.659572" x="258.433563"    >进程控制</text>
        <text font-size="22" y="310.165706" x="269.276977"    >子系统</text>
    </svg>
`);