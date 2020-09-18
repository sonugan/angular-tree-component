import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
var TreeNodeChildrenComponent = /** @class */ (function () {
    function TreeNodeChildrenComponent() {
    }
    TreeNodeChildrenComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tree-node-children',
                    encapsulation: ViewEncapsulation.None,
                    styles: [],
                    template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <div [class.tree-children]=\"true\"\n          [class.tree-children-no-padding]=\"node.options.levelPadding\"\n          *treeAnimateOpen=\"\n            node.isExpanded;\n            speed:node.options.animateSpeed;\n            acceleration:node.options.animateAcceleration;\n            enabled:node.options.animateExpand\">\n        <tree-node-collection\n          *ngIf=\"node.children\"\n          [nodes]=\"node.children\"\n          [templates]=\"templates\"\n          [treeModel]=\"node.treeModel\">\n        </tree-node-collection>\n        <tree-loading-component\n          [style.padding-left]=\"node.getNodePadding()\"\n          class=\"tree-node-loading\"\n          *ngIf=\"!node.children\"\n          [template]=\"templates.loadingTemplate\"\n          [node]=\"node\"\n        ></tree-loading-component>\n      </div>\n    </ng-container>\n  "
                },] },
    ];
    TreeNodeChildrenComponent.propDecorators = {
        node: [{ type: Input }],
        templates: [{ type: Input }]
    };
    return TreeNodeChildrenComponent;
}());
export { TreeNodeChildrenComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNoaWxkcmVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJEO0lBQUE7SUFpQ0EsQ0FBQzs7Z0JBakNBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLGk2QkF3QlQ7aUJBQ0Y7Ozt1QkFFRSxLQUFLOzRCQUNMLEtBQUs7O0lBQ1IsZ0NBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQUhZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RyZWUtbm9kZS1jaGlsZHJlbicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZXM6IFtdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICptb2J4QXV0b3J1bj1cIntkb250RGV0YWNoOiB0cnVlfVwiPlxyXG4gICAgICA8ZGl2IFtjbGFzcy50cmVlLWNoaWxkcmVuXT1cInRydWVcIlxyXG4gICAgICAgICAgW2NsYXNzLnRyZWUtY2hpbGRyZW4tbm8tcGFkZGluZ109XCJub2RlLm9wdGlvbnMubGV2ZWxQYWRkaW5nXCJcclxuICAgICAgICAgICp0cmVlQW5pbWF0ZU9wZW49XCJcclxuICAgICAgICAgICAgbm9kZS5pc0V4cGFuZGVkO1xyXG4gICAgICAgICAgICBzcGVlZDpub2RlLm9wdGlvbnMuYW5pbWF0ZVNwZWVkO1xyXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246bm9kZS5vcHRpb25zLmFuaW1hdGVBY2NlbGVyYXRpb247XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6bm9kZS5vcHRpb25zLmFuaW1hdGVFeHBhbmRcIj5cclxuICAgICAgICA8dHJlZS1ub2RlLWNvbGxlY3Rpb25cclxuICAgICAgICAgICpuZ0lmPVwibm9kZS5jaGlsZHJlblwiXHJcbiAgICAgICAgICBbbm9kZXNdPVwibm9kZS5jaGlsZHJlblwiXHJcbiAgICAgICAgICBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiXHJcbiAgICAgICAgICBbdHJlZU1vZGVsXT1cIm5vZGUudHJlZU1vZGVsXCI+XHJcbiAgICAgICAgPC90cmVlLW5vZGUtY29sbGVjdGlvbj5cclxuICAgICAgICA8dHJlZS1sb2FkaW5nLWNvbXBvbmVudFxyXG4gICAgICAgICAgW3N0eWxlLnBhZGRpbmctbGVmdF09XCJub2RlLmdldE5vZGVQYWRkaW5nKClcIlxyXG4gICAgICAgICAgY2xhc3M9XCJ0cmVlLW5vZGUtbG9hZGluZ1wiXHJcbiAgICAgICAgICAqbmdJZj1cIiFub2RlLmNoaWxkcmVuXCJcclxuICAgICAgICAgIFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZXMubG9hZGluZ1RlbXBsYXRlXCJcclxuICAgICAgICAgIFtub2RlXT1cIm5vZGVcIlxyXG4gICAgICAgID48L3RyZWUtbG9hZGluZy1jb21wb25lbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDaGlsZHJlbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XHJcbiAgQElucHV0KCkgdGVtcGxhdGVzOiBhbnk7XHJcbn1cclxuIl19