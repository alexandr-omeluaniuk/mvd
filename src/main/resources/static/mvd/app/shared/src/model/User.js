/* 
 * The MIT License
 *
 * Copyright 2018 ss.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

Ext.define('MVD.model.User', {
    extend: 'MVD.model.Base',
    requires: [
        'Ext.data.validator.Length'
    ],
    fields: [{
            name: 'id',
            type: 'number'
        }, {
            name: 'email',
            type: 'string'
        }, {
            name: 'password',
            type: 'string'
        }, {
            name: 'firstname',
            type: 'string'
        }, {
            name: 'lastname',
            type: 'string'
        }, {
            name: 'active',
            type: 'boolean'
        }],
    validators: [
        { field: 'email', type: 'length', min: 1, max: 100 },
        { field: 'firstname', type: 'length', min: 1, max: 100 },
        { field: 'lastname', type: 'length', min: 1, max: 100 }
    ],
    proxy: {
        type: 'rest',
        url: '/rest/user',
        reader: {
            type: 'json',
            rootProperty: '_embedded.user'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});