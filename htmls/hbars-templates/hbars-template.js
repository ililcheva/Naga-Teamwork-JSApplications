import Handlebars from 'handlebars';

const hbars = (function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['book-info'] = template({"1":function(container,depth0,helpers,partials,data) {
        return "        <h5>"
            + container.escapeExpression(container.lambda(depth0, depth0))
            + "</h5>\n";
    },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

        return "\n<div class=\"col-lg-3 col-md-4 col-xs-12\">\n    <img src=\""
            + alias4(((helper = (helper = helpers.imageLink || (depth0 != null ? depth0.imageLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageLink","hash":{},"data":data}) : helper)))
            + "\" alt=\"book cover\" class=\"img-responsive img-thumbnail\">\n    <h4>"
            + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
            + "</h4>\n"
            + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "    "
            + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
            + "\n    <a href=\""
            + alias4(((helper = (helper = helpers.infoLink || (depth0 != null ? depth0.infoLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"infoLink","hash":{},"data":data}) : helper)))
            + "\">see on google books</a>\n</div>\n\n\n\n\n\n\n\n";
    },"useData":true});
})();




export default hbars;
