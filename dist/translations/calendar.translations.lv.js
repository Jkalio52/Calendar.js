/*! Calendar.js v2.10.10 - Latvian | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
    "dayHeaderNames": [
        "Pirmd",
        "Otr",
        "Trešd",
        "Ce",
        "Piekt",
        "sestdien",
        "Sv"
    ],
    "dayNames": [
        "pirmdiena",
        "otrdiena",
        "trešdiena",
        "ceturtdiena",
        "piektdiena",
        "sestdiena",
        "svētdiena"
    ],
    "dayNamesAbbreviated": [
        "Pirmd",
        "Otr",
        "Trešd",
        "Ce",
        "Piekt",
        "sestdien",
        "Sv"
    ],
    "monthNames": [
        "janvārī",
        "februāris",
        "marts",
        "aprīlis",
        "maijā",
        "jūnijs",
        "jūlijā",
        "augusts",
        "septembris",
        "oktobris",
        "novembris",
        "decembris"
    ],
    "monthNamesAbbreviated": [
        "janvāris",
        "febr",
        "marts",
        "apr",
        "maijā",
        "jūnijs",
        "jūl",
        "augusts",
        "sept",
        "okt",
        "nov",
        "decembris"
    ],
    "previousMonthTooltipText": "Iepriekšējais mēnesis",
    "nextMonthTooltipText": "Nākammēnes",
    "previousDayTooltipText": "Iepriekšējā diena",
    "nextDayTooltipText": "Nākamā diena",
    "previousWeekTooltipText": "Iepriekšējā nedēļa",
    "nextWeekTooltipText": "Nākamnedēļ",
    "addEventTooltipText": "Pievienot notikumu",
    "closeTooltipText": "Aizvērt",
    "exportEventsTooltipText": "Eksporta notikumi",
    "todayTooltipText": "Šodien",
    "refreshTooltipText": "atjaunot",
    "searchTooltipText": "Meklēt",
    "expandDayTooltipText": "Paplašināt dienu",
    "viewAllEventsTooltipText": "Skatīt visus notikumus",
    "viewFullWeekTooltipText": "Skatīt visu nedēļu",
    "fromText": "No:",
    "toText": "Kam:",
    "isAllDayText": "Ir visu dienu",
    "titleText": "Nosaukums:",
    "descriptionText": "Apraksts:",
    "locationText": "Atrašanās vieta:",
    "addText": "Pievienot",
    "updateText": "Atjaunināt",
    "cancelText": "Atcelt",
    "removeEventText": "Noņemt",
    "addEventTitle": "Pievienot notikumu",
    "editEventTitle": "Rediģēt notikumu",
    "exportStartFilename": "eksportētie_notikumi_",
    "fromTimeErrorMessage": "Lūdzu, atlasiet derīgu “No” laiku.",
    "toTimeErrorMessage": "Lūdzu, atlasiet derīgu \"Līdz\" laiku.",
    "toSmallerThanFromErrorMessage": "Lūdzu, atlasiet datumu “Līdz”, kas ir lielāks par datumu “No”.",
    "titleErrorMessage": "Lūdzu, ievadiet vērtību laukā \"Nosaukums\" (bez tukšas vietas).",
    "stText": "",
    "ndText": "",
    "rdText": "",
    "thText": "",
    "yesText": "Jā",
    "noText": "Nē",
    "allDayText": "Visu dienu",
    "allEventsText": "Visi notikumi",
    "toTimeText": "uz",
    "confirmEventRemoveTitle": "Apstipriniet notikumu noņemšanu",
    "confirmEventRemoveMessage": "Šī pasākuma noņemšanu nevar atsaukt. ",
    "okText": "labi",
    "exportEventsTitle": "Eksporta notikumi",
    "selectColorsText": "Izvēlieties Krāsas",
    "backgroundColorText": "Fona krāsa:",
    "textColorText": "Teksta krāsa:",
    "borderColorText": "Apmales krāsa:",
    "searchEventsTitle": "Meklēt notikumus",
    "previousText": "Iepriekšējais",
    "nextText": "Nākamais",
    "matchCaseText": "Sērkociņu futrālis",
    "repeatsText": "Atkārtojas:",
    "repeatDaysToExcludeText": "Atkārtotās dienas, kas jāizslēdz:",
    "daysToExcludeText": "Dienas, kas jāizslēdz:",
    "seriesIgnoreDatesText": "Sērijas ignorēšanas datumi:",
    "repeatsNever": "Nekad",
    "repeatsEveryDayText": "Katru dienu",
    "repeatsEveryWeekText": "Katru nedēļu",
    "repeatsEvery2WeeksText": "Ik pēc 2 nedēļām",
    "repeatsEveryMonthText": "Katru mēnesi",
    "repeatsEveryYearText": "Katru gadu",
    "repeatsCustomText": "Pielāgots:",
    "repeatOptionsTitle": "Atkārtojiet opcijas",
    "moreText": "Vairāk",
    "includeText": "Iekļauts:",
    "minimizedTooltipText": "Minimizēt",
    "restoreTooltipText": "Atjaunot",
    "removeAllEventsInSeriesText": "Noņemiet visus sērijas notikumus",
    "createdText": "Izveidots:",
    "organizerNameText": "Organizators:",
    "organizerEmailAddressText": "Organizatora e-pasts:",
    "enableFullScreenTooltipText": "Ieslēdziet pilnekrāna režīmu",
    "disableFullScreenTooltipText": "Izslēdziet pilnekrāna režīmu",
    "idText": "ID:",
    "expandMonthTooltipText": "Izvērst mēnesi",
    "repeatEndsText": "Atkārtošanas beigas:",
    "noEventsAvailableText": "Nav pieejams neviens pasākums.",
    "viewFullWeekText": "Skatīt visu nedēļu",
    "noEventsAvailableFullText": "Nav apskatāmu pasākumu.",
    "clickText": "Klikšķis",
    "hereText": "šeit",
    "toAddANewEventText": "lai pievienotu jaunu notikumu.",
    "weekText": "nedēļa",
    "groupText": "Grupa:",
    "configurationTooltipText": "Konfigurācija",
    "configurationTitleText": "Konfigurācija",
    "groupsText": "Grupas",
    "eventNotificationTitle": "Calendar.js",
    "eventNotificationBody": "Pasākums '{0}' ir sācies.",
    "optionsText": "Iespējas:",
    "startsWithText": "Sākas ar",
    "endsWithText": "Beidzas ar",
    "containsText": "Satur",
    "displayTabText": "Displejs",
    "enableAutoRefreshForEventsText": "Iespējot notikumu automātisko atsvaidzināšanu",
    "enableBrowserNotificationsText": "Iespējot pārlūkprogrammas paziņojumus",
    "enableTooltipsText": "Iespējot rīka padomus",
    "dayText": "diena",
    "daysText": "dienas",
    "hourText": "stunda",
    "hoursText": "stundas",
    "minuteText": "minūte",
    "minutesText": "minūtes",
    "enableDragAndDropForEventText": "Iespējot vilkšanu",
    "organizerTabText": "Organizators",
    "removeEventsTooltipText": "Noņemt notikumus",
    "confirmEventsRemoveTitle": "Apstipriniet notikumu noņemšanu",
    "confirmEventsRemoveMessage": "Šo neatkārtojamo notikumu noņemšanu nevar atsaukt. ",
    "eventText": "Pasākums",
    "optionalText": "Neobligāti",
    "urlText": "URL:",
    "openUrlText": "Atveriet URL",
    "thisWeekTooltipText": "Šonedēļ",
    "dailyText": "Ikdienas",
    "weeklyText": "Iknedēļas",
    "monthlyText": "Ikmēneša",
    "yearlyText": "Ik gadu",
    "repeatsByCustomSettingsText": "Pēc pielāgotajiem iestatījumiem",
    "lastUpdatedText": "Pēdējoreiz atjaunots:",
    "advancedText": "Papildu",
    "copyText": "Kopēt",
    "pasteText": "Ielīmēt",
    "duplicateText": "Dublikāts",
    "showAlertsText": "Rādīt brīdinājumus",
    "selectDatePlaceholderText": "Izvēlieties datumu...",
    "hideDayText": "Slēpšanas diena",
    "notSearchText": "Nav (pretēji)",
    "showHolidaysInTheDisplaysText": "Rādīt svētku dienas galvenajā displejā un virsrakstjoslās",
    "newEventDefaultTitle": "* Jauns notikums",
    "urlErrorMessage": "Lūdzu, ievadiet derīgu URL laukā \"Url\" (vai atstājiet tukšu).",
    "searchTextBoxPlaceholder": "Meklēt virsrakstu, aprakstu utt...",
    "currentMonthTooltipText": "Tekošais mēnesis",
    "cutText": "Griezt",
    "showMenuTooltipText": "Rādīt izvēlni",
    "eventTypesText": "Pasākumu veidi",
    "lockedText": "Bloķēts:",
    "typeText": "Veids:",
    "sideMenuHeaderText": "Calendar.js",
    "sideMenuDaysText": "Dienas",
    "visibleDaysText": "Redzamās dienas",
    "previousYearTooltipText": "Iepriekšējais gads",
    "nextYearTooltipText": "Nākamgad",
    "showOnlyWorkingDaysText": "Rādīt tikai darba dienas",
    "exportFilenamePlaceholderText": "Vārds (neobligāti)",
    "errorText": "Kļūda",
    "exportText": "Eksportēt",
    "configurationUpdatedText": "Konfigurācija atjaunināta.",
    "eventAddedText": "Pievienots {0} pasākums.",
    "eventUpdatedText": "Atjaunināts {0} pasākums.",
    "eventRemovedText": "{0} pasākums ir noņemts.",
    "eventsRemovedText": "Noņemti {0} pasākumi.",
    "eventsExportedToText": "Notikumi eksportēti uz {0}.",
    "eventsPastedText": "Ielīmēti {0} pasākumi.",
    "eventsExportedText": "Pasākumi eksportēti.",
    "copyToClipboardOnlyText": "Kopēt tikai starpliktuvē",
    "workingDaysText": "Darba dienas",
    "weekendDaysText": "Nedēļas nogales dienas",
    "showAsBusyText": "Rādīt kā aizņemtu",
    "selectAllText": "Izvēlēties visus",
    "selectNoneText": "Atlasiet Nav",
    "importEventsTooltipText": "Importēt notikumus",
    "eventsImportedText": "Importēti {0} pasākumi.",
    "viewFullYearTooltipText": "Skatīt visu gadu",
    "currentYearTooltipText": "Šis gads",
    "alertOffsetText": "Brīdinājuma nobīde (minūtēs):",
    "viewFullDayTooltipText": "Skatīt visu dienu",
    "confirmEventUpdateTitle": "Apstipriniet notikumu atjauninājumu",
    "confirmEventUpdateMessage": "Vai vēlaties atjaunināt notikumu no šī brīža vai visu sēriju?",
    "forwardText": "Uz priekšu",
    "seriesText": "sērija",
    "viewTimelineTooltipText": "Skatīt laika skalu",
    "nextPropertyTooltipText": "Nākamais īpašums",
    "noneText": "(nav)",
    "shareText": "Dalīties",
    "shareStartFilename": "share_events_",
    "previousPropertyTooltipText": "Iepriekšējais īpašums",
    "jumpToDateTitle": "Pāriet uz datumu",
    "goText": "Aiziet"
};