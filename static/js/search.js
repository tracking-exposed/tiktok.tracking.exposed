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

function produceSearchEntry(o) {
  /* o is:
    authorId: "@monismurf"
    metadataId: "ef05213afe3446366acf6965573120586962f766"
    order: 11
    publicKey: "D7s1375WKRJhCdjFnBBvJ7psBtSeFYkTr9xc5GAhcub1"
    query: "smurf"
    savingTime: "2022-01-11T03:45:38.858Z"
    tags: ""
    textdesc: "pues nos quedaremos con la version chill porque tt nos borra la del culillo"
    thumbfile: "828c66fb3e4a4780a5cb95944a004423_1624113842.jpeg"
    type: "video"
    videoId: "6975515801751194886"
  */
  return `<pre>
    ${JSON.stringify(o)}
  </pre>`;
}

/* embedded tiktok videos
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@astrobiolena/video/7015015607665970438" data-video-id="7015015607665970438" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@astrobiolena" href="https://www.tiktok.com/@astrobiolena">@astrobiolena</a> What is trajectory biasing? <a title="science" target="_blank" href="https://www.tiktok.com/tag/science">#science</a> <a title="astronomy" target="_blank" href="https://www.tiktok.com/tag/astronomy">#astronomy</a> <a title="space" target="_blank" href="https://www.tiktok.com/tag/space">#space</a> <a title="mars" target="_blank" href="https://www.tiktok.com/tag/mars">#mars</a> <a title="astrobiology" target="_blank" href="https://www.tiktok.com/tag/astrobiology">#astrobiology</a> <a title="sciencetok" target="_blank" href="https://www.tiktok.com/tag/sciencetok">#sciencetok</a> <a title="learnontiktok" target="_blank" href="https://www.tiktok.com/tag/learnontiktok">#learnontiktok</a> <a title="spacethings" target="_blank" href="https://www.tiktok.com/tag/spacethings">#spacethings</a> <a target="_blank" title="♬ Jazz - Aylior" href="https://www.tiktok.com/music/Jazz-6732544207392606209">♬ Jazz - Aylior</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
 */