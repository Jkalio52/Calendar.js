/*
 * Calendar.js Library v0.6.0
 *
 * Copyright 2021 Bunoon
 * Released under the GNU AGPLv3 license
 */

 
/**
 * Day Event.
 * 
 * This is the object format that is used to store the details about a day event.
 *
 * @property    {string}    id                                          The ID of for the event.
 * @property    {string}    title                                       The title of the event.
 * @property    {Object}    from                                        The date that the event occurs from.
 * @property    {Object}    to                                          The date that the event runs until.
 * @property    {string}    description                                 The in depth description of the event.
 * @property    {string}    location                                    The location of the event.
 * @property    {string}    color                                       The color that should be used for the event (overrides all others).
 * @property    {string}    colorText                                   The color that should be used for the event text (overrides all others).
 * @property    {string}    colorBorder                                 The color that should be used for the event border (overrides all others).
 * @property    {boolean}   isAllDay                                    States if this event is for all-day.
 * @property    {number}    repeatEvery                                 States how often the event should repeat (0 = Never, 1 = Every Day, 2 = Every Week, 3 = Every Month, 4 = Every Year).
 * @property    {Object[]}  repeatEveryExcludeDays                      States the days that should be excluded when an event is repeated.
 */


/**
 * Holiday.
 * 
 * This is the object format that is used to display a holiday.
 *
 * @property    {number}    day                                         The day that the holiday occurs.
 * @property    {number}    month                                       The month that the holiday occurs.
 * @property    {string}    title                                       The title for the holiday (i.e. Christmas Day).
 */


/**
 * Options - Events.
 * 
 * These are the properties that store the events that should be fired when various actions are triggered.
 *
 * @property    {Object}    onPreviousMonth                             Specifies an event that will be triggered when the "Previous Month" button is pressed.
 * @property    {Object}    onNextMonth                                 Specifies an event that will be triggered when the "Next Month" button is pressed.
 * @property    {Object}    onToday                                     Specifies an event that will be triggered when the "Today" button is pressed.
 * @property    {Object}    onEventAdded                                Specifies an event that will be triggered when an event is added (passes the event to the function).
 * @property    {Object}    onEventUpdated                              Specifies an event that will be triggered when an event is updated (passes the event to the function).
 * @property    {Object}    onEventRemoved                              Specifies an event that will be triggered when an event is removed (passes the event to the function).
 * @property    {Object}    onEventsAdded                               Specifies an event that will be triggered when events are added (passes the events to the function).
 * @property    {Object}    onEventsCleared                             Specifies an event that will be triggered when the events are cleared.
 * @property    {Object}    onEventsExported                            Specifies an event that will be triggered when the "Export Events" button is pressed.
 */


/**
 * Options.
 * 
 * These are the options that are used to control how Calendar.js works and renders.
 *
 * @property    {string}    previousMonthTooltipText                    The tooltip text that should be used for for the "Previous Month" button.
 * @property    {string}    nextMonthTooltipText                        The tooltip text that should be used for for the "Next Month" button.
 * @property    {string}    previousDayTooltipText                      The tooltip text that should be used for for the "Previous Day" button.
 * @property    {string}    nextDayTooltipText                          The tooltip text that should be used for for the "Next Day" button.
 * @property    {string}    previousWeekTooltipText                     The tooltip text that should be used for for the "Previous Week" button.
 * @property    {string}    nextWeekTooltipText                         The tooltip text that should be used for for the "Next Week" button.
 * @property    {string}    addEventTooltipText                         The tooltip text that should be used for for the "Add Event" button.
 * @property    {string}    closeTooltipText                            The tooltip text that should be used for for the "Close" button.
 * @property    {string}    exportEventsTooltipText                     The tooltip text that should be used for for the "Export Events" button.
 * @property    {string}    listAllEventsTooltipText                    The tooltip text that should be used for for the "View All Events" button.
 * @property    {string}    listWeekEventsTooltipText                   The tooltip text that should be used for for the "View Current Week Events" button.
 * @property    {string}    todayTooltipText                            The tooltip text that should be used for for the "Today" button.
 * @property    {string}    refreshTooltipText                          The tooltip text that should be used for for the "Refresh" button.
 * @property    {string}    searchTooltipText                           The tooltip text that should be used for for the "Search" button.
 * @property    {string}    expandDayTooltipText                        The tooltip text that should be used for for the "Expand Day" button.
 * @property    {Object[]}  dayHeaderNames                              The names to use for the day headers (defaults to '[ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]').
 * @property    {Object[]}  dayNames                                    The full names (defaults to '[ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]').
 * @property    {string}    fromText                                    The text that should be displayed for the "From:" label.
 * @property    {string}    toText                                      The text that should be displayed for the "To:" label.
 * @property    {string}    isAllDayText                                The text that should be displayed for the "Is All-Day" label.
 * @property    {string}    titleText                                   The text that should be displayed for the "Title:" label.
 * @property    {string}    descriptionText                             The text that should be displayed for the "Description:" label.
 * @property    {string}    locationText                                The text that should be displayed for the "Location:" label.
 * @property    {string}    addText                                     The text that should be displayed for the "Add" button.
 * @property    {string}    updatedText                                 The text that should be displayed for the "Update" button.
 * @property    {string}    cancelText                                  The text that should be displayed for the "Cancel" button.
 * @property    {string}    removeEventText                             The text that should be displayed for the "Remove Event" button.
 * @property    {string}    addEventTitle                               The title bar text that is shown for the "Add Event" label.
 * @property    {string}    editEventTitle                              The title bar text that is shown for the "Edit Event" label.
 * @property    {string}    monthNames                                  The names to use for months (defaults to '[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]').
 * @property    {boolean}   showDayNumberOrdinals                       States if the day ordinal values should be shown (defaults to true).  
 * @property    {boolean}   dragAndDropForEventsEnabled                 States if dragging and dropping events around the days of the month is enabled (defaults to true).
 * @property    {string}    exportStartFilename                         The starting filename that should be used when exporting all the calendar events (defaults to "exported_events_").
 * @property    {string}    fromTimeErrorMessage                        The error message shown for the "Please select a valid 'From' time." label.
 * @property    {string}    toTimeErrorMessage                          The error message shown for the "Please select a valid 'To' time." label.
 * @property    {string}    toSmallerThanFromErrorMessage               The error message shown for the "Please select a 'To' date that is larger than the 'From' date." label.
 * @property    {string}    titleErrorMessage                           The error message shown for the "Please enter a value in the 'Title' field (no empty space)." label.
 * @property    {string}    stText                                      The day ordinal text for "st".
 * @property    {string}    ndText                                      The day ordinal text for "nd".
 * @property    {string}    rdText                                      The day ordinal text for "rd".
 * @property    {string}    thText                                      The day ordinal text for "th".
 * @property    {number}    maximumEventsPerDayDisplay                  The maximum number of events that should be display per day in the main calendar display (defaults to 3).
 * @property    {string}    yesText                                     The text that should be displayed for the "Yes" label.
 * @property    {string}    noText                                      The text that should be displayed for the "No" label.
 * @property    {number}    extraSelectableYearsAhead                   The number of extra years ahead that are selectable in the drop down (defaults to 51).
 * @property    {string}    allDayText                                  The text that should be displayed for the "All-Day" label.
 * @property    {string}    allEventsText                               The text that should be displayed for the "All Events" label.
 * @property    {boolean}   exportEventsEnabled                         States if exporting events is enabled (defaults to true).
 * @property    {boolean}   manualEditingEnabled                        States if adding, editing, dragging and removing events is enabled (defaults to true).
 * @property    {boolean}   showTimesInMainCalendarEvents               States if the time should be shown on the main calendar view events (defaults to false).
 * @property    {string}    startsOnText                                The text that should be displayed for the "Starts on" label.
 * @property    {string}    andFinishesOnText                           The text that should be displayed for the "and finishes on" label.
 * @property    {string}    toTimeText                                  The text that should be displayed for the "to" label.
 * @property    {number}    autoRefreshTimerDelay                       The amount of time to wait before each full refresh (defaults to 5000 milliseconds, 0 disables it).
 * @property    {string}    confirmEventRemoveTitle                     The title of the confirmation message shown when removing an event (defaults to "Confirm Event Removal").
 * @property    {string}    confirmEventRemoveMessage                   The text for the confirmation message shown when removing an event (defaults to "Removing this event cannot be undone.  Do you want to continue?").
 * @property    {string}    okText                                      The text that should be displayed for the "OK" button.
 * @property    {string}    selectExportTypeTitle                       The text that should be displayed for the "Select Export Type" label.
 * @property    {boolean}   fullScreenModeEnabled                       States if double click on the main title bar activates full screen mode (defaults to true).
 * @property    {number}    eventTooltipDelay                           The amount of time to wait until an event tooltip is shown (defaults to 1000 milliseconds).
 * @property    {string}    selectColorsText                            The text that should be displayed for the "Select Colors" label.
 * @property    {string}    backgroundColorText                         The text that should be displayed for the "Background Color:" label.
 * @property    {string}    textColorText                               The text that should be displayed for the "Text Color:" label.
 * @property    {string}    borderColorText                             The text that should be displayed for the "Border Color:" label.
 * @property    {string}    searchEventsTitle                           The text that should be displayed for the "Search Events" label.
 * @property    {string}    forText                                     The text that should be displayed for the "For:" label.
 * @property    {string}    previousText                                The text that should be displayed for the "Previous" button.
 * @property    {string}    nextText                                    The text that should be displayed for the "Next" button.
 * @property    {string}    matchCaseText                               The text that should be displayed for the "Match Case" label.
 * @property    {number}    minimumDayHeight                            States the height the main calendar days should used (defaults to 0 - auto).
 * @property    {string}    repeatsText                                 The text that should be displayed for the "Repeats:" label.
 * @property    {string}    repeatDaysToExcludeText                     The text that should be displayed for the "Repeat Days To Exclude:" label.
 * @property    {string}    repeatsNever                                The text that should be displayed for the "Never" label.
 * @property    {string}    repeatsEveryDayText                         The text that should be displayed for the "Every Day" label.
 * @property    {string}    repeatsEveryWeekText                        The text that should be displayed for the "Every Week" label.
 * @property    {string}    repeatsEveryMonthText                       The text that should be displayed for the "Every Month" label.
 * @property    {string}    repeatsEveryYearText                        The text that should be displayed for the "Every Year" label.
 * @property    {string}    selectDaysToExcludeTitle                    The text that should be displayed for the "Select Days To Exclude" label.
 * @property    {string}    moreText                                    The text that should be displayed for the "More" label.
 * @property    {Object[]}  holidays                                    The holidays that should be shown for specific days/months (refer to "Holiday" documentation for properties).
 */


/**
 * calendarJs().
 * 
 * The main Calendar.js class.
 * 
 * @class
 * 
 * @param       {string}    id                                          The ID of the element that should be used to display the calendar.
 * @param       {Object}    options                                     All the configurable options that should be used (refer to "Options" documentation for properties).
 * @param       {Object}    startDateTime                               The date that the calendar should start from by default (defaults to today).
 */
function calendarJs( id, options, startDateTime ) {
    var _options = {},
        _this = this,
        _currentDate = null,
        _largestDateInView = null,
        _elementTypes = {},
        _elements = {},
        _document = null,
        _window = null,
        _elementID = null,
        _initialized = false,
        _initializedDocumentEvents = false,
        _events = {},
        _timer_RefreshMainDisplay = null,
        _eventDetails_Dragged = null,
        _cachedStyles = null,
        _const_Repeat_Never = 0,
        _const_Repeat_EveryDay = 1,
        _const_Repeat_EveryWeek = 2,
        _const_Repeat_EveryMonth = 3,
        _const_Repeat_EveryYear = 4,
        _elementID_DayElement = "calendar-day-",
        _elementID_YearSelected = "year-selected-",
        _elementClassName_Row = "row",
        _elementClassName_Cell = "cell",
        _element_HeaderDateDisplay = null,
        _element_HeaderDateDisplay_Text = null,
        _element_HeaderDateDisplay_YearSelector = null,
        _element_HeaderDateDisplay_YearSelector_Contents = null,
        _element_HeaderDateDisplay_ExportEventsButton = null,
        _element_DisabledBackground = null,
        _element_EventEditorDialog = null,
        _element_EventEditorDialog_DisabledArea = null,
        _element_EventEditorDialog_TitleBar = null,
        _element_EventEditorDialog_DateFrom = null,
        _element_EventEditorDialog_TimeFrom = null,
        _element_EventEditorDialog_DateTo = null,
        _element_EventEditorDialog_TimeTo = null,
        _element_EventEditorDialog_IsAllDay = null,
        _element_EventEditorDialog_Title = null,
        _element_EventEditorDialog_Description = null,
        _element_EventEditorDialog_Location = null,
        _element_EventEditorDialog_RepeatEvery_Never = null,
        _element_EventEditorDialog_RepeatEvery_EveryDay = null,
        _element_EventEditorDialog_RepeatEvery_EveryWeek = null,
        _element_EventEditorDialog_RepeatEvery_EveryMonth = null,
        _element_EventEditorDialog_RepeatEvery_EveryYear = null,
        _element_EventEditorDialog_RepeatEvery_DaysToExcludeButton = null,
        _element_EventEditorDialog_ErrorMessage = null,
        _element_EventEditorDialog_EventDetails = {},
        _element_EventEditorDialog_OKButton = null,
        _element_EventEditorDialog_RemoveButton = null,
        _element_EventEditorColorsDialog = null,
        _element_EventEditorColorsDialog_Color = null,
        _element_EventEditorColorsDialog_ColorText = null,
        _element_EventEditorColorsDialog_ColorBorder = null,
        _element_EventEditorExcludeDaysDialog = null,
        _element_EventEditorExcludeDaysDialog_Mon = null,
        _element_EventEditorExcludeDaysDialog_Tue = null,
        _element_EventEditorExcludeDaysDialog_Wed = null,
        _element_EventEditorExcludeDaysDialog_Thu = null,
        _element_EventEditorExcludeDaysDialog_Fri = null,
        _element_EventEditorExcludeDaysDialog_Sat = null,
        _element_EventEditorExcludeDaysDialog_Sun = null,
        _element_FullDayView = null,
        _element_FullDayView_Title = null,
        _element_FullDayView_Contents = null,
        _element_FullDayView_DateSelected = null,
        _element_FullDayView_EventsShown = [],
        _element_FullDayView_ExportEventsButton = null,
        _element_ListAllEventsView = null,
        _element_ListAllEventsView_ExportEventsButton = null,
        _element_ListAllEventsView_Contents = null,
        _element_ListAllWeekEventsView = null,
        _element_ListAllWeekEventsView_Title = null,
        _element_ListAllWeekEventsView_ExportEventsButton = null,
        _element_ListAllWeekEventsView_Contents = null,
        _element_ListAllWeekEventsView_Contents_FullView = {},
        _element_ListAllWeekEventsView_Contents_FullView_Contents = {},
        _element_ListAllWeekEventsView_EventsShown = [],
        _element_ListAllWeekEventsView_DateSelected = null,
        _element_ConfirmationDialog = null,
        _element_ConfirmationDialog_TitleBar = null,
        _element_ConfirmationDialog_Message = null,
        _element_ConfirmationDialog_YesButton = null,
        _element_ConfirmationDialog_NoButton = null,
        _element_SelectExportTypeDialog = null,
        _element_SelectExportTypeDialog_Option_CSV = null,
        _element_SelectExportTypeDialog_Option_XML = null,
        _element_SelectExportTypeDialog_Option_JSON = null,
        _element_SelectExportTypeDialog_Option_TEXT = null,
        _element_SelectExportTypeDialog_ExportEvents = null,
        _element_Tooltip = null,
        _element_Tooltip_Title = null,
        _element_Tooltip_Date = null,
        _element_Tooltip_Repeats = null,
        _element_Tooltip_Description = null,
        _element_Tooltip_Location = null,
        _element_Tooltip_ShowTimer = null,
        _element_DropDownMenu_Day = null,
        _element_DropDownMenu_Day_DateSelected = null,
        _element_DropDownMenu_Event = null,
        _element_DropDownMenu_Event_EventDetails = null,
        _element_SearchDialog = null,
        _element_SearchDialog_For = null,
        _element_SearchDialog_MatchCase = null,
        _element_SearchDialog_Previous = null,
        _element_SearchDialog_Next = null,
        _element_SearchDialog_IsMoving = false,
        _element_SearchDialog_X = 0,
        _element_SearchDialog_Y = 0,
        _element_SearchDialog_SearchResults = [],
        _element_SearchDialog_SearchIndex = 0;


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build (layout, days, etc)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function build( newStartDateTime, fullRebuild ) {
        _currentDate = isDefined( newStartDateTime ) ? newStartDateTime : new Date();
        fullRebuild = isDefined( fullRebuild ) ? fullRebuild : false;

        var firstDay = new Date( _currentDate.getFullYear(), _currentDate.getMonth(), 1 ),
            startDay = firstDay.getDay(),
            totalDaysInMonth = daysInMonth( _currentDate.getFullYear(), _currentDate.getMonth() );

        if ( startDay === 0 ) {
            startDay = 7;
        }

        hideAllDropDowns();

        buildLayout();
        buildPreviousMonthDays( _currentDate, startDay );

        var lastDayFilled = buildMonthDays( totalDaysInMonth, startDay );

        buildNextMonthDays( lastDayFilled );
        buildDayEvents();

        if ( fullRebuild ) {
            buildDisabledBackground();
            buildEventEditingDialog();
            buildEventEditingColorDialog();
            buildEventEditingExcludeDaysDialog();
            buildConfirmationDialog();
            buildSelectExportTypeDialog();
            buildSearchDialog();
            buildTooltip();
            buildDropDownMenus();
            buildDocumentEvents();
        }

        _element_HeaderDateDisplay_Text.innerHTML = _options.monthNames[ _currentDate.getMonth() ] + ", " + _currentDate.getFullYear() + " ▾";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Getting Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getAllEvents() {
        var events = [];
    
        getAllEventsFunc( function( event ) {
            events.push( event );
        } );

        return events;
    }

    function getAllEventsFunc( func ) {
        for ( var storageDate in _events ) {
            if ( _events.hasOwnProperty( storageDate ) ) {
                for ( var storageGuid in _events[ storageDate ] ) {
                    if ( _events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                        var event = getAdjustedAllDayEvent( _events[ storageDate ][ storageGuid ] ),
                            result = func( event, storageDate, storageGuid );

                        if ( result ) {
                            return;
                        }
                    }
                }
            }
        }
    }

    function getOrderedEvents( events ) {
        events = events.sort( function( a, b ) {
            return a.from - b.from;
        } );

        events = events.sort( function( a, b ) {
            return getBooleanAsNumber( b.isAllDay ) - getBooleanAsNumber( a.isAllDay );
        } );

        return events;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Layout
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildLayout() {
        if ( !_initialized ) {
            var element = buildContainer();
    
            buildListAllEventsView( element );
            buildListAllWeekEventsView( element );
            buildFullDayView( element );
            buildDateHeader( element );
            buildDayNamesHeader( element );
            buildDayRows( element );
            
            _initialized = true;
        }
    }

    function buildContainer() {
        var element = getElementByID( _elementID );
        element.className = "calendar";
        element.innerHTML = "";

        return element;
    }

    function buildDateHeader( element ) {
        _element_HeaderDateDisplay = createElement( "div", "header-date" );
        element.appendChild( _element_HeaderDateDisplay );

        if ( _options.fullScreenModeEnabled ) {
            _element_HeaderDateDisplay.ondblclick = function() {
                headerDoubleClick( element );
            };
        }

        var previousMonthButton = createElement( "div", "ib-arrow-left-full" );
        previousMonthButton.onclick = moveBackMonth;
        previousMonthButton.ondblclick = cancelBubble;
        _element_HeaderDateDisplay.appendChild( previousMonthButton );

        addToolTip( previousMonthButton, _options.previousMonthTooltipText );

        var todayButton = createElement( "div", "ib-pin" );
        todayButton.onclick = moveToday;
        todayButton.ondblclick = cancelBubble;
        _element_HeaderDateDisplay.appendChild( todayButton );

        addToolTip( todayButton, _options.todayTooltipText );

        var refreshButton = createElement( "div", "ib-refresh" );
        refreshButton.onclick = refreshViews;
        refreshButton.ondblclick = cancelBubble;
        _element_HeaderDateDisplay.appendChild( refreshButton );

        addToolTip( refreshButton, _options.refreshTooltipText );

        var searchButton = createElement( "div", "ib-search" );
        searchButton.onclick = showSearchDialog;
        searchButton.ondblclick = cancelBubble;
        _element_HeaderDateDisplay.appendChild( searchButton );

        addToolTip( searchButton, _options.searchTooltipText );

        var nextMonthButton = createElement( "div", "ib-arrow-right-full" );
        nextMonthButton.onclick = moveForwardMonth;
        nextMonthButton.ondblclick = cancelBubble;
        _element_HeaderDateDisplay.appendChild( nextMonthButton );

        addToolTip( nextMonthButton, _options.nextMonthTooltipText );

        if ( _options.manualEditingEnabled ) {
            var addEventButton = createElement( "div", "ib-plus" );
            addEventButton.onclick = addNewEvent;
            addEventButton.ondblclick = cancelBubble;
            _element_HeaderDateDisplay.appendChild( addEventButton );

            addToolTip( addEventButton, _options.addEventTooltipText );
        }

        if ( _options.exportEventsEnabled ) {
            _element_HeaderDateDisplay_ExportEventsButton = createElement( "div", "ib-arrow-down-full-line" );
            _element_HeaderDateDisplay_ExportEventsButton.ondblclick = cancelBubble;
            _element_HeaderDateDisplay.appendChild( _element_HeaderDateDisplay_ExportEventsButton );

            addToolTip( _element_HeaderDateDisplay_ExportEventsButton, _options.exportEventsTooltipText );
            
            _element_HeaderDateDisplay_ExportEventsButton.onclick = function() {
                showSelectExportTypeDialog();
            };
        }

        var listAllEventsButton = createElement( "div", "ib-eye" );
        listAllEventsButton.ondblclick = cancelBubble;
        _element_HeaderDateDisplay.appendChild( listAllEventsButton );

        listAllEventsButton.onclick = function() {
            showListAllEventsView( true );
        };

        addToolTip( listAllEventsButton, _options.listAllEventsTooltipText );

        var listWeekEventsButton = createElement( "div", "ib-hamburger" );
        listWeekEventsButton.ondblclick = cancelBubble;
        _element_HeaderDateDisplay.appendChild( listWeekEventsButton );

        listWeekEventsButton.onclick = function() {
            showListAllWeekEventsView( null, true );
        };

        addToolTip( listWeekEventsButton, _options.listWeekEventsTooltipText );

        var titleContainer = createElement( "div", "title-container" );
        _element_HeaderDateDisplay.appendChild( titleContainer );
        
        _element_HeaderDateDisplay_Text = createElement( "span" );
        _element_HeaderDateDisplay_Text.ondblclick = cancelBubble;
        titleContainer.appendChild( _element_HeaderDateDisplay_Text );

        buildYearSelectorDropDown( titleContainer );
    }

    function buildYearSelectorDropDown( container ) {
        var date = new Date( 1900, 1, 1 ),
            dateCurrent = new Date(),
            dateYearsTotal = ( dateCurrent.getFullYear() - date.getFullYear() ) + _options.extraSelectableYearsAhead;

        _element_HeaderDateDisplay_YearSelector = createElement( "div", "years-drop-down" );
        container.appendChild( _element_HeaderDateDisplay_YearSelector );

        _element_HeaderDateDisplay_YearSelector_Contents = createElement( "div", "contents custom-scroll-bars" );
        _element_HeaderDateDisplay_YearSelector.appendChild( _element_HeaderDateDisplay_YearSelector_Contents );

        for ( var yearIndex = 0; yearIndex < dateYearsTotal; yearIndex++ ) {
            buildYearSelectorDropDownYear( date.getFullYear() );

            date.setFullYear( date.getFullYear() + 1 );
        }

        _element_HeaderDateDisplay_Text.onclick = showYearSelectorDropDownMenu;
    }

    function buildYearSelectorDropDownYear( actualYear ) {
        var year = createElement( "div" );
        year.innerText = actualYear.toString();
        year.id = _elementID_YearSelected + actualYear.toString();
        _element_HeaderDateDisplay_YearSelector_Contents.appendChild( year );

        year.onclick = function() {
            _currentDate.setFullYear( actualYear );

            build( _currentDate );
            hideYearSelectorDropDown();
        };
    }

    function buildDayNamesHeader( element ) {
        var headerRow = createElement( "div", _elementClassName_Row + " header-days" ),
            headerNamesLength = _options.dayHeaderNames.length;

        element.appendChild( headerRow );

        for ( var headerNameIndex = 0; headerNameIndex < headerNamesLength; headerNameIndex++ ) {
            var headerName = _options.dayHeaderNames[ headerNameIndex ],
                header = createElement( "div", _elementClassName_Cell );

            header.innerHTML = headerName;
            headerRow.appendChild( header );
        }
    }

    function buildDayRows( element ) {
        for ( var rowIndex = 0; rowIndex < 6; rowIndex++ ) {
            var rowData = createElement( "div", _elementClassName_Row );
            element.appendChild( rowData );

            for ( var columnDataIndex = 0; columnDataIndex < 7; columnDataIndex++ ) {
                var columnDataNumber = ( rowIndex * 7 ) + ( columnDataIndex + 1 ),
                    columnData = createElement( "div", _elementClassName_Cell );

                columnData.id = _elementID_DayElement + columnDataNumber;
                rowData.appendChild( columnData );

                if ( _options.minimumDayHeight > 0 ) {
                    columnData.style.height = _options.minimumDayHeight + "px";
                }
            }
        }
    }

    function getAdjustedAllDayEvent( event ) {
        var adjustedEvent = event;

        if ( adjustedEvent.isAllDay ) {
            adjustedEvent.from = new Date( adjustedEvent.from.getFullYear(), adjustedEvent.from.getMonth(), adjustedEvent.from.getDate(), 0, 0 );
            adjustedEvent.to = new Date( adjustedEvent.from.getFullYear(), adjustedEvent.from.getMonth(), adjustedEvent.from.getDate(), 23, 59 );
        }

        return adjustedEvent;
    }

    function getTotalDaysBetweenDates( from, to ) {
        var fromDate = new Date( from.getFullYear(), from.getMonth(), from.getDate() ),
            toDate = new Date( to.getFullYear(), to.getMonth(), to.getDate() ),
            differenceTime = Math.abs( toDate - fromDate ),
            differenceDays = Math.ceil( differenceTime / ( 1000 * 60 * 60 * 24 ) ); 
        
        return differenceDays;
    }

    function showYearSelectorDropDownMenu( e ) {
        if ( _element_HeaderDateDisplay_YearSelector.style.display !== "block" ) {
            hideAllDropDowns();
            cancelBubble( e );

            var yearSelected = _element_HeaderDateDisplay_YearSelector.getElementsByClassName( "current-year-selected" );
            if ( yearSelected.length >= 1 ) {

                var yearSelectedLength = yearSelected.length;
                for ( var yearsSelectedIndex = 0; yearsSelectedIndex < yearSelectedLength; yearsSelectedIndex++ ) {
                    yearSelected[ yearsSelectedIndex ].removeAttribute( "class" );
                }
            }

            var year = getElementByID( _elementID_YearSelected + _currentDate.getFullYear() );
            if ( year !== null ) {
                year.className = "current-year-selected";
            }

            _element_HeaderDateDisplay_YearSelector.style.display = "block";
            _element_HeaderDateDisplay_YearSelector_Contents.scrollTop = year.offsetTop - ( _element_HeaderDateDisplay_YearSelector.offsetHeight / 2 );
        }
    }

    function hideYearSelectorDropDown() {
        if ( isYearSelectorDropDownVisible() ) {
            _element_HeaderDateDisplay_YearSelector.style.display = "none";
        }
    }

    function isYearSelectorDropDownVisible() {
        return _element_HeaderDateDisplay_YearSelector !== null && _element_HeaderDateDisplay_YearSelector.style.display === "block";
    }

    function isDateToday( date ) {
        var today = new Date();
        
        return date.getDate() === today.getDate() && date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth();
    }

    function triggerOptionsEvent( name ) {
        if ( _options !== null && isDefinedFunction( _options[ name ] ) ) {
            _options[ name ]();
        }
    }

    function triggerOptionsEventWithEventData( name, event ) {
        if ( _options !== null && isDefinedFunction( _options[ name ] ) ) {
            _options[ name ]( event );
        }
    }

    function newGuid() {
        var result = [];

        for ( var charIndex = 0; charIndex < 32; charIndex++ ) {
            if ( charIndex === 8 || charIndex === 12 || charIndex === 16 || charIndex === 20 ) {
                result.push( "-" );
            }

            var character = Math.floor( Math.random() * 16 ).toString( 16 );
            result.push( character );
        }

        return result.join( "" );
    }

    function headerDoubleClick( element ) {
        if ( element.className.indexOf( " full-screen-view" ) <= 0 ) {
            element.className += " full-screen-view";
            _cachedStyles = element.style.cssText;
            element.removeAttribute( "style" );
        } else {
            element.className = element.className.replace( " full-screen-view", "" );
            element.style.cssText = _cachedStyles;
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Document Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDocumentEvents() {
        if ( !_initializedDocumentEvents ) {
            _document.body.addEventListener( "click", hideAllDropDowns );
            _document.body.addEventListener( "contextmenu", hideAllDropDowns );
            _window.addEventListener( "resize", hideAllDropDowns );

            _initializedDocumentEvents = true;
        }
    }

    function hideAllDropDowns() {
        hideDayDropDownMenu();
        hideEventDropDownMenu();
        hideYearSelectorDropDown();
        hideTooltip();
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Day Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDayEvents() {
        clearEventsFromDays();
        clearAutoRefreshTimer();

        var orderedEvents = getOrderedEvents( getAllEvents() ),
            orderedEventsLength = orderedEvents.length;

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                elementDay = getDayElement( orderedEvent.from );

            if ( elementDay !== null ) {
                buildDayEventAcrossDays( orderedEvent );
            }

            var repeatEvery = getNumber( orderedEvent.repeatEvery );
            if ( repeatEvery > _const_Repeat_Never ) {
                if ( repeatEvery === _const_Repeat_EveryDay ) {
                    buildRepeatedDayEvents( orderedEvent, function( date ) {
                        date.setDate( date.getDate() + 1 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
                    buildRepeatedDayEvents( orderedEvent, function( date ) {
                        date.setDate( date.getDate() + 7 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryMonth ) {
                    buildRepeatedDayEvents( orderedEvent, function( date ) {
                        date.setMonth( date.getMonth() + 1 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryYear ) {
                    buildRepeatedDayEvents( orderedEvent, function( date ) {
                        date.setFullYear( date.getFullYear() + 1 );
                    } );
                }
            }
        }
    
        updateExportButtonsVisibleState( orderedEventsLength );
        startAutoRefreshTimer();
    }

    function buildRepeatedDayEvents( orderedEvent, dateFunc ) {
        var newFromDate = new Date( orderedEvent.from ),
            excludeDays = getArray( orderedEvent.repeatEveryExcludeDays );

        while ( newFromDate < _largestDateInView ) {
            dateFunc( newFromDate );

            if ( excludeDays.indexOf( newFromDate.getDay() ) === -1 ) {
                var repeatDayElement = getDayElement( newFromDate );

                if ( repeatDayElement !== null ) {
                    buildDayEvent( newFromDate, orderedEvent );
                }
            }
        }
    }
    
    function buildDayEventAcrossDays( orderedEvent ) {
        buildDayEvent( orderedEvent.from, orderedEvent );
    
        if ( orderedEvent.from.getDate() !== orderedEvent.to.getDate() ) {
            var totalDays = getTotalDaysBetweenDates( orderedEvent.from, orderedEvent.to );
            if ( totalDays > 0 ) {
    
                var nextDayDate = new Date( orderedEvent.from );
                for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                    nextDayDate.setDate( nextDayDate.getDate() + 1 );
    
                    var elementNextDay = getDayElement( nextDayDate );
                    if ( elementNextDay !== null ) {
                        buildDayEvent( nextDayDate, orderedEvent );
                    }
                }
            }
        }
    }
    
    function buildDayEvent( eventDateFrom, eventDetails ) {
        var elementDay = getDayElement( eventDateFrom );
        if ( elementDay !== null ) {
    
            var eventClassName = _options.manualEditingEnabled ? "event" : "event-no-hover",
                events = elementDay.getElementsByClassName( eventClassName );

            if ( events.length < _options.maximumEventsPerDayDisplay ) {
    
                var event = createElement( "div", eventClassName ),
                    eventTitle = eventDetails.title;

                if ( _options.showTimesInMainCalendarEvents && !eventDetails.isAllDay && eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                    eventTitle = getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) + ": " + eventTitle;
                }

                event.innerHTML = eventTitle;
                elementDay.appendChild( event );

                setEventClassesAndColors( eventDetails, event, getToTimeWithPassedDate( eventDetails, eventDateFrom ) );

                event.onmousemove = function( e ) {
                    showTooltip( e, eventDetails );
                };

                if ( _options.manualEditingEnabled ) {
                    event.oncontextmenu = function( e ) {
                        showEventDropDownMenu( e, eventDetails );
                    };
                }
    
                if ( _options.manualEditingEnabled ) {
                    event.onclick = function() {
                        showEventDialog( eventDetails );
                    };
                }
    
                if ( _options.dragAndDropForEventsEnabled && _options.manualEditingEnabled ) {
                    event.setAttribute( "draggable", true );
                    
                    event.ondragstart = function() {
                        _eventDetails_Dragged = eventDetails;
                    };
                }
            } else {

                var plusXEvents = elementDay.getElementsByClassName( "plus-x-events" ),
                    plusXEventsText = plusXEvents.length > 0 ? plusXEvents[ 0 ] : null;

                if ( plusXEventsText === null ) {
                    plusXEventsText = createElement( "div", "plus-x-events" );
                    plusXEventsText.setAttribute( "events", "1" );
                    plusXEventsText.innerHTML = "+1 " + _options.moreText;
                    elementDay.appendChild( plusXEventsText );
                } else {

                    var numberOfEvents = parseInt( plusXEventsText.getAttribute( "events" ) ) + 1;
                    plusXEventsText.setAttribute( "events", numberOfEvents.toString() );
                    plusXEventsText.innerHTML = "+" + numberOfEvents + " " + _options.moreText;
                }
            }
        }
    }

    function updateExportButtonsVisibleState( orderedEventsLength ) {
        if ( _options.exportEventsEnabled ) {
            if ( orderedEventsLength === 0 ) {
                _element_HeaderDateDisplay_ExportEventsButton.style.display = "none";
            } else {
                _element_HeaderDateDisplay_ExportEventsButton.style.display = "inline-block";
            }
        }
    }

    function getDayElement( date ) {
        var firstDay = new Date( _currentDate.getFullYear(), _currentDate.getMonth(), 1 ),
            startDay = -1,
            nextMonth = new Date( _currentDate ),
            previousMonth = new Date( _currentDate ),
            elementDay = null,
            elementDayNumber = 0,
            firstDayNumber = getWeekdayNumber( firstDay );
        
        nextMonth.setMonth( nextMonth.getMonth() + 1 );
        previousMonth.setMonth( previousMonth.getMonth() - 1 );

        if ( date.getMonth() === nextMonth.getMonth() && date.getFullYear() === nextMonth.getFullYear() ) {
            startDay = firstDayNumber + daysInMonth( _currentDate.getFullYear(), _currentDate.getMonth() );
            elementDayNumber = ( date.getDate() + startDay );

        } else if ( date.getMonth() === previousMonth.getMonth() && date.getFullYear() === previousMonth.getFullYear() ) {
            elementDayNumber = firstDayNumber - getTotalDaysBetweenDates( date, _currentDate ) + 1;
            
        } else if ( date.getMonth() === _currentDate.getMonth() && date.getFullYear() === _currentDate.getFullYear() ) {
            startDay = firstDayNumber;
            elementDayNumber = ( date.getDate() + startDay );
        }

        if ( elementDayNumber > 0 ) {
            elementDay = getElementByID( _elementID_DayElement + elementDayNumber );
        }

        return elementDay;
    }

    function clearEventsFromDays() {
        for ( var rowIndex = 0; rowIndex < 6; rowIndex++ ) {
            for ( var columnDataIndex = 0; columnDataIndex < 7; columnDataIndex++ ) {
                var columnDataNumber = ( rowIndex * 7 ) + ( columnDataIndex + 1 ),
                    columnDataElement = getElementByID( _elementID_DayElement + columnDataNumber );

                clearEventsFromDay( columnDataElement );
            }
        }
    }

    function clearEventsFromDay( elementDay ) {
        clearElementsByClassName( elementDay, _options.manualEditingEnabled ? "event" : "event-no-hover" );
        clearElementsByClassName( elementDay, "plus-x-events" );
    }

    function clearElementsByClassName( element, className ) {
        var elements = element.getElementsByClassName( className );

        while ( elements[ 0 ] ) {
            elements[ 0 ].parentNode.removeChild( elements[ 0 ] );
        }
    }
  
    function setEventClassesAndColors( eventDetails, event, toDate ) {
        if ( isDefined( toDate ) && toDate < new Date() ) {
            event.className += " expired";
        }

        if ( isDefinedStringAndSet( eventDetails.color ) ) {
            event.style.backgroundColor = eventDetails.color;

            if ( isDefinedStringAndSet( eventDetails.colorText ) ) {
                event.style.color = eventDetails.colorText;
            }

            if ( isDefinedStringAndSet( eventDetails.colorBorder ) ) {
                event.style.borderLeftColor = eventDetails.colorBorder;
            }
        } else {

            if ( eventDetails.isAllDay ) {
                event.className += " all-day";
            }
        }
    }

    function getToTimeWithPassedDate( eventDetails, date ) {
        var repeatEvery = getNumber( eventDetails.repeatEvery ),
            toDate = new Date( eventDetails.to );
        
        if ( repeatEvery > _const_Repeat_Never ) {
            var newCurrentDate = new Date( date );
            newCurrentDate.setHours( toDate.getHours(), toDate.getMinutes() );

            toDate = newCurrentDate;
        }

        return toDate;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Full Day View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildFullDayView( element ) {
        _element_FullDayView = createElement( "div", "full-day-view" );
        element.appendChild( _element_FullDayView );

        var titleBar = createElement( "div", "title-bar" );
        _element_FullDayView.appendChild( titleBar );

        if ( _options.fullScreenModeEnabled ) {
            titleBar.ondblclick = function() {
                headerDoubleClick( element );
            };
        }

        _element_FullDayView_Title = createElement( "div", "title" );
        titleBar.appendChild( _element_FullDayView_Title );

        var closeButton = createElement( "div", "ib-close" );
        closeButton.ondblclick = cancelBubble;
        titleBar.appendChild( closeButton );

        addToolTip( closeButton, _options.closeTooltipText );

        closeButton.onclick = function() {
            hideOverlay( _element_FullDayView );
            _element_FullDayView_DateSelected = null;
        };

        if ( _options.manualEditingEnabled ) {
            var addEventButton = createElement( "div", "ib-plus" );
            addEventButton.onclick = addNewEvent;
            addEventButton.ondblclick = cancelBubble;
            titleBar.appendChild( addEventButton );

            addToolTip( addEventButton, _options.addEventTooltipText );
        }

        var nextMonthButton = createElement( "div", "ib-arrow-right-full" );
        nextMonthButton.onclick = onNextDay;
        nextMonthButton.ondblclick = cancelBubble;
        titleBar.appendChild( nextMonthButton );
        
        addToolTip( nextMonthButton, _options.nextDayTooltipText );

        var previousMonthButton = createElement( "div", "ib-arrow-left-full" );
        previousMonthButton.onclick = onPreviousDay;
        previousMonthButton.ondblclick = cancelBubble;
        titleBar.appendChild( previousMonthButton );
        
        addToolTip( previousMonthButton, _options.previousDayTooltipText );

        if ( _options.exportEventsEnabled ) {
            _element_FullDayView_ExportEventsButton = createElement( "div", "ib-arrow-down-full-line" );
            _element_FullDayView_ExportEventsButton.ondblclick = cancelBubble;
            titleBar.appendChild( _element_FullDayView_ExportEventsButton );

            addToolTip( _element_FullDayView_ExportEventsButton, _options.exportEventsTooltipText );

            _element_FullDayView_ExportEventsButton.onclick = function() {
                showSelectExportTypeDialog( _element_FullDayView_EventsShown );
            };
        }

        _element_FullDayView_Contents = createElement( "div", "contents custom-scroll-bars" );
        _element_FullDayView.appendChild( _element_FullDayView_Contents );
    }

    function updateFullDayViewFromEventEdit() {
        if ( isOverlayVisible( _element_FullDayView ) ) {
            showFullDayView( _element_FullDayView_DateSelected );
        }
    }

    function showFullDayView( date, fromOpen ) {
        fromOpen = isDefined( fromOpen ) ? fromOpen : false;

        _element_FullDayView_Title.innerText = "";
        _element_FullDayView_Contents.innerHTML = "";
        _element_FullDayView_DateSelected = date;
        _element_FullDayView_EventsShown = [];

        if ( fromOpen ) {
            _element_FullDayView_Contents.scrollTop = 0;
        }

        showOverlay( _element_FullDayView );
        buildDateTimeDisplay( _element_FullDayView_Title, date, false, true, true );

        var holidayText = getHoliday( date ),
            orderedEvents = [];

        if ( holidayText !== null ) {
            var holiday = createElement( "span", "holiday" );
            holiday.innerText = " (" + holidayText + ")";
            _element_FullDayView_Title.appendChild( holiday );
        }

        getAllEventsFunc( function( event ) {
            var totalDays = getTotalDaysBetweenDates( event.from, event.to ) + 1,
                nextDate = new Date( event.from );
            
            for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                if ( nextDate.getFullYear() === date.getFullYear() && nextDate.getMonth() === date.getMonth() && nextDate.getDate() === date.getDate() ) {
                    orderedEvents.push( event );
                    break;
                }

                nextDate.setDate( nextDate.getDate() + 1 );
            }
            
            var repeatEvery = getNumber( event.repeatEvery );
            if ( repeatEvery > _const_Repeat_Never ) {
                if ( repeatEvery === _const_Repeat_EveryDay ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, function( date ) {
                        date.setDate( date.getDate() + 1 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, function( date ) {
                        date.setDate( date.getDate() + 7 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryMonth ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, function( date ) {
                        date.setMonth( date.getMonth() + 1 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryYear ) {
                    buildFullDayRepeatedDayEvents( event, orderedEvents, date, function( date ) {
                        date.setFullYear( date.getFullYear() + 1 );
                    } );
                }
            }
        } );

        orderedEvents = getOrderedEvents( orderedEvents );

        var orderedEventsLength = orderedEvents.length;
        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            buildFullDayDayEvent( orderedEvents[ orderedEventIndex ], date );
        }

        if ( _options.exportEventsEnabled ) {
            if ( orderedEvents.length === 0 ) {
                _element_FullDayView_ExportEventsButton.style.display = "none";
            } else {
                _element_FullDayView_ExportEventsButton.style.display = "inline-block";
            }
        }
    }

    function buildFullDayRepeatedDayEvents( event, orderedEvents, date, dateFunc ) {
        var newFromDate = new Date( event.from ),
            excludeDays = getArray( event.repeatEveryExcludeDays );
    
        while ( newFromDate < date ) {
            dateFunc( newFromDate );

            if ( excludeDays.indexOf( newFromDate.getDay() ) === -1 ) {
                if ( newFromDate.getFullYear() === date.getFullYear() && newFromDate.getMonth() === date.getMonth() && newFromDate.getDate() === date.getDate() ) {
                    orderedEvents.push( event );
                    break;
                }
            }
        }
    }

    function buildFullDayDayEvent( eventDetails, displayDate ) {
        var event = createElement( "div", _options.manualEditingEnabled ? "event" : "event-no-hover" );
        _element_FullDayView_Contents.appendChild( event );

        if ( _options.manualEditingEnabled ) {
            event.oncontextmenu = function( e ) {
                showEventDropDownMenu( e, eventDetails );
            };
        }

        setEventClassesAndColors( eventDetails, event, getToTimeWithPassedDate( eventDetails, displayDate ) );

        var title = createElement( "div", "title" );
        title.innerHTML = eventDetails.title;
        event.appendChild( title );

        var startTime = createElement( "div", "date" );
        event.appendChild( startTime );

        if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
            if ( eventDetails.isAllDay ) {
                startTime.innerHTML = _options.allDayText;
            } else {
                startTime.innerHTML = getTimeToTimeDisplay( eventDetails.from, eventDetails.to );
            }
        } else {
            buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );
        }

        if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _const_Repeat_Never ) {
            var repeats = createElement( "div", "repeats" );
            repeats.innerHTML = _options.repeatsText.replace( ":", "" ) + " " + getRepeatsText( eventDetails.repeatEvery );
            event.appendChild( repeats );
        }

        if ( isDefinedStringAndSet( eventDetails.location ) ) {
            var location = createElement( "div", "location" );
            location.innerHTML = eventDetails.location;
            event.appendChild( location );
        }

        if ( isDefinedStringAndSet( eventDetails.description ) ) {
            var description = createElement( "div", "description" );
            description.innerHTML = eventDetails.description;
            event.appendChild( description );
        }

        if ( _options.manualEditingEnabled ) {
            event.onclick = function() {
                showEventDialog( eventDetails );
            };
        }

        _element_FullDayView_EventsShown.push( eventDetails );
    }

    function onPreviousDay() {
        _element_FullDayView_DateSelected.setDate( _element_FullDayView_DateSelected.getDate() - 1 );
        showFullDayView( _element_FullDayView_DateSelected, true );
    }

    function onNextDay() {
        _element_FullDayView_DateSelected.setDate( _element_FullDayView_DateSelected.getDate() + 1 );
        showFullDayView( _element_FullDayView_DateSelected, true );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * List All Events View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildListAllEventsView( element ) {
        _element_ListAllEventsView = createElement( "div", "list-all-events-view" );
        element.appendChild( _element_ListAllEventsView );

        var titleBar = createElement( "div", "title-bar" );
        _element_ListAllEventsView.appendChild( titleBar );

        if ( _options.fullScreenModeEnabled ) {
            titleBar.ondblclick = function() {
                headerDoubleClick( element );
            };
        }

        var title = createElement( "div", "title" );
        title.innerHTML = _options.allEventsText;
        titleBar.appendChild( title );

        var closeButton = createElement( "div", "ib-close" );
        closeButton.ondblclick = cancelBubble;
        titleBar.appendChild( closeButton );

        addToolTip( closeButton, _options.closeTooltipText );

        closeButton.onclick = function() {
            hideOverlay( _element_ListAllEventsView );
        };

        if ( _options.manualEditingEnabled ) {
            var addEventButton = createElement( "div", "ib-plus" );
            addEventButton.onclick = addNewEvent;
            addEventButton.ondblclick = cancelBubble;
            titleBar.appendChild( addEventButton );

            addToolTip( addEventButton, _options.addEventTooltipText );
        }

        if ( _options.exportEventsEnabled ) {
            _element_ListAllEventsView_ExportEventsButton = createElement( "div", "ib-arrow-down-full-line" );
            _element_ListAllEventsView_ExportEventsButton.ondblclick = cancelBubble;
            titleBar.appendChild( _element_ListAllEventsView_ExportEventsButton );

            addToolTip( _element_ListAllEventsView_ExportEventsButton, _options.exportEventsTooltipText );

            _element_ListAllEventsView_ExportEventsButton.onclick = function() {
                showSelectExportTypeDialog();
            };                
        }

        _element_ListAllEventsView_Contents = createElement( "div", "contents custom-scroll-bars" );
        _element_ListAllEventsView.appendChild( _element_ListAllEventsView_Contents );
    }

    function showListAllEventsView( fromOpen ) {
        fromOpen = isDefined( fromOpen ) ? fromOpen : false;

        showOverlay( _element_ListAllEventsView );
        _element_ListAllEventsView_Contents.innerHTML = "";

        if ( fromOpen ) {
            _element_ListAllEventsView_Contents.scrollTop = 0;
        }

        var orderedEvents = getOrderedEvents( getAllEvents() ),
            orderedEventsLength = orderedEvents.length;

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                monthContents = buildListAllEventsMonth( orderedEvent.from );

            buildListAllEventsEvent( orderedEvent, monthContents );
        }
    }

    function buildListAllEventsEvent( eventDetails, container ) {
        var event = createElement( "div", _options.manualEditingEnabled ? "event" : "event-no-hover" );
        container.appendChild( event );

        if ( _options.manualEditingEnabled ) {
            event.oncontextmenu = function( e ) {
                showEventDropDownMenu( e, eventDetails );
            };
        }

        setEventClassesAndColors( eventDetails, event );

        var title = createElement( "div", "title" );
        title.innerHTML = eventDetails.title;
        event.appendChild( title );

        var startTime = createElement( "div", "date" );
        event.appendChild( startTime );

        if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
            if ( eventDetails.isAllDay ) {
                buildDayDisplay( startTime, eventDetails.from, null, " - " + _options.allDayText );
            } else {
                buildDayDisplay( startTime, eventDetails.from, null, " - " + getTimeToTimeDisplay( eventDetails.from, eventDetails.to ) );
            }
        } else {
            buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );
        }

        if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _const_Repeat_Never ) {
            var repeats = createElement( "div", "repeats" );
            repeats.innerHTML = _options.repeatsText.replace( ":", "" ) + " " + getRepeatsText( eventDetails.repeatEvery );
            event.appendChild( repeats );
        }

        if ( isDefinedStringAndSet( eventDetails.location ) ) {
            var location = createElement( "div", "location" );
            location.innerHTML = eventDetails.location;
            event.appendChild( location );
        }

        if ( isDefinedStringAndSet( eventDetails.description ) ) {
            var description = createElement( "div", "description" );
            description.innerHTML = eventDetails.description;
            event.appendChild( description );
        }

        if ( _options.manualEditingEnabled ) {
            event.onclick = function() {
                showEventDialog( eventDetails );
            };
        }
    }

    function buildListAllEventsMonth( date ) {
        var monthContentsID = "month-" + date.getMonth() + "-" + date.getFullYear(),
            monthContents = getElementByID( monthContentsID );
        
        if ( monthContents === null ) {
            var month = createElement( "div", "month" );
            _element_ListAllEventsView_Contents.appendChild( month );

            var header = createElement( "div", "header" );
            header.innerHTML = _options.monthNames[ date.getMonth() ] + " " + date.getFullYear();
            month.appendChild( header );

            monthContents = createElement( "div", "events" );
            monthContents.id = monthContentsID;
            month.appendChild( monthContents );
        }

        return monthContents;
    }

    function updateViewAllEventsViewFromEventEdit() {
        if ( isOverlayVisible( _element_ListAllEventsView ) ) {
            showListAllEventsView();
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * List All Week Events View
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildListAllWeekEventsView( element ) {
        _element_ListAllWeekEventsView = createElement( "div", "list-all-week-events-view" );
        element.appendChild( _element_ListAllWeekEventsView );

        var titleBar = createElement( "div", "title-bar" );
        _element_ListAllWeekEventsView.appendChild( titleBar );

        if ( _options.fullScreenModeEnabled ) {
            titleBar.ondblclick = function() {
                headerDoubleClick( element );
            };
        }

        _element_ListAllWeekEventsView_Title = createElement( "div", "title" );
        titleBar.appendChild( _element_ListAllWeekEventsView_Title );

        var closeButton = createElement( "div", "ib-close" );
        closeButton.ondblclick = cancelBubble;
        titleBar.appendChild( closeButton );

        addToolTip( closeButton, _options.closeTooltipText );

        closeButton.onclick = function() {
            hideOverlay( _element_ListAllWeekEventsView );
        };

        if ( _options.manualEditingEnabled ) {
            var addEventButton = createElement( "div", "ib-plus" );
            addEventButton.onclick = addNewEvent;
            addEventButton.ondblclick = cancelBubble;
            titleBar.appendChild( addEventButton );

            addToolTip( addEventButton, _options.addEventTooltipText );
        }

        var nextMonthButton = createElement( "div", "ib-arrow-right-full" );
        nextMonthButton.onclick = onNextWeek;
        nextMonthButton.ondblclick = cancelBubble;
        titleBar.appendChild( nextMonthButton );
        
        addToolTip( nextMonthButton, _options.nextWeekTooltipText );

        var previousMonthButton = createElement( "div", "ib-arrow-left-full" );
        previousMonthButton.onclick = onPreviousWeek;
        previousMonthButton.ondblclick = cancelBubble;
        titleBar.appendChild( previousMonthButton );
        
        addToolTip( previousMonthButton, _options.previousWeekTooltipText );

        if ( _options.exportEventsEnabled ) {
            _element_ListAllWeekEventsView_ExportEventsButton = createElement( "div", "ib-arrow-down-full-line" );
            _element_ListAllWeekEventsView_ExportEventsButton.ondblclick = cancelBubble;
            titleBar.appendChild( _element_ListAllWeekEventsView_ExportEventsButton );

            addToolTip( _element_ListAllWeekEventsView_ExportEventsButton, _options.exportEventsTooltipText );

            _element_ListAllWeekEventsView_ExportEventsButton.onclick = function() {
                showSelectExportTypeDialog( _element_ListAllWeekEventsView_EventsShown );
            };                
        }

        _element_ListAllWeekEventsView_Contents = createElement( "div", "contents custom-scroll-bars" );
        _element_ListAllWeekEventsView.appendChild( _element_ListAllWeekEventsView_Contents );
    }

    function showListAllWeekEventsView( weekDate, fromOpen ) {
        fromOpen = isDefined( fromOpen ) ? fromOpen : false;

        showOverlay( _element_ListAllWeekEventsView );

        _element_ListAllWeekEventsView_Contents.innerHTML = "";
        _element_ListAllWeekEventsView_Contents_FullView = {};
        _element_ListAllWeekEventsView_Contents_FullView_Contents = {};
        _element_ListAllWeekEventsView_EventsShown = [];
        _element_ListAllWeekEventsView_DateSelected = weekDate === null ? new Date() : weekDate;

        if ( fromOpen ) {
            _element_ListAllWeekEventsView_Contents.scrollTop = 0;
        }

        var weekStartEndDates = getWeekStartEndDates( weekDate ),
            weekStartDate = weekStartEndDates[ 0 ],
            weekEndDate = weekStartEndDates[ 1 ];

        setAllWeekEventsViewTitle( weekStartDate, weekEndDate );

        var orderedEvents = getOrderedEvents( getAllEvents() ),
            orderedEventsLength = orderedEvents.length;

        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventsLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ],
                totalDays = getTotalDaysBetweenDates( orderedEvent.from, orderedEvent.to ) + 1,
                nextDate = new Date( orderedEvent.from ),
                addedNow = false;
            
            for ( var dayIndex = 0; dayIndex < totalDays; dayIndex++ ) {
                if ( nextDate >= weekStartDate && nextDate <= weekEndDate ) {
                    var dayContents = buildListAllEventsDay( nextDate );
    
                    buildListAllWeekEventsEvent( orderedEvent, dayContents, nextDate );
                    addedNow = true;
                }

                nextDate.setDate( nextDate.getDate() + 1 );
            }

            if ( addedNow ) {
                _element_ListAllWeekEventsView_EventsShown.push( orderedEvent );
            }

            var repeatEvery = getNumber( orderedEvent.repeatEvery ),
                repeatAdded = false;

            if ( repeatEvery > _const_Repeat_Never ) {
                if ( repeatEvery === _const_Repeat_EveryDay ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, function( date ) {
                        date.setDate( date.getDate() + 1 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, function( date ) {
                        date.setDate( date.getDate() + 7 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryMonth ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, function( date ) {
                        date.setMonth( date.getMonth() + 1 );
                    } );
                } else if ( repeatEvery === _const_Repeat_EveryYear ) {
                    repeatAdded = buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, function( date ) {
                        date.setFullYear( date.getFullYear() + 1 );
                    } );
                }
            }

            if ( repeatAdded && !addedNow ) {
                _element_ListAllWeekEventsView_EventsShown.push( orderedEvent );
            }
        }

        for ( var dateID in _element_ListAllWeekEventsView_Contents_FullView ) {
            if ( _element_ListAllWeekEventsView_Contents_FullView.hasOwnProperty( dateID ) ) {
                _element_ListAllWeekEventsView_Contents.appendChild( _element_ListAllWeekEventsView_Contents_FullView[ dateID ] );
            }
        }

        if ( _options.exportEventsEnabled ) {
            if ( _element_ListAllWeekEventsView_EventsShown.length === 0 ) {
                _element_ListAllWeekEventsView_ExportEventsButton.style.display = "none";
            } else {
                _element_ListAllWeekEventsView_ExportEventsButton.style.display = "inline-block";
            }
        }
    }

    function buildAllWeekRepeatedDayEvents( orderedEvent, weekStartDate, weekEndDate, dateFunc ) {
        var newFromDate = new Date( orderedEvent.from ),
            excludeDays = getArray( orderedEvent.repeatEveryExcludeDays ),
            added = false;
    
        while ( newFromDate < weekEndDate ) {
            dateFunc( newFromDate );
            
            if ( excludeDays.indexOf( newFromDate.getDay() ) === -1 ) {
                if ( newFromDate >= weekStartDate && newFromDate <= weekEndDate ) {
                    var dayContents = buildListAllEventsDay( newFromDate );
    
                    buildListAllWeekEventsEvent( orderedEvent, dayContents, newFromDate );
                    added = true;
                }
            }
        }

        return added;
    }

    function setAllWeekEventsViewTitle( weekStartDate, weekEndDate ) {
        _element_ListAllWeekEventsView_Title.innerHTML = "";
        
        if ( weekStartDate.getFullYear() === weekEndDate.getFullYear() ) {
            buildDateTimeDisplay( _element_ListAllWeekEventsView_Title, weekStartDate, false, false );

            var dash1 = createElement( "span" );
            dash1.innerHTML = " - ";
            _element_ListAllWeekEventsView_Title.appendChild( dash1 );

            buildDateTimeDisplay( _element_ListAllWeekEventsView_Title, weekEndDate, false, false );

            var year = createElement( "span" );
            year.innerHTML = ", " + weekStartDate.getFullYear();
            _element_ListAllWeekEventsView_Title.appendChild( year );

        } else {
            buildDateTimeDisplay( _element_ListAllWeekEventsView_Title, weekStartDate, false, true );

            var dash2 = createElement( "span" );
            dash2.innerHTML = " - ";
            _element_ListAllWeekEventsView_Title.appendChild( dash2 );

            buildDateTimeDisplay( _element_ListAllWeekEventsView_Title, weekEndDate, false, true );
        }
    }

    function buildListAllWeekEventsEvent( eventDetails, container, displayDate ) {
        var event = createElement( "div", _options.manualEditingEnabled ? "event" : "event-no-hover" );
        container.appendChild( event );

        if ( _options.manualEditingEnabled ) {
            event.oncontextmenu = function( e ) {
                showEventDropDownMenu( e, eventDetails );
            };
        }

        setEventClassesAndColors( eventDetails, event, getToTimeWithPassedDate( eventDetails, displayDate ) );

        var title = createElement( "div", "title" );
        title.innerHTML = eventDetails.title;
        event.appendChild( title );

        var startTime = createElement( "div", "date" );
        event.appendChild( startTime );

        if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
            if ( eventDetails.isAllDay ) {
                startTime.innerHTML = _options.allDayText;
            } else {
                startTime.innerHTML = getTimeToTimeDisplay( eventDetails.from, eventDetails.to );
            }
        } else {
            buildDateTimeToDateTimeDisplay( startTime, eventDetails.from, eventDetails.to );
        }

        if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _const_Repeat_Never ) {
            var repeats = createElement( "div", "repeats" );
            repeats.innerHTML = _options.repeatsText.replace( ":", "" ) + " " + getRepeatsText( eventDetails.repeatEvery );
            event.appendChild( repeats );
        }

        if ( isDefinedStringAndSet( eventDetails.location ) ) {
            var location = createElement( "div", "location" );
            location.innerHTML = eventDetails.location;
            event.appendChild( location );
        }

        if ( isDefinedStringAndSet( eventDetails.description ) ) {
            var description = createElement( "div", "description" );
            description.innerHTML = eventDetails.description;
            event.appendChild( description );
        }

        if ( _options.manualEditingEnabled ) {
            event.onclick = function() {
                showEventDialog( eventDetails );
            };
        }
    }

    function buildListAllEventsDay( date ) {
        var weekDayNumber = getWeekdayNumber( date ),
            dateID = date.getFullYear() + date.getMonth() + weekDayNumber,
            dayContents = null;

        if ( !_element_ListAllWeekEventsView_Contents_FullView.hasOwnProperty( dateID ) ) {
            var day = createElement( "div", "day" );
            _element_ListAllWeekEventsView_Contents_FullView[ dateID ] = day;

            var header = createElement( "div", "header" );
            day.appendChild( header );

            buildDayDisplay( header, date, _options.dayNames[ weekDayNumber ] + ", " );

            dayContents = createElement( "div", "events" );
            day.appendChild( dayContents );

            _element_ListAllWeekEventsView_Contents_FullView_Contents[ dateID ] = dayContents;

        } else {
            dayContents = _element_ListAllWeekEventsView_Contents_FullView_Contents[ dateID ];
        }

        return dayContents;
    }

    function updateViewAllWeekEventsViewFromEventEdit() {
        if ( isOverlayVisible( _element_ListAllWeekEventsView ) ) {
            showListAllWeekEventsView( _element_ListAllWeekEventsView_DateSelected );
        }
    }

    function getWeekdayNumber( date ) {
        return date.getDay() - 1 < 0 ? 6 : date.getDay() - 1;
    }

    function getWeekStartEndDates( date ) {
        date = isDefined( date ) ? date : new Date();

        var day = date.getDay() === 0 ? 7 : date.getDay(),
            firstDayNumber = ( date.getDate() - day ) + 1,
            lastDayNumber = firstDayNumber + 6,
            weekStartDate = new Date( date ),
            weekEndDate = new Date( date );

        weekStartDate.setDate( firstDayNumber );
        weekStartDate.setHours( 0, 0, 0, 0 );
        weekEndDate.setDate( lastDayNumber);
        weekEndDate.setHours( 23, 59, 59, 99 );
        
        return [ weekStartDate, weekEndDate ];
    }

    function onPreviousWeek() {
        _element_ListAllWeekEventsView_DateSelected.setDate( _element_ListAllWeekEventsView_DateSelected.getDate() - 7 );
        showListAllWeekEventsView( _element_ListAllWeekEventsView_DateSelected, true );
    }

    function onNextWeek() {
        _element_ListAllWeekEventsView_DateSelected.setDate( _element_ListAllWeekEventsView_DateSelected.getDate() + 7 );
        showListAllWeekEventsView( _element_ListAllWeekEventsView_DateSelected, true );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Date/Time Displays
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getTimeToTimeDisplay( fromDate, toDate ) {
        return getTimeForDisplay( fromDate ) + " " + _options.toTimeText + " " + getTimeForDisplay( toDate );
    }

    function getTimeForDisplay( date ) {
        return padNumber( date.getHours() ) + ":" + padNumber( date.getMinutes() );
    }

    function buildDateTimeToDateTimeDisplay( container, fromDate, toDate ) {
        container.innerHTML = "";

        var startText = createElement( "span" );
        startText.innerText = _options.startsOnText + " ";
        container.appendChild( startText );

        buildDateTimeDisplay( container, fromDate );

        var finishesText = createElement( "span" );
        finishesText.innerText = " " + _options.andFinishesOnText + " ";
        container.appendChild( finishesText );

        buildDateTimeDisplay( container, toDate );
    }

    function buildDateTimeDisplay( container, date, addTime, addYear, addDayName ) {
        addTime = !isDefined( addTime ) ? true : addTime;
        addYear = !isDefined( addYear ) ? true : addYear;
        addDayName = !isDefined( addDayName ) ? false : addDayName;

        if ( addDayName ) {
            var weekDayNumber = getWeekdayNumber( date ),
                weekDay = createElement( "span" );

            weekDay.innerText = _options.dayNames[ weekDayNumber ] + ", ";
            container.appendChild( weekDay );
        }

        buildDayDisplay( container, date );

        var month = createElement( "span" );
        month.innerText = " " + _options.monthNames[ date.getMonth() ];
        container.appendChild( month );

        if ( addYear ) {
            var year = createElement( "span" );
            year.innerText = " " + date.getFullYear();
            container.appendChild( year );
        }

        if ( addTime ) {
            var end = createElement( "span" );
            end.innerText = " " + getTimeForDisplay( date );
            container.appendChild( end );
        }
    }

    function buildDayDisplay( container, date, beforeText, afterText ) {
        if ( isDefined( beforeText ) ) {
            var before = createElement( "span" );
            before.innerText = beforeText;
            container.appendChild( before );
        }

        var dayNumber = createElement( "span" );
        dayNumber.innerText = date.getDate();
        container.appendChild( dayNumber );

        if ( _options.showDayNumberOrdinals ) {
            var sup = createElement( "sup" );
            sup.innerText = getDayOrdinal( date.getDate() );
            container.appendChild( sup );
        }

        if ( isDefined( afterText ) ) {
            var after = createElement( "span" );
            after.innerText = afterText;
            container.appendChild( after );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Month Days
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */
    
    function buildPreviousMonthDays( dateTime, startDay ) {
        if ( startDay > 1 ) {
            var previousMonth = new Date( dateTime );
            previousMonth.setMonth( previousMonth.getMonth() - 1 );

            var totalDaysInMonth = daysInMonth( previousMonth.getFullYear(), previousMonth.getMonth() ),
                elementDayNumber = 1,
                dayStart = ( totalDaysInMonth - startDay ) + 1;

            for ( var day = dayStart; day < totalDaysInMonth; day++ ) {
                buildDay( day + 1 , elementDayNumber, previousMonth.getMonth(), previousMonth.getFullYear(), true );
                elementDayNumber++;
            }
        }
    }

    function buildMonthDays( totalDaysInMonth, startDay ) {
        var elementDayNumber = 0;

        for ( var day = 0; day < totalDaysInMonth; day++ ) {
            elementDayNumber = startDay + day;

            buildDay( day + 1, elementDayNumber, _currentDate.getMonth(), _currentDate.getFullYear(), false );
        }

        return elementDayNumber;
    }

    function buildNextMonthDays( lastDayFilled ) {
        if ( lastDayFilled < 42 ) {
            var actualDay = 1,
                nextMonth = new Date( _currentDate );

            nextMonth.setMonth( nextMonth.getMonth() + 1 );

            for ( var elementDayNumber = lastDayFilled + 1; elementDayNumber < 43; elementDayNumber++ ) {
                buildDay( actualDay, elementDayNumber, nextMonth.getMonth(), nextMonth.getFullYear(), true );
                actualDay++;
            }

            var nextDay = daysInMonth( nextMonth.getFullYear(), nextMonth.getMonth() );
            nextDay = Math.round( nextDay / 2 );

            _largestDateInView = new Date( nextMonth.getFullYear(), nextMonth.getMonth(), nextDay );

        } else {
            _largestDateInView = null;
        }
    }

    function buildDay( actualDay, elementDayNumber, month, year, isMuted ) {
        var today = new Date(),
            dayIsToday = actualDay === today.getDate() && year === today.getFullYear() && month === today.getMonth(),
            dayElement = getElementByID( _elementID_DayElement + elementDayNumber ),
            dayText = createElement( "span" ),
            dayDate = new Date( year, month, actualDay );
        
        dayElement.innerHTML = "";

        dayText.className = isMuted ? "day-muted" : "";
        dayText.className += dayIsToday ? " today" : "";
        dayText.innerText = actualDay;

        if ( dayDate.getDay() === 6 || dayDate.getDay() === 0 && dayElement.className === _elementClassName_Cell ) {
            dayElement.className = _elementClassName_Cell + " weekend-day";
        }

        dayElement.oncontextmenu = function( e ) {
            showDayDropDownMenu( e, dayDate );
        };

        if ( _options.showDayNumberOrdinals ) {
            var sup = createElement( "sup" );
            sup.innerText = getDayOrdinal( actualDay );
            dayText.appendChild( sup );
        }

        dayElement.appendChild( dayText );
        
        var expandDayButton = createElement( "div", "expand-day" );
        dayElement.appendChild( expandDayButton );

        addToolTip( expandDayButton, _options.expandDayTooltipText );

        var holidayText = getHoliday( dayDate );
        if ( holidayText !== null ) {
            var holiday = createElement( "span", "holiday" );
            holiday.innerText = holidayText;
            dayText.appendChild( holiday );
        }

        expandDayButton.onclick = function() {
            showFullDayView( dayDate, true );
        };

        if ( _options.manualEditingEnabled ) {
            dayElement.ondblclick = function() {
                showEventDialog( null, dayDate );
            };

            if ( _options.manualEditingEnabled ) {
                dayElement.ondragover = function( e ) {
                    cancelBubble( e );
                    showDraggingEffect( dayElement );
                };

                dayElement.ondragenter = function( e ) {
                    cancelBubble( e );
                    showDraggingEffect( dayElement );
                };

                dayElement.ondragleave = function( e ) {
                    cancelBubble( e );
                    hideDraggingEffect( dayElement );
                };
        
                dayElement.ondrop = function( e ) {
                    dropEventOnDay( e, year, month, actualDay );
                    hideDraggingEffect( dayElement );
                };
            }
        }
    }

    function showDraggingEffect( dayElement ) {
        if ( dayElement.className.indexOf( " drag-over" ) === -1 ) {
            dayElement.className += " drag-over";
        }
    }

    function hideDraggingEffect( dayElement ) {
        if ( dayElement.className.indexOf( " drag-over" ) > -1 ) {
            dayElement.className = dayElement.className.replace( " drag-over", "" );
        }
    }

    function daysInMonth( year, month ) {
        return new Date( year, month + 1, 0 ).getDate();
    }

    function getDayOrdinal( value ) {
        var result = _options.thText;

        if ( value === 31 || value === 21 || value === 1 ) {
            result = _options.stText;
        } else if ( value === 22 || value === 2 ) {
            result = _options.ndText;
        } else if ( value === 23 || value === 3 ) {
            result = _options.rdText;
        }

        return result;
    }

    function dropEventOnDay( e, year, month, day ) {
        cancelBubble( e );

        if ( _eventDetails_Dragged !== null ) {
            var totalDays = getTotalDaysBetweenDates( _eventDetails_Dragged.from, _eventDetails_Dragged.to ),
                fromDate = new Date( year, month, day, _eventDetails_Dragged.from.getHours(), _eventDetails_Dragged.from.getMinutes() ),
                toDate = new Date( year, month, day, _eventDetails_Dragged.to.getHours(), _eventDetails_Dragged.to.getMinutes() );               

            if ( totalDays > 0 ) {
                toDate.setDate( toDate.getDate() + totalDays );
            }

            var newEvent = {
                from: fromDate,
                to: toDate,
                title: _eventDetails_Dragged.title,
                description: _eventDetails_Dragged.description,
                location: _eventDetails_Dragged.location,
                isAllDay: _eventDetails_Dragged.isAllDay,
                color: _eventDetails_Dragged.color,
                colorText: _eventDetails_Dragged.colorText,
                colorBorder: _eventDetails_Dragged.colorBorder,
                repeatEvery: _eventDetails_Dragged.repeatEvery,
                repeatEveryExcludeDays: _eventDetails_Dragged.repeatEveryExcludeDays
            };

            _this.updateEvent( _eventDetails_Dragged.id, newEvent );
        }
    }

    function getHoliday( date ) {
        var result = null,
            holidayTextItems = [],
            holidaysLength = _options.holidays.length;

        for ( var holidayIndex = 0; holidayIndex < holidaysLength; holidayIndex++ ) {
            var holiday = _options.holidays[ holidayIndex ];

            if ( getNumber( holiday.day ) === date.getDate() && getNumber( holiday.month ) === date.getMonth() + 1 ) {
                var holidayText = getString( holiday.title, null );
                
                if ( holidayText !== null ) {
                    holidayTextItems.push( holidayText );
                }
            }
        }

        if ( holidayTextItems.length > 0 ) {
            result = holidayTextItems.join( ", " );
        }

        return result;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Drop-Down Menus
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDropDownMenus() {
        buildDayDropDownMenu();
        buildEventDropDownMenu();
    }

    function buildDayDropDownMenu() {
        if (_element_DropDownMenu_Day !== null) {
            removeNode( _document.body, _element_DropDownMenu_Day );
        }

        _element_DropDownMenu_Day = createElement( "div", "calendar-drop-down-menu" );
        _document.body.appendChild( _element_DropDownMenu_Day );

        if ( _options.manualEditingEnabled ) {
            var addEvent = createElement( "div", "item" );
            addEvent.innerHTML = _options.addEventTitle;
            _element_DropDownMenu_Day.appendChild( addEvent );
    
            addEvent.onclick = function() {
                showEventDialog( null, _element_DropDownMenu_Day_DateSelected );
            };
    
            var separator1 = createElement( "div", "separator" );
            _element_DropDownMenu_Day.appendChild( separator1 );
        }

        var expandDay = createElement( "div", "item" );
        expandDay.innerHTML = _options.expandDayTooltipText;
        _element_DropDownMenu_Day.appendChild( expandDay );

        expandDay.onclick = function() {
            showFullDayView( _element_DropDownMenu_Day_DateSelected, true );
        };

        var separator2 = createElement( "div", "separator" );
        _element_DropDownMenu_Day.appendChild( separator2 );

        var viewCurrentWeekEvents = createElement( "div", "item" );
        viewCurrentWeekEvents.innerHTML = _options.listWeekEventsTooltipText;
        _element_DropDownMenu_Day.appendChild( viewCurrentWeekEvents );

        viewCurrentWeekEvents.onclick = function() {
            showListAllWeekEventsView( _element_DropDownMenu_Day_DateSelected, true );
        };
    }

    function buildEventDropDownMenu() {
        if (_element_DropDownMenu_Event !== null) {
            removeNode( _document.body, _element_DropDownMenu_Event );
        }

        if ( _options.manualEditingEnabled ) {
            _element_DropDownMenu_Event = createElement( "div", "calendar-drop-down-menu" );
            _document.body.appendChild( _element_DropDownMenu_Event );
            
            var remove = createElement( "div", "item" );
            remove.innerHTML = _options.removeEventText;
            _element_DropDownMenu_Event.appendChild( remove );
    
            remove.onclick = function() {
                addNode( _document.body, _element_DisabledBackground );
    
                var onNoEvent = function() {
                    removeNode( _document.body, _element_DisabledBackground );
                };
    
                var onYesEvent = function() {
                    onNoEvent();
    
                    if ( isDefined( _element_DropDownMenu_Event_EventDetails.id ) ) {
                        _this.removeEvent( _element_DropDownMenu_Event_EventDetails.id, true );
                        refreshOpenedViews();
                    }
                };
        
                showConfirmationDialog( _options.confirmEventRemoveTitle, _options.confirmEventRemoveMessage, onYesEvent, onNoEvent );
            };
    
            var separator1 = createElement( "div", "separator" );
            _element_DropDownMenu_Event.appendChild( separator1 );
    
            var editEvent = createElement( "div", "item" );
            editEvent.innerHTML = _options.editEventTitle;
            _element_DropDownMenu_Event.appendChild( editEvent );
    
            editEvent.onclick = function() {
                showEventDialog( _element_DropDownMenu_Event_EventDetails );
            };
        }
    }

    function showDayDropDownMenu( e, date ) {
        _element_DropDownMenu_Day_DateSelected = date;

        hideAllDropDowns();
        cancelBubble( e );
        showElementAtMousePosition( e, _element_DropDownMenu_Day );
    }

    function showEventDropDownMenu( e, eventDetails ) {
        _element_DropDownMenu_Event_EventDetails = eventDetails;

        hideAllDropDowns();
        cancelBubble( e );
        showElementAtMousePosition( e, _element_DropDownMenu_Event );
    }

    function hideDayDropDownMenu() {
        if ( isDayDropDownMenuVisible() ) {
            _element_DropDownMenu_Day.style.display = "none";
        }
    }

    function hideEventDropDownMenu() {
        if ( isEventDropDownMenuVisible() ) {
            _element_DropDownMenu_Event.style.display = "none";
        }
    }

    function isDayDropDownMenuVisible() {
        return _element_DropDownMenu_Day !== null && _element_DropDownMenu_Day.style.display === "block";
    }

    function isEventDropDownMenuVisible() {
        return _element_DropDownMenu_Event !== null && _element_DropDownMenu_Event.style.display === "block";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Disabled Background
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildDisabledBackground() {
        if ( _element_DisabledBackground === null ) {
            _element_DisabledBackground = createElement( "div", "disabled-background" );
        }
    }

    function isDisabledBackgroundDisplayed() {
        return _document.body.contains( _element_DisabledBackground );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Event Editing Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventEditingDialog() {
        if ( _element_EventEditorDialog !== null ) {
            removeNode( _document.body, _element_EventEditorDialog );
        }

        _element_EventEditorDialog = createElement( "div", "calendar-dialog event-editor" );
        _document.body.appendChild( _element_EventEditorDialog );

        var view = createElement( "div", "view" );
        _element_EventEditorDialog.appendChild( view );

        _element_EventEditorDialog_DisabledArea = createElement( "div", "disabled-area" );
        view.appendChild( _element_EventEditorDialog_DisabledArea );

        _element_EventEditorDialog_TitleBar = createElement( "div", "title-bar" );
        view.appendChild( _element_EventEditorDialog_TitleBar );

        var contents = createElement( "div", "contents" );
        view.appendChild( contents );

        var textTitle = createElement( "p" );
        textTitle.innerText = _options.titleText;
        contents.appendChild( textTitle );

        var inputTitleContainer = createElement( "div", "input-title-container" );
        contents.appendChild( inputTitleContainer );

        _element_EventEditorDialog_Title = createElement( "input", null, "text" );
        inputTitleContainer.appendChild( _element_EventEditorDialog_Title );

        var selectColorsButton = createElement( "input", "select-colors", "button" );
        selectColorsButton.value = "...";
        selectColorsButton.onclick = showEventEditorColorsDialog;
        inputTitleContainer.appendChild( selectColorsButton );

        var textFrom = createElement( "p" );
        textFrom.innerText = _options.fromText.replace( ":", "" ) + "/" + _options.toText;
        contents.appendChild( textFrom );

        var fromSplitContainer = createElement( "div", "split" );
        contents.appendChild( fromSplitContainer );

        _element_EventEditorDialog_DateFrom = createElement( "input" );
        _element_EventEditorDialog_DateFrom.onchange = isAllDayChanged;
        fromSplitContainer.appendChild( _element_EventEditorDialog_DateFrom );

        setInputType( _element_EventEditorDialog_DateFrom, "date" );

        _element_EventEditorDialog_TimeFrom = createElement( "input" );
        fromSplitContainer.appendChild( _element_EventEditorDialog_TimeFrom );

        setInputType( _element_EventEditorDialog_TimeFrom, "time" );

        var toSplitContainer = createElement( "div", "split" );
        contents.appendChild( toSplitContainer );

        _element_EventEditorDialog_DateTo = createElement( "input" );
        _element_EventEditorDialog_DateTo.onchange = isAllDayChanged;
        toSplitContainer.appendChild( _element_EventEditorDialog_DateTo );

        setInputType( _element_EventEditorDialog_DateTo, "date" );

        _element_EventEditorDialog_TimeTo = createElement( "input" );
        toSplitContainer.appendChild( _element_EventEditorDialog_TimeTo );

        setInputType( _element_EventEditorDialog_TimeTo, "time" );

        _element_EventEditorDialog_IsAllDay = buildCheckBox( contents, _options.isAllDayText, isAllDayChanged );

        var textRepeatEvery = createElement( "p" );
        textRepeatEvery.innerText = _options.repeatsText;
        contents.appendChild( textRepeatEvery );

        var radioButtonsContainer = createElement( "div", "radioButtonsContainer" );
        contents.appendChild( radioButtonsContainer );

        _element_EventEditorDialog_RepeatEvery_Never = buildRadioButton( radioButtonsContainer, _options.repeatsNever, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryDay = buildRadioButton( radioButtonsContainer, _options.repeatsEveryDayText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryWeek = buildRadioButton( radioButtonsContainer, _options.repeatsEveryWeekText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryMonth = buildRadioButton( radioButtonsContainer, _options.repeatsEveryMonthText, "RepeatType", repeatEveryEvent );
        _element_EventEditorDialog_RepeatEvery_EveryYear = buildRadioButton( radioButtonsContainer, _options.repeatsEveryYearText, "RepeatType", repeatEveryEvent );

        _element_EventEditorDialog_RepeatEvery_DaysToExcludeButton = createElement( "input", "days-to-exclude", "button" );
        _element_EventEditorDialog_RepeatEvery_DaysToExcludeButton.value = "...";
        _element_EventEditorDialog_RepeatEvery_DaysToExcludeButton.onclick = showEventEditorExcludeDaysDialog;
        radioButtonsContainer.appendChild( _element_EventEditorDialog_RepeatEvery_DaysToExcludeButton );

        var textLocation = createElement( "p" );
        textLocation.innerText = _options.locationText;
        contents.appendChild( textLocation );

        _element_EventEditorDialog_Location = createElement( "input", null, "text" );
        contents.appendChild( _element_EventEditorDialog_Location );

        var textDescription = createElement( "p" );
        textDescription.innerText = _options.descriptionText;
        contents.appendChild( textDescription );

        _element_EventEditorDialog_Description = createElement( "textarea", "custom-scroll-bars" );
        contents.appendChild( _element_EventEditorDialog_Description );

        _element_EventEditorDialog_ErrorMessage = createElement( "p", "error" );
        contents.appendChild( _element_EventEditorDialog_ErrorMessage );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        _element_EventEditorDialog_OKButton = createElement( "input", "ok", "button" );
        _element_EventEditorDialog_OKButton.value = _options.addText;
        _element_EventEditorDialog_OKButton.onclick = eventDialogEvent_OK;
        buttonsSplitContainer.appendChild( _element_EventEditorDialog_OKButton );

        var cancelButton = createElement( "input", "cancel", "button" );
        cancelButton.value = _options.cancelText;
        cancelButton.onclick = eventDialogEvent_Cancel;
        buttonsSplitContainer.appendChild( cancelButton );

        _element_EventEditorDialog_RemoveButton = createElement( "input", "remove", "button" );
        _element_EventEditorDialog_RemoveButton.value = _options.removeEventText;
        _element_EventEditorDialog_RemoveButton.onclick = eventDialogEvent_Remove;
        contents.appendChild( _element_EventEditorDialog_RemoveButton );
    }

    function setInputType( input, type ) {
        try {
            input.type = type;
        } catch ( e ) {
            input.type = "text";
        }
    }

    function addNewEvent() {
        showEventDialog( null, _element_FullDayView_DateSelected );
    }

    function repeatEveryEvent() {
        _element_EventEditorDialog_RepeatEvery_DaysToExcludeButton.disabled = _element_EventEditorDialog_RepeatEvery_Never.checked;
    }

    function isAllDayChanged() {
        var disabled = false;

        if ( _element_EventEditorDialog_IsAllDay.checked ) {
            _element_EventEditorDialog_DateTo.value = _element_EventEditorDialog_DateFrom.value;
            _element_EventEditorDialog_TimeFrom.value = "00:00";
            _element_EventEditorDialog_TimeTo.value = "23:59";
            disabled = true;
        }

        _element_EventEditorDialog_DateTo.disabled = disabled;
        _element_EventEditorDialog_TimeFrom.disabled = disabled;
        _element_EventEditorDialog_TimeTo.disabled = disabled;

        var fromDate = getSelectedDate( _element_EventEditorDialog_DateFrom ),
            toDate = getSelectedDate( _element_EventEditorDialog_DateTo );

        if ( toDate > fromDate || toDate < fromDate ) {
            disabled = true;
            _element_EventEditorDialog_RepeatEvery_Never.checked = true;
        } else {
            disabled = false;
        }

        _element_EventEditorDialog_RepeatEvery_Never.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_EveryDay.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_EveryWeek.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_EveryMonth.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_EveryYear.disabled = disabled;
        _element_EventEditorDialog_RepeatEvery_DaysToExcludeButton.disabled = disabled;

        repeatEveryEvent();
    }

    function showEventDialog( eventDetails, overrideTodayDate ) {
        addNode( _document.body, _element_DisabledBackground );

        if ( isDefined( eventDetails ) ) {
            _element_EventEditorDialog_OKButton.value = _options.updateText;
            _element_EventEditorDialog_RemoveButton.style.display = "block";
            _element_EventEditorDialog_TitleBar.innerHTML = _options.editEventTitle;
            _element_EventEditorDialog_EventDetails = eventDetails;
            _element_EventEditorDialog_DateFrom.value = toFormattedDate( eventDetails.from, _element_EventEditorDialog_DateFrom.type );
            _element_EventEditorDialog_TimeFrom.value = toFormattedTime( eventDetails.from );
            _element_EventEditorDialog_DateTo.value = toFormattedDate( eventDetails.to, _element_EventEditorDialog_DateTo.type );
            _element_EventEditorDialog_TimeTo.value = toFormattedTime( eventDetails.to );
            _element_EventEditorDialog_IsAllDay.checked = eventDetails.isAllDay;
            _element_EventEditorDialog_Title.value = getString( eventDetails.title );
            _element_EventEditorDialog_Description.value = getString( eventDetails.description );
            _element_EventEditorDialog_Location.value = getString( eventDetails.location );
            _element_EventEditorColorsDialog_Color.value = getString( eventDetails.color, "#484848" );
            _element_EventEditorColorsDialog_ColorText.value = getString( eventDetails.colorText, "#F5F5F5" );
            _element_EventEditorColorsDialog_ColorBorder.value = getString( eventDetails.colorBorder, "#282828" );

            var repeatEvery = getNumber( eventDetails.repeatEvery );
            if ( repeatEvery === _const_Repeat_Never ) {
                _element_EventEditorDialog_RepeatEvery_Never.checked = true;
            } else if ( repeatEvery === _const_Repeat_EveryDay ) {
                _element_EventEditorDialog_RepeatEvery_EveryDay.checked = true;
            } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
                _element_EventEditorDialog_RepeatEvery_EveryWeek.checked = true;
            } else if ( repeatEvery === _const_Repeat_EveryMonth ) {
                _element_EventEditorDialog_RepeatEvery_EveryMonth.checked = true;
            } else if ( repeatEvery === _const_Repeat_EveryYear ) {
                _element_EventEditorDialog_RepeatEvery_EveryYear.checked = true;
            }

            var excludeDays = getArray( eventDetails.repeatEveryExcludeDays );
            _element_EventEditorExcludeDaysDialog_Mon.checked = excludeDays.indexOf( 1 ) > -1;
            _element_EventEditorExcludeDaysDialog_Tue.checked = excludeDays.indexOf( 2 ) > -1;
            _element_EventEditorExcludeDaysDialog_Wed.checked = excludeDays.indexOf( 3 ) > -1;
            _element_EventEditorExcludeDaysDialog_Thu.checked = excludeDays.indexOf( 4 ) > -1;
            _element_EventEditorExcludeDaysDialog_Fri.checked = excludeDays.indexOf( 5 ) > -1;
            _element_EventEditorExcludeDaysDialog_Sat.checked = excludeDays.indexOf( 6 ) > -1;
            _element_EventEditorExcludeDaysDialog_Sun.checked = excludeDays.indexOf( 0 ) > -1;
        } else {

            var date = new Date(),
                today = !isDefined( overrideTodayDate ) ? date : overrideTodayDate;

            if ( isDateToday( today ) ) {
                today.setHours( date.getHours() );
                today.setMinutes( date.getMinutes() );
            }

            _element_EventEditorDialog_OKButton.value = _options.addText;
            _element_EventEditorDialog_RemoveButton.style.display = "none";
            _element_EventEditorDialog_TitleBar.innerHTML = _options.addEventTitle;
            _element_EventEditorDialog_EventDetails = {};
            _element_EventEditorDialog_DateFrom.value = toFormattedDate( today, _element_EventEditorDialog_DateFrom.type );
            _element_EventEditorDialog_TimeFrom.value = toFormattedTime( today );
            _element_EventEditorDialog_DateTo.value = toFormattedDate( today, _element_EventEditorDialog_DateTo.type );
            _element_EventEditorDialog_TimeTo.value = toFormattedTime( today );
            _element_EventEditorDialog_IsAllDay.checked = false;
            _element_EventEditorDialog_Title.value = "";
            _element_EventEditorDialog_Description.value = "";
            _element_EventEditorDialog_Location.value = "";
            _element_EventEditorColorsDialog_Color.value = "#484848";
            _element_EventEditorColorsDialog_ColorText.value = "#F5F5F5";
            _element_EventEditorColorsDialog_ColorBorder.value = "#282828";
            _element_EventEditorDialog_RepeatEvery_Never.checked = true;
            _element_EventEditorExcludeDaysDialog_Mon.checked = false;
            _element_EventEditorExcludeDaysDialog_Tue.checked = false;
            _element_EventEditorExcludeDaysDialog_Wed.checked = false;
            _element_EventEditorExcludeDaysDialog_Thu.checked = false;
            _element_EventEditorExcludeDaysDialog_Fri.checked = false;
            _element_EventEditorExcludeDaysDialog_Sat.checked = false;
            _element_EventEditorExcludeDaysDialog_Sun.checked = false;
        }

        isAllDayChanged();

        _element_EventEditorDialog.style.display = "block";
        _element_EventEditorDialog_ErrorMessage.style.display = "none";
        _element_EventEditorDialog_Title.focus();
    }

    function eventDialogEvent_OK() {
        var fromDate = getSelectedDate( _element_EventEditorDialog_DateFrom ),
            toDate = getSelectedDate( _element_EventEditorDialog_DateTo ),
            fromTime = _element_EventEditorDialog_TimeFrom.value.split( ":" ),
            toTime = _element_EventEditorDialog_TimeTo.value.split( ":" ),
            title = trimString( _element_EventEditorDialog_Title.value ),
            description = trimString( _element_EventEditorDialog_Description.value ),
            location = trimString( _element_EventEditorDialog_Location.value );

        if ( fromTime.length < 2 ) {
            showEventDialogErrorMessage( _options.fromTimeErrorMessage, _element_EventEditorDialog_TimeFrom );
        } else if ( toTime.length < 2 ) {
            showEventDialogErrorMessage( _options.toTimeErrorMessage, _element_EventEditorDialog_TimeTo );
        } else if ( title === "" ) {
            showEventDialogErrorMessage( _options.titleErrorMessage, _element_EventEditorDialog_Title );
        }
        else {

            setTimeOnDate( fromDate, _element_EventEditorDialog_TimeFrom.value );
            setTimeOnDate( toDate, _element_EventEditorDialog_TimeTo.value );

            if ( toDate < fromDate ) {
                showEventDialogErrorMessage( _options.toSmallerThanFromErrorMessage, _element_EventEditorDialog_DateTo );
            } else {
                
                eventDialogEvent_Cancel();

                var newEvent = {
                    from: fromDate,
                    to: toDate,
                    title: title,
                    description: description,
                    location: location,
                    isAllDay: _element_EventEditorDialog_IsAllDay.checked,
                    color: _element_EventEditorDialog_EventDetails.color,
                    colorText: _element_EventEditorDialog_EventDetails.colorText,
                    colorBorder: _element_EventEditorDialog_EventDetails.colorBorder,
                    repeatEveryExcludeDays: _element_EventEditorDialog_EventDetails.repeatEveryExcludeDays
                };
    
                if ( _element_EventEditorDialog_RepeatEvery_Never.checked ) {
                    newEvent.repeatEvery = _const_Repeat_Never;
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryDay.checked ) {
                    newEvent.repeatEvery = _const_Repeat_EveryDay;
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryWeek.checked ) {
                    newEvent.repeatEvery = _const_Repeat_EveryWeek;
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryMonth.checked ) {
                    newEvent.repeatEvery = _const_Repeat_EveryMonth;
                } else if ( _element_EventEditorDialog_RepeatEvery_EveryYear.checked ) {
                    newEvent.repeatEvery = _const_Repeat_EveryYear;
                }
    
                if ( isDefined( _element_EventEditorDialog_EventDetails.id ) ) {
                    _this.updateEvent( _element_EventEditorDialog_EventDetails.id, newEvent, false );
                } else {
                    _this.addEvent( newEvent, false );
                }
    
                buildDayEvents();
                refreshOpenedViews();
            }
        }
    }

    function setTimeOnDate( date, timeData ) {
        var hours = 0,
            minutes = 0,
            splitData = timeData.split( ":" );

        if ( splitData.length === 2 ) {
            var newHours = parseInt( splitData[ 0 ] ),
                newMinutes = parseInt( splitData[ 1 ] );

            if ( !isNaN( newHours ) && newHours.toString().length <= 2 ) {
                hours = newHours;
            }

            if ( !isNaN( newMinutes ) && newMinutes.toString().length <= 2 ) {
                minutes = newMinutes;
            }
        }

        date.setHours( hours );
        date.setMinutes( minutes );
    }

    function getSelectedDate( input ) {
        var result = new Date();

        if ( input.type === "date" ) {
            result = new Date( input.value );
        } else {

            var match = input.value.match( /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/ );
            if ( match ) {

                var newDate = new Date( match[ 3 ], match[ 2 ] - 1, match[ 1 ] );
                if ( newDate instanceof Date && !isNaN( newDate ) ) {
                    result = newDate;
                }
            }
        }

        return result;
    }

    function eventDialogEvent_Cancel() {
        _element_EventEditorDialog.style.display = "none";

        removeNode( _document.body, _element_DisabledBackground );
    }

    function eventDialogEvent_Remove() {
        _element_EventEditorDialog_DisabledArea.style.display = "block";

        var onNoEvent = function() {
            _element_EventEditorDialog_DisabledArea.style.display = "none";
        };

        var onYesEvent = function() {
            onNoEvent();
            eventDialogEvent_Cancel();

            if ( isDefined( _element_EventEditorDialog_EventDetails.id ) ) {
                _this.removeEvent( _element_EventEditorDialog_EventDetails.id, true );
                refreshOpenedViews();
            }
        };

        showConfirmationDialog( _options.confirmEventRemoveTitle, _options.confirmEventRemoveMessage, onYesEvent, onNoEvent );
    }

    function toFormattedDate( date, inputType ) {
        var day = ( "0" + date.getDate() ).slice( -2 ),
            month = ( "0" + ( date.getMonth() + 1 ) ).slice( -2 ),
            formatted = null;

        if ( inputType === "date" ) {
            formatted = date.getFullYear() + "-" + month + "-" + day;
        } else {
            formatted = day + "/" + month + "/" + date.getFullYear();
        }

        return formatted;
    }

    function toFormattedTime( date ) {
        return padNumber( date.getHours() ) + ":" + padNumber( date.getMinutes() );
    }

    function padNumber( number ) {
        var numberString = number.toString();

        return numberString.length === 1 ? "0" + numberString : numberString;
    }

    function showEventDialogErrorMessage( message, input ) {
        _element_EventEditorDialog_ErrorMessage.innerHTML = message;
        _element_EventEditorDialog_ErrorMessage.style.display = "block";

        input.focus();
    }

    function trimString( string ) {
        return string.replace( /^\s+|\s+$/g , "" );
    }

    function refreshOpenedViews() {
        updateFullDayViewFromEventEdit();
        updateViewAllEventsViewFromEventEdit();
        updateViewAllWeekEventsViewFromEventEdit();
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Event Editing Colors Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventEditingColorDialog() {
        if ( _element_EventEditorColorsDialog !== null ) {
            removeNode( _document.body, _element_EventEditorColorsDialog );
        }

        _element_EventEditorColorsDialog = createElement( "div", "calendar-dialog event-editor-colors" );
        _document.body.appendChild( _element_EventEditorColorsDialog );

        var titleBar = createElement( "div", "title-bar" );
        titleBar.innerHTML = _options.selectColorsText;
        _element_EventEditorColorsDialog.appendChild( titleBar );

        var contents = createElement( "div", "contents" );
        _element_EventEditorColorsDialog.appendChild( contents );

        var backgroundColorText = createElement( "p" );
        backgroundColorText.innerText = _options.backgroundColorText;
        contents.appendChild( backgroundColorText );

        _element_EventEditorColorsDialog_Color = createElement( "input" );
        contents.appendChild( _element_EventEditorColorsDialog_Color );

        setInputType( _element_EventEditorColorsDialog_Color, "color" );

        var textColorText = createElement( "p" );
        textColorText.innerText = _options.textColorText;
        contents.appendChild( textColorText );

        _element_EventEditorColorsDialog_ColorText = createElement( "input" );
        contents.appendChild( _element_EventEditorColorsDialog_ColorText );

        setInputType( _element_EventEditorColorsDialog_ColorText, "color" );

        var borderColorText = createElement( "p" );
        borderColorText.innerText = _options.borderColorText;
        contents.appendChild( borderColorText );

        _element_EventEditorColorsDialog_ColorBorder = createElement( "input" );
        contents.appendChild( _element_EventEditorColorsDialog_ColorBorder );

        setInputType( _element_EventEditorColorsDialog_ColorBorder, "color" );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        var okButton = createElement( "input", "ok", "button" );
        okButton.value = _options.okText;
        okButton.onclick = eventColorsDialogEvent_OK;
        buttonsSplitContainer.appendChild( okButton );

        var cancelButton = createElement( "input", "cancel", "button" );
        cancelButton.value = _options.cancelText;
        cancelButton.onclick = eventColorsDialogEvent_Cancel;
        buttonsSplitContainer.appendChild( cancelButton );
    }

    function eventColorsDialogEvent_OK() {
        eventColorsDialogEvent_Cancel();

        _element_EventEditorDialog_EventDetails.color = _element_EventEditorColorsDialog_Color.value;
        _element_EventEditorDialog_EventDetails.colorText = _element_EventEditorColorsDialog_ColorText.value;
        _element_EventEditorDialog_EventDetails.colorBorder = _element_EventEditorColorsDialog_ColorBorder.value;
    }

    function eventColorsDialogEvent_Cancel() {
        _element_EventEditorColorsDialog.style.display = "none";
        _element_EventEditorDialog_DisabledArea.style.display = "none";
    }

    function showEventEditorColorsDialog() {
        _element_EventEditorColorsDialog.style.display = "block";
        _element_EventEditorDialog_DisabledArea.style.display = "block";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Event Editing Exclude Days Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildEventEditingExcludeDaysDialog() {
        if ( _element_EventEditorExcludeDaysDialog !== null ) {
            removeNode( _document.body, _element_EventEditorExcludeDaysDialog );
        }

        _element_EventEditorExcludeDaysDialog = createElement( "div", "calendar-dialog event-editor-exclude-days" );
        _document.body.appendChild( _element_EventEditorExcludeDaysDialog );

        var titleBar = createElement( "div", "title-bar" );
        titleBar.innerHTML = _options.selectDaysToExcludeTitle;
        _element_EventEditorExcludeDaysDialog.appendChild( titleBar );

        var contents = createElement( "div", "contents" );
        _element_EventEditorExcludeDaysDialog.appendChild( contents );

        _element_EventEditorExcludeDaysDialog_Mon = buildCheckBox( contents, _options.dayNames[ 0 ] );
        _element_EventEditorExcludeDaysDialog_Tue = buildCheckBox( contents, _options.dayNames[ 1 ] );
        _element_EventEditorExcludeDaysDialog_Wed = buildCheckBox( contents, _options.dayNames[ 2 ] );
        _element_EventEditorExcludeDaysDialog_Thu = buildCheckBox( contents, _options.dayNames[ 3 ] );
        _element_EventEditorExcludeDaysDialog_Fri = buildCheckBox( contents, _options.dayNames[ 4 ] );
        _element_EventEditorExcludeDaysDialog_Sat = buildCheckBox( contents, _options.dayNames[ 5 ] );
        _element_EventEditorExcludeDaysDialog_Sun = buildCheckBox( contents, _options.dayNames[ 6 ] );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        var okButton = createElement( "input", "ok", "button" );
        okButton.value = _options.okText;
        okButton.onclick = eventExcludeDaysDialogEvent_OK;
        buttonsSplitContainer.appendChild( okButton );

        var cancelButton = createElement( "input", "cancel", "button" );
        cancelButton.value = _options.cancelText;
        cancelButton.onclick = eventExcludeDaysDialogEvent_Cancel;
        buttonsSplitContainer.appendChild( cancelButton );
    }

    function eventExcludeDaysDialogEvent_OK() {
        eventExcludeDaysDialogEvent_Cancel();

        var repeatEveryExcludeDays = [];

        if ( _element_EventEditorExcludeDaysDialog_Mon.checked ) {
            repeatEveryExcludeDays.push( 1 );
        }

        if ( _element_EventEditorExcludeDaysDialog_Tue.checked ) {
            repeatEveryExcludeDays.push( 2 );
        }

        if ( _element_EventEditorExcludeDaysDialog_Wed.checked ) {
            repeatEveryExcludeDays.push( 3 );
        }

        if ( _element_EventEditorExcludeDaysDialog_Thu.checked ) {
            repeatEveryExcludeDays.push( 4 );
        }

        if ( _element_EventEditorExcludeDaysDialog_Fri.checked ) {
            repeatEveryExcludeDays.push( 5 );
        }

        if ( _element_EventEditorExcludeDaysDialog_Sat.checked ) {
            repeatEveryExcludeDays.push( 6 );
        }

        if ( _element_EventEditorExcludeDaysDialog_Sun.checked ) {
            repeatEveryExcludeDays.push( 0 );
        }

        _element_EventEditorDialog_EventDetails.repeatEveryExcludeDays = repeatEveryExcludeDays;
    }

    function eventExcludeDaysDialogEvent_Cancel() {
        _element_EventEditorExcludeDaysDialog.style.display = "none";
        _element_EventEditorDialog_DisabledArea.style.display = "none";
    }

    function showEventEditorExcludeDaysDialog() {
        _element_EventEditorExcludeDaysDialog.style.display = "block";
        _element_EventEditorDialog_DisabledArea.style.display = "block";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Confirmation Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildConfirmationDialog() {
        if ( _element_ConfirmationDialog !== null ) {
            removeNode( _document.body, _element_ConfirmationDialog );
        }

        _element_ConfirmationDialog = createElement( "div", "calendar-dialog confirmation" );
        _document.body.appendChild( _element_ConfirmationDialog );

        _element_ConfirmationDialog_TitleBar = createElement( "div", "title-bar" );
        _element_ConfirmationDialog.appendChild( _element_ConfirmationDialog_TitleBar );

        var contents = createElement( "div", "contents" );
        _element_ConfirmationDialog.appendChild( contents );

        _element_ConfirmationDialog_Message = createElement( "div", "message" );
        contents.appendChild( _element_ConfirmationDialog_Message );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        _element_ConfirmationDialog_YesButton = createElement( "input", "yes", "button" );
        _element_ConfirmationDialog_YesButton.value = _options.yesText;
        buttonsSplitContainer.appendChild( _element_ConfirmationDialog_YesButton );

        _element_ConfirmationDialog_NoButton = createElement( "input", "no", "button" );
        _element_ConfirmationDialog_NoButton.value = _options.noText;
        buttonsSplitContainer.appendChild( _element_ConfirmationDialog_NoButton );
    }

    function showConfirmationDialog( title, message, onYesEvent, onNoEvent ) {
        _element_ConfirmationDialog.style.display = "block";
        _element_ConfirmationDialog_TitleBar.innerHTML = title;
        _element_ConfirmationDialog_Message.innerHTML = message;
        _element_ConfirmationDialog_YesButton.onclick = hideConfirmationDialog;
        _element_ConfirmationDialog_NoButton.onclick = hideConfirmationDialog;
        _element_ConfirmationDialog_YesButton.addEventListener( "click", onYesEvent );

        if ( isDefinedFunction( onNoEvent ) ) {
            _element_ConfirmationDialog_NoButton.addEventListener( "click", onNoEvent );
        }
    }

    function hideConfirmationDialog() {
        _element_ConfirmationDialog.style.display = "none";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Select Export Type Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildSelectExportTypeDialog() {
        if ( _element_SelectExportTypeDialog !== null ) {
            removeNode( _document.body, _element_SelectExportTypeDialog );
        }

        _element_SelectExportTypeDialog = createElement( "div", "calendar-dialog select-export-type" );
        _document.body.appendChild( _element_SelectExportTypeDialog );

        var titleBar = createElement( "div", "title-bar" );
        titleBar.innerHTML = _options.selectExportTypeTitle;
        _element_SelectExportTypeDialog.appendChild( titleBar );

        var contents = createElement( "div", "contents" );
        _element_SelectExportTypeDialog.appendChild( contents );

        var radioButtonsContainer = createElement( "div", "radioButtonsContainer" );
        contents.appendChild( radioButtonsContainer );

        _element_SelectExportTypeDialog_Option_CSV = buildRadioButton( radioButtonsContainer, "CSV", "ExportType" );
        _element_SelectExportTypeDialog_Option_XML = buildRadioButton( radioButtonsContainer, "XML", "ExportType" );
        _element_SelectExportTypeDialog_Option_JSON = buildRadioButton( radioButtonsContainer, "JSON", "ExportType" );
        _element_SelectExportTypeDialog_Option_TEXT = buildRadioButton( radioButtonsContainer, "TEXT", "ExportType" );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        var okButton = createElement( "input", "ok", "button" );
        okButton.value = _options.okText;
        okButton.onclick = exportEventsFromOptionSelected;
        buttonsSplitContainer.appendChild( okButton );

        var cancelButton = createElement( "input", "cancel", "button" );
        cancelButton.value = _options.cancelText;
        cancelButton.onclick = hideSelectExportTypeDialog;
        buttonsSplitContainer.appendChild( cancelButton );
    }

    function showSelectExportTypeDialog( events ) {
        addNode( _document.body, _element_DisabledBackground );
        _element_SelectExportTypeDialog.style.display = "block";
        _element_SelectExportTypeDialog_ExportEvents = events;
        _element_SelectExportTypeDialog_Option_CSV.checked = true;
    }

    function hideSelectExportTypeDialog() {
        removeNode( _document.body, _element_DisabledBackground );
        _element_SelectExportTypeDialog.style.display = "none";
    }

    function exportEventsFromOptionSelected() {
        hideSelectExportTypeDialog();

        if ( _element_SelectExportTypeDialog_Option_CSV.checked ) {
            exportEvents( _element_SelectExportTypeDialog_ExportEvents, "csv" );
        } else if ( _element_SelectExportTypeDialog_Option_XML.checked ) {
            exportEvents( _element_SelectExportTypeDialog_ExportEvents, "xml" );
        } else if ( _element_SelectExportTypeDialog_Option_JSON.checked ) {
            exportEvents( _element_SelectExportTypeDialog_ExportEvents, "json" );
        } else if ( _element_SelectExportTypeDialog_Option_TEXT.checked ) {
            exportEvents( _element_SelectExportTypeDialog_ExportEvents, "text" );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Search Dialog
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildSearchDialog() {
        if ( _element_SearchDialog !== null ) {
            removeNode( _document.body, _element_SearchDialog );
        }

        _element_SearchDialog = createElement( "div", "calendar-dialog search" );
        _document.body.appendChild( _element_SearchDialog );

        var titleBar = createElement( "div", "title-bar" );
        titleBar.innerHTML = _options.searchEventsTitle;
        titleBar.onmousedown = searchOnTitleBarMouseDown;
        titleBar.onmouseup = searchOnTitleBarMouseUp;
        _element_SearchDialog.appendChild( titleBar );

        var closeButton = createElement( "div", "ib-close" );
        closeButton.onclick = hideSearchDialog;
        titleBar.appendChild( closeButton );

        addToolTip( closeButton, _options.closeTooltipText );

        var contents = createElement( "div", "contents" );
        _element_SearchDialog.appendChild( contents );

        var textFor = createElement( "p" );
        textFor.innerText = _options.forText;
        contents.appendChild( textFor );

        _element_SearchDialog_For = createElement( "input", null, "text" );
        _element_SearchDialog_For.oninput = searchForTextChanged;
        _element_SearchDialog_For.onpropertychange = searchForTextChanged;
        _element_SearchDialog_For.onkeypress = searchOnEnter;
        contents.appendChild( _element_SearchDialog_For );
        
        _element_SearchDialog_MatchCase = buildCheckBox( contents, _options.matchCaseText );

        var buttonsSplitContainer = createElement( "div", "split" );
        contents.appendChild( buttonsSplitContainer );

        _element_SearchDialog_Previous = createElement( "input", "previous", "button" );
        _element_SearchDialog_Previous.value = _options.previousText;
        _element_SearchDialog_Previous.onclick = searchOnPrevious;
        buttonsSplitContainer.appendChild( _element_SearchDialog_Previous );

        _element_SearchDialog_Next = createElement( "input", "next", "button" );
        _element_SearchDialog_Next.value = _options.nextText;
        _element_SearchDialog_Next.onclick = searchOnNext;
        buttonsSplitContainer.appendChild( _element_SearchDialog_Next );

        _document.body.addEventListener( "mousemove", searchOnDocumentMouseMove );
    }

    function searchOnTitleBarMouseDown( e ) {
        if ( !_element_SearchDialog_IsMoving ) {
            _element_SearchDialog_IsMoving = true;
            _element_SearchDialog_X = e.pageX - _element_SearchDialog.offsetLeft;
            _element_SearchDialog_Y = e.pageY - _element_SearchDialog.offsetTop;
        }
    }

    function searchOnDocumentMouseMove( e ) {
        if ( _element_SearchDialog_IsMoving ) {
            _element_SearchDialog.style.left = ( e.pageX - _element_SearchDialog_X ) + "px";
            _element_SearchDialog.style.top = ( e.pageY - _element_SearchDialog_Y ) + "px";
        }
    }

    function searchOnTitleBarMouseUp() {
        if ( _element_SearchDialog_IsMoving ) {
            _element_SearchDialog_IsMoving = false;
        }
    }

    function searchForTextChanged() {
        _element_SearchDialog_Previous.disabled = true;
        _element_SearchDialog_Next.disabled = _element_SearchDialog_For.value === "";
        _element_SearchDialog_SearchResults = [];
        _element_SearchDialog_SearchIndex = 0;
    }

    function showSearchDialog() {
        _element_SearchDialog_SearchResults = [];
        _element_SearchDialog.style.display = "block";
        _element_SearchDialog_For.value = "";
        _element_SearchDialog_For.focus();

        searchForTextChanged();
    }

    function hideSearchDialog() {
        _element_SearchDialog.style.display = "none";
    }

    function searchOnPrevious() {
        if ( _element_SearchDialog_SearchIndex > 0 ) {
            _element_SearchDialog_SearchIndex--;

            updateSearchButtons();
            build( _element_SearchDialog_SearchResults[ _element_SearchDialog_SearchIndex ].from );
        }
    }

    function searchOnEnter( e ) {
        if ( e.keyCode === 13 && !_element_SearchDialog_Next.disabled ) {
            searchOnNext();
        }
    }

    function searchOnNext() {
        if ( _element_SearchDialog_SearchResults.length === 0 ) {
            var matchCase = _element_SearchDialog_MatchCase.checked,
                search = !matchCase ? _element_SearchDialog_For.value.toLowerCase() : _element_SearchDialog_For.value,
                monthYearsFound = {};

            getAllEventsFunc( function( event ) {
                var title = !matchCase ? event.title.toLowerCase() : event.title,
                    description = !matchCase ? event.description.toLowerCase() : event.description;

                if ( title.indexOf( search ) > -1 || description.indexOf( search ) > -1 ) {
                    var monthYear = event.from.getMonth() + "-" + event.from.getFullYear();

                    if ( !monthYearsFound.hasOwnProperty( monthYear ) ) {
                        _element_SearchDialog_SearchResults.push( event );
                        monthYearsFound[ monthYear ] = true;
                    }
                }
            } );

        } else {
            _element_SearchDialog_SearchIndex++;
        }

        updateSearchButtons();
        build( _element_SearchDialog_SearchResults[ _element_SearchDialog_SearchIndex ].from );
    }

    function updateSearchButtons() {
        _element_SearchDialog_Previous.disabled = _element_SearchDialog_SearchIndex === 0;
        _element_SearchDialog_Next.disabled = _element_SearchDialog_SearchIndex === _element_SearchDialog_SearchResults.length - 1;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Tooltip
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildTooltip() {
        if ( _element_Tooltip === null ) {
            _element_Tooltip = createElement( "div" );
            _document.body.appendChild( _element_Tooltip );

            _element_Tooltip_Title = createElement( "div", "title" );
            _element_Tooltip_Date = createElement( "div", "date" );
            _element_Tooltip_Repeats = createElement( "div", "repeats" );
            _element_Tooltip_Description = createElement( "div", "description" );
            _element_Tooltip_Location = createElement( "div", "location" );

            document.body.addEventListener( "mousemove", hideTooltip );
        }
    }

    function showTooltip( e, eventDetails, text ) {
        cancelBubble( e );
        clearTooltipTimer();
        hideTooltip();

        if ( _element_Tooltip.style.display !== "block" ) {
            _element_Tooltip_ShowTimer = setTimeout( function() {
                if ( !isDisabledBackgroundDisplayed() && !isYearSelectorDropDownVisible() && !isDayDropDownMenuVisible() && !isEventDropDownMenuVisible() ) {
                    text = isDefined( text ) ? text : "";

                    _element_Tooltip.className = text === "" ? "calendar-tooltip-event" : "calendar-tooltip";

                    if ( text !== "" ) {
                        _element_Tooltip.innerHTML = text;
                    } else {

                        _element_Tooltip.innerHTML = "";
                        _element_Tooltip.appendChild( _element_Tooltip_Title );
                        _element_Tooltip.appendChild( _element_Tooltip_Date );
                        _element_Tooltip_Title.innerHTML = eventDetails.title;

                        if ( isDefinedNumber( eventDetails.repeatEvery ) && eventDetails.repeatEvery > _const_Repeat_Never ) {
                            _element_Tooltip_Repeats.innerHTML = _options.repeatsText.replace( ":", "" ) + " " + getRepeatsText( eventDetails.repeatEvery );
                            addNode( _element_Tooltip, _element_Tooltip_Repeats );
                        } else {
                            _element_Tooltip_Repeats.innerHTML = "";
                            removeNode( _element_Tooltip, _element_Tooltip_Repeats );
                        }

                        if ( isDefinedStringAndSet( eventDetails.location ) ) {
                            _element_Tooltip_Location.innerHTML = eventDetails.location;
                            addNode( _element_Tooltip, _element_Tooltip_Location );
                        } else {
                            _element_Tooltip_Location.innerHTML = "";
                            removeNode( _element_Tooltip, _element_Tooltip_Location );
                        }
    
                        if ( isDefinedStringAndSet( eventDetails.description ) ) {
                            _element_Tooltip_Description.innerHTML = eventDetails.description;
                            addNode( _element_Tooltip, _element_Tooltip_Description );
                        } else {
                            _element_Tooltip_Description.innerHTML = "";
                            removeNode( _element_Tooltip, _element_Tooltip_Description );
                        }
        
                        if ( eventDetails.from.getDate() === eventDetails.to.getDate() ) {
                            if ( eventDetails.isAllDay ) {
                                _element_Tooltip_Date.innerHTML = _options.allDayText;
                            } else {
                                _element_Tooltip_Date.innerHTML = getTimeToTimeDisplay( eventDetails.from, eventDetails.to );
                            }
                        } else {
                            buildDateTimeToDateTimeDisplay( _element_Tooltip_Date, eventDetails.from, eventDetails.to );
                        }
                    }

                    showElementAtMousePosition( e, _element_Tooltip );
                }

            }, _options.eventTooltipDelay );
        }
    }

    function hideTooltip() {
        clearTooltipTimer();

        if ( isTooltipVisible() ) {
            _element_Tooltip.style.display = "none";
        }
    }

    function clearTooltipTimer() {
        if ( _element_Tooltip_ShowTimer !== null ) {
            clearTimeout( _element_Tooltip_ShowTimer );
            _element_Tooltip_ShowTimer = null;
        }
    }

    function isTooltipVisible() {
        return _element_Tooltip_ShowTimer !== null || ( _element_Tooltip !== null && _element_Tooltip.style.display === "block" );
    }

    function addToolTip( element, text ) {
        element.onmousemove = function( e ) {
            showTooltip( e, null, text );
        };
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Auto-Refresh Timer
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function startAutoRefreshTimer() {
        if ( _timer_RefreshMainDisplay === null && _options.autoRefreshTimerDelay > 0 ) {
            _timer_RefreshMainDisplay = setInterval( function() {
                refreshViews();
            }, _options.autoRefreshTimerDelay );
        }
    }

    function clearAutoRefreshTimer() {
        if ( _timer_RefreshMainDisplay !== null && _options.autoRefreshTimerDelay > 0 ) {
            clearTimeout( _timer_RefreshMainDisplay );
            _timer_RefreshMainDisplay = null;
        }
    }

    function refreshViews() {
        if ( !isTooltipVisible() && !isDisabledBackgroundDisplayed() && !isYearSelectorDropDownVisible() && !isDayDropDownMenuVisible() && !isEventDropDownMenuVisible() ) {
            refreshOpenedViews();
            buildDayEvents();
        }
    }

    
    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Overlay Handling
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function showOverlay( element ) {
        if ( !isOverlayVisible( element ) ) {
            element.className += " overlay-shown";
        }
    }

    function hideOverlay( element ) {
        if ( isOverlayVisible( element ) ) {
            element.className = element.className.replace( " overlay-shown", "" );
        }
    }

    function isOverlayVisible( element ) {
        return element.className.indexOf( "overlay-shown" ) > -1;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Element Handling
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function createElement( type, className, inputType ) {
        var result = null,
            nodeType = type.toLowerCase(),
            isText = nodeType === "text";

        if ( !_elementTypes.hasOwnProperty( nodeType ) ) {
            _elementTypes[ nodeType ] = isText ? _document.createTextNode( "" ) : _document.createElement( nodeType );
        }

        result = _elementTypes[ nodeType ].cloneNode( false );

        if ( isDefined( className ) ) {
            result.className = className;
        }

        if ( isDefined( inputType ) ) {
            result.type = inputType;
        }

        return result;
    }

    function getElementByID( id ) {
        if ( !_elements.hasOwnProperty( id ) || _elements[ id ] === null ) {
            _elements[ id ] = _document.getElementById( id );
        }

        if ( !_document.body.contains( _elements[ id ] ) ) {
            _elements[ id ] = _document.getElementById( id );
        }

        return _elements[ id ];
    }

    function addNode( parent, node ) {
        try {
            if ( !parent.contains( node ) ) {
                parent.appendChild( node );
            }
        } catch ( e ) {
            console.warn( e.message );
        }
    }

    function removeNode( parent, node ) {
        try {
            if ( parent.contains( node ) ) {
                parent.removeChild( node );
            }
        } catch ( e ) {
            console.warn( e.message );
        }
    }

    function cancelBubble( e ) {
        e.preventDefault();
        e.cancelBubble = true;
    }

    function showElementAtMousePosition( e, element ) {
        var left = e.pageX,
            top = e.pageY;

        element.style.display = "block";

        if ( left + element.offsetWidth > _window.innerWidth ) {
            left -= element.offsetWidth;
        } else {
            left++;
        }

        if ( top + element.offsetHeight > _window.innerHeight ) {
            top -= element.offsetHeight;
        } else {
            top++;
        }
        
        element.style.left = left + "px";
        element.style.top = top + "px";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Build Input Types
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function buildRadioButton( container, labelText, groupName, onChangeEvent ) {
        var lineContents = createElement( "div", "radioButtonContainer" );
        container.appendChild( lineContents );

        var label = createElement( "label", "radioButton" );
        lineContents.appendChild( label );

        var input = createElement( "input", null, "radio" );
        input.name = groupName;
        label.appendChild( input );

        if ( isDefined( onChangeEvent ) ) {
            input.onchange = onChangeEvent;
        }

        var labelSpan = createElement( "span", "check-mark" );
        label.appendChild( labelSpan );

        var labelSpanText = createElement( "span", "text" );
        labelSpanText.innerText = labelText;
        label.appendChild( labelSpanText );

        return input;
    }

    function buildCheckBox( container, labelText, onChangeEvent ) {
        var lineContents = createElement( "div" );
        container.appendChild( lineContents );

        var label = createElement( "label", "checkbox" );
        label.innerText = labelText;
        lineContents.appendChild( label );

        var input = createElement( "input", null, "checkbox" );
        label.appendChild( input );

        if ( isDefined( onChangeEvent ) ) {
            input.onchange = onChangeEvent;
        }

        var labelSpan = createElement( "span", "check-mark" );
        label.appendChild( labelSpan );

        return input;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Validation
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function isDefined( data ) {
        return data !== undefined && data !== null && data !== "";
    }

    function isFunction( object ) {
        return typeof object === "function";
    }

    function isDefinedFunction( object ) {
        return isDefined( object ) && isFunction( object );
    }

    function isDefinedString( object ) {
        return isDefined( object ) && typeof object === "string";
    }

    function isDefinedNumber( object ) {
        return isDefined( object ) && typeof object === "number";
    }

    function isDefinedBoolean( object ) {
        return isDefined( object ) && typeof object === "boolean";
    }

    function isDefinedArray( object ) {
        return isDefined( object ) && typeof object === "object" && object instanceof Array;
    }

    function isDefinedStringAndSet( object ) {
        return isDefinedString( object ) && object !== "";
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Export Events
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function exportEvents( events, type ) {
        type = isDefined( type ) ? type.toLowerCase() : "csv";

        var contents = "",
            contentsEvents = getExportEvents( events );

        if ( type === "csv" ) {
            contents = getCsvContents( contentsEvents );
        } else if ( type === "xml" ) {
            contents = getXmlContents( contentsEvents );
        } else if ( type === "json" ) {
            contents = getJsonContents( contentsEvents );
        } else if ( type === "text" ) {
            contents = getTextContents( contentsEvents );
        }

        if ( contents !== "" ) {
            var tempLink = createElement( "a" ),
                mimeType = type === "text" ? "plain" : type,
                extension = type === "text" ? "txt" : type;

            tempLink.style.display = "none";
            tempLink.setAttribute( "target", "_blank" );
            tempLink.setAttribute( "href", "data:text/" + mimeType + ";charset=utf-8," + encodeURIComponent( contents ) );
            tempLink.setAttribute( "download", getExportDownloadFilename( extension ) );
    
            _document.body.appendChild( tempLink );
            tempLink.click();
            _document.body.removeChild( tempLink );
    
            triggerOptionsEvent( "onEventsExported" );
        }
    }

    function getExportEvents( events ) {
        var csvOrderedEvents = [];

        if ( isDefined( events ) ) {
            csvOrderedEvents = csvOrderedEvents.concat( events );
        } else {
            csvOrderedEvents = getAllEvents();
        }

        csvOrderedEvents = getOrderedEvents( csvOrderedEvents );

        return csvOrderedEvents;
    }

    function getExportDownloadFilename( extension ) {
        var date = new Date(),
            datePart = padNumber( date.getDate() ) + "-" + padNumber( date.getMonth() ) + "-" + date.getFullYear(),
            timePart = padNumber( date.getHours() ) + "-" + padNumber( date.getMinutes() );

        return _options.exportStartFilename + datePart + "_" + timePart + "." + extension;
    }

    function getYesNoFromBoolean( flag ) {
        return flag ? _options.yesText : _options.noText;
    }

    function getStringFromDateTime( eventDate ) {
        var date = padNumber( eventDate.getDate() ) + "/" + padNumber( eventDate.getMonth() ) + "/" + eventDate.getFullYear(),
            time = padNumber( eventDate.getHours() ) + ":" + padNumber( eventDate.getMinutes() );

        return date + " " + time;
    }

    function getString( value, defaultValue ) {
        defaultValue = isDefined( defaultValue ) ? defaultValue : "";

        return isDefinedString( value ) ? value : defaultValue;
    }

    function getNumber( value, defaultValue ) {
        defaultValue = isDefined( defaultValue ) ? defaultValue : 0;

        return isDefinedNumber( value ) ? value : defaultValue;
    }

    function getBooleanAsNumber( value, defaultValue  ) {
        defaultValue = isDefined( defaultValue ) ? defaultValue : 0;

        return isDefinedBoolean( value ) ? value ? 1 : 0 : defaultValue;
    }

    function getArray( value, defaultValue ) {
        defaultValue = isDefined( defaultValue ) ? defaultValue : [];

        return isDefinedArray( value ) ? value : defaultValue;
    }

    function getRepeatsText( value ) {
        var result = _options.repeatsNever,
            repeatEvery = getNumber( value );

        if ( repeatEvery === _const_Repeat_EveryDay ) {
            result = _options.repeatsEveryDayText;
        } else if ( repeatEvery === _const_Repeat_EveryWeek ) {
            result = _options.repeatsEveryWeekText;
        } else if ( repeatEvery === _const_Repeat_EveryMonth ) {
            result = _options.repeatsEveryMonthText;
        } else if ( repeatEvery === _const_Repeat_EveryYear ) {
            result = _options.repeatsEveryYearText;
        }

        return result;
    }

    function getArrayText( value ) {
        return getArray( value ).join( "," );
    }

    function getPropertyName( name ) {
        return name.charAt( 0 ).toUpperCase() + name.slice( 1 );
    }

    function getPropertyValue( name, value ) {
        var result = getString( value );

        if ( typeof value === "boolean" ) {
            result = getYesNoFromBoolean( value );
        } else if ( typeof value === "object" && value instanceof Date ) {
            result = getStringFromDateTime( value );
        } else if ( typeof value === "object" && value instanceof Array ) {
            result = getArrayText( value );
        } else if ( typeof value === "number" ) {

            if ( name === "repeatEvery" ) {
                result = getRepeatsText( value );
            } else {
                result = value.toString();
            }
        }

        return result;
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To CSV
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getCsvContents( orderedEvents ) {
        var headers = [ _options.fromText, _options.toText, _options.isAllDayText, _options.titleText, _options.descriptionText, _options.locationText, _options.backgroundColorText, _options.textColorText, _options.borderColorText, _options.repeatsText, _options.repeatDaysToExcludeText ],
            headersLength = headers.length,
            csvHeaders = [],
            csvContents = [];

        for ( var headerIndex = 0; headerIndex < headersLength; headerIndex++ ) {
            csvHeaders.push( getCsvValue( headers[ headerIndex ] ) );
        }
        
        csvContents.push( getCsvValueLine( csvHeaders ) );

        var orderedEventLength = orderedEvents.length;
        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            storeCsvData( csvContents, orderedEvents[ orderedEventIndex ] );
        }

        return csvContents.join( "\n" );
    }

    function storeCsvData( csvContents, eventDetails ) {
        var eventContents = [];

        eventContents.push( getCsvValue( getStringFromDateTime( eventDetails.from ) ) );
        eventContents.push( getCsvValue( getStringFromDateTime( eventDetails.to ) ) );
        eventContents.push( getCsvValue( getYesNoFromBoolean( eventDetails.isAllDay ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.title ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.description ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.location ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.color ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.colorText ) ) );
        eventContents.push( getCsvValue( getString( eventDetails.colorBorder ) ) );
        eventContents.push( getCsvValue( getRepeatsText( eventDetails.repeatEvery ) ) );
        eventContents.push( getCsvValue( getArrayText( eventDetails.repeatEveryExcludeDays ) ) );

        csvContents.push( getCsvValueLine( eventContents ) );
    }

    function getCsvValue( text ) {
        text = text.replace( /(\r\n|\n|\r)/gm, "" ).replace( /(\s\s)/gm, " " );
        text = text.replace( /"/g, '""' );
        text = '"' + text + '"';

        return text;
    }

    function getCsvValueLine( csvValues ) {
        return csvValues.join( "," );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To XML
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getXmlContents( orderedEvents ) {
        var xmlContents = [];
        xmlContents.push( "<?xml version=\"1.0\" ?>" );
        xmlContents.push( "<Events>" );

        var orderedEventLength = orderedEvents.length;
        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ];

            xmlContents.push( "<Event>" );

            for ( var propertyName in orderedEvent ) {
                if ( orderedEvent.hasOwnProperty( propertyName ) ) {
                    var newPropertyName = getPropertyName( propertyName );
                    
                    xmlContents.push( "<" + newPropertyName + ">" + getPropertyValue( propertyName, orderedEvent[ propertyName ] ) + "</" + newPropertyName + ">" );
                }
            }
    
            xmlContents.push( "</Event>" );
        }

        xmlContents.push( "</Events>" );

        return xmlContents.join( "\n" );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To JSON
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getJsonContents( orderedEvents ) {
        var jsonContents = [];
        jsonContents.push( "{" );
        jsonContents.push( "\"events:\": [" );

        var orderedEventLength = orderedEvents.length;
        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ];
            
            jsonContents.push( "{" );

            for ( var propertyName in orderedEvent ) {
                if ( orderedEvent.hasOwnProperty( propertyName ) ) {
                    jsonContents.push( "\"" + propertyName + "\":\"" + getPropertyValue( propertyName, orderedEvent[ propertyName ] ) + "\"," );
                }
            }

            var lastJsonEntry = jsonContents[ jsonContents.length - 1 ];
            jsonContents[ jsonContents.length - 1 ] = lastJsonEntry.substring( 0, lastJsonEntry.length - 1 );
    
            jsonContents.push( "}," );
        }

        jsonContents[ jsonContents.length - 1 ] = "}";
        jsonContents.push( "]" );
        jsonContents.push( "}" );

        return jsonContents.join( "\n" );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Exporting To TEXT
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    function getTextContents( orderedEvents ) {
        var textContents = [];

        var orderedEventLength = orderedEvents.length;
        for ( var orderedEventIndex = 0; orderedEventIndex < orderedEventLength; orderedEventIndex++ ) {
            var orderedEvent = orderedEvents[ orderedEventIndex ];

            for ( var propertyName in orderedEvent ) {
                if ( orderedEvent.hasOwnProperty( propertyName ) ) {
                    textContents.push( getPropertyName( propertyName ) + ": " + getPropertyValue( propertyName, orderedEvent[ propertyName ] ) );
                }
            }
    
            textContents.push( "" );
        }

        textContents.pop();

        return textContents.join( "\n" );
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Navigation, Exporting and Refreshing (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * moveToPreviousMonth().
     * 
     * Moves to the previous month.
     * 
     * @fires onPreviousMonth
     */
    this.moveToPreviousMonth = function() {
        moveBackMonth();
    };

    /**
     * moveToNextMonth().
     * 
     * Moves to the next month.
     * 
     * @fires onNextMonth
     */
    this.moveToNextMonth = function() {
        moveForwardMonth();
    };

    /**
     * moveToToday().
     * 
     * Moves to the current month.
     * 
     * @fires onToday
     */
    this.moveToToday = function() {
        moveToday();
    };

    /**
     * exportAllEvents().
     * 
     * Exports all the events into a CSV download.
     * 
     * @fires onEventsExported
     * 
     * @param       {string}    type                                        The data type to export to (defaults to "csv").
     */
    this.exportAllEvents = function( type ) {
        if ( _options.exportEventsEnabled ) {
            type = !isDefined( type ) ? "csv" : type;

            exportEvents( null, type );
        }
    };

    /**
     * refresh().
     * 
     * Refreshes all of the views.
     */
    this.refresh = function() {
        refreshViews();
    };

    function moveBackMonth() {
        var previousMonth = new Date( _currentDate );
        previousMonth.setMonth( previousMonth.getMonth() - 1 );
        previousMonth.setDate( 1 );

        build( previousMonth );
        triggerOptionsEvent( "onPreviousMonth" );
    }

    function moveForwardMonth() {
        var nextMonth = new Date( _currentDate );
        nextMonth.setMonth( nextMonth.getMonth() + 1 );
        nextMonth.setDate( 1 );

        build( nextMonth );
        triggerOptionsEvent( "onNextMonth" );
    }

    function moveToday() {
        var today = new Date();

        if ( _currentDate.getMonth() !== today.getMonth() || _currentDate.getFullYear() !== today.getFullYear() ) {
            build();
            triggerOptionsEvent( "onToday" );
        }
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Add/Remove Events (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * addEvents().
     * 
     * Adds an array of new events.
     * 
     * @fires       onEventsAdded
     * 
     * @param       {Object[]}  events                                      The array of events (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States of the "onEventsAdded" event should be triggered.
     */
    this.addEvents = function( events, updateEvents, triggerEvent ) {
        updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
        triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

        var eventsLength = events.length;
        for ( var eventIndex = 0; eventIndex < eventsLength; eventIndex++ ) {
            var event = events[ eventIndex ];

            this.addEvent( event, false, false );
        }

        if ( triggerEvent ) {
            triggerOptionsEventWithEventData( "onEventAdded", events );
        }

        if ( updateEvents ) {
            buildDayEvents();
        }
    };

    /**
     * addEvent().
     * 
     * Adds a of new event.
     * 
     * @fires       onEventAdded
     * 
     * @param       {Object}    event                                       The event (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States of the "onEventAdded" event should be triggered.
     * 
     * @returns     {boolean}                                               States if the event was added.
     */
    this.addEvent = function( event, updateEvents, triggerEvent ) {
        var added = false;

        if ( event.from <= event.to ) {
            var storageDate = toStorageDate( event.from ),
                storageGuid = newGuid();

            if ( !_events.hasOwnProperty( storageDate ) ) {
                _events[ storageDate ] = {};
            }

            if ( !_events[ storageDate ].hasOwnProperty( storageGuid ) ) {
                updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
                triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

                if ( !isDefined( event.id ) ) {
                    event.id = storageGuid;
                } else {
                    storageGuid = event.id;
                }

                _events[ storageDate ][ storageGuid ] = getAdjustedAllDayEvent( event );
                added = true;

                if ( triggerEvent ) {
                    triggerOptionsEventWithEventData( "onEventAdded", event );
                }
        
                if ( updateEvents ) {
                    buildDayEvents();
                }
            }
        }

        return added;
    };

    /**
     * updateEvent().
     * 
     * Adds an array of new events.
     * 
     * @fires       onEventUpdated
     * 
     * @param       {string}    id                                          The ID of the event.
     * @param       {Object}    event                                       The event (refer to "Day Event" documentation for properties).
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States of the "onEventUpdated" event should be triggered.
     * 
     * @returns     {boolean}                                               States if the event was updated.
     */
    this.updateEvent = function( id, event, updateEvents, triggerEvent ) {
        var updated = this.removeEvent( id, false, false );
        if ( updated ) {
            updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
            triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

            event.id = newGuid();

            updated = this.addEvent( event, updateEvents, false );

            if ( updated && triggerEvent ) {
                triggerOptionsEventWithEventData( "onEventUpdated", event );
            }
        }
        
        return updated;
    };

    /**
     * removeEvent().
     * 
     * Removes an event.
     * 
     * @fires       onEventRemoved
     * 
     * @param       {string}    id                                          The ID of the event.
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     * @param       {boolean}   triggerEvent                                States of the "onEventRemoved" event should be triggered.
     * 
     * @returns     {boolean}                                               States if the event was removed.
     */
    this.removeEvent = function( id, updateEvents, triggerEvent ) {
        var removed = false;

        getAllEventsFunc( function( event, storageDate, storageGuid ) {
            if ( storageGuid === id ) {
                updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
                triggerEvent = !isDefined( triggerEvent ) ? true : triggerEvent;

                delete _events[ storageDate ][ storageGuid ];
                removed = true;

                if ( triggerEvent ) {
                    triggerOptionsEventWithEventData( "onEventRemoved", event );
                }

                if ( updateEvents ) {
                    buildDayEvents();
                }

                return true;
            }
        } );

        return removed;
    };

    /**
     * clearEvents().
     * 
     * Clears all the events.
     * 
     * @fires       onEventsCleared
     * 
     * @param       {boolean}   updateEvents                                States of the calendar display should be updated (defaults to true).
     */
    this.clearEvents = function( updateEvents ) {
        updateEvents = !isDefined( updateEvents ) ? true : updateEvents;
        _events = {};

        triggerOptionsEvent( "onEventsCleared" );

        if ( updateEvents ) {
            buildDayEvents();
        }
    };

    function toStorageDate( date ) {
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    }


    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Setting Options (public)
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
     * setOptions().
     * 
     * Sets the options that should be used in Calendar.js.
     * 
     * @param {Object}      newOptions                                  All the configurable options that should be used (refer to "Options" documentation for properties).
     */
    this.setOptions = function( newOptions ) {
        if ( newOptions !== null && typeof newOptions === "object" ) {
            _options = newOptions;
        } else {
            _options = {};
        }

        if ( !isDefined( _options.previousMonthTooltipText ) ) {
            _options.previousMonthTooltipText = "Previous Month";
        }

        if ( !isDefined( _options.nextMonthTooltipText ) ) {
            _options.nextMonthTooltipText = "Next Month";
        }

        if ( !isDefined( _options.previousDayTooltipText ) ) {
            _options.previousDayTooltipText = "Previous Day";
        }

        if ( !isDefined( _options.nextDayTooltipText ) ) {
            _options.nextDayTooltipText = "Next Day";
        }

        if ( !isDefined( _options.previousWeekTooltipText ) ) {
            _options.previousWeekTooltipText = "Previous Week";
        }

        if ( !isDefined( _options.nextWeekTooltipText ) ) {
            _options.nextWeekTooltipText = "Next Week";
        }

        if ( !isDefined( _options.addEventTooltipText ) ) {
            _options.addEventTooltipText = "Add Event";
        }

        if ( !isDefined( _options.closeTooltipText ) ) {
            _options.closeTooltipText = "Close";
        }

        if ( !isDefined( _options.exportEventsTooltipText ) ) {
            _options.exportEventsTooltipText = "Export Events";
        }

        if ( !isDefined( _options.todayTooltipText ) ) {
            _options.todayTooltipText = "Today";
        }

        if ( !isDefined( _options.refreshTooltipText ) ) {
            _options.refreshTooltipText = "Refresh";
        }

        if ( !isDefined( _options.searchTooltipText ) ) {
            _options.searchTooltipText = "Search";
        }

        if ( !isDefined( _options.expandDayTooltipText ) ) {
            _options.expandDayTooltipText = "Expand Day";
        }

        if ( !isDefined( _options.listAllEventsTooltipText ) ) {
            _options.listAllEventsTooltipText = "View All Events";
        }

        if ( !isDefined( _options.listWeekEventsTooltipText ) ) {
            _options.listWeekEventsTooltipText = "View Current Week Events";
        }

        if ( !isDefined( _options.dayHeaderNames ) ) {
            _options.dayHeaderNames = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ];
        }

        if ( !isDefined( _options.dayNames ) ) {
            _options.dayNames = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
        }

        if ( !isDefined( _options.fromText ) ) {
            _options.fromText = "From:";
        }

        if ( !isDefined( _options.toText ) ) {
            _options.toText = "To:";
        }

        if ( !isDefined( _options.isAllDayText ) ) {
            _options.isAllDayText = "Is All-Day";
        }

        if ( !isDefined( _options.titleText ) ) {
            _options.titleText = "Title:";
        }

        if ( !isDefined( _options.descriptionText ) ) {
            _options.descriptionText = "Description:";
        }

        if ( !isDefined( _options.locationText ) ) {
            _options.locationText = "Location:";
        }

        if ( !isDefined( _options.addText ) ) {
            _options.addText = "Add";
        }

        if ( !isDefined( _options.updateText ) ) {
            _options.updateText = "Update";
        }

        if ( !isDefined( _options.cancelText ) ) {
            _options.cancelText = "Cancel";
        }

        if ( !isDefined( _options.removeEventText ) ) {
            _options.removeEventText = "Remove";
        }

        if ( !isDefined( _options.addEventTitle ) ) {
            _options.addEventTitle = "Add Event";
        }

        if ( !isDefined( _options.editEventTitle ) ) {
            _options.editEventTitle = "Edit Event";
        }

        if ( !isDefined( _options.monthNames ) ) {
            _options.monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
        }

        if ( !isDefined( _options.showDayNumberOrdinals ) ) {
            _options.showDayNumberOrdinals = true;
        }

        if ( !isDefined( _options.dragAndDropForEventsEnabled ) ) {
            _options.dragAndDropForEventsEnabled = true;
        }

        if ( !isDefined( _options.exportStartFilename ) ) {
            _options.exportStartFilename = "exported_events_";
        }

        if ( !isDefined( _options.fromTimeErrorMessage ) ) {
            _options.fromTimeErrorMessage = "Please select a valid 'From' time.";
        }

        if ( !isDefined( _options.toTimeErrorMessage ) ) {
            _options.toTimeErrorMessage = "Please select a valid 'To' time.";
        }

        if ( !isDefined( _options.toSmallerThanFromErrorMessage ) ) {
            _options.toSmallerThanFromErrorMessage = "Please select a 'To' date that is larger than the 'From' date.";
        }

        if ( !isDefined( _options.titleErrorMessage ) ) {
            _options.titleErrorMessage = "Please enter a value in the 'Title' field (no empty space).";
        }

        if ( !isDefined( _options.stText ) ) {
            _options.stText = "st";
        }

        if ( !isDefined( _options.ndText ) ) {
            _options.ndText = "nd";
        }

        if ( !isDefined( _options.rdText ) ) {
            _options.rdText = "rd";
        }

        if ( !isDefined( _options.thText ) ) {
            _options.thText = "th";
        }

        if ( !isDefined( _options.maximumEventsPerDayDisplay ) ) {
            _options.maximumEventsPerDayDisplay = 3;
        }

        if ( !isDefined( _options.yesText ) ) {
            _options.yesText = "Yes";
        }

        if ( !isDefined( _options.noText ) ) {
            _options.noText = "No";
        }

        if ( !isDefined( _options.extraSelectableYearsAhead ) ) {
            _options.extraSelectableYearsAhead = 51;
        }

        if ( !isDefined( _options.allDayText ) ) {
            _options.allDayText = "All-Day";
        }

        if ( !isDefined( _options.allEventsText ) ) {
            _options.allEventsText = "All Events";
        }

        if ( !isDefined( _options.exportEventsEnabled ) ) {
            _options.exportEventsEnabled = true;
        }

        if ( !isDefined( _options.manualEditingEnabled ) ) {
            _options.manualEditingEnabled = true;
        }

        if ( !isDefined( _options.showTimesInMainCalendarEvents ) ) {
            _options.showTimesInMainCalendarEvents = false;
        }

        if ( !isDefined( _options.startsOnText ) ) {
            _options.startsOnText = "Starts on the";
        }

        if ( !isDefined( _options.andFinishesOnText ) ) {
            _options.andFinishesOnText = "and finishes on the";
        }

        if ( !isDefined( _options.toTimeText ) ) {
            _options.toTimeText = "to";
        }

        if ( !isDefined( _options.autoRefreshTimerDelay ) ) {
            _options.autoRefreshTimerDelay = 5000;
        }

        if ( !isDefined( _options.confirmEventRemoveTitle ) ) {
            _options.confirmEventRemoveTitle = "Confirm Event Removal";
        }

        if ( !isDefined( _options.confirmEventRemoveMessage ) ) {
            _options.confirmEventRemoveMessage = "Removing this event cannot be undone.  Do you want to continue?";
        }

        if ( !isDefined( _options.okText ) ) {
            _options.okText = "OK";
        }

        if ( !isDefined( _options.selectExportTypeTitle ) ) {
            _options.selectExportTypeTitle = "Select Export Type";
        }

        if ( !isDefined( _options.fullScreenModeEnabled ) ) {
            _options.fullScreenModeEnabled = true;
        }

        if ( !isDefined( _options.eventTooltipDelay ) ) {
            _options.eventTooltipDelay = 1000;
        }

        if ( !isDefined( _options.selectColorsText ) ) {
            _options.selectColorsText = "Select Colors";
        }

        if ( !isDefined( _options.backgroundColorText ) ) {
            _options.backgroundColorText = "Background Color:";
        }

        if ( !isDefined( _options.textColorText ) ) {
            _options.textColorText = "Text Color:";
        }

        if ( !isDefined( _options.borderColorText ) ) {
            _options.borderColorText = "Border Color:";
        }

        if ( !isDefined( _options.searchEventsTitle ) ) {
            _options.searchEventsTitle = "Search Events";
        }

        if ( !isDefined( _options.forText ) ) {
            _options.forText = "For:";
        }

        if ( !isDefined( _options.previousText ) ) {
            _options.previousText = "Previous";
        }

        if ( !isDefined( _options.nextText ) ) {
            _options.nextText = "Next";
        }

        if ( !isDefined( _options.matchCaseText ) ) {
            _options.matchCaseText = "Match Case";
        }

        if ( !isDefined( _options.minimumDayHeight ) ) {
            _options.minimumDayHeight = 0;
        }

        if ( !isDefined( _options.repeatsText ) ) {
            _options.repeatsText = "Repeats:";
        }

        if ( !isDefined( _options.repeatDaysToExcludeText ) ) {
            _options.repeatDaysToExcludeText = "Repeat Days To Exclude:";
        }

        if ( !isDefined( _options.repeatsNever ) ) {
            _options.repeatsNever = "Never";
        }

        if ( !isDefined( _options.repeatsEveryDayText ) ) {
            _options.repeatsEveryDayText = "Every Day";
        }

        if ( !isDefined( _options.repeatsEveryWeekText ) ) {
            _options.repeatsEveryWeekText = "Every Week";
        }

        if ( !isDefined( _options.repeatsEveryMonthText ) ) {
            _options.repeatsEveryMonthText = "Every Month";
        }

        if ( !isDefined( _options.repeatsEveryYearText ) ) {
            _options.repeatsEveryYearText = "Every Year";
        }

        if ( !isDefined( _options.selectDaysToExcludeTitle ) ) {
            _options.selectDaysToExcludeTitle = "Select Days To Exclude";
        }

        if ( !isDefined( _options.moreText ) ) {
            _options.moreText = "More";
        }

        if ( !isDefined( _options.holidays ) ) {
            _options.holidays = [];
        }

        if ( _initialized ) {
            _initialized = false;

            build( _currentDate, true );
        }
    };

    
    /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     * Initialize Calendar.js
     * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     */

    ( function ( documentObject, windowObject ) {
        _document = documentObject;
        _window = windowObject;
        _elementID = id;

        _this.setOptions( options );

        build( startDateTime, true );

    } ) ( document, window );
}