import axios from 'axios';
import {
  login,
  refreshTokens,
  sendTextToServer,
} from '../services/useApiServices';

class MyClass {
  constructor() {
    this.text = '';
    this.onresult = null;
    this.currentPos = 0;
    this.token = '';
    this.refreshToken = '';
  }

  start = async () => {
    // Login and get the initial tokens
    await login.call(this);

    while (this.currentPos < this.text.length) {
      const endPos = this.calculateEndPos();
      const sentence = this.text.substring(this.currentPos, endPos);
      this.currentPos = endPos;

      // send sentence to the server
      const result = await sendTextToServer.call(this, sentence, this.token);

      // check if the onresult function exists and call it
      if (typeof this.onresult === 'function') {
        this.onresult(result);
      }
    }
  };

  calculateEndPos = () => {
    const endPosLimit = Math.min(this.currentPos + 230, this.text.length);
    for (let i = this.currentPos + 150; i <= endPosLimit; i++) {
      if (['.', '!', '?', ';', ','].includes(this.text[i])) {
        return i + 1;
      }
    }
    return endPosLimit;
  };
}

export default MyClass;
