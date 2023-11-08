/*! Calendar.js v2.9.10 | (c) Bunoon | MIT License */
var __TRANSLATION_OPTIONS = {
  "dayHeaderNames": [
    "Mo",
    "Di",
    "Mi",
    "Do",
    "Fr",
    "Sa",
    "So"
  ],
  "dayNames": [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag"
  ],
  "dayNamesAbbreviated": [
    "Mo",
    "Di",
    "Mi",
    "Do",
    "Fr",
    "Sa",
    "So"
  ],
  "monthNames": [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ],
  "monthNamesAbbreviated": [
    "Jan",
    "Feb",
    "März",
    "Apr",
    "Mai",
    "Jun",
    "Juli",
    "Aug",
    "Sept",
    "Okt",
    "Nov",
    "Dez"
  ],
  "previousMonthTooltipText": "Vorheriger Monat",
  "nextMonthTooltipText": "Nächsten Monat",
  "previousDayTooltipText": "Vorheriger tag",
  "nextDayTooltipText": "Nächster Tag",
  "previousWeekTooltipText": "Letzte Woche",
  "nextWeekTooltipText": "Nächste Woche",
  "addEventTooltipText": "Ereignis hinzufügen",
  "closeTooltipText": "Schließen",
  "exportEventsTooltipText": "Ereignisse exportieren",
  "todayTooltipText": "Heute",
  "refreshTooltipText": "Aktualisierung",
  "searchTooltipText": "Suchen",
  "expandDayTooltipText": "Tag erweitern",
  "viewAllEventsTooltipText": "Alle Ereignisse anzeigen",
  "viewFullWeekTooltipText": "Ganze Woche anzeigen",
  "fromText": "Aus:",
  "toText": "Zu:",
  "isAllDayText": "Ist ganztägig",
  "titleText": "Titel:",
  "descriptionText": "Beschreibung:",
  "locationText": "Standort:",
  "addText": "Hinzufügen",
  "updateText": "Aktualisieren",
  "cancelText": "Stornieren",
  "removeEventText": "Entfernen",
  "addEventTitle": "Ereignis hinzufügen",
  "editEventTitle": "Ereignis bearbeiten",
  "exportStartFilename": "exportierte_events_",
  "fromTimeErrorMessage": "Bitte wählen Sie eine gültige „Von“-Zeit aus.",
  "toTimeErrorMessage": "Bitte wählen Sie eine gültige Bis-Zeit aus.",
  "toSmallerThanFromErrorMessage": "Bitte wählen Sie ein „Bis“-Datum aus, das größer als das „Von“-Datum ist.",
  "titleErrorMessage": "Bitte geben Sie einen Wert in das Feld „Titel“ ein (kein Leerzeichen).",
  "stText": "",
  "ndText": "",
  "rdText": "",
  "thText": "",
  "yesText": "Ja",
  "noText": "NEIN",
  "allDayText": "Den ganzen Tag",
  "allEventsText": "Alle Veranstaltungen",
  "toTimeText": "Zu",
  "confirmEventRemoveTitle": "Bestätigen Sie das Entfernen des Ereignisses",
  "confirmEventRemoveMessage": "Das Entfernen dieses Ereignisses kann nicht rückgängig gemacht werden. ",
  "okText": "OK",
  "exportEventsTitle": "Ereignisse exportieren",
  "selectColorsText": "Wählen Sie Farben aus",
  "backgroundColorText": "Hintergrundfarbe:",
  "textColorText": "Textfarbe:",
  "borderColorText": "Randfarbe:",
  "searchEventsTitle": "Suchen Sie nach Ereignissen",
  "previousText": "Vorherige",
  "nextText": "Nächste",
  "matchCaseText": "Streichholzetui",
  "repeatsText": "Wiederholungen:",
  "repeatDaysToExcludeText": "Wiederholen Sie die auszuschließenden Tage:",
  "daysToExcludeText": "Auszuschließende Tage:",
  "seriesIgnoreDatesText": "Serien-Ignorierungstermine:",
  "repeatsNever": "Niemals",
  "repeatsEveryDayText": "Täglich",
  "repeatsEveryWeekText": "Jede Woche",
  "repeatsEvery2WeeksText": "Alle 2 Wochen",
  "repeatsEveryMonthText": "Jeden Monat",
  "repeatsEveryYearText": "Jedes Jahr",
  "repeatsCustomText": "Brauch:",
  "repeatOptionsTitle": "Wiederholungsoptionen",
  "moreText": "Mehr",
  "includeText": "Enthalten:",
  "minimizedTooltipText": "Minimieren",
  "restoreTooltipText": "Wiederherstellen",
  "removeAllEventsInSeriesText": "Alle Ereignisse in Serie entfernen",
  "createdText": "Erstellt:",
  "organizerNameText": "Veranstalter:",
  "organizerEmailAddressText": "E-Mail des Veranstalters:",
  "enableFullScreenTooltipText": "Aktivieren Sie den Vollbildmodus",
  "disableFullScreenTooltipText": "Deaktivieren Sie den Vollbildmodus",
  "idText": "AUSWEIS:",
  "expandMonthTooltipText": "Erweitern Sie Monat",
  "repeatEndsText": "Wiederholung endet:",
  "noEventsAvailableText": "Keine Veranstaltungen verfügbar.",
  "viewFullWeekText": "Ganze Woche anzeigen",
  "noEventsAvailableFullText": "Es sind keine Ereignisse zum Anzeigen verfügbar.",
  "clickText": "Klicken",
  "hereText": "Hier",
  "toAddANewEventText": "um ein neues Ereignis hinzuzufügen.",
  "weekText": "Woche",
  "groupText": "Gruppe:",
  "configurationTooltipText": "Aufbau",
  "configurationTitleText": "Aufbau",
  "groupsText": "Gruppen",
  "eventNotificationTitle": "Calendar.js",
  "eventNotificationBody": "Das Ereignis „{0}“ hat begonnen.",
  "optionsText": "Optionen:",
  "startsWithText": "Beginnt mit",
  "endsWithText": "Endet mit",
  "containsText": "Enthält",
  "displayTabText": "Anzeige",
  "enableAutoRefreshForEventsText": "Aktivieren Sie die automatische Aktualisierung für Ereignisse",
  "enableBrowserNotificationsText": "Aktivieren Sie Browserbenachrichtigungen",
  "enableTooltipsText": "Tooltips aktivieren",
  "dayText": "Tag",
  "daysText": "Tage",
  "hourText": "Stunde",
  "hoursText": "Std.",
  "minuteText": "Minute",
  "minutesText": "Protokoll",
  "enableDragAndDropForEventText": "Ziehen aktivieren",
  "organizerTabText": "Veranstalter",
  "removeEventsTooltipText": "Ereignisse entfernen",
  "confirmEventsRemoveTitle": "Bestätigen Sie das Entfernen der Ereignisse",
  "confirmEventsRemoveMessage": "Das Entfernen dieser sich nicht wiederholenden Ereignisse kann nicht rückgängig gemacht werden. ",
  "eventText": "Ereignis",
  "optionalText": "Optional",
  "urlText": "URL:",
  "openUrlText": "Öffne URL",
  "enableDayNameHeadersText": "Tagesnamen-Header aktivieren",
  "thisWeekTooltipText": "Diese Woche",
  "dailyText": "Täglich",
  "weeklyText": "Wöchentlich",
  "monthlyText": "Monatlich",
  "yearlyText": "Jährlich",
  "repeatsByCustomSettingsText": "Durch benutzerdefinierte Einstellungen",
  "lastUpdatedText": "Letzte Aktualisierung:",
  "advancedText": "Fortschrittlich",
  "copyText": "Kopieren",
  "pasteText": "Paste",
  "duplicateText": "Duplikat",
  "showAlertsText": "Benachrichtigungen anzeigen",
  "selectDatePlaceholderText": "Datum auswählen...",
  "hideDayText": "Verstecktag",
  "notSearchText": "Nicht (Gegenteil)",
  "showHolidaysInTheDisplaysText": "Feiertage in der Hauptanzeige und in der Titelleiste anzeigen",
  "newEventDefaultTitle": "* Neues Event",
  "urlErrorMessage": "Bitte geben Sie eine gültige URL in das Feld „URL“ ein (oder lassen Sie es leer).",
  "searchTextBoxPlaceholder": "Suchen Sie nach Titel, Beschreibung usw.",
  "currentMonthTooltipText": "Aktueller Monat",
  "cutText": "Schneiden",
  "showMenuTooltipText": "Zeige das Menü",
  "eventTypesText": "Ereignistypen",
  "lockedText": "Gesperrt:",
  "typeText": "Typ:",
  "sideMenuHeaderText": "Calendar.js",
  "sideMenuDaysText": "Tage",
  "visibleDaysText": "Sichtbare Tage",
  "previousYearTooltipText": "Vorheriges Jahr",
  "nextYearTooltipText": "Nächstes Jahr",
  "showOnlyWorkingDaysText": "Nur Arbeitstage anzeigen",
  "exportFilenamePlaceholderText": "Name: (Optional)",
  "errorText": "Fehler",
  "exportText": "Export",
  "configurationUpdatedText": "Konfiguration aktualisiert.",
  "eventAddedText": "{0} Veranstaltung hinzugefügt.",
  "eventUpdatedText": "{0} Veranstaltung aktualisiert.",
  "eventRemovedText": "{0} Ereignis entfernt.",
  "eventsRemovedText": "{0} Ereignisse entfernt.",
  "eventsExportedToText": "Ereignisse nach {0} exportiert.",
  "eventsPastedText": "{0} Ereignisse eingefügt.",
  "eventsExportedText": "Ereignisse exportiert.",
  "copyToClipboardOnlyText": "Nur in die Zwischenablage kopieren",
  "workingDaysText": "Arbeitstage",
  "weekendDaysText": "Wochenendtage",
  "showAsBusyText": "Als beschäftigt anzeigen",
  "selectAllText": "Wählen Sie Alle",
  "selectNoneText": "Nichts ausgewählt",
  "importEventsTooltipText": "Ereignisse importieren",
  "eventsImportedText": "{0} Ereignisse importiert.",
  "viewFullYearTooltipText": "Ganzes Jahr anzeigen",
  "currentYearTooltipText": "Laufendes Jahr",
  "alertOffsetText": "Alarm-Offset (Minuten):",
  "viewFullDayTooltipText": "Ganzen Tag anzeigen",
  "confirmEventUpdateTitle": "Bestätigen Sie die Ereignisaktualisierung",
  "confirmEventUpdateMessage": "Möchten Sie die Veranstaltung ab diesem Zeitpunkt oder die gesamte Serie aktualisieren?",
  "forwardText": "Nach vorne",
  "seriesText": "Serie",
  "viewTimelineTooltipText": "Zeitleiste anzeigen",
  "nextPropertyTooltipText": "Nächste Eigenschaft",
  "noneText": "(keiner)",
  "shareText": "Aktie",
  "shareStartFilename": "shared_events_",
  "previousPropertyTooltipText": "Vorheriges Eigentum"
};