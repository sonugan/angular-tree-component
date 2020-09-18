import { Component, ContentChild, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { TreeModel } from '../models/tree.model';
import { TreeDraggedElement } from '../models/tree-dragged-element.model';
import { TreeOptions } from '../models/tree-options.model';
import { TreeViewportComponent } from './tree-viewport.component';
import includes from 'lodash/includes';
import pick from 'lodash/pick';
var TreeComponent = /** @class */ (function () {
    function TreeComponent(treeModel, treeDraggedElement) {
        var _this = this;
        this.treeModel = treeModel;
        this.treeDraggedElement = treeDraggedElement;
        treeModel.eventNames.forEach(function (name) { return _this[name] = new EventEmitter(); });
        treeModel.subscribeToState(function (state) { return _this.stateChange.emit(state); });
    }
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        // Will be handled in ngOnChanges
        set: function (nodes) {
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "options", {
        set: function (options) {
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "focused", {
        set: function (value) {
            this.treeModel.setFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "state", {
        set: function (state) {
            this.treeModel.setState(state);
        },
        enumerable: true,
        configurable: true
    });
    TreeComponent.prototype.onKeydown = function ($event) {
        if (!this.treeModel.isFocused)
            return;
        if (includes(['input', 'textarea'], document.activeElement.tagName.toLowerCase()))
            return;
        var focusedNode = this.treeModel.getFocusedNode();
        this.treeModel.performKeyAction(focusedNode, $event);
    };
    TreeComponent.prototype.onMousedown = function ($event) {
        function isOutsideClick(startElement, nodeName) {
            return !startElement ? true : startElement.localName === nodeName ? false : isOutsideClick(startElement.parentElement, nodeName);
        }
        if (isOutsideClick($event.target, 'tree-root')) {
            this.treeModel.setFocus(false);
        }
    };
    TreeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.options || changes.nodes) {
            this.treeModel.setData({
                options: changes.options && changes.options.currentValue,
                nodes: changes.nodes && changes.nodes.currentValue,
                events: pick(this, this.treeModel.eventNames)
            });
        }
    };
    TreeComponent.prototype.sizeChanged = function () {
        this.viewportComponent.setViewport();
    };
    TreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'Tree, tree-root',
                    providers: [TreeModel],
                    styles: [],
                    template: "\n      <tree-viewport #viewport>\n          <div\n                  class=\"angular-tree-component\"\n                  [class.node-dragging]=\"treeDraggedElement.isDragging()\"\n                  [class.angular-tree-component-rtl]=\"treeModel.options.rtl\">\n              <tree-node-collection\n                      *ngIf=\"treeModel.roots\"\n                      [nodes]=\"treeModel.roots\"\n                      [treeModel]=\"treeModel\"\n                      [templates]=\"{\n            loadingTemplate: loadingTemplate,\n            treeNodeTemplate: treeNodeTemplate,\n            treeNodeWrapperTemplate: treeNodeWrapperTemplate,\n            treeNodeFullTemplate: treeNodeFullTemplate\n          }\">\n              </tree-node-collection>\n              <tree-node-drop-slot\n                      class=\"empty-tree-drop-slot\"\n                      *ngIf=\"treeModel.isEmptyTree()\"\n                      [dropIndex]=\"0\"\n                      [node]=\"treeModel.virtualRoot\">\n              </tree-node-drop-slot>\n          </div>\n      </tree-viewport>\n  "
                },] },
    ];
    /** @nocollapse */
    TreeComponent.ctorParameters = function () { return [
        { type: TreeModel },
        { type: TreeDraggedElement }
    ]; };
    TreeComponent.propDecorators = {
        loadingTemplate: [{ type: ContentChild, args: ['loadingTemplate',] }],
        treeNodeTemplate: [{ type: ContentChild, args: ['treeNodeTemplate',] }],
        treeNodeWrapperTemplate: [{ type: ContentChild, args: ['treeNodeWrapperTemplate',] }],
        treeNodeFullTemplate: [{ type: ContentChild, args: ['treeNodeFullTemplate',] }],
        viewportComponent: [{ type: ViewChild, args: ['viewport',] }],
        nodes: [{ type: Input }],
        options: [{ type: Input }],
        focused: [{ type: Input }],
        state: [{ type: Input }],
        toggleExpanded: [{ type: Output }],
        activate: [{ type: Output }],
        deactivate: [{ type: Output }],
        nodeActivate: [{ type: Output }],
        nodeDeactivate: [{ type: Output }],
        select: [{ type: Output }],
        deselect: [{ type: Output }],
        focus: [{ type: Output }],
        blur: [{ type: Output }],
        updateData: [{ type: Output }],
        initialized: [{ type: Output }],
        moveNode: [{ type: Output }],
        copyNode: [{ type: Output }],
        loadNodeChildren: [{ type: Output }],
        changeFilter: [{ type: Output }],
        event: [{ type: Output }],
        stateChange: [{ type: Output }],
        onKeydown: [{ type: HostListener, args: ['body: keydown', ['$event'],] }],
        onMousedown: [{ type: HostListener, args: ['body: mousedown', ['$event'],] }]
    };
    return TreeComponent;
}());
export { TreeComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFLE9BQU8sUUFBUSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sSUFBSSxNQUFNLGFBQWEsQ0FBQztBQUUvQjtJQTBFRSx1QkFDUyxTQUFvQixFQUNwQixrQkFBc0M7UUFGL0MsaUJBTUM7UUFMUSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFFN0MsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ3hFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQXRDRCxzQkFBYSxnQ0FBSztRQURsQixpQ0FBaUM7YUFDakMsVUFBbUIsS0FBWTtRQUMvQixDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFFRixzQkFBYSxrQ0FBTzthQUFwQixVQUFxQixPQUFvQjtRQUN6QyxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFFRixzQkFBYSxrQ0FBTzthQUFwQixVQUFxQixLQUFjO1lBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsc0JBQWEsZ0NBQUs7YUFBbEIsVUFBbUIsS0FBSztZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQTZCRCxpQ0FBUyxHQURULFVBQ1UsTUFBTTtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQ3RDLElBQUksUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxFQUNoQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUFFLE9BQU87UUFFeEQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUVwRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBR0QsbUNBQVcsR0FEWCxVQUNZLE1BQU07UUFDaEIsd0JBQXdCLFlBQXFCLEVBQUUsUUFBZ0I7WUFDN0QsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuSSxDQUFDO1FBRUQsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksT0FBTztRQUNqQixJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztnQkFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZO2dCQUN4RCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVk7Z0JBQ2xELE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQzlDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Z0JBcEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ3RCLE1BQU0sRUFBRSxFQUFFO29CQUNWLFFBQVEsRUFBRSw2akNBeUJUO2lCQUNGOzs7O2dCQXRDUSxTQUFTO2dCQUNULGtCQUFrQjs7O2tDQTBDeEIsWUFBWSxTQUFDLGlCQUFpQjttQ0FDOUIsWUFBWSxTQUFDLGtCQUFrQjswQ0FDL0IsWUFBWSxTQUFDLHlCQUF5Qjt1Q0FDdEMsWUFBWSxTQUFDLHNCQUFzQjtvQ0FDbkMsU0FBUyxTQUFDLFVBQVU7d0JBR3BCLEtBQUs7MEJBR0wsS0FBSzswQkFHTCxLQUFLO3dCQUlMLEtBQUs7aUNBSUwsTUFBTTsyQkFDTixNQUFNOzZCQUNOLE1BQU07K0JBQ04sTUFBTTtpQ0FDTixNQUFNO3lCQUNOLE1BQU07MkJBQ04sTUFBTTt3QkFDTixNQUFNO3VCQUNOLE1BQU07NkJBQ04sTUFBTTs4QkFDTixNQUFNOzJCQUNOLE1BQU07MkJBQ04sTUFBTTttQ0FDTixNQUFNOytCQUNOLE1BQU07d0JBQ04sTUFBTTs4QkFDTixNQUFNOzRCQVVOLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7OEJBV3hDLFlBQVksU0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF3QjdDLG9CQUFDO0NBQUEsQUFySEQsSUFxSEM7U0F0RlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4uL21vZGVscy90cmVlLm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZURyYWdnZWRFbGVtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtZHJhZ2dlZC1lbGVtZW50Lm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZU9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1vcHRpb25zLm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZVZpZXdwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi90cmVlLXZpZXdwb3J0LmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgaW5jbHVkZXMgZnJvbSAnbG9kYXNoL2luY2x1ZGVzJztcclxuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoL3BpY2snO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdUcmVlLCB0cmVlLXJvb3QnLFxyXG4gIHByb3ZpZGVyczogW1RyZWVNb2RlbF0sXHJcbiAgc3R5bGVzOiBbXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8dHJlZS12aWV3cG9ydCAjdmlld3BvcnQ+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYW5ndWxhci10cmVlLWNvbXBvbmVudFwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5ub2RlLWRyYWdnaW5nXT1cInRyZWVEcmFnZ2VkRWxlbWVudC5pc0RyYWdnaW5nKClcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuYW5ndWxhci10cmVlLWNvbXBvbmVudC1ydGxdPVwidHJlZU1vZGVsLm9wdGlvbnMucnRsXCI+XHJcbiAgICAgICAgICAgICAgPHRyZWUtbm9kZS1jb2xsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInRyZWVNb2RlbC5yb290c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbm9kZXNdPVwidHJlZU1vZGVsLnJvb3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFt0cmVlTW9kZWxdPVwidHJlZU1vZGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZXNdPVwie1xyXG4gICAgICAgICAgICBsb2FkaW5nVGVtcGxhdGU6IGxvYWRpbmdUZW1wbGF0ZSxcclxuICAgICAgICAgICAgdHJlZU5vZGVUZW1wbGF0ZTogdHJlZU5vZGVUZW1wbGF0ZSxcclxuICAgICAgICAgICAgdHJlZU5vZGVXcmFwcGVyVGVtcGxhdGU6IHRyZWVOb2RlV3JhcHBlclRlbXBsYXRlLFxyXG4gICAgICAgICAgICB0cmVlTm9kZUZ1bGxUZW1wbGF0ZTogdHJlZU5vZGVGdWxsVGVtcGxhdGVcclxuICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgICA8L3RyZWUtbm9kZS1jb2xsZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDx0cmVlLW5vZGUtZHJvcC1zbG90XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImVtcHR5LXRyZWUtZHJvcC1zbG90XCJcclxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwidHJlZU1vZGVsLmlzRW1wdHlUcmVlKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Ryb3BJbmRleF09XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtub2RlXT1cInRyZWVNb2RlbC52aXJ0dWFsUm9vdFwiPlxyXG4gICAgICAgICAgICAgIDwvdHJlZS1ub2RlLWRyb3Atc2xvdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3RyZWUtdmlld3BvcnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgX25vZGVzOiBhbnlbXTtcclxuICBfb3B0aW9uczogVHJlZU9wdGlvbnM7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoJ2xvYWRpbmdUZW1wbGF0ZScpIGxvYWRpbmdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAQ29udGVudENoaWxkKCd0cmVlTm9kZVRlbXBsYXRlJykgdHJlZU5vZGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAQ29udGVudENoaWxkKCd0cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZScpIHRyZWVOb2RlV3JhcHBlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBDb250ZW50Q2hpbGQoJ3RyZWVOb2RlRnVsbFRlbXBsYXRlJykgdHJlZU5vZGVGdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgndmlld3BvcnQnKSB2aWV3cG9ydENvbXBvbmVudDogVHJlZVZpZXdwb3J0Q29tcG9uZW50O1xyXG5cclxuICAvLyBXaWxsIGJlIGhhbmRsZWQgaW4gbmdPbkNoYW5nZXNcclxuICBASW5wdXQoKSBzZXQgbm9kZXMobm9kZXM6IGFueVtdKSB7XHJcbiAgfTtcclxuXHJcbiAgQElucHV0KCkgc2V0IG9wdGlvbnMob3B0aW9uczogVHJlZU9wdGlvbnMpIHtcclxuICB9O1xyXG5cclxuICBASW5wdXQoKSBzZXQgZm9jdXNlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy50cmVlTW9kZWwuc2V0Rm9jdXModmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IHN0YXRlKHN0YXRlKSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgdG9nZ2xlRXhwYW5kZWQ7XHJcbiAgQE91dHB1dCgpIGFjdGl2YXRlO1xyXG4gIEBPdXRwdXQoKSBkZWFjdGl2YXRlO1xyXG4gIEBPdXRwdXQoKSBub2RlQWN0aXZhdGU7XHJcbiAgQE91dHB1dCgpIG5vZGVEZWFjdGl2YXRlO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Q7XHJcbiAgQE91dHB1dCgpIGRlc2VsZWN0O1xyXG4gIEBPdXRwdXQoKSBmb2N1cztcclxuICBAT3V0cHV0KCkgYmx1cjtcclxuICBAT3V0cHV0KCkgdXBkYXRlRGF0YTtcclxuICBAT3V0cHV0KCkgaW5pdGlhbGl6ZWQ7XHJcbiAgQE91dHB1dCgpIG1vdmVOb2RlO1xyXG4gIEBPdXRwdXQoKSBjb3B5Tm9kZTtcclxuICBAT3V0cHV0KCkgbG9hZE5vZGVDaGlsZHJlbjtcclxuICBAT3V0cHV0KCkgY2hhbmdlRmlsdGVyO1xyXG4gIEBPdXRwdXQoKSBldmVudDtcclxuICBAT3V0cHV0KCkgc3RhdGVDaGFuZ2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHRyZWVNb2RlbDogVHJlZU1vZGVsLFxyXG4gICAgcHVibGljIHRyZWVEcmFnZ2VkRWxlbWVudDogVHJlZURyYWdnZWRFbGVtZW50KSB7XHJcblxyXG4gICAgdHJlZU1vZGVsLmV2ZW50TmFtZXMuZm9yRWFjaCgobmFtZSkgPT4gdGhpc1tuYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKSk7XHJcbiAgICB0cmVlTW9kZWwuc3Vic2NyaWJlVG9TdGF0ZSgoc3RhdGUpID0+IHRoaXMuc3RhdGVDaGFuZ2UuZW1pdChzdGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignYm9keToga2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlkb3duKCRldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLnRyZWVNb2RlbC5pc0ZvY3VzZWQpIHJldHVybjtcclxuICAgIGlmIChpbmNsdWRlcyhbJ2lucHV0JywgJ3RleHRhcmVhJ10sXHJcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGZvY3VzZWROb2RlID0gdGhpcy50cmVlTW9kZWwuZ2V0Rm9jdXNlZE5vZGUoKTtcclxuXHJcbiAgICB0aGlzLnRyZWVNb2RlbC5wZXJmb3JtS2V5QWN0aW9uKGZvY3VzZWROb2RlLCAkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignYm9keTogbW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlZG93bigkZXZlbnQpIHtcclxuICAgIGZ1bmN0aW9uIGlzT3V0c2lkZUNsaWNrKHN0YXJ0RWxlbWVudDogRWxlbWVudCwgbm9kZU5hbWU6IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gIXN0YXJ0RWxlbWVudCA/IHRydWUgOiBzdGFydEVsZW1lbnQubG9jYWxOYW1lID09PSBub2RlTmFtZSA/IGZhbHNlIDogaXNPdXRzaWRlQ2xpY2soc3RhcnRFbGVtZW50LnBhcmVudEVsZW1lbnQsIG5vZGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPdXRzaWRlQ2xpY2soJGV2ZW50LnRhcmdldCwgJ3RyZWUtcm9vdCcpKSB7XHJcbiAgICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgY2hhbmdlcy5ub2Rlcykge1xyXG4gICAgICB0aGlzLnRyZWVNb2RlbC5zZXREYXRhKHtcclxuICAgICAgICBvcHRpb25zOiBjaGFuZ2VzLm9wdGlvbnMgJiYgY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICBub2RlczogY2hhbmdlcy5ub2RlcyAmJiBjaGFuZ2VzLm5vZGVzLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICBldmVudHM6IHBpY2sodGhpcywgdGhpcy50cmVlTW9kZWwuZXZlbnROYW1lcylcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaXplQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMudmlld3BvcnRDb21wb25lbnQuc2V0Vmlld3BvcnQoKTtcclxuICB9XHJcbn1cclxuIl19