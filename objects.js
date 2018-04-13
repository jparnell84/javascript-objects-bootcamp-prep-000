var playlist = {
  'Taylor Swift' : 'Tim McGraw',
  'Pentatonix': 'Mary Did You Know?',
  'Alan Jackson': 'Little Bity'
}
function updatePlayList(playlist, artistName, songTitle){
  return Object.assign({}, playlist, ['Slowdive'] = 'Alison');
}