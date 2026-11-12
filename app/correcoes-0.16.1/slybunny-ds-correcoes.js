/*
 * SlyBunny DS · correções do app · 0.16.1 (12 nov 2026)
 * Switch acessível: o botão do app vira role="switch" com aria-checked,
 * e o nome dele passa a ser o título da linha ("Notificações no celular").
 * Assim o leitor de tela fala "Notificações no celular, botão de alternância, ativado".
 * Carregar no fim da página, depois dos outros slybunny-ds-*.js.
 */
(function () {
  function isSwitch(b) {
    var k = b && b.firstElementChild;
    return !!(b && b.tagName === "BUTTON" &&
      b.classList.contains("w-12") && b.classList.contains("h-7") &&
      k && k.classList.contains("w-5") && k.classList.contains("h-5"));
  }

  var n = 0;
  function sync(b) {
    var on = b.firstElementChild.classList.contains("translate-x-5");
    if (b.getAttribute("role") !== "switch") b.setAttribute("role", "switch");
    if (b.getAttribute("aria-checked") !== String(on)) b.setAttribute("aria-checked", String(on));
    if (!b.hasAttribute("aria-label") && !b.hasAttribute("aria-labelledby")) {
      var t = b.parentElement && b.parentElement.querySelector("p");
      if (t) {
        if (!t.id) t.id = "sb-switch-" + (++n);
        b.setAttribute("aria-labelledby", t.id);
      }
    }
  }

  function scan() {
    document.querySelectorAll("button.w-12.h-7").forEach(function (b) {
      if (isSwitch(b)) sync(b);
    });
  }

  var pending = false;
  function later() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () { pending = false; scan(); });
  }

  new MutationObserver(function (list) {
    for (var i = 0; i < list.length; i++) {
      var m = list[i];
      if (m.type === "attributes") {
        var b = m.target.closest && m.target.closest("button");
        if (isSwitch(b)) sync(b);
      } else {
        later();
      }
    }
  }).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });

  scan();
})();
