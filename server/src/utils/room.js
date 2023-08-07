/** This function generates a random 4 character room code 
 * @returns {string} A random 4 character room code
 */
function generateRoomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

module.exports.generateRoomCode = generateRoomCode;