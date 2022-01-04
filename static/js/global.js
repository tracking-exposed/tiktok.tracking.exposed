
const palette = [
    /* Name: Black */
    "#010101",
    /* Sea Serpent */
    "#69c9d0",
    /* White */
    "#ffffff",
    /* Crayola's Red */
    "#ee1d52" ];

function buildApiUrl(apiName, option, apiv) {

    const SERVER = 'https://tiktok.tracking.exposed';
    // const SERVER = 'http://localhost:14000';
    let rv = null;
    const api_path = apiv ? `/api/v${apiv}/` : "/api/v1/";

    if (window.location.origin.match(/localhost/)) {
        const x = SERVER;
        rv = option ? `${x}${api_path}${apiName}/${option}` : `${x}${api_path}${apiName}`;
        console.log(`Builing URL by hardcoded domains (development) URL composed ${rv}`);
    } else {
        rv = option ? `${api_path}${apiName}/${option}` : `${api_path}/${apiName}`;
        console.log(`Building URL by window...href (production) URL composed ${rv}`);
    }
    return rv;
}
