/* eslint-disable no-console */

/**
 * Displays a message with the port and the URL.
 *
 * @param {String}        port Is the server port.
 * @return {void}         Simply displays the message.
 */

module.exports = function consoleMessage(port) {
  const resetStyles = '\x1b[0m';
  const bold = '\x1b[1m';
  const grey = '\x1b[2m';
  const blue = '\x1b[34m';

  const url = `http://localhost:${port}`;

  console.info(
    `App now ${bold}running${resetStyles} on port ${blue}${port}${resetStyles}\n${grey}URL : ${url(
      port
    )}${resetStyles}`
  );
};
