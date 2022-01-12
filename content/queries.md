---
title: Collected Search Queries
subtitle: Only by comparing how TikTok answer you'll understand how the algorithm affects perception
date: 2022-01-10T05:01:21+01:00
draft: false
extraCSS: "/css/search.css"
---

# 🔎 Search Query List

<div id="evidence--list"></div>

* If you install the browser extension ([version > 0.2.5](https://github.com/tracking-exposed/yttrex/issues/289)) your search queries would be comparable among other people that perform the same.
* To enter the list above, we only the search query that:
  1) Got actual video as answer from TikTok (no errors, for example, on Guideline Community Violations).
  2) Got at least two different browser performing it.
  3) Have been performed in the last 7 days.

<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/search.js"></script>
<script type="text/javascript">
  $(document).ready(async function() {
    const url = buildApiUrl('queries', 'list', 2);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if(!data.length) {
        $("#evidence--list").html('<span class="error">Error: no search query found?</span>')
        return;
    }
    const html = _.map(data, function(query) {
      return `<a class="qlist" href="/search#${query}">${query}</a>`;
    }).join("\n");
    $("#evidence--list").html(html);
  });
</script>