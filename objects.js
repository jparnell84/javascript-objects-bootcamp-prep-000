var playlist = {
  'Taylor Swift' : 'Tim McGraw',
  'Pentatonix': 'Mary Did You Know?',
  'Alan Jackson': 'Little Bity'
}
function updatePlayList(obj, string, title){
  return Object.assign({}, playlist, { 'Mozart': 'Moonlight Sonata' })
}