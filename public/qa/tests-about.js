/*
 * @Author: 张驰阳
 * @Date:   2016-12-22 17:25:33
 * @Last Modified by:   张驰阳
 * @Last Modified time: 2016-12-22 17:35:45
 */

'use strict';

suite('"About" Page Tests', function() {
    test('page should contain link to contact page', function() {
        assert($('a[href="/contact"]').length);
    });
});
