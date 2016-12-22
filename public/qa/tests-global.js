/*
 * @Author: 张驰阳
 * @Date:   2016-12-22 17:25:33
 * @Last Modified by:   张驰阳
 * @Last Modified time: 2016-12-22 17:25:49
 */

'use strict';

suite('Global Tests', function() {
    test('page has a valid title', function() {
        assert(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== 'TODO');
    });
});
