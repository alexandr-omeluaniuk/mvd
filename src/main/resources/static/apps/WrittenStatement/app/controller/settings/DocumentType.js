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

Ext.define('WrittenStatement.controller.settings.DocumentType', {
    extend: 'Ext.app.Controller',
    requires: [
        'WrittenStatement.view.settings.doctype.DocumentTypeForm'
    ],
    init: function () {
        this.control({
            'documentTypeGrid #new': {
                click: this.openForm
            },
            'documentTypeForm #create': {
                click: this.create
            }
        });
    },
    openForm: function (view) {
        var form = Ext.create('WrittenStatement.view.settings.doctype.DocumentTypeForm', {
            bindStore: view.up('grid').getStore()
        });
        var win = Ext.create('widget.window', {
            height: '50%',
            width: '50%',
            closable: true,
            modal: true,
            title: 'Новый тип документа',
            layout: 'fit',
            items: [form],
            constrainHeader: true
        });
        win.show();
    },
    create: function (view) {
        var form = view.up('documentTypeForm');
        var id = form.getForm().findField("id").getValue();
        var isEdit = id ? true : false;
        if (form.isValid()) {
            var data = form.getValues();
            var jsonData = Ext.JSON.encode(data);
            Ext.Ajax.request({
                url: '/doctype',
                method: isEdit ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: jsonData,
                success: function () {
                    form.bindStore.load();
                    view.up('window').close();
                }
            });
        }
    }
});
