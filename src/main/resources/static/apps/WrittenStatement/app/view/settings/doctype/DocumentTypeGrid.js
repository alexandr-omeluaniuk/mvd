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

Ext.define('WrittenStatement.view.settings.doctype.DocumentTypeGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.column.Action',
        'WrittenStatement.model.DocumentType'
    ],
    title: 'Типы документов',
    alias: 'widget.documentTypeGrid',
    columns: [{
            text: 'Название',
            flex: 1,
            dataIndex: 'name'
        }, {
            xtype: 'actioncolumn',
            width: 30,
            align: 'center',
            items: [{
                    //icon: Promat4.webResources + '/icons/folder_edit.png',
                    tooltip: 'Редактировать'
                }]
        }, {
            xtype: 'actioncolumn',
            width: 30,
            align: 'center',
            items: [{
                    //icon: Promat4.webResources + '/icons/delete.png',
                    tooltip: 'Удалить'
                }]
        }
    ],
    tbar: [{
            xtype: 'button',
            itemId: 'new',
            text: 'Новый тип документа'
        }],
    initComponent: function () {
        var store = Ext.create('Ext.data.Store', {
            model: 'WrittenStatement.model.DocumentType',
            proxy: {
                type: 'ajax',
                url: '/doctype',
                reader: {
                    type: 'json',
                    root: '_embedded.doctype'
                }
            },
            sorters: [{
                    property: 'name',
                    direction: 'ASC'
                }],
            autoLoad: true
        });
        Ext.apply(this, {
            store: store
        });
        this.callParent();
    }
});
