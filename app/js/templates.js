module.exports = function(Handlebars) {

this["JST"] = this["JST"] || {};

Handlebars.registerPartial("footer", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<footer>\n    <a target=\"_blank\" href=\"http://es.linkedin.com/in/alamilla\" style=\"text-decoration:none;\"><span style=\"font: 80% Arial,sans-serif; color:#0783B6;\"><img src=\"https://static.licdn.com/scds/common/u/img/webpromo/btn_in_20x15.png\" width=\"20\" height=\"15\" alt=\"Ver el perfil de Andres Lamilla en LinkedIn\" style=\"vertical-align:middle;\" border=\"0\">&nbsp;Ver mi perfil en LinkedIn</span></a>\n    <br />\n    <a target=\"_blank\" href=\"CV_"
    + container.escapeExpression(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"language","hash":{},"data":data}) : helper)))
    + ".pdf\">Descargar Curriculum</a>\n    <br />\n    <a target=\"_blank\" href=\"https://github.com/alamillac\">Github</a>\n    <br />\n    <a target=\"_blank\" href=\"https://wakatime.com/@alamilla\">Wakatime</a>\n</footer>\n";
},"useData":true}));

Handlebars.registerPartial("list", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "                <ul class=\"new-style circle-list\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <ul class=\"new-style minus-list\">\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <li>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.html : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </li>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                        "
    + ((stack1 = ((helper = (helper = helpers.html || (depth0 != null ? depth0.html : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"html","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        "
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<article class=\"section\">\n    <header class=\"section-header\">\n        <div class=\"left-info\">\n            <div class=\"line\"></div>\n        </div>\n        <h4 class=\"right-info\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n    </header>\n    <div class=\"section-content\">\n        <div class=\"section-element\">\n            <p class=\"left-info\">\n            </p>\n            <div class=\"right-info\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.circle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\n            </div>\n        </div>\n    </div>\n</article>\n";
},"useData":true}));

Handlebars.registerPartial("scripts", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<script>\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n    ga('create', 'UA-61263581-1', 'auto');\n    ga('send', 'pageview');\n</script>\n<script type=\"text/javascript\">\n    var appContext = {\n        \"appConfig\": {\n            \"defaultLangCode\": \"es\"\n        }\n    };\n</script>\n<script src=\"js/app.min.js\"></script>\n";
},"useData":true}));

Handlebars.registerPartial("section_awards", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.subsection_element,depth0,{"name":"subsection_element","hash":{"city":(depth0 != null ? depth0.city : depth0),"place":(depth0 != null ? depth0.name : depth0),"title":(depth0 != null ? depth0.field : depth0),"description":(depth0 != null ? depth0.description : depth0),"sideNote":(depth0 != null ? depth0.year : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<article class=\"section\">\n    <header class=\"section-header\">\n        <div class=\"left-info\">\n            <div class=\"line\"></div>\n        </div>\n        <h4 class=\"right-info\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n    </header>\n    <div class=\"section-content\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</article>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("section_experience", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <div class=\"section-element\">\n        <p class=\"left-info\">\n        </p>\n        <div class=\"right-info section-content-title\">\n            <p>\n                "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n            </p>\n        </div>\n    </div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.subsection_element,depth0,{"name":"subsection_element","hash":{"place":(depth0 != null ? depth0.place : depth0),"title":(depth0 != null ? depth0.title : depth0),"description":(depth0 != null ? depth0.description : depth0),"sideNote":(depth0 != null ? depth0.year : depth0)},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<article class=\"section\">\n    <header class=\"section-header\">\n        <div class=\"left-info\">\n            <div class=\"line\"></div>\n        </div>\n        <h4 class=\"right-info\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n    </header>\n    <div class=\"section-content\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.subsections : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</article>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("section_languages", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.subsection_element,depth0,{"name":"subsection_element","hash":{"title":(depth0 != null ? depth0.level : depth0),"sideNote":(depth0 != null ? depth0.name : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<article class=\"section\">\n    <header class=\"section-header\">\n        <div class=\"left-info\">\n            <div class=\"line\"></div>\n        </div>\n        <h4 class=\"right-info\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n    </header>\n    <div class=\"section-content\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</article>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("section_studies", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.subsection_element,depth0,{"name":"subsection_element","hash":{"place":(depth0 != null ? depth0.university : depth0),"title":(depth0 != null ? depth0.degree : depth0),"description":(depth0 != null ? depth0.description : depth0),"sideNote":(depth0 != null ? depth0.year : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<article class=\"section\">\n    <header class=\"section-header\">\n        <div class=\"left-info\">\n            <div class=\"line\"></div>\n        </div>\n        <h4 class=\"right-info\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n    </header>\n    <div class=\"section-content\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</article>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("skill", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(data && data.last),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "                    "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                    "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ",\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"section-content-2\">\n    <div class=\"section-element\">\n        <p class=\"left-info\">\n            "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.skill : depth0)) != null ? stack1.name : stack1), depth0))
    + "\n        </p>\n        <div class=\"right-info\">\n            <p>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.skill : depth0)) != null ? stack1.list : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </p>\n        </div>\n    </div>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("skills", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.skill,depth0,{"name":"skill","hash":{"skill":depth0},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(data && data.last),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"section-wrapper\">\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isIndexEven || (depth0 && depth0.isIndexEven) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(data && data.index),{"name":"isIndexEven","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "            </div>\n            <div class=\"section-wrapper\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<article class=\"section\">\n    <header class=\"section-header\">\n        <div class=\"left-info\">\n            <div class=\"line\"></div>\n        </div>\n        <h4 class=\"right-info\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.skills : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n    </header>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.skills : depth0)) != null ? stack1.list : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</article>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("subsection_element", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"right-info\">\n        <p>\n            <strong>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + ",</strong> <em>"
    + alias4(((helper = (helper = helpers.place || (depth0 != null ? depth0.place : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"place","hash":{},"data":data}) : helper)))
    + ",</em> "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ".\n        </p>\n        <p class=\"element-description\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.description : depth0)) != null ? stack1.html : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        </p>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.description : depth0)) != null ? stack1.html : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.description : depth0)) != null ? stack1.text : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(data && data.last),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "                    "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                    "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n                    <br />\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "    <p class=\"right-info\">\n        <strong>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.place : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</strong> "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.place : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </p>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return ",";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<em>"
    + alias4(((helper = (helper = helpers.place || (depth0 != null ? depth0.place : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"place","hash":{},"data":data}) : helper)))
    + ",</em> "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ".";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"section-element\">\n    <p class=\"left-info\">\n        "
    + container.escapeExpression(((helper = (helper = helpers.sideNote || (depth0 != null ? depth0.sideNote : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"sideNote","hash":{},"data":data}) : helper)))
    + "\n    </p>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true}));

this["JST"]["views/error.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "<h1>"
    + alias1(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"message","hash":{},"data":data}) : helper)))
    + "</h1>\n<h2>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.error : depth0)) != null ? stack1.status : stack1), depth0))
    + "</h2>\n<pre>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.error : depth0)) != null ? stack1.stack : stack1), depth0))
    + "</pre>\n";
},"useData":true});

this["JST"]["views/index.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<main class=\"mainContainer\">\n    <header class=\"header\">\n        <div class=\"wrapper\">\n            <div class=\"name\">\n                <h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.firstname : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastname : stack1), depth0))
    + "</h1>\n                <h3>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.profession : stack1), depth0))
    + "</h3>\n            </div>\n            <div class=\"contact\">\n                <div class=\"picture\">\n                    <img src=\"images/foto.jpg\">\n                </div>\n                <address>\n                    <a class=\"_change_language\" href=\""
    + alias2(((helper = (helper = helpers.nextLanguage || (depth0 != null ? depth0.nextLanguage : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"nextLanguage","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-language\" aria-hidden=\"true\" style=\"font-size: 20px;\"></i></a>\n                    <br />\n                    "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.address : stack1), depth0))
    + "\n                    <br />\n                    <i class=\"fa fa-mobile\"></i>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.tel : stack1), depth0))
    + "\n                    <br />\n                    <i class=\"fa fa-envelope-o\"></i><a href=\"mailto:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "</a>\n                </address>\n            </div>\n        </div>\n    </header>\n    <div class=\"description\">\n        "
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n    </div>\n\n"
    + ((stack1 = container.invokePartial(partials.section_studies,((stack1 = (depth0 != null ? depth0.studies : depth0)) != null ? stack1.academic : stack1),{"name":"section_studies","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.section_studies,((stack1 = (depth0 != null ? depth0.studies : depth0)) != null ? stack1.other : stack1),{"name":"section_studies","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.section_experience,(depth0 != null ? depth0.experience : depth0),{"name":"section_experience","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.section_languages,(depth0 != null ? depth0.languages : depth0),{"name":"section_languages","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.section_awards,(depth0 != null ? depth0.awards : depth0),{"name":"section_awards","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.skills,depth0,{"name":"skills","hash":{"skills":(depth0 != null ? depth0.skills : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.list,depth0,{"name":"list","hash":{"circle":true,"list":(depth0 != null ? depth0.hobbies : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.list,depth0,{"name":"list","hash":{"list":(depth0 != null ? depth0.projects : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</main>\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["views/layout.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <link rel='stylesheet' href='/stylesheets/index.css' />\n    <link href='http://fonts.googleapis.com/css?family=Arapey' rel='stylesheet' type='text/css'>\n    <title>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n  </head>\n  <body>\n    "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.scripts,depth0,{"name":"scripts","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </body>\n</html>\n";
},"usePartial":true,"useData":true});

return this["JST"];

};