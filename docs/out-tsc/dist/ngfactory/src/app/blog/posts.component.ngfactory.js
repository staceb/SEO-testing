"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./posts.component.scss.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/common");
var i3 = require("../../../../../src/app/blog/posts.component");
var i4 = require("@angular/platform-browser");
var styles_PostsComponent = [i0.styles];
exports.RenderType_PostsComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_PostsComponent, data: {} });
function View_PostsComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'li', [['class',
                'list-group-item']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n                '])), (_l()(),
            i1.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ''])), (_l()(), i1.ɵted(null, ['\n            ']))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.title;
        _ck(_v, 3, 0, currVal_0);
    });
}
function View_PostsComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 7, 'div', [['class',
                'jumbotron']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Blogist'])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['This is the best resource for the best web development posts.'])),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n'])),
        (_l()(), i1.ɵeld(0, null, null, 10, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 7, 'div', [['class',
                'col-xs-12 col-md-12']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 4, 'ul', [['class', 'list-group']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n            '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PostsComponent_1)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.posts;
        _ck(_v, 16, 0, currVal_0);
    }, null);
}
exports.View_PostsComponent_0 = View_PostsComponent_0;
function View_PostsComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-posts', [], null, null, null, View_PostsComponent_0, exports.RenderType_PostsComponent)),
        i1.ɵdid(114688, null, 0, i3.PostsComponent, [i4.Meta, i4.Title], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_PostsComponent_Host_0 = View_PostsComponent_Host_0;
exports.PostsComponentNgFactory = i1.ɵccf('app-posts', i3.PostsComponent, View_PostsComponent_Host_0, {}, {}, []);
//# sourceMappingURL=posts.component.ngfactory.js.map