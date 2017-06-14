import Ember from 'ember';
import layout from '../templates/components/draggable-element';

export default Ember.Component.extend({
  layout,

  classNames: ['draggable-element'],

  classNameBindings: ['_draggingClassNameBinding'],

  attributeBindings: ['draggable'],

  draggable: true,

  draggingClassName: null,

  content: null,

  _draggingClassNameBinding: null,

  dragStart(event) {
  	this.set('_draggingClassNameBinding', this.get('draggingClassName'));

  	let dt = event.dataTransfer;

  	dt.setData("text/data", this.get('content'));
  },

  dragEnd() {
  	this.set('_draggingClassNameBinding', null);
  }
});
