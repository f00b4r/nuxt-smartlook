export default async (ctx) => {
  const options = <%= serialize(options) %>;

  // Install smartlook
  window.smartlook || (function (d) {
    // @ts-ignore
    var o = window.smartlook = function () { o.api.push(arguments) }, h = d.getElementsByTagName('head')[0];
    // @ts-ignore
    var c = d.createElement('script'); o.api = new Array(); c.async = true; c.type = 'text/javascript';
    c.charset = 'utf-8'; c.src = 'https://rec.smartlook.com/recorder.js'; h.appendChild(c);
  })(document);

  // Init smartlook
  window.smartlook('init', options.id);

  // Track routeing
  ctx.app.router.afterEach(function (to) {
    window.smartlook('navigation', to.fullPath);
  });
}
