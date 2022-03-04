function produceSearchEntry(o) {
  /* o is:
    authorId: "@monismurf"
    metadataId: "ef05213afe3446366acf6965573120586962f766"
    order: 11
    publicKey: "D7s1375WKRJhCdjFnBBvJ7psBtSeFYkTr9xc5GAhcub1"
    query: "smurf"
    savingTime: "2022-01-11T03:45:38.858Z"
    publishingDate: "2022-01-01T00:00:00.000Z"
    tags: ""
    textdesc: "pues nos quedaremos con la version chill porque tt nos borra la del culillo"
    thumbfile: "828c66fb3e4a4780a5cb95944a004423_1624113842.jpeg"
    type: "video"
    videoId: "6975515801751194886"
  */
  const fileBaseUrl = window.location.host === 'localhost:1313' ?
    'http://localhost:14000/' : '/';
  const path = o.thumbfile ?
    `${fileBaseUrl}api/v0/images/${o.thumbfile.substr(0,2)}/${o.thumbfile}` :
    null;
  const img = path ?
    `<img height=400 src="${path}" />` :
    "<h3>🖼️ Image not available.</h3>";

  return `<div class="search-row row">
    <div class="col-8">
      <span class="order">${o.order}</span>
      <br>
      <b>From</b>: <a href="https://www.tiktok.com/${o.authorId}">${o.authorId}</a>
      <br>
      <b>Collected</b>: <i>${o.savingTime}</i>
      <br>
      <b>Published</b>: <i>${o.publishingDate}</i>
      <br>
      <small>
	<b>Description</b>: <span class="text">${o.textdesc}</span>
      </small>
      <br>
      <br>
      <span class="hashtags">${o.tags}</span>
    </div>
    <div class="col-4">
      <a href="https://www.tiktok.com/${o.authorId}/video/${o.videoId}" target=_blank>
        ${img}
      </a>
    </div> 
  </div>`;
}
