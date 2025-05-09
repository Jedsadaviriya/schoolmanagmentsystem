(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/google-style-calendar.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "calendar": "google-style-calendar-module__2buxAG__calendar",
  "calendarControls": "google-style-calendar-module__2buxAG__calendarControls",
  "calendarDay": "google-style-calendar-module__2buxAG__calendarDay",
  "calendarGrid": "google-style-calendar-module__2buxAG__calendarGrid",
  "calendarHeader": "google-style-calendar-module__2buxAG__calendarHeader",
  "calendarTitle": "google-style-calendar-module__2buxAG__calendarTitle",
  "cancelButton": "google-style-calendar-module__2buxAG__cancelButton",
  "closeButton": "google-style-calendar-module__2buxAG__closeButton",
  "confirmActions": "google-style-calendar-module__2buxAG__confirmActions",
  "confirmButton": "google-style-calendar-module__2buxAG__confirmButton",
  "confirmModal": "google-style-calendar-module__2buxAG__confirmModal",
  "currentMonth": "google-style-calendar-module__2buxAG__currentMonth",
  "dayEvents": "google-style-calendar-module__2buxAG__dayEvents",
  "dayNumber": "google-style-calendar-module__2buxAG__dayNumber",
  "deleteButton": "google-style-calendar-module__2buxAG__deleteButton",
  "errorNotification": "google-style-calendar-module__2buxAG__errorNotification",
  "eventForm": "google-style-calendar-module__2buxAG__eventForm",
  "eventIndicator": "google-style-calendar-module__2buxAG__eventIndicator",
  "formActions": "google-style-calendar-module__2buxAG__formActions",
  "formGroup": "google-style-calendar-module__2buxAG__formGroup",
  "formInput": "google-style-calendar-module__2buxAG__formInput",
  "formTextarea": "google-style-calendar-module__2buxAG__formTextarea",
  "modal": "google-style-calendar-module__2buxAG__modal",
  "modalBackdrop": "google-style-calendar-module__2buxAG__modalBackdrop",
  "modalHeader": "google-style-calendar-module__2buxAG__modalHeader",
  "moreEvents": "google-style-calendar-module__2buxAG__moreEvents",
  "navButton": "google-style-calendar-module__2buxAG__navButton",
  "notification": "google-style-calendar-module__2buxAG__notification",
  "otherMonth": "google-style-calendar-module__2buxAG__otherMonth",
  "saveButton": "google-style-calendar-module__2buxAG__saveButton",
  "slideIn": "google-style-calendar-module__2buxAG__slideIn",
  "successNotification": "google-style-calendar-module__2buxAG__successNotification",
  "today": "google-style-calendar-module__2buxAG__today",
  "todayButton": "google-style-calendar-module__2buxAG__todayButton",
  "weekDayHeader": "google-style-calendar-module__2buxAG__weekDayHeader",
});
}}),
"[project]/src/components/google-style-calendar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GoogleStyleCalendar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/google-style-calendar.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function GoogleStyleCalendar({ moduleId, initialEvents = [] }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialEvents);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedEvent, setSelectedEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [eventForm, setEventForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        date: "",
        description: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmDelete, setConfirmDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Update events when initialEvents changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleStyleCalendar.useEffect": ()=>{
            setEvents(initialEvents);
        }
    }["GoogleStyleCalendar.useEffect"], [
        initialEvents
    ]);
    // Get month details
    const getMonthDetails = ()=>{
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        // First day of the month
        const firstDay = new Date(year, month, 1);
        // Last day of the month
        const lastDay = new Date(year, month + 1, 0);
        // Day of the week for the first day (0 = Sunday, 6 = Saturday)
        const firstDayOfWeek = firstDay.getDay();
        // Total days in month
        const daysInMonth = lastDay.getDate();
        // Previous month's days to show
        const prevMonthDays = [];
        if (firstDayOfWeek > 0) {
            const prevMonthLastDay = new Date(year, month, 0).getDate();
            for(let i = prevMonthLastDay - firstDayOfWeek + 1; i <= prevMonthLastDay; i++){
                prevMonthDays.push({
                    date: new Date(year, month - 1, i),
                    isCurrentMonth: false
                });
            }
        }
        // Current month's days
        const currentMonthDays = [];
        for(let i = 1; i <= daysInMonth; i++){
            currentMonthDays.push({
                date: new Date(year, month, i),
                isCurrentMonth: true
            });
        }
        // Next month's days to show
        const nextMonthDays = [];
        const totalDaysShown = prevMonthDays.length + currentMonthDays.length;
        const remainingDays = 42 - totalDaysShown; // 6 weeks * 7 days = 42
        for(let i = 1; i <= remainingDays; i++){
            nextMonthDays.push({
                date: new Date(year, month + 1, i),
                isCurrentMonth: false
            });
        }
        return [
            ...prevMonthDays,
            ...currentMonthDays,
            ...nextMonthDays
        ];
    };
    // Navigate to previous month
    const goToPrevMonth = ()=>{
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };
    // Navigate to next month
    const goToNextMonth = ()=>{
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };
    // Navigate to today
    const goToToday = ()=>{
        setCurrentDate(new Date());
    };
    // Format date for display
    const formatDate = (date)=>{
        return date.toLocaleDateString("de-DE", {
            weekday: "short",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    };
    // Get month and year for header
    const getMonthYearHeader = ()=>{
        return currentDate.toLocaleDateString("de-DE", {
            month: "long",
            year: "numeric"
        });
    };
    // Check if a date has events
    const getEventsForDate = (date)=>{
        return events.filter((event)=>{
            const eventDate = new Date(event.date);
            return eventDate.getDate() === date.getDate() && eventDate.getMonth() === date.getMonth() && eventDate.getFullYear() === date.getFullYear();
        });
    };
    // Handle day click
    const handleDayClick = (day)=>{
        setSelectedDate(day.date);
        setEventForm({
            title: "",
            date: day.date.toISOString().split("T")[0],
            description: ""
        });
        setSelectedEvent(null);
        setShowModal(true);
    };
    // Handle event click
    const handleEventClick = (e, event)=>{
        e.stopPropagation(); // Prevent triggering the day click
        setSelectedEvent(event);
        setEventForm({
            title: event.title,
            date: new Date(event.date).toISOString().split("T")[0],
            description: event.description || ""
        });
        setShowModal(true);
    };
    // Handle input change in form
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setEventForm((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    // Close modal
    const closeModal = ()=>{
        setShowModal(false);
        setSelectedEvent(null);
        setSelectedDate(null);
    };
    // Show notification
    const showNotification = (message, type = "success")=>{
        setNotification({
            message,
            type
        });
        setTimeout(()=>setNotification(null), 3000);
    };
    // Save event
    const saveEvent = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const url = selectedEvent ? `/api/modules/${moduleId}/events/${selectedEvent._id}` : `/api/modules/${moduleId}/events`;
            const method = selectedEvent ? "PUT" : "POST";
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(eventForm)
            });
            const data = await response.json();
            if (data.success) {
                showNotification(selectedEvent ? "Termin aktualisiert" : "Termin erstellt");
                // Refresh the page to get updated events
                router.refresh();
                // Close the modal
                closeModal();
            } else {
                showNotification(data.error || "Ein Fehler ist aufgetreten", "error");
            }
        } catch (error) {
            console.error("Error saving event:", error);
            showNotification("Ein Fehler ist aufgetreten", "error");
        } finally{
            setIsSubmitting(false);
        }
    };
    // Ask for delete confirmation
    const confirmDeleteEvent = (e)=>{
        e.stopPropagation();
        if (!selectedEvent) return;
        setConfirmDelete(selectedEvent._id);
    };
    // Delete event
    const deleteEvent = async ()=>{
        if (!confirmDelete) return;
        try {
            const response = await fetch(`/api/modules/${moduleId}/events/${confirmDelete}`, {
                method: "DELETE"
            });
            const data = await response.json();
            if (data.success) {
                showNotification("Termin gelöscht");
                // Refresh the page to get updated events
                router.refresh();
                // Close the modal
                closeModal();
            } else {
                showNotification(data.error || "Ein Fehler ist aufgetreten", "error");
            }
        } catch (error) {
            console.error("Error deleting event:", error);
            showNotification("Ein Fehler ist aufgetreten", "error");
        } finally{
            setConfirmDelete(null);
        }
    };
    // Cancel delete
    const cancelDelete = ()=>{
        setConfirmDelete(null);
    };
    // Get the days of the week
    const weekDays = [
        "So",
        "Mo",
        "Di",
        "Mi",
        "Do",
        "Fr",
        "Sa"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarControls,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: goToPrevMonth,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: "<"
                            }, void 0, false, {
                                fileName: "[project]/src/components/google-style-calendar.jsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarTitle,
                                children: getMonthYearHeader()
                            }, void 0, false, {
                                fileName: "[project]/src/components/google-style-calendar.jsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: goToNextMonth,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                                children: ">"
                            }, void 0, false, {
                                fileName: "[project]/src/components/google-style-calendar.jsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/google-style-calendar.jsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToToday,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].todayButton,
                        children: "Heute"
                    }, void 0, false, {
                        fileName: "[project]/src/components/google-style-calendar.jsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/google-style-calendar.jsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarGrid,
                children: [
                    weekDays.map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].weekDayHeader,
                            children: day
                        }, index, false, {
                            fileName: "[project]/src/components/google-style-calendar.jsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this)),
                    getMonthDetails().map((day, index)=>{
                        const dayEvents = getEventsForDate(day.date);
                        const isToday = day.date.getDate() === new Date().getDate() && day.date.getMonth() === new Date().getMonth() && day.date.getFullYear() === new Date().getFullYear();
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendarDay} ${day.isCurrentMonth ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].currentMonth : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].otherMonth} ${isToday ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].today : ""}`,
                            onClick: ()=>handleDayClick(day),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dayNumber,
                                    children: day.date.getDate()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/google-style-calendar.jsx",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dayEvents,
                                    children: [
                                        dayEvents.slice(0, 3).map((event, eventIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventIndicator,
                                                onClick: (e)=>handleEventClick(e, event),
                                                children: event.title
                                            }, eventIndex, false, {
                                                fileName: "[project]/src/components/google-style-calendar.jsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this)),
                                        dayEvents.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].moreEvents,
                                            children: [
                                                "+",
                                                dayEvents.length - 3,
                                                " mehr"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/google-style-calendar.jsx",
                                            lineNumber: 319,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/google-style-calendar.jsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/google-style-calendar.jsx",
                            lineNumber: 298,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/google-style-calendar.jsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalBackdrop,
                onClick: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: selectedEvent ? "Termin bearbeiten" : "Neuer Termin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/google-style-calendar.jsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                                    onClick: closeModal,
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/google-style-calendar.jsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/google-style-calendar.jsx",
                            lineNumber: 333,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: saveEvent,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventForm,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "title",
                                            children: "Titel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/google-style-calendar.jsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "title",
                                            name: "title",
                                            value: eventForm.title,
                                            onChange: handleInputChange,
                                            required: true,
                                            placeholder: "Terminbezeichnung",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formInput
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/google-style-calendar.jsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/google-style-calendar.jsx",
                                    lineNumber: 341,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "date",
                                            children: "Datum"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/google-style-calendar.jsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            id: "date",
                                            name: "date",
                                            value: eventForm.date,
                                            onChange: handleInputChange,
                                            required: true,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formInput
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/google-style-calendar.jsx",
                                            lineNumber: 357,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/google-style-calendar.jsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "description",
                                            children: "Beschreibung"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/google-style-calendar.jsx",
                                            lineNumber: 369,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "description",
                                            name: "description",
                                            value: eventForm.description,
                                            onChange: handleInputChange,
                                            rows: "3",
                                            placeholder: "Beschreibung hinzufügen (optional)",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formTextarea
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/google-style-calendar.jsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/google-style-calendar.jsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formActions,
                                    children: [
                                        selectedEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: confirmDeleteEvent,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton,
                                            disabled: isSubmitting,
                                            children: "Löschen"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/google-style-calendar.jsx",
                                            lineNumber: 383,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveButton,
                                            disabled: isSubmitting,
                                            children: isSubmitting ? "Wird gespeichert..." : selectedEvent ? "Aktualisieren" : "Speichern"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/google-style-calendar.jsx",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/google-style-calendar.jsx",
                                    lineNumber: 381,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/google-style-calendar.jsx",
                            lineNumber: 340,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/google-style-calendar.jsx",
                    lineNumber: 332,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/google-style-calendar.jsx",
                lineNumber: 331,
                columnNumber: 9
            }, this),
            confirmDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalBackdrop,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmModal,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Termin löschen"
                        }, void 0, false, {
                            fileName: "[project]/src/components/google-style-calendar.jsx",
                            lineNumber: 413,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Möchten Sie diesen Termin wirklich löschen?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/google-style-calendar.jsx",
                            lineNumber: 414,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                    onClick: cancelDelete,
                                    children: "Abbrechen"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/google-style-calendar.jsx",
                                    lineNumber: 416,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmButton,
                                    onClick: deleteEvent,
                                    children: "Löschen"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/google-style-calendar.jsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/google-style-calendar.jsx",
                            lineNumber: 415,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/google-style-calendar.jsx",
                    lineNumber: 412,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/google-style-calendar.jsx",
                lineNumber: 411,
                columnNumber: 9
            }, this),
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notification} ${notification.type === "error" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorNotification : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$google$2d$style$2d$calendar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successNotification}`,
                children: notification.message
            }, void 0, false, {
                fileName: "[project]/src/components/google-style-calendar.jsx",
                lineNumber: 429,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/google-style-calendar.jsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
_s(GoogleStyleCalendar, "uNJbtZegYSYee2Gr6cTkjXTQJmk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GoogleStyleCalendar;
var _c;
__turbopack_context__.k.register(_c, "GoogleStyleCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_74923a2e._.js.map