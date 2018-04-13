var playlist = {
'Slowdive': 'Alison',
'My Bloody Valentine': 'Sometimes'
}
function updatePlayList(playlist, artistName, songTitle){
  return Object.assign({}, playlist, ['Slowdive']: 'Alison');
}