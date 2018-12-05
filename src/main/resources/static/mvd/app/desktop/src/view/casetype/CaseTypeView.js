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

Ext.define('MVD.view.casetype.CaseTypeView', {
    extend: 'Ext.Panel',
    xtype: 'casetypeview',
    alias: 'widget.casetypeview',
    requires: [
        'Ext.grid.Grid',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.plugin.Editable',

        'MVD.store.CaseType',
        'MVD.view.casetype.CaseTypeViewController',
        'MVD.view.casetype.CaseTypeViewModel'
    ],
    controller: 'casetypeviewcontroller',
    viewModel: {
        type: 'casetypeviewmodel'
    },
    bind: {
        title: '{title}'
    },
    layout: 'fit',
    items: [{
            xtype: 'grid',
            modelValidation: true,
            markDirty: true,
            platformConfig: {
                desktop: {
                    plugins: {
                        gridcellediting: true
                    }
                },

                '!desktop': {
                    plugins: {
                        grideditable: true
                    }
                }
            },
            selectable: {
                rows: false,
                cells: true
            },
            store: {
                type: 'casetype',
                autoLoad: true
            },
            columns: [{
                    text: Shared.get(Shared.common.name),
                    flex: 1,
                    dataIndex: 'name',
                    editable: true,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false,
                        required: true,
                        minLength: 1,
                        maxLength: 100
                    }
                }, {
                    text: Shared.get(Shared.caseType.periodOfExecution),
                    width: 300,
                    dataIndex: 'periodOfExecution',
                    editable: true,
                    editor: {
                        xtype: 'numberfield',
                        required: true,
                        minValue: 1
                    }
                }, {
                    text: Shared.get(Shared.caseType.daysForNotification),
                    width: 300,
                    dataIndex: 'daysForNotification',
                    editable: true,
                    editor: {
                        xtype: 'numberfield',
                        minValue: 0
                    }
                }, {
                    text: '',
                    width: 50,
                    cell: {
                        tools: {
                            close: 'delete'
                        }
                    }
                }]
        }],
    tools: [{
            xtype: 'button',
            text: Shared.get(Shared.common.saveChanges),
            ui: 'action',
            iconCls: 'x-fa fa-save',
            handler: 'saveChanges'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            ui: 'action',
            text: Shared.get(Shared.common.add),
            handler: 'add'
        }]
});
