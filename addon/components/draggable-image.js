import Ember from 'ember';
import BaseComponent from '../components/draggable-element';
import layout from '../templates/components/draggable-image';

export default BaseComponent.extend({
  layout,

  drawCanvas() {
    let binaryData = this.get('content');

    if (!Ember.isEmpty(binaryData)) {
      let canvas = this.$('canvas').get(0);
      let ctx = canvas.getContext('2d');
      let image = new Image();

      image.onload = () => {
        ctx.drawImage(image, 0, 0, 50, 50);
      };

      image.src = binaryData;
    }
  },

  didInsertElement(...args) {
    this._super(args);

    this.drawCanvas();
  },

  dragStart(event) {
    this.set('_draggingClassNameBinding', this.get('draggingClassName'));

    let dt = event.dataTransfer;

    if (!Ember.isEmpty(this.get('content'))) {
      let canvas = this.$('canvas').get(0);

      dt.setDragImage(canvas, 10, 10);
    }

    dt.setData("text/data", this.get('content'));
  }
})