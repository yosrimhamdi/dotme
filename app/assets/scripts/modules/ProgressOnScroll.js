import '../../../../node_modules/waypoints/lib/noframework.waypoints';
import $ from 'jquery';

class ProgressOnScroll {
  constructor() {
    this.progressBars = $('.progress-bar__bar');
    this.createWaypoints();
  }
  createWaypoints() {
   this.progressBars.each(function (index,el){
    new Waypoint({
      element: el,
      handler: function(direction) {
        console.log(direction);
        $(el).addClass('progress-on-scroll');
      },
      offset: 'bottom-in-view'
    });
   });
  }
};
export default ProgressOnScroll;