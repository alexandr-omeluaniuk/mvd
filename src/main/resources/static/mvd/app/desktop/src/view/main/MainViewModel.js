/* global Shared */

Ext.define('MVD.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainviewmodel',
    requires: [
        'MVD.util.Shared',
        'MVD.view.casetype.CaseTypeView',
        'MVD.view.users.UsersView'
    ],
    data: {
        name: Shared.get(Shared.title),
        navCollapsed: false,
        navview_max_width: 300,
        navview_min_width: 44,
        topview_height: 75,
        bottomview_height: 50,
        headerview_height: 50,
        footerview_height: 50,
        detailCollapsed: true,
        detailview_width: 10,
        detailview_max_width: 300,
        detailview_min_width: 0
    },
    formulas: {
        navview_width: function (get) {
            return get('navCollapsed') ? get('navview_min_width') : get('navview_max_width');
        },
        detailview_width: function (get) {
            return get('detailCollapsed') ? get('detailview_min_width') : get('detailview_max_width');
        }
    },
    stores: {
        menu: {
            "type": "tree",
            "root": {
                "expanded": true,
                "children": [
                    {"text": Shared.get(Shared.nav.dashboard), "iconCls": "x-fa fa-th-large", "xtype": "homeview", "leaf": true},
                    {"text": Shared.get(Shared.nav.cases), "iconCls": "x-fa fa-files-o", "xtype": "personnelview", "leaf": true},
                    {"text": Shared.get(Shared.nav.settings), "iconCls": "x-fa fa-cogs", "leaf": false, expanded: true, children: [
                            {"text": Shared.get(Shared.nav.caseTypes), "iconCls": "x-fa fa-cog", "xtype": "casetypeview", "leaf": true},
                            {"text": Shared.get(Shared.nav.users), "iconCls": "x-fa fa-users", "xtype": "usersview", "leaf": true}
                    ]}
                ]
            }
        }
    }
});
