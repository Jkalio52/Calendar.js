/*! Calendar.js v2.9.5 | (c) Bunoon | MIT License */
var __TRANSLATION_OPTIONS = {
    "dayHeaderNames": [
        "月",
        "火",
        "結婚した",
        "木",
        "金",
        "土",
        "太陽"
    ],
    "dayNames": [
        "月曜日",
        "火曜日",
        "水曜日",
        "木曜日",
        "金曜日",
        "土曜日",
        "日曜日"
    ],
    "dayNamesAbbreviated": [
        "月",
        "火",
        "結婚した",
        "木",
        "金",
        "土",
        "太陽"
    ],
    "monthNames": [
        "1月",
        "2月",
        "行進",
        "4月",
        "5月",
        "六月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
    ],
    "monthNamesAbbreviated": [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "ジュン",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
    ],
    "previousMonthTooltipText": "前月",
    "nextMonthTooltipText": "来月",
    "previousDayTooltipText": "前日",
    "nextDayTooltipText": "翌日",
    "previousWeekTooltipText": "前の週",
    "nextWeekTooltipText": "来週",
    "addEventTooltipText": "イベントの追加",
    "closeTooltipText": "近い",
    "exportEventsTooltipText": "エクスポートイベント",
    "todayTooltipText": "今日",
    "refreshTooltipText": "リフレッシュ",
    "searchTooltipText": "検索",
    "expandDayTooltipText": "拡張日",
    "viewAllEventsTooltipText": "すべてのイベントを見る",
    "viewFullWeekTooltipText": "週全体を見る",
    "fromText": "から：",
    "toText": "に：",
    "isAllDayText": "終日です",
    "titleText": "タイトル：",
    "descriptionText": "説明：",
    "locationText": "位置：",
    "addText": "追加",
    "updateText": "アップデート",
    "cancelText": "キャンセル",
    "removeEventText": "取り除く",
    "addEventTitle": "イベントの追加",
    "editEventTitle": "イベントの編集",
    "exportStartFilename": "エクスポートされた_イベント_",
    "fromTimeErrorMessage": "有効な「開始」時刻を選択してください。",
    "toTimeErrorMessage": "有効な「終了」時刻を選択してください。",
    "toSmallerThanFromErrorMessage": "「開始」日付よりも大きい「終了」日付を選択してください。",
    "titleErrorMessage": "「タイトル」フィールドに値を入力してください (空白は不可)。",
    "stText": "",
    "ndText": "",
    "rdText": "",
    "thText": "",
    "yesText": "はい",
    "noText": "いいえ",
    "allDayText": "一日中",
    "allEventsText": "すべてのイベント",
    "toTimeText": "に",
    "confirmEventRemoveTitle": "イベントの削除を確認する",
    "confirmEventRemoveMessage": "このイベントを削除すると元に戻すことはできません。",
    "okText": "わかりました",
    "exportEventsTitle": "エクスポートイベント",
    "selectColorsText": "色の選択",
    "backgroundColorText": "背景色:",
    "textColorText": "テキストの色：",
    "borderColorText": "ボーダの色：",
    "searchEventsTitle": "イベントの検索",
    "previousText": "前の",
    "nextText": "次",
    "matchCaseText": "マッチケース",
    "repeatsText": "繰り返し:",
    "repeatDaysToExcludeText": "除外する日を繰り返します:",
    "daysToExcludeText": "除外する日:",
    "seriesIgnoreDatesText": "シリーズの日付を無視:",
    "repeatsNever": "一度もない",
    "repeatsEveryDayText": "毎日",
    "repeatsEveryWeekText": "毎週",
    "repeatsEvery2WeeksText": "2週間ごと",
    "repeatsEveryMonthText": "毎月",
    "repeatsEveryYearText": "毎年",
    "repeatsCustomText": "カスタム：",
    "repeatOptionsTitle": "繰り返しオプション",
    "moreText": "もっと",
    "includeText": "含む：",
    "minimizedTooltipText": "最小化する",
    "restoreTooltipText": "復元する",
    "removeAllEventsInSeriesText": "一連のイベントをすべて削除",
    "createdText": "作成した：",
    "organizerNameText": "主催者:",
    "organizerEmailAddressText": "主催者のメールアドレス:",
    "enableFullScreenTooltipText": "全画面モードをオンにする",
    "disableFullScreenTooltipText": "全画面モードをオフにする",
    "idText": "ID:",
    "expandMonthTooltipText": "月を展開",
    "repeatEndsText": "リピート終了:",
    "noEventsAvailableText": "利用可能なイベントはありません。",
    "viewFullWeekText": "週全体を見る",
    "noEventsAvailableFullText": "閲覧できるイベントはありません。",
    "clickText": "クリック",
    "hereText": "ここ",
    "toAddANewEventText": "新しいイベントを追加します。",
    "weekText": "週",
    "groupText": "グループ：",
    "configurationTooltipText": "構成",
    "configurationTitleText": "構成",
    "groupsText": "グループ",
    "eventNotificationTitle": "Calendar.js",
    "eventNotificationBody": "イベント「{0}」が開始されました。",
    "optionsText": "オプション:",
    "startsWithText": "で始まる",
    "endsWithText": "で終わる",
    "containsText": "含まれています",
    "displayTabText": "画面",
    "enableAutoRefreshForEventsText": "イベントの自動更新を有効にする",
    "enableBrowserNotificationsText": "ブラウザ通知を有効にする",
    "enableTooltipsText": "ツールチップを有効にする",
    "dayText": "日",
    "daysText": "日々",
    "hourText": "時間",
    "hoursText": "時間",
    "minuteText": "分",
    "minutesText": "分",
    "enableDragAndDropForEventText": "ドラッグを有効にする",
    "organizerTabText": "主催者",
    "removeEventsTooltipText": "イベントの削除",
    "confirmEventsRemoveTitle": "イベントの削除の確認",
    "confirmEventsRemoveMessage": "これらの非繰り返しイベントを削除すると、元に戻すことはできません。",
    "eventText": "イベント",
    "optionalText": "オプション",
    "urlText": "URL:",
    "openUrlText": "URLを開く",
    "enableDayNameHeadersText": "曜日名のヘッダーを有効にする",
    "thisWeekTooltipText": "今週",
    "dailyText": "毎日",
    "weeklyText": "毎週",
    "monthlyText": "毎月",
    "yearlyText": "毎年",
    "repeatsByCustomSettingsText": "カスタム設定による",
    "lastUpdatedText": "最終更新：",
    "advancedText": "高度な",
    "copyText": "コピー",
    "pasteText": "ペースト",
    "duplicateText": "重複",
    "showAlertsText": "アラートを表示",
    "selectDatePlaceholderText": "日付を選択してください...",
    "hideDayText": "日を隠す",
    "notSearchText": "そうじゃない（反対）",
    "showHolidaysInTheDisplaysText": "メインディスプレイとタイトルバーに祝日を表示する",
    "newEventDefaultTitle": "* 新しいイベント",
    "urlErrorMessage": "「URL」フィールドに有効な URL を入力してください (または空白のままにしてください)。",
    "searchTextBoxPlaceholder": "タイトル、説明などを検索します。",
    "currentMonthTooltipText": "今月",
    "cutText": "カット",
    "showMenuTooltipText": "メニューを表示",
    "eventTypesText": "イベントの種類",
    "lockedText": "ロック中:",
    "typeText": "タイプ：",
    "sideMenuHeaderText": "Calendar.js",
    "sideMenuDaysText": "日々",
    "visibleDaysText": "見える日",
    "previousYearTooltipText": "前年",
    "nextYearTooltipText": "来年",
    "showOnlyWorkingDaysText": "営業日のみを表示",
    "exportFilenamePlaceholderText": "名前 (オプション)",
    "errorText": "エラー",
    "exportText": "輸出",
    "configurationUpdatedText": "構成が更新されました。",
    "eventAddedText": "{0} イベントが追加されました。",
    "eventUpdatedText": "{0} イベントが更新されました。",
    "eventRemovedText": "{0} イベントが削除されました。",
    "eventsRemovedText": "{0} 個のイベントが削除されました。",
    "eventsExportedToText": "イベントは {0} にエクスポートされました。",
    "eventsPastedText": "{0} 件のイベントが貼り付けられました。",
    "eventsExportedText": "イベントがエクスポートされました。",
    "copyToClipboardOnlyText": "クリップボードにのみコピーします",
    "workingDaysText": "営業日",
    "weekendDaysText": "週末",
    "showAsBusyText": "話中として表示",
    "selectAllText": "すべて選択",
    "selectNoneText": "なしを選択します",
    "importEventsTooltipText": "イベントのインポート",
    "eventsImportedText": "{0} 個のイベントがインポートされました。",
    "viewFullYearTooltipText": "通年を見る",
    "currentYearTooltipText": "今年",
    "alertOffsetText": "アラート オフセット (分):",
    "viewFullDayTooltipText": "一日中見る",
    "confirmEventUpdateTitle": "イベント更新の確認",
    "confirmEventUpdateMessage": "今後のイベントを更新しますか、それともシリーズ全体を更新しますか?",
    "forwardText": "フォワード",
    "seriesText": "シリーズ",
    "viewTimelineTooltipText": "タイムラインをみる",
    "nextPropertyTooltipText": "次の物件",
    "noneText": "（なし）",
    "shareText": "共有",
    "shareStartFilename": "共有イベント_"
};