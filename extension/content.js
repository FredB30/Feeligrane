(() => {
  "use strict";

  console.log("Feeligrane loaded.");

  const article =
    document.querySelector("article") ||
    document.querySelector('[data-testid="post-content"]');

  if (!article) {
    console.log("Feeligrane: no article content found.");
    return;
  }

  console.log("Feeligrane: article detected.", article);
})();
