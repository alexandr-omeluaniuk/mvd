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

Ext.define('WrittenStatement.view.settings.doctype.DocumentTypeForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.*'
    ],
    alias: 'widget.documentTypeForm',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bodyPadding: 10,
    bbar: [{
            xtype: 'button',
            itemId: 'create',
            text: 'Создать',
            formBind: true,
            disabled: true
        }
    ],
    fieldDefaults: {
        labelWidth: 240
    },
    initComponent: function () {
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
        Ext.apply(this, {
            items: [{
                    xtype: 'numberfield',
                    hidden: true,
                    name: 'id'
                }, {
                    xtype: 'textfield',
                    name: 'name',
                    allowBlank: false,
                    afterLabelTextTpl: required,
                    labelStyle: 'font-weight:bold',
                    maxLength: 100,
                    fieldLabel: 'Название для типа документов'
                }, {
                    xtype: 'numberfield',
                    name: 'daysForNotification',
                    fieldLabel: 'Число дней до закрытия документа, когда должно прийти уведомление',
                    minValue: 0
                }]
        });
        this.callParent();
    }
});
