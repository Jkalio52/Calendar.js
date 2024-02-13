/*! Calendar.js v2.10.11 - Danish | (c) Bunoon 2024 | MIT License */
var __TRANSLATION_OPTIONS = {
    "dayHeaderNames": [
        "man",
        "tir",
        "ons",
        "tor",
        "fre",
        "Lør",
        "Sol"
    ],
    "dayNames": [
        "Mandag",
        "tirsdag",
        "onsdag",
        "torsdag",
        "Fredag",
        "lørdag",
        "Søndag"
    ],
    "dayNamesAbbreviated": [
        "man",
        "tir",
        "ons",
        "tor",
        "fre",
        "Lør",
        "Sol"
    ],
    "monthNames": [
        "januar",
        "februar",
        "marts",
        "April",
        "Kan",
        "juni",
        "juli",
        "august",
        "september",
        "oktober",
        "november",
        "december"
    ],
    "monthNamesAbbreviated": [
        "Jan",
        "feb",
        "Mar",
        "apr",
        "Kan",
        "jun",
        "jul",
        "aug",
        "sep",
        "okt",
        "nov",
        "dec"
    ],
    "previousMonthTooltipText": "Forrige måned",
    "nextMonthTooltipText": "Næste måned",
    "previousDayTooltipText": "Forrige dag",
    "nextDayTooltipText": "Næste dag",
    "previousWeekTooltipText": "Forrige uge",
    "nextWeekTooltipText": "Næste uge",
    "addEventTooltipText": "Tilføj begivenhed",
    "closeTooltipText": "Tæt",
    "exportEventsTooltipText": "Eksporter begivenheder",
    "todayTooltipText": "I dag",
    "refreshTooltipText": "Opdater",
    "searchTooltipText": "Søg",
    "expandDayTooltipText": "Udvid dag",
    "viewAllEventsTooltipText": "Se alle begivenheder",
    "viewFullWeekTooltipText": "Se hele ugen",
    "fromText": "Fra:",
    "toText": "Til:",
    "isAllDayText": "Er hele dagen",
    "titleText": "Titel:",
    "descriptionText": "Beskrivelse:",
    "locationText": "Beliggenhed:",
    "addText": "Tilføje",
    "updateText": "Opdatering",
    "cancelText": "Afbestille",
    "removeEventText": "Fjerne",
    "addEventTitle": "Tilføj begivenhed",
    "editEventTitle": "Rediger begivenhed",
    "exportStartFilename": "eksporterede_begivenheder_",
    "fromTimeErrorMessage": "Vælg venligst et gyldigt 'Fra'-tidspunkt.",
    "toTimeErrorMessage": "Vælg venligst et gyldigt 'Til'-tidspunkt.",
    "toSmallerThanFromErrorMessage": "Vælg en 'Til'-dato, der er større end 'Fra'-datoen.",
    "titleErrorMessage": "Indtast venligst en værdi i feltet 'Titel' (ingen tom plads).",
    "stText": "",
    "ndText": "",
    "rdText": "",
    "thText": "",
    "yesText": "Ja",
    "noText": "Ingen",
    "allDayText": "Hele dagen",
    "allEventsText": "Alle begivenheder",
    "toTimeText": "til",
    "confirmEventRemoveTitle": "Bekræft fjernelse af begivenhed",
    "confirmEventRemoveMessage": "Fjernelse af denne begivenhed kan ikke fortrydes. ",
    "okText": "Okay",
    "exportEventsTitle": "Eksporter begivenheder",
    "selectColorsText": "Vælg Farver",
    "backgroundColorText": "Baggrundsfarve:",
    "textColorText": "Tekstfarve:",
    "borderColorText": "Kantfarve:",
    "searchEventsTitle": "Søg begivenheder",
    "previousText": "Tidligere",
    "nextText": "Næste",
    "matchCaseText": "Match Case",
    "repeatsText": "Gentager:",
    "repeatDaysToExcludeText": "Gentag dage for at ekskludere:",
    "daysToExcludeText": "Dage at ekskludere:",
    "seriesIgnoreDatesText": "Serien ignorer datoer:",
    "repeatsNever": "Aldrig",
    "repeatsEveryDayText": "Hver dag",
    "repeatsEveryWeekText": "Hver uge",
    "repeatsEvery2WeeksText": "Hver 2. uge",
    "repeatsEveryMonthText": "Hver måned",
    "repeatsEveryYearText": "Hvert år",
    "repeatsCustomText": "Brugerdefinerede:",
    "repeatOptionsTitle": "Gentag indstillinger",
    "moreText": "Mere",
    "includeText": "Omfatte:",
    "minimizedTooltipText": "Minimer",
    "restoreTooltipText": "Gendan",
    "removeAllEventsInSeriesText": "Fjern alle begivenheder i serien",
    "createdText": "Oprettet:",
    "organizerNameText": "Arrangør:",
    "organizerEmailAddressText": "Arrangør e-mail:",
    "enableFullScreenTooltipText": "Slå fuldskærmstilstand til",
    "disableFullScreenTooltipText": "Slå fuldskærmstilstand fra",
    "idText": "ID:",
    "expandMonthTooltipText": "Udvid måned",
    "repeatEndsText": "Gentag ender:",
    "noEventsAvailableText": "Ingen tilgængelige begivenheder.",
    "viewFullWeekText": "Se hele ugen",
    "noEventsAvailableFullText": "Der er ingen tilgængelige begivenheder at se.",
    "clickText": "Klik",
    "hereText": "her",
    "toAddANewEventText": "for at tilføje en ny begivenhed.",
    "weekText": "Uge",
    "groupText": "Gruppe:",
    "configurationTooltipText": "Konfiguration",
    "configurationTitleText": "Konfiguration",
    "groupsText": "Grupper",
    "eventNotificationTitle": "Calendar.js",
    "eventNotificationBody": "Begivenheden '{0}' er startet.",
    "optionsText": "Muligheder:",
    "startsWithText": "Starter med",
    "endsWithText": "Ender med",
    "containsText": "Indeholder",
    "displayTabText": "Skærm",
    "enableAutoRefreshForEventsText": "Aktiver automatisk opdatering for begivenheder",
    "enableBrowserNotificationsText": "Aktiver browsermeddelelser",
    "enableTooltipsText": "Aktiver værktøjstip",
    "dayText": "dag",
    "daysText": "dage",
    "hourText": "time",
    "hoursText": "timer",
    "minuteText": "minut",
    "minutesText": "minutter",
    "enableDragAndDropForEventText": "Aktiver træk",
    "organizerTabText": "Arrangør",
    "removeEventsTooltipText": "Fjern begivenheder",
    "confirmEventsRemoveTitle": "Bekræft fjernelse af begivenheder",
    "confirmEventsRemoveMessage": "Fjernelse af disse ikke-gentagne begivenheder kan ikke fortrydes. ",
    "eventText": "Begivenhed",
    "optionalText": "Valgfri",
    "urlText": "URL:",
    "openUrlText": "Åbn URL",
    "thisWeekTooltipText": "Denne uge",
    "dailyText": "Daglige",
    "weeklyText": "Ugentlig",
    "monthlyText": "Månedlige",
    "yearlyText": "Årligt",
    "repeatsByCustomSettingsText": "Ved brugerdefinerede indstillinger",
    "lastUpdatedText": "Sidst opdateret:",
    "advancedText": "Fremskreden",
    "copyText": "Kopi",
    "pasteText": "sæt ind",
    "duplicateText": "Duplikere",
    "showAlertsText": "Vis advarsler",
    "selectDatePlaceholderText": "Vælg dato...",
    "hideDayText": "Skjul dag",
    "notSearchText": "Ikke (modsat)",
    "showHolidaysInTheDisplaysText": "Vis helligdage i hoveddisplayet og titellinjerne",
    "newEventDefaultTitle": "* Ny begivenhed",
    "urlErrorMessage": "Indtast venligst en gyldig URL i feltet 'URL' (eller lad det være tomt).",
    "searchTextBoxPlaceholder": "Søg titel, beskrivelse osv...",
    "currentMonthTooltipText": "Indeværende måned",
    "cutText": "Skære",
    "showMenuTooltipText": "Vis menu",
    "eventTypesText": "Begivenhedstyper",
    "lockedText": "Låst:",
    "typeText": "Type:",
    "sideMenuHeaderText": "Calendar.js",
    "sideMenuDaysText": "Dage",
    "visibleDaysText": "Synlige dage",
    "previousYearTooltipText": "Foregående år",
    "nextYearTooltipText": "Næste år",
    "showOnlyWorkingDaysText": "Vis kun arbejdsdage",
    "exportFilenamePlaceholderText": "Navn (valgfrit)",
    "errorText": "Fejl",
    "exportText": "Eksport",
    "configurationUpdatedText": "Konfiguration opdateret.",
    "eventAddedText": "{0} begivenhed tilføjet.",
    "eventUpdatedText": "{0} begivenhed opdateret.",
    "eventRemovedText": "{0} begivenhed blev fjernet.",
    "eventsRemovedText": "{0} begivenheder blev fjernet.",
    "eventsExportedToText": "Begivenheder eksporteret til {0}.",
    "eventsPastedText": "{0} begivenheder blev indsat.",
    "eventsExportedText": "Begivenheder eksporteret.",
    "copyToClipboardOnlyText": "Kopier kun til udklipsholder",
    "workingDaysText": "Arbejdsdage",
    "weekendDaysText": "Weekenddage",
    "showAsBusyText": "Vis som optaget",
    "selectAllText": "Vælg alle",
    "selectNoneText": "Vælg Ingen",
    "importEventsTooltipText": "Importer begivenheder",
    "eventsImportedText": "{0} hændelser er importeret.",
    "viewFullYearTooltipText": "Se hele året",
    "currentYearTooltipText": "Nuværende år",
    "alertOffsetText": "Advarselsforskydning (minutter):",
    "viewFullDayTooltipText": "Se hele dagen",
    "confirmEventUpdateTitle": "Bekræft begivenhedsopdatering",
    "confirmEventUpdateMessage": "Vil du opdatere begivenheden fra dette tidspunkt frem eller hele serien?",
    "forwardText": "Frem",
    "seriesText": "Serie",
    "viewTimelineTooltipText": "Se tidslinje",
    "nextPropertyTooltipText": "Næste ejendom",
    "noneText": "(ingen)",
    "shareText": "Del",
    "shareStartFilename": "delte_begivenheder_",
    "previousPropertyTooltipText": "Tidligere ejendom",
    "jumpToDateTitle": "Hop til dato",
    "goText": "Gå"
};