export default class blogAPI {

  constructor() {
    this.baseUrl = 'https://kata.academy:8021/api';
  }

  getArticles = async (page) => {
    const res = await fetch(`${this.baseUrl}/articles?limit=20&offset=${page}`);
    if (!res.ok) throw new Error('Что то пошло не так');
    return await res.json();
  };

  getTickets = async (id) => {
    try {
      const res = await fetch(`https://aviasales-test-api.java-mentor.com/tickets?searchId=${id}`);
      if (!res.ok) throw new Error('Что то пошло не так');
      return await res.json();
    } catch (err) {
      return false;
    }
  };

}