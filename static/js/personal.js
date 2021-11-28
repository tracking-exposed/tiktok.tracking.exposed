function produceMetainfo(metadata) {
  return _.map(metadata, function(m) {
    if(!m.hashtags)
      m.hashtags = [];
    return `<div class="metadata row">
      <div class="col-2">
        <b>From</b>: ${m.author.name}
        <br>
        <b>Link</b>: <a href="https://www.tiktok.com${m.author.link}" target=_blank>${m.author.username}</a>
        <br>
        <i>${m.relative} ago</i>
      </div>
      <div class="col-5">
        ${m.description}
        <br>
        <br>
        <span class="hashtags">${m.hashtags.join(" ")}</span>
      </div>
      <div class="col-5">
        🎵 <a href="https://www.tiktok.com${m.music.url}" target=_blank>${m.music.name}</a>
        <br>
        👍 <span class="likes">${m.metrics.liken}</span>
        <br>
        💬 <span class="comments">${m.metrics.commentn}</span>
        <br>
        ⇗ <span class="comments">${m.metrics.sharen}</span>
      </div>
    </div>`;
  }).join("\n");
}

function produceHtmlinfo(htmls) {
  return _.map(htmls, function(h) {
    return `<div class="html">
      ${JSON.stringify(h)}
    </div>`;
  }).join("\n");
}


/* From content/personal/index.html
   we've the following HTML selectors to fill up:

   #total--htmls        counter
   #total--metadata     counter
   #total--full         counter

   #html--list          element list
   #metadata--list      element list                        */

async function loadPersonalEvidenceList(pubKey) {

    const apispecific = `${pubKey}/summary/json`;
    // from server.js:
    // '/api/v1/personal/:publicKey/:what/:format', 
    const url = buildApiUrl('personal', apispecific, 1);
    const response = await fetch(url);
    const data = await response.json();

    const metainfo = produceMetainfo(data.metadata);
    $("#metadata--list").html(metainfo);

    const htmlinfo = produceHtmlinfo(data.htmls);
    $("#html--list").html(htmlinfo);

    $("#total--htmls").text(data.counters.htmlavail);
    $("#total--metadata").text(data.counters.metadata);
    $("#total--full").text(data.counters.full);

    console.log(data);
}