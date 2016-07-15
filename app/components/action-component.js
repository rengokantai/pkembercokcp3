import Ember from 'ember';

export default Ember.Component.extend({
showtext:true,
actions:{
toggleText(){
this.toggleProperty('showtext');
}
}
});
