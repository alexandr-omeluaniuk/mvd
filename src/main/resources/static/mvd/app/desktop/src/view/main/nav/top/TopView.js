Ext.define('MVD.view.main.nav.top.TopView', {
    extend: 'Ext.Toolbar',
    xtype: 'topview',
    cls: 'topview',
    shadow: false,
    items: [
        {
            xtype: 'container',
            cls: 'topviewtext',
            bind: {
                html: '<i class="x-fa fa-shield" style="font-style: normal;"></i> {name}',
                hidden: '{navCollapsed}'
            }
        },
        '->',
        {
            xtype: 'button',
            ui: 'topviewbutton',
            reference: 'navtoggle',
            handler: 'onTopViewNavToggle',
            iconCls: 'x-fa fa-navicon'
        }
    ]
});