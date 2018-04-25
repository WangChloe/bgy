// <div class="container">
//     <div class="row head">
//         <div class="col-md-6 col-sm-6 col-xs-6">
//             <img src="images/logo.png" alt="logo" />
//         </div>
//         <div class="col-md-6 col-sm-6 col-xs-6 text-center tel-box">
//             <div class="row tel"><i><img src="images/header_dianhua.png" alt="" /></i>客服热线：<span>4001757195</span></div>
//             <div class="row tel">客服专员微信咨询：<span>BGY12580L</span></div>
//         </div>
//     </div>
//     <ul class="nav nav-pills nav-justified text-center" id="J_nav_container">
//         <li class="J_nav_item" role="presentation"><a href="index.html">首页</a></li>
//         <li class="J_nav_item" role="presentation"><a href="profile.html">公司品牌简介</a></li>
//         <li class="J_nav_item" role="presentation" class="dropdown">
//             <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
//               项目展示 <span class="caret"></span>
//             </a>
//             <ul class="dropdown-menu">
//               <li><a href="project_1.html">鼎龙湾</a></li>
//               <li><a href="project_2.html">十里银滩</a></li>
//             </ul>
//           </li>
//         <li class="J_nav_item" role="presentation"><a href="purpose.html">三大宗旨</a></li>
//         <li class="J_nav_item" role="presentation"><a href="travel.html">旅游同行</a></li>
//         <li class="J_nav_item" role="presentation"><a href="contact.html">联系我们</a></li>
//     </ul>
// </div>

// <div class="row text-center nav">
//     <a class="col-md-2 col-xs-4" href="index.html">首页</a>
//     <a class="col-md-2 col-xs-4" href="javascript:void(0);">公司品牌简介</a>
//     <a class="col-md-2 col-xs-4" href="javascript:void(0);">项目展示</a>
//     <a class="col-md-2 col-xs-4" href="javascript:void(0);">三大宗旨</a>
//     <a class="col-md-2 col-xs-4" href="javascript:void(0);">旅游同行</a>
//     <a class="col-md-2 col-xs-4" href="javascript:void(0);">联系我们</a>
// </div>

(function() {

    function setup(){
        bindWriteHead();
        bindCurNav();
    }

    function bindWriteHead(){
        document.writeln("<div class=\'container\'>");
        document.writeln("    <div class=\'row head\'>");
        document.writeln("        <div class=\'col-md-6 col-sm-6 col-xs-6\'>");
        document.writeln("            <img src=\'images/logo.png\' alt=\'logo\' />");
        document.writeln("        </div>");
        document.writeln("        <div class=\'col-md-6 col-sm-6 col-xs-6 text-center tel-box\'>");
        document.writeln("            <div class=\'row tel\'><i><img src=\'images/header_dianhua.png\' alt=\'\' /></i>客服热线：<span>4001757195</span></div>");
        document.writeln("            <div class=\'row tel\'>客服专员微信咨询：<span>BGY12580L</span></div>");
        document.writeln("        </div>");
        document.writeln("    </div>");
        document.writeln("    <ul class=\'nav nav-pills nav-justified text-center\' id=\'J_nav_container\'>");
        document.writeln("        <li class=\'J_nav_item\' role=\'presentation\'><a href=\'index.html\'>首页</a></li>");
        document.writeln("        <li class=\'J_nav_item\' role=\'presentation\'><a href=\'profile.html\'>公司品牌简介</a></li>");
        document.writeln("        <li class=\'J_nav_item\' role=\'presentation\' class=\'dropdown\'>");
        document.writeln("            <a class=\'dropdown-toggle\' data-toggle=\'dropdown\' href=\'#\' role=\'button\' aria-haspopup=\'true\' aria-expanded=\'false\'>");
        document.writeln("              项目展示 <span class=\'caret\'></span>");
        document.writeln("            </a>");
        document.writeln("            <ul class=\'dropdown-menu\'>");
        document.writeln("              <li><a href=\'project_1.html\'>鼎龙湾</a></li>");
        document.writeln("              <li><a href=\'project_2.html\'>十里银滩</a></li>");
        document.writeln("            </ul>");
        document.writeln("          </li>");
        document.writeln("        <li class=\'J_nav_item\' role=\'presentation\'><a href=\'purpose.html\'>三大宗旨</a></li>");
        document.writeln("        <li class=\'J_nav_item\' role=\'presentation\'><a href=\'travel.html\'>旅游同行</a></li>");
        document.writeln("        <li class=\'J_nav_item\' role=\'presentation\'><a href=\'contact.html\'>联系我们</a></li>");
        document.writeln("    </ul>");
        document.writeln("</div>");
    }

    function bindCurNav() {
        var $navContainer = $("#J_nav_container");
        var $navList = $(".J_nav_item");
        var path = location.pathname;
        var arrNav = ['profile', 'project', 'purpose', 'travel', 'contact'];
        var actClass = "active";
        var len = arrNav.length;
        var i = 0;

        for (; i < len; i++) {
            $navList.removeClass(actClass);

            if (location.pathname.getLocPath(arrNav[i])) {
                $navList.eq(i + 1).addClass(actClass);
                return;
            }

            if(i == len - 1) {
                $navList.eq(0).addClass(actClass);
                return;
            }
        }
    }

    setup();

})();