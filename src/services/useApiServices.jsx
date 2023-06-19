import axios from 'axios';

export const login = async function () {
  const response = await axios.post('https://enagramm.com/API/Account/Login', {
    Email: 'levan.lashauri1@gmail.com',
    Password: 'Demo_1234',
  });

  this.token = response.data.AccessToken;
  this.refreshToken = response.data.RefreshToken;
};

export const refreshTokens = async function () {
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

export const sendTextToServer = async function (sentence, token) {
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
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
    console.log('responsedata', response.data.AudioFilePath);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Refresh tokens and retry
      await refreshTokens.call(this);
      return sendTextToServer.call(this, sentence, this.token);
    } else {
      throw error;
    }
  }
};
