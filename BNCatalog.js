var catalog = {
    '1527': {
        'Artist': 'Thad Jones',
        'Album': 'The Magnificent Thad Jones',
        'Year': 1956,
        'Tracks': ['April in Paris', 'Billie-Doo', 'If I Love Again', 'If Someone Had Told Me', 
    'Thedia', 'I\'ve Got a Crush on You', 'Something to Remember You By']
    },

}


// function addAlbum(series, artist, album, year, tracks) {
//     catalog[series].Tracks.push(tracks)
//     tracks = catalog[series].Tracks
    
//     var newObj = {
//         'Artist': artist,
//         'Album': album,
//         'Year': year,
//         "Tracks": tracks
//     };

//     catalog[series] = newObj;
// }

function addTracks(series, tracks){
    if(!catalog.hasOwnProperty(series)){
        throw Error("series entry doesn't exist")
    } else {
    catalog[series].Tracks.push(tracks) 
    };
}

function addAlbum(series, artist, album, year, tracks) {
    if (catalog.hasOwnProperty(series)) {

        catalog[series].Tracks.push(tracks)

        var newObj = {
            'Artist': artist,
            'Album': album,
            'Year': year,
            "Tracks": catalog[series].Tracks
        };

        catalog[series] = newObj;
    } else {
        var newObj = {
            'Artist': artist,
            'Album': album,
            'Year': year,
            "Tracks": [tracks]
        };

        catalog[series] = newObj;
        }
}

console.log('pre: ', catalog)

addAlbum('1577', 'John Coltrane', 'Blue Train', 1957, 'Locomotion')
addTracks('1577', 'Moment\'s Notice')
console.log('post: ', catalog)


