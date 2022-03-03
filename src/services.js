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
    try {
      const res = await fetch(`${this.baseUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      });
      if (!res.ok) throw new Error('Что то пошло не так');
      return await res.json();
    } catch (err) {
      console.err(err)
    }

  }

  signInUser = async user => {
    const res = await fetch(`${this.baseUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    });
    if (!res.ok) throw new Error('Что то пошло не так');
    return await res.json();
  }

  getUser = async token => {
    const res = await fetch(`${this.baseUrl}/user`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      },
    });
    if (!res.ok) throw new Error('Что то пошло не так');
    return await res.json();
  }

  getUserProfile = async username => {
    const res = await fetch(`${this.baseUrl}/profiles/${username}`);
    if (!res.ok) throw new Error('Что то пошло не так');
    return await res.json();
  }

  putUserProfile = async (token, user) => {
    const res = await fetch(`${this.baseUrl}/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(user)
    });
    if (!res.ok) throw new Error('Что то пошло не так');
    return await res.json();
  }

  createArticle = async (token, article) => {
    const res = await fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
      body: JSON.stringify(article)
    });
    if (!res.ok) throw new Error('Что то пошло не так');
    return await res.json();
  }

  editArticle = async (token, article, slug) => {
    const res = await fetch(`${this.baseUrl}/articles/${slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
      body: JSON.stringify(article)
    });
    if (!res.ok) throw new Error('Что то пошло не так');
    return await res.json();
  }

  delArticle = async (token, slug) => {
    const res = await fetch(`${this.baseUrl}/articles/${slug}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      }
    });
    if (!res.ok) throw new Error('Что то пошло не так');
    return res;
  }




}