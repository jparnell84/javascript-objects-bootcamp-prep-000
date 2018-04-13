var playlist = {
  'Taylor Swift' : 'Tim McGraw',
  'Pentatonix': 'Mary Did You Know?',
  'Alan Jackson': 'Little Bity'
}
function updatePlayList(obj, key, value){
  return Object.assign({}, playlist, {'Slowdive': 'Alison'});
}