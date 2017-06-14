import Ember from 'ember';
import layout from '../templates/components/drop-area';

export default Ember.Component.extend({
	layout,

	classNames: ['drop-area'],

	classNameBindings: ['_dragOverClassName'],

	dragOverClassName: null,

	_dragOverClassName: null,

	dropped: null,

	content: null, 

	dragOver(event) {
		event.preventDefault();

		this.set('_dragOverClassName', this.get('dragOverClassName'));
	},

	dragLeave(event) {
		event.preventDefault();

		this.set('_dragOverClassName', null);
	},

	drop(event) {
		let data = event.dataTransfer.getData('text/data');

		this.setProperties({
			content: data,
			_dragOverClassName: null
		});

		this.sendAction('dropped', data);
	}
});