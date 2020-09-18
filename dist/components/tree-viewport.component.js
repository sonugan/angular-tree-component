import { Component, ElementRef, HostListener } from '@angular/core';
import { TreeVirtualScroll } from '../models/tree-virtual-scroll.model';
import { TREE_EVENTS } from '../constants/events';
import throttle from 'lodash/throttle';
var TreeViewportComponent = /** @class */ (function () {
    function TreeViewportComponent(elementRef, virtualScroll) {
        var _this = this;
        this.elementRef = elementRef;
        this.virtualScroll = virtualScroll;
        this.setViewport = throttle(function () {
            _this.virtualScroll.setViewport(_this.elementRef.nativeElement);
        }, 17);
    }
    TreeViewportComponent.prototype.ngOnInit = function () {
        this.virtualScroll.init();
    };
    TreeViewportComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setViewport();
            _this.virtualScroll.fireEvent({ eventName: TREE_EVENTS.initialized });
        });
    };
    TreeViewportComponent.prototype.ngOnDestroy = function () {
        this.virtualScroll.clear();
    };
    TreeViewportComponent.prototype.getTotalHeight = function () {
        return this.virtualScroll.isEnabled() && this.virtualScroll.totalHeight + 'px' || 'auto';
    };
    TreeViewportComponent.prototype.onScroll = function (event) {
        this.setViewport();
    };
    TreeViewportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tree-viewport',
                    styles: [],
                    providers: [TreeVirtualScroll],
                    template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <div [style.height]=\"getTotalHeight()\">\n        <ng-content></ng-content>\n      </div>\n    </ng-container>\n  "
                },] },
    ];
    /** @nocollapse */
    TreeViewportComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TreeVirtualScroll }
    ]; };
    TreeViewportComponent.propDecorators = {
        onScroll: [{ type: HostListener, args: ['scroll', ['$event'],] }]
    };
    return TreeViewportComponent;
}());
export { TreeViewportComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aWV3cG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLXZpZXdwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLFVBQVUsRUFBcUIsWUFBWSxFQUN2RCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbEQsT0FBTyxRQUFRLE1BQU0saUJBQWlCLENBQUM7QUFFdkM7SUFpQkUsK0JBQ1UsVUFBc0IsRUFDdkIsYUFBZ0M7UUFGekMsaUJBR0M7UUFGUyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQU56QyxnQkFBVyxHQUFHLFFBQVEsQ0FBQztZQUNyQixLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUtQLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUFBLGlCQUtDO1FBSkMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCw4Q0FBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxNQUFNLENBQUM7SUFDM0YsQ0FBQztJQUdELHdDQUFRLEdBRFIsVUFDUyxLQUFZO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkE1Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixNQUFNLEVBQUUsRUFBRTtvQkFDVixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDOUIsUUFBUSxFQUFFLHFMQU1UO2lCQUNGOzs7O2dCQWxCWSxVQUFVO2dCQUVkLGlCQUFpQjs7OzJCQThDdkIsWUFBWSxTQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFJcEMsNEJBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQWpDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIEhvc3RMaXN0ZW5lciwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZVZpcnR1YWxTY3JvbGwgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XHJcbmltcG9ydCB7IFRSRUVfRVZFTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2V2ZW50cyc7XHJcbmltcG9ydCB7IENhbmNlbGFibGUgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndHJlZS12aWV3cG9ydCcsXHJcbiAgc3R5bGVzOiBbXSxcclxuICBwcm92aWRlcnM6IFtUcmVlVmlydHVhbFNjcm9sbF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm1vYnhBdXRvcnVuPVwie2RvbnREZXRhY2g6IHRydWV9XCI+XHJcbiAgICAgIDxkaXYgW3N0eWxlLmhlaWdodF09XCJnZXRUb3RhbEhlaWdodCgpXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVWaWV3cG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBzZXRWaWV3cG9ydCA9IHRocm90dGxlKCgpID0+IHtcclxuICAgIHRoaXMudmlydHVhbFNjcm9sbC5zZXRWaWV3cG9ydCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfSwgMTcpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyB2aXJ0dWFsU2Nyb2xsOiBUcmVlVmlydHVhbFNjcm9sbCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnZpcnR1YWxTY3JvbGwuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0Vmlld3BvcnQoKTtcclxuICAgICAgdGhpcy52aXJ0dWFsU2Nyb2xsLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMuaW5pdGlhbGl6ZWQgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy52aXJ0dWFsU2Nyb2xsLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRUb3RhbEhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLnZpcnR1YWxTY3JvbGwuaXNFbmFibGVkKCkgJiYgdGhpcy52aXJ0dWFsU2Nyb2xsLnRvdGFsSGVpZ2h0ICsgJ3B4JyB8fCAnYXV0byc7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxyXG4gIG9uU2Nyb2xsKGV2ZW50OiBFdmVudCkge1xyXG4gICAgdGhpcy5zZXRWaWV3cG9ydCgpO1xyXG4gIH1cclxufVxyXG4iXX0=