export default class BlogAPI {
  constructor() {
    this.baseUrl = 'https://kata.academy:8021/api';
  }

  getArticles = async (page, token) => {
    const res = await fetch(`${this.baseUrl}/articles?limit=20&offset=${page}`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${token}`,
      },
    });
    if (!res.ok) return false;
    return await res.json();
  };

  getArticle = async (slug, token) => {
    const res = await fetch(`${this.baseUrl}/articles/${slug}`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${token}`,
      },
    });
    if (!res.ok) return false;
    return await res.json();
  };

  registerNewUser = async (user) => {
    const res = await fetch(`${this.baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      if (res.status === 422) return '422'
      return false;
    }
    return await res.json();
  };

  signInUser = async (user) => {
    const res = await fetch(`${this.baseUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      if (res.status === 422) return '422'
      return false;
    }
    return await res.json();
  };

  getUserProfile = async (username) => {
    const res = await fetch(`${this.baseUrl}/profiles/${username}`);
    if (!res.ok) return false;
    return await res.json();
  };

  putUserProfile = async (token, user) => {
    const res = await fetch(`${this.baseUrl}/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) alert('Ты пытался, но у тебя не вышло. Попробуй еще раз.');
    return await res.json();
  };

  createArticle = async (token, article) => {
    const res = await fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(article),
    });
    if (!res.ok) alert('Ты пытался, но у тебя не вышло. Попробуй еще раз.');
    return await res.json();
  };

  editArticle = async (token, article, slug) => {
    const res = await fetch(`${this.baseUrl}/articles/${slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(article),
    });
    if (!res.ok) alert('Ты пытался, но у тебя не вышло. Попробуй еще раз.');
    return await res.json();
  };

  delArticle = async (token, slug) => {
    const res = await fetch(`${this.baseUrl}/articles/${slug}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    if (!res.ok) alert('Ты пытался, но у тебя не вышло. Попробуй еще раз.');
    return res;
  };

  favorite = async (token, slug, method) => {
    const res = await fetch(`${this.baseUrl}/articles/${slug}/favorite`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    });
    if (!res.ok) alert('Ты пытался, но у тебя не вышло. Попробуй еще раз.');
    return res;
  };
}