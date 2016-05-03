// gangsta wrap
$.fn.wrapEach = function (what, replace) {
  var text = this.html();
  return this.html(text.replace(what, replace));
};

//Check if selector matches anything
$.fn.exists = function () {
  return this.length !== 0;
}