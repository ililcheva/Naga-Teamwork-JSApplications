import Handlebars from 'handlebars';

const hbars1 = (function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['book-info'] = template({"1":function(container,depth0,helpers,partials,data) {
        return "                <h5>"
            + container.escapeExpression(container.lambda(depth0, depth0))
            + "</h5>\n";
    },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

        return "\n<div class=\"col-lg-3 col-md-4 col-xs-12 \">\n    <div class=\"search-container result-div\" >\n        <div class=\"rid-button\" index=\""
            + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
            + "\">description</div>\n        <div class=\"add-button\" index=\""
            + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
            + "\" id=\""
            + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
            + "\">add</div>\n        <img src=\""
            + alias4(((helper = (helper = helpers.imageLink || (depth0 != null ? depth0.imageLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageLink","hash":{},"data":data}) : helper)))
            + "\" alt=\"book cover\" class=\"img-responsive\">\n        <div class=\"info-container\">\n            <h4>"
            + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
            + "</h4>\n"
            + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "        </div>\n    </div>\n</div>\n";
    },"useData":true});
})();



const hbars2 = (function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['description'] = template({"1":function(container,depth0,helpers,partials,data) {
        return "        <h2>"
            + container.escapeExpression(container.lambda(depth0, depth0))
            + "</h2>\n";
    },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

        return "<div class=\"description-div\" >\n    <h1>"
            + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
            + "</h1>\n    <hr>\n"
            + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "    <p>\n        "
            + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
            + "\n    </p>\n    <a href=\""
            + alias4(((helper = (helper = helpers.infoLink || (depth0 != null ? depth0.infoLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"infoLink","hash":{},"data":data}) : helper)))
            + "\" class=\"google-button\">Read on Google Books</a>\n    <button class=\"description-close\">X</button>\n</div>\n";
    },"useData":true});
})();

const hbars3 = (function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['user-data'] = template({"1":function(container,depth0,helpers,partials,data) {
        return "                <h5>"
            + container.escapeExpression(container.lambda(depth0, depth0))
            + "</h5>\n";
    },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

        return "<div class=\"col-lg-3 col-md-4 col-xs-12 \">\n    <div class=\"search-container result-div\" >\n        <div class=\"rid-button\" index=\""
            + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
            + "\">description</div>\n        <div class=\"remove-button\" index=\""
            + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
            + "\" id=\""
            + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
            + "\">remove</div>\n        <img src=\""
            + alias4(((helper = (helper = helpers.imageLink || (depth0 != null ? depth0.imageLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageLink","hash":{},"data":data}) : helper)))
            + "\" alt=\"book cover\" class=\"img-responsive img-thumbnail\">\n        <div style=\"display: none\">"
            + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
            + "</div>\n        <div class=\"info-container\">\n            <h4>"
            + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
            + "</h4>\n"
            + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "        </div>\n    </div>\n</div>";
    },"useData":true});
})();



export { hbars1, hbars2, hbars3 };
