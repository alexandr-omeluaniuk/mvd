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

/* global Shared */

Ext.define('MVD.view.casetype.CaseTypeViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.casetypeviewcontroller',
    requires: [
        'Ext.MessageBox',
        'Ext.Toast'
    ],
    add: function (btn) {
        var store = this.getView().down('grid').getStore();
        var newRecord = Ext.create('MVD.model.CaseType', {
            id: null,
            name: '<' + Shared.get(Shared.caseType.nameTemplate) + '>',
            periodOfExecution: 1
        });
        newRecord.set('id', null);
        newRecord.save({
            callback: function () {
                Ext.toast({
                    message: Shared.get(Shared.common.recordAdded),
                    timeout: 1000
                });
                store.load();
            }
        });
    },
    delete: function (view, event) {
        var store = this.getView().down('grid').getStore();
        var record = event.record;
        record.erase({
            success: function () {
                Ext.toast({
                    message: Shared.get(Shared.common.recordDeleted),
                    timeout: 1000
                });
                store.load();
            }
        });
    },
    saveChanges: function () {
        var store = this.getView().down('grid').getStore();
        store.each(function (r) {
            var id = r.data.id;
            if (typeof id === 'string') {
                r.set('id', null);
            }
        });
        store.sync({
            success: function () {
                Ext.toast({
                    message: Shared.get(Shared.common.changesSaved),
                    timeout: 1000
                });
                store.load();
            }
        });
    }
});
