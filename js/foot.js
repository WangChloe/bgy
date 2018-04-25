// <div class="container-fluid footer">
//     <div class="wrap">
//         <div class="container text-center link-tab">
//             |<a href="index.html">网站首页</a>|
//             <a href="profile.html">公司简介</a>|
//             <a href="project_1.html">房源展示</a>|
//             <a href="contact.html">联系我们</a>|
//         </div>
//         <div class="container text-center copyright">
//             <span>版权所有© </span>
//             <span>
//                 <strong>
//                     <span>上海xxx有限公司</span>
//                 </strong>
//             </span>
//             <span>备案号：</span>
//             <a href="http://www.miitbeian.gov.cn/" target="_blank">
//                 <span>沪ICP备xxxx</span>
//             </a>
//         </div>
//     </div>
// </div>

(function() {

    function setup() {
        bindWriteFoot();
    }

    function bindWriteFoot() {
        document.writeln("<div class=\'container-fluid footer\'>");
        document.writeln("    <div class=\'wrap\'>");
        document.writeln("        <div class=\'container text-center link-tab\'>");
        document.writeln("            |<a href=\'index.html\'>网站首页</a>|");
        document.writeln("            <a href=\'profile.html\'>公司简介</a>|");
        document.writeln("            <a href=\'project_1.html\'>房源展示</a>|");
        document.writeln("            <a href=\'contact.html\'>联系我们</a>|");
        document.writeln("        </div>");
        document.writeln("        <div class=\'container text-center copyright\'>");
        document.writeln("            <span>版权所有© </span>");
        document.writeln("            <span>");
        document.writeln("                <strong>");
        document.writeln("                    <span>上海xxx有限公司</span>");
        document.writeln("                </strong>");
        document.writeln("            </span>");
        document.writeln("            <span>备案号：</span>");
        document.writeln("            <a href=\'http://www.miitbeian.gov.cn/\' target=\'_blank\'>");
        document.writeln("                <span>沪ICP备xxxx</span>");
        document.writeln("            </a>");
        document.writeln("        </div>");
        document.writeln("    </div>");
        document.writeln("</div>");
    }

    setup();
})();