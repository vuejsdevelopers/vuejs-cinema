module.exports = {
  hasClass(el, className) {
    if (el.classList)
      return el.classList.contains(className);
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  },
  addClass(el, className) {
    if (el.classList)
      el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className
  },
  removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className);
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ')
    }
  }
};
