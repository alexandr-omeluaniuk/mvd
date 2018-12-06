Ext.define('MVD.util.Shared', {
    alternateClassName: ['Shared'],
    singleton: true,
    log: function (msg) {
        console.log(msg);
    },
    installAppEvent: null,
    lang: 'en',
    cookieKey: 'mvd-lang',
    defineStartLanguage: function () {
        var cookieLang = MVD.util.Shared.getCookie(MVD.util.Shared.cookieKey);
        if (!cookieLang) {
            var browserLang = navigator.language || navigator.userLanguage;
            console.log('Browser language: ' + browserLang);
            if (browserLang.indexOf('-') !== -1) {
                browserLang = browserLang.substring(0, browserLang.indexOf('-'));
            }
            if (browserLang.indexOf('_') !== -1) {
                browserLang = browserLang.substring(0, browserLang.indexOf('_'));
            }
            MVD.util.Shared.lang = browserLang;
            cookieLang = browserLang;
        } else {
            console.log('User language: ' + cookieLang);
            MVD.util.Shared.lang = cookieLang;
        }
        MVD.util.Shared.setCookie(MVD.util.Shared.cookieKey, cookieLang, 365);
        document.title = MVD.util.Shared.get(MVD.util.Shared.title);
    },
    get: function (obj) {
        return !obj ? 'Translation not found!' : (obj[MVD.util.Shared.lang] ? obj[MVD.util.Shared.lang] : obj['en']);
    },
    getCookie: function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
    },
    setCookie: function (name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    // ========================================================================
    // ========================= TRANSLATIONS =================================
    // ========================================================================
    title: {
        en: 'Police',
        ru: 'МВД'
    },
    nav: {
        dashboard: {
            en: 'Dashboard',
            ru: 'Сводка'
        },
        cases: {
            en: 'Cases',
            ru: 'Служебные документы'
        },
        settings: {
            en: 'Settings',
            ru: 'Настройки'
        },
        caseTypes: {
            en: 'Case types',
            ru: 'Типы служебных документов'
        },
        users: {
            en: 'Users',
            ru: 'Пользователи'
        }
    },
    common: {
        name: {
            en: 'Name',
            ru: 'Название'
        },
        add: {
            en: 'Add',
            ru: 'Добавить'
        },
        saveChanges: {
            en: 'Save changes',
            ru: 'Сохранить изменения'
        },
        changesSaved: {
            en: 'Changes was saved successfully',
            ru: 'Ваши изменения были успешно сохранены'
        },
        recordAdded: {
            en: 'A new record was added successfully',
            ru: 'Новая запись успешно добавлена'
        },
        recordDeleted: {
            en: 'The record was removed successfully',
            ru: 'Запись успешно удалена'
        }
    },
    caseType: {
        daysForNotification: {
            en: 'The day before the case is closed, when you need to send a notification',
            ru: 'Выслать уведомление за число дней до истечения срока документа'
        },
        periodOfExecution: {
            en: 'Period of execution, days',
            ru: 'Срок исполнения документа, в днях'
        },
        nameTemplate: {
            en: 'Case type name',
            ru: 'Название типа служебного документа'
        }
    },
    users: {
        add: {
            en: 'Add new user',
            ru: 'Добавить нового пользователя'
        },
        firstname: {
            en: 'First name',
            ru: 'Имя'
        },
        lastname: {
            en: 'Last name',
            ru: 'Фамилия'
        }
    }
    // ========================================================================
    // ========================================================================
    // ========================================================================
});
MVD.util.Shared.defineStartLanguage();