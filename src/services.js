export default class blogAPI {

  constructor() {
    this.baseUrl = 'https://kata.academy:8021/api';
  }

  getArticles = async page => {
    const res = await fetch(`${this.baseUrl}/articles?limit=20&offset=${page}`);
    if (!res.ok) throw new Error('Что то пошло не так');
    return await res.json();
  };

  getArticle = async slug => {
    const res = await fetch(`${this.baseUrl}/articles/${slug}`);
    if (!res.ok) throw new Error('Что то пошло не так');
    return await res.json();
  };

  registerNewUser = async user => {
    const res = await fetch(`${this.baseUrl}/users/`, {
      method: 'POST',
      body: JSON.stringify(user)
    });
    if (!res.ok) throw new Error('Что то пошло не так');
    return await res.json();
  }

}