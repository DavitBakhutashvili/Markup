import axios from 'axios';

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
    await this.login();

    while (this.currentPos < this.text.length) {
      const endPos = this.calculateEndPos();
      const sentence = this.text.substring(this.currentPos, endPos);
      this.currentPos = endPos;

      // send sentence to the server
      const result = await this.sendTextToServer(sentence);

      // check if the onresult function exists and call it
      if (typeof this.onresult === 'function') {
        this.onresult(result);
      }
    }
  };

  login = async () => {
    const response = await axios.post(
      'https://enagramm.com/API/Account/Login',
      {
        Email: 'levan.lashauri1@gmail.com',
        Password: 'Demo_1234',
      }
    );

    this.token = response.data.AccessToken;

    this.refreshToken = response.data.RefreshToken;
  };

  refreshTokens = async () => {
    const response = await axios.post(
      'https://enagramm.com/API/Account/RefreshToken',
      {
        AccessToken: this.token,
        RefreshToken: this.refreshToken,
      }
    );

    this.token = response.data.AccessToken;
    this.refreshToken = response.data.RefreshToken;
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

  sendTextToServer = async (sentence) => {
    const model = {
      Language: 'ka',
      Text: sentence,
      Voice: 0,
      iterationCount: 2,
    };

    try {
      const response = await axios({
        method: 'post',
        url: 'https://enagramm.com/API/TTS/SynthesizeTextAudioPath',
        data: JSON.stringify(model),
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
      console.log('responsedata', response.data.AudioFilePath);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Refresh tokens and retry
        await this.refreshTokens();
        return this.sendTextToServer(sentence);
      } else {
        throw error;
      }
    }
  };
}

export default MyClass;
