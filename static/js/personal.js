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

/* embedded tiktok videos

<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@astrobiolena/video/7015015607665970438" data-video-id="7015015607665970438" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@astrobiolena" href="https://www.tiktok.com/@astrobiolena">@astrobiolena</a> What is trajectory biasing? <a title="science" target="_blank" href="https://www.tiktok.com/tag/science">#science</a> <a title="astronomy" target="_blank" href="https://www.tiktok.com/tag/astronomy">#astronomy</a> <a title="space" target="_blank" href="https://www.tiktok.com/tag/space">#space</a> <a title="mars" target="_blank" href="https://www.tiktok.com/tag/mars">#mars</a> <a title="astrobiology" target="_blank" href="https://www.tiktok.com/tag/astrobiology">#astrobiology</a> <a title="sciencetok" target="_blank" href="https://www.tiktok.com/tag/sciencetok">#sciencetok</a> <a title="learnontiktok" target="_blank" href="https://www.tiktok.com/tag/learnontiktok">#learnontiktok</a> <a title="spacethings" target="_blank" href="https://www.tiktok.com/tag/spacethings">#spacethings</a> <a target="_blank" title="♬ Jazz - Aylior" href="https://www.tiktok.com/music/Jazz-6732544207392606209">♬ Jazz - Aylior</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>

 */