function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ___node_modules_lasso_taglib_page_tag_js = __renderer(require("lasso/taglib/page-tag")),
      __tag = __helpers.t,
      ___node_modules_lasso_taglib_head_tag_js = __renderer(require("lasso/taglib/head-tag")),
      ___node_modules_lasso_taglib_body_tag_js = __renderer(require("lasso/taglib/body-tag"));

  return function render(data, out) {
    __tag(out,
      ___node_modules_lasso_taglib_page_tag_js,
      {
        "packagePath": "./browser.json",
        "dirname": __dirname,
        "filename": __filename
      });

    out.w(' <!doctype html> <html lang="en"><head><meta charset="UTF-8"><title>Datastore demo</title>');
    __tag(out,
      ___node_modules_lasso_taglib_head_tag_js,
      {});

    out.w('</head><body><h1 id="header">Data Store Demo</h1><div id="currentData"></div><div id="console"></div>');
    __tag(out,
      ___node_modules_lasso_taglib_body_tag_js,
      {});

    out.w('</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);