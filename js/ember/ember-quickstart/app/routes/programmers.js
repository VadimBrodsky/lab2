import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Yehuda Katz', 'Tom Dale', 'Dan Abramov', 'Evan You', 'Misko Hevery'];
  }
});
