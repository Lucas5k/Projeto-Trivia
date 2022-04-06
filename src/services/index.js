import md5 from 'crypto-js/md5';

const getToken = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  return data.token;
};

const getQuestions = async (token) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const question = await response.json();
  const errorCode = 3;
  if (question.response_code === errorCode) {
    throw new Error(`Erro ${errorCode}: token inválido, seu token expirou.`);
  }
  return question.results;
};

const getAvatar = async (email) => {
  const hash = md5(email).toString();
  const response = await fetch(`https://www.gravatar.com/avatar/${hash}`);
  const url = await response.json();
  return url;
};

export { getToken, getQuestions, getAvatar };
