import Handlebars from 'handlebars';

const hbars = (function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['book-info'] = template({"1":function(container,depth0,helpers,partials,data) {
        return "                <h5>"
            + container.escapeExpression(container.lambda(depth0, depth0))
            + "</h5>\n";
    },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

        return "<div class=\"col-lg-3 col-md-4 col-xs-12 \">\n    <div class=\"search-container result-div\">\n        <img src=\""
            + alias4(((helper = (helper = helpers.imageLink || (depth0 != null ? depth0.imageLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageLink","hash":{},"data":data}) : helper)))
            + "\" alt=\"book cover\" class=\"img-responsive img-thumbnail\">\n        <div class=\"info-container\">\n            <h4>"
            + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
            + "</h4>\n"
            + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "        </div>\n    </div>\n</div>\n";
    },"useData":true});
})();



export default hbars;
