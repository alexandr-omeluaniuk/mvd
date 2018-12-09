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

Ext.define('MVD.view.users.UsersView', {
    extend: 'Ext.Panel',
    xtype: 'usersview',
    alias: 'widget.usersview',
    requires: [
        'MVD.view.users.UsersViewModel',
        'MVD.view.users.UsersViewController',
        'MVD.store.User'
    ],
    controller: 'usersviewcontroller',
    viewModel: {
        type: 'usersviewmodel'
    },
    bind: {
        title: '{title}'
    },
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [{
            xtype: 'grid',
            flex: 1,
            store: {
                type: 'user',
                autoLoad: true
            },
            columns: [{
                    text: Shared.get(Shared.users.firstname),
                    flex: 1,
                    dataIndex: 'firstname'
                }, {
                    text: Shared.get(Shared.users.lastname),
                    flex: 1,
                    dataIndex: 'lastname'
                }, {
                    text: Shared.get(Shared.common.email),
                    flex: 1,
                    dataIndex: 'email'
                }, {
                    text: '',
                    width: 'auto',
                    cell: {
                        tools: [
                            {
                                iconCls: 'x-fa fa-edit',
                                handler: 'editUser'
                            }
                        ]
                    }
                }]
        }],
    tools: [{
            xtype: 'button',
            iconCls: 'x-fa fa-user-plus',
            ui: 'action',
            text: Shared.get(Shared.users.add),
            handler: 'addUser'
        }]
});
