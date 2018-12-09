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

Ext.define('MVD.view.users.UserForm', {
    extend: 'Ext.Dialog',
    xtype: 'userform',
    alias: 'widget.userForm',
    requires: [
        'Ext.Dialog',
        'Ext.form.Panel',
        'Ext.data.validator.Email',
        'MVD.view.users.UserFormController'
    ],
    closable: true,
    defaultFocus: 'textfield',
    bodyPadding: 0,
    layout: 'fit',
    maxWidth: 700,
    controller: 'userformcontroller',
    items: [{
            xtype: 'formpanel',
            reference: 'form',
            autoSize: true,
            items: [{
                    xtype: 'textfield',
                    hidden: true,
                    name: 'id'
                }, {
                    xtype: 'containerfield',
                    label: Shared.get(Shared.users.username),
                    required: true,
                    defaults: {
                        flex: 1
                    },
                    items: [{
                            name: 'firstname',
                            placeholder: Shared.get(Shared.users.firstname),
                            required: true
                        }, {
                            name: 'lastname',
                            placeholder: Shared.get(Shared.users.lastname),
                            required: true
                        }]
                }, {
                    xtype: 'emailfield',
                    name: 'email',
                    label: Shared.get(Shared.common.email),
                    allowBlank: false,
                    required: true,
                    validators: 'email'
                }, {
                    xtype: 'passwordfield',
                    allowBlank: false,
                    required: true,
                    label: Shared.get(Shared.users.password),
                    name: 'password'
                }]
        }],
    // We are using standard buttons on the button
    // toolbar, so their text and order are consistent.
    buttons: {
        ok: 'onOK',
        cancel: 'onCancel'
    }
});
